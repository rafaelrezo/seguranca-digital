# Protótipo docente — o socket conhecido, agora com TLS

**Edição estudantil autorizada para publicação em 20 out.:** [TLS com sockets](../../../docs/praticas/tls-sockets.md). Este arquivo preserva o planejamento exploratório anterior.

Exploração local de 20 out. 2026, fora do site. Python padrão + OpenSSL; sem pacote Python adicional. Não é a edição integral da aula. A integração entre A15/A16, o tempo e a atividade ainda precisam ser conciliados. Simétrica permanece concluída; sua função no TLS é aplicação do conhecimento, sem repetir a aula.

## O que a experiência torna concreto

O estudante conhece TCP segundo relato docente. Reutilizamos `socket`, conexão, envio e resposta; `ssl` acrescenta um canal TLS real. Não implementamos RSA, ECDH, AES ou um handshake próprio. São três mensagens fixas na mesma conexão, sem chat interativo, threads ou equipamentos reais.

| Elemento | Onde fica | O que faz |
|---|---|---|
| `ca-chave.pem` | Emissor local; usada apenas no preparo | Assina o certificado do servidor. Não é carregada por cliente/servidor. |
| `ca.pem` | Previamente aceito pelo cliente | Certificado público da CA, com sua pública; âncora para conferir a emissão. |
| `servidor-chave.pem` | Carregada somente pelo servidor | Privada ECDSA; prova seu controle durante o handshake. Não é transmitida. |
| `servidor.pem` | Carregado pelo servidor e recebido pelo cliente | Certificado que contém pública, nome, finalidade, prazo e assinatura da CA. Não contém a privada. |
| Material temporário do acordo | Gerenciado pela biblioteca nos dois processos | Participa do estabelecimento de segredos da conexão; partes públicas são trocadas, privadas permanecem locais. |
| Chaves simétricas de tráfego | Estado interno da biblioteca em cada processo | Derivadas para proteger registros, com separação por direção. Não são os arquivos PEM. |

Os arquivos estão juntos nesta máquina por conveniência do laboratório, mas têm papéis separados. Numa distribuição real, a privada da CA fica com o emissor, a privada do servidor com o servidor e somente a CA pública confiável vai previamente ao cliente. O cliente NÃO passa a confiar numa CA só porque o servidor a enviou.

```text
PREPARAÇÃO, antes da conexão:
CA privada → assina certificado do servidor
Cliente recebe a CA pública por um meio já confiável

CONEXÃO TLS:
Cliente (CA + nome esperado) ← certificado e prova do servidor
Biblioteca nos dois lados → acordo autenticado e derivação de chaves
Aplicação: mensagem → TLS protege → TCP transporta → TLS verifica/abre → mensagem
```

A primeira seta representa emissão; a segunda, apresentação e prova verificadas pelo cliente. O último fluxo descreve os dados depois de estabelecido o canal. É um mapa funcional, não a ordem completa das mensagens do handshake.

A privada do certificado assina a negociação; não cifra cada mensagem. Este protótipo usa TLS 1.3 novo, sem sessão anterior fornecida ao cliente e sem certificado de cliente. A saída da cifra negociada descreve a proteção simétrica e o hash da suíte; não identifica sozinha algoritmo de assinatura ou grupo do acordo. Não alegar que o programa mostra os bytes das chaves de sessão.

## Preparar antes do encontro

Copiar esta pasta inteira para uma pasta pessoal de laboratório. Manter `cliente.py`, `servidor.py` e `preparar.sh` juntos. Abrir o terminal na pasta copiada; todos os terminais devem pertencer ao mesmo Linux/WSL. Não misturar servidor no WSL com cliente no Windows neste percurso.

```bash
pwd
ls
python3 --version
openssl version
bash preparar.sh
```

`pwd` confirma a pasta; `ls` deve mostrar os três arquivos. `preparar.sh` gera as identidades descartáveis em `gerados`, sem instalar CA no sistema. Os comandos OpenSSL estão comentados no arquivo-fonte; mostrar suas três operações: gerar par, criar pedido e emitir certificado. A emissão vale dois dias. Se `gerados` já existir, o preparo recusa sobrescrita; usar uma cópia nova sem essa pasta para reemitir.

Não exigir digitação ou montagem dos programas. Abrir os arquivos prontos no editor, localizar as linhas indicadas abaixo e só depois executar os comandos. Não publicar privadas nem copiar `gerados` para o repositório ou para entregas.

## Primeiro localizar os arquivos, depois conectar

No editor:

- Em `servidor.py`, `load_cert_chain` recebe o certificado e a privada correspondente. A privada fica local.
- Em `cliente.py`, `load_verify_locations` recebe a CA aceita pelo cliente; `server_hostname` informa o nome esperado.
- `wrap_socket` executa o handshake. No cliente, o envio das mensagens só ocorre depois que essa chamada termina com sucesso.
- `sendall` e a leitura por linhas preservam a troca conhecida. A nova linha delimita mensagens; o tamanho é limitado e há timeout.

Mostrar o certificado sem abrir a privada:

```bash
openssl x509 -in gerados/servidor.pem -noout -subject -issuer -dates -ext subjectAltName,extendedKeyUsage
```

`subject`/`issuer` mostram titular/emissor; `dates` mostra prazo; SAN contém o nome aceito; `serverAuth` declara finalidade de servidor. Isso é inspeção de campos, não conexão ou prova isolada de confiança.

## Duas janelas: conexão aceita

**Terminal 1**, na pasta do protótipo:

```bash
python3 servidor.py
```

Esperar `ESCUTANDO 127.0.0.1:8443`. Esse endereço limita o serviço à própria máquina. O servidor espera uma conexão por até 60 segundos; preparar o segundo terminal antes de iniciar.

**Antes do cliente:** prever se ele tem a privada do servidor e de qual arquivo virá sua confiança. Ele tem somente a CA pública para essa verificação.

**Terminal 2**, na mesma pasta:

```bash
python3 cliente.py
```

Esperado: nome aceito, certificado recebido com SAN `servidor.aula.invalid`, TLS `TLSv1.3`, cifra negociada e três linhas `RESPOSTA: eco: ...`. O servidor registra as mensagens recebidas e encerra após a terceira. Esses textos são vistos pela aplicação depois da decifragem; não são captura de tráfego em claro.

Registrar `CA escolhida → nome esperado → TLS negociado → resposta`. Parar e responder: qual arquivo contém a privada? Qual certificado o cliente recebeu? Onde o código configurou a confiança?

Opcionalmente comparar a impressão digital SHA-256 recebida com a do arquivo do servidor:

```bash
openssl x509 -in gerados/servidor.pem -noout -fingerprint -sha256
```

As representações diferem em maiúsculas e separadores, mas os bytes do digest devem coincidir. Isso compara o certificado local ao recebido; o cliente já realizou a validação da cadeia e do nome. Não é medição de uma chave de sessão.

## Duas recusas: uma condição de cada vez

Reiniciar `python3 servidor.py` no terminal 1 **antes de cada cliente**, porque o programa atende uma conexão e termina. Pedir previsão e justificativa antes de executar cada comando no terminal 2.

**Mesma CA e servidor, outro nome esperado:**

```bash
python3 cliente.py --nome outro.aula.invalid
```

Esperado: `CERTIFICADO RECUSADO` com motivo de nome incompatível. Sem linhas `RESPOSTA` e sem `RECEBIDO` da aplicação no servidor. O nome `.invalid` é comparado ao certificado; a conexão TCP continua para `127.0.0.1`, sem DNS.

**Mesmo servidor e nome, CA independente:**

```bash
python3 cliente.py --ca gerados/outra-ca.pem
```

Esperado: `CERTIFICADO RECUSADO` por não encontrar emissor confiável. A outra CA é um arquivo válido, mas não emitiu o certificado recebido. Arquivo inexistente seria erro operacional, não evidência de recusa de confiança. O servidor pode mostrar um alerta genérico TLS; a causa da verificação é lida no cliente.

## O que observar e o que não concluir

| Resultado | Evidência real | Limite |
|---|---|---|
| Conexão aceita | Certificado recebido, versão/cifra e respostas | Não identifica uma pessoa cliente; não é login nem autorização. |
| Nome errado | Recusa antes de enviar dados da aplicação | Não significa que a assinatura da CA seja inválida. |
| CA errada | Recusa da cadeia antes de enviar dados | Não justifica desabilitar verificação. |
| Eco do parâmetro | Texto recebido e devolvido pela aplicação | Não executa ação industrial nem valida a segurança do valor. |

O experimento não captura rede, não imprime segredos de sessão, não testa revogação, mTLS, ataques ou VPN. O funcionamento do TLS é real; o mapa das chaves explica os estados internos definidos pelo protocolo. Inspecionar registros de rede ou exportar segredos fica fora do percurso mínimo.

## Recorte didático a avaliar

Hipótese de módulo de 40–50 minutos, não tempo aferido: mapa e leitura de três linhas do código (10), inspecionar/conectar (10–15), prever e testar recusas (15), explicar decisões (5–10). Preparação deve ocorrer antes. Para iniciantes, conduzir a primeira execução inteira; estudantes fluentes podem comparar o certificado recebido ao arquivo.

Integrar esse módulo exigirá substituir blocos da proposta anterior e alinhar A15/A16; não somar 50 minutos à aula pronta. Uma assinatura curta de arquivo pode permanecer para distinguir mensagem assinada e canal autenticado, mas precisa caber no tempo selecionado. Não criar nova entrega: selecionar evidências para C2/C3 após decidir a distribuição.

Se houver erro de porta, reiniciar o processo anterior ou usar `--porta 9443` nos dois programas. Se faltar `ssl`, Python/TLS 1.3 ou houver falha de preparo, acompanhar uma execução demonstrada; não classificar isso como recusa de certificado. Ctrl+C interrompe o servidor. Nenhum recurso de nuvem é criado. Descartar a cópia e suas privadas após a exploração; não remover certificados da A15 anterior, usados por outras práticas.

Fontes: [Python ssl](https://docs.python.org/3/library/ssl.html), [Python sockets](https://docs.python.org/3/howto/sockets.html), [TLS 1.3, RFC 8446](https://www.rfc-editor.org/rfc/rfc8446.html). Ver [validação local](validacao.md) para separar execução comprovada e expectativas.
