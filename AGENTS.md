# Diretrizes para Criação e Revisão do Curso de Segurança Digital

Estas instruções orientam todo conteúdo criado ou revisado neste repositório. O curso deve ser desenvolvido a partir de problemas observáveis, experimentação segura e situações profissionais verossímeis. A teoria entra quando ajuda o estudante a explicar uma evidência, tomar uma decisão ou melhorar uma solução.

## Referência obrigatória de arquitetura curricular

Antes de criar, reorganizar ou revisar uma aula, consultar [`docente/arquitetura-geral-da-experiencia.md`](docente/arquitetura-geral-da-experiencia.md). Esse documento registra a espinha dorsal da disciplina, o caso condutor, as dependências entre encontros, os produtos integradores e os portões contra *drift*.

Consultar também [`docente/publicacao-google-drive.md`](docente/publicacao-google-drive.md) antes de publicar ou substituir materiais. O arquivo registra a pasta oficial, o inventário vigente e o procedimento de sincronização entre repositório e Google Drive.

- O `AGENTS.md` define as diretrizes gerais de produção e qualidade.
- A arquitetura geral define **por que cada aula existe, o que recebe da anterior e o que prepara para a seguinte**.
- O arquivo [`docente/conteudo-programatico-por-encontro.md`](docente/conteudo-programatico-por-encontro.md) conserva a matriz curricular anterior. Para A08–A31, consultar primeiro o [detalhamento aprovado](docente/planejamento-24-encontros/detalhamento-conteudos-por-aula.md) e a [confrontação histórica](docente/planejamento-24-encontros/confrontacao-a01-a07-a08-a10.md) antes de definir fichas-base. A08/A09 têm produção e publicação expressamente autorizadas.
- O plano docente de cada aula detalha a execução do encontro.
- Se uma alteração mudar cenário, progressão, objetivo, evidência, produto ou ponte entre aulas, atualizar primeiro a arquitetura geral ou registrar nela a decisão pendente; depois alinhar os artefatos afetados.
- Não considerar uma sequência aprovada apenas porque seus arquivos já existem. Prevalecem os estados e decisões registrados na arquitetura geral.

## Formato vigente — decisão docente de 8 de setembro de 2026

O MkDocs publicado no GitHub Pages passa a ser o material integral de condução, estudo e prática. A atividade fica na própria página, com âncora estável para distribuição no Google Classroom. Slides e roteiros em PDF deixam de ser requisitos para aulas novas. As regras de apresentações e PDFs abaixo aplicam-se apenas quando esses artefatos forem explicitamente solicitados.

A reconciliação do MkDocs com as apresentações e práticas publicadas está autorizada, inclusive para aulas realizadas. Preservar todos os slides, fontes, exportações e roteiros históricos; não apagar nem substituir arquivos no Drive durante essa reconciliação. Uma explicação acrescentada ao site é apoio de estudo, não prova de que foi ministrada. Material publicado não comprova entrega ou execução pela turma.

### Transposição do padrão de POO

- Partir do estado que o estudante vê e explicar uma ideia por vez, alternando teoria detalhada e ação imediata na mesma página.
- O percurso do encontro explicita problema, conceito, aplicação, validação e continuidade. Cada bloco desenvolve a parte necessária, sem recontar a cadeia inteira.
- Manter três camadas conectadas: **conceito** (propriedade e motivo), **operação** (ação ou análise segura) e **validação** (evidência, limite e revisão).
- Trocar o programa cumulativo de POO por um artefato cumulativo de segurança: registro, requisição, diagrama, matriz, configuração, relatório ou runbook. Programação entra somente quando beneficia a pergunta.
- Trocar compilação/CI por verificação adequada ao domínio: resultado real comparado à previsão, casos permitido/negado, função preservada, revisão cruzada ou validação em pacote de evidências. Não chamar proposta de teste de teste executado.
- Escrever instruções públicas diretamente ao estudante: o que ler, comparar, fazer e registrar. Manter orientações de mediação, condução e contingência do professor no plano docente, sem rótulos como “consulta conduzida pelo professor”. Incorporar o conteúdo necessário às alternativas na própria página, sem comentários sobre a estratégia de ensino.
- Explicar ferramenta, painel, campo, comando e saída antes de exigir interpretação. Incluir erros comuns, diagnóstico, checkpoints e alternativa efetivamente disponível na página.
- Fornecer um exemplo trabalhado; pedir uma extensão que exija decisão, sem entregar todas as respostas. Conservar explicações completas, não apenas listas ou resumos de slides.
- Reutilizar as páginas conceituais existentes por links contextuais. O percurso principal deve ser autocontido; aprofundamento pode ficar em páginas de consulta.
- Classroom recebe link para `#atividade`, entregável, prazo definido pelo docente e rubrica. Não exigir fork, PR, CI, vídeo ou código em toda atividade.
- Quando houver uso permitido de IA, exigir registro do pedido, decisões aceitas/rejeitadas e justificativa do estudante; proibir envio de dados sensíveis e exigir compreensão do resultado.

### Síntese temática para condução e estudo — decisão de 10 de setembro de 2026

- Organizar cada aula por conceitos e decisões identificáveis no índice. Preferir títulos que nomeiem o tema e indiquem a ação, como “Escopo: delimitar o que será protegido”.
- Abrir os pontos temáticos centrais com uma síntese breve que ajude a explicar ou comparar o conteúdo. Preferir 3–5 itens quando a enumeração for adequada; permitir tabela, exemplo anotado ou pergunta acompanhada de evidência quando cumprirem melhor essa função. Preservar explicações completas para estudo.
- Escolher a representação pela relação: tabela para comparação; fluxo para sequência ou dependência; mapa para estrutura; antes/depois para mudança; evidência anotada para interpretação. Não repetir o mesmo esquema visual em todas as seções por padronização.
- Variar a redação e a abertura dos blocos sem criar enredo. Usar verbos concretos e perguntas ligadas à decisão atual; empregar “Síntese”, “Aplicação”, “Explicação” e “Checkpoint” quando ajudarem a orientação, sem sequência obrigatória de rótulos.
- Quando o produto for cumulativo, conduzir o encontro pela construção desse registro: identificadores e ordem estáveis, novos campos a cada etapa e recortes legíveis na projeção. Manter consistência nos critérios, sem impor formato idêntico a todos os blocos.
- Escrever itens conceituais que possam ser compreendidos sem recordar personagens ou IDs. Usar o caso em um exemplo curto e identificado; manter seus dados completos acessíveis.
- Aproximar síntese, esquema e aplicação. Evitar repetir a mesma explicação integralmente em lista, figura, legenda e texto. Cada representação deve cumprir uma função.
- Manter explicações completas, definições, limites, exemplos trabalhados, instruções e referências para estudo. A síntese apoia a condução; não substitui o material referencial.
- Usar situações concretas breves para motivar uma pergunta. Continuidade significa reutilizar dados, artefatos e decisões relevantes; não exige enredo contínuo, suspense ou recapitulação a cada seção.
- Apresentar o conceito diretamente quando a pergunta já estiver clara. Não criar um novo episódio apenas para justificar a introdução de uma definição.
- Aplicar as cadeias didáticas ao planejamento e à coerência do encontro. Não exigir sua reprodução completa em cada bloco público.
- Manter uma única organização temática principal. Numeração de normas, itens de políticas, IDs e passos operacionais são referências locais, sem competir com o índice da aula.
- Conferir a página em projeção: título, ideias centrais e relação visual devem ser legíveis juntos quando viável. Dividir o bloco antes de reduzir fonte. Garantir leitura em tela pequena, texto alternativo e acesso por teclado.
- Usar rótulos públicos como “Síntese”, “Exemplo” e “Explicação”. Mediação, respostas e decisões editoriais permanecem no plano docente.

## Condução e avaliação — repactuação após A07

- Para A08–A31, considerar 24 encontros restantes de **100 minutos efetivos**. O histórico A01–A07 permanece preservado.
- A prática presencial é conduzida pelo professor: prever, acompanhar demonstração, interpretar o rastro, comparar hipóteses e decidir. Não exigir execução independente simultânea nem reservar longos blocos para as duplas descobrirem a ferramenta sozinhas.
- Preservar participação cognitiva com respostas curtas, escolhas justificadas e leitura de evidências; acompanhar não significa somente assistir.
- Definir **uma atividade principal por macrocomponente**, acumulativa ao longo de seus encontros. Checkpoints presenciais não geram novas tarefas no Classroom. Cada página aponta para a atividade compartilhada quando não houver entrega própria.
- A operação indispensável à atividade principal deve ter sido demonstrada antes da realização fora da aula. Fornecer insumos sanitizados e alternativa sem ferramenta; não transferir instalação ou descoberta essencial para casa.
- A distribuição proposta está em `docente/planejamento-24-encontros/proposta-macroorganizacao.md`. Enquanto a solicitação for de planejamento, alterar somente diretrizes e documentos docentes; não editar páginas, publicar no Pages ou enviar atividades.
- Estas decisões substituem preferências anteriores por reprodução obrigatória em cada máquina e atividade domiciliar por encontro. Os demais requisitos de rigor, segurança, continuidade e evidência permanecem.

## 1. Princípio pedagógico central

### 1.0 Continuidade histórica e aulas ministradas

- Preservar os artefatos históricos A01–A05 e quaisquer outros encontros confirmados como ministrados. A reconciliação autorizada pode revisar as páginas MkDocs; slides, roteiros, planos, notas e exportações originais permanecem intactos. Registrar diferenças entre material publicado, apoio de estudo e produção comprovada da turma.
- Quando a aula tiver sido conduzida pelo MkDocs, consultar a versão publicada usada no encontro, se identificável, e o relato docente. Slides de sequência curricular superada não prevalecem sobre esse material. Registrar incerteza sobre a versão utilizada; publicação continua sem comprovar execução ou entrega. A regra de consulta aos slides abaixo se aplica a encontros conduzidos por apresentação.
- Antes de descrever, reconciliar ou usar como pré-requisito uma aula já ministrada, abrir e ler integralmente a apresentação vigente dessa aula na pasta oficial do Google Drive. Para determinar o que foi efetivamente apresentado, observado ou produzido em sala, a apresentação publicada no Drive prevalece sobre fontes, PDFs, páginas MkDocs, planos docentes, inventários e documentos de arquitetura locais, que podem estar desatualizados.
- Registrar no diagnóstico qualquer divergência entre a apresentação vigente no Drive e os documentos locais. Não propagar para uma aula futura uma herança, cenário, ferramenta, evidência ou produto atribuído apenas pelos arquivos locais sem confirmação no material publicado.
- Quando uma lacuna for percebida depois da realização, registrá-la na arquitetura e retomá-la prospectivamente na aula seguinte; nunca reescrever o que os estudantes supostamente observaram ou produziram.
- Conforme as apresentações vigentes consultadas em 1º de setembro de 2026, a A04 trabalhou no Juice Shop o fluxo `pessoa → navegador → serviço → dado`, uma requisição de cesta, a pergunta `identidade → ação → recurso`, a fronteira navegador–servidor e um diagrama de uma página; a A05 aprofundou o mesmo caso com Ana, Bruno, sessão, propriedade da cesta, quatro testes de acesso e accounting. Revalidar essa descrição no Drive antes de futuras reconciliações, pois o material vigente publicado continua sendo a autoridade histórica.
- Geradores em lote devem excluir explicitamente aulas ministradas. Antes de executar, conferir o intervalo de identificadores que será escrito.
- Todo pacote futuro deve declarar a cadeia `herança concreta → preparação → ação → rastro → leitura → conceito → decisão → validação → produto → ponte`. Um tema correto sem esses elos não constitui aula pronta. Declarar a cadeia no plano docente; na página pública, explicitar somente os elos necessários à compreensão e à execução.
- A ponte nomeia o campo, estado ou evidência que será reaberto no encontro seguinte. Não usar “na próxima aula veremos...” como único vínculo.

- Começar cada unidade por uma situação concreta: comportamento inesperado, incidente, evidência, decisão de negócio ou desafio técnico.
- Usar prioritariamente o **OWASP Juice Shop** como aplicação vulnerável condutora da trilha web.
- Introduzir conceitos no momento em que forem necessários para investigar, explicar, explorar de forma controlada, corrigir ou comunicar o problema observado.
- Encerrar cada ciclo com um produto verificável: evidência, configuração, código corrigido, diagrama, registro de risco, alerta, relatório ou apresentação curta.
- Conectar cada atividade a funções reais, como desenvolvimento, operações, defesa, auditoria, resposta a incidentes, gestão de riscos e segurança industrial.
- Evitar longos blocos expositivos antes do primeiro contato do estudante com o problema.

### 1.1 Demonstração com ferramentas reais como padrão

- Todo conceito técnico deve ser ligado a uma demonstração, observação ou investigação com ferramenta real antes de sua sistematização teórica, sempre que houver uma forma segura e pedagogicamente útil de torná-lo observável.
- Usar prioritariamente o OWASP Juice Shop, executado localmente em Docker, como continuidade da trilha web. Reutilizar contas, fluxos, rastros e produtos das aulas anteriores em vez de reiniciar o cenário.
- Usar DevTools do navegador para tornar visíveis requisições, respostas, cabeçalhos, estado e comportamento da aplicação; introduzir proxy, scanner, ferramentas de sistema ou código somente depois de instrumentar seu uso e explicar qual rastro será obtido.
- Quando o Juice Shop não representar adequadamente o conceito, selecionar uma ferramenta real coerente com o domínio: AWS Academy para nuvem; OpenPLC/FUXA e telemetria isolada para OT; utilitários de sistema, logs e configurações reais ou pacotes de evidência para endpoint, rede, criptografia e resposta.
- A demonstração não pode ser ornamental. Ela deve responder a uma pergunta de aprendizagem, produzir um registro identificável e sustentar uma interpretação, decisão, intervenção ou validação.
- Antes de formular perguntas analíticas, informar ao estudante: qual ferramenta abrir, qual estado preparar, qual ação executar, onde localizar o rastro, o que registrar e qual conclusão o rastro ainda não autoriza.
- Prever alternativa por capturas, exportação de tráfego, logs ou pacote de evidências quando a ferramenta não funcionar, preservando a mesma decisão cognitiva.

O ciclo didático preferencial é:

1. **Situação:** apresentar contexto, objetivo e restrições.
2. **Observação:** permitir que os estudantes examinem o ambiente ou as evidências.
3. **Hipótese:** registrar explicações ou caminhos possíveis antes da resposta.
4. **Investigação:** executar uma atividade segura, guiada por perguntas.
5. **Conceituação:** sistematizar a teoria necessária a partir do que foi observado.
6. **Intervenção:** aplicar controle, correção, detecção ou decisão de tratamento.
7. **Validação:** demonstrar, com evidência, o efeito da intervenção.
8. **Transferência:** relacionar o aprendizado a outro cenário profissional.

## 2. Organização da carga horária

### 2.0 Densidade do encontro e lugar da prática

- Planejar cada encontro para preencher o tempo efetivo registrado para o encontro na arquitetura vigente (100 minutos para A08–A31), de conteúdo teórico e prático guiado pelo professor, com progressão contínua de evidências, conceitos, decisões e validações.
- A prática conduzida integra todo o encontro. O professor demonstra cada passo e pausa para a turma prever, localizar e interpretar o rastro antes de avançar. A reprodução nas máquinas é opcional e não condiciona a participação.
- Evitar sustentar um encontro inteiro em uma única verificação trivial. Para 100 minutos, encadear um conjunto coerente de propriedades, casos ou testes que produza ganho conceitual e técnico claramente superior ao encontro anterior.
- Manter uma atividade principal em dupla por **macrocomponente**, mas não reservar para casa o primeiro contato operacional com comandos, menus ou procedimentos indispensáveis. O percurso mínimo deve ser executado ou acompanhado passo a passo durante a aula.
- Nos minutos presenciais, combinar previsão, demonstração conduzida, comparação de evidências, formulação de hipótese e decisão. Prever pontos de espera explícitos para que ninguém avance com estado diferente do professor.
- Os blocos de prática na página devem mostrar, no momento da ação, `estado inicial → onde clicar ou o que digitar → resultado visual esperado → o que registrar → critério de parada`. Não depender de instruções orais ocultas nem presumir familiaridade com DevTools, proxy, terminal ou cliente de API.
- Preferir uma única ferramenta já disponível no ambiente. Introduzir Postman, proxy ou terminal somente quando o navegador não permitir obter o rastro necessário e depois de demonstrar sua função.
- Explicitar no plano docente qual é o ganho novo do encontro em relação ao anterior. Repetições só são aceitáveis como linha de base breve para uma investigação mais profunda.

- Planejar o curso completo com **30 horas teóricas e 30 horas práticas**.
- Considerar dois encontros semanais, cada encontro composto por duas aulas de 52 minutos.
- Registrar, no plano do curso, a carga teórica e prática de cada encontro e manter um somatório verificável.
- Tratar teoria e prática como dimensões integradas: uma aula pode conter ambas, desde que os minutos sejam contabilizados de forma explícita no planejamento docente.
- Não presumir que “aula teórica” significa exposição contínua. Discussão orientada, análise de evidências, modelagem e tomada de decisão podem desenvolver conteúdo conceitual.
- Ajustar a quantidade de encontros ao calendário acadêmico real antes de fechar o cronograma. Não inventar datas, feriados ou semanas disponíveis.

Cada encontro deve, preferencialmente, conter:

| Momento | Finalidade |
|---|---|
| Abertura | Problema, incidente, demonstração curta ou pergunta mobilizadora |
| Investigação | Trabalho em dupla ou grupo com roteiro e evidências |
| Sistematização | Conceitos, vocabulário técnico e relação com o conteúdo programático |
| Aplicação | Correção, controle, análise, decisão ou novo desafio |
| Fechamento | Evidência de aprendizagem e registro do que permanece em aberto |

### 2.1 Unidade de aprendizagem obrigatória

Cada encontro novo possui:

1. **Página integral MkDocs:** cenário, três objetivos observáveis, teoria explicada, exemplos, prática guiada intercalada, checkpoints, diagnóstico, alternativa, atividade e referências.
2. **Atividade vinculável ao Classroom:** compartilhada pelo macrocomponente, com seção `## Atividade {#atividade}` na mesma página ou página específica quando extensa; define missão, escopo, preparação, passos, evidências, formato/nome da entrega, rubrica, encerramento e extensão.
3. **Plano docente fora do site:** ficha-base, tempo teórico/prático, herança confirmada, condução por blocos, respostas e ponte para o próximo encontro.

A ficha-base declara identificador/título, ementa, objetivos, carga, cenário/pergunta, pré-requisitos, infraestrutura, evidência, critérios e fontes. Mudanças devem alinhar página, atividade e plano. Um PDF de entrega do estudante continua possível; isso não exige um roteiro docente em PDF.

### 2.2 Função dos materiais

| Material | Função | Critério |
|---|---|---|
| MkDocs/GitHub Pages | condução presencial, estudo e prática | estudante consegue executar e interpretar sem instruções orais ocultas |
| Google Classroom | distribuição, prazo, submissão e devolutiva | link direto à atividade e critérios coincidentes |
| Plano docente | tempo, respostas, mediação e continuidade | fora do site e separado da versão do estudante |
| Slides/PDFs existentes | memória das aulas e consulta complementar | preservados; não são pré-requisito para as próximas páginas |

## 3. Cenários condutores

### 3.1 Segurança de aplicações com OWASP Juice Shop

- Usar o Juice Shop para tornar observáveis temas como ativos, ameaças, vulnerabilidades, autenticação, autorização, sessões, validação de entrada, proteção de dados, criptografia, logs, monitoramento, risco, governança e testes de segurança.
- Não transformar o curso em uma sequência de desafios desconectados. Cada exploração deve responder a uma pergunta de aprendizagem e conduzir a uma ação defensiva.
- Alternar perspectivas: usuário, atacante autorizado em laboratório, desenvolvedor, analista de SOC, gestor de risco e responsável pelo negócio.
- Relacionar as vulnerabilidades às categorias e versões vigentes da OWASP somente após validação em fonte oficial.
- Sempre incluir contenção, correção ou detecção depois da exploração quando o objetivo didático permitir.

### 3.2 Nuvem com AWS Academy

- Usar contas de laboratório da AWS Academy para atividades que realmente se beneficiem de infraestrutura em nuvem, como EC2, redes, grupos de segurança, IAM, logs, monitoramento, armazenamento e resposta a incidentes.
- Projetar laboratórios econômicos, reprodutíveis e com estimativa de custo antes da execução.
- Considerar como teto operacional o crédito de **US$ 50 por estudante**, reservando margem para repetição e erros.
- Preferir instâncias elegíveis de menor custo e interromper ou remover recursos ao final da prática.
- Todo roteiro deve indicar: região, serviços, tamanho esperado, duração, estimativa de consumo, procedimento de encerramento e forma de verificar que não restaram recursos cobrando.
- Nunca exigir credenciais permanentes em arquivos, imagens, repositórios ou capturas de tela.

### 3.3 Segurança industrial e ambientes OT

- Criar cenários virtuais isolados com componentes gratuitos e legalmente redistribuíveis, como simuladores de CLP, protocolos industriais, sistemas supervisórios e geradores de telemetria.
- Avaliar opções como OpenPLC e FUXA, além de Mango ou ScadaBR quando licença, manutenção, compatibilidade e segurança forem adequadas ao laboratório.
- Preferir imagens oficiais ou projetos com origem verificável. Fixar versões e documentar a procedência.
- Representar processo físico, consequência operacional e requisitos de segurança; não reduzir OT a uma rede de computadores com nomes industriais.
- Explorar diferenças entre TI e OT: disponibilidade, segurança física, tempo real, sistemas legados, janelas de manutenção, segmentação, acesso remoto e impacto sobre pessoas e processo.
- Priorizar defesa, inventário, segmentação, monitoramento, análise de tráfego, resposta e recuperação. Qualquer demonstração ofensiva deve permanecer no ambiente isolado.

## 4. Segurança, ética e autorização dos laboratórios

- Toda atividade ofensiva deve ter alvo, escopo e autorização explícitos.
- Limitar testes ao Juice Shop e aos ambientes de laboratório fornecidos para a disciplina.
- Não orientar varredura, exploração, persistência ou indisponibilidade contra sistemas públicos, institucionais ou de terceiros.
- Usar dados fictícios e segredos descartáveis.
- Isolar cenários vulneráveis; não expor serviços deliberadamente vulneráveis à Internet sem controles compensatórios e necessidade didática documentada.
- Evitar comandos destrutivos. Quando uma ação puder interromper o cenário, avisar o impacto e fornecer recuperação ou restauração.
- Não solicitar que estudantes publiquem tokens, IPs públicos, credenciais, dados pessoais ou evidências sensíveis nas entregas.
- Incluir critérios de parada e canal de comunicação para comportamento inesperado em práticas de maior risco.

## 5. Estrutura das páginas voltadas ao estudante

Não aplicar um molde rígido quando ele prejudicar a experiência. Escolher entre página de encontro, roteiro de laboratório, estudo de caso, referência conceitual ou síntese. Para páginas de aprendizagem, usar preferencialmente:

1. `# Título orientado ao problema ou resultado`
2. Cenário inicial curto, sem antecipar toda a explicação
3. `Objetivos de aprendizagem` com três resultados observáveis
4. `Tempo estimado`, pré-requisitos e recursos necessários
5. Desafio, evidência ou pergunta inicial
6. Roteiro de investigação com pontos de decisão
7. Conceitos necessários, intercalados com a prática
8. Aplicação defensiva ou tomada de decisão
9. Evidências e critérios de conclusão
10. Reflexão e transferência para um contexto real
11. Três perguntas de revisão rápida
12. Fontes de referência oficiais

Para roteiros práticos, explicitar também:

- escopo autorizado e regras de segurança;
- preparação e teste de funcionamento;
- passos mínimos, sem eliminar decisões relevantes do estudante;
- resultado esperado sem revelar antecipadamente todas as respostas;
- coleta de evidências;
- limpeza e encerramento do ambiente;
- alternativas para quem não conseguir usar o recurso principal.

### 5.1 Apresentações de aula

Estas regras se aplicam a apresentações solicitadas. Sua transposição ao MkDocs preserva relações e progressão conceitual, sem exigir narrativa de personagens ou suspense.

- Criar apresentação somente quando solicitada; nesse caso, alinhá-la à página integral e à ficha-base.
- Abrir com uma situação, imagem, evidência, pergunta ou demonstração que gere uma decisão; não abrir com sumário conceitual extenso.
- Construir uma narrativa visual: contexto, tensão ou problema, investigação, conceitos necessários, decisão, aplicação e síntese.
- Manter uma ideia principal por slide e reduzir texto ao necessário para orientar atenção e discussão.
- Preferir diagramas, fluxos, capturas legíveis, comparações visuais e trechos curtos de evidência a listas extensas.
- Incluir pausas de participação em intervalos regulares: previsão, votação argumentada, discussão em dupla, diagnóstico de evidência ou escolha de controle.
- Usar demonstrações ao vivo somente com plano alternativo em capturas, vídeo curto ou sequência visual.
- Incluir notas do apresentador quando forem úteis para perguntas, tempo, transições, respostas esperadas e cuidados da demonstração.
- Encerrar com síntese visual, conexão com o MkDocs e instrução clara para a prática, sem transformar o último slide em uma lista de links.
- Garantir contraste, tipografia legível, linguagem visual consistente e acessibilidade. Não depender apenas de cor para transmitir significado.
- Citar no próprio slide a fonte de imagens, dados e afirmações; manter referências completas no material MkDocs correspondente.

#### Slides como memória de condução docente

- Projetar a apresentação para que o professor consiga reconstruir o cenário, a progressão do raciocínio e as transições essenciais sem precisar consultar continuamente o roteiro docente.
- Manter em cada slide contexto suficiente para responder, de forma natural: o que já foi observado, por que este conceito ou decisão entra agora e para qual próximo passo a discussão conduz.
- Preservar os elos narrativos entre evidência, hipótese, conceito, impacto, ação e validação. Evitar sequências em que os conceitos aparecem corretos, porém desconectados do caso condutor.
- Incluir exemplos progressivos vinculados ao mesmo cenário, mostrando como uma evidência inicial é reinterpretada à medida que novos conceitos e informações surgem.
- Usar títulos, subtítulos, pequenos trechos de cenário, perguntas e sínteses como pistas de mediação. Não inserir instruções metapedagógicas, falas completas do professor ou notas internas no corpo visível do slide.
- Fazer o slide recordar a intenção da conversa, não apenas nomear o tópico. Um título como “STRIDE” deve ser acompanhado da decisão ou problema que torna o método necessário naquele momento.
- Antes de exportar, percorrer somente os slides, sem o roteiro, e verificar se um professor familiarizado com o tema consegue explicar: cenário, tensão, atividade de participação, conceito mobilizado, decisão esperada e ponte para o slide seguinte.
- Manter correspondência verificável entre a ordem dos slides e a seção de condução do roteiro docente. Se a narrativa, o exemplo, a arquitetura ou a decisão mudar em um artefato, revisar os demais materiais do pacote.

#### Atualização de apresentações no Google Drive

- Manter somente uma apresentação vigente de cada aula na pasta oficial do curso no Google Drive.
- Ao atualizar slides, importar ou publicar primeiro a nova apresentação, confirmar título, quantidade de slides, ordem, conteúdo e abertura do novo link, e atualizar todas as referências locais que apontavam para a apresentação anterior.
- Depois dessas verificações, excluir do Google Drive a apresentação anterior. Não conservar cópias com nomes como `versão anterior`, `antiga`, `backup`, `final` ou equivalentes na pasta do curso.
- Usar o repositório Git, a fonte editável e o histórico de versões do Drive como mecanismos de recuperação, em vez de acumular apresentações obsoletas na pasta publicada.
- Nunca excluir a apresentação vigente antes de a substituta estar importada, verificada e referenciada. Se a nova publicação falhar, preservar a apresentação atual e relatar a falha.
- Ao concluir a atualização, listar a pasta do curso e confirmar que existe somente uma apresentação vigente com o identificador e o título esperados.

#### Progressão narrativa e introdução sob demanda

- Tratar cada apresentação como uma cadeia de raciocínio, não como uma coleção de tópicos. Cada slide deve recuperar o estado atual do caso, resolver ou aprofundar uma pergunta e criar a necessidade do próximo passo.
- Planejar explicitamente as pontes entre slides. Para cada transição, registrar no roteiro docente: o que a turma já pode afirmar, qual lacuna permanece e por que o próximo conceito, evidência ou decisão entra naquele momento.
- Não antecipar taxonomias, frameworks, controles ou classificações antes de o cenário produzir uma pergunta que eles ajudem a responder. Primeiro fazer a necessidade aparecer; depois nomear e sistematizar o conceito.
- Preservar um mesmo caso, evidência ou arquitetura ao longo da explicação. Evoluir o exemplo progressivamente, acrescentando condições, fronteiras, consequências e decisões, em vez de trocar de exemplo a cada conceito.
- Separar visualmente e verbalmente observação, hipótese, condição a verificar, consequência plausível e fato confirmado. Não permitir que a narrativa transforme correlação em causalidade sem evidência.
- Reconstruir o funcionamento normal antes de representar abuso, falha ou ataque. Explicitar função, fluxo legítimo, autoridade e dependências para que controles não sejam propostos sem considerar a operação preservada.
- Alternar blocos curtos de construção com checkpoints de participação. Antes de apresentar a solução conceitual, pedir previsão, escolha de evidência, formulação de hipótese, diagnóstico ou decisão condicionada.
- Construir conceitos com exemplos completos do cenário. Uma categoria isolada não basta: mostrar como ela modifica a interpretação da evidência, sustenta uma ameaça testável, orienta uma coleta ou fundamenta uma decisão.
- Introduzir referências diferentes somente pela função que exercem na investigação. Explicitar qual pergunta cada uma responde e quais conclusões ela não autoriza; evitar catálogos e equivalências forçadas.
- Adiar a escolha de controle até que ativo, condição, caminho e consequência estejam explícitos. Toda recomendação deve declarar premissa, benefício, efeito operacional, responsável, validação e risco residual.
- Encerrar retomando a evidência inicial e mostrando como ela foi reinterpretada. A síntese deve preservar a cadeia `evidência → hipótese → funcionamento normal → condição → consequência → ação → validação`.
- Usar como referência de qualidade o padrão narrativo consolidado nas aulas A02 e A03: contexto acumulativo, exemplo progressivo, checkpoints, títulos orientados a decisões, subtítulos como pontes e notas do apresentador com perguntas, respostas esperadas e transições.
- Na revisão, percorrer os slides sem consultar notas e responder para cada par consecutivo: “por que este slide vem agora?” e “o que torna o próximo necessário?”. Se a resposta depender apenas da ordem do conteúdo programático, reescrever a transição.

#### Gramática visual orientada a relações

- Tratar cards como recurso de comparação entre unidades realmente independentes, não como composição padrão. Evitar três ou mais slides consecutivos baseados em grades de cards, sobretudo quando o estudante precisa compreender sequência, causalidade, fronteira, fluxo ou transformação.
- Quando o conteúdo responder a “quem se relaciona com quem?”, “o que atravessa?”, “onde muda?”, “o que causa?” ou “como evolui?”, representar a relação diretamente por diagrama, fluxo anotado, cadeia causal, mapa de escopo, antes/depois, sobreposição progressiva ou evidência visual.
- Preservar o mesmo caso e fazê-lo evoluir visualmente. Retomar os mesmos atores, dados, decisões e rastros, acrescentando uma variável por vez; não reiniciar o raciocínio com novos exemplos apenas para variar o layout.
- Integrar explicação curta ao ponto correspondente do diagrama para evitar atenção dividida. Não colocar a figura em um lado e uma legenda extensa, distante, que precise ser mentalmente reconstruída pelo estudante.
- Introduzir toda sigla ou técnica pela sequência `lacuna observável → finalidade → nome por extenso → origem ou contexto → componentes → exemplo trabalhado → uso guiado → limite`. Nunca apresentar somente o acrônimo, a taxonomia ou a interface da ferramenta.
- Para métodos operacionais, mostrar um exemplo completo antes da prática independente: `estado inicial → elemento selecionado → pergunta aplicada → hipótese formulada → evidência necessária → decisão`. Depois, reduzir gradualmente o apoio.
- Preferir arte original construída para o caso da aula. Imagens externas servem como referência, evidência ou captura de ferramenta quando a origem, o licenciamento e a legibilidade forem adequados; sempre citar a fonte no slide e registrar o link completo no MkDocs.
- Ao revisar visualmente, percorrer blocos de oito slides e contar a gramática dominante. Se mais da metade usar cards ou listas sem representar relações, redesenhar o bloco antes da publicação.

Uma sequência típica, adaptável ao encontro, é:

1. provocação ou evidência inicial;
2. cenário e missão;
3. previsão dos estudantes;
4. demonstração ou observação;
5. explicação conceitual em blocos curtos;
6. nova decisão ou aplicação;
7. síntese e ponte para a prática.

### 5.2 Roteiros práticos em PDF

- Quando houver solicitação de roteiro em PDF, produzir fonte editável e exportação; normalmente o Classroom aponta para a atividade no MkDocs.
- O PDF deve ser compreensível sem depender de instruções orais omitidas.
- Na primeira página, informar título, missão, objetivos, duração, forma de trabalho, pré-requisitos, recursos e entregável.
- Organizar o roteiro por etapas com estimativas de tempo e pontos explícitos de decisão, sem prescrever todos os cliques quando a descoberta fizer parte da aprendizagem.
- Usar caixas visualmente distintas para `Atenção`, `Pista`, `Evidência`, `Decisão` e `Entrega`.
- Reservar espaços ou quadros para hipótese inicial, observações, interpretação e justificativa da solução.
- Incluir critérios de sucesso e rubrica curta antes da seção de entrega.
- Encerrar com limpeza do ambiente, verificação de custos quando aplicável e perguntas de transferência para outro contexto.
- Adotar nome de arquivo estável e adequado ao Classroom, por exemplo `A05-controle-de-acesso-pratica.pdf`, evitando nomes como `final`, `novo` ou `versao-certa`.
- Não inserir gabarito, tokens válidos, credenciais, respostas de desafios ou detalhes internos de facilitação na versão do aluno.

## 6. Aprendizagem ativa

- Priorizar trabalho em duplas ou pequenos grupos com papéis rotativos e responsabilidade individual verificável.
- Usar previsão antes da execução: o estudante deve declarar o que espera observar e justificar.
- Incluir perguntas que exijam comparação, diagnóstico, priorização e decisão, não apenas localização de definições.
- Incorporar atividades como investigação guiada, aprendizagem baseada em problemas, estudo de caso, revisão por pares, análise de incidente, threat modeling e defesa de recomendações.
- Oferecer níveis de apoio: pista inicial, pista técnica e solução comentada separada, quando aplicável.
- Prever uma extensão opcional para grupos que concluírem cedo.
- Usar erros do laboratório como material de diagnóstico, sem penalizar falhas de infraestrutura fora do controle do estudante.

## 7. Avaliação e evidências de aprendizagem

- Avaliar o raciocínio e a qualidade da evidência, não apenas a obtenção de uma flag ou o funcionamento final.
- Usar entregas autênticas e pequenas: ticket técnico, registro de risco, pull request, regra de detecção, diagrama, runbook, relatório de incidente ou briefing executivo.
- Publicar critérios objetivos antes da atividade.
- Verificar, conforme o caso: reprodução, explicação da causa, impacto, escolha do controle, validação, comunicação e conduta ética.
- Combinar avaliação formativa frequente com entregas integradoras.
- Exigir que capturas de tela sejam acompanhadas de interpretação; uma imagem isolada não comprova compreensão.
- Definir na seção de atividade exatamente o que será enviado pelo Google Classroom, em qual formato e com qual convenção de nome.
- Manter a rubrica breve o suficiente para orientar a execução e específica o suficiente para permitir devolutiva consistente.

## 8. Estilo de escrita

- Escrever em português claro, objetivo e tecnicamente preciso.
- Adotar tom de professor especialista próximo da prática profissional.
- Conectar evidência, conceito, impacto, ação e validação. Escolher a ordem local pela necessidade de compreensão, sem repetir etapas já estabelecidas.
- Definir jargões no primeiro uso e evitar enumerações enciclopédicas sem aplicação.
- Usar parágrafos curtos, tabelas, diagramas e listas quando facilitarem uma decisão ou comparação.
- Usar separadores `---` apenas entre blocos maiores; evitar fragmentação visual excessiva.
- Preferir instruções testáveis e resultados observáveis a frases genéricas como “entenda” ou “conheça”.
- Não inventar resultados de comandos, telas, custos, versões ou comportamentos do ambiente.

## 9. Não exposição das diretrizes internas

O conteúdo entregue aos estudantes deve parecer uma experiência didática natural, e não uma descrição do processo usado para projetá-la.

- Não mencionar este arquivo, agentes, prompts, processo de refatoração ou decisões editoriais internas.
- Não incluir frases como “seguindo as diretrizes”, “esta atividade usa aprendizagem ativa”, “o curso foi invertido” ou equivalentes.
- Não explicar ao estudante a intenção metapedagógica de tornar o curso menos teórico ou menos monótono.
- Não reproduzir no material do aluno informações administrativas internas, limites globais de orçamento ou regras de autoria, salvo quando forem necessárias para executar a atividade com segurança e responsabilidade.
- Apresentar objetivos, contexto, restrições e critérios diretamente, sem justificar que foram incluídos por uma regra deste documento.
- Manter notas de planejamento docente separadas do material do estudante quando contiverem respostas, distribuição de carga horária, custos agregados, riscos operacionais ou estratégias de facilitação.

## 10. Vídeos e recursos de enriquecimento

- Vídeo não é obrigatório em toda página. Usá-lo somente quando contribuir diretamente para o desafio ou para a síntese.
- Preferir conteúdo em português, curto ou moderado, acessível e de fonte confiável.
- Não usar o vídeo como substituto da atividade nem depender dele para informação essencial sem alternativa textual.
- Validar disponibilidade, autoria, duração e aderência antes de incorporar com `mkdocs-video`.
- Informar ao estudante o que observar no vídeo e propor uma ação curta depois dele.

## 11. Qualidade técnica e referências

- Verificar a coerência com a trilha completa e com o cenário condutor.
- Consultar fontes atuais sempre que versões, serviços, ameaças, custos, normas ou recomendações puderem ter mudado.
- Priorizar documentação oficial e fontes primárias: OWASP, AWS, NIST, CISA, MITRE, ENISA, FIRST, CIS, IEC, ISA e documentação oficial dos projetos utilizados.
- Para segurança industrial, verificar especialmente orientações vigentes da CISA, NIST e ISA/IEC 62443, respeitando acesso e licenciamento das normas.
- Usar links diretos e registrar data de acesso quando a informação for volátil.
- Distinguir fato documentado, decisão de projeto, hipótese do cenário e observação experimental.

## 12. Comparações

Quando o objetivo exigir comparação, incluir no mínimo:

| Opção | Melhor uso | Esforço/custo | Evidência ou entregável | Limitação/risco |
|---|---|---|---|---|

Finalizar com recomendação condicionada ao cenário, evitando declarar uma ferramenta ou metodologia como universalmente superior.

## 13. Organização do repositório

- Manter em `docs/` exclusivamente o conteúdo que deve integrar o site MkDocs.
- Manter apresentações, roteiros históricos em PDF e fontes Office fora de `docs/`. As atividades em Markdown e seus insumos públicos e sanitizados ficam em `docs/`, junto do percurso.
- Organizar slides e atividades por aula, usando o mesmo identificador estável adotado na página teórica correspondente.
- Manter fontes editáveis de apresentações e práticas sob controle de versão; não tratar PDF exportado como única fonte.
- Armazenar os PDFs destinados ao Google Classroom somente na árvore de atividades, sem incluí-los na navegação ou no artefato do MkDocs.
- Quando forem criados materiais docentes, respostas ou arquivos operacionais, armazená-los em área não publicada e confirmar que não entram na navegação nem no artefato do MkDocs.
- Manter gabaritos, notas de facilitação sensíveis e soluções em diretório docente claramente separado dos materiais distribuídos.
- Reutilizar um cenário entre módulos quando isso mostrar evolução; evitar duplicar a mesma explicação em várias páginas.
- Atualizar `mkdocs.yml` quando páginas forem incluídas, removidas ou reorganizadas.
- Verificar links internos, imagens, vídeos, comandos e arquivos citados.

### 13.1 Estrutura de arquivos

Para novas aulas, são obrigatórios a página em `docs/aulas/` e o plano em `docente/`. A atividade pode integrar a página; insumos públicos ficam em `docs/assets/`. A árvore abaixo documenta também os artefatos históricos opcionais:

```text
docs/
└── aulas/
    └── A01-tema-da-aula.md

slides/
└── A01-tema-da-aula/
    ├── README.md
    ├── fonte/
    ├── assets/
    └── exportados/

atividades/
└── A01-tema-da-aula/
    ├── README.md
    ├── fonte/
    ├── assets/
    └── pdf/

docente/
└── A01-tema-da-aula/
    ├── plano-de-aula.md
    ├── notas-de-facilitacao.md
    └── gabarito/
```

- Usar identificadores sequenciais como `A01`, `A02` e `A03`, sempre acompanhados de um nome curto e descritivo.
- Usar o mesmo identificador na página, atividade e plano; conservar identificadores dos artefatos históricos.
- Colocar em `slides/.../fonte/` o arquivo editável da apresentação e em `slides/.../exportados/` apenas versões derivadas para apresentação ou distribuição.
- Colocar em `atividades/.../fonte/` o documento editável e em `atividades/.../pdf/` o PDF final destinado ao Google Classroom.
- Manter imagens e outros recursos específicos em `assets/` dentro da pasta da respectiva aula. Compartilhar um recurso global somente quando houver reutilização real.
- Usar o `README.md` de cada pasta para registrar título, objetivos, página MkDocs relacionada, arquivos principais e procedimento de geração dos exportados.
- Não criar links, entradas de navegação ou processos de cópia que levem `slides/`, `atividades/` ou `docente/` para o diretório de saída do MkDocs.

## 14. Checklist antes de publicar

- [ ] Cada tema central tem uma síntese útil para explicar o conceito, sem depender do enredo.
- [ ] A relação principal está visível em esquema, comparação ou evidência legível quando pertinente.
- [ ] O estudante continua encontrando explicação completa e instruções suficientes.
- [ ] O índice permite localizar conceitos sem lembrar nomes, IDs ou episódios.
- [ ] Não há repetição extensa entre síntese, legenda, explicação e retomada do caso.
- [ ] Figuras e texto foram conferidos em projeção, zoom, tela estreita e impressão.
- [ ] Âncoras existentes, documentos de referência e atividade continuam acessíveis.

- [ ] A página começa por um problema, evidência, caso ou decisão significativa.
- [ ] Os objetivos são observáveis e estão ligados ao conteúdo programático.
- [ ] A teoria aparece conectada à investigação ou à intervenção.
- [ ] Há participação ativa do estudante e pelo menos um ponto de decisão.
- [ ] A atividade produz evidência verificável de aprendizagem.
- [ ] A página integra explicação, exemplo trabalhado, ação, evidência e atividade vinculável ao Classroom.
- [ ] Os checkpoints são cumulativos e permitem confirmar o estado antes de avançar.
- [ ] O MkDocs contém a base teórica e as referências necessárias para consulta.
- [ ] A atividade é autocontida e define evidências, entrega, rubrica e encerramento.
- [ ] Fontes editáveis e artefatos exportados estão identificados corretamente.
- [ ] Slides e roteiros históricos permanecem preservados fora de `docs/`; os insumos públicos da atividade estão acessíveis no site.
- [ ] Nenhum gabarito, nota docente ou arquivo interno entra no build do MkDocs.
- [ ] Há ação defensiva, mitigação, detecção ou reflexão de risco quando aplicável.
- [ ] Escopo, ética, segurança e limpeza do laboratório estão claros.
- [ ] Custos e encerramento de recursos em nuvem foram verificados quando aplicável.
- [ ] O cenário OT representa consequências operacionais reais quando aplicável.
- [ ] Respostas e instruções internas não foram publicadas no material do estudante.
- [ ] Afirmações atuais têm referências primárias e links diretos.
- [ ] A navegação do `mkdocs.yml` foi ajustada quando necessário.
- [ ] O build local foi validado com `./.venv/bin/mkdocs build --clean`.

## 15. Escopo

Estas diretrizes valem para todo o conteúdo em `docs/` e para novos materiais de planejamento do curso. Na revisão, priorizar páginas que permitam estabelecer o cenário condutor do Juice Shop e, depois, conectar fundamentos, ameaças, proteção de dados, criptografia, gestão de riscos, governança, pentest, nuvem e segurança industrial.
