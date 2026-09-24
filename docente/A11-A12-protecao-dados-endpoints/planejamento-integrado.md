# A11–A12 — Proteção de dados e dispositivos

**Simplificação após revisão independente — 24 set. 2026:** CSV reduzido a exemplo comparativo, com Figura 1 e arquivos prontos. Removido tutorial de criação/edição; preservados minimização, fronteira da cópia e diferença entre ocultar e remover. Destaques e passos pontuais favorecem leitura dinâmica. O procedimento de editor não é exigência da atividade documental.

**Complementação de referências — 24 set. 2026:** A11 inclui sínteses das referências DLP Microsoft/AWS/Fortinet, comparação empresarial por canal, descoberta/transformação em nuvem e exemplo industrial documental. Pesquisa não comprova produto mais implantado. Tabela LGPD reúne procedimentos, aplicação, responsáveis, evidências e fontes específicas da ANPD/normas. Mantidos objetivos, atividade única e duração a reavaliar; ver relatórios de pesquisa e validação nesta pasta.

**Responsabilidades — revisão docente de 24 set. 2026:** distinguir usuário, gestor da informação, TI/custódia, segurança e privacidade nas operações. Página inclui divisão funcional, passos do usuário comum e indicação local de executores. LGPD é enriquecida com caracterização de responsáveis e resumo de consequências administrativas/civis/penais, sem tratar incidente como crime automático. Modelo e atividade passam a exigir aprovação, execução e encaminhamento identificáveis.


**Atualização operacional — 24 set. 2026:** a pedido do docente, a A11 foi ampliada com LGPD aplicada, exportação mínima, permissões/revogação documentadas no Google Drive, configuração DLP comentada, retenção e restauração. O recorte temporal anterior abaixo é histórico de planejamento; a duração desta edição será avaliada após revisão docente. A seção de ocultação foi substituída por comparação vinculada ao arquivo entregue, sem atividade isolada. Ver o plano A11 e o registro de validação. Figuras 1–4 preservadas; prompts novos 9–11, sem renumerar 5–8 da A12.



**Estado de produção — 24 set. 2026:** páginas A11/A12, atividade, modelo e insumos produzidos localmente a partir deste planejamento. Consulte os planos por aula e `validacao-producao.md` para o estado de verificação. Os trechos prospectivos abaixo registram o planejamento de origem; publicação remota e realização não confirmadas.

**Planejamento revisado em 24 set. 2026 por solicitação docente.** Dois encontros de 100 minutos, predominantemente expositivos, integrados pelos conceitos. Não é página de aula pronta nem registro de execução. Substitui, para esse bloco, a continuidade obrigatória do cenário industrial e da matriz de riscos.

**Aprofundamento técnico na mesma data:** o detalhamento inicial foi considerado superficial pelo docente. O [programa detalhado](conteudos-aprofundados.md) passa a definir o nível de explicação, mecanismos, exemplos e relevância profissional de cada tema. As tabelas abaixo são resumos; o núcleo presencial está distribuído em seis blocos por encontro, com aprofundamentos adicionais reservados à consulta.

## Intenção e organização

O estudante deve explicar o que cada controle protege, como atua e qual limite permanece. A exposição desenvolve uma ideia por vez, seguida de exemplo curto ou comparação. Não haverá empresa fictícia, personagens, reconstrução de incidente ou missão investigativa como fio condutor.

Exemplos serão objetos reconhecíveis: documento público, tabela de dados de teste, arquivo salvo ou aberto, tela de permissões, processo, registro e alerta. Cada exemplo traz os dados necessários junto da explicação; não exige lembrar fatos do exemplo anterior. As amostras artificiais serão identificadas como didáticas. Capturas reais terão origem e versão registradas, com dados sensíveis removidos.

Os encontros compartilham um quadro de comparação: **objeto protegido → ação do controle → evidência → limite**. A11 apresenta a proteção do dado; A12 acrescenta a proteção do dispositivo que o armazena ou processa. Não são duas listas isoladas de ferramentas.

Pré-requisitos conceituais: confidencialidade, integridade, disponibilidade, autenticação e autorização. Retomar apenas definições necessárias, sem presumir produtos individuais da A10. Nível operacional de familiaridade com DLP e EDR não informado: planejar introdução, sem presumir domínio dos painéis.

## A11 — Proteção de dados: classificação, circulação e controles

**Ganho:** passar do controle de acesso à definição de como o dado pode ser armazenado, usado, compartilhado e descartado.

### Três objetivos observáveis

1. Mapear dado e cópias derivadas, classificando-os por impacto e finalidade e identificando responsabilidade, acesso e retenção.
2. Justificar controles de acesso, redução de exposição e recuperação conforme estado do dado, distinguindo o mecanismo de sua limitação.
3. Explicar como uma política DLP identifica conteúdo e aplica ações; validar regra e exceção por contraprovas e formular critério verificável de restauração.

### Conteúdos, técnicas e exemplos de apoio

| Tema | Conteúdo essencial | Exemplo ou ilustração a preparar |
|---|---|---|
| O que precisa de proteção | Exposição indevida, alteração, perda de acesso e uso fora da finalidade. Tipo de dado não é nível de sigilo. | Comparar um manual público com uma tabela de contatos de teste: ambos são arquivos, mas o tratamento depende do conteúdo e do uso. |
| Classificação e responsabilidade | Níveis de classificação definidos por política; proprietário como responsável pela decisão de uso, custodiante como executor dos cuidados; finalidade e acesso necessário. Não confundir proprietário organizacional com titular de dado pessoal. | Quadro anotado com tipo, classificação justificada, finalidade e responsável. Não inventar níveis universais ou prazos legais. |
| Estado e ciclo de vida | Repouso, trânsito e uso; criação/coleta, armazenamento, compartilhamento, retenção e descarte. Estado e etapa do ciclo são dimensões diferentes. | Arquivo salvo, transferido e aberto: três vistas lado a lado com o estado e o controle pertinente. As cópias podem existir simultaneamente. |
| Técnicas de proteção | Permissões e menor privilégio; minimização e mascaramento; criptografia como função de proteção; backup e restauração; retenção e descarte. | Comparar acesso de leitura/edição e visualização mascarada. Explicar que ocultar uma coluna não remove os valores do arquivo; cópia sincronizada não garante recuperação de versões apagadas. |
| Prevenção de perda de dados — DLP | Identificação de conteúdo/rótulo, contexto, destino, canal, condição, ação e exceção. Monitorar, avisar e bloquear têm efeitos distintos. | Regra didática anotada para um arquivo marcado como restrito: envio a destino externo não aprovado é bloqueado; destino interno autorizado é permitido; exceção depende de aprovação definida. Avaliação em papel é aplicação da regra, não bloqueio executado. |
| Limites e integração | Falso positivo, falso negativo, cobertura dos canais e preservação do uso legítimo. DLP não substitui permissões, backup ou proteção do endpoint. | Comparar o mesmo dado sendo compartilhado legitimamente, enviado indevidamente ou alterado por um processo. Cada controle responde a uma parte diferente. |

Criptografia aparece como função; algoritmos, chaves, hash e certificados ficam para A13–A18. Soberania e obrigações legais específicas não viram novo bloco nesta aula. Conteúdo de consulta existente pode aprofundar esses assuntos posteriormente.

### Condução — 100 minutos, 70 T / 30 P

| Minutos | Tema e condução | T/P |
|---|---|---:|
| 0–15 | Localização, cópias, classificação por impacto e responsabilidade; analisar um inventário mínimo. | 10/5 |
| 15–35 | Estados, privilégios e fronteiras de proteção; ler permissões e localizar onde o dado fica legível. | 15/5 |
| 35–50 | Minimização, mascaramento, pseudonimização e cifragem; explicar limites em comparação anotada. | 15/0 |
| 50–75 | Detecção, cobertura e ações DLP; interpretar uma regra e testar contraprovas em amostras fornecidas. | 15/10 |
| 75–90 | Retenção, versões e restauração; distinguir cópia disponível de recuperação verificada. | 10/5 |
| 90–100 | Justificar conjunto mínimo de controles e um limite; ponte para o processo autorizado que acessa o dado. | 5/5 |
| **Total** | | **70/30** |

Perguntas curtas: “O que muda ao trocar o destinatário?”, “Este controle impede leitura ou recupera uma cópia?”, “Que dado falta para decidir a exceção?”. Não abrir discussão narrativa longa.

## A12 — Proteção de dispositivos: malware, detecção e resposta

**Ganho:** compreender como o dispositivo pode comprometer dados e interpretar rastros sem transformar comportamento incomum em diagnóstico automático.

### Três objetivos observáveis

1. Explicar como contexto de execução, privilégios, persistência e propagação condicionam os efeitos de malware e o alcance dos controles preventivos.
2. Correlacionar registros de processo, arquivo e rede e avaliar um alerta, distinguindo evento, indício, hipótese, ação executada e informação ausente.
3. Justificar contenção de alcance proporcional e critérios de retorno, distinguindo detecção, bloqueio, erradicação e recuperação e integrando controles de dados e endpoint.

### Conteúdos, técnicas e exemplos de apoio

| Tema | Conteúdo essencial | Exemplo ou ilustração a preparar |
|---|---|---|
| Funcionamento normal do endpoint | Dispositivo, sistema operacional, aplicação, arquivo e processo; permissão de execução e acesso a dados. | Abrir um editor benigno no equipamento de demonstração e localizar seu processo e arquivo. Explicar os campos antes de ler a tela. |
| Malware e comportamento | Entrada/entrega, execução, persistência, propagação e efeito. Nem todo malware percorre todas essas etapas. | Diagrama curto com funções e caminhos possíveis, sem cadeia universal obrigatória. Separar arquivo recebido de código executado. |
| Categorias de malware | Vírus: infecção de hospedeiro; worm: autopropagação; trojan: apresentação enganosa; ransomware: bloqueio/cifragem e extorsão. Spyware/keylogger como coleta; backdoor como acesso e rootkit como ocultação. Categorias podem se combinar. | Tabela por mecanismo e efeito, com quatro categorias centrais; as demais entram em contraste breve, sem catálogo para memorização. |
| Prevenção | Atualizações, menor privilégio, controle de aplicações e execução, restrição de macros quando pertinente, proteção antimalware e cópias recuperáveis. | Relacionar cada técnica a uma ação que restringe ou a um dano do qual ajuda a recuperar. Não aprofundar segmentação OT aqui. |
| Detecção | Antivírus, detecção por assinatura e comportamento; EDR como telemetria, investigação e resposta no endpoint. Capacidades podem se sobrepor entre produtos. | Captura oficial anotada de alerta ou linha do tempo. Comparar processo legítimo e indício suspeito sem inferir infecção apenas do nome ou consumo de CPU. |
| Interpretação de rastros | Processo e relação pai/filho, caminho de arquivo, inicialização/persistência, destino de rede, tempo, ação e resultado do alerta. | Sequência de poucos registros com origem identificada, lidos passo a passo. Se forem artificiais, rotular como exemplo e não como captura de incidente. Vários destinos, isoladamente, não comprovam worm. |
| Resposta e recuperação | Preservar registros, comunicar, conter proporcionalmente, corrigir causa, restaurar quando necessário e verificar função. | Comparar quarentena de arquivo e isolamento de rede do dispositivo por alcance e impacto. Ação real somente em ambiente descartável e autorizado; captura documentada é suficiente para explicar. |
| Integração com A11 | DLP atua sobre uso/circulação do dado; proteção de endpoint atua sobre execução e comportamento; backup apoia recuperação. | Quadro final: objetivo, ação, evidência e limite de cada controle. Mostrar por que nenhum deles cobre sozinho toda a proteção. |

Não executar malware, criar persistência ou produzir tráfego de propagação. Não instalar suíte corporativa como requisito. Não realizar perícia completa, engenharia reversa ou resposta OT neste bloco.

### Condução — 100 minutos, 70 T / 30 P

| Minutos | Tema e condução | T/P |
|---|---|---:|
| 0–15 | Arquivo, processo, usuário e privilégio; interpretar uma árvore de processos benigna. | 10/5 |
| 15–35 | Execução, persistência, propagação e efeitos; comparar mecanismos e o controle que interrompe cada um. | 15/5 |
| 35–50 | Camadas preventivas, antivírus, EDR e fontes de telemetria; explicar sobreposições e limites. | 15/0 |
| 50–75 | Correlacionar processo, arquivo e rede; interpretar resultado de alerta e explicitar dados ausentes. | 15/10 |
| 75–90 | Contenção, erradicação e retorno; comparar alcance, reversibilidade e critério de verificação. | 10/5 |
| 90–100 | Integrar proteção do dado e endpoint; concluir uma justificativa técnica para a atividade única. | 5/5 |
| **Total** | | **70/30** |

Perguntas curtas: “Qual campo comprova execução?”, “O alerta informa detecção ou bloqueio?”, “Que observação falta para afirmar propagação?”. A explicação do professor precede a interpretação dos campos novos.

## Atividade integrada e critério de aprendizagem

Manter uma única entrega em dupla, a detalhar na produção das páginas, com dois recortes independentes fornecidos: um arquivo e seu fluxo; uma sequência curta de rastros de endpoint. Nenhum enredo precisa ligá-los. Não exigir criação de empresa, matriz de riscos completa, instalação, varredura ou descoberta de ferramenta.

Proposta de produto: parecer técnico curto com mapa de dado/cópias e exposição, escolha de controles, regra DLP e contraprova, critério de restauração e triagem de endpoint com correlação de registros, hipótese, informação ausente e contenção. O professor demonstra o método completo; a atividade varia destino, privilégio ou resultado do alerta para exigir revisão da decisão. Os critérios e a extensão final devem respeitar a carga de uma única entrega do bloco.

Critérios propostos: mapa de exposição e justificativa dos controles (25%), regra DLP com contraprova e exceção (25%), correlação de rastros com limites explícitos (25%) e decisão de contenção/recuperação com critério verificável (25%). Prazo e formato de envio permanecem a definir pelo docente; checkpoints presenciais não geram tarefas adicionais.

## Recursos e preparação para a produção

- Usar a página MkDocs para exposição e consulta; formato expositivo não implica criar slides ou PDF.
- Preparar objetos, capturas e explicações próximos entre si; no máximo um painel novo por exemplo. Exportações estáticas serão a alternativa às demonstrações.
- Para permissões e processos, selecionar o sistema disponível ao docente e registrar versão e passos após ensaio. Ainda não há ambiente testado nem capturas coletadas para este plano.
- Para DLP/EDR, usar documentação pública e suas imagens com fonte; não exigir licença. Regra em papel é exemplo de decisão; tela oficial é ilustração de capacidade, não execução local.
- Antes de publicar, conferir legibilidade, links, procedência, termos técnicos e correspondência entre exemplo e pergunta. Não apresentar resultados esperados como testes executados.
- A atividade só fica pronta após incorporar os insumos e a alternativa sem ferramenta. Esta revisão não declara a aula pronta para ministrar.

Referências conceituais existentes para seleção e revisão posterior: `docs/protecao_dados/` e `docs/malwares/`. Não importar integralmente suas listas, mini-casos ou recortes de certificação para o percurso principal.

## Pontes e carga

A10 → A11: acesso autorizado não define sozinho todo o tratamento do dado. A11 → A12: o dispositivo que manipula o dado também precisa de proteção. A12 → A13: identificar o papel de confidencialidade e integridade antes de aprofundar mecanismos criptográficos; criptografia não resolve sozinha um endpoint comprometido.

Cadeia docente adaptada: conceitos de acesso disponíveis → objetos e campos explicados → exemplo trabalhado → leitura guiada de evidência → propriedade e limite → escolha justificada → comparação com contraprova → quadro integrado → mecanismos criptográficos. Sem exigir reconstrução de cenário anterior.

O bloco passa de 90 T/110 P para **140 T/60 P**. No roadmap A08–A31, isso resulta em **1.250 T/1.150 P**, preservando 2.400 minutos. Exposição e discussão conceitual não serão rotuladas como prática para fechar o somatório. A conciliação institucional de teoria/prática exige revisão própria, com carga e calendário reais.

## Referências técnicas consultadas

- [Microsoft Learn — DLP](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp): condições, ações, locais de aplicação e ajuste de políticas. A implementação ilustra a técnica; recursos variam conforme produto e ambiente. Consulta em 24 set. 2026.
- [Microsoft Learn — EDR](https://learn.microsoft.com/en-us/defender-endpoint/overview-endpoint-detection-response): telemetria e apoio à investigação e resposta. Consulta em 24 set. 2026.

## Cognitive Load Analysis

### Task Summary

Revisão de dois encontros introdutórios de proteção de dados e endpoint, após relato docente de cansaço com cenários imaginários recorrentes. Não foram fornecidos dados individuais de desempenho ou familiaridade com as ferramentas.

### Load Breakdown

**Intrinsic Load: High**
- Cerca de 4–6 relações por decisão, conforme o exemplo: objeto, estado, ação, controle, evidência e limite. Estimativa de planejamento, não medida de capacidade individual.
- DLP e interpretação de malware exigem relacionar contexto e comportamento. Essa complexidade pertence ao conteúdo e deve ser sequenciada.

**Extraneous Load: High**
- Na abordagem rejeitada, empresa, personagens, IDs e matriz anterior exigiam recordar premissas além do conceito em estudo.
- Consultar cenário, registro e ferramenta em locais diferentes introduziria atenção dividida. Repetir a cadeia completa em cada bloco ampliaria redundância.

**Germane Load: Medium**
- O esforço produtivo desejado é distinguir controles, explicar limites e justificar decisões. A nova sequência preserva esse esforço com exemplos trabalhados e pequenas variações.

### Overall Assessment

O relato docente sustenta reduzir a exigência de reconstrução narrativa. Não permite diagnosticar sobrecarga individual. A revisão deve ser avaliada pela capacidade de explicar a escolha de controle e interpretar campos, sem depender de recordar a história.

### Problem Areas

1. Recuperação de personagens e fatos sem ganho necessário para o conceito.
2. Introdução simultânea de muitos campos, categorias e ferramentas.
3. Risco de transformar a revisão expositiva em lista extensa de definições.
4. Dependência de fala transitória para entender telas e evidências.

### Modification Suggestions

- **Problem:** premissas narrativas acumuladas. **Principle:** complexidade desnecessária. **Fix:** exemplos independentes de arquivo, fluxo e processo, cada um com todos os dados visíveis.
- **Problem:** excesso de campos novos. **Principle:** interatividade dos elementos. **Fix:** explicar classificação antes de regra e processo normal antes de alerta; adicionar os campos conforme usados.
- **Problem:** taxonomia extensa. **Principle:** redundância e construção de esquemas. **Fix:** comparar mecanismos e efeitos centrais; deixar categorias adicionais como consulta e usar uma variação curta para verificar compreensão.
- **Problem:** telas dependentes de explicação oral. **Principle:** informação transitória e atenção dividida. **Fix:** manter campo, anotação e pergunta próximos na página, com captura estática legível.

### Expertise Reversal Check

Não equiparar a falta de familiaridade com painéis a falta de capacidade analítica. Introduzir os campos necessários, mas exigir justificativas de nível técnico desde o exemplo trabalhado. Considerar a familiaridade operacional inicial como hipótese de planejamento. Se a turma já interpretar os campos com autonomia, abreviar o exemplo trabalhado e comparar limites; não repetir instruções de ferramenta já dominadas. A observação docente orientará o ajuste.
