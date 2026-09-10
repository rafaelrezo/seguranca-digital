# A09 — Decidir e avaliar controles de segurança digital

## Ficha-base e intenção

**Estado:** reformulação autorizada em 10 set. 2026; execução pela turma não confirmada. **Carga:** 100 minutos, 60 teóricos/40 práticos. **Vínculo:** M1, atividade única A08–A09, encerrada nesta aula. **Página:** `docs/aulas/A09-decisao-de-riscos.md`. Plano anterior preservado em [plano-preservado-2026-09-10-portal.md](plano-preservado-2026-09-10-portal.md).

**Ementa:** avaliação qualitativa, prioridade, tratamento, controles, desenho/implantação/resultado, residual e autoridade. **Pergunta:** como decidir e verificar proteção contra comprometimento de conta e ransomware sem deixar a equipe técnica sem trabalhar?

**Três objetivos:** comparar os seis riscos com critérios e incertezas; justificar controles viáveis e função preservada; avaliar evidências e revisar residual, autoridade e condição de acompanhamento. O ganho sobre A08 é transformar governança em decisão sustentada por resultados, concluindo avaliação de controles nesta A09.

**Herança confirmada:** o docente confirmou A08 ministrada; a versão exata usada e a produção individual não estão confirmadas. Reutilizar conceitos de escopo, diretriz, autoridade e acompanhamento. O ambiente técnico é um novo recorte fornecido; a política do portal não se estende automaticamente. Não dizer que estes riscos ou testes já foram trabalhados na A08.

**Infraestrutura:** navegador, página/pacote em texto, projeção e papel/editor. **Operação:** ler campos dos registros, prever critério, comparar resultado e revisar decisão. **Evidência de aprendizagem:** registro justificado dos estudantes, não log de teste executado. Nenhum malware, autenticação real, instalação, sistema externo ou nuvem. O pacote é simulado e sua leitura constitui prática analítica, não demonstração técnica de implantação.

**Cadeia:** conceitos de governança disponíveis → novo escopo e E1–E8 fornecidos → comparar seis riscos → matriz progressiva → critérios e lacunas → avaliação/tratamento → selecionar plano de 12 h → analisar T1–T7 e V1 → registro único concluído → nenhuma etapa de risco/controle pendente para A10. A10 aguarda replanejamento.

## Preparação e condução pela matriz

Comece pela retomada “Da A08 à A09”: em até 4 minutos, relacione SGSI, escopo, diretriz, papéis e acompanhamento à nova análise. Use a base fornecida; não pedir que a turma abra a A08 ou recupere registros. Depois abra o tema 1: use a ilustração fornecida pelo docente para localizar equipe, plataforma, estações, suporte e recuperação. Apresente então E1–E8 como condições atuais; só depois leia os seis riscos e abra a matriz. Relacione cada risco a uma condição já apresentada, sem recapitular exclusões de escopo. A tabela descritiva fica no pacote em texto como alternativa à imagem. Explique os três campos iniciais; somente R01 terá o exemplo completo nas etapas seguintes. Deixe CSV e pacote em texto disponíveis sem conexão. Use projeção e respostas curtas; a digitação individual é opcional. O professor registra uma síntese da turma na matriz, exportando antes de sair. Não há salvamento automático. Para evitar tabela larga, marque “Mostrar só as colunas desta etapa”; desmarque quando precisar comparar o acumulado. Cada recorte mantém risco e ordem das linhas.

**Enquadramento:** seis riscos competem por 12 h de TI, mas não haverá seis estudos completos. R01 ensina o preenchimento; R02 recebe análise mais detalhada e V1. R03–R06 ampliam a comparação com uma justificativa breve por campo. Nos temas 2–3, distinguir quadro de classificação (3×3) da matriz de análise (seis riscos).

## Condução de 100 minutos

| Minutos | T/P | Colunas e condução | Participação |
|---|---|---|---|
| 0–15 | 5/10 | Retomada de governança (4 min dos 5 T do bloco); etapa 1: risco, evidência e incerteza. Ler ambiente/E1–E8 e seis caminhos. | Cada resposta distingue fato do registro e hipótese. Não iniciar seis investigações. |
| 15–35 | 15/5 | Etapa 2: consequência, plausibilidade e classe inicial. Preencher R01, aprofundar R02 e comparar R03–R06. | Cerca de 5 min exemplo, 5 min R02, 8 min demais e 2 min prioridade. Justificativas curtas; não impor seis riscos altos. |
| 35–60 | 15/10 | Etapa 3: tratamento/controle e recurso/cobertura. Examinar C1–C8; decidir quais cabem em 12 h. | Nomear medida candidata por linha, distinguir incluída/adiada e explicar função preservada. R02 recebe alternativa detalhada. |
| 60–85 | 15/10 | Etapas 4–5: critério/resultado, residual e decisão/acompanhamento. Avaliar T1–T3, comparar T4–T7 e aplicar V1. | 4 min desenho/implantação/resultado; 7 min T1–T3; 6 min T4–T7; 8 min V1/residual. Hipótese de implementação não reduz risco atual. |
| 85–100 | 10/5 | Conferir a matriz inteira, preencher responsáveis/prazos/gatilhos e explicar entrega. | Revisão cruzada e exportação. Consolidar fora da aula sem operação nova. |
| **Total** | **60/40** | **100 minutos** | **Registro único concluído na A09** |

Se atrasar, reduza rodadas de falas e peça uma razão por célula; preserve V1 e a revisão do residual. Não adie controles para A10. As tabelas do site são insumos; a matriz é o registro cumulativo, não uma atividade extra. O modelo aceita três faixas de colunas com os mesmos seis IDs em 3–4 páginas.

## Guia de perguntas e respostas esperadas

### Ambiente e risco

- “Ter a senha prova invasão?” Não. E2 informa resultado simulado de um caminho condicionado à posse da senha. Não informa frequência de roubo nem incidente real.
- “Qual propriedade R01 afeta?” Autoria e integridade de aprovação/comunicação; confidencialidade pode ser discutida como possibilidade, sem inventar vazamento. Não reduzir o caso a permissão de arquivo.
- “R02 exige administrador?” Não. A cifragem de dados acessíveis ao usuário pode ocorrer sem esse privilégio. Privilégio e execução controlada são condições diferentes.
- “O ransomware chegou ao serviço externo?” O pacote não permite concluir isso. Seu alcance é uma incerteza, não uma propagação demonstrada.

### Avaliação

No tema 3, conduzir pela matriz comparativa: mesmos campos, R01 preenchido e R02–R06 a completar. Percorrer evidência → consequência → plausibilidade → classe → incerteza → ação → autoridade. O checkpoint é condicional: não anunciar que ambos são altos antes da justificativa da turma.

R01: grave/alta → alto **no cenário de senha já obtida**, por E1/E2. Explicar por que isso não é probabilidade anual. R02: média é justificável porque a execução de malware não foi observada e o caminho depende de condição não verificada. Consequência grave pode ser adotada sob hipótese explícita de parada >4 h e recuperação desconhecida; quadro de classificação → alto. Não premiar automaticamente o rótulo: pedir hipótese e coleta. Uma alternativa de consequência relevante exige justificar recuperação dentro do limite, que E4 ainda não comprova.

A matriz é didática, não ferramenta de precisão. Se houver empate, a decisão pode preparar C1 e iniciar piloto/recuperação na mesma janela. Evitar o falso dilema “terminar um risco antes de começar outro”.

### Comparação breve dos quatro riscos adicionais

| Risco | Raciocínio defensável, sem gabarito mecânico | Controle/resultado e limite |
|---|---|---|
| R03 — Fraude por e-mail | Consequência depende da alteração falsa; grave se comprometer decisão externa. Plausibilidade média se aceitar a mensagem ainda é condição não verificada. Não pressupor conta comprometida. | C5/T4: confirmar por contato conhecido; dois casos não provam adesão permanente. |
| R04 — Suporte remoto | E6 sustenta exposição, não conexão indevida. Média enquanto conexão/alcance não forem verificados. Consequência depende da alteração possível e da parada. | C6/T5: fora da janela negado, sessão legítima e encerramento; um chamado não cobre todos os acessos. |
| R05 — Notebook perdido | Grave se o cenário expuser projetos confidenciais. Discutir plausibilidade condicionada à posse do equipamento desligado; inventário não é teste de leitura nem frequência de perda. | C7/T6: disco cifrado contra leitura sem chave no recorte desligado; não generalizar para sessão aberta. |
| R06 — Cópias destruídas | Credencial administrativa obtida é hipótese; avaliar alcance de E8 e consequência quando houver necessidade de restaurar. Não somar automaticamente a perda de R02 duas vezes. | C8/T7 protege retenção contra a conta testada; restauração de amostra não prova recuperação funcional. V1 não mostra exclusão. |

Aceitar classes diferentes quando as premissas estiverem explícitas e forem compatíveis com a evidência. Todos os riscos precisam de decisão, inclusive os adiados; isso não significa implantar todos os controles na janela.

### Plano e controles

C1+C2+C3 = 12 h, adequado como plano de exemplo, com cobertura incompleta explícita. C2+C4 = 12 h se o piloto for satisfatório; amplia execução controlada, adia identidade/recuperação. C1+C2+C4 = 16 h e não cabe. C4 sozinho viola dependência. Propostas diferentes são aceitáveis se declararem exposição, função, autoridade e recurso. C5/C6 demandam 2 h cada; C7/C8, 4 h cada. C1+C5+C6+C7 = 12 h é outra combinação possível, com C2/C3/C8 adiados e risco de recuperação sem solução na janela. Compare exposições antes de recomendar. Não inventar esforço para incluir medida extra gratuitamente.

C1: acrescenta prova para o caminho de senha sozinha; não tratar MFA como garantia universal contra phishing ou roubo de sessão. C2: bloquear aplicação não aprovada e manter tarefa legítima; usuário padrão não é antimalware suficiente. C3: recuperar função e dados, não impedir a infecção. Proposta de suspensão precisa explicar o trabalho afetado e quem autoriza.

### Evidência e mudança

T1 sustenta bloqueio e entrada legítima no recorte fornecido; não prova operação contínua. T2 sustenta os dois casos no piloto; não nas seis estações. T3 satisfaz numericamente 3 h e cópia de 20 h, mas não inclui execução da tarefa completa. **A resposta esperada antes de V1 é recuperação funcional inconclusiva**, não “backup comprovado”.

V1 acrescenta falha da tarefa crítica e indisponibilidade às 6 h: o limite de 4 h foi ultrapassado. Não invalida T1/T2 nem comprova propagação. Não permitir concluir “residual baixo na equipe”. É defensável manter R02 alto dadas consequência grave e condições ainda não verificadas nas outras estações, explicando plausibilidade e alcance. A direção decide exceção de risco alto; uma dupla não pode declarar aprovação inexistente.

Correção candidata: completar dependências, repetir restauração integral e executar entrega técnica de referência. Exigir tempo contado do início ao retorno efetivo e idade da cópia. O esforço adicional não foi fornecido: estimar/solicitar antes de prometer prazo. Possíveis medidas provisórias incluem restringir uso não aprovado ou disponibilizar ambiente alternativo **sob verificação de disponibilidade e autorização**, sem inventá-las como implantadas. Registrar exposição até a decisão, responsável e revisão em até 7 dias ou antes por gatilho; isso não concede tolerância automática para adiar ação urgente.

## Encerramento, atividade e contingência

Produto: um PDF de 3–4 páginas por dupla, com governança transferida, matriz progressiva de seis riscos, plano, resultados pertinentes T1–T7 e decisão detalhada de R02 após V1; justificativas individuais curtas e declaração de IA. Modelo e pacote estão vinculados à atividade. Carga externa estimada de até 2 h. Checkpoints não geram tarefas adicionais. A08 aponta para a mesma entrega, sem exigir reescrever sua aula ou implantar SGSI.

Sem internet: abrir pacote salvo ou projetar/circular seu texto; todos os dados estão no corpo da página. Sem editor: preencher quadro em papel. Sem registro A08: usar base fornecida, com origem explícita. Sem tempo para todas as falas: colher duas justificativas e sistematizar critérios; não transferir primeiro contato com T1–T7/V1 para casa. Não enviar mensagens ao Classroom nem alterar slides ou Drive nesta revisão.

**Fontes conferidas em 10 set. 2026:** [NIST SP 800-30r1](https://www.nist.gov/publications/guide-conducting-risk-assessments), para avaliação; [CISA #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide), para mecanismos de proteção e recuperação. Matriz, esforço, critérios de aceitação e registros são construções didáticas originais. Não afirmar conformidade com ISO/IEC 27001 nem exigir declaração completa de aplicabilidade. A seleção justificada e a distinção desenho/implantação/resultado fecham neste encontro.

## Revisão editorial solicitada

Revisão por agente independente registrada em [revisao-editorial-matriz.md](revisao-editorial-matriz.md). Removidos da página os oito fluxos iguais, preservando os arquivos. Aberturas variadas, perguntas ligadas à célula atual e comparação T3/V1 substituem o molde repetitivo. Sínteses permanecem onde ajudam; tabelas também cumprem essa função. A revisão não acrescenta enredo.
