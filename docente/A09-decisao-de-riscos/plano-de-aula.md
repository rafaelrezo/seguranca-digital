# A09 — Decidir e avaliar controles de segurança digital

## Ficha-base e intenção

**Estado:** reformulação autorizada em 10 set. 2026; execução pela turma não confirmada. **Carga:** 100 minutos, 60 teóricos/40 práticos. **Vínculo:** M1, atividade única A08–A09, encerrada nesta aula. **Página:** `docs/aulas/A09-decisao-de-riscos.md`. Plano anterior preservado em [plano-preservado-2026-09-10-portal.md](plano-preservado-2026-09-10-portal.md).

**Ementa:** avaliação qualitativa, prioridade, tratamento, controles, desenho/implantação/resultado, residual e autoridade. **Pergunta:** como decidir e verificar proteção contra comprometimento de conta e ransomware sem deixar a equipe técnica sem trabalhar?

**Três objetivos:** formular riscos a partir de fatos e compará-los com critérios e incertezas; justificar controles viáveis e função preservada; avaliar evidências e revisar residual, autoridade e condição de acompanhamento. O ganho sobre A08 é transformar governança em decisão sustentada por resultados, concluindo avaliação de controles nesta A09.

**Herança confirmada:** o docente confirmou A08 ministrada; a versão exata usada e a produção individual não estão confirmadas. Reutilizar conceitos de escopo, diretriz, autoridade e acompanhamento. O ambiente técnico é um novo recorte fornecido; a política do portal não se estende automaticamente. Não dizer que estes riscos ou testes já foram trabalhados na A08.

**Infraestrutura:** navegador, página/pacote em texto, projeção e papel/editor. **Operação:** ler campos dos registros, prever critério, comparar resultado e revisar decisão. **Evidência de aprendizagem:** registro justificado dos estudantes, não log de teste executado. Nenhum malware, autenticação real, instalação, sistema externo ou nuvem. O pacote é simulado e sua leitura constitui prática analítica, não demonstração técnica de implantação.

**Cadeia:** conceitos de governança disponíveis → novo escopo e E1–E8 fornecidos → comparar seis riscos → matriz progressiva → critérios e lacunas → avaliação/tratamento → selecionar plano de 12 h → analisar T1–T7 e V1 → registro único concluído → nenhuma etapa de risco/controle pendente para A10. A10 aguarda replanejamento.

## Preparação e condução pela matriz

Comece pela retomada “Da A08 à A09” (até 4 min), use a ilustração e leia a linha de base antes dos riscos. No final do tema 1, explique e confira somente risco, evidência e incerteza. Não apresente um guia de todas as colunas nem uma matriz completa na abertura.

A matriz aparece **ao final de cada tema**, após sua explicação: tema 2 adiciona consequência/plausibilidade; 3, classe; 4, tratamento; 5, controle/recurso/critério; 6, resultado; 7, residual; 8, decisão/acompanhamento. São visualizações sincronizadas de um único registro, com os mesmos seis riscos. Preencher uma célula atualiza as ocorrências dela nas outras etapas. Não mandar a turma voltar ao topo. “Mostrar só as colunas novas” facilita a projeção; desmarcar permite rever o acumulado. O professor digita a síntese das respostas curtas; reprodução individual é opcional.

Separar a escolha de tratamento da medida concreta e escrever critério antes de mostrar T1–T7. Depois de V1, registrar residual sem apagar a avaliação inicial. No tema 8, consolidar responsável, autoridade, prazo e gatilho. Exportar ao final: não há salvamento ao fechar/recarregar. CSV/texto/papel são alternativas; sem interação, as tabelas permanecem legíveis, mas preenchimento único deve ocorrer no modelo.

**Enquadramento:** seis riscos competem por 12 h de TI, mas não haverá seis estudos completos. R01 ensina o preenchimento; R02 recebe análise mais detalhada e V1. R03–R06 ampliam a comparação com uma justificativa breve por campo. Nos temas 2–3, distinguir quadro de classificação (3×3) da matriz de análise (seis riscos).

## Condução de 100 minutos

| Minutos | T/P | Colunas e condução | Participação |
|---|---|---|---|
| 0–15 | 5/10 | Retomada de governança (4 min dos 5 T do bloco); etapa 1: risco, evidência e incerteza. Ler ambiente/E1–E8 e seis caminhos. | Cada resposta distingue fato do registro e hipótese. Não iniciar seis investigações. |
| 15–35 | 15/5 | Temas 2–3: consequência/plausibilidade e, depois do quadro de classificação, classe inicial. Preencher R01, aprofundar R02 e comparar R03–R06. | Cerca de 5 min exemplo, 5 min R02, 8 min demais e 2 min prioridade. Justificativas curtas; não impor seis riscos altos. |
| 35–60 | 15/10 | Temas 4–5: tratamento; depois controle, recurso/cobertura e critério de verificação. Examinar C1–C8; decidir quais cabem em 12 h. | Nomear medida candidata por linha, distinguir incluída/adiada e explicar função preservada. R02 recebe alternativa detalhada. |
| 60–85 | 15/10 | Temas 6–7: resultado/limite e, após V1, risco residual. Avaliar T1–T3, comparar T4–T7 e aplicar V1. | 4 min desenho/implantação/resultado; 7 min T1–T3; 6 min T4–T7; 8 min V1/residual. Hipótese de implementação não reduz risco atual. |
| 85–100 | 10/5 | Tema 8: fechar o exemplo; apresentar o novo cenário da central e demonstrar como transferir o método para a entrega. | 5 min fechamento/exportação; 5 min fatos da central e formulação; 5 min matriz em branco, critérios e dúvidas. Sem operação nova em casa. |
| **Total** | **60/40** | **100 minutos** | **Registro único concluído na A09** |

Se atrasar, reduza rodadas de falas e peça uma razão por célula; preserve V1 e a revisão do residual. Não adie controles para A10. As tabelas do site são insumos; a matriz é o registro cumulativo, não uma atividade extra. O modelo aceita três faixas de colunas com os mesmos seis IDs em 3–4 páginas.

## Guia de perguntas e respostas esperadas

### Ambiente e risco

- “Ter a senha prova invasão?” Não. E2 informa resultado simulado de um caminho condicionado à posse da senha. Não informa frequência de roubo nem incidente real.
- “Qual propriedade R01 afeta?” Autoria e integridade de aprovação/comunicação; confidencialidade pode ser discutida como possibilidade, sem inventar vazamento. Não reduzir o caso a permissão de arquivo.
- “R02 exige administrador?” Não. A cifragem de dados acessíveis ao usuário pode ocorrer sem esse privilégio. Privilégio e execução controlada são condições diferentes.
- “O ransomware chegou ao serviço externo?” O pacote não permite concluir isso. Seu alcance é uma incerteza, não uma propagação demonstrada.

### Avaliação

No tema 3, reabrir as mesmas linhas, acrescentando classe somente após consequência/plausibilidade. R01 está preenchido; R02–R06 exigem justificativa. Tratamento, controle, resultado e decisão entram nos temas correspondentes. O checkpoint é condicional: não anunciar que ambos são altos antes da justificativa da turma.

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

## Encerramento, nova atividade e contingência

A Nuvora permanece exemplo de condução; a entrega passa para uma central fictícia de empréstimo de equipamentos tecnológicos. Os estudantes recebem funcionamento, escopo, F01–F08, responsabilidades, critérios e restrição de recurso, **sem riscos nomeados ou controles prontos**. Formular seis riscos e completar as treze colunas no modelo em branco. A matriz Nuvora exportada é registro de estudo, não entrega substituta.

Nos últimos 15 min: concluir o exemplo (5); apresentar o novo serviço e mostrar como decompor um fato em condição/ameaça/consequência (5); abrir o CSV em branco e esclarecer entrega/rubrica (5). Usar o exemplo R01 da Nuvora, já trabalhado publicamente, para demonstrar a formulação. No novo caso, pedir que a turma identifique um ativo e uma informação faltante em F01–F08, sem fornecer seis respostas. Leitura dos fatos e preenchimento foram demonstrados antes do trabalho domiciliar.

### Apoio à correção — não publicar na versão estudantil

Caminhos possíveis, não lista obrigatória: F01, ação indevida sem atribuição individual ou uso de conta compartilhada fora da função; F02, uso de comprovante encaminhado para retirada por outra pessoa; F03, execução de programa de origem não confirmada; F04, abuso de chave com permissões além da notificação; F05, divulgação de histórico/identificação em consulta pública; F06, destruição/cifragem da base e cópias no mesmo domínio de administração, comprometendo recuperação; F07, uso de manutenção após encerramento do contrato. F08 fornece barreiras e impede generalizações como “nenhuma conta tem MFA”.

Aceitar outros seis riscos fundamentados nos fatos e em hipóteses explícitas. Não exigir correspondência um fato/um risco. Rejeitar nomes diferentes para o mesmo caminho sem diferença de condição, consequência ou tratamento. Risco de negócio puro deve ser reformulado com ação sobre conta, informação, sistema ou serviço. Consequência não deve ser inventada como fato consumado.

Controles devem responder ao caminho identificado: atribuição individual e permissões; validação de titularidade na retirada; origem e execução de software; segredo/escopo de integração; dados do catálogo; independência e recuperação das cópias; ciclo de autorização do suporte. Não exigir produtos ou comandos específicos. Cobrar critério observável e função preservada. Estimativas de esforço são didáticas: avaliar premissa, dependência e soma de 12 h, sem presumir orçamento técnico real.

**Verificação:** nenhum controle da atividade foi implantado ou testado. Resultado/limite deve declarar “não verificado” e a verificação necessária; residual é estimativa condicionada. Não transportar T1–T7/V1 da Nuvora como resultado do novo serviço. Matriz completa significa campos justificados, não inventar sucesso. Revisão cruzada confronta mecanismo, teste proposto e exposição restante.

**Entrega:** PDF único de 3–4 páginas, seis riscos N01–N06, treze campos divididos em faixas, síntese de governança, plano/prioridade e justificativas individuais. Rubrica: identificação/contexto 25%, avaliação 20%, controles 25%, verificação/residual/decisão 20%, clareza/autoria 10%. Até 2 h externas; prazo docente. Enunciado em A09#atividade, modelo CSV `A09-atividade-matriz.csv`, caso `A09-atividade-cenario.txt`, modelo textual `A09-modelo-governanca-riscos.txt`. Nenhuma dependência da A10 nem nova tarefa do macrocomponente.

**Alternativas:** sem conexão, pacote da aula para estudo e pacote próprio da atividade para o novo caso; sem planilha, editor/papel com os mesmos campos. Se faltar tempo para falas, pedir uma razão por decisão; preservar explicação do novo enunciado. Não pedir execução em sistemas do campus, instalações ou envio de dados reais. Slides/Drive/Classroom não são alterados nesta revisão.

**Fontes conferidas em 10 set. 2026:** [NIST SP 800-30r1](https://www.nist.gov/publications/guide-conducting-risk-assessments), para avaliação; [CISA #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide), para mecanismos de proteção e recuperação. Matriz, esforço, critérios de aceitação e registros são construções didáticas originais. Não afirmar conformidade com ISO/IEC 27001 nem exigir declaração completa de aplicabilidade. A seleção justificada e a distinção desenho/implantação/resultado fecham neste encontro.

## Revisão editorial solicitada

Revisão por agente independente registrada em [revisao-editorial-matriz.md](revisao-editorial-matriz.md). Removidos da página os oito fluxos iguais, preservando os arquivos. Aberturas variadas, perguntas ligadas à célula atual e comparação T3/V1 substituem o molde repetitivo. Sínteses permanecem onde ajudam; tabelas também cumprem essa função. A revisão não acrescenta enredo.

**Revisão da interação — 10 set. 2026:** treze colunas distribuídas pelos oito temas. A orientação anterior de guia geral antes da matriz foi superada. A consistência está nos dados e critérios compartilhados, sem antecipar os campos nem separar explicação de aplicação.

**Leitura dinâmica — 10 set. 2026:** cada um dos oito temas abre com 3–4 ideias-chave itemizadas, mantendo explicação integral e matriz local. Retomada e atividade também têm sínteses. A revisão não restaura fluxos visuais idênticos nem acrescenta enredo.
