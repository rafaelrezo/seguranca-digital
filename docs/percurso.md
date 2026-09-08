# Percurso de investigação e atividades

Uma linha parou, um documento ficou acessível, uma sessão mudou de usuário. O trabalho começa pelo que pode ser observado. A cada investigação, registre o que a evidência permite afirmar e o que ainda precisa ser verificado.

Abra a página do encontro para acompanhar teoria e prática. A coluna **Entrega** leva diretamente às instruções que podem ser vinculadas pelo professor no Google Classroom. Prazos e convocação de atividades são definidos na turma; esta página também permite revisão.

| Encontro | Investigação e conceitos | Entrega |
|---|---|---|
| [A01 — O incidente que parou a linha](aulas/A01-o-incidente-que-parou-a-linha.md) | Linha do tempo, hipótese, confidencialidade, integridade e disponibilidade | [Atividade](aulas/A01-o-incidente-que-parou-a-linha.md#atividade) |
| [A02 — O que realmente está exposto?](aulas/A02-ativos-ameacas-e-vulnerabilidades.md) | Requisição HTTP, ativo, exposição, ameaça e validação de controle | [Atividade](aulas/A02-ativos-ameacas-e-vulnerabilidades.md#atividade) |
| [A03 — Do registro à ameaça candidata](aulas/A03-do-caminho-de-ataque-ao-modelo-de-ameacas.md) | Triagem: separar registro, hipótese e próxima coleta | [Atividade](aulas/A03-do-caminho-de-ataque-ao-modelo-de-ameacas.md#atividade) |
| [A04 — Onde a aplicação decide?](aulas/A04-onde-a-aplicacao-decide.md) | Fluxo legítimo da cesta, identidade, ação, recurso e fronteira | [Atividade](aulas/A04-onde-a-aplicacao-decide.md#atividade) |
| [A05 — Quem é você e pode fazer isto?](aulas/A05-quem-e-voce-e-pode-fazer-isto.md) | Sessão e propriedade: comparar quatro testes de acesso | [Atividade](aulas/A05-quem-e-voce-e-pode-fazer-isto.md#atividade) |
| [A06 — Como antecipar o que pode dar errado?](aulas/A06-do-ticket-ao-modelo.md) | Diagrama de fluxo de dados e ameaças testáveis com STRIDE | [Atividade](aulas/A06-do-ticket-ao-modelo.md#atividade) |
| [A07 — Da aplicação web ao processo industrial: como o adversário avança?](aulas/A07-do-modelo-a-decisao.md) | Comportamentos de um relato e técnicas ATT&CK Enterprise/ICS | [Atividade](aulas/A07-do-modelo-a-decisao.md#atividade) |

## Como preparar sua evidência

Use apenas o laboratório autorizado e dados fictícios. O resultado esperado ajuda a conferir o estado; ele não substitui o resultado que você observou. Registre falhas de infraestrutura e identifique quando usou o pacote alternativo. Remova senhas, tokens e dados pessoais antes de entregar.

Uma captura deve vir acompanhada da ação executada, da interpretação e de uma limitação. Nos trabalhos em dupla, cada pessoa explica uma decisão e participa da revisão.

## Consulte a teoria a partir da pergunta

| Pergunta | Referência | Onde aplicar agora |
|---|---|---|
| O que foi afetado e o que ainda é hipótese? | [Fundamentos](fundamentos_de_seguranca_digital/index.md) e [ameaças e vulnerabilidades](fundamentos_de_seguranca_digital/B-ameacas_vulnerabilidades.md) | A01–A03 |
| A pessoa está identificada e pode acessar este recurso? | [Autenticação](fundamentos_de_seguranca_digital/G-autenticacao.md), [autorização](fundamentos_de_seguranca_digital/H-autorizacao.md) e [accounting](fundamentos_de_seguranca_digital/I-accounting.md) | A04–A05 |
| O que pode dar errado no fluxo? | [Métodos de análise](ameacas/metodologias.md) | A06 |
| Que comportamento o relato sustenta? | [Comparação de métodos](ameacas/comparativo.md) | A07 |
| Como proteger dados, segredos e canais? | [Proteção de dados](protecao_dados/introducao.md) e [criptografia](criptografia/index.md) | Consulta para aprofundamento |
| Como reconhecer manipulação e comprometimento? | [Engenharia social](engenharia_social/introducao.md) e [malwares](malwares/introducao.md) | Consulta para aprofundamento |
| Como justificar uma decisão organizacional? | [Riscos](gestao_riscos/introducao.md), [terceiros](gestao_riscos/riscos_terceiros.md) e [governança](governanca/introducao.md) | Consulta para aprofundamento |
| Como delimitar e comunicar um teste? | [Planejamento de pentest](pentest/planejamento.md) | Consulta para aprofundamento |
| Como o acesso físico interfere na proteção? | [Segurança física](seguranca_fisica/introducao.md) | Consulta para aprofundamento |

## Revisão rápida

1. Que diferença existe entre resultado esperado e resultado observado?
2. O que deve acompanhar uma captura para ela sustentar uma conclusão?
3. Qual campo da sua entrega precisa ser reaberto antes de uma nova decisão?
