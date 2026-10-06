# A16 (provisória) — Chaves assimétricas e assinaturas

**Estado:** material prospectivo; produção não comprova realização de A13–A15. **Carga:** 100 minutos efetivos, 50 de teoria e 50 de prática guiada, com operação direta dos estudantes quando houver navegador compatível. **Atividade:** C3 do registro único A14–A18; sem tarefa adicional no Classroom.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa | Funções de cifra, assinatura e acordo de chaves; par público/privado; assinatura ECDSA e verificação; limite do vínculo chave–identidade. |
| Ganho em relação à A15 | A15 distingue digest, HMAC e senha. A16 acrescenta verificação pública sem compartilhar o segredo de assinatura e evidencia a substituição da chave pública. Não pressupor que C2 foi realizado. |
| Três objetivos | Escolher função e chaves; executar/comparar V1–V3; formular aceitação condicional com evidência de identidade pendente. |
| Pergunta | Uma assinatura válida prova que a mensagem veio da organização alegada? |
| Pré-requisitos | Conceitos de integridade, chave e hash. Retomar em dois minutos se necessário. |
| Infraestrutura | MkDocs em HTTPS/localhost, navegador com Web Crypto, projeção; quadro alternativo integral na página. Sem instalação, arquivo externo, conta ou segredo real. |
| Evidência e critério | Tabela V1–V3 com previsão, resultado e limite; C3 distingue validade matemática de identidade. |
| Fontes | [W3C Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/#ecdsa), [NIST FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final), [NIST SP 800-56A Rev. 3](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final). |

**Cadeia:** herança conceitual de A15 (hash/HMAC) → preparar a necessidade de verificação pública → gerar K1/K2 e assinar mensagem fictícia → ler V1–V3 → distinguir assinatura, cifra e acordo → condicionar aceitação à origem da chave → validar previsões e contraprovas → C3 → reabrir em A17 o vínculo chave pública–identidade por certificado e o papel do acordo no TLS.

## Condução e carga

| Minutos | T/P | Condução, participação e espera |
|---|---|---|
| 0–12 | 9/3 | Apresentar mensagem e assinatura; cada estudante responde se “válida” bastaria para afirmar autoria institucional. Colher duas justificativas, sem antecipar certificado. |
| 12–28 | 13/3 | Comparar as três funções da tabela. Perguntar qual protege sigilo e qual permite verificação por terceiro. Corrigir “cifrar com chave privada”. |
| 28–43 | 5/10 | Abrir painel e gerar K1/K2. Estudantes operam quando possível; todos localizam `x`/`y`, distinguem chave pública de privada e aguardam K1/K2 geradas. |
| 43–58 | 5/10 | Assinar texto fixo com K1 privada. Pausa para notar que texto continua legível; registrar previsão V1–V3 antes dos cliques. |
| 58–77 | 4/15 | Executar V1, V2 e V3 um de cada vez; parada após cada saída para preencher tabela. Usar quadro alternativo se necessário. |
| 77–91 | 10/4 | Interpretar V2 como exemplo; discutir erro de arquivo versus adulteração e substituição de chave. Cada dupla redige C3. |
| 91–100 | 4/5 | Revisão rápida, comparação cruzada de C3 e ponte: como obter vínculo confiável chave–identidade? Introduzir somente a pergunta de A17. |
| **Total** | **50/50** | **100 minutos** |

## Respostas, limites e contingência

- V1 `true`; V2 e V3 `false`. V1 valida a combinação de bytes, assinatura e K1 pública. Não certifica identidade, intenção, segurança do endpoint nem sigilo.
- V2 não identifica a causa da divergência. Pode ser adulteração, erro ou escolha de arquivo. V3 contraprova correspondência de par, sem dizer se K2 é maliciosa.
- Acordo de chaves tem função de estabelecer segredo compartilhado; não assina por si nem autentica automaticamente o parceiro. Em A17, relacionar acordo, autenticação por certificado e proteção do canal sem fazer uma implementação completa de TLS.
- Se Web Crypto falhar, usar tabela V1–V3 da página, marcada como resultado fornecido. Preservar previsão, comparação e C3; não atribuir aos estudantes execução real.
- Se o painel travar entre cliques, recarregar reinicia pares e assinatura. Gerar e assinar novamente antes de verificar. Não copiar assinaturas de uma rodada para outra.
- C3 aceitável: “V1 é matematicamente válida para K1 e a mensagem original; V2/V3 são inválidas. Para atribuir autoria à organização, preciso verificar de fonte confiável que K1 pública lhe pertence.” Pedir precisão se aparecer “criptografou”, “qualquer chave pública serve” ou “certificado garante autorização da aplicação”.

**Ponte concreta:** o campo pendente de C3 é **origem/vínculo da chave pública**. A17 reabre esse campo com nome, cadeia, validade e finalidade do certificado; então relaciona a autenticação ao acordo de chaves e à proteção do canal TLS. Não declarar C3 entregue ou A16 ministrada pela existência destes arquivos.
