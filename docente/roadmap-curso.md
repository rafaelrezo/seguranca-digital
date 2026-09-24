# Roadmap vigente — Segurança Digital, A08–A31

**Decisão docente consolidada em 17 set. 2026.** A01–A07 são história ministrada; A08, A09 e A10 também foram realizadas; a confirmação docente da A10 foi registrada em 24 set. 2026, sem informação da data do encontro, versão exata utilizada ou execução de cada checkpoint. O material publicado dessas aulas não comprova os produtos individuais da turma. O material publicado da A10 abre uma **nova matriz de riscos industrial**, sem atribuir à turma fatos da A09. A11–A12 têm conteúdo MkDocs produzido localmente em 24 set. 2026, sem realização ou publicação remota confirmadas. A13–A31 são planejamento prospectivo: título, recorte e prática serão refinados na ficha de cada aula, sem mudar sua competência e sua ponte sem registrar a revisão aqui.

**Revisão de 24 set. 2026:** A11–A12 passam a compor um bloco integrado e predominantemente expositivo, com exemplos concretos de apoio, sem cenário imaginário condutor. Ver [planejamento integrado](A11-A12-protecao-dados-endpoints/planejamento-integrado.md).

## Critérios de progressão

- Começar pela competência e pela evidência que o estudante deverá produzir; escolher caso, ferramenta e proporção de teoria/prática em seguida. A continuidade de cenário é flexível.
- A matriz industrial é um recurso **incremental quando pertinente**, sem obrigação de percorrer todos os blocos. O material A10 apresenta R10-01/R10-02; A11–A12 usam exemplos independentes e não exigem novas linhas. Novas linhas só surgem com novo evento, consequência ou contexto. Não transportar classes de risco entre TI e OT sem revisar premissas.
- Em cada aula, oferecer leitura técnica completa e sínteses curtas destacadas no MkDocs. A prática presencial é conduzida pelo professor, com previsão, rastro, interpretação e decisão. Nenhum slide ou PDF novo é requisito.
- Preservar cinco atividades principais por macrocomponente. A atividade A08–A09 já terminou; A10 tem checkpoint presencial. A11–A12, A13–A18, A19–A22 e A23–A31 terão uma entrega cumulativa por bloco, com operação essencial demonstrada antes da entrega.
- A01–A10 não são reescritas como se a turma tivesse observado ou produzido evidências novas. Uma nova edição do começo do curso poderá melhorar o apoio de estudo, com indicação de que é revisão posterior.

## Conteúdo histórico A01–A07

Esta tabela descreve temas do material e o relato de realização; **não declara que cada estudante executou ou entregou os produtos**. Antes de usar um detalhe como pré-requisito, conferir o material vigente usado no encontro e o relato docente.

| Aula | Conteúdo apresentado como base do percurso |
|---|---|
| A01 | Incidente em linha de produção; fatos, hipóteses e propriedades de segurança. |
| A02 | Ativos, ameaças, vulnerabilidades, exposição e escolha inicial de controle. |
| A03 | Registros e passagem de observação para ameaça candidata. |
| A04 | Fluxo legítimo da aplicação, requisição, identidade, ação, recurso e fronteira navegador–servidor. |
| A05 | Sessão, propriedade de recurso, autorização e accounting. |
| A06 | Diagrama de fluxo de dados e ameaças testáveis com STRIDE. |
| A07 | Comportamentos de um relato e mapeamento ATT&CK Enterprise/ICS, com limite entre técnica e risco avaliado. |

## Sequência e evidências

Os minutos T/P abaixo são **alocação de planejamento**, integrados na condução; não determinam blocos expositivos separados. A08 e A09 conservam 60T/40P cada. A10 conserva os 40T/60P publicados.

| Aula | T/P | Competência e pergunta principal | Evidência ou decisão que prepara a seguinte |
|---|---:|---|---|
| A08 — SGSI e governança | 60/40 | Delimitar escopo, responsabilidades e objetivos de proteção. | Registro de governança para avaliar riscos. **Ministrada.** |
| A09 — avaliação de riscos | 60/40 | Formular, classificar e tratar riscos com premissas e limites. | Matriz e atividade A08–A09 encerradas. **Ministrada.** |
| [A10 — engenharia social e segurança física](../docs/aulas/A10-engenharia-social-seguranca-fisica.md) | 40/60 | A partir de R10-01/R10-02, distinguir controles contra engenharia social e controles físicos de acesso, seus rastros e limites; testar confirmação e limite de área. | R10-01/R10-02 com controle social e físico, testes A–C no laboratório integrado, lacuna de *tailgating* e pergunta sobre dados acessíveis. **Ministrada; confirmação docente registrada em 24 set. 2026.** |
| [A11 — proteção de dados: classificação, circulação e controles](../docs/aulas/A11-protecao-de-dados.md) | 70/30 | Mapear dados e cópias, classificar por impacto e finalidade, relacionar LGPD e implementar controles de cópia e acesso; explicar detecção e cobertura DLP, validar regra/exceção e distinguir armazenamento de recuperação verificável. | Mapa de dado/cópias, decisão de proteção, regra com contraprova e critério de restauração; pergunta sobre os privilégios do processo que manipula o dado. |
| [A12 — proteção de dispositivos: malware, detecção e resposta](../docs/aulas/A12-protecao-de-endpoints.md) | 70/30 | Explicar execução, privilégios, persistência e propagação; relacionar mecanismos de malware às camadas defensivas; correlacionar processo, arquivo e rede, avaliar alerta e justificar contenção/recuperação. | Triagem com linha do tempo, evidência ausente, alcance da contenção e critério de retorno; integração dos controles de dado e endpoint e encerramento da atividade única. |
| A13 — cifra simétrica autenticada | 60/40 | Ligar confidencialidade e integridade a AEAD, chave, nonce e alteração detectada. | Dados e propriedades a proteger; teste positivo/negativo com segredo descartável. |
| A14 — hash, HMAC e senhas | 60/40 | Distinguir digest, autenticação de mensagem, sal, KDF e armazenamento de senha. | Referência confiável e limite de cada mecanismo. |
| A15 — assimétrica, acordo e assinatura | 60/40 | Diferenciar cifrar, assinar e acordar segredo; experimentar par de chaves e (EC)DH em laboratório. | Verificação com chave correta/incorreta e necessidade de identidade da chave. |
| A16 — certificados e PKI | 55/45 | Examinar cadeia, nome, validade, finalidade, revogação e vínculo identidade–chave. | Certificado aceito/recusado com motivo e limite. |
| A17 — TLS, VPN, acesso remoto e tokens | 45/55 | Explicar canal autenticado, dados em trânsito, estação de origem e alcance de token; separar proteção do canal de autorização da ação. | Diagrama de acesso remoto, casos permitido/negado e estado do dado em repouso. |
| A18 — ciclo de chaves e integração | 45/55 | Gerar, armazenar, distribuir, rotacionar, revogar e recuperar chaves; integrar repouso/trânsito/backup. | Plano de confiança e recuperação testado; entrega cumulativa de criptografia. |
| A19 — processo e risco OT | 55/45 | Reconstruir função normal, variável, unidade, estado seguro e consequência física em simulador isolado. | Matriz OT com fatos e incerteza próprios, sem herdar classe de TI. |
| A20 — fundamentos NIST OT e ISA/IEC 62443 | 60/40 | Traduzir requisitos de segurança, disponibilidade e segurança de pessoas; mapear ativos, papéis, zonas e conduítes. | Requisitos e fronteiras justificadas; referência usada pela sua função, sem alegar conformidade. |
| A21 — defesa em profundidade e acesso OT | 40/60 | Testar segmentação, identidade, janela, caminho remoto e regra de menor alcance; situar zero trust sem interromper o processo. | Fluxos permitidos/negados e função preservada. |
| A22 — observação, resposta e recuperação OT | 35/65 | Interpretar telemetria, distinguir anomalia de incidente, escolher contenção segura e retorno. | Ensaio ou pacote de evidências, limite operacional, risco residual e entrega OT. |
| A23 — regras de engajamento | 55/45 | Definir autorização, alvo, escopo, janela, parada, recuperação e evidência antes do teste. | Plano de teste restrito a laboratório e linha de base funcional. |
| A24 — reconhecimento autorizado | 45/55 | Identificar superfície e fluxos reais do alvo isolado, sem varrer terceiros. | Inventário observável e duas hipóteses priorizadas. |
| A25 — autenticação e autorização | 45/55 | Testar limites de identidade, objeto e função; relacionar achado a CWE-862/863/639 quando preciso. | Caso permitido/negado, causa provável e correção candidata. |
| A26 — entradas e interpretação | 45/55 | Investigar com segurança XSS ou injeção SQL quando o laboratório oferecer o comportamento; relacionar CWE-79/89. | Requisição, resposta, impacto delimitado e hipótese de causa. |
| A27 — sessão, requisição e confiança | 45/55 | Comparar sessão, CSRF e fluxo entre serviços; selecionar CWE-352 ou outra fraqueza relevante somente com evidência. | Achado reproduzível e contraprova; decisão de descarte quando não houver falha. |
| A28 — correção e reteste | 45/55 | Sair da prova de conceito para causa, mudança, teste de regressão e função preservada. | Antes/depois verificável; fraqueza mapeada à CWE adequada. |
| A29 — logs, detecção e resposta | 50/50 | Correlacionar sujeito, ação, objeto, tempo e resultado; criar regra e examinar falso positivo/negativo. | Trilha defensiva e decisão de contenção proporcional. |
| A30 — transferência segura para OT | 50/50 | Rever escopo e limites de testes em processo industrial; verificar controles sem exploração destrutiva. | Plano de validação OT, evidência permitida/negada e critério de parada. |
| A31 — relatório e decisão residual | 55/45 | Comunicar dois achados, contraprovas, correções, retestes, limites e risco residual. | Entrega integrada de pentest e defesa, com responsáveis e próxima revisão. |

**Somatório planejado A08–A31:** 24 × 100 min = 2.400 min, **1.250 T + 1.150 P**. A revisão de A11–A12 acrescenta 50 minutos teóricos e reduz 50 práticos em relação ao plano anterior; não redistribuir outros encontros apenas para recompor 50/50. A conciliação global permanece pendente. A distribuição institucional de 30 h teóricas + 30 h práticas para o curso inteiro ainda depende da conciliação com carga e calendário reais de A01–A07; não declarar esse total como verificado apenas por esta tabela.

## Referenciais e limites do bloco de pentest

A **[CWE Top 25 vigente da MITRE](https://cwe.mitre.org/top25/)** orienta a escolha de algumas causas de falha, conforme o laboratório e os riscos; não é uma metodologia de pentest nem uma lista de 25 exercícios obrigatórios. O nome “CWE/SANS Top 25” aparece em material histórico. A [OWASP WSTG](https://owasp.org/projects/web-security-testing-guide) orienta os testes web, com versão fixada na ficha da aula; a [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) apoia planejamento, execução e análise. Escopo autorizado, evidência, correção e reteste são parte da competência. Fraquezas de memória da Top 25 podem ser estudadas conceitualmente, sem forçar demonstração no Juice Shop.

Na trilha OT, [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) fundamenta as restrições e a segurança em profundidade; [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards) apoia papéis, zonas, conduítes e requisitos; [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) ajuda a avaliar confiança implícita. Nenhuma dessas referências autoriza testar sistemas de produção.

## Ampliação operacional da A11 — duração a reavaliar

Por solicitação docente, produzir primeiro a experiência completa: LGPD aplicada, exportação mínima, permissões e revogação, configuração DLP, retenção e restauração. A linha A11 de 70/30 e o somatório acima permanecem referência do plano anterior; não constituem estimativa validada da edição ampliada. O tempo será analisado posteriormente, sem reduzir agora o conteúdo. A atividade continua única, acrescentando configuração proposta e contraprovas ao parecer.

## Produção A11–A12 e próximo passo

Páginas A11–A12 e atividade integrada produzidas localmente em 24 set. 2026, com sínteses itemizadas, explicações, exemplos, alternativas e oito prompts ilustrativos numerados. O docente gerará as imagens para posterior composição; o conteúdo permanece compreensível sem elas. A11 encaminha para a atividade única e A12 a conclui. Planos docentes e respostas permanecem fora de `docs/`. Publicação remota e realização não confirmadas.

Próximo passo editorial: revisar o material e incorporar as imagens recebidas, conferindo correspondência conceitual, texto alternativo e legibilidade. Próxima ficha curricular: A13, partindo das propriedades de confidencialidade e integridade e dos limites do endpoint, sem exigir cenário ou matriz industrial.
