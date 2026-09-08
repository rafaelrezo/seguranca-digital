# Proposta de distribuição da disciplina em 30 encontros

> Documento docente de governança curricular. Esta é uma proposta para avaliação antes de alterar a arquitetura geral ou os pacotes A04 e A05. Não é material do estudante nem promessa de preparação para certificações.

**Estado:** proposta curricular revisada para aderência à ementa oficial  
**Base de análise:** ementa oficial, arquitetura geral da experiência, matriz de referenciais profissionais e parecer técnico de segurança  
**Restrição histórica:** A01, A02 e A03 já foram ministradas; suas lacunas são recuperadas adiante, sem reescrita retroativa  
**Carga planejada:** 30 encontros de 104 minutos, com 52 minutos teóricos e 52 minutos práticos integrados por encontro

## Ementa como núcleo e extrapolação como aprofundamento

O percurso deve demonstrar todos os itens da ementa oficial: visão geral no contexto produtivo; criptografia; normas e padrões industriais; arquiteturas de comunicação seguras; defesa de perímetro; segurança de controle e automação industrial; malwares; autenticação, autorização e contabilidade; logs e auditoria; noções de pentest; políticas e riscos; engenharia social e conscientização.

Conteúdos profissionais adicionais — segurança de aplicações, privacidade, gestão de vulnerabilidades, hardening, nuvem, fornecedores, resposta e recuperação — permanecem quando aprofundam ou transferem um item obrigatório. Não podem ocupar o único espaço de prática de um item da ementa.

## 1. Decisão pedagógica central

O curso não será organizado como uma sucessão de domínios, certificações ou taxonomias. Sua unidade será uma forma de trabalho que amadurece em contextos progressivamente mais complexos:

```text
evidência → hipótese → funcionamento normal → condição → consequência
          → decisão → intervenção → validação → comunicação
```

Ao final, espera-se que um estudante iniciante consiga realizar essa cadeia, com apoio compatível com o nível da disciplina, em três escalas conectadas:

1. aplicação web e seus dados;
2. infraestrutura, operação e nuvem;
3. processo industrial e suas restrições de disponibilidade e safety.

As perspectivas profissionais — desenvolvimento, operações, SOC, auditoria, risco, gestão e operação industrial — mudam ao longo do percurso. O caso e as evidências acumuladas não são descartados a cada troca de perspectiva.

## 2. Princípios de sequenciamento

### 2.1 Uma transformação estrutural por encontro

Cada encontro introduz uma mudança principal no modelo mental. Vocabulário, ferramenta ou notação nova só entra quando ajuda a realizar essa transformação. Conteúdos adicionais ficam como apoio, consulta ou extensão.

### 2.2 Funcionamento legítimo antes da falha

Antes de analisar abuso, a turma reconstrói função, fluxo esperado, autoridade e dependências. Isso evita controles que interrompam a operação e reduz a carga extrínseca de cenários desconhecidos.

### 2.3 Conceito convocado por uma lacuna

Frameworks e classificações não abrem blocos expositivos. STRIDE, por exemplo, aparece somente depois de a turma saber narrar o fluxo, distinguir autenticação de autorização e formular condição e consequência testáveis.

### 2.4 Produtos cumulativos, não trinta entregas independentes

Registros de evidência, tickets, diagramas, testes, alertas, runbooks e riscos são revisados em marcos. O estudante percebe que o trabalho profissional continua após a descoberta: atribui responsável, intervém, retesta, acompanha e comunica.

### 2.5 TI e OT em espiral

OT não fica restrita à abertura e ao encerramento. O curso retorna ao processo industrial para tratar, em momentos separados, consequência e safety, arquitetura e acesso, operação defensiva, fornecedor e recuperação. O laboratório final consolida linguagem já construída.

### 2.6 Apoio paralelo para infraestrutura

HTTP, portas, protocolos, serviços, processos, permissões, rotas e logs são diagnosticados no início e apoiados por materiais curtos de consulta. Não se cria um bloco longo de pré-requisitos. O apoio é acionado antes do encontro em que a habilidade será usada e não substitui a investigação principal.

### 2.7 Orçamento cognitivo explícito

Em cada aula, a ficha-base deve contabilizar quatro fontes de novidade: domínio, ferramenta, representação e vocabulário. Como regra, apenas uma pode exigir aprendizagem substancial; as demais precisam ser familiares, demonstradas ou apoiadas. Um novo ambiente técnico não deve coincidir com uma nova metodologia extensa e um novo produto complexo.

### 2.8 Teoria e prática entrelaçadas

Os 52 minutos teóricos não significam exposição contínua. Incluem previsão, análise orientada, sistematização e decisão conceitual. Os 52 minutos práticos incluem observação, execução, produção, revisão e validação. O plano docente pode alternar essas dimensões, desde que contabilize os minutos explicitamente.

## 3. Fios recorrentes de competência

| Fio | Primeira evidência | Retomadas principais | Demonstração integradora |
|---|---|---|---|
| Raciocínio baseado em evidência | A01 | todos os arcos, com ênfase em A03, A12, A21–A23 | A30 |
| Gestão de vulnerabilidades | A02 | A08–A10, A21, A27 | A30 |
| Funcionamento, arquitetura e configuração | A04 | A05–A10, A15, A24, A28–A29 | A30 |
| Identidade e acesso | A05 | A06–A07, A15, A24, A28–A29 | A30 |
| Dados e privacidade | A02 | A12, A16–A20, A25 | A30 |
| Detecção, resposta e recuperação | A01 | A12, A20–A23, A25, A29 | A30 |
| Risco, responsável e exceção | A02 | A10, A15, A26–A28 | A30 |
| Comunicação por destinatário | A01 | A10, A15, A23, A26 | A30 |
| Processo e safety em OT | A01 | A04, A15, A20, A22, A28–A30 | A30 |
| Pentest autorizado | A02 | A08–A10 | A10 e reteste em A21 |
| Comunicação segura e perímetro | A04 | A15, A17–A20, A24–A25, A29 | A30 |
| Normas industriais | A15 | A28–A30 | A30 |
| Accounting, logs e auditoria | A01 | A05–A07, A13–A14, A21–A24 | A30 |

## 4. Mapa completo A01–A30

Em todas as linhas, `T/P = 52/52 min`. A separação indica contabilização; a experiência deve integrar as duas dimensões.

### Arco 1 — Da evidência à decisão localizada

**Transformação do arco:** deixar de nomear problemas por impressão e aprender a sustentar uma pergunta verificável sobre um sistema conhecido.

| ID e estado | Herança | Pergunta que move o encontro | Transformação principal | Experiência central | Conceitos necessários | Produto verificável | Ponte para o próximo encontro | T/P |
|---|---|---|---|---|---|---|---|---|
| **A01 — O incidente que parou a linha** — ministrada | experiência cotidiana com falhas e registros | O que a sequência de registros permite afirmar sobre a parada? | separar observação, hipótese e conclusão antes de agir | ordenar registros fictícios de HMI, PLC, rede e processo; comparar hipóteses e decidir próxima coleta/contenção | evento, incidente, risco, CIA, AAA, disponibilidade operacional e safety | linha do tempo, hipóteses concorrentes e próxima ação condicionada | para priorizar uma coleta, é preciso saber quais ativos e condições importam | 52/52 |
| **A02 — Ativos, ameaças e vulnerabilidades** — ministrada | disciplina de evidência e consequência da A01 | O que está exposto no Juice Shop e por que isso importa? | ligar evidência técnica a ativo, condição explorável, consequência e reteste | observar resposta HTTP autorizada, inventariar ativos e registrar vulnerabilidade sem atribuir CVE indevido | ativo, proprietário, ameaça, fraqueza, vulnerabilidade, exposição, exploit, CWE, CVE e controle | inventário priorizado e registro de vulnerabilidade | uma exposição observada não prova intenção, autoria nem caminho de ataque | 52/52 |
| **A03 — Triagem: ameaças sem inventar o incidente** — ministrada | registro da A02 e distinção fato/inferência | O acesso observado foi uso legítimo, falha ou abuso? | manter explicações concorrentes e declarar limite de conclusão | comparar evidências temporais e formular ameaças candidatas verificáveis; houve ruptura entre o caso corporativo/OT dos slides e a loja da prática | ameaça candidata, hipótese concorrente, condição, consequência e limite | nota de triagem com fatos, hipóteses, decisão e lacuna | para testar a ameaça, é preciso localizar a decisão no funcionamento real de um fluxo familiar | 52/52 |
| **A04 — Onde a ameaça encontra o sistema?** — ministrada e congelada | nota de triagem A03 | Em qual relação do sistema a condição pode ocorrer? | localizar ameaça em fluxo normal e revisar o modelo diante de evidência | modelar `fornecedor → VPN → FILE-01`, distinguir ramos e revisar caminho refutado | fluxo, decisão, mudança e fronteira de confiança | ticket arquitetural com ameaça localizada | autenticar a entrada na VPN prova autorização no recurso e autoria da ação? | 52/52 |
| **A05 — Bruno entrou: por que ainda precisamos proteger a cesta de Ana?** — revisão integrada | habilidade A04 de acompanhar ação, requisição, decisão e resposta | A troca visual de usuário prova término e propriedade? | distinguir sessão e autorização sobre Ana, Bruno e duas cestas | prática sincronizada de 100 min no Firefox: professor demonstra, duplas reproduzem dois fluxos legítimos, contexto antigo e acesso cruzado | contexto, logout, propriedade, autorização horizontal, negação por padrão e accounting | ticket integrado com quatro testes | a requisição legítima de Bruno terá sua entrada variada na A08 | 100 min presenciais guiados |

**Marco 1 — reconstrução orientada:** o diagrama da A04 e o mapa da A05 revisam a nota de A03. A turma deve indicar quais ameaças candidatas continuam plausíveis, quais foram enfraquecidas e qual evidência falta. Não se refaz A03 nem se avalia retroativamente o cenário que não foi experimentado.

### Arco 2 — Identidade, aplicação e tratamento verificável

**Transformação do arco:** passar de uma decisão localizada para explicar, tratar e acompanhar condições reais de aplicação sem quebrar o uso legítimo.

| ID | Herança | Pergunta que move o encontro | Transformação principal | Experiência central | Conceitos necessários | Produto verificável | Ponte para o próximo encontro | T/P |
|---|---|---|---|---|---|---|---|---|
| **A06 — encontro a redefinir** | conteúdo anterior incorporado à A05 | decisão curricular pendente | não repetir a introdução a sessão | não produzir ou publicar substituta antes de atualizar a arquitetura | a definir | a definir | preservar a ponte da A05 para autorização | a definir |
| **A07 — encontro a redefinir** | autorização horizontal incorporada à A05 | não repetir o caso Ana/Bruno | objetivo pendente de decisão arquitetural | não produzir ou publicar substituta antes da redefinição | — | — | — | pendente |
| **A08 — Quando a entrada vira instrução?** | método de comparar fluxo normal e variação controlada | Como a aplicação distingue dado esperado de conteúdo interpretado como comando? | explicar uma condição de entrada pela mudança de interpretação | comparar entrada legítima e anômala controlada, sem automação nem alcance externo; localizar validação e interpretação | validação, codificação, parametrização, contexto de interpretação e injeção | caso de teste, causa provável, controle e reteste funcional | mesmo código corrigido pode depender de componente ou segredo inseguro | 52/52 |
| **A09 — O que estamos autorizados a testar?** | fluxo, sessão, autorização e entrada de A04–A08 | Como transformar uma suspeita em teste controlado, reproduzível e ético? | planejar um pentest introdutório antes de executar técnicas | delimitar alvo, janela, contas, dados, técnicas permitidas, critérios de parada, evidências e comunicação; realizar coleta dirigida no Juice Shop local | objetivo, autorização, escopo, regras de engajamento, reconhecimento/coleta, vetor, risco operacional e cadeia de evidência | plano de teste de uma página e checklist de autorização | com regras claras, ainda precisamos executar, interpretar e comunicar sem confundir achado com impacto comprovado | 52/52 |
| **A10 — O teste encontrou o quê e como provamos a correção?** | plano A09 e tickets A02/A07/A08 | Como executar técnica autorizada, registrar o achado e demonstrar remediação sem quebrar o fluxo legítimo? | completar o ciclo mínimo de pentest e gestão de vulnerabilidade | executar manualmente caso fornecido no Juice Shop, coletar evidência, relatar, propor correção e retestar casos negado/permitido; usar até duas lentes STRIDE apenas para revisar pergunta omitida | execução controlada, prova de conceito mínima, achado, severidade contextual, falso positivo, relatório, remediação, regressão e risco residual | relatório técnico curto, registro atualizado e reteste | pessoas, dispositivos e contexto podem reabrir caminhos que o teste de aplicação não cobriu | 52/52 |

**Marco 2 — revisão defensiva do Juice Shop:** entrega curta para desenvolvimento e versão executiva de até cinco linhas para o responsável pelo serviço. Critérios: evidência reprodutível, explicação do fluxo, condição, consequência, responsável, caso permitido, caso negado, função preservada e risco residual.

### Arco 3 — Pessoas, endpoint, espaço físico e acesso remoto

**Transformação do arco:** ampliar o caminho de comprometimento sem tratar pessoas como “elo fraco” nem ameaças como catálogo.

| ID | Herança | Pergunta que move o encontro | Transformação principal | Experiência central | Conceitos necessários | Produto verificável | Ponte para o próximo encontro | T/P |
|---|---|---|---|---|---|---|---|---|
| **A11 — Por que esta mensagem parece legítima?** | decisões de identidade e evidência dos arcos anteriores | Que sinais justificam verificar uma solicitação antes de agir? | analisar engenharia social como manipulação de contexto e autoridade | comparar mensagens fictícias, prever ação, verificar por canal alternativo e explicar falso positivo possível | pretexto, urgência, impersonificação, canal independente e reporte | protocolo curto de verificação e reporte | um protocolo só melhora se sua aplicação puder ser observada sem expor pessoas | 52/52 |
| **A12 — Como medir aprendizagem sem vigiar pessoas?** | protocolo da A11 | O que uma simulação ética precisa medir e proteger? | transformar conscientização em intervenção responsável e avaliável | desenhar campanha sem envio real, com consentimento, dados mínimos, métricas de processo e plano de apoio | autorização, finalidade, minimização, métrica, viés, privacidade e aprendizagem | plano de simulação responsável | uma interação plausível pode deixar alterações no dispositivo; que evidência diferencia hipóteses? | 52/52 |
| **A13 — O que mudou no endpoint?** | disciplina de triagem e minimização | Quais evidências diferenciam falha, software legítimo e malware? | explicar malware por cadeia de comportamento e resposta, sem depender de catálogo de famílias | analisar pacote seguro de processo, conexão, persistência e logs; localizar entrada/execução/persistência; selecionar prevenção, contenção e coleta adicional | malware, vetor, execução, persistência, comunicação, impacto, hash como identificador, antimalware/EDR em nível funcional e telemetria | nota de triagem com hipótese, contenção segura e validação | para atribuir ações e revisar controles, os registros precisam formar trilha confiável | 52/52 |
| **A14 — Quem fez o quê e podemos confiar no registro?** | eventos de identidade, aplicação e endpoint | Que trilha permite atribuir uma ação sem transformar qualquer evento em incidente? | integrar accounting, logs e auditoria antes da detecção operacional | correlacionar registros fictícios de aplicação, sistema e identidade; identificar lacuna, conflito de horário, acesso indevido ao log e requisito de retenção/revisão | accounting, fonte, evento, identidade, sincronização de tempo, integridade, retenção, acesso ao log, trilha e auditoria | trilha auditável comentada e requisito de logging | uma trilha mostra o caminho; falta impedir e limitar caminhos desnecessários no perímetro | 52/52 |
| **A15 — Onde o perímetro realmente termina?** | fluxos A04, identidade A05–A07 e trilha A14 | Como permitir comunicação legítima e reduzir alcance quando a borda não é uma única parede? | projetar defesa de perímetro em camadas e transferi-la para acesso remoto OT | comparar arquitetura plana e segmentada; definir zonas, fluxos permitidos, filtragem, proxy/VPN/jump host por função, monitoração e teste permitido/negado | superfície, perímetro físico/lógico, segmentação, firewall/ACL, DMZ, proxy, VPN, zona/conduíte introdutórios, defesa em profundidade e safety | diagrama antes/depois, matriz mínima de fluxos e procedimento de acesso remoto | permitir o canal não resolve confidencialidade, integridade nem confiança nos dados transportados | 52/52 |

**Marco 3 — caminho sociotécnico:** briefing que conecta mensagem, identidade, endpoint, barreira e acesso remoto. O grupo apresenta uma recomendação técnica e a reexpressa para o responsável pelo processo, explicitando efeito operacional e limite.

### Arco 4 — Ciclo de vida dos dados e confiança

**Transformação do arco:** deixar de escolher “criptografia” genericamente e proteger dados conforme finalidade, estado, ameaça, chave e necessidade de recuperação.

| ID | Herança | Pergunta que move o encontro | Transformação principal | Experiência central | Conceitos necessários | Produto verificável | Ponte para o próximo encontro | T/P |
|---|---|---|---|---|---|---|---|---|
| **A16 — Por que guardamos este dado?** | dados observados no Juice Shop e no acesso remoto | Quais dados existem, para qual finalidade e até quando devem permanecer? | modelar proteção pelo ciclo de vida, não apenas pelo valor abstrato | seguir dados fictícios de cadastro, pedido, log e manutenção; decidir coleta, proprietário, retenção e descarte | finalidade, minimização, classificação, proprietário, estados do dado, retenção e descarte | inventário de dados com decisões justificadas | os dados necessários precisam de proteção diferente em trânsito e armazenamento | 52/52 |
| **A17 — O que precisa permanecer secreto e quem controla a chave?** | inventário e estados do dado | Que mecanismo protege este dado sem inviabilizar seu uso? | relacionar confidencialidade a estado, chave e operação | comparar configurações fornecidas para trânsito/repouso e desenhar ciclo mínimo de segredo/chave | criptografia simétrica, TLS em uso, nonce/IV em nível conceitual, chave, rotação e segredo | decisão de proteção com proprietário da chave e teste de aceitação | confidencialidade não prova origem nem detecta toda alteração | 52/52 |
| **A18 — Em quem e em qual conteúdo podemos confiar?** | decisão de confidencialidade | O que assinatura e certificado permitem afirmar — e o que não permitem? | separar integridade, autenticidade e confiança contextual | verificar assinatura e inspecionar cadeia/nome/validade de certificado de laboratório | hash, MAC em contraste, assimetria, assinatura, PKI, cadeia, nome, validade e revogação | registro de verificação com limites | mesmo dado protegido pode ser coletado em excesso ou permanecer além da finalidade | 52/52 |
| **A19 — Senha, hash e segredo são protegidos da mesma forma?** | propriedades e mecanismos A16–A18 | Como armazenar verificadores e segredos sem confundir codificação, hash e criptografia reversível? | completar o núcleo criptográfico com armazenamento e configuração segura | comparar amostras fictícias de senha; identificar salt, função de derivação e parâmetros; decidir armazenamento/rotação de segredo de serviço | hash, salt, derivação de senha, custo, pepper em contexto, cofre de segredos e rotação | especificação de armazenamento e teste de aceitação | mecanismos isolados ainda precisam formar comunicação segura de ponta a ponta | 52/52 |
| **A20 — O canal é seguro para este fluxo e continua operável?** | fluxo A04, perímetro A15 e mecanismos A17–A19 | Como combinar identidade, canal, segmentação, chaves, logs e disponibilidade em uma arquitetura de comunicação segura? | sintetizar mecanismos em arquitetura e validar segurança e função | redesenhar fluxo da empresa; escolher TLS/VPN quando cabível, pontos de AAA, zonas, gestão de chaves, telemetria, fallback e recuperação; testar premissas | arquitetura de comunicação, canal, endpoint de confiança, TLS/VPN, segmentação, disponibilidade, logging, backup/restauração e risco residual | diagrama arquitetural justificado, casos permitido/negado e critério de recuperação | uma arquitetura segura degrada quando configuração e vulnerabilidades se afastam do esperado | 52/52 |

**Marco 4 — criptografia e arquitetura segura:** revisão do inventário da A16 contendo finalidade, proteção, chave/segredo, hash/assinatura/certificado quando aplicáveis e uma arquitetura de comunicação validada por casos permitido/negado e recuperação. Privacidade aprofundada, DLP, algoritmos adicionais e blockchain ficam como consulta ou extensão.

### Arco 5 — Operação defensiva e nuvem

**Transformação do arco:** passar de controles pontuais para um ciclo observável de configuração, detecção, resposta, recuperação e aprendizagem.

| ID | Herança | Pergunta que move o encontro | Transformação principal | Experiência central | Conceitos necessários | Produto verificável | Ponte para o próximo encontro | T/P |
|---|---|---|---|---|---|---|---|---|
| **A21 — O que mudou em relação ao esperado?** | tickets, testes e estados esperados anteriores | Qual baseline permite detectar exposição ou configuração insegura? | tornar configuração segura e vulnerabilidades acompanháveis ao longo do tempo | comparar inventário/configuração esperada com evidência de desvio; atualizar status, responsável e prazo de um achado da A02/A10 | baseline, hardening contextual, configuração, mudança autorizada, severidade, SLA local e exceção | registro de desvio e painel mínimo de acompanhamento | nem todo desvio merece alerta; é preciso definir sinal e contexto | 52/52 |
| **A22 — Quando um evento deve virar alerta?** | baseline e evidências acumuladas | Que telemetria permite agir sem confundir ruído com incidente? | ligar hipótese a fonte, condição de alerta e falso positivo | transformar evidências web/endpoint em regra; comparar com telemetria curta de processo OT sem inferir estado físico apenas de rede | log, evento, correlação, alerta, contexto, retenção, falso positivo/negativo e telemetria OT | especificação de alerta com fonte, lógica, contexto e ação | um alerta só tem valor se orientar triagem e decisão segura | 52/52 |
| **A23 — Conter, recuperar ou escalar?** | alerta A22 e restauração A20 | Qual ação reduz impacto sem destruir evidência nem interromper função crítica? | executar ciclo integrado de resposta e aprendizagem | exercício de mesa com atualização progressiva; triar, conter, preservar, recuperar, validar e registrar lição | severidade, playbook, cadeia de custódia introdutória, contenção, recuperação, escalonamento e lição aprendida | runbook curto e revisão pós-incidente | esse ciclo muda quando a infraestrutura é operada sob responsabilidade compartilhada | 52/52 |
| **A24 — A arquitetura continua segura quando vai para a nuvem?** | arquitetura A20 e ciclo de resposta | Onde termina a responsabilidade do provedor e quais decisões de identidade, canal e log continuam nossas? | transferir AAA e comunicação segura para AWS Academy | laboratório econômico com identidade/política e arquitetura fornecidas; observar, corrigir menor privilégio e verificar trilha de auditoria | responsabilidade compartilhada, IAM, função, credencial temporária, canal de administração e logging | revisão de arquitetura/acesso em nuvem com antes/depois | identidade correta não elimina exposição de rede nem recurso esquecido | 52/52 |
| **A25 — O perímetro em nuvem permite somente o necessário?** | recursos, arquitetura e logs A24 | Como corrigir caminho de rede, validar defesa em profundidade e provar encerramento? | transferir defesa de perímetro, auditoria, inventário e recuperação para nuvem | observar rota/grupo de segurança, reduzir exposição, validar fluxo permitido/negado, coletar log, remover recursos e verificar ausência de cobrança residual | VPC funcional, rota, porta/serviço, security group, segmentação, inventário, logging, custo e encerramento | relatório antes/depois, teste de perímetro, evidência de auditoria e checklist de limpeza | decisões residuais competem por prioridade, responsável e aceitação | 52/52 |

**Marco 5 — mini-investigação operacional:** detectar, triar, conter/corrigir, recuperar ou preservar função, validar, aprender e encerrar. O laboratório AWS só é fechado após validar região, serviços, tamanho, duração, estimativa e plano alternativo atuais.

### Arco 6 — Risco, governança e consolidação OT

**Transformação do arco:** integrar técnica, negócio e processo físico, tornando responsabilidade, exceção, terceiro, risco residual e recuperação parte da decisão.

| ID | Herança | Pergunta que move o encontro | Transformação principal | Experiência central | Conceitos necessários | Produto verificável | Ponte para o próximo encontro | T/P |
|---|---|---|---|---|---|---|---|---|
| **A26 — O que tratar primeiro e quem precisa saber?** | riscos e achados acumulados | Qual condição merece tratamento primeiro sob recursos limitados? | priorizar risco com incerteza e adaptar comunicação ao destinatário | comparar três riscos reais do percurso; escolher tratar, aceitar, transferir ou evitar e produzir mensagem técnica/executiva | probabilidade qualitativa, impacto, incerteza, apetite/tolerância, tratamento e risco residual | registro de risco e duas comunicações da mesma evidência | uma decisão repetível precisa de regra, responsável e exceção governada | 52/52 |
| **A27 — Qual regra torna o tratamento repetível?** | risco priorizado e histórico de vulnerabilidades | Como política, padrão e procedimento distribuem responsabilidade, exceção e evidência? | governar risco sem transformar a aula em catálogo de compliance | corrigir política ambígua; derivar padrão técnico e procedimento; definir proprietário, exceção com prazo, indicador e revisão | política, padrão, procedimento, responsabilidade, exceção, métrica, conformidade e melhoria | política curta, padrão verificável e quadro de acompanhamento | em OT, requisitos e responsabilidades também são organizados por normas setoriais e ciclo de vida | 52/52 |
| **A28 — O que as referências industriais exigem desta decisão?** | política A27, perímetro A15 e contatos OT | Como usar normas e guias para avaliar risco e acesso remoto sem tratá-los como checklist universal? | aplicar referências industriais por função e limite | comparar o que ISA/IEC 62443, NIST SP 800-82 e CISA ajudam a decidir no caso do fornecedor; definir zonas/conduítes, responsabilidades, janela, monitoração, mudança, revogação e resposta | IACS/OT, ciclo de vida, proprietário/integrador/fornecedor, avaliação de risco, zonas/conduítes, requisitos de segurança introdutórios e defesa em profundidade | matriz `requisito → evidência → responsável → lacuna` e plano condicionado de acesso remoto | os requisitos precisam ser verificados em processo, arquitetura e telemetria reais | 52/52 |
| **A29 — O processo continua seguro depois da intervenção?** | contatos OT de A01, A15, A20, A22 e A28 | Onde segmentar e o que monitorar sem perder visibilidade ou controle do processo? | consolidar inventário, fluxo, zonas/conduítes e telemetria em processo virtual isolado | observar OpenPLC/FUXA ou pacote alternativo; reconstruir processo normal, inventariar componentes, analisar um fluxo/protocolo, propor segmentação e validar função | PLC, HMI/supervisório, estação de engenharia, protocolo pelo papel, inventário passivo, zona, conduíte, disponibilidade e safety | inventário OT, diagrama antes/depois, regra de monitoramento e teste funcional | uma arquitetura defensável ainda precisa responder a incidente e retornar ao estado esperado | 52/52 |
| **A30 — Conseguimos defender a decisão do início ao fim?** | portfólio e modelo OT da A29 | Como responder, recuperar e justificar risco residual preservando o processo? | integrar todo o raciocínio com comunicação técnica e executiva | exercício final com evidências progressivas e papéis de SOC, desenvolvimento/infraestrutura, operação industrial e gestão; decidir, intervir, recuperar e validar | integração de evidência, risco, governança, resposta, recuperação, safety e comunicação | dossiê enxuto, demonstração de validação e briefing oral | fechamento: limites, transferência profissional e plano de melhoria | 52/52 |

**Marco 6 — desempenho integrador:** a mesma evidência deve sustentar uma decisão técnica e uma decisão de gestão. A validação demonstra segurança, recuperação e função preservada; o grupo explicita o que não pôde concluir.

## 5. Recuperação das lacunas da A03

A03 permanece como fato histórico e como primeiro exercício explícito de triagem. Sua lacuna não será “corrigida” pela repetição da aula nem pela alteração retroativa dos artefatos usados.

A recuperação ocorrerá em quatro movimentos:

1. **A04 localizou a hipótese:** cada grupo ligou uma ameaça candidata às relações VPN/FILE/ENG/OT e revisou o modelo diante de evidência refutadora.
2. **A05 discrimina decisões no rastro real:** `VPN → FILE-01` recupera a pergunta; identificação, autenticação, sessão, autorização e accounting são observados no mesmo percurso do Juice Shop.
3. **A06 será redefinida:** a introdução a sessão já está consolidada na A05 e não deve ser repetida.
4. **A10 testa e revisa cobertura:** a nota de triagem é retomada sob regras de engajamento. A turma executa um caso autorizado, relata e retesta; no máximo duas lentes STRIDE podem revelar pergunta omitida, sem validar autoria nem transformar hipótese em fato.

O ganho da A03 que deve ser preservado é: `não atribuir cedo; manter explicações concorrentes; pedir evidência discriminante`. O cenário corporativo passa a ser reutilizado nos encontros de perímetro, comunicação segura e OT; não deve ser apagado nem exigir inferências que a A04 não autorizou.

## 6. Decisão concreta para A04 e A05

### A04 — preservar a experiência ministrada

**Título realizado:** `A04 — Onde a ameaça encontra o sistema?`

- Caso principal realizado: relações `fornecedor → VPN → FILE-01`, `FILE-01 ↔ ENG-WS-01` e `ENG-WS-01 → OT-JUMP-01`.
- Produto válido: ticket arquitetural com fluxo, fronteira, ameaça revisada e evidência faltante.
- Regra: não alterar retrospectivamente o pacote nem atribuir à turma observações do Juice Shop que não ocorreram.
- Novidade estrutural realizada: localizar mudança de decisão em fluxo normal.
- Representação realizada: diagrama rotulado; nenhuma notação formal obrigatória.
- Evidência refutadora: ausência de autorização direta `VPN → ENG-WS-01`.
- Limite preservado: não introduzir retroativamente STRIDE, priorização ou catálogo de controles.

### A05 — substituir STRIDE por identidade e acesso

**Título de trabalho:** `A05 — Bruno entrou: por que ainda precisamos proteger a cesta de Ana?`

- Caso principal: exatamente o fluxo desenhado em A04.
- Novidade estrutural: decompor identificação, autenticação e autorização.
- Experiência: comparar caso permitido e negado para duas identidades fictícias.
- Produto: mapa da decisão e evidência necessária para provar cada etapa.
- Conta de serviço entra como contraste curto somente depois de contas pessoais estarem claras.
- STRIDE torna-se checkpoint opcional em A10, depois de fluxo, identidade, sessão, autorização, entrada e regras de engajamento. Não ocupa encontro próprio.

**Portão ao final de A05:** a maioria da turma deve narrar os quatro casos Ana/Bruno, separar validade do contexto de propriedade da cesta e justificar controle no servidor. A atividade domiciliar repete o caso; A06 e A07 não repetem os conteúdos incorporados.

## 7. Espiral TI/OT

| Contato | Encontro | O que já é familiar | Nova decisão OT | Evidência que permanece |
|---|---|---|---|---|
| 1 — processo e consequência | A01 | registros e hipóteses | conter sem perder estado seguro | linha do tempo e critério de parada |
| 2 — arquitetura corporativa | A04 | fluxo, hipótese e evidência | reconhecer que `ENG-WS-01 → OT-JUMP-01` exige decisão própria | ticket arquitetural e lacuna de autorização |
| 3 — arquitetura e acesso | A15 | identidade, trilha e perímetro | permitir manutenção remota com segmentação, janela, monitoração e reversão | matriz de fluxos e procedimento de acesso |
| 4 — comunicação e recuperação | A20 | canal seguro, logging e fallback | validar comunicação e retorno ao estado esperado sem reintroduzir condição insegura | arquitetura e critérios de recuperação |
| 5 — operação defensiva | A22 | baseline, log e alerta | correlacionar telemetria cibernética e de processo sem assumir causalidade | regra e ação compatível com operação |
| 6 — terceiro e governança | A28 | política, exceção e risco | condicionar acesso do fornecedor e revogar ao fim | decisão contratual-operacional |
| 7 — laboratório de consolidação | A29 | linguagem de processo, acesso, alerta e recuperação | segmentar e monitorar preservando função | inventário, diagrama, regra e teste funcional |
| 8 — resposta integrada | A30 | portfólio completo | responder e recuperar com operação e gestão | dossiê e validação do processo |

Essa espiral evita dois erros: tratar OT como TI renomeada e exigir que A29 ensine, simultaneamente, processo, componentes, protocolo, arquitetura, segmentação, detecção e safety.

## 8. Marcos avaliativos e portfólio

| Marco | Encontros | Produto revisado | Desempenho observado | Destinatário |
|---|---|---|---|---|
| M1 — evidência e decisão | A01–A05 | nota A03 + diagrama A04 + mapa A05 | fato/hipótese, fluxo legítimo, decisão e evidência faltante | equipe de aplicação |
| M2 — pentest e revisão defensiva | A06–A10 | plano, relatório e registro iniciado em A02 | autorização, execução, evidência, causa, correção, permitido/negado e residual | desenvolvimento e dono do serviço |
| M3 — pessoas, malware, auditoria e perímetro | A11–A15 | protocolo, triagem, trilha e matriz de fluxos | conscientização, resposta a malware, accounting, auditoria e defesa em profundidade | segurança, infraestrutura e operação industrial |
| M4 — criptografia e comunicação segura | A16–A20 | inventário, decisões criptográficas e arquitetura | finalidade, chave/segredo, confiança, armazenamento, canal, disponibilidade e recuperação | proprietário do dado e arquitetura/operações |
| M5 — ciclo operacional/nuvem | A21–A25 | alerta, runbook e relatório AWS | baseline, detecção, contenção, recuperação, logging, custo e limpeza | SOC/infraestrutura |
| M6 — integração final | A26–A30 | dossiê do portfólio | prioridade, governança, terceiro, OT, recuperação e comunicação por público | equipe técnica e decisor |

### Progressão de autonomia

- **A01–A05 — inicial e fortemente orientada:** fontes e estrutura do produto são fornecidas; o estudante decide entre hipóteses e evidências.
- **A06–A15 — em desenvolvimento:** o fluxo e o escopo são fornecidos; o estudante seleciona teste, controle e justificativa entre alternativas.
- **A16–A25 — transferência assistida:** o estudante reutiliza critérios em dados, operação e nuvem, com checklists de segurança e custo.
- **A26–A30 — integração:** o estudante prioriza, distribui responsabilidade, valida e adapta comunicação, ainda em ambiente e cenário delimitados.

Não se classificará uma competência como demonstrável apenas porque apareceu em um encontro. Ela precisa reaparecer em outro contexto e compor um produto integrado validado.

## 9. Núcleo, desejável e consulta

### Núcleo obrigatório

- ética, autorização, escopo, sanitização e parada segura;
- evidência, hipótese, limite e confiança;
- ativo, função, proprietário, dependência, consequência e risco residual;
- fundamentos necessários de HTTP, identidade, sessão, autorização, rede, serviço e log;
- ciclo web completo de observação, explicação, intervenção e reteste;
- gestão recorrente de vulnerabilidades e configuração;
- criptografia aplicada a confidencialidade, integridade, autenticidade, senhas/segredos e comunicação segura;
- accounting, logs e auditoria com atribuição, integridade, retenção e revisão;
- pentest introdutório autorizado, do escopo ao relatório e reteste;
- defesa de perímetro em camadas e transferência para nuvem e OT;
- normas e padrões industriais aplicados a risco, arquitetura e operação;
- detecção, triagem, contenção, recuperação e aprendizagem;
- IAM, rede, logging, custo e limpeza em nuvem;
- regra, responsável, exceção, terceiro e comunicação por público;
- processo/safety, acesso remoto, inventário, segmentação, monitoramento e recuperação em OT.

### Desejável, condicionado à base e ao tempo

- MFA, federação e privilégio administrativo em maior profundidade;
- uma evidência simples de dependência, segredo e pipeline;
- DLP aplicado a um fluxo;
- comparação de segunda tecnologia ou protocolo OT;
- métricas adicionais de operação e vulnerabilidades;
- assinatura/PKI além da verificação necessária ao caso.

### Consulta ou extensão

- cobertura integral de Security+, CISSP, NICE ou ISA/IEC 62443;
- DREAD, PASTA, STRIDE completo por todos os elementos e outros catálogos;
- risco quantitativo avançado;
- blockchain e inventário extenso de algoritmos ou famílias de malware;
- exploração ofensiva OT;
- pentest abrangente como processo de certificação.

## 10. Carga horária

| Arco | Encontros | Teoria | Prática | Total presencial |
|---|---:|---:|---:|---:|
| 1 — evidência e decisão localizada | 5 | 5 × 52 = 260 min | 5 × 52 = 260 min | 520 min |
| 2 — identidade e aplicação | 5 | 260 min | 260 min | 520 min |
| 3 — pessoas, endpoint e acesso remoto | 5 | 260 min | 260 min | 520 min |
| 4 — ciclo de vida dos dados | 5 | 260 min | 260 min | 520 min |
| 5 — operação e nuvem | 5 | 260 min | 260 min | 520 min |
| 6 — risco, governança e OT | 5 | 260 min | 260 min | 520 min |
| **Total** | **30** | **1.560 min** | **1.560 min** | **3.120 min** |

O total corresponde a **30 aulas teóricas e 30 aulas práticas de 52 minutos**, ou **52 horas-relógio presenciais**. A equivalência com a expressão institucional “30 horas teóricas + 30 horas práticas” depende de confirmar se a instituição contabiliza hora-aula de 52 minutos ou hora-relógio. Esta proposta não inventa datas, feriados ou reposições.

## 11. Portões de revisão

### 11.1 Portão de sequência

Antes de produzir cada pacote, responder:

1. Que evidência ou habilidade concreta a aula recebe?
2. Qual única transformação principal realiza?
3. Que lacuna torna o conceito necessário agora?
4. Que produto segue adiante e quem o usa?
5. Que pergunta não artificial prepara a próxima aula?

Se a justificativa for apenas “é o próximo tópico da ementa”, a sequência deve ser refeita.

### 11.2 Portão de carga cognitiva

Registrar domínio, ferramenta, representação e vocabulário novos. Quando mais de uma dimensão for substancialmente nova, reduzir escopo, fornecer apoio anterior ou reutilizar ferramenta/representação familiar. A aula não deve exigir simultaneamente aprender o sistema, a notação, o framework e o formato de entrega.

### 11.3 Portão de evidência e intervenção

- observação está separada de hipótese e conclusão;
- funcionamento normal foi reconstruído;
- condição e consequência são testáveis;
- controle possui premissa, responsável e efeito operacional;
- validação contém caso de segurança e preservação do fluxo legítimo;
- risco residual e limite da evidência estão declarados.

### 11.4 Portão TI/OT

Quando houver OT:

- o processo físico e o estado seguro estão representados;
- operação participa da autoridade de mudança e contenção;
- disponibilidade, janela e reversibilidade alteram a decisão;
- coleta evita varredura ativa desnecessária;
- resposta inclui escalonamento e recuperação do processo;
- protocolo é ensinado por sua função e evidência, não como catálogo.

### 11.5 Portão de coerência do pacote

Slides, MkDocs, PDF e plano docente devem compartilhar cenário, objetivos, evidência, intervenção, validação e ponte, exercendo funções diferentes. Slides precisam permitir reconstruir a cadeia narrativa sem se tornarem formulário de etapas. Mudança nesses elementos exige revisar todos os artefatos afetados.

### 11.6 Portões específicos antes de congelar A04 e A05

1. A04 usa uma jornada do Juice Shop que a turma consegue executar ou observar com plano alternativo?
2. O diagrama cabe em uma página e nasce após a observação?
3. A04 evita STRIDE e arquitetura corporativa/OT desconhecida como caso principal?
4. A05 reutiliza exatamente o mesmo fluxo?
5. Casos permitido e negado tornam autenticação e autorização distinguíveis?
6. O fechamento de A05 produz uma linha de base de identidade e sessão suficiente para a futura investigação de autorização?

Qualquer resposta negativa impede publicar os novos pacotes.

## 12. Decisões pendentes antes da incorporação à arquitetura geral

1. A ementa oficial já foi confrontada com esta distribuição; validar ainda o plano de ensino completo, objetivos formais, avaliação e bibliografia quando o documento estiver disponível.
2. Confirmar institucionalmente a equivalência entre hora-aula de 52 minutos e a carga declarada de 30 h teóricas + 30 h práticas.
3. Escolher a jornada exata do Juice Shop para A04–A10 após validar a versão local e o plano alternativo.
4. Verificar o diagnóstico de redes/sistemas da turma e preparar apoios curtos antes de A06, A13, A22, A24 e A29.
5. Validar versões, licenças, origem e isolamento de OpenPLC/FUXA ou definir pacote de telemetria alternativo.
6. Definir laboratório AWS apenas após verificar serviços, região, custo, duração, permissões e encerramento vigentes.
7. Após aprovação, atualizar primeiro `docente/arquitetura-geral-da-experiencia.md`; somente então redesenhar os quatro artefatos dos pacotes A04 e A05.
