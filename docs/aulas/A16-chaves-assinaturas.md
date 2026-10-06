# A16 (provisória) — Assinar e verificar: de quem é esta chave?

Uma equipe recebeu `relatorio=7;resultado=aprovado` e uma assinatura. Precisa decidir se os bytes são os mesmos que foram assinados e se a chave pública usada pertence à fonte esperada. **Uma verificação matemática responde às duas perguntas?**

**Tempo:** 100 minutos (50 de conceitos e 50 de prática guiada). **Base:** hash e HMAC da A15; não é necessário lembrar um caso ou empresa. **Recursos:** navegador com JavaScript e Web Crypto em HTTPS ou `localhost`, ou o quadro de evidências desta página. Use apenas a mensagem fictícia. Não insira nomes, documentos ou chaves reais. O registro de hoje é o **C3 da atividade única de criptografia e confiança**, sem entrega separada.

**Objetivos de aprendizagem**

1. Distinguir as funções de cifra, assinatura e acordo de chaves, indicando qual chave e qual propriedade entram em cada operação.
2. Gerar pares de teste, assinar uma mensagem e verificar os resultados com mensagem íntegra, mensagem alterada e chave pública diferente.
3. Justificar a aceitação condicional de uma assinatura, separando validade matemática da confiança na identidade vinculada à chave.

## Funções das chaves: escolher o mecanismo {#funcoes}

| Necessidade | Mecanismo e chaves | O que se observa | Limite |
|---|---|---|---|
| Impedir leitura da cópia | Cifra autenticada, como AES-GCM da A14: a mesma chave secreta cifra e abre. | Sem chave, não se recupera o texto; alteração autenticada é rejeitada. | O processo que usa a chave vê o texto. |
| Atestar autoria da chave e integridade dos bytes | Assinatura: a chave **privada** assina; a **pública** correspondente verifica. | Verificação válida ou inválida para mensagem, assinatura e chave recebidas. | Não oculta a mensagem nem prova, sozinha, quem controla a chave. |
| Chegar a material secreto comum | Acordo de chaves: participantes combinam material público e suas próprias chaves privadas. | Ambos derivam um segredo sob as premissas do protocolo. | Precisa autenticar os participantes para evitar troca de chaves por terceiro. |

**Assinar não é “cifrar com a chave privada”.** A assinatura é um valor verificável sobre os bytes da mensagem segundo um algoritmo próprio. A mensagem permanece legível. A operação da página usa ECDSA com curva P-256 e SHA-256, definidos pela [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/#ecdsa) e pela [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final). SHA-256 participa do algoritmo de assinatura; não substitui a assinatura, nem transforma um digest sem segredo em prova de autoria.

No acordo de chaves, como ECDH, cada lado contribui para chegar a um segredo; não há uma assinatura automática do parceiro. Essa função aparecerá no canal TLS na A17. A [NIST SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final) descreve esquemas de estabelecimento de chaves. Aqui não geraremos nem exportaremos um segredo compartilhado: a prática se concentra na decisão verificável de assinatura.

## Par de chaves: localizar o que pode circular {#par}

Nesta página, o par **K1** tem uma parte privada, guardada pelo assinante, e uma parte pública, que pode circular para verificação. O par independente **K2** servirá como contraprova. Esses IDs são locais à A16: K1 não é a chave AES-GCM da A14, e K2 não é a chave HMAC da A15. A chave pública não precisa de sigilo, mas precisa de **origem confiável e proteção contra substituição**. Se alguém trocar a chave pública anunciada pela sua própria, conseguirá apresentar uma assinatura matematicamente válida para outra identidade alegada.

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
