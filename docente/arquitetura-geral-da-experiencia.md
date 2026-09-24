# Arquitetura geral da experiência — Segurança Digital

**Estado vigente: 24 de setembro de 2026.** Sequência curricular consolidada em 17 de setembro; confirmação docente de realização da A10 e revisão do formato de A11–A12 registradas em 24 de setembro. Este documento fixa a função de cada bloco, as dependências e os portões de qualidade. O [roadmap A08–A31](roadmap-curso.md) é a única tabela curricular prospectiva. Propostas anteriores de 25, 30 e 31 encontros não têm validade para novas fichas; versões já publicadas permanecem no histórico Git.

## História e autoridade

- A01–A10 foram relatadas como ministradas. Material publicado, slides e planos não comprovam, por si, execução de cada checkpoint ou produto individual. Para uma aula conduzida por apresentação, consultar a apresentação vigente no Drive antes de atribuir observação à turma; para aula conduzida no MkDocs, consultar a versão usada quando identificável.
- A08 iniciou governança e SGSI; A09 avaliou riscos com NIST SP 800-30 Rev. 1 e encerrou a atividade compartilhada. Sua matriz não se transforma automaticamente na matriz industrial.
- A10 foi confirmada como ministrada pelo docente em 24 de setembro de 2026; a data do encontro, a versão exata utilizada e a execução de cada checkpoint ou produto individual não foram informadas. Seu material publicado no MkDocs apresenta: visita de manutenção, matriz inicial R10-01/R10-02 e duas trilhas de mitigação, uma para engenharia social e outra para acesso físico. O laboratório integrado simula duas regras de decisão; não controla portas reais. O checkpoint é presencial e não abre nova entrega no Classroom.
- Revisões futuras de páginas antigas são apoio de estudo ou nova edição. Preservar apresentações, PDFs, fontes e registros históricos de aulas ministradas; não reescrever o que a turma supostamente fez.

## Progressão curricular

A disciplina passa de **risco e governança (A08–A10)** a **dados e endpoint (A11–A12)**, **criptografia e confiança (A13–A18)**, **OT e proteção do processo (A19–A22)** e **pentest com defesa, correção e reteste (A23–A31)**. O detalhamento por aula, evidência, ponte e minutos T/P está no [roadmap](roadmap-curso.md). A11–A12 têm páginas e atividade integrada produzidas localmente em 24 set. 2026, sem realização ou publicação remota confirmadas; A13–A31 permanecem prospectivas. Materiais antigos fora do percurso não definem a ordem vigente.

O caso industrial é uma base incremental, não um enredo obrigatório. A10 trata pessoas e áreas sem alegar acesso a CLP. A11–A12 formam um bloco integrado e predominantemente expositivo, sem cenário fictício condutor nem obrigação de ampliar a matriz industrial. A continuidade ocorre pelos conceitos de dado, acesso e controle; exemplos concretos e breves ilustram cada técnica. A13–A18 retomam as propriedades de proteção e confiança, sem exigir herança de uma empresa ou matriz. A19 inicia **avaliação OT própria**, com processo físico, variável, unidade, consequência, disponibilidade, segurança de pessoas e estado seguro. A21–A22 examinam defesa em profundidade, segmentação, acesso remoto, monitoramento, resposta e recuperação. Zero trust deve ser situado nas restrições de OT, sem trocar segurança operacional por reautenticação indiscriminada. A23–A31 usam algumas fraquezas pertinentes da CWE Top 25 como taxonomia de causas; o método de teste, a autorização e a validação vêm do plano de engajamento, da OWASP WSTG e da NIST SP 800-115.

## Decisão docente de 24 set. 2026 — A11–A12 integradas

O docente relatou cansaço com a recorrência de cenários imaginários e o esforço de reconstruir suas premissas. A11–A12 passam a desenvolver **proteção de dados e dispositivos**, com exposição conceitual direta, exemplos trabalhados e ilustrações técnicas. Não introduzir empresa, personagens, incidente encenado ou matriz de risco como fio obrigatório. Exemplos artificiais mínimos podem ilustrar uma regra, desde que identificados; não apresentá-los como evidência real.

A11 aborda arquitetura de proteção do dado: localização e cópias, classificação por impacto, controles conforme estado, mecanismos e validação de DLP, retenção e recuperabilidade. A12 aborda execução e privilégios, mecanismos de malware, prevenção em camadas, telemetria correlacionada e triagem/resposta. O aprofundamento solicitado em 24 set. 2026 substitui o foco introdutório em reconhecer termos por decisões técnicas justificadas; mantém exemplos concretos e distingue núcleo presencial de consulta. Os dois encontros mantêm 100 minutos cada, agora com 70 T/30 P por encontro. A prática corresponde à análise guiada de objetos e evidências e a demonstrações curtas; definições e exposição de exemplos continuam contabilizadas como teoria. A comparação entre controles integra o bloco. Preserva-se uma única atividade, a detalhar após os exemplos essenciais, sem investigação narrativa ou instalação pelo estudante.

O [planejamento integrado A11–A12](A11-A12-protecao-dados-endpoints/planejamento-integrado.md) detalha objetivos, recorte, exemplos, tempo e avaliação. Após aprovação do detalhamento, o docente solicitou a produção das páginas MkDocs: A11–A12, atividade única e insumos estão preparados localmente. As seções combinam sínteses itemizadas e explicações; foram preparados oito prompts de figuras por solicitação explícita; as Figuras 1–4 da A11 foram recebidas e incorporadas em 24 set. 2026, e os prompts 5–8 permanecem para geração posterior pelo docente. A inserção de imagens não deve alterar o conteúdo necessário à leitura sem elas. Publicação remota não confirmada.

## Decisão docente — aprofundamento operacional da A11 e LGPD

Em 24 set. 2026, o docente solicitou corrigir a distância entre reconhecer cópias e implementar seus controles, priorizando uma experiência robusta antes de avaliar o tempo. A A11 passa a incluir exportação mínima verificável, registro de tratamento, permissões e revogação no Google Drive como exemplo documentado, implantação DLP comentada e retenção/recuperação com procedimentos e contraprovas. Inclui visão geral aplicada da LGPD, com fontes oficiais: dados pessoais/sensíveis, agentes, princípios, bases legais e direitos relacionados às decisões técnicas.

O recorte de 100 minutos e 70 T/30 P acima é a referência anterior, não estimativa validada desta edição ampliada. A seleção presencial e a carga T/P serão revistas após leitura docente; não comprimir o material nem recalcular o total do curso por suposição. Preservar exposição direta, as quatro figuras recebidas e a atividade única, alinhando nela implementação e evidência proposta. Novos prompts usam números a partir de 9, pois 5–8 pertencem à A12. A Figura 5 da A12 foi recebida e incorporada; permanecem pendentes 6–8 e 9–11. Demonstrações de serviços são procedimentos documentados, sem alegação de execução em contas reais. Após nova observação docente, a entrada DLP foi reordenada por arquivo e tentativa de envio antes dos mecanismos; ocultação passou a comparação contextualizada, sem tarefa isolada. Ver revisão de carga cognitiva docente.

## Responsabilidade operacional e legal na A11 — 24 set. 2026

Nova revisão solicitada: explicitar destinatário dos procedimentos e a divisão entre usuário comum, gestor da informação/processo, TI/custódia, segurança e privacidade/encarregado. Uma matriz funcional exemplifica a divisão; não impõe organograma nem transforma cargo interno em agente legal. Procedimentos locais indicam quem solicita, aprova, executa e verifica, incluindo limites de autonomia do usuário.

A visão LGPD passa a distinguir responsáveis legais, infrações administrativas, reparação civil e eventual enquadramento penal em outras leis, com fontes oficiais e síntese de sanções. Não atribuir culpa ou crime automaticamente a um incidente; não apresentar o encarregado como responsável universal. Objetivos de proteção e a atividade única permanecem; explicitar responsáveis na configuração proposta. Duração continua a reavaliar.

## Revisão sequencial por especialistas da A11

Por solicitação docente, a edição passou primeiro pela revisão de proteção de dados e, a partir dela, pela revisão de construção pedagógica. Relatórios em `A11-A12-protecao-dados-endpoints/revisao-especialista-protecao-dados-A11.md` e `revisao-especialista-pedagogia-A11.md`.

Aplicação: distinguir mascaramento dinâmico/estático e separar correspondência de pseudônimos; fechar comunicação interna e legal de incidentes; fornecer DOCX artificial sem rótulo e explicitar limite do piloto DLP; acrescentar contraprovas de rótulo e destinatários mistos. Aproximar exportação/ocultação/transformações, Figura 2/camadas, e RPO/RTO/parâmetros de backup; orientar preenchimento progressivo do registro. A pedido docente, a comparação inclui exemplos comerciais DLP e controles sem suíte dedicada, após ensinar mecanismo e validação, sem equivalência automática de cobertura. Nenhuma nova ilustração é necessária além das existentes e prompts pendentes; preservar números e âncoras. Objetivos, atividade única e duração ainda a reavaliar permanecem.

## Ampliação de referências DLP e procedimentos LGPD — 24 set. 2026

O docente solicitou pesquisa aprofundada das referências Microsoft, AWS e Fortinet, comparação de soluções empresariais e em nuvem e investigação de adoção no setor industrial. Incorporar sínteses com fontes, distinguindo programa de proteção, mecanismos de produto e evidência de implantação; não inferir participação de mercado de rankings ou presença comercial. Situar exemplos industriais na proteção de arquivos e transferências, preservando as restrições de compatibilidade e disponibilidade de OT.

A página de agentes de tratamento da ANPD servirá como entrada para uma tabela aplicada de procedimentos, responsáveis, evidências e links específicos. Distinguir obrigações gerais, condições de aplicação e recomendações; manter o atendimento de direitos e a comunicação de incidentes nos canais adequados. Acréscimos aprofundam os mesmos objetivos e não criam nova entrega ou tempo presumido. Ampliação aprovada em revisões técnica e pedagógica sequenciais; ajustes aplicados. Os 12 procedimentos foram segmentados em dois quadros; a Figura 12 foi solicitada como prompt para mostrar pontos independentes de controle. Estado atual de ilustrações pendentes: 6–8 na A12 e 9–12 na A11.

## Simplificação do exemplo de exportação — 24 set. 2026

Após revisão independente, o docente autorizou reduzir o exemplo de CSV e melhorar a leitura dinâmica. A exportação permanece como ilustração de fronteira, minimização e conteúdo entregue; deixa de constituir um tutorial de editor. Preservar Figura 1, arquivos de referência e âncoras; reunir base completa, coluna oculta e agregado numa comparação curta. Operação de salvar CSV não é requisito da atividade documental. Manter os controles de acesso, DLP e recuperação; destacar decisões e limites sem duplicar listas e explicações. A duração continua a reavaliar.

## Exemplo profissional de videomonitoramento — 24 set. 2026

O docente informou que muitos alunos atuam em prestadoras de automação dentro de indústrias de processos. A caracterização dos papéis LGPD será ilustrada por manutenção de videomonitoramento, substituindo o exemplo genérico. Distinguir quem define finalidade, quem trata imagens em nome de outro, empregado que executa tarefas, encarregado e pessoas filmadas. A presença de uma prestadora não basta para caracterizá-la como operadora. Figura 13 solicitada como prompt, com personagens por papéis e organizações, sem enredo contínuo, dados reais ou pressuposto de licitude de toda vigilância.

## Visualização do Purview e separação editorial — 24 set. 2026

Docente confirmou ausência de Purview para os alunos e apontou insuficiência de um percurso apenas textual. Substituir a dependência do ambiente licenciado por leitura de capturas oficiais e guia público navegável, distinguindo guia demonstrativo, trial e modo de simulação. Operação no serviço permanece consulta opcional para ambiente próprio; manter a mesma decisão cognitiva e não criar nova entrega. Capturas precisam de procedência, rótulos e limites claros, sem atribuição de resultados ao laboratório do curso.

Retirar da página do aluno relatos da pesquisa de mercado e justificativas de autoria; conservar critérios de seleção e fontes pertinentes. Limitações de evidência, dados artificiais e distinção entre proposta e teste executado continuam necessárias ao conteúdo.

## Recuperação e acesso à atividade — 24 set. 2026

Apresentar RPO/RTO a partir das necessidades de atualidade dos dados e prazo para retorno funcional, antes das siglas e do cálculo. Preservar valores e Figura 4. A atividade integrada terá HTML independente, acessível por link direto no GitHub Pages e fora do menu, com organização responsiva e os mesmos insumos, requisitos e critérios. Não criar nova entrega nem alterar pesos. Manter fonte Markdown e compatibilidade dos links anteriores.

## Produtos e pontes

| Bloco | Produto cumulativo | Ponte que deve aparecer no encontro seguinte |
|---|---|---|
| A08–A09 | Atividade única encerrada na A09; registro de SGSI, riscos e decisão. | A10 retoma o **método** de risco, sem herdar resultados não confirmados. |
| A10 | Material com R10-01/R10-02 e checkpoint presencial; realização do encontro confirmada, produtos individuais não confirmados. | A11 retoma acesso e proteção, sem exigir a matriz ou o cenário da A10. |
| A11–A12 | Uma atividade integrada de classificação, implementação proposta e verificação de controles, regra DLP, leitura de rastros e comparação de controles, a partir de exemplos independentes fornecidos. | A13 retoma confidencialidade e integridade e os limites da proteção de dados e dispositivos. |
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
7. **Publicação e carga:** conferir a página no build estrito e na tela antes de publicar. A08–A31 somam 2.400 minutos planejados, 1.250 T/1.150 P após a revisão de A11–A12; o total institucional de 30 h + 30 h requer reconciliação com calendário e A01–A07 antes de ser declarado cumprido.

## Referências orientadoras

- [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final): avaliação de risco.
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) e [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards): contexto, requisitos e arquitetura OT.
- [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final): confiança implícita e acesso, aplicado com restrições operacionais.
- [CWE Top 25](https://cwe.mitre.org/top25/), [OWASP WSTG](https://owasp.org/projects/web-security-testing-guide) e [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final): causa de fraquezas, testes web e processo de avaliação, respectivamente.
