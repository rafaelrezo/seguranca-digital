# TLS com sockets: onde ficam as chaves e os certificados?

Você já conhece a troca de mensagens entre cliente e servidor TCP. Agora, os mesmos papéis usarão **TLS 1.3**: o cliente confere a identidade do servidor antes de transmitir três mensagens pela mesma conexão.

O servidor responderá a um texto sobre um documento e a outro sobre parâmetros de temperatura. São dados artificiais: nenhum contrato é assinado e nenhum equipamento é acionado. A pergunta é comum às duas áreas: **com quem estou falando e o que permite confiar nessa conexão?**

**Tempo estimado:** 40–50 minutos, com os arquivos preparados. **Recursos:** dois terminais no mesmo Linux ou Ubuntu/WSL, Python 3 com `ssl` e TLS 1.3, OpenSSL e editor de texto. Não é necessário instalar biblioteca Python adicional.

**Objetivos de aprendizagem**

1. Localizar a privada do servidor, seu certificado e a CA aceita pelo cliente, explicando a função de cada arquivo.
2. Estabelecer uma conexão TLS e interpretar certificado recebido, versão, cifra negociada e respostas.
3. Prever e explicar a recusa por nome incorreto ou por uma CA que não sustenta a cadeia recebida.

## Chaves: separar identidade de proteção das mensagens {#chaves}

- A **privada do servidor** permanece local e participa da prova de controle da chave durante a negociação.
- O **certificado do servidor** acompanha essa prova: contém a pública e o vínculo com um nome, assinado pela autoridade emissora.
- O cliente já precisa aceitar uma **autoridade certificadora**, ou **CA**, para verificar a emissão.
- As **chaves de tráfego** são derivadas pelo TLS e mantidas internamente pela biblioteca. Não são os arquivos de certificado.

| Elemento | Local e função nesta prática |
|---|---|
| `ca-chave.pem` | Privada da emissora; usada somente na preparação para assinar o certificado do servidor. |
| `ca.pem` | Certificado público da CA; o cliente o aceita explicitamente como referência de confiança. |
| `servidor-chave.pem` | Privada carregada somente pelo servidor para a prova na conexão. Não é transmitida. |
| `servidor.pem` | Certificado apresentado pelo servidor: pública, nome, prazo, finalidade e assinatura da CA. |
| Material temporário do acordo | Gerenciado pela biblioteca nos dois processos; a troca de partes públicas participa da derivação de segredos. |
| Chaves simétricas de tráfego | Estado interno da biblioteca; protegem os registros com separação por direção. |

**CA não é uma senha:** o arquivo `ca.pem` é público. A confiança depende de obter a referência correta por um meio previamente confiável, não de manter esse certificado escondido. Receber uma CA de um servidor desconhecido não é motivo suficiente para aceitá-la.

Os arquivos ficam na mesma pasta por conveniência do laboratório. Seus papéis continuam separados: o servidor não carrega a privada da CA; o cliente não carrega a privada do servidor.

```text
Antes da conexão:
privada da CA → assina certificado do servidor
CA pública confiável → previamente disponível ao cliente

Durante a conexão:
certificado + prova do servidor → verificados pelo cliente
acordo autenticado → derivação de chaves de tráfego
mensagem → TLS protege → TCP transporta → TLS verifica e abre → mensagem
```

As duas primeiras setas representam emissão e preparação da confiança. As seguintes resumem as funções do handshake e do transporte; não enumeram todas as mensagens do protocolo.

**A privada do certificado não cifra cada mensagem da aplicação.** Na conexão nova com certificado deste exercício, ela participa de uma assinatura da negociação. O acordo e a derivação produzem o material que protege o tráfego. Esse papel difere de transportar uma chave AES cifrada com RSA. ([TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446.html#section-2).)

## Arquivos: baixar e preparar uma vez {#preparacao}

Baixe o [pacote completo TLS com sockets](../assets/tls-sockets/tls-sockets.zip). Ele contém `cliente.py`, `servidor.py`, `preparar.sh` e um guia curto. As chaves são geradas na sua máquina; não vêm no download.

No terminal Linux/Ubuntu, use uma pasta própria. `mkdir -p` cria a pasta; `cd` entra nela; `curl` baixa o ZIP; `python3 -m zipfile` extrai a pasta `tls-sockets`.

```bash
mkdir -p ~/seguranca-digital-tls
cd ~/seguranca-digital-tls
curl --fail --location https://rafaelrezo.github.io/seguranca-digital/assets/tls-sockets/tls-sockets.zip -o tls-sockets.zip
python3 -m zipfile -e tls-sockets.zip .
cd tls-sockets
pwd
ls
```

Se a pasta já existir, use outra pasta de trabalho para preservar sua cópia. Como alternativa ao `curl`, baixe o ZIP pelo link e extraia pelo gerenciador de arquivos; abra o terminal dentro da pasta `tls-sockets` extraída.

**Estado esperado:** `ls` mostra os três arquivos-fonte e `LEIA-ME.md`. Ambos os terminais devem usar a mesma pasta e o mesmo Linux/WSL. Não coloque o servidor no WSL e o cliente no Windows neste percurso.

Confira as ferramentas e gere os materiais descartáveis:

```bash
python3 --version
openssl version
bash preparar.sh
```

O script cria `gerados`, gera os pares, cria o pedido do servidor e emite o certificado com prazo de dois dias. Também cria uma CA independente para a contraprova. `umask 077` restringe as permissões dos arquivos novos; nenhuma CA é instalada no sistema.

**Pare:** confirme a mensagem de emissão antes de iniciar o servidor. Se `gerados` já existir, o script recusa sobrescrever: use uma cópia nova para reemitir. Não envie essa pasta, privadas ou segredos para entregas, repositórios ou IA.

## Código: localizar a configuração antes de executar {#codigo}

Abra os arquivos prontos no editor. Você não precisa montá-los copiando trechos. Localize primeiro três operações:

| Operação | O que informa ao TLS |
|---|---|
| `load_cert_chain` no servidor | Caminhos do certificado e da privada correspondente. |
| `load_verify_locations` no cliente | Qual CA o cliente aceita para verificar a emissão. |
| `wrap_socket` com `server_hostname` | Iniciar TLS e, no cliente, verificar também o nome esperado. |

Depois do handshake, o programa usa `sendall` para transmitir e leitura por linhas para receber. Uma nova linha delimita cada mensagem; a leitura aceita partes recebidas pelo TCP até completar a linha. Há limite de tamanho e timeout para evitar uma espera indefinida.

O módulo `ssl` executa o protocolo e protege os registros; o programa escolhe a identidade e as condições de confiança. ([Python `ssl`](https://docs.python.org/3/library/ssl.html).)

Os [arquivos completos estão abaixo](#fontes), separados dos comandos de execução.

## Certificado: ler o que será apresentado {#certificado}

Na pasta da prática, inspecione o certificado sem abrir a privada. `x509` lê o certificado; `-noout` evita imprimir todo o PEM; as opções seguintes escolhem os campos:

```bash
openssl x509 -in gerados/servidor.pem -noout -subject -issuer -dates -ext subjectAltName,extendedKeyUsage
```

| Campo | Interpretação |
|---|---|
| `subject` e `issuer` | Titular declarado e emissor. |
| `notBefore` e `notAfter` | Início e fim da validade. |
| `subjectAltName` ou SAN | Nome coberto: `servidor.aula.invalid`. |
| `extendedKeyUsage` | Finalidade de autenticação de servidor, `serverAuth`. |

Essa leitura mostra campos. A conexão ainda precisa verificar cadeia, nome e prova de controle da privada. O nome `.invalid` é fictício: será comparado ao certificado, sem consulta DNS.

**Preveja:** o cliente precisa receber `servidor-chave.pem` para verificar a conexão? Localize a configuração no código antes de responder.

## Conexão: enviar três mensagens pelo mesmo canal {#conexao}

Abra os dois terminais antes de começar. Em ambos, entre em `~/seguranca-digital-tls/tls-sockets`, ou na pasta escolhida ao extrair o ZIP.

**Terminal 1 — servidor:**

```bash
python3 servidor.py
```

Espere `ESCUTANDO 127.0.0.1:8443`. O endereço limita a escuta à máquina local; a porta identifica o serviço de teste. O servidor aguarda uma conexão por até 60 segundos.

**Terminal 2 — cliente:**

```bash
python3 cliente.py
```

O cliente conecta a `127.0.0.1`, aceita `ca.pem` e exige o nome `servidor.aula.invalid`. Só envia dados da aplicação depois de concluir o handshake com sucesso.

**Resultado esperado T1:** certificado recebido com o SAN esperado, `TLSv1.3`, uma cifra negociada e três respostas:

```text
RESPOSTA: eco: Documento de teste: valor=1000
RESPOSTA: eco: Parametros de teste: limite=60
RESPOSTA: eco: fim
```

O servidor exibe `RECEBIDO` para cada mensagem e encerra após a terceira. Esses textos aparecem na aplicação depois da abertura dos registros TLS; **não são uma captura de rede mostrando texto em claro**.

**Registre:** `CA escolhida → nome esperado → versão/cifra → respostas → fonte da observação`. Pare e localize qual certificado veio do servidor e qual referência já estava no cliente.

**Limite:** a cifra exibida identifica a proteção simétrica e o hash da suíte TLS 1.3. Ela não informa sozinha o grupo do acordo nem o algoritmo de assinatura. O programa não exibe as chaves de sessão. Também não há certificado de cliente: o servidor não autenticou uma pessoa.

## Recusas: mudar uma condição antes de enviar dados {#recusas}

O servidor atende **uma conexão por execução**. Reinicie `python3 servidor.py` no terminal 1 antes de cada teste abaixo. Preveja aceitar/recusar e justifique antes de executar o cliente.

### Nome diferente, mesma CA

No terminal 2:

```bash
python3 cliente.py --nome outro.aula.invalid
```

**T2 esperado:** `CERTIFICADO RECUSADO` com motivo de nome incompatível. O certificado pode continuar assinado pela CA aceita, mas seu SAN não cobre o nome exigido.

Não devem aparecer respostas nem mensagens `RECEBIDO` da aplicação no servidor. O TCP chegou a conectar; a recusa ocorre no handshake, antes dos dados de aplicação. Pare e explique o que mudou em relação a T1.

### CA independente, mesmo nome

Reinicie o servidor. No terminal 2:

```bash
python3 cliente.py --ca gerados/outra-ca.pem
```

**T3 esperado:** `CERTIFICADO RECUSADO`, com motivo como `unable to get local issuer certificate`. O arquivo da outra CA é válido e existente, mas não sustenta a emissão do certificado recebido.

Novamente, não há mensagens da aplicação. O servidor pode mostrar um alerta TLS genérico; leia no cliente o motivo específico da verificação. Não desative a validação para obter sucesso.

## Evidências: interpretar sem ampliar a conclusão {#evidencias}

| Comparação | Decisão sustentada | O que não demonstra |
|---|---|---|
| T1: CA aceita e nome correto | Aceitar sob as condições verificadas; trocar mensagens pelo canal. | Não demonstra login, revogação ou autorização de qualquer ação. |
| T2: nome incompatível | Recusar o nome apresentado. | Não prova que a assinatura da CA seja inválida. |
| T3: outra CA | Recusar por falta de cadeia até uma referência aceita. | Não é erro de senha nem de caminho. |

T1 não realiza login, consulta de revogação, autorização de uma operação ou VPN. O texto de parâmetros é somente devolvido pelo servidor: autenticidade do canal não comprova que um valor seja seguro para um processo físico.

**Comparação opcional:** o cliente imprime o SHA-256 do certificado recebido. Compare com o arquivo local:

```bash
openssl x509 -in gerados/servidor.pem -noout -fingerprint -sha256
```

Ignore maiúsculas e separadores ao comparar os bytes do digest. A coincidência liga o arquivo inspecionado ao certificado recebido; não mostra uma chave de tráfego.

## Diagnóstico e alternativa {#diagnostico}

| Sintoma | Ação |
|---|---|
| Arquivo ou pasta ausente | Conferir `pwd`, `ls` e se o ZIP foi extraído inteiro. |
| `Connection refused` | Iniciar o servidor no mesmo Linux/WSL antes do cliente. |
| Timeout do servidor | Reiniciar e executar o cliente dentro dos 60 segundos. |
| Porta ocupada | Encerrar a execução anterior ou usar `--porta 9443` nos dois programas. |
| Certificado vencido | Preparar uma cópia nova para reemitir; não desabilitar checagem de prazo. |
| `gerados` já existe | Usar pasta nova, preservando a anterior. |
| Python sem `ssl` ou sem TLS 1.3 | Acompanhar uma execução disponível ou usar os dados abaixo. |

Se não puder executar, compare estes **resultados fornecidos**: T1 negocia TLS 1.3 e recebe três ecos; T2 recusa por nome; T3 recusa por emissor não confiável. Use as mesmas perguntas e identifique essa fonte no registro. Falta de ferramenta ou arquivo não é recusa criptográfica.

## Atividade {#atividade}

Use T1–T3 como percurso de socket para a parte TLS de **C3** na [atividade única A14–A17](../atividades/A14-A18-criptografia-confianca.md#atividade). Não é uma entrega adicional. O formato continua sendo o PDF e o prazo definidos na atividade compartilhada.

Registre uma conexão aceita e as duas recusas com motivo, fonte e limite. Acrescente o mapa `privada do servidor → certificado apresentado → CA aceita pelo cliente → chaves de tráfego internas`. Distinga a assinatura da CA no certificado da prova do servidor durante o handshake.

Esse percurso substitui a execução de transporte da oficina OpenSSL L1–L3; os [conceitos do handshake na A16](../aulas/A16-tls-ciclo-de-chaves.md#tls) continuam necessários para explicar `CertificateVerify` e `Finished`. Assinatura, hash, HMAC e senhas continuam nos registros próprios, sem tarefas duplicadas.

**Concluído:** você explica onde cada elemento está, identifica a condição alterada e justifica a decisão com a saída observada ou fornecida. Só mostrar as janelas funcionando não atende ao critério.

## Encerramento e ponte para VPN {#encerramento}

Após cada conexão, os programas encerram. Se o servidor ainda estiver esperando, use `Ctrl+C` e confirme que o terminal retornou ao prompt. Preserve somente registros sem segredos; depois da prática, descarte a cópia de `gerados` pelo gerenciador de arquivos, conferindo o caminho. Não remova materiais de outras aulas.

Na [A17](../aulas/A17-openvpn-ec2.md), reabra três decisões: qual CA cada lado aceita, qual identidade é esperada e onde fica cada privada. O OpenVPN acrescenta o transporte de pacotes IP e a configuração de acesso. Um socket TLS protege esta comunicação da aplicação; não cria sozinho uma VPN.

**Revisão rápida**

1. Por que o servidor precisa da privada, enquanto o cliente usa a pública contida no certificado?
2. Por que uma cadeia aceita não resolve o erro de nome de T2?
3. Por que as chaves que protegem as mensagens não são o arquivo `servidor-chave.pem`?

## Fontes completas para leitura {#fontes}

Downloads individuais: [servidor.py](../assets/tls-sockets/servidor.py), [cliente.py](../assets/tls-sockets/cliente.py), [preparar.sh](../assets/tls-sockets/preparar.sh). Mantenha os três na mesma pasta. O ZIP é o percurso recomendado.

??? note "Ler preparar.sh"

    ```bash
    #!/usr/bin/env bash
    # Preparação local, anterior à execução de cliente/servidor.
    set -euo pipefail
    cd -- "$(dirname -- "$0")"
    if [[ -e gerados ]]; then
        echo 'A pasta gerados já existe. Use uma cópia nova do protótipo para reemitir.' >&2
        exit 1
    fi
    umask 077
    mkdir gerados
    cd gerados

    # A CA é a emissora local. Sua privada NÃO é carregada pelo servidor TLS.
    openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out ca-chave.pem
    openssl req -new -x509 -key ca-chave.pem -out ca.pem -days 2 \
        -subj '/CN=CA da aula TLS' \
        -addext 'basicConstraints=critical,CA:TRUE' \
        -addext 'keyUsage=critical,keyCertSign,cRLSign'

    # Outro par, pertencente ao servidor. O pedido contém sua pública.
    openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out servidor-chave.pem
    openssl req -new -key servidor-chave.pem -out servidor.csr \
        -subj '/CN=servidor.aula.invalid'
    printf '%s\n' \
        'basicConstraints=critical,CA:FALSE' \
        'keyUsage=critical,digitalSignature' \
        'extendedKeyUsage=serverAuth' \
        'subjectAltName=DNS:servidor.aula.invalid' > servidor.ext
    openssl x509 -req -in servidor.csr -CA ca.pem -CAkey ca-chave.pem \
        -CAcreateserial -out servidor.pem -days 2 -sha256 -extfile servidor.ext

    # Uma CA independente para a contraprova, com arquivo válido e existente.
    openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out outra-ca-chave.pem
    openssl req -new -x509 -key outra-ca-chave.pem -out outra-ca.pem -days 2 \
        -subj '/CN=Outra CA da aula' \
        -addext 'basicConstraints=critical,CA:TRUE' \
        -addext 'keyUsage=critical,keyCertSign,cRLSign'
    echo 'Materiais locais emitidos; prazo de dois dias. Nenhuma CA instalada no sistema.'
    ```

??? note "Ler servidor.py"

    ```python
    """Servidor de eco TLS: uma conexão, mensagens por linha, somente loopback."""
    import argparse
    from pathlib import Path
    import socket
    import ssl


    def main():
        parser = argparse.ArgumentParser(description=__doc__)
        parser.add_argument('--porta', type=int, default=8443)
        args = parser.parse_args()
        pasta = Path(__file__).resolve().parent / 'gerados'

        # A biblioteca executa o protocolo; o programa escolhe identidade e política.
        contexto = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        contexto.minimum_version = ssl.TLSVersion.TLSv1_3
        contexto.maximum_version = ssl.TLSVersion.TLSv1_3
        contexto.load_cert_chain(pasta / 'servidor.pem', pasta / 'servidor-chave.pem')

        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as escuta:
            escuta.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            escuta.bind(('127.0.0.1', args.porta))
            escuta.listen(1)
            escuta.settimeout(60)
            print('CERTIFICADO: gerados/servidor.pem', flush=True)
            print('PRIVADA LOCAL: gerados/servidor-chave.pem', flush=True)
            print(f'ESCUTANDO 127.0.0.1:{escuta.getsockname()[1]}', flush=True)

            bruto, _ = escuta.accept()
            with bruto:
                bruto.settimeout(30)
                # Aqui ocorre o handshake, antes de receber texto da aplicação.
                with contexto.wrap_socket(bruto, server_side=True) as canal:
                    print(f'TLS: {canal.version()}; cifra: {canal.cipher()[0]}', flush=True)
                    print('Sem certificado de cliente: nenhuma pessoa autenticada.', flush=True)
                    # Nova linha delimita mensagens; readline lida com leituras parciais.
                    with canal.makefile('rb') as entrada:
                        for _ in range(3):
                            linha = entrada.readline(4097)
                            if not linha or len(linha) > 4096 or not linha.endswith(b'\n'):
                                raise ValueError('Mensagem ausente, longa ou sem delimitador.')
                            print('RECEBIDO:', linha.decode('utf-8').rstrip(), flush=True)
                            canal.sendall(b'eco: ' + linha)
        return 0


    if __name__ == '__main__':
        try:
            raise SystemExit(main())
        except ssl.SSLError as erro:
            print(f'CONEXAO TLS INTERROMPIDA: {erro}', flush=True)
            raise SystemExit(2)
        except (OSError, ValueError) as erro:
            print(f'ERRO OPERACIONAL: {erro}', flush=True)
            raise SystemExit(3)
    ```

??? note "Ler cliente.py"

    ```python
    """Cliente TLS: verifica CA e nome antes de enviar três mensagens artificiais."""
    import argparse
    import hashlib
    from pathlib import Path
    import socket
    import ssl


    def main():
        pasta = Path(__file__).resolve().parent / 'gerados'
        parser = argparse.ArgumentParser(description=__doc__)
        parser.add_argument('--porta', type=int, default=8443)
        parser.add_argument('--nome', default='servidor.aula.invalid')
        parser.add_argument('--ca', type=Path, default=pasta / 'ca.pem')
        args = parser.parse_args()

        # PROTOCOL_TLS_CLIENT exige certificado válido e verificação do nome.
        contexto = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
        contexto.minimum_version = ssl.TLSVersion.TLSv1_3
        contexto.maximum_version = ssl.TLSVersion.TLSv1_3
        contexto.load_verify_locations(cafile=args.ca)
        print(f'CA ACEITA LOCALMENTE: {args.ca.name}', flush=True)
        print(f'NOME ESPERADO: {args.nome}', flush=True)

        # O endereço é local. O nome abaixo é verificado, sem consulta DNS.
        with socket.create_connection(('127.0.0.1', args.porta), timeout=10) as bruto:
            with contexto.wrap_socket(bruto, server_hostname=args.nome) as canal:
                certificado = canal.getpeercert()
                print('CERTIFICADO RECEBIDO, SAN:', certificado.get('subjectAltName'), flush=True)
                print('EMISSOR:', certificado.get('issuer'), flush=True)
                der = canal.getpeercert(binary_form=True)
                print('SHA256 DO CERTIFICADO:', hashlib.sha256(der).hexdigest(), flush=True)
                print(f'TLS: {canal.version()}; cifra: {canal.cipher()[0]}', flush=True)
                print('CA E NOME VERIFICADOS; enviando dados da aplicacao.', flush=True)
                with canal.makefile('rb') as entrada:
                    for texto in ('Documento de teste: valor=1000', 'Parametros de teste: limite=60', 'fim'):
                        canal.sendall((texto + '\n').encode('utf-8'))
                        resposta = entrada.readline(4097)
                        if not resposta or len(resposta) > 4096 or not resposta.endswith(b'\n'):
                            raise ValueError('Resposta ausente, longa ou sem delimitador.')
                        print('RESPOSTA:', resposta.decode('utf-8').rstrip(), flush=True)
        return 0


    if __name__ == '__main__':
        try:
            raise SystemExit(main())
        except ssl.SSLCertVerificationError as erro:
            print(f'CERTIFICADO RECUSADO: {erro.verify_message}', flush=True)
            raise SystemExit(2)
        except ssl.SSLError as erro:
            print(f'CONEXAO TLS INTERROMPIDA: {erro}', flush=True)
            raise SystemExit(2)
        except (OSError, ValueError) as erro:
            print(f'ERRO OPERACIONAL: {erro}', flush=True)
            raise SystemExit(3)
    ```


## Referências

- [Python — ssl e configuração de contextos](https://docs.python.org/3/library/ssl.html).
- [Python — sockets, fluxo de bytes e mensagens](https://docs.python.org/3/howto/sockets.html).
- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446.html).
- [OpenSSL — inspeção X.509](https://docs.openssl.org/3.5/man1/openssl-x509/).
