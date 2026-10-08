# A16 (provisória) — TLS, gestão de chaves, hash e senhas

O TLS usa as funções estudadas nas aulas anteriores para proteger uma conexão. A mesma proteção só permanece útil se as chaves puderem ser guardadas, trocadas e recuperadas com controle.

Primeiro veremos o canal e a gestão de suas chaves. No bloco final, compararemos hash, HMAC e verificação de senhas: mecanismos que conferem dados sem necessariamente cifrá-los.

**Tempo:** 100 minutos, com exposição e prática guiada intercaladas.

**Recursos:** página HTTPS do curso, WSL/Ubuntu com OpenSSL, VS Code e Python 3. O verificador de senhas usa a biblioteca padrão do Python. Os dados fornecidos substituem a conexão quando necessário. Não informe credenciais nem contorne avisos de certificado.

**Objetivos de aprendizagem**

1. Relacionar certificado, acordo e cifra autenticada no TLS, distinguindo canal de autorização.
2. Justificar troca, restrição e recuperação de chaves com casos permitidos e negados.
3. Diferenciar hash, HMAC e verificador de senha usando comandos e um programa Python.

## TLS 1.3: autenticação, chaves e tráfego {#tls}

**Uso real — enviar uma senha em um site:** ao fazer login por HTTPS, o navegador protege a requisição até o ponto que termina a conexão TLS. Ali, o programa autorizado recebe a senha para conferi-la.

HTTPS protege o percurso; o armazenamento da senha e a permissão para acessar dados continuam sendo responsabilidades da aplicação. ([Django: senhas e HTTPS](https://docs.djangoproject.com/en/5.2/topics/auth/passwords/).)

**HTTPS** é HTTP transportado sobre TLS. Antes de transmitir os dados da aplicação, cliente e servidor realizam uma negociação inicial chamada **handshake**. No fluxo usual com certificado de servidor, três etapas explicam sua função:

```text
nome solicitado + certificado/cadeia + prova da chave privada
                       ↓ autenticação do servidor
troca de material efêmero + derivação de chaves de tráfego
                       ↓
requisições e respostas HTTP protegidas por AEAD no canal TLS
                       ↓
aplicação decide se esta conta pode acessar este objeto
```

No [TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446), as partes negociam parâmetros e estabelecem material de chave. No fluxo com certificado, o servidor apresenta o certificado e prova o controle da chave privada ao assinar o contexto da negociação.

Após validar o certificado e o nome, o cliente pode associar essa prova ao servidor solicitado. As partes derivam **chaves de tráfego**, usadas para proteger os registros da conexão com cifra autenticada. A chave pública do certificado não cifra cada resposta HTTP. Este é o fluxo didático com certificado de servidor.

**Limite:** TLS protege dados em trânsito entre os pontos finais da conexão sob suas premissas; dados podem estar legíveis nos endpoints autorizados. Uma resposta `403` recebida por HTTPS indica que o canal foi estabelecido e a **aplicação recusou acesso**. Um `200` não prova, por si, que a aplicação autorizou corretamente cada objeto. Retome a pergunta de A04–A05: `identidade → ação → recurso` continua exigindo decisão do servidor de aplicação.

## Aplicação: aceitar ou recusar um certificado {#oficina}

**Quando esses campos são usados:** ao acessar um site, o cliente precisa conferir se a chave apresentada está vinculada ao nome solicitado e se o certificado pode ser usado naquele momento e finalidade. Um certificado vencido ou de outro nome impede essa aceitação, mesmo que a página tenha a aparência esperada.

Os cartões isolam essas condições; o comando seguinte examina a conexão real do curso.

**Pacote de teste:** nome solicitado `curso.exemplo.invalid`; data de análise: 6 out. 2026. O cartão B contém:

- SAN `curso.exemplo.invalid`, validade de 1 jan. 2026 a 1 jan. 2027 e uso `serverAuth`.
- Cadeia até raiz confiável, prova da chave privada no handshake TLS 1.3 e tráfego protegido.
- **Nenhuma informação de revogação fornecida.**

Cada cartão abaixo muda só uma condição de B. São dados didáticos, não certificados observados. Não acesse endereços `.invalid`.

| Cartão | Diferença em relação a B | Decisão inicial e motivo a preencher |
|---|---|---|
| B — base | Condições comuns; navegador aceitou a conexão. Resposta HTTP `200` para `/ordens/7`. |  |
| N — nome | SAN cobre apenas `portal.exemplo.invalid`. |  |
| V — validade | `Not After` foi 1 set. 2026. |  |
| C — cadeia | A última raiz não está entre as âncoras confiáveis do cliente. |  |
| F — finalidade | EKU contém apenas `clientAuth`, não `serverAuth`. |  |
| R — revogação | Resposta de status válida informa **revogado** antes da data da análise. |  |
| A — autorização | Certificado e TLS iguais a B; resposta HTTP `403` para `/ordens/8` da mesma conta. |  |

Para cada linha, registre `ID → campo relevante → aceitar, recusar ou não concluir → motivo → limite`. Depois confira as respostas de referência. Em B, explicite que o pacote não comprova o estado de revogação; em A, separe a aceitação do canal da recusa da aplicação.

Se a inspeção real não estiver disponível, localize os campos de B nesta página: nome solicitado, SAN, prazo, âncora e finalidade. Anote “revogação: não fornecida”. Essa leitura substitui a navegação no visualizador, mas sua fonte é **dado fornecido**, não observação de uma conexão.

**Verificação:** justifique B, dois motivos diferentes de recusa entre N/V/C/F/R e a decisão de A. Se o SAN for retirado de B, a correspondência do nome deixa de estar demonstrada. Não preencha campos ausentes por suposição.

<details>
<summary>Conferir decisões de referência após preencher os cartões</summary>

- **B:** canal aceito nas condições fornecidas; `200` é apenas a resposta da aplicação. O pacote não afirma consulta de revogação bem-sucedida.
- **N:** recusar pelo nome; **V:** recusar pelo prazo; **C:** recusar pela âncora; **F:** recusar pela finalidade; **R:** recusar pela evidência positiva de revogação.
- **A:** canal aceito como em B, objeto `/ordens/8` recusado pela aplicação (`403`). O motivo da política de autorização não é demonstrado apenas pelo código HTTP.
- **B sem SAN:** não concluir correspondência do nome com a evidência disponível; não preencher a lacuna usando o nome aparente da página.

</details>

### C3: aceitar condicionalmente e declarar o limite

No [registro único](../atividades/A14-A18-criptografia-confianca.md#atividade), registre C3 em partes:

1. Fonte: inspeção real, se ocorreu, ou pacote fictício.
2. Cartão B e duas recusas, cada qual com campo e motivo.
3. Cartão A: canal aceito e acesso ao objeto recusado.
4. Fluxo `certificado e prova → chaves de tráfego → registros protegidos`.

Declare a lacuna de revogação de B e a decisão que ainda cabe à aplicação. Cartões fornecidos não são “teste executado”.

**Extensão decisória:** uma equipe propõe liberar `/ordens/8` porque o certificado de `curso.exemplo.invalid` foi aceito. Qual evidência de autorização você exigiria no servidor? Especifique **conta, ação e objeto**; o certificado do servidor não responde a essa pergunta. A seção seguinte retoma as chaves que sustentam esses mecanismos: quem as gera, guarda, rotaciona e recupera?

### Prática curta no terminal: ler uma conexão do próprio curso {#terminal-tls}

`openssl s_client` abre uma conexão TLS e mostra informações técnicas. `-connect` escolhe o servidor e porta; `-servername` envia o nome ao servidor, e `-verify_hostname` confere o nome do certificado; `-brief` reduz a saída. Use somente o domínio público do próprio curso. A saída pode variar conforme OpenSSL e a rede; o comando não altera o servidor.

```bash
openssl s_client -connect rafaelrezo.github.io:443 -servername rafaelrezo.github.io -verify_hostname rafaelrezo.github.io -verify_return_error -brief </dev/null
```

**Resultado esperado com rede e cadeia local adequada:** linhas como `Protocol version: TLSv1.3` (ou outra versão aceita), `Ciphersuite: ...`, `Peer certificate: ...` e `Verification: OK`.

Registre a **saída real**, inclusive erro. `Verification: OK` não demonstra autorização a `/ordens/8`. Se faltar rede ou ferramenta, use o fluxo e os cartões B/N/A como **dados fornecidos**. **Pare:** não acesse os domínios `.invalid`.

## Gestão das chaves: manter leitura e reduzir exposição {#ciclo}

**Uso real — arquivos cifrados na nuvem:** o AWS KMS centraliza o controle de chaves usadas por aplicações. Na rotação de uma chave simétrica gerida pelo serviço, novo material passa a proteger novas operações; o material anterior é conservado para abrir dados antigos.

Rotação não reescreve automaticamente os arquivos. ([Documentação de rotação do AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html).)

Uma chave precisa ter **finalidade, responsável, local, período de uso e estado**. Trocar a chave usada para **novas** cifras não recifra automaticamente cópias antigas. Recuperar uma chave perdida é diferente de continuar usando uma chave suspeita de exposição ([NIST SP 800-57](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final)).

## Inventário: localizar dependências antes da troca {#inventario}

**Para que o inventário serve:** antes de trocar ou retirar uma chave, a equipe precisa localizar os arquivos que ainda dependem dela e os serviços autorizados a usá-la. Um backup pode continuar íntegro, mas ficar inutilizável se a chave necessária for perdida ou eliminada.

Identificador, responsável e procedimento de recuperação ajudam a preservar essa dependência; nenhum deles substitui o segredo.

No KMS, a rotação pode preservar **o mesmo identificador lógico**, com versões internas do material. No quadro abaixo, K-A e K-B são duas chaves distintas, para deixar visível a dependência de cada cópia. Não são uma reprodução da interface do serviço. ([AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html).)

O pacote tem identificadores estáveis. `K-A` e `K-B` são **rótulos**, nunca material secreto. “Selada” descreve a política proposta de guarda da cópia da chave, não uma operação executada nesta página. `C-01` e `C-02` são cópias fictícias da ordem `ordem=7;estado=aprovado`; os metadados `tipo=ordem;versao=1` são públicos neste exercício. O quadro mostra a situação **antes de E-1**. As decisões P1–P3/N1–N3 são análise de política; nenhuma cifra ou abertura é executada nesse quadro.

| ID | Estado inicial do pacote | Responsável e propósito |
|---|---|---|
| K-A | Ativa para **novas cifras** e para abrir C-01; cópia de recuperação selada em repositório separado. | Serviço de ordens usa; custodiante autoriza recuperação. |
| C-01 | Cifrada sob K-A, com rótulo público e identificador da chave. | Serviço autorizado precisa abrir para manter a função. |
| K-B | Ainda não existe; proposta de geração para troca planejada. | Equipe de segurança aprova geração; serviço passa a usar. |
| C-02 | Será cifrada depois da troca, sob K-B. | Serve para comprovar novo uso. |
| E-1 | Troca planejada: K-A encerra uso para **novas** cifras; K-B entra em uso. | Operações registra momento, versão e teste. |
| E-2 | Suspeita de exposição de K-A **após** E-1. | Resposta a incidentes suspende seu uso e investiga cópias antigas. |
| E-3 | Perda da instância de K-B no serviço; cópia selada permanece disponível. | Custodiante e operações aprovam recuperação controlada. |

**Síntese:** registre propósito, responsável, estado e período de uso de cada chave. A troca de K-A por K-B impede novas cifras com K-A, mas não altera automaticamente C-01, que continua sob K-A.

O identificador da chave ajuda a localizar a correta; não é segredo nem autorização. A cópia de recuperação precisa ficar separada, protegida e testável. A [NIST SP 800-57](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final) distingue o período de aplicar proteção do período de processar dados antigos.

### Exemplo trabalhado: a troca que preserva leitura

Depois de E-1, o serviço cifra C-02 com K-B. C-01 continua identificado como objeto de K-A. Um serviço **autorizado** ainda pode precisar de K-A para abrir C-01 enquanto se planeja migrá-la. A regra correta para novas cifras é `K-B`; a regra para leitura de C-01, antes de E-2, é `K-A + autorização`. Tentar abrir C-01 com K-B deve falhar. **Trocar a chave ativa não reescreve cópias anteriores.** Registre `C-01 → K-A` e `C-02 → K-B` antes de avançar.

### Prática curta: três decisões no inventário

A partir de E-1 (troca planejada), preveja e confira estas relações **fornecidas**, sem fingir que um sistema real foi configurado:

| ID | Operação | Resultado esperado | Motivo |
|---|---|---|---|
| P1 | Serviço autorizado cifra nova cópia com K-B | Permitir | K-B está ativa para novas cifras. |
| N1 | Mesmo serviço cifra nova cópia com K-A | Negar | K-A saiu do período de nova proteção. |
| P2 | Serviço autorizado abre C-01 com K-A antes de E-2 | Permitir | A cópia antiga ainda depende de K-A. |
| N2 | Serviço tenta abrir C-01 com K-B | Negar | Trocar chave ativa não muda C-01. |
| N3 | Operador sem permissão tenta abrir C-02 com K-B | Negar | Possuir o identificador correto não concede acesso. |
| P3 | Custodiante e operações aprovam recuperar K-B selada | Permitir condicionalmente | Falta restaurar e testar abertura real. |

**Registre:** um caso permitido, dois negados e o teste funcional ainda pendente. Em E-2, suspeita de exposição de K-A, interrompa seu uso novo, investigue dependências e planeje recifrar C-01 a partir de fonte confiável. Em E-3, perda da instância de K-B, restaure a cópia selada sob dupla autorização e teste uma abertura representativa; gerar outra chave chamada “K-B” não recupera os mesmos bytes. **Pare:** essa análise é de política, não execução de restauração.

## Hash e digest: comparar o conteúdo exato {#digest}

**Uso real — conferir um download do Ubuntu:** a distribuição publica `SHA256SUMS`, com resumos das imagens de instalação, e uma assinatura desse arquivo. Primeiro se verifica a origem da referência; depois se calcula o resumo da imagem baixada e se compara.

Isso ajuda a detectar download incompleto ou conteúdo modificado. ([Tutorial oficial do Ubuntu](https://ubuntu.com/tutorials/how-to-verify-ubuntu).)

Uma **função hash criptográfica** recebe bytes e produz um resumo de tamanho fixo, chamado **digest**. SHA-256 produz 256 bits (32 bytes). Os mesmos bytes produzem o mesmo digest; alterar os bytes quase certamente muda o resultado. Hash não cifra: o conteúdo pode continuar legível.

A função é projetada para dificultar encontrar duas entradas diferentes com o mesmo digest. Ainda assim, um digest igual não identifica quem criou ou publicou o arquivo.

Para conferir uma cópia, calcule seu digest e compare com um valor publicado pelo fornecedor **por um canal confiável**. Se alguém puder substituir tanto a cópia quanto a referência, a igualdade não demonstra legitimidade. Essa distinção entre comparação de bytes e confiança na origem será usada novamente em assinaturas e certificados.

O exemplo `abc` tem um digest SHA-256 conhecido: `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad` ([exemplo NIST](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/examples/sha256.pdf)).

A entrada são exatamente três bytes ASCII, sem aspas, espaço ou quebra de linha. Uma comparação exige os mesmos bytes e a mesma codificação; aparência semelhante não basta.

**Prática curta no WSL:** abra uma pasta própria para a A16. `mkdir -p` cria a pasta se necessário; `cd` entra nela. Preveja os dois resumos e execute:

Os arquivos de três bytes tornam essa comparação rápida, sem baixar uma imagem de instalação. A operação de calcular o resumo é a mesma; a referência conhecida vem do exemplo NIST.

```bash
mkdir -p ~/cripto-a16
cd ~/cripto-a16
printf 'abc' > hash-a.txt
printf 'abd' > hash-b.txt
sha256sum hash-a.txt hash-b.txt
```

As duas linhas com `printf` criam arquivos de três bytes, sem quebra de linha; `>` cria ou substitui cada arquivo. `sha256sum` calcula e mostra o digest SHA-256 **de cada arquivo**, seguido do nome. O primeiro deve corresponder ao valor NIST acima; o segundo deve diferir.

**Registre D1:** `abc` coincide com a referência NIST; `abd` difere. Anote os bytes comparados e a origem da referência. Se `sha256sum` faltar, use o valor NIST como **dado fornecido**. A igualdade não atribui autoria.

## HMAC: verificar mensagem com segredo compartilhado {#hmac}

Um **código de autenticação de mensagem** (*MAC*) depende de uma chave secreta compartilhada. **HMAC** é um MAC construído a partir de hash ([RFC 2104](https://www.rfc-editor.org/info/rfc2104/)). Quem recebe a mensagem confere o código com a **mesma chave** usada para produzi-lo.

**Uso real — notificações automáticas do GitHub:** um **webhook** envia uma mensagem HTTP quando ocorre um evento, como uma alteração no repositório. Quando configurado com um segredo, o GitHub calcula HMAC-SHA256 do corpo enviado e inclui o resultado em `X-Hub-Signature-256`, um cabeçalho da requisição. ([Documentação do GitHub](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries).)

O programa receptor recalcula o código com o segredo que já possui e compara antes de processar o evento. Uma divergência exige rejeição. O corpo continua legível no receptor; o HMAC verifica sua correspondência sob o segredo, enquanto HTTPS protege o transporte.

| Operação | Entrada necessária | Resultado | O conteúdo fica secreto? |
|---|---|---|---|
| SHA-256 de D1 | Bytes do arquivo. | Digest para comparar com uma referência confiável. | Não. |
| HMAC de M1–M3 | Bytes da mensagem **e chave compartilhada**. | Código que deve mudar se a mensagem ou a chave mudar. | Não. |

Um código válido demonstra correspondência sob a chave. Se duas partes a conhecem, não distingue qual delas criou a mensagem.

**Prática curta no WSL:** no mesmo diretório, execute:

`msg-a.txt` representa um corpo recebido; mudar `valor=10` para `valor=11` altera seus bytes. Recalcular o HMAC permite observar a divergência que um receptor precisaria detectar. O ensaio não envia um webhook e usa um segredo descartável.

```bash
printf 'pedido=7;valor=10' > msg-a.txt
printf 'pedido=7;valor=11' > msg-b.txt
openssl dgst -sha256 -hmac 'chave-aula-descartavel' msg-a.txt msg-b.txt
openssl dgst -sha256 -hmac 'chave-aula-descartavel' msg-a.txt
openssl dgst -sha256 -hmac 'outra-chave-aula' msg-a.txt
```

**Leia cada linha:**

| Linha | O que faz |
|---|---|
| `printf ... > msg-a.txt` | Cria a mensagem original com `valor=10`, sem quebra de linha. |
| `printf ... > msg-b.txt` | Cria a mensagem alterada com `valor=11`. |
| Primeiro `openssl dgst` | Calcula um HMAC por arquivo. `-sha256` escolhe SHA-256; `-hmac` usa a chave literal de teste. Os nomes finais indicam os arquivos de entrada. |
| Segundo `openssl dgst` | Recalcula o HMAC de `msg-a.txt` com **a mesma chave**: o código deve coincidir com o primeiro. |
| Terceiro `openssl dgst` | Usa **outra chave** sobre `msg-a.txt`: o código deve diferir. |

A saída traz códigos HMAC, **não mensagens cifradas**. Os dois textos continuam legíveis nos arquivos.

**Registre M1–M3:** compare os códigos gerados para mesma mensagem/chave, mensagem alterada e chave alterada. A chave literal é pública nesta página e serve apenas ao ensaio. Se OpenSSL faltar, use M1–M3 abaixo como **dados fornecidos**. O código não identifica qual detentor da chave produziu a mensagem.

### Quadro de resultados para acompanhar ou substituir o terminal

Estas linhas são **referência de comportamento esperado**. O valor calculado no terminal depende exatamente dos bytes da mensagem e da chave literal de teste.

| ID | Entradas | Resultado esperado | O que ainda não foi provado |
|---|---|---|---|
| D1 | SHA-256 de `abc` contra a referência NIST; depois `abd` | Coincide; depois difere | Autoria e procedência de qualquer arquivo externo. |
| M1 | Mensagem original e mesma chave de teste | Código coincide ao recalcular | Qual detentor da chave produziu a primeira versão. |
| M2 | Mensagem com `valor=11`, mesma chave | Código difere do M1 | Qual campo mudou fora deste teste controlado. |
| M3 | Mensagem original, outra chave | Código difere do M1 | Se a chave real está protegida no sistema. |

Se `sha256sum` ou OpenSSL não funcionar, leia o quadro na ordem D1–M3 e identifique-o como resultado fornecido. Se houver outro erro, anote comando e mensagem sem dados sensíveis. Espaços, acentos, quebras de linha e codificação mudam os bytes; confira a entrada exata antes de atribuir divergência a adulteração. A aceitação e rejeição do HMAC dependem da chave correta, mas não entregam diagnóstico causal de um evento real por si só.

## Senhas: conferir uma tentativa sem guardar a senha {#senhas}

**Uso real — cadastro e login no Django:** Django é um framework para desenvolver aplicações web. Na versão 5.2, seu esquema padrão usa PBKDF2 e guarda uma representação com **algoritmo, iterações, sal e valor derivado**. A aplicação pode conferir a senha digitada usando esse registro, sem guardar a senha legível. ([Documentação do Django 5.2](https://docs.djangoproject.com/en/5.2/topics/auth/passwords/).)

Na prática D1 acima, SHA-256 permitiu comparar os bytes de **arquivos**. Agora a pergunta é outra: quando alguém cria uma conta e depois digita uma senha, como um programa confere essa tentativa sem manter uma cópia da senha na base de contas? Aqui, **serviço** significa o programa que recebe e confere a senha, como o responsável pelo login de um site. Nesta aula, vamos executar somente as operações locais, sem criar um site ou contas reais.

Guardar a senha em texto legível expõe todas as contas se a base for copiada. Guardar apenas `SHA-256(senha)` também é inadequado: SHA-256 é rápido, e uma base vazada permite testar muitos palpites fora do serviço. O hash de D1 continua útil para comparar arquivos; a finalidade de **verificar senhas** pede um esquema próprio, com sal e custo ([OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

### Cadastro e conferência: duas operações sobre o mesmo registro

```mermaid
flowchart TB
    S[Senha criada] --> C[PBKDF2 com sal e custo]
    L[Sal da conta] --> C
    C --> V[Guardar sal, custo e verificador]
    T[Tentativa de login] --> R[PBKDF2 com sal e custo guardados]
    V -->|Sal e custo| R
    R --> Q{Novo valor igual ao verificador?}
    V -->|Verificador| Q
    Q -->|Sim| A[Aceitar tentativa]
    Q -->|Não| N[Rejeitar tentativa]
```

No **cadastro**, o programa gera um sal para aquela conta, deriva um **verificador** da senha e guarda `esquema + custo + sal + verificador`. A senha legível não entra nesse registro. O sal pode ser público; sua função é separar contas, inclusive quando duas pessoas escolhem a mesma senha.

Na **conferência**, o programa recebe uma tentativa, usa o **sal e o custo guardados para aquela conta** e calcula outro valor. Se ele corresponder ao verificador, a tentativa é aceita. Não existe operação de “decifrar o verificador” para recuperar a senha.

**No fluxo de login, cada mecanismo tem uma função:**

- **HTTPS:** protege a senha em trânsito até o servidor.
- **Derivação e comparação:** conferem a tentativa usando o registro da conta.
- **Autorização:** decide o que a conta pode fazer após entrar.

A base de contas guarda o registro necessário à conferência. Essas proteções atuam em pontos diferentes do mesmo fluxo.

O **custo** define trabalho repetido para cada derivação. Isso também torna mais caras as tentativas de um atacante que obteve a base. Não torna uma senha fraca segura nem substitui a limitação de tentativas no serviço. O [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b/authenticators/) descreve sal, custo e registro do esquema para verificadores de senha.

A prática usa **PBKDF2-HMAC-SHA256**, usado em T2 na A14. Lá ele derivou chave e IV para cifrar uma cópia; aqui gera um verificador para conferir uma senha. As **100.000 iterações são apenas um parâmetro didático**. Para um sistema real, escolha um esquema e custo conforme recomendações atuais, como [Argon2id na OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), e meça o desempenho no ambiente.

### Prática curta no VS Code e WSL: observar cadastro e conferência {#senha-terminal}

**Objetivo:** com a **mesma senha fictícia** em duas contas, observar o efeito de sais diferentes e conferir uma tentativa correta e outra incorreta. Os valores são gerados e verificados pelo próprio programa.

1. No WSL, entre em `~/cripto-a16` e digite `code .` para abrir a pasta no VS Code. Se esse comando faltar, use **Conectar ao WSL** no editor e abra a pasta. Crie `verificador_senhas_a16.py`. Copie somente o código Python abaixo e salve. O [arquivo `.py` para download](../assets/a14-a17/verificador_senhas_a16.py) contém o mesmo código.
2. Antes de executar, preveja S1–S3: os dois verificadores serão iguais? Qual tentativa será aceita?

```python
from hashlib import pbkdf2_hmac
from hmac import compare_digest
from os import urandom

# Dados fictícios: o programa não recebe nem guarda uma senha real.
senha_de_teste = b'senha-ficticia-123'
iteracoes = 100_000  # valor didático; não é configuração de produção


def derivar(senha_digitada, sal):
    return pbkdf2_hmac('sha256', senha_digitada, sal, iteracoes)


# Cadastro: duas contas usam a mesma senha, mas recebem sais próprios.
sal_7 = urandom(16)
sal_8 = urandom(16)
verificador_7 = derivar(senha_de_teste, sal_7)
verificador_8 = derivar(senha_de_teste, sal_8)

print('Conta 7 — sal:', sal_7.hex())
print('Conta 7 — verificador:', verificador_7.hex())
print('Conta 8 — sal:', sal_8.hex())
print('Conta 8 — verificador:', verificador_8.hex())
print('Custo: ', iteracoes, 'iterações')
print('S1 — verificadores iguais?', compare_digest(verificador_7, verificador_8))

# Conferência: usar o sal e o custo guardados com o verificador da conta 7.
tentativa_correta = b'senha-ficticia-123'
tentativa_incorreta = b'outra-senha'
print('S2 — senha correta aceita?', compare_digest(
    derivar(tentativa_correta, sal_7), verificador_7
))
print('S3 — senha incorreta aceita?', compare_digest(
    derivar(tentativa_incorreta, sal_7), verificador_7
))
```

No terminal WSL, entre na pasta e execute:

```bash
cd ~/cripto-a16
python3 verificador_senhas_a16.py
```

`cd` seleciona a pasta onde o arquivo foi salvo. `python3` executa o arquivo. **Leia o código e a saída:**

- `urandom(16)` gera **16 bytes de sal** para cada conta; `.hex()` permite ver esses bytes. Os valores mudam a cada execução.
- `pbkdf2_hmac('sha256', senha, sal, iteracoes)` deriva o verificador. O `sha256` aqui **faz parte do PBKDF2**, com sal e repetições; não é o SHA-256 direto de D1.
- `compare_digest` compara os valores derivados. Na conferência de S2/S3, o programa usa o sal da conta 7; a senha de teste só existe em memória neste exercício.

| Saída | Resultado esperado | O que demonstra |
|---|---|---|
| S1 — verificadores iguais? | `False` | A mesma senha com sais diferentes produz verificadores diferentes. |
| S2 — senha correta aceita? | `True` | A tentativa refeita com o sal e o custo da conta 7 corresponde ao registro. |
| S3 — senha incorreta aceita? | `False` | A tentativa diferente não corresponde ao verificador da conta 7. |

**Experimente uma mudança:** no VS Code, troque somente `sal_8 = urandom(16)` por `sal_8 = sal_7`, salve e execute outra vez. Preveja S1 antes de olhar. **S4:** S1 passa a `True`, porque senha, sal e custo agora coincidem nas duas contas. Restaure `sal_8 = urandom(16)` e salve: cada conta deve voltar a ter sal próprio. Não use essa configuração alterada para guardar senhas.

**Registre S1–S4:** anote os valores lógicos (`True`/`False`) e explique a mudança em S4 em uma frase. Não copie a senha nem os verificadores completos para a entrega. Se Python não abrir o arquivo, confira `pwd` e `ls`; se `pbkdf2_hmac` não estiver disponível, use a tabela S1–S3 e a previsão de S4 como **dados fornecidos**, sem marcar o teste como executado.

### O que este teste permite decidir

O programa executou a derivação e a comparação de bytes em memória. Ele **não criou uma base de dados nem um login de produção**. Para armazenar um registro real, seriam necessários ao menos o esquema, seus parâmetros, o sal e o verificador por conta; acesso à base, proteção contra tentativas online e atualização futura do custo também precisam ser planejados.

Na [atividade única](../atividades/A14-A18-criptografia-confianca.md#atividade), acrescente a C3 uma conclusão curta: **quais campos o programa precisaria guardar para repetir a conferência e qual dado não deveria guardar?** Use S1/S4 para justificar o sal individual e S2/S3 para justificar a comparação. Essa conclusão se apoia no que foi executado, sem exigir desenho de um serviço imaginário.

## Atividade {#atividade}

Conclua **C3** na [atividade única de A14–A16](../atividades/A14-A18-criptografia-confianca.md#atividade) à medida que analisar o canal TLS, a gestão de chaves e os testes D1, M1–M3 e S1–S4. Escolha os recortes pedidos no registro único; não é necessário anexar todos os quadros da página. Faça uma decisão final para **repouso, trânsito, backup e endpoint**: `mecanismo → evidência → contraprova → limite → responsável`. Revise com a dupla e entregue um único PDF no prazo definido pelo docente.

## Revisão rápida

1. Por que a chave pública do certificado não cifra cada resposta HTTP?
2. Uma resposta `403` em HTTPS representa falha de TLS ou decisão da aplicação?
3. Que diferença há entre comparar um arquivo com SHA-256, autenticar uma mensagem com HMAC e conferir uma senha com sal e custo?

## Ilustração opcional — Imagem 15

O [prompt numerado da Imagem 15](../assets/a14-a17/prompts-ilustrativos.md#imagem-15) está pronto para geração posterior. O conteúdo desta página já pode ser estudado e praticado sem a imagem.

## Referências

- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/info/rfc8446/), [RFC 5280](https://www.rfc-editor.org/info/rfc5280/), [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).
- [OpenSSL `s_client`](https://docs.openssl.org/3.5/man1/openssl-s_client/) e [`dgst`](https://docs.openssl.org/3.5/man1/openssl-dgst/).
- [NIST FIPS 180-4 — hash](https://csrc.nist.gov/pubs/fips/180-4/upd1/final), [RFC 2104 — HMAC](https://www.rfc-editor.org/info/rfc2104/).
- [Python — `hashlib.pbkdf2_hmac`](https://docs.python.org/3/library/hashlib.html#hashlib.pbkdf2_hmac), [RFC 8018](https://www.rfc-editor.org/info/rfc8018/), [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
