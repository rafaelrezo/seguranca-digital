# A15 (provisória) — Chaves públicas, assinaturas e certificados

A A14 mostrou mecanismos com segredo compartilhado. Agora, uma chave **privada** assina e uma chave **pública** verifica. Um **certificado** ajuda a vincular essa chave pública a um nome de serviço. Primeiro observe as operações, depois examine as condições de confiança.

**Tempo:** 100 minutos, com exposição e prática guiada intercaladas.

**Recursos:** WSL/Ubuntu com OpenSSL e acesso à página HTTPS do curso. Use chaves descartáveis e dados da página; os resultados fornecidos servem de alternativa. Não use arquivos ou certificados pessoais.

**Objetivos de aprendizagem**

1. Distinguir chave privada e pública, assinatura e acordo de chaves.
2. Verificar assinatura original e alterada sem atribuir identidade apenas ao resultado matemático.
3. Identificar nome, validade, finalidade e cadeia que sustentam o uso de um certificado.

## Par de chaves: segredo privado e informação pública {#funcoes}

**Uso real — acesso a servidores por SSH:** SSH é um protocolo de acesso remoto protegido. Na autenticação por chave pública, o administrador registra a pública autorizada no servidor; o cliente usa a privada correspondente para provar seu controle. A privada permanece no cliente.

O servidor verifica a prova e suas regras de acesso. ([Manual do OpenSSH](https://man.openbsd.org/ssh).)

As duas chaves de um par são geradas juntas, mas têm papéis distintos:

- A chave **privada** deve permanecer sob controle do titular.
- A chave **pública** pode ser distribuída; sua divulgação não é uma falha.

Para associar uma chave pública a uma pessoa ou serviço, é preciso verificar sua origem. Um par de chaves não substitui a chave simétrica compartilhada da A14; mecanismos diferentes usam chaves diferentes.

Três operações precisam ser separadas:

| Necessidade | Mecanismo e chaves | O que se observa | Limite |
|---|---|---|---|
| Impedir leitura da cópia | Cifra autenticada, como AES-GCM da A14: a mesma chave secreta cifra e abre. | Sem chave, não se recupera o texto; alteração autenticada é rejeitada. | O processo que usa a chave vê o texto. |
| Verificar mensagem e chave usada | Assinatura: a chave **privada** assina; a **pública** correspondente verifica. | Verificação válida ou inválida para mensagem, assinatura e chave recebidas. | Não oculta a mensagem nem prova, sozinha, a identidade do titular. |
| Chegar a material secreto comum | Acordo de chaves: participantes combinam material público e suas próprias chaves privadas. | Ambos derivam um segredo sob as premissas do protocolo. | Precisa autenticar os participantes para evitar troca de chaves por terceiro. |

Uma **assinatura digital** é calculada sobre os bytes da mensagem com a chave privada. A verificação usa **mensagem + assinatura + chave pública correspondente**. Alterar uma dessas entradas faz a conferência falhar.

Assinar não equivale a “cifrar com a chave privada”: o texto pode continuar legível. O exercício usa **ECDSA**, um algoritmo de assinatura com curvas elípticas, na curva P-256, e **SHA-256**, uma função hash ([NIST FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final)).

Uma **função hash** calcula um resumo de tamanho fixo dos bytes, chamado **digest**. SHA-256 produz 32 bytes; mudar a mensagem quase certamente muda o resumo. Na assinatura deste exercício, esse cálculo é uma etapa interna, feita pelo OpenSSL. O digest sozinho não identifica quem produziu a mensagem e não é uma assinatura. A [A16](A16-tls-ciclo-de-chaves.md#digest) desenvolve a comparação de arquivos, HMAC e verificadores de senha.

No **acordo de chaves**, duas partes combinam informações públicas com suas próprias chaves privadas para derivar um segredo comum. **ECDH** é um exemplo. O acordo, sozinho, não autentica a identidade da outra parte; isso exige mecanismo adicional. O TLS da A16 combinará essas funções. A [NIST SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final) descreve esquemas de estabelecimento de chaves. Nesta aula, a operação prática concentra-se na assinatura.


### Prática curta no WSL: separar as chaves

Gerar e extrair o par permite observar essa separação sem abrir acesso remoto: `privada.pem` fica com quem assina; `publica.pem` pode chegar a quem verifica. Os arquivos deste exercício não configuram uma conta SSH.

**Estado inicial:** use somente `~/cripto-a15`. `umask 077` limita as permissões dos arquivos novos; `genpkey` cria uma chave privada descartável de curva P-256; `pkey -pubout` extrai a chave pública. Não publique nem reutilize a privada.

```bash
mkdir -p ~/cripto-a15
cd ~/cripto-a15
umask 077
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out privada.pem
openssl pkey -in privada.pem -pubout -out publica.pem
ls -l privada.pem publica.pem
```

**Resultado esperado:** dois arquivos diferentes; somente o titular deve ter acesso à privada. `ls -l` mostra permissões, não prova proteção fora desta pasta. Registre `T3 → arquivo privado → arquivo distribuível → limite`. Se OpenSSL faltar, use a relação como dado fornecido. **Pare** antes de assinar e diga qual arquivo deve entrar em cada operação.

## Origem da chave pública: o limite da verificação {#par}

**Na administração de servidores:** o cliente SSH mantém chaves de servidores conhecidos em `known_hosts` e pode avisar quando a chave apresentada muda. Isso ajuda a detectar uma troca inesperada, mas a primeira associação também precisa ser conferida. Reconhecer um nome na tela não demonstra que a chave veio do servidor correto. ([Manual do OpenSSH](https://man.openbsd.org/ssh).)

Nesta página, **K1** é o par que assina e **K2** é outro par, usado como contraprova. Os IDs valem apenas aqui. A parte pública de K1 não precisa de sigilo, mas precisa de **origem confiável e proteção contra substituição**. Se um terceiro substituir a chave pública anunciada pela sua, poderá apresentar uma assinatura válida sob essa outra chave e alegar uma identidade que não demonstrou possuir.

No exercício de terminal, `privada.pem` e `outra-privada.pem` são chaves descartáveis. `publica.pem` e `outra-publica.pem` podem ser lidas por verificadores, mas seu conteúdo, por si, não informa a identidade do titular. Não use essas chaves para documentos reais.

## Assinatura: verificar os mesmos bytes {#demonstracao}

**Uso real — atualização de programas Linux:** o APT, gerenciador de pacotes de Debian e Ubuntu, verifica a assinatura dos metadados do repositório. Esses metadados se ligam aos arquivos de pacotes por resumos criptográficos. A assinatura ajuda a rejeitar conteúdo substituído no caminho até o computador.

Não significa que cada pacote seja assinado individualmente nesse fluxo. ([Manual `apt-secure`](https://manpages.debian.org/bookworm/apt/apt-secure.8.en.html).)

O arquivo pequeno `relatorio.txt` permite observar a mesma propriedade: uma assinatura aceita para uma versão deixa de corresponder quando seus bytes mudam. Não vamos instalar pacotes nem alterar os repositórios do WSL.

`openssl dgst -sha256 -sign` cria a assinatura de um arquivo com a chave privada; `-verify` confere assinatura, conteúdo e chave pública. Preveja o resultado antes de cada verificação. O texto permanece legível.

```bash
printf 'relatorio=7;resultado=aprovado' > relatorio.txt
openssl dgst -sha256 -sign privada.pem -out assinatura.bin relatorio.txt
openssl dgst -sha256 -verify publica.pem -signature assinatura.bin relatorio.txt
printf 'relatorio=7;resultado=recusado' > alterado.txt
openssl dgst -sha256 -verify publica.pem -signature assinatura.bin alterado.txt
```

**Resultado esperado:** `Verified OK` no original e `Verification failure` no alterado. A segunda linha de verificação retorna erro ao shell; isso é a rejeição esperada. Registre `T4 → bytes → chave → resultado → limite`. Para a terceira contraprova, gere outro par de teste e verifique o original com a outra chave pública:

```bash
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out outra-privada.pem
openssl pkey -in outra-privada.pem -pubout -out outra-publica.pem
openssl dgst -sha256 -verify outra-publica.pem -signature assinatura.bin relatorio.txt
```

**Resultado esperado:** `Verification failure`. Se OpenSSL faltar, use o quadro como **dados fornecidos**:

| ID | Mensagem, assinatura e chave pública | Resultado | Conclusão limitada |
|---|---|---|---|
| V1 | Original, S1, K1 pública | Válida | Estes três elementos correspondem. |
| V2 | Alterada, S1, K1 pública | Inválida | Os bytes não correspondem aos assinados. |
| V3 | Original, S1, K2 pública | Inválida | A chave testada não corresponde à assinatura. |

**Exemplo trabalhado:** V2 falha porque `resultado=recusado` não são os bytes `resultado=aprovado` assinados. A falha não revela se houve fraude, erro de transporte ou seleção do arquivo errado. **Pare** antes de concluir que a assinatura válida identifica uma pessoa ou organização: isso depende da origem confiável de K1 pública.

## Confiança: decidir quando aceitar {#confianca}

**No uso de um repositório de software:** a verificação depende de uma chave pública aceita para aquela origem. Obter um arquivo e uma chave de uma fonte desconhecida não estabelece confiança.

Além disso, uma assinatura válida não prova que o programa está livre de vulnerabilidades ou de código malicioso. Ela sustenta uma relação de procedência sob a chave aceita. ([Manual `apt-secure`](https://manpages.debian.org/bookworm/apt/apt-secure.8.en.html).)

V1 confirma a correspondência matemática entre mensagem, assinatura e K1 pública. **Não confirma que K1 pertença à pessoa ou serviço alegado.**

Antes de aceitar uma origem específica, obtenha a chave pública por canal confiável ou valide um vínculo verificável. A seção seguinte apresenta o certificado como esse vínculo; a A16 mostra seu uso em TLS.

## Certificado: vincular nome, chave e emissor {#certificado}

**Uso real — acessar este material por HTTPS:** o navegador pede `rafaelrezo.github.io` e recebe um certificado do servidor. Antes de confiar no vínculo entre esse nome e a chave apresentada, verifica nome, prazo, finalidade e cadeia.

O site não se torna confiável apenas por enviar uma chave pública. O terminal permitirá examinar parte dessa mesma verificação. ([RFC 9525](https://www.rfc-editor.org/rfc/rfc9525).)

Um certificado **X.509** reúne chave pública, nomes e outros campos assinados por uma **autoridade certificadora** (*emissor*). Ele apresenta um vínculo entre nome e chave, sujeito a verificações.

O cliente confere uma **cadeia**: as assinaturas e restrições dos emissores precisam levar a uma **âncora de confiança** que o cliente já aceita. Receber uma raiz enviada pelo servidor não a torna confiável.

Também é preciso conferir nome solicitado, prazo e finalidade ([RFC 5280](https://www.rfc-editor.org/rfc/rfc5280); [RFC 9525](https://www.rfc-editor.org/rfc/rfc9525)).

**Síntese:** o certificado apresenta a chave; a cadeia e a âncora sustentam o vínculo; o nome precisa corresponder ao endereço solicitado; o período e a finalidade precisam permitir o uso. Uma verificação de assinatura isolada não substitui essas condições.

| Evidência | Pergunta de decisão | Interpretação cuidadosa |
|---|---|---|
| Nome DNS em **Subject Alternative Name** (SAN) | O endereço acessado corresponde a um nome coberto? | O nome do site, e não uma aparência parecida, é a referência. O campo `Subject/CN` isolado não substitui essa conferência. |
| `Not Before` / `Not After` | A data atual está dentro do intervalo? | Estar no prazo não prova que a chave privada continua sob controle do titular. |
| Emissor e cadeia | As assinaturas e restrições levam a uma âncora confiável para este cliente? | “Emitido por X” escrito no certificado não equivale a cadeia validada. |
| `Extended Key Usage` e restrições de uso | O certificado serve para autenticação de servidor TLS? | Um certificado limitado a autenticação de cliente não serve para esse papel. |
| Estado de revogação | Há evidência de revogação ou de consulta válida? | A ausência de aviso não é prova universal de “não revogado”; políticas e mecanismos do cliente variam. |

O comando `openssl x509` apresenta **campos**; a decisão de aceitar a conexão depende também da verificação do nome e da cadeia pelo cliente. **Revogação** invalida um certificado antes do fim do prazo, por exemplo após suspeita de comprometimento da chave.

CRL e OCSP são meios de publicar ou consultar esse estado ([RFC 5280](https://www.rfc-editor.org/rfc/rfc5280); [RFC 6960](https://www.rfc-editor.org/rfc/rfc6960)). Evidência confiável de revogação exige recusa. Sem informação, registre **estado não comprovado**; não deduza “não revogado” apenas porque a página abriu.

**Na operação de um site:** renovar o certificado antes do vencimento mantém seu uso dentro do prazo. Se a chave privada tiver sido comprometida, apenas prolongar o prazo não resolve: é necessário tratar a exposição, substituir a chave e o certificado e providenciar a revogação conforme a autoridade emissora. Prazo e comprometimento são condições distintas.

### Inspeção no terminal: ler o certificado real {#inspecao}

Use somente `rafaelrezo.github.io`, domínio público do próprio curso. `openssl s_client` abre uma conexão TLS, envia o nome com `-servername` e verifica se o certificado cobre esse nome com `-verify_hostname`. `-verify_return_error` faz a conexão falhar quando a verificação não passa; `-brief` reduz a saída. Não informe credenciais nem contorne um erro de certificado.

```bash
openssl s_client -connect rafaelrezo.github.io:443 -servername rafaelrezo.github.io -verify_hostname rafaelrezo.github.io -verify_return_error -brief </dev/null
```

**Leia a saída:** `Verification: OK` indica que OpenSSL aceitou a verificação sob as âncoras disponíveis **neste WSL**. Se ocorrer erro, registre a mensagem e pare; não marque o certificado como aceito. Esse comando não prova autorização na aplicação nem estado de revogação.

Para examinar os **campos do certificado apresentado pelo servidor**, execute:

```bash
openssl s_client -connect rafaelrezo.github.io:443 -servername rafaelrezo.github.io -verify_hostname rafaelrezo.github.io -verify_return_error -showcerts </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates -ext subjectAltName,extendedKeyUsage
```

**Leia cada parte:** `-showcerts` mostra os certificados enviados; `|` passa essa saída ao `openssl x509`, que lê o **primeiro certificado**, o do servidor. `-noout` evita imprimir o certificado inteiro. `-subject` e `-issuer` mostram titular e emissor; `-dates` mostra início e fim do prazo; `-ext subjectAltName,extendedKeyUsage` mostra nomes DNS cobertos e finalidades. `2>/dev/null` esconde mensagens de progresso do primeiro comando; por isso a aceitação da cadeia deve ser lida no **comando anterior**. A inspeção de um certificado isolado não valida sua cadeia.

**Registre:** `nome solicitado → SAN relevante → prazo → finalidade → emissor → resultado de verificação → limite`. Os valores reais podem mudar. O SAN deve cobrir o nome solicitado; `TLS Web Server Authentication` indica uso de servidor. Se o segundo comando não mostrar campos, registre a falha sem completar por suposição. Se faltar rede ou OpenSSL, use o pacote fictício da A16 como **dado fornecido**, não como observação. Pare antes de concluir que o serviço é seguro em todos os aspectos.

### Exemplo trabalhado: o nome errado

Você abriu `https://curso.exemplo.invalid`, mas o SAN apresentado cobre apenas `portal.exemplo.invalid`. Mesmo que o certificado esteja no prazo e tenha uma cadeia confiável, **recuse**: a chave foi vinculada a outro nome. Uma aparência semelhante na tela não modifica o endereço que o navegador pediu. Os domínios `.invalid` desta página são **fictícios e não devem ser acessados**.

## Atividade {#atividade}

Atualize **C2** no [registro único de A14–A16](../atividades/A14-A18-criptografia-confianca.md#atividade) após T3, V1–V3 e inspeção de certificado: `chave → operação → resultado → origem da chave pública → condição para confiar → limite`. Não há entrega separada.

## Revisão rápida

1. Qual chave assina e qual verifica?
2. Por que `Verified OK` não prova, sozinho, o nome do titular?
3. Que campos do certificado impedem aceitar uma chave para qualquer nome e finalidade?


## Referências

- [NIST FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final), [SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final), [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280), [RFC 9525](https://www.rfc-editor.org/rfc/rfc9525).
- [OpenSSL `genpkey`](https://docs.openssl.org/3.5/man1/openssl-genpkey/), [`pkey`](https://docs.openssl.org/3.5/man1/openssl-pkey/), [`dgst`](https://docs.openssl.org/3.5/man1/openssl-dgst/).
