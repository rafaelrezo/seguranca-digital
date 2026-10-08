# Criptografia e confiança — registro único de A14–A16

## Atividade {#atividade}

**Missão:** em dupla, construir um registro que explique qual propriedade cada mecanismo oferece, que resultado a sustenta e qual limite permanece. Preencha a mesma tabela **durante** as práticas curtas das três aulas. Há uma única entrega após A16, no prazo definido pelo docente no Classroom; não existe prática final independente.

**Escopo e preparação:** use apenas os textos, chaves descartáveis e resultados desta página e das aulas. No WSL, trabalhe em `~/cripto-a14` e `~/cripto-a15`. Não inclua no PDF senha de teste, chave privada, dados pessoais, certificado institucional nem saída sensível. Se não puder executar, use o quadro correspondente e marque a fonte como **fornecida**. Resultado previsto ou configuração proposta não são teste executado.

**Formato:** PDF legível `cripto_sobrenome1_sobrenome2.pdf`, enviado por uma pessoa da dupla. Identifique os integrantes e inclua C1–C3 e a decisão final. Se usar IA, registre o pedido, o que aceitou ou rejeitou e por quê, sem enviar dados sensíveis.

| Registro | Momento de preencher | Evidência mínima e decisão |
|---|---|---|
| **C1 — A14** | Após G1–G3 e S1–S4; use T2, D1 e M1 como apoio. | Anexe um recorte curto de G1/G2 sem a chave e os valores lógicos de S1–S4. Em até seis frases, explique: por que G2 foi rejeitado; por que S1 difere de S4; quais campos guardar para conferir uma senha sem guardá-la; e quando usar SHA-256 de arquivo ou HMAC de mensagem. Cite CBC como exemplo de cifra sem tag própria. |
| **C2 — A15** | Após T3, T4, V1–V3 e inspeção do certificado. | Papel das chaves, assinatura válida e alterada, origem da chave pública; nome SAN, prazo, finalidade e cadeia como condições de confiança. |
| **C3 — A16** | Após cartões B/N/A, terminal TLS e P1–P3/N1–N3. | Canal aceito/recusado, `403` como decisão da aplicação, chave ativa versus cópia antiga, recuperação condicional com teste pendente. |

Em C1, mostre somente os recortes e as explicações pedidos acima. Em C2/C3, use `ID → evidência → interpretação → limite/decisão`. Para resultados executados no terminal, escreva **observado** e o comando; para tabelas da página, **fornecido**; para configuração ou teste futuro, **proposto**. Não invente valores de nonce, assinatura, digest ou certificado.

**Exemplo trabalhado:** `G2: rejeitado; texto não entregue` é evidência observada de que a tag alterada não passou na abertura deste teste. G1, na mesma execução, abre o conjunto original. A comparação não identifica quem fez a alteração. Se você usou o quadro, marque a evidência como **fornecida**.

**Extensão opcional:** no arquivo AES-GCM da A14, inclua `nome=Pessoa A` no texto que será cifrado, execute outra vez e compare `Text`, `AAD` e `Ciphertext` na saída. Explique em uma frase por que um dado que exige sigilo deve entrar em `text`, e não em `aad`. Use apenas esse nome fictício e não inclua `Key` na entrega.

**Decisão final:** uma linha para **repouso, trânsito, backup e endpoint/identidade**, cada qual com `propriedade → mecanismo → evidência favorável → contraprova → limite/responsável`. Faça revisão cruzada: cada integrante comenta uma inferência do outro e registre ao menos uma correção ou divergência resolvida. Entregue somente após conferir que proposta, dado fornecido e observação estão distinguidos.

**Encerramento:** encerre o terminal, não envie arquivos `.pem` nem `copia.cbc`, e remova os diretórios de teste apenas se desejar; eles contêm somente dados artificiais, mas a chave privada de demonstração não deve ser reutilizada. Se um comando der resultado inesperado, pare, anote comando e erro sem segredo e use a alternativa fornecida.

### Critérios da entrega única

| Critério | Peso | Evidência de atendimento |
|---|---:|---|
| C1 — fundamentos e mecanismos com segredo compartilhado | 40% | G1/G2 e S1–S4 interpretados corretamente; campos do verificador sem senha; SHA-256, HMAC e CBC situados por finalidade e limite. |
| C2 — assinatura e certificado | 30% | Chaves e verificações corretas, distinção entre resultado matemático e vínculo de identidade. |
| C3 — TLS, gestão e integração | 30% | Canal versus autorização, troca/recuperação de chaves, decisão final e fonte de cada evidência. |

**Completo** apresenta mecanismo, evidência, contraprova e limite; **parcial** omite um desses elementos; **insuficiente** apenas nomeia a ferramenta ou afirma um teste que não ocorreu. O prazo e a submissão são definidos pelo docente.
