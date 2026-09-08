# Confrontação de repetição — A01–A07 × A08–A10

**Data:** 8 de setembro de 2026. **Conclusão:** a impressão do docente procede, sobretudo para a A08 planejada. A análise anterior subestimou o conteúdo de A02 e A05. Há novidade curricular em SGSI, avaliação formal de riscos e aplicabilidade/avaliação de controles, mas ela estava misturada à reconstrução de cadeias já ensinadas.

## Método e limite da conclusão

A pasta oficial foi listada novamente e as sete apresentações vigentes foram abertas. Foi lido integralmente o texto extraído dos **145 slides**: A01 (10), A02 (11), A03 (12), A04 (16), A05 (24), A06 (37), A07 (35). O [registro de fontes](confrontacao-fontes-a01-a07.json) conserva IDs, revisões, datas de modificação e texto por slide. Esta é uma confrontação de conteúdo e demanda cognitiva, não uma revisão visual dos slides nem auditoria de desempenho dos estudantes.

A presença de conteúdo na apresentação comprova cobertura prevista no material usado, não que todo estudante executou ou dominou a tarefa. Inversamente, a ausência de comprovação de entrega não torna o conteúdo inédito e não justifica repetir a aula inteira. A01–A07 são consideradas ministradas pela confirmação docente.

## O que já foi apresentado

| Aula e fonte vigente | Evidência específica | Consequência para A08–A10 |
|---|---|---|
| [A01 — O incidente que parou a linha](https://docs.google.com/presentation/d/1zc-hHDZS9wITKi0_2e2gLooJ79KK2270fsYIo-MxMBE) | Slides 5–8: risco, consequência, CIA/AAA, efeito físico, resposta condicionada à operação e validação. Slide 10: decisão com limites e impacto. | Definições de risco, importância do responsável e decisão justificada não bastam como ganho de uma nova aula. Gestão organizacional formal ainda pode aprofundar esses fundamentos. |
| [A02 — Ativos, ameaças e vulnerabilidades](https://docs.google.com/presentation/d/1dt8iqbcGoMV3XBDGQ0g1v0KhHxreZn1SblCIp9wcBEE) | Slide 2 apresenta evidência→ativo→fraqueza→vulnerabilidade→consequência→controle→reteste. Slides 7–8 distinguem funções de controles e comparam remover, autorizar e monitorar. Slide 10 pede controle justificado e reteste definido. | A antiga A08 repetia boa parte da cadeia. A10 não pode apresentar tipos de controles ou escolha genérica como se fossem novos. |
| [A03 — Do registro à ameaça candidata](https://docs.google.com/presentation/d/1Sx9AiL86JwqqFTHXFY2vLmGm4D8lczOBPExWr3F9GA8) | Slides 3–4: fornecedor, janelas de suporte, engenharia/operação e limites da VPN. Slides 8–11: encaminhamento, ameaça condicionada, justificativa e próxima evidência. A entrega exclui controles. | Há familiaridade com papéis e decisões condicionadas; SGSI é avanço se acrescentar autoridade, recursos, objetivos e revisão institucional. Triagem não equivale à gestão formal de risco. |
| [A04 — Onde a aplicação decide?](https://docs.google.com/presentation/d/13u_GTiFUcrJ94M4TzzhUeKynbRAjPB5qdftzm7FlxxY) | Slides 11–13: identidade/ação/recurso, fronteira, verificação no servidor e coleta para testar a regra; ASVS já aparece como referência. | Reconstruir a cesta e explicar novamente que o servidor decide seria retomada, não desenvolvimento novo de A08. |
| [A05 — Quem é você e pode fazer isto?](https://docs.google.com/presentation/d/1Ubk8Y9okEehajiJ52OztcCsjE0pA99RQqJ_GGT7dOes) | Slides 10–18: quatro casos de sessão/propriedade. Slide 20: controle no servidor e Authorization Cheat Sheet. Slide 21: validação positiva/negativa. Slide 22: accounting e Logging Cheat Sheet. Slide 24: propor controle, testes e evento de negação. | A antiga A08 retomava praticamente a mesma pergunta, controle e produto. OWASP/Cheat Sheets já estavam presentes; navegar no índice não sustenta, sozinho, 100 minutos novos. |
| [A06 — Como antecipar o que pode dar errado?](https://docs.google.com/presentation/d/1VsG_67MbHLXXCY2oWdMA4pTKH8BFJVjR9GqxM39Zbqs) | Slides 12–21: escopo, ativo, condição/caminho/consequência, DFD e STRIDE. Slides 30–35: ameaças e revisão. Slide 37 promete tratamento na A07. | Não redesenhar DFD, reaplicar STRIDE ou reescrever a ameaça básica. A promessa final não comprova que o conteúdo seguinte tenha sido ministrado, mas também não apaga controles já abordados em A02/A05. |
| [A07 — Da aplicação web ao processo industrial](https://docs.google.com/presentation/d/187O4GeB7Xz62l6ij-is0U7La_26eCO4308GKGYArjqk) | Slides 1–8 e 19–33: mapear relato fornecido no ATT&CK. Slides 30, 34–35 explicitam que não se avaliam controles nem se faz gestão de risco. | O novo bloco deve avançar a governança e tratamento organizacional. Reexplicar limites de ATT&CK cabe em síntese breve, sem nova oficina de classificação. |

**Divergências locais:** a antiga justificativa de A08 dizia que faltava fechar a cadeia inteira ameaça→controle→teste. Isso é excessivo: a cadeia já aparece em A02 e A05. Falta sistematizar sua gestão organizacional e verificar aprendizagem quando necessário. Permanece a divergência histórica entre o modelo industrial atribuído à A06 no slide 6 da A07 e o modelo de cestas efetivamente apresentado na A06; nenhuma arquitetura industrial será atribuída retroativamente à turma.

## Juízo sobre as três aulas planejadas

| Planejamento anterior | Repetição identificada | Conteúdo novo que merece permanecer | Decisão |
|---|---|---|---|
| A08 — Da ameaça à decisão: como a OWASP ajuda a fechar o modelo? | Alta: mesma cesta, ameaça de autorização, controle no servidor, caso permitido/negado e limites já presentes em A02/A04/A05/A06. | Referência usada como critério e transição do tratamento pontual para governança. | Retirar o encontro inteiro de fechamento de modelagem. Usar uma ponte de **15 minutos** e iniciar SGSI na própria A08. |
| A09 — Quem responde pela segurança? ISO/IEC 27001 e o SGSI | Parcial: decidir, justificar e nomear responsáveis já apareceu; o SGSI como sistema de gestão não foi desenvolvido nas sete apresentações. | Escopo organizacional, liderança, recursos, objetivos, documentação e revisão. | Preservar esse conteúdo e antecipá-lo para A08; torná-lo concreto com um produto de governança. |
| A10 — Como um risco vira tratamento, política e evidência? | Parcial, com excesso de conteúdos: definições e tipos de controle repetiam A01/A02; política, risco formal e aplicabilidade competiam por tempo. | Critérios de avaliação/aceitação, alternativas sob restrição, proprietário, residual, aplicabilidade e avaliação de eficácia. | Dar **A09 à decisão de risco** e **A10 à seleção, implantação e avaliação dos controles**. |

Os julgamentos “alta” e “parcial” são análise curricular qualitativa, não percentuais de similaridade lexical. Reutilizar o caso é desejável; repetir a mesma operação cognitiva e o mesmo produto sem avanço é o problema.

## Organização revisada — mesma numeração e mesmos 300 minutos

| Aula temática | Pergunta nova | Produto dentro de P1 | O que não será reensinado |
|---|---|---|---|
| **A08 — Quem governa a segurança depois que a falha é conhecida?** | Como a organização mantém a segurança além de uma correção pontual? | Escopo do SGSI, papéis com autoridade, objetivo e rotina de acompanhamento. | DFD, STRIDE, taxonomia ATT&CK, configuração do Juice Shop e quatro testes de cesta. |
| **A09 — Quais riscos a organização aceita e quais precisa tratar?** | Como escolher entre riscos e tratamentos diante de restrições explícitas? | Até dois riscos comparáveis, critérios, decisão de tratamento, proprietário e residual estimado. | Definição inicial de ativo/ameaça/vulnerabilidade e nova triagem de logs. |
| **A10 — Como demonstrar que os controles atendem ao risco?** | Como justificar aplicabilidade e distinguir controle definido, implantado e eficaz? | Recorte de aplicabilidade, regra/procedimento e plano de avaliação com evidência operacional e revisão. | Taxonomia genérica de controles e mera repetição de “permitir Ana, negar Bruno”. |

**A08 — 100 minutos:** 15 de ponte com um exemplo já resolvido (5 de recuperação, 10 de síntese OWASP/modelagem); 20 de escopo e partes interessadas; 20 de liderança, papéis e recursos; 25 de objetivos, informação documentada e acompanhamento; 20 de construção/revisão do registro de governança. Somente a ponte retoma o produto técnico; o restante introduz e aplica gestão.

**A09 — 100 minutos:** 10 para receber os riscos já formulados e restrições; 20 para critérios; 25 para avaliação comparada; 25 para alternativas de tratamento/aceitação; 20 para residual, proprietário e revisão. A consequência do caso, as restrições e os dados são fornecidos; os alunos não passam metade da aula redescobrindo ativos.

**A10 — 100 minutos:** 10 para receber a decisão da A09; 20 para justificativa de controles/aplicabilidade; 20 para regra e implementação organizacional; 30 para comparar evidências de desenho, implantação e operação; 20 para avaliar desvio, melhoria e ponte OT. Um caso de exceção de manutenção torna a evidência periódica diferente do teste isolado de A05.

ISO/IEC 27001 sustenta o SGSI; ISO/IEC 27002 oferece orientação para controles. São funções complementares no desenho, não dois catálogos para decorar. Referências oficiais: [ISO/IEC 27001](https://www.iso.org/standard/27001) e [ISO/IEC 27002](https://www.iso.org/standard/75652.html).

## Limites contra nova repetição

- **A08 recebe** ameaça, controle e teste em exemplo pronto; **produz** estrutura de gestão.
- **A09 recebe** escopo/papéis e riscos formulados; **produz** avaliação e decisão de tratamento.
- **A10 recebe** decisão e critério; **produz** aplicabilidade e avaliação do controle ao longo da operação.
- **A11–A12 recebem** essas decisões para analisar consequências e requisitos OT; não repetem SGSI ou matriz de risco inteira.
- Modelagem e OWASP continuam disponíveis como consulta. Dificuldade em um checkpoint recebe apoio focal ou exemplo preenchido, sem presumir que toda a turma precisa reiniciar A01–A07.
- A evidência de aprendizagem deve demonstrar o ganho específico de cada encontro; “justifica a decisão e informa limites” é critério transversal e insuficiente como único diferencial.

Não foi alterada a distribuição 5/3/6/3/7, a carga de 24 encontros nem as cinco atividades principais. P1 continua uma entrega enxuta; os registros se integram ao mesmo documento, sem novas páginas ou submissões obrigatórias. GitHub Pages, slides e PDFs permanecem preservados. Os novos títulos e a progressão foram alinhados no detalhamento, na matriz JSON, na macroorganização e na arquitetura.
