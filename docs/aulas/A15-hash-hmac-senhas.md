# A15 (provisória) — Hash, HMAC e armazenamento de senhas

Esta aula apresenta três mecanismos com finalidades diferentes. **Hash** produz um resumo dos bytes para comparação. **HMAC** acrescenta uma chave secreta à verificação de mensagens. Um **esquema de armazenamento de senhas** torna mais caro testar palpites após o vazamento de uma base. A distinção central é o que cada mecanismo verifica, quais entradas usa e de onde vem a confiança no resultado.

**Tempo:** 100 minutos (55 de conceitos e 45 de prática guiada). **Recursos:** navegador com JavaScript e Web Crypto em HTTPS ou `localhost`, ou o quadro de resultados desta página. Use somente as entradas fictícias. Não digite senhas, chaves ou arquivos reais. A [A14](A14-cifra-simetrica-autenticada.md) apresentou cifra autenticada; aqui estudaremos funções que não têm a mesma finalidade. O registro C2 integra a [atividade única](../atividades/A14-A18-criptografia-confianca.md#atividade), sem entrega separada.

**Objetivos de aprendizagem**

1. Comparar resumos calculados de duas entradas e explicar por que a origem da referência importa.
2. Verificar uma mensagem com chave compartilhada e distinguir essa prova da identidade individual.
3. Escolher um esquema de armazenamento de senhas que dificulte palpites após vazamento da base.

## Hash e digest: comparar o conteúdo exato {#digest}

Uma **função hash criptográfica** recebe uma sequência de bytes e produz um valor de tamanho fixo chamado **digest** ou resumo. SHA-256 produz 256 bits (32 bytes). Entradas idênticas produzem o mesmo digest; alterar a entrada quase certamente produz outro. A função é projetada para dificultar encontrar duas entradas diferentes com o mesmo digest, mas igualdade de digests não identifica a origem do arquivo. Hash não cifra: o conteúdo pode continuar legível.

Para conferir uma cópia, calcule seu digest e compare com um valor publicado pelo fornecedor **por um canal confiável**. Se alguém puder substituir tanto a cópia quanto a referência, a igualdade não demonstra legitimidade. Essa distinção entre comparação de bytes e confiança na origem será usada novamente em assinaturas e certificados.

O exemplo `abc` é uma entrada de teste com digest SHA-256 conhecido: `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`. São os três bytes ASCII `61 62 63`, sem aspas, espaço ou quebra de linha. A [NIST FIPS 180-4](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) especifica SHA-256; o [exemplo oficial da NIST](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/examples/sha256.pdf) fornece esse valor. Uma comparação exige mesma codificação e mesmos bytes; visualmente parecido não basta.

**Verificação curta:** preveja o efeito de trocar `abc` por `abd`. Depois compare os resultados no painel. A divergência mostra que os bytes usados nos dois cálculos diferem; não atribui autoria.

<div id="a15-checks" aria-label="Laboratório local de digest e HMAC">
  <p id="a15-status" role="status">Preparando operações locais. Se o painel não abrir, use o quadro de resultados abaixo.</p>
  <p><button type="button" id="a15-digest">1. Comparar digest de abc e abd</button> <button type="button" id="a15-hmac" disabled>2. Produzir HMAC de mensagem fictícia</button></p>
  <p><button type="button" id="a15-valid" disabled>3. Verificar mensagem original</button> <button type="button" id="a15-altered" disabled>4. Verificar mensagem alterada</button> <button type="button" id="a15-wrong-key" disabled>5. Verificar com outra chave</button></p>
  <pre id="a15-output" tabindex="0" aria-label="Resultado textual das operações">Aguardando a primeira operação.</pre>
</div>

**Ação:** clique em **1**. O navegador calcula `digest()` sobre `abc` e `abd`, compara o primeiro com a referência acima e mostra os dois valores. **Resultado esperado:** `abc` coincide; `abd` difere. **Registre D1:** entrada exata, digest calculado, procedência da referência e decisão. **Pare antes de chamar a cópia de autêntica:** os dois valores do painel estão na mesma página didática. Numa distribuição real, verifique a procedência e o canal do valor publicado.

## HMAC: verificar mensagem com segredo compartilhado {#hmac}

Um **código de autenticação de mensagem** (*MAC*) é calculado com uma chave secreta compartilhada. **HMAC** é uma construção de MAC baseada em hash. O emissor calcula o código sobre os bytes da mensagem; o receptor o verifica com a mesma chave. A mensagem `pedido=7;valor=10` continua legível: HMAC detecta alteração e demonstra conhecimento da chave, mas não oferece sigilo. Se duas partes conhecem a mesma chave, o código válido não distingue qual delas o criou. [RFC 2104](https://www.rfc-editor.org/info/rfc2104/) define HMAC; a [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/#hmac) fornece as operações do painel.

| Entrada | Teste nesta aula | Leitura permitida |
|---|---|---|
| Mensagem original + chave K2 + HMAC original | Verificar | Aceito sob K2, para estes bytes. |
| Mensagem alterada + K2 + HMAC original | Verificar | Rejeitado; os bytes enviados não correspondem ao código. |
| Mensagem original + outra chave + HMAC original | Verificar | Rejeitado; a chave testada não corresponde. |

**Ação:** depois de D1, clique em **2** para gerar K2 e o HMAC de `pedido=7;valor=10`. O painel mostra mensagem e código, mas não a chave. Preveja e execute os botões **3–5**, nessa ordem. **Resultado esperado:** verdadeiro, falso, falso. **Registre M1/M2/M3:** entrada que mudou, valor booleano observado e limite da inferência. **Critério de parada:** não cole um segredo em outro site nem use uma chave de produção. O painel retém apenas a última amostra em memória e uma nova operação 2 substitui a anterior.

### Quadro de resultados para acompanhar ou substituir o painel

Os valores exatos de HMAC mudam porque K2 é gerada de novo. Estas linhas são **referência de comportamento esperado**, não resultados observados em seu navegador.

| ID | Entradas | Resultado esperado | O que ainda não foi provado |
|---|---|---|---|
| D1 | SHA-256 de `abc` contra a referência NIST; depois `abd` | Coincide; depois difere | Autoria e procedência de qualquer arquivo externo. |
| M1 | Mensagem e HMAC originais, K2 | `true` | Qual detentor de K2 criou o código. |
| M2 | `pedido=7;valor=11`, HMAC original, K2 | `false` | Qual campo foi alterado fora deste teste controlado. |
| M3 | Mensagem e HMAC originais, outra chave | `false` | Se a chave correta está protegida no sistema real. |

Se o painel disser “Web Crypto indisponível”, confira HTTPS ou `localhost` e leia o quadro na ordem D1–M3. Se houver outro erro, anote botão e mensagem sem dados sensíveis. Espaços, acentos, quebras de linha e codificação mudam os bytes; confira a entrada exata antes de atribuir divergência a adulteração. A aceitação e rejeição do HMAC dependem da chave correta, mas não entregam diagnóstico causal de um evento real por si só.

## Senhas: verificar sem guardar o texto secreto {#senhas}

Uma senha é um segredo escolhido ou conhecido pelo usuário. O serviço precisa verificar a senha digitada sem armazená-la em texto legível. Se a base de **verificadores** vazar, um atacante poderá testar palpites fora do serviço. SHA-256 direto é rápido demais para essa finalidade, mesmo quando se acrescenta sal sem um esquema de custo adequado.

Um **esquema de armazenamento de senhas** recebe senha, **sal** e parâmetros de **custo**. O sal é um valor individual que diferencia os registros; não precisa ser secreto. O custo torna cada palpite mais caro. O serviço guarda o identificador do esquema, sua versão, parâmetros, sal e verificador, e usa a rotina de verificação no login. Argon2id, em biblioteca mantida e com parâmetros medidos para o ambiente, é uma opção indicada pela [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html). Um segredo adicional do servidor (*pepper*), se adotado, fica separado da base e não substitui sal nem custo.

O [NIST SP 800-63B-4, seção sobre verificadores](https://pages.nist.gov/800-63-4/sp800-63b/authenticators/) exige sal e esquema adequado com fator de custo; a [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) recomenda Argon2id e detalha parametrização e alternativas. O custo precisa ser medido no sistema real para não tornar o login inviável. Aqui **não digitaremos senhas nem simularemos um KDF fraco**: a decisão é arquitetural e pode ser verificada na configuração fictícia abaixo.

**Exemplo trabalhado — revisão de uma proposta.** Um serviço guarda `SHA-256(senha)` para cada conta. Duas contas que escolheram a mesma senha terão o mesmo digest e uma base vazada permite testar palpites rapidamente. A revisão propõe `Argon2id(senha, sal individual, parâmetros medidos)`, guarda versão/parâmetros/sal/verificador e usa a rotina de verificação da biblioteca no login. Uma senha correta é aceita; outra é rejeitada. Isso limita o ataque offline, mas **não torna senha fraca forte** e não substitui limitação de tentativas online nem proteção da base.

### Oficina de configuração: localizar o que falta

**Estado inicial:** estas três linhas são propostas fictícias de armazenamento. Os valores `S-A`, `S-B` e `V-A` são rótulos, não sais nem verificadores reais. Não há login ou derivação de senha executados nesta oficina.

| Proposta | Campos previstos na base | Decisão a investigar |
|---|---|---|
| P-A | `conta=7; esquema=SHA-256; verificador=V-A` | O que facilita palpites após vazamento? |
| P-B | `conta=7; esquema=Argon2id; sal=S-A; custo=medido; verificador=V-A` e `conta=8; esquema=Argon2id; sal=S-A; custo=medido; verificador=V-B` | O que está incorreto mesmo com esquema e custo adequados? |
| P-C | `conta=7; esquema=Argon2id; versão=registrada; sal=S-A; custo=medido; verificador=V-A` e `conta=8; esquema=Argon2id; versão=registrada; sal=S-B; custo=medido; verificador=V-B` | Que teste funcional ainda falta realizar no serviço? |

Em dupla, **preveja** qual proposta rejeitar, corrigir ou aceitar condicionalmente; **marque** os campos que sustentam a decisão; **reescreva** apenas a linha de P-B que precisa de outro sal; **registre** para P-C os dois testes a solicitar à equipe (`senha correta → aceita`, `senha incorreta → rejeitada`) e um limite da análise. Troque a revisão com outra dupla antes de abrir a resposta. **Pare** quando as três propostas tiverem decisão e motivo. Esta inspeção de configuração é prática documental; não marque os dois testes de login como executados.

<details>
<summary>Conferir a análise após registrar sua decisão</summary>

P-A é inadequada porque SHA-256 direto é rápido para palpites offline. P-B precisa de sal individual: reutilizar `S-A` entre contas elimina a diferenciação esperada. P-C contém os campos necessários para uma proposta, mas os rótulos não demonstram parametrização real, execução do esquema nem aceitação/rejeição no login; esses resultados precisam de teste funcional posterior.

</details>

**Sua decisão C2:** uma equipe quer (a) conferir se um pacote público corresponde ao valor publicado pelo fornecedor, (b) rejeitar alteração de uma mensagem entre dois serviços com segredo compartilhado e (c) guardar verificadores de senha. Para cada caso, escolha digest, HMAC ou esquema de senha; declare a entrada, o segredo quando houver, a fonte de confiança ou o sal/custo, um teste válido, uma contraprova e um limite. Em (a), diga como obterá a referência; em (c), use P-A–P-C para justificar quais campos podem ficar na base e qual segredo opcional deve ficar fora dela. Não reutilize K2 do painel como senha ou chave de produção.

### Checkpoint: separar evidência de proposta

Preencha C2 no [registro único](../atividades/A14-A18-criptografia-confianca.md#atividade): `finalidade → mecanismo → entrada/segredo/referência → D1 ou M1–M3 observado (ou quadro de referência) → caso negado → limite → decisão`. Marque **observado** apenas o que seu navegador executou; o quadro e a configuração de senha são referências e propostas. Compare uma linha com outra dupla e corrija uma inferência excessiva. O próximo encontro retomará a pergunta: se duas partes **não compartilham previamente** K2, como verificar uma assinatura e trocar material de chave?

## Atividade {#atividade}

Continue a [atividade única de criptografia e confiança](../atividades/A14-A18-criptografia-confianca.md#atividade), seção **C2 — digest, HMAC e senhas**. Registre as decisões e contraprovas acima. A entrega única ocorrerá ao fim do bloco, no prazo definido no Classroom.

## Revisão rápida

1. Dois digests iguais, calculados sobre arquivo e referência obtidos da mesma página comprometida, demonstram que o arquivo veio do fornecedor? Por quê?
2. Um HMAC válido distingue qual dos dois serviços que compartilham K2 produziu a mensagem? O conteúdo fica oculto?
3. Por que adicionar sal a SHA-256 direto ainda não é uma escolha adequada para guardar senhas?

## Referências

- [NIST FIPS 180-4 — Secure Hash Standard](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) e [exemplo oficial de SHA-256](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/examples/sha256.pdf): definição e valor de teste.
- [RFC 2104 — HMAC](https://www.rfc-editor.org/info/rfc2104/) e [W3C Web Cryptography API](https://www.w3.org/TR/WebCryptoAPI/#hmac): autenticação de mensagem e operações no navegador.
- [NIST SP 800-63B-4 — Verificadores](https://pages.nist.gov/800-63-4/sp800-63b/authenticators/) e [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html): armazenamento de senhas, sal e custo.
- [Hash e integridade no curso](../criptografia/hash.md): consulta complementar.
