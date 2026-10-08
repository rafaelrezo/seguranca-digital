# A16 (provisória) — Chaves assimétricas e assinaturas digitais

Na **criptografia assimétrica**, cada participante pode ter duas chaves relacionadas: uma **privada**, mantida em segredo, e uma **pública**, distribuída para funções específicas. Esta aula explica o que significa assinar e verificar uma mensagem, como pares de chaves participam do acordo de segredos e por que uma chave pública precisa ter origem confiável. O texto `relatorio=7;resultado=aprovado` serve apenas para testar a verificação.

**Tempo:** 100 minutos (50 de conceitos e 50 de prática guiada). **Base:** hash e HMAC da [A15](A15-hash-hmac-senhas.md); seus papéis são retomados abaixo. **Recursos:** navegador com JavaScript e Web Crypto em HTTPS ou `localhost`, ou o quadro de resultados. Use apenas a mensagem fictícia; não insira documentos ou chaves reais. O registro C3 integra a [atividade única](../atividades/A14-A18-criptografia-confianca.md#atividade).

**Objetivos de aprendizagem**

1. Distinguir as funções de cifrar, assinar e estabelecer um segredo comum, indicando as chaves usadas.
2. Gerar pares de teste, assinar uma mensagem e verificar os resultados com mensagem íntegra, mensagem alterada e chave pública diferente.
3. Justificar a aceitação condicional de uma assinatura, separando validade matemática da confiança na identidade vinculada à chave.

## Par de chaves: segredo privado e informação pública {#funcoes}

As duas chaves de um par são geradas juntas, mas têm papéis distintos. A chave **privada** deve permanecer sob controle do titular. A chave **pública** pode ser distribuída; sua divulgação não é uma falha. Isso não significa que qualquer chave pública recebida seja confiável: para associá-la a uma pessoa ou serviço, é preciso verificar sua origem. Um par de chaves não substitui a chave simétrica compartilhada da A14; mecanismos diferentes usam chaves diferentes.

Três operações precisam ser separadas:

| Necessidade | Mecanismo e chaves | O que se observa | Limite |
|---|---|---|---|
| Impedir leitura da cópia | Cifra autenticada, como AES-GCM da A14: a mesma chave secreta cifra e abre. | Sem chave, não se recupera o texto; alteração autenticada é rejeitada. | O processo que usa a chave vê o texto. |
| Verificar mensagem e chave usada | Assinatura: a chave **privada** assina; a **pública** correspondente verifica. | Verificação válida ou inválida para mensagem, assinatura e chave recebidas. | Não oculta a mensagem nem prova, sozinha, a identidade do titular. |
| Chegar a material secreto comum | Acordo de chaves: participantes combinam material público e suas próprias chaves privadas. | Ambos derivam um segredo sob as premissas do protocolo. | Precisa autenticar os participantes para evitar troca de chaves por terceiro. |

Uma **assinatura digital** é um valor calculado sobre os bytes de uma mensagem com a chave privada. A verificação usa a mensagem, a assinatura e a chave pública correspondente. Se qualquer uma dessas entradas não corresponder, a verificação falha. Assinar não é “cifrar com a chave privada”: a mensagem pode permanecer legível, e assinatura não oferece confidencialidade. O painel usa **ECDSA**, algoritmo de assinatura com curva P-256 e SHA-256. SHA-256 participa do cálculo, mas um digest isolado não é assinatura. Consulte [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/#ecdsa) e [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final).

No **acordo de chaves**, duas partes combinam informações públicas com suas próprias chaves privadas para derivar um segredo comum. **ECDH** é um exemplo. O acordo, sozinho, não autentica a identidade da outra parte; isso exige mecanismo adicional. O TLS da A17 combinará essas funções. A [NIST SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final) descreve esquemas de estabelecimento de chaves. Nesta aula, a operação prática concentra-se na assinatura.

## Origem da chave pública: o limite da verificação {#par}

Nesta página, **K1** é o par que assina e **K2** é outro par, usado como contraprova. Os IDs valem apenas aqui. A parte pública de K1 não precisa de sigilo, mas precisa de **origem confiável e proteção contra substituição**. Se um terceiro substituir a chave pública anunciada pela sua, poderá apresentar uma assinatura válida sob essa outra chave e alegar uma identidade que não demonstrou possuir.

Neste painel, as chaves privadas são geradas como **não exportáveis** pela Web Crypto e ficam apenas na memória da página. A chave pública aparece como coordenadas `x` e `y` em formato JWK para diferenciar K1 de K2; esses valores não são uma identidade pessoal. Recarregar a página cria um novo estado. Não use o painel para proteger arquivos ou assinar documentos reais.

## Demonstração: assinar e testar três verificações {#demonstracao}

**Estado inicial:** o painel mostra “Pronto”; nenhum arquivo é lido ou transmitido. Cada botão executa uma operação na memória do navegador. O resultado textual informa a chave e a mensagem usadas. Registre a previsão antes de cada clique e o resultado depois. O código está disponível em [a16-assinaturas.js](../javascripts/a16-assinaturas.js).

<div id="a16-signatures" aria-label="Demonstração de assinatura digital">
  <p id="a16-status" role="status">Preparando a demonstração. Se não abrir, use o quadro alternativo.</p>
  <p><button type="button" id="a16-generate">1. Gerar K1 e K2</button> <button type="button" id="a16-sign" disabled>2. Assinar com K1 privada</button></p>
  <p><button type="button" id="a16-valid" disabled>V1. Original + K1 pública</button> <button type="button" id="a16-changed" disabled>V2. Alterada + K1 pública</button> <button type="button" id="a16-wrong" disabled>V3. Original + K2 pública</button></p>
  <pre id="a16-output" tabindex="0" aria-label="Resultado textual da demonstração">Aguardando a primeira operação.</pre>
</div>

1. **Gerar:** clique em “Gerar K1 e K2”. Espera-se que `x` e `y` sejam diferentes nos dois pares. Registre `K1 ≠ K2`; não copie os valores completos. Pare se o painel acusar erro e use o quadro alternativo.
2. **Assinar:** clique em “Assinar com K1 privada”. O texto `relatorio=7;resultado=aprovado` continua visível; surge uma assinatura hexadecimal. Registre qual chave assinou e se houve sigilo do texto. Pare antes de verificar e preveja V1, V2 e V3.
3. **Verificar:** clique em V1, V2 e V3, um por vez. Após cada clique, compare a previsão com `true` ou `false` e complete a tabela abaixo. **Critério de parada:** três resultados registrados e explicados. Uma mudança de um único caractere já seria suficiente para a contraprova; esta página troca `aprovado` por `reprovado` para facilitar a leitura.

| Teste | Mensagem | Chave pública | Sua previsão | Resultado observado | O que isso permite concluir? |
|---|---|---|---|---|---|
| V1 | Original | K1 |  |  |  |
| V2 | Alterada | K1 |  |  |  |
| V3 | Original | K2 |  |  |  |

### Exemplo trabalhado: interpretar V2

Em V2, a assinatura foi gerada sobre `resultado=aprovado`, mas a verificação recebe `resultado=reprovado` com a mesma K1 pública. O resultado esperado é **inválida**. A conclusão é que aquela combinação de mensagem, assinatura e chave não confere; não é possível concluir apenas daí se houve fraude, erro de transporte ou seleção errada do arquivo. Também não se conclui que o texto original era secreto: ambos os textos estão legíveis.

### Alternativa completa sem o painel {#alternativa}

Use este quadro didático quando o navegador não oferecer Web Crypto. As saídas são **resultados de referência fornecidos**, sem valores de chaves ou assinatura reproduzíveis; não as apresente como observação sua ou teste executado. Estado assumido pelo quadro: a assinatura fictícia `S1` corresponde à mensagem original sob K1 privada. K1 e K2 são pares independentes. Aplique a regra de que a verificação confere a combinação exata **mensagem + assinatura + chave pública correspondente**.

| Caso | Mensagem entregue | Assinatura | Chave pública | Saída fornecida |
|---|---|---|---|---|
| V1 | `relatorio=7;resultado=aprovado` | S1 | K1 | `true` |
| V2 | `relatorio=7;resultado=reprovado` | S1 | K1 | `false` |
| V3 | `relatorio=7;resultado=aprovado` | S1 | K2 | `false` |

Preencha a mesma tabela de interpretação, marcando a saída como **fornecida**, não observada. Se apenas a chave anunciada for substituída por K2, qual verificação muda? Se a equipe aceitar qualquer chave pública recebida junto com a mensagem, que pergunta continua sem resposta?

## Confiança: decidir quando aceitar {#confianca}

V1 confirma a correspondência matemática entre aqueles bytes, S1 e K1 pública. **Não confirma que K1 pertence à pessoa ou serviço alegado.** Antes de aceitar um relatório de uma fonte específica, é necessário obter a chave pública por um canal confiável ou validar um vínculo verificável. A [FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) exige proteção contra substituição da chave pública e confiança no vínculo com seu titular. Na A17, certificados e TLS fornecerão um caso concreto desse vínculo, junto com seus limites.

**Decisão C3:** redija duas frases. Na primeira, diga qual dos testes V1–V3 permite aceitar a **integridade da combinação** sob a chave testada e quais rejeitar. Na segunda, diga qual evidência adicional você exigiria para aceitar a identidade do assinante. Não basta escrever “assinatura válida, então é confiável”. Acrescente C3 ao [registro único da atividade de criptografia e confiança](../atividades/A14-A18-criptografia-confianca.md#atividade); o prazo e a entrega final são definidos pelo docente no Classroom.

Se a verificação falhar, confira nesta ordem: mensagem exata e sua codificação, assinatura correspondente, chave pública selecionada e algoritmo. Não “corrija” uma falha aceitando texto parcial ou escolhendo qualquer chave que produza `true`. Se o painel não carregar em HTTPS ou `localhost`, use o quadro acima e registre a limitação. Encerre recarregando a página; os pares de teste deixam de estar acessíveis por ela.

**Revisão rápida**

1. Uma assinatura digital esconde o conteúdo assinado? Qual mecanismo da A14 seria usado para isso?
2. Por que V3 falha mesmo com a mensagem original?
3. Que evidência falta quando V1 retorna `true` e alguém afirma “foi assinado pela organização X”?

**Referências:** [Web Crypto API, ECDSA](https://www.w3.org/TR/WebCryptoAPI/#ecdsa); [NIST FIPS 186-5, assinaturas digitais](https://csrc.nist.gov/pubs/fips/186-5/final); [NIST SP 800-56A Rev. 3, estabelecimento de chaves](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final). Acesso em 6 out. 2026.

<script src="../../javascripts/a16-assinaturas.js" defer></script>
