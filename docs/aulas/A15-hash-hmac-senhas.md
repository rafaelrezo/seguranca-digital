# A15 (provisória) — Hash, HMAC e senhas: escolher a verificação certa

Na A14, AES-GCM ocultou o texto de uma cópia e rejeitou uma alteração. Agora considere três pedidos distintos: **comparar uma cópia com um valor publicado por uma fonte confiável**, **aceitar uma mensagem de quem compartilha uma chave** e **verificar a senha de uma conta**. Todos produzem valores que parecem sequências de bytes, mas as entradas, as premissas e as decisões são diferentes.

**Tempo:** 100 minutos (55 de conceitos e 45 de prática guiada). **Recursos:** esta página em navegador com JavaScript e Web Crypto disponível em HTTPS ou `localhost`; o quadro de resultados permite participar sem executar o painel. Use somente os textos fictícios apresentados aqui. Não digite senhas, chaves ou arquivos reais. **Base:** integridade e limite da chave compartilhada vistos na [A14](A14-cifra-simetrica-autenticada.md). Esta aula continua a [atividade única de criptografia e confiança](../atividades/A14-A18-criptografia-confianca.md#atividade); o checkpoint de hoje não é uma entrega separada.

**Objetivos de aprendizagem**

1. Calcular e comparar um digest SHA-256, indicando de onde veio o valor de referência e o que a comparação permite concluir.
2. Verificar um HMAC-SHA-256 para mensagem original, mensagem alterada e chave diferente, distinguindo segredo compartilhado de identidade individual.
3. Escolher um esquema adequado para verificação de senha com sal e custo, explicando por que SHA-256 direto e HMAC de mensagem não substituem esse esquema.

## Digest: comparar bytes com uma referência confiável {#digest}

**Síntese:** um hash criptográfico transforma bytes de entrada em um digest de tamanho fixo. O SHA-256 produz 256 bits. A mesma sequência de bytes produz o mesmo digest; uma mudança na entrada tende a produzir outro. O digest **não oculta** a entrada, não identifica quem publicou o arquivo e não prova sozinho que a cópia é legítima. Para verificar uma distribuição, compare com um valor de referência obtido **por um canal confiável e separado da cópia**. Se atacante puder substituir arquivo e valor de referência juntos, a comparação pode concordar com o arquivo adulterado.

O exemplo `abc` é uma entrada de teste com digest SHA-256 conhecido: `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`. São os três bytes ASCII `61 62 63`, sem aspas, espaço ou quebra de linha. A [NIST FIPS 180-4](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) especifica SHA-256; o [exemplo oficial da NIST](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/examples/sha256.pdf) fornece esse valor. Uma comparação exige mesma codificação e mesmos bytes; visualmente parecido não basta.

**Previsão:** ao trocar `abc` por `abd`, o digest será igual ou diferente? Isso prova autoria? Registre a previsão antes do clique.

<div id="a15-checks" aria-label="Laboratório local de digest e HMAC">
  <p id="a15-status" role="status">Preparando operações locais. Se o painel não abrir, use o quadro de resultados abaixo.</p>
  <p><button type="button" id="a15-digest">1. Comparar digest de abc e abd</button> <button type="button" id="a15-hmac" disabled>2. Produzir HMAC de mensagem fictícia</button></p>
  <p><button type="button" id="a15-valid" disabled>3. Verificar mensagem original</button> <button type="button" id="a15-altered" disabled>4. Verificar mensagem alterada</button> <button type="button" id="a15-wrong-key" disabled>5. Verificar com outra chave</button></p>
  <pre id="a15-output" tabindex="0" aria-label="Resultado textual das operações">Aguardando a primeira operação.</pre>
</div>

**Ação:** clique em **1**. O navegador calcula `digest()` sobre `abc` e `abd`, compara o primeiro com a referência acima e mostra os dois valores. **Resultado esperado:** `abc` coincide; `abd` difere. **Registre D1:** entrada exata, digest calculado, procedência da referência e decisão. **Pare antes de chamar a cópia de autêntica:** os dois valores do painel estão na mesma página didática. Numa distribuição real, verifique a procedência e o canal do valor publicado.

## HMAC: verificar mensagem com segredo compartilhado {#hmac}

Um **HMAC** combina hash e chave secreta para produzir um código de autenticação da mensagem. Quem verifica precisa da mesma chave. A chave desta demonstração é gerada na aba, não é exibida nem exportada. O HMAC não cifra a mensagem: `pedido=7;valor=10` permanece legível. Quem souber a chave pode criar códigos válidos; por isso uma verificação válida **não distingue dois detentores da mesma chave** e não prova a identidade individual do autor. Uma chave copiada ou um endpoint comprometido muda essa premissa. [RFC 2104](https://www.rfc-editor.org/info/rfc2104/) define a construção; a [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/#hmac) fornece `sign()` e `verify()` no navegador.

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

O verificador de senha enfrenta outro problema: se a base de verificadores vazar, o atacante pode testar palpites **fora do serviço**, sem limite de tentativas online. SHA-256 é rápido por projeto e, mesmo com um sal acrescentado ingenuamente, permite muitos palpites baratos. HMAC de mensagem depende de um segredo compartilhado e resolve outra pergunta. Para senhas, use um **esquema de derivação/verificação de senha** com sal individual aleatório e custo configurado, como Argon2id quando disponível, em uma biblioteca mantida. O registro guarda identificador do esquema, parâmetros de custo, sal e verificador; o texto da senha não é armazenado. O sal não é secreto; seu papel é diferenciar registros e dificultar tabelas pré-computadas. Um segredo adicional do verificador (*pepper*), se adotado, fica separado da base e não substitui sal nem custo.

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
