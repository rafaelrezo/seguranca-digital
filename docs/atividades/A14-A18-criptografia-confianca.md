# Criptografia e confiança — registro único de A14–A16

## Atividade {#atividade}

**Missão:** em dupla, construir um registro que explique qual propriedade cada mecanismo oferece, que resultado a sustenta e qual limite permanece. Preencha a mesma tabela **durante** as práticas curtas das três aulas. Há uma única entrega após A16, no prazo definido pelo docente no Classroom; não existe prática final independente.

**Escopo e preparação:** use apenas os textos, chaves descartáveis e resultados desta página e das aulas. No WSL, trabalhe em `~/cripto-a14` e `~/cripto-a15`. Não inclua no PDF senha de teste, chave privada, dados pessoais, certificado institucional nem saída sensível. Se não puder executar, use o quadro correspondente e marque a fonte como **fornecida**. Resultado previsto ou configuração proposta não são teste executado.

**Formato:** PDF legível `cripto_sobrenome1_sobrenome2.pdf`, enviado por uma pessoa da dupla. Identifique os integrantes e inclua C1–C3 e a decisão final. Se usar IA, registre o pedido, o que aceitou ou rejeitou e por quê, sem enviar dados sensíveis.

| Registro | Momento de preencher | Evidência mínima e decisão |
|---|---|---|
| **C1 — A14** | Após T1–T2, G1–G3, D1/M1–M3 e P-A–P-C. | Mesma chave na cifra e abertura; AES versus modo; em T2, senha + sal + PBKDF2 geram chave/IV, com sal visível na cópia; CBC oferece apenas sigilo; em GCM, identifique ciphertext e tag sem copiar a chave, mostre a aceitação da tag original e a rejeição de tag ou AAD alterados; hash versus HMAC; sal individual e custo para verificador de senha. Indique um caso válido, uma contraprova e um limite para cada finalidade. |
| **C2 — A15** | Após T3, T4, V1–V3 e inspeção do certificado. | Papel das chaves, assinatura válida e alterada, origem da chave pública; nome SAN, prazo, finalidade e cadeia como condições de confiança. |
| **C3 — A16** | Após cartões B/N/A, terminal TLS e P1–P3/N1–N3. | Canal aceito/recusado, `403` como decisão da aplicação, chave ativa versus cópia antiga, recuperação condicional com teste pendente. |

Use em cada entrada o mesmo esquema: `ID → objeto/pergunta → mecanismo → previsão → resultado e fonte → interpretação → contraprova → limite/próxima ação`. Para resultados executados no terminal, escreva **observado** e o comando; para tabelas da página, **fornecido**; para configuração ou teste futuro, **proposto**. Não invente valores de nonce, assinatura, digest ou certificado.

**Exemplo trabalhado:** `G2 → cópia cifrada → AES-GCM → tag alterada deveria ser rejeitada → InvalidTag no terminal (observado) → texto não foi entregue → G1 abre o conjunto original → a falha não identifica quem alterou`. Se você usou o quadro, troque “observado” por “fornecido”.

**Sua extensão:** escolha uma cópia com rótulo que inclui o nome fictício `Pessoa A`. Decida se o rótulo fica como AAD visível ou dentro do texto cifrado. Registre propriedade, resultado que validaria a escolha e limite do endpoint. Depois, em C3, explique como preservar acesso a essa cópia durante a troca de chave sem manter K-A apta a cifrar novas cópias.

**Decisão final:** uma linha para **repouso, trânsito, backup e endpoint/identidade**, cada qual com `propriedade → mecanismo → evidência favorável → contraprova → limite/responsável`. Faça revisão cruzada: cada integrante comenta uma inferência do outro e registre ao menos uma correção ou divergência resolvida. Entregue somente após conferir que proposta, dado fornecido e observação estão distinguidos.

**Encerramento:** encerre o terminal, não envie arquivos `.pem` nem `copia.cbc`, e remova os diretórios de teste apenas se desejar; eles contêm somente dados artificiais, mas a chave privada de demonstração não deve ser reutilizada. Se um comando der resultado inesperado, pare, anote comando e erro sem segredo e use a alternativa fornecida.

### Critérios da entrega única

| Critério | Peso | Evidência de atendimento |
|---|---:|---|
| C1 — fundamentos e mecanismos com segredo compartilhado | 40% | Definições corretas, casos válidos e contraprovas para cifra, GCM, hash/HMAC e senha; limites explícitos. |
| C2 — assinatura e certificado | 30% | Chaves e verificações corretas, distinção entre resultado matemático e vínculo de identidade. |
| C3 — TLS, gestão e integração | 30% | Canal versus autorização, troca/recuperação de chaves, decisão final e fonte de cada evidência. |

**Completo** apresenta mecanismo, evidência, contraprova e limite; **parcial** omite um desses elementos; **insuficiente** apenas nomeia a ferramenta ou afirma um teste que não ocorreu. O prazo e a submissão são definidos pelo docente.
