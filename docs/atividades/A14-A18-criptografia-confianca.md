# Criptografia e confiança — registro único de A14–A16

## Atividade {#atividade}

**Missão:** em dupla, construir um registro que explique qual propriedade cada mecanismo oferece, que resultado a sustenta e qual limite permanece. Preencha a mesma tabela **durante** as práticas curtas das três aulas. Há uma única entrega após A16, no prazo definido pelo docente no Classroom; não existe prática final independente.

**Escopo e preparação:** use apenas os textos, chaves descartáveis e resultados desta página e das aulas. No WSL, trabalhe em `~/cripto-a14`, `~/cripto-a15` e `~/cripto-a16`. Não inclua no PDF senha de teste, chave privada, dados pessoais, certificado institucional nem saída sensível. Se não puder executar, use o quadro correspondente e marque a fonte como **fornecida**. Resultado previsto ou configuração proposta não são teste executado.

**Formato:** PDF legível `cripto_sobrenome1_sobrenome2.pdf`, enviado por uma pessoa da dupla. Identifique os integrantes e inclua C1–C3 e a decisão final. Se usar IA, registre o pedido, o que aceitou ou rejeitou e por quê, sem enviar dados sensíveis.

| Registro | Momento de preencher | Evidência mínima e decisão |
|---|---|---|
| **C1 — A14** | Após T2 e G1–G3. G4–G6 são extensões opcionais. | Anexe um recorte curto de G1/G2 sem senha nem chave. Em até quatro frases, explique a rejeição de G2, os campos públicos do envelope e o segredo que o receptor já precisava ter. Cite CBC como cifra sem tag própria. |
| **C2 — A15** | Após RSA/híbrida, T3, T4, V1–V3 e inspeção do certificado. | Uma frase relacionando o limite RSA observado/fornecido em R1/R2 à chave curta e ao texto longo de H1/H2. Papel das chaves, assinatura válida e alterada, origem da chave pública; nome SAN, prazo, finalidade e cadeia como condições de confiança. |
| **C3 — A16** | Após canal/ciclo e bloco final D1, M1–M3 e S1–S4. | Registre um caso de canal aceito/recusado, a função de `CertificateVerify` e `Finished` e uma decisão de troca/recuperação de chave, com seu limite. Em duas frases, diferencie controle/dados no OpenVPN e indique onde a proteção VPN termina. Acrescente os valores lógicos de S1–S4. Em até quatro frases, explique S1 versus S4, os campos necessários ao verificador sem senha e a diferença de finalidade entre SHA-256 e HMAC. |

Mostre somente os recortes e as explicações pedidos acima. Para decisões de C2/C3, use `ID → evidência → interpretação → limite/decisão`. Para resultados executados no terminal, escreva **observado** e o comando; para tabelas da página, **fornecido**; para configuração ou teste futuro, **proposto**. Não invente valores de nonce, assinatura, digest ou certificado.

**Exemplo trabalhado:** `G2: rejeitado; texto não entregue` é evidência observada de que a tag alterada não passou na abertura deste teste. G1, na mesma execução, abre o conjunto original. A comparação não identifica quem fez a alteração. Se você usou o quadro, marque a evidência como **fornecida**.

**Extensão opcional:** execute G4–G6 na A14 e escolha um dos resultados. Explique por que novo nonce, abertura repetida e segredo correto são condições diferentes. Não crie outra entrega nem copie `Key` ou a senha. Na A16, S4 altera somente o sal da segunda conta; restaure a linha original depois de observar o efeito.

**Decisão final:** uma linha para **repouso, trânsito, backup e endpoint/identidade**, cada qual com `propriedade → mecanismo → evidência favorável → contraprova → limite/responsável`. Faça revisão cruzada: cada integrante comenta uma inferência do outro e registre ao menos uma correção ou divergência resolvida. Entregue somente após conferir que proposta, dado fornecido e observação estão distinguidos.

**Encerramento:** encerre o terminal, não envie arquivos `.pem` nem `copia.cbc`, e remova os diretórios de teste apenas se desejar; eles contêm somente dados artificiais, mas a chave privada de demonstração não deve ser reutilizada. Se um comando der resultado inesperado, pare, anote comando e erro sem segredo e use a alternativa fornecida.

### Critérios da entrega única

| Critério | Peso | Evidência de atendimento |
|---|---:|---|
| C1 — cifra e requisito do segredo compartilhado | 30% | G1/G2 interpretados; envelope público separado de senha/chave; limite de CBC e necessidade do segredo prévio no receptor. |
| C2 — assinatura e certificado | 30% | RSA reservado à chave curta, AES-GCM ao conteúdo; papéis e verificações corretos, distinção entre resultado matemático e vínculo de identidade. |
| C3 — TLS, gestão, hash e senhas | 40% | Sequência TLS, canais VPN e ciclo situados; S1–S4 interpretados, verificador sem senha e finalidade de SHA-256/HMAC; integração e fontes. |

**Completo** apresenta mecanismo, evidência, contraprova e limite; **parcial** omite um desses elementos; **insuficiente** apenas nomeia a ferramenta ou afirma um teste que não ocorreu. O prazo e a submissão são definidos pelo docente.
