# Arquitetura geral da experiência — Segurança Digital

**Estado vigente: 17 de setembro de 2026.** Este documento fixa a função de cada bloco, as dependências e os portões de qualidade. O [roadmap A08–A31](roadmap-curso.md) é a única tabela curricular prospectiva. Propostas anteriores de 25, 30 e 31 encontros não têm validade para novas fichas; versões já publicadas permanecem no histórico Git.

## História e autoridade

- A01–A07 e A08–A09 foram relatadas como ministradas. Material publicado, slides e planos não comprovam, por si, execução de cada checkpoint ou produto individual. Para uma aula conduzida por apresentação, consultar a apresentação vigente no Drive antes de atribuir observação à turma; para aula conduzida no MkDocs, consultar a versão usada quando identificável.
- A08 iniciou governança e SGSI; A09 avaliou riscos com NIST SP 800-30 Rev. 1 e encerrou a atividade compartilhada. Sua matriz não se transforma automaticamente na matriz industrial.
- A10 está publicada no MkDocs: visita de manutenção, matriz inicial R10-01/R10-02 e duas trilhas de mitigação, uma para engenharia social e outra para acesso físico. O laboratório integrado simula duas regras de decisão; não controla portas reais. O checkpoint é presencial e não abre nova entrega no Classroom.
- Revisões futuras de páginas antigas são apoio de estudo ou nova edição. Preservar apresentações, PDFs, fontes e registros históricos de aulas ministradas; não reescrever o que a turma supostamente fez.

## Progressão curricular

A disciplina passa de **risco e governança (A08–A10)** a **dados e endpoint (A11–A12)**, **criptografia e confiança (A13–A18)**, **OT e proteção do processo (A19–A22)** e **pentest com defesa, correção e reteste (A23–A31)**. O detalhamento por aula, evidência, ponte e minutos T/P está no [roadmap](roadmap-curso.md). Os encontros A11–A31 são prospectivos; seus materiais antigos, se existirem fora do percurso, não definem a ordem vigente.

O caso industrial é uma base incremental, não um enredo obrigatório. A10 trata pessoas e áreas sem alegar acesso a CLP. A11–A18 acrescentam riscos de dados, endpoint e confiança quando seus fluxos forem apresentados. A19 inicia **avaliação OT própria**, com processo físico, variável, unidade, consequência, disponibilidade, segurança de pessoas e estado seguro. A21–A22 examinam defesa em profundidade, segmentação, acesso remoto, monitoramento, resposta e recuperação. Zero trust deve ser situado nas restrições de OT, sem trocar segurança operacional por reautenticação indiscriminada. A23–A31 usam algumas fraquezas pertinentes da CWE Top 25 como taxonomia de causas; o método de teste, a autorização e a validação vêm do plano de engajamento, da OWASP WSTG e da NIST SP 800-115.

## Produtos e pontes

| Bloco | Produto cumulativo | Ponte que deve aparecer no encontro seguinte |
|---|---|---|
| A08–A09 | Atividade única encerrada na A09; registro de SGSI, riscos e decisão. | A10 retoma o **método** de risco, sem herdar resultados não confirmados. |
| A10 | R10-01/R10-02, controles sociais e físicos com evidência/limite, e decisões A/B/C, sem entrega domiciliar nova. | A11 pergunta quais dados estão ao alcance das áreas e pessoas. |
| A11–A12 | Uma atividade de fluxo/classificação/DLP e rastro de endpoint/malware. | A13 pergunta que propriedade criptográfica protege cada dado. |
| A13–A18 | Uma atividade de mecanismos, confiança, canal e ciclo de chaves com casos positivos/negativos. | A19 pergunta como aplicar controles preservando processo físico. |
| A19–A22 | Uma atividade OT: processo, risco, zonas/conduítes, acesso, observação e recuperação. | A23 delimita o que pode ser testado com autorização. |
| A23–A31 | Uma atividade de pentest e defesa: plano, dois achados, correção, reteste, detecção e decisão residual. | A31 encerra com relatório e condição de revisão. |

## Portões contra desvio

1. **Objetivo antes do cenário:** especificar ganho novo, evidência e prática; escolher situação e ferramenta em função deles. Proporção T/P varia por aula e é contabilizada no plano.
2. **Herança verificável:** não atribuir à turma produto ou execução com base apenas em arquivo publicado. A cadeia docente é `herança concreta → preparação → ação → rastro → leitura → conceito → decisão → validação → produto → ponte`.
3. **Observação antes da conclusão:** separar fato, hipótese, premissa didática, resultado simulado e resultado observado. Resultado do painel não é implementação física.
4. **Operação segura:** qualquer teste ofensivo exige alvo isolado, escopo, autorização, parada e recuperação; OT de produção e serviços de terceiros ficam fora do laboratório.
5. **Material único do estudante:** teoria profunda, sínteses destacadas, prática guiada, exemplo, diagnóstico, alternativa e atividade na página MkDocs. Não criar slides ou PDFs novos sem solicitação expressa.
6. **Continuidade sem monotonia:** reabrir registro, critério ou pergunta quando agrega competência; permitir exemplos independentes e comparação de contextos. A matriz muda por fatos e consequências, não para encaixar nomes de ferramentas.
7. **Publicação e carga:** conferir a página no build estrito e na tela antes de publicar. A08–A31 somam 2.400 minutos planejados, 1.200 T/1.200 P; o total institucional de 30 h + 30 h requer reconciliação com calendário e A01–A07 antes de ser declarado cumprido.

## Referências orientadoras

- [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final): avaliação de risco.
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) e [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards): contexto, requisitos e arquitetura OT.
- [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final): confiança implícita e acesso, aplicado com restrições operacionais.
- [CWE Top 25](https://cwe.mitre.org/top25/), [OWASP WSTG](https://owasp.org/projects/web-security-testing-guide) e [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final): causa de fraquezas, testes web e processo de avaliação, respectivamente.
