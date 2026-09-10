# A09 — Decidir e avaliar controles de segurança digital

## Ficha-base e intenção

**Estado:** reformulação autorizada em 10 set. 2026; execução pela turma não confirmada. **Carga:** 100 minutos, 60 teóricos/40 práticos. **Vínculo:** M1, atividade única A08–A09, encerrada nesta aula. **Página:** `docs/aulas/A09-decisao-de-riscos.md`. Plano anterior preservado em [plano-preservado-2026-09-10-portal.md](plano-preservado-2026-09-10-portal.md).

**Ementa:** avaliação qualitativa, prioridade, tratamento, controles, desenho/implantação/resultado, residual e autoridade. **Pergunta:** como decidir e verificar proteção contra comprometimento de conta e ransomware sem deixar a equipe técnica sem trabalhar?

**Três objetivos:** comparar os dois riscos com critérios e incertezas; justificar controles viáveis e função preservada; avaliar evidências e revisar residual, autoridade e condição de acompanhamento. O ganho sobre A08 é transformar governança em decisão sustentada por resultados, concluindo avaliação de controles nesta A09.

**Herança confirmada:** o docente confirmou A08 ministrada; a versão exata usada e a produção individual não estão confirmadas. Reutilizar conceitos de escopo, diretriz, autoridade e acompanhamento. O ambiente técnico é um novo recorte fornecido; a política do portal não se estende automaticamente. Não dizer que estes riscos ou testes já foram trabalhados na A08.

**Infraestrutura:** navegador, página/pacote em texto, projeção e papel/editor. **Operação:** ler campos dos registros, prever critério, comparar resultado e revisar decisão. **Evidência de aprendizagem:** registro justificado dos estudantes, não log de teste executado. Nenhum malware, autenticação real, instalação, sistema externo ou nuvem. O pacote é simulado e sua leitura constitui prática analítica, não demonstração técnica de implantação.

**Cadeia:** conceitos de governança disponíveis → novo escopo e E1–E4 fornecidos → comparar dois riscos → quadro de justificativas → critérios e lacunas → avaliação/tratamento → selecionar plano de 12 h → analisar T1–T3 e V1 → registro único concluído → nenhuma etapa de risco/controle pendente para A10. A10 aguarda replanejamento.

## Preparação imediata do docente

Abra a página nos temas 1, 5, 6, 7 e na atividade. Mantenha o pacote de evidências salvo localmente como alternativa. Prepare um quadro com duas linhas, R01 e R02, e campos consequência/plausibilidade/evidência/decisão. Não é necessário preparar ambiente vulnerável.

Diga na abertura: “Temos dois riscos digitais e 12 horas de TI. Vamos decidir o plano e avaliar se a evidência sustenta o resultado”. Explicite a diferença entre 100 minutos de aula e 12 horas fictícias de implementação. Mostre a função legítima antes do abuso. Não construa episódios, personagens ou novas ameaças ao longo dos blocos.

## Condução de 100 minutos

| Minutos | T/P | Conteúdo e ação docente | Participação e checkpoint |
|---|---|---|---|
| 0–15 | 5/10 | Tema 1: mostrar ambiente e E1–E4. Explicar os campos, a conta com aprovação e o limite da cópia diária. Fornecer escopo/papéis. | Perguntar qual ação precisa continuar funcionando e separar evidência de hipótese. Pausar até a turma localizar um registro para cada risco. |
| 15–35 | 15/5 | Temas 2–3: explicar escalas; preencher R01 como exemplo. Conduzir R02 sem dar sua conclusão antes da justificativa. | Colher consequência, plausibilidade e lacuna em respostas curtas. Comparar duas justificativas e resolver divergência de premissa. |
| 35–60 | 15/10 | Temas 4–5: distinguir tratamento de controle; ler C1–C4, esforços e dependência C4→C2. Comparar planos de 12 h. | Pedir uma escolha e uma alternativa rejeitada. Pausar para conferir soma, função legítima e cobertura do piloto. |
| 60–85 | 15/10 | Temas 6–7: antes de cada resultado pedir previsão. Ler T1, T2, T3. Em T3, perguntar o teste faltante; só então apresentar V1. | Classificar atende/não atende/inconclusivo. Revisar a conclusão de recuperação e registrar recurso/autoridade necessários. |
| 85–100 | 10/5 | Tema 8 e atividade: consolidar o registro e rubrica; revisão cruzada breve, explicar PDF e justificativas individuais. | Cada dupla formula o residual e um gatilho. Encerrar risco e controle aqui; consolidação domiciliar sem operação nova. |
| **Total** | **60/40** | **100 minutos** | **Sem descoberta autônoma longa de ferramenta** |

Sugestão para o bloco 60–85: 4 min distinguir desenho/implantação/resultado; 8 min T1/T2; 5 min T3 e teste faltante; 8 min V1 e revisão. Se atrasar, reduza a discussão de estratégias do tema 4; preserve a avaliação de evidências e V1, que são o fechamento novo.

## Guia de perguntas e respostas esperadas

### Ambiente e risco

- “Ter a senha prova invasão?” Não. E2 informa resultado simulado de um caminho condicionado à posse da senha. Não informa frequência de roubo nem incidente real.
- “Qual propriedade R01 afeta?” Autoria e integridade de aprovação/comunicação; confidencialidade pode ser discutida como possibilidade, sem inventar vazamento. Não reduzir o caso a permissão de arquivo.
- “R02 exige administrador?” Não. A cifragem de dados acessíveis ao usuário pode ocorrer sem esse privilégio. Privilégio e execução controlada são condições diferentes.
- “O ransomware chegou ao serviço externo?” O pacote não permite concluir isso. Seu alcance é uma incerteza, não uma propagação demonstrada.

### Avaliação

R01: grave/alta → alto **no cenário de senha já obtida**, por E1/E2. Explicar por que isso não é probabilidade anual. R02: média é justificável porque a execução de malware não foi observada e o caminho depende de condição não verificada. Consequência grave pode ser adotada sob hipótese explícita de parada >4 h e recuperação desconhecida; matriz → alto. Não premiar automaticamente o rótulo: pedir hipótese e coleta. Uma alternativa de consequência relevante exige justificar recuperação dentro do limite, que E4 ainda não comprova.

A matriz é didática, não ferramenta de precisão. Se houver empate, a decisão pode preparar C1 e iniciar piloto/recuperação na mesma janela. Evitar o falso dilema “terminar um risco antes de começar outro”.

### Plano e controles

C1+C2+C3 = 12 h, adequado como plano de exemplo, com cobertura incompleta explícita. C2+C4 = 12 h se o piloto for satisfatório; amplia execução controlada, adia identidade/recuperação. C1+C2+C4 = 16 h e não cabe. C4 sozinho viola dependência. Propostas diferentes são aceitáveis se declararem exposição, função, autoridade e recurso. Não inventar esforço para incluir medida extra gratuitamente.

C1: acrescenta prova para o caminho de senha sozinha; não tratar MFA como garantia universal contra phishing ou roubo de sessão. C2: bloquear aplicação não aprovada e manter tarefa legítima; usuário padrão não é antimalware suficiente. C3: recuperar função e dados, não impedir a infecção. Proposta de suspensão precisa explicar o trabalho afetado e quem autoriza.

### Evidência e mudança

T1 sustenta bloqueio e entrada legítima no recorte fornecido; não prova operação contínua. T2 sustenta os dois casos no piloto; não nas seis estações. T3 satisfaz numericamente 3 h e cópia de 20 h, mas não inclui execução da tarefa completa. **A resposta esperada antes de V1 é recuperação funcional inconclusiva**, não “backup comprovado”.

V1 acrescenta falha da tarefa crítica e indisponibilidade às 6 h: o limite de 4 h foi ultrapassado. Não invalida T1/T2 nem comprova propagação. Não permitir concluir “residual baixo na equipe”. É defensável manter R02 alto dadas consequência grave e condições ainda não verificadas nas outras estações, explicando plausibilidade e alcance. A direção decide exceção de risco alto; uma dupla não pode declarar aprovação inexistente.

Correção candidata: completar dependências, repetir restauração integral e executar entrega técnica de referência. Exigir tempo contado do início ao retorno efetivo e idade da cópia. O esforço adicional não foi fornecido: estimar/solicitar antes de prometer prazo. Possíveis medidas provisórias incluem restringir uso não aprovado ou disponibilizar ambiente alternativo **sob verificação de disponibilidade e autorização**, sem inventá-las como implantadas. Registrar exposição até a decisão, responsável e revisão em até 7 dias ou antes por gatilho; isso não concede tolerância automática para adiar ação urgente.

## Encerramento, atividade e contingência

Produto: um PDF de 3–4 páginas por dupla, com governança transferida, comparação dos dois riscos, plano, avaliação T1–T3 e decisão detalhada de R02 após V1; justificativas individuais curtas e declaração de IA. Modelo e pacote estão vinculados à atividade. Carga externa estimada de até 2 h. Checkpoints não geram tarefas adicionais. A08 aponta para a mesma entrega, sem exigir reescrever sua aula ou implantar SGSI.

Sem internet: abrir pacote salvo ou projetar/circular seu texto; todos os dados estão no corpo da página. Sem editor: preencher quadro em papel. Sem registro A08: usar base fornecida, com origem explícita. Sem tempo para todas as falas: colher duas justificativas e sistematizar critérios; não transferir primeiro contato com T1–T3/V1 para casa. Não enviar mensagens ao Classroom nem alterar slides ou Drive nesta revisão.

**Fontes conferidas em 10 set. 2026:** [NIST SP 800-30r1](https://www.nist.gov/publications/guide-conducting-risk-assessments), para avaliação; [CISA #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide), para mecanismos de proteção e recuperação. Matriz, esforço, critérios de aceitação e registros são construções didáticas originais. Não afirmar conformidade com ISO/IEC 27001 nem exigir declaração completa de aplicabilidade. A seleção justificada e a distinção desenho/implantação/resultado fecham neste encontro.
