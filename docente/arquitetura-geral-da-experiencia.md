# Arquitetura geral da experiência — Segurança Digital

> **Documento de governança curricular.** Esta é a referência local para planejar, criar e revisar aulas da disciplina. Ela define a espinha dorsal da experiência; não é material destinado aos estudantes nem substitui o plano de ensino institucional.

## Produção e publicação autorizadas — A08 e A09

**Clareza do escopo na A08 — 8 set. 2026:** seção 4 passa de referência ao “modelo técnico” e termos não explicados para funcionamento normal dos pedidos digitais → definição de escopo → suporte necessário → definição de dependência externa → proposta de escopo → conferência. Não usar eventos como teste de cumprimento de política ainda inexistente: primeiro delimitar atividades, depois estabelecer orientações e responsabilidades. Preservar objetivo, caso, carga, proposta B como insumo do passo 1 e entrega A09. Relação com embalagem permanece uma condição a verificar, sem pressupor conexão técnica.

**Construção guiada do SGSI na A08 — decisão docente de 8 set. 2026:** acrescentar leitura funcional da ISO/IEC 27001:2022, seções 1–3 e 4–10, relação do Anexo A com tratamento/Declaração de Aplicabilidade e referência à emenda 1:2024. Converter a aplicação em oito passos ligados à ValeVerde: contexto/escopo; liderança/política; riscos/tratamento; objetivos/apoio; operação; medição; auditoria/análise crítica; melhoria. Cada passo explicita registro, exemplo e validação. Produzir esboço e pendências, sem alegar SGSI implantado/conforme; A09 completa avaliação/decisão, A10–A12 aprofundam controles/OT como checkpoints. Preservar 100 minutos, redistribuindo a condução, e o fechamento da entrega em A09. Vídeo indicado pelo docente integra a seção de SGSI como estudo complementar: 14:12, publicado em março de 2022; não substitui a referência normativa de outubro de 2022 com emenda 2024. O plano registra a distinção entre construção em aula e execução real.

**Exemplos públicos de SGSI — 8 set. 2026:** inserir comparações breves nos passos de contexto/escopo, política/autoridade e auditoria: documentos públicos do SGSI de dados de pesquisa da UCL e política do LNCC. Explicar o trecho observado e aplicá-lo à ValeVerde, sem transferir automaticamente escopo, obrigações ou estrutura institucional. Publicação de documento não comprova execução nem eficácia. As comparações integram os blocos existentes de 100 minutos; fontes e versões verificadas ficam no plano docente.

**Atividade encerrada na A09 — decisão docente de 8 set. 2026:** o enunciado integral passa ao final de `docs/aulas/A09-decisao-de-riscos.md#atividade`, com nome público “Governança e decisão de tratamento”. A08 prepara o registro e aponta para essa âncora. A entrega fecha os conteúdos A08–A09: escopo, papéis, objetivo/acompanhamento, dois riscos e uma decisão detalhada para R02 com V1. Retirar da exigência as seções futuras de controles/adaptação OT e a consolidação após A12. A10–A12 reutilizam a decisão em checkpoints, sem ampliar esta entrega nem criar outra atividade principal nesta revisão. P1 permanece apenas como identificador docente da primeira atividade do macrocomponente; a interface pública não depende dessa sigla. Preservar a carga e as cinco atividades principais, sem inventar prazo. A antiga URL de P1 encaminha ao enunciado da A09 para não quebrar links distribuídos. Esta decisão prevalece sobre menções anteriores ao fechamento de P1 após A12.

**Correção de contexto explícito da A08 — 8 set. 2026:** após crítica docente às referências vagas, reconsultada integralmente a apresentação A07 vigente no Drive (`187O4GeB7Xz62l6ij-is0U7La_26eCO4308GKGYArjqk`, 35 slides). Ela trabalha narrativa consolidada → comportamento → mapeamento ATT&CK; não fornece chamado de publicação, arquivos, rotas, correção ou reteste. A primeira revisão da A08 preservava um salto ao exigir “retome o chamado da abertura” sem apresentar o registro. A ponte passa a explicitar o limite do mapeamento e a pergunta sobre responsabilidade pela proteção. ValeVerde é um novo exercício de gestão, não continuação factual do incidente da A07. A seção 1 fornece funcionamento legítimo, arquivos nomeados, caminhos ilustrativos explicados, chamado G02, resultado limitado da retirada e segunda ocorrência. Todos são dados fictícios fornecidos para análise, não laboratório executado. Repetir no ponto de decisão o objeto e a condição relevantes; IDs servem à rastreabilidade, sem substituir descrição. G01–G04, P1, objetivos, 100 minutos e ponte A09 permanecem alinhados. Esta correção prevalece sobre a formulação resumida de ponte da revisão anterior.

**Revisão narrativa da A08 — 8 set. 2026:** manter a publicação de documento interno como fio da abertura, sem desvio para cestas ou catálogo de referenciais. A ponte de até 15 minutos passa por ocorrência → regra para a próxima publicação → consulta pontual à Authorization Cheat Sheet → limite da orientação técnica → autoridade e acompanhamento → SGSI. OWASP entra como origem da orientação que responde à pergunta já formulada. ASVS/WSTG não integram essa abertura. Preservar objetivos, carga, P1 e ponte para A09. Ilustração fornecida pelo docente acompanha a abertura como representação do caso fictício.

O docente aprovou a confrontação e solicitou A08/A09 inteiramente no GitHub Pages. Está autorizada a produção e publicação dessas duas páginas, seus insumos e atividade compartilhada P1; esta decisão supera a restrição anterior de planejamento sem site. Não há autorização de envio ao Classroom ou alteração dos slides históricos. A08 inicia SGSI após ponte de 15 min; A09 avalia riscos já formulados. O caso prospectivo será uma empresa fictícia com portal de pedidos e manutenção de fornecedor: documentos fornecidos, sem alegar que registros novos foram produzidos em A01–A07. P1 tem um documento cumulativo; A08/A09 iniciam suas seções e a consolidação ocorrerá após A12. A10–A12 não são publicadas nesta etapa.

## Detalhamento autorizado — A08–A31, 8 set. 2026

**Condições confirmadas pelo docente:** A07 foi a última aula ministrada; restam **24 encontros de 100 minutos**, de A08 a A31. Aulas futuras serão conduzidas pelo professor usando MkDocs, com demonstrações e interpretação coletiva; execução independente simultânea não é condição de participação. A prática principal será organizada por macrocomponente, evitando uma nova entrega por encontro. Nenhuma alteração no GitHub Pages está autorizada nesta etapa.

**Prioridades confirmadas:** concluir modelagem com OWASP/Cheat Sheets e passagem a tratamento/verificação; iniciar governança cedo, com ISO/IEC 27001 e ênfase no NIST SP 800-82 Rev. 3; aprofundar criptografia e assinaturas; reservar parte significativa para segurança ofensiva/defensiva, Red Team, Blue Team e pentest. O NIST SP 800-82 complementa a série ISA/IEC 62443; não a incorpora nem a substitui.

**Base para o detalhamento solicitado:** [macroorganização dos 24 encontros](planejamento-24-encontros/proposta-macroorganizacao.md), preservando M1 (5), M2 (3), M3 (6), M4 (3) e M5 (7). O docente autorizou detalhar os conteúdos com revisão de especialista IT/OT e manter títulos temáticos numerados A08–A31. A referência prospectiva é o [detalhamento por aula](planejamento-24-encontros/detalhamento-conteudos-por-aula.md). Gestão de riscos e definição de controles ficam explicitamente em M1, com avaliação/tratamento em A09 e seleção/aplicabilidade/avaliação de controles em A10, com adaptação OT em A11–A12; os demais blocos aplicam e verificam essas decisões. Trata-se de planejamento curricular, não de pacotes prontos, publicação ou convocação de entregas.

**Histórico:** A01–A07 foram reconsultadas no Drive. A realização de A07 foi confirmada pelo docente; essa informação supera a pendência anterior. Entregas individuais e resultados de laboratório não foram auditados. A02 já ensinou escolha de controles e definição de reteste; A05 trabalhou regra de autorização no servidor, quatro testes e accounting. A06 deixou ameaças candidatas e A07 trabalhou mapeamento ATT&CK. O diagnóstico anterior subestimou A02/A05 ao justificar uma nova aula inteira de ameaça→controle→teste. Não há comprovação de implementação/entrega individual, mas isso não permite tratar o conteúdo apresentado como inédito.

**Correção após confronto de repetição:** a [análise A01–A07 × A08–A10](planejamento-24-encontros/confrontacao-a01-a07-a08-a10.md) fundamenta A08 como início efetivo de SGSI, com ponte de modelagem/OWASP limitada a 15 minutos; A09 como avaliação e decisão de risco; A10 como aplicabilidade, implantação e avaliação de controles. Cada aula tem produto distinto dentro de P1. Preservar 24 encontros, cinco macrocomponentes e cinco entregas.

**Precedência:** a nova carga substitui as hipóteses anteriores de 20 × 90 e de 30 encontros. O formato conduzido e as entregas por macrocomponente prevalecem sobre exigências de reprodução obrigatória e atividade domiciliar por aula. O detalhamento curricular está autorizado; calendário, instrumentos de avaliação e preparação/ensaio dos materiais permanecem por fechar. As páginas e os artefatos históricos permanecem intactos nesta etapa.

## Decisão vigente — reconciliação de 8 de setembro de 2026

**Formato autorizado:** MkDocs/GitHub Pages integral, com teoria e prática intercaladas e atividade vinculada ao Google Classroom; sem exigência de novos slides ou roteiros PDF. Esta decisão prevalece sobre contratos de três artefatos e tabelas de slides presentes na memória abaixo.

**História e fontes:** os 62 arquivos da pasta oficial foram consultados nesta data. O diagnóstico e o inventário estão em [reconciliacao-mkdocs-2026-09-08/diagnostico.md](reconciliacao-mkdocs-2026-09-08/diagnostico.md). A01–A05 são encontros confirmados nos registros anteriores; a realização de A06/A07 depende da confirmação docente. Preservar todos os slides e roteiros, incluindo A06/A07. O MkDocs pode ser reconciliado por autorização expressa do docente.

**Herança confirmada no material publicado:** A01 separa fatos e hipóteses na parada industrial; A02 observa `acquisitions.md`; A03 usa registros corporativos nos slides e uma loja fictícia na prática; A04 observa o fluxo da cesta no Juice Shop; A05 distingue sessão/propriedade com Ana e Bruno; A06 publicada modela cestas com DFD/STRIDE; A07 publicada mapeia uma narrativa pronta no ATT&CK Enterprise/ICS. Nenhuma dessas publicações comprova execução ou entrega individual.

**Divergências resolvidas para o site:** a A04 corporativa descrita na seção 7 abaixo não corresponde à apresentação vigente; a A07 não produziu decisão de tratamento, árvore de ataque ou reteste conforme a proposta de 1º de setembro; a A06 não estabelece como observada uma arquitetura portal–DMZ–CLP. A07 introduz essa arquitetura como novo cenário fornecido. Não herdar esses produtos ficticiamente.

**Sequência futura:** as propostas de 25 e 30 encontros são insumos de planejamento, não aulas prontas. A08–A30 do acervo anterior ficam fora do percurso de encontros do site; suas páginas de consulta e fontes são preservadas. A próxima aula será planejada depois desta reconciliação, a partir do último encontro confirmado e das lacunas abaixo. Nenhuma nova numeração, data ou carga institucional foi inferida.

**Lacunas a reabrir:** aplicação e descarte de candidatas geradas por contexto em A06; distinção ameaça hipotética/comportamento dado em A07; passagem de ameaça/comportamento a requisito, controle, teste e risco residual, ainda não comprovada nos produtos da turma. A ponte deve nomear a tabela ou campo que será reaberto, sem transformar mapa ATT&CK em análise de risco concluída.

**Contrato do próximo encontro:** `herança concreta → preparação → ação → rastro → leitura → conceito → decisão → validação → produto → ponte`, inteiramente percorrível na página, com âncora de atividade, insumo alternativo real e plano docente por blocos. A validação pode ser operacional, analítica ou por revisão conforme o domínio; execução de código não é requisito universal.

## Memória de decisões anteriores

Os registros abaixo conservam o histórico de planejamento. Onde houver divergência, prevalecem a decisão acima, o diagnóstico de 8 de setembro e as fontes publicadas nele identificadas.

**Estado:** arquitetura reconciliada prospectivamente para 25 encontros, com cinco competências aprofundadas  
**Última revisão:** 1º de setembro de 2026  
**Escopo validado:** A01–A05 como história congelada e direção A06–A25 em encontros de 90 minutos  
**Pontos ainda pendentes:** calendário acadêmico, interpretação institucional da carga horária e validação docente da janela do projeto mensal

> **Diagnóstico histórico de 3 de setembro de 2026:** o relato docente de que a “aula 5” incluiu demonstração de uma ferramenta de modelagem e exigiu inserção manual de ameaças não coincide com a apresentação A05 vigente no Drive (`A05 — Quem é você e pode fazer isto?`), que trata sessão e autorização no Firefox e não apresenta o Threat Dragon. O comportamento descrito coincide com o roteiro publicado da A06, que orientava **New Threat by Type**. Até reconciliar a numeração efetivamente usada em sala, preservar A05 e A06 publicadas como registros, não atribuir retroativamente à A05 uma prática de modelagem e tratar o tutorial enriquecido como correção prospectiva do roteiro A06.

> **Precedência prospectiva:** a partir de 1º de setembro de 2026, [`reconciliacao-curricular-25-encontros.md`](reconciliacao-curricular-25-encontros.md) prevalece para a sequência A06–A25 e a carga de 90 minutos. A ordem vigente consolida A01–A05 por modelagem de ameaças, aprofunda criptografia, ISO/IEC 27001 e IEC 62443, e somente então introduz pentest como verificação orientada por risco. As tabelas A06–A30 abaixo permanecem como memória da arquitetura anterior. A01–A05 não são alteradas.

## Ementa oficial e precedência curricular

A ementa oficial informada pelo docente é o núcleo obrigatório da arquitetura: visão geral no contexto produtivo; criptografia; normas e padrões industriais; arquiteturas de comunicação seguras; defesa de perímetro; segurança de controle e automação industrial; malwares; autenticação, autorização e contabilidade; logs e auditoria; noções de pentest; políticas e riscos; engenharia social e conscientização.

A realidade acadêmica informada após A05 é de **20 encontros restantes de 90 minutos**. Portanto, a disciplina passa a usar os identificadores A01–A25. A carga futura é de 30 horas-relógio; a compatibilidade com a carga institucional total ainda precisa ser confirmada, sem inventar equivalência.

O cruzamento e os *drifts* estão registrados em [`aderencia-a-ementa-oficial-e-drifts.md`](aderencia-a-ementa-oficial-e-drifts.md). A sequência revisada e detalhada está em [`distribuicao-30-encontros.md`](distribuicao-30-encontros.md) e prevalece sobre as tabelas macro iniciais deste documento quando houver divergência de título ou conteúdo. Extrapolações profissionais permanecem somente quando aprofundam ou transferem um item obrigatório.

## Documentos de revisão associados

- [`referenciais-profissionais-e-matriz-de-aderencia.md`](referenciais-profissionais-e-matriz-de-aderencia.md) — pesquisa e cruzamento inicial com formações e referenciais profissionais.
- [`parecer-especialista-seguranca.md`](parecer-especialista-seguranca.md) — crítica técnica independente da matriz e prioridades para segurança da informação e OT.
- [`distribuicao-30-encontros.md`](distribuicao-30-encontros.md) — proposta pedagógica de sequenciamento produzida a partir do parecer técnico.
- [`aderencia-a-ementa-oficial-e-drifts.md`](aderencia-a-ementa-oficial-e-drifts.md) — confronto com a ementa oficial, lacunas obrigatórias e extrapolações autorizadas.
- [`conteudo-programatico-por-encontro.md`](conteudo-programatico-por-encontro.md) — objetivos, tópicos, conhecimentos, habilidades e evidências de A01 a A30; fonte imediata das fichas-base dos pacotes.

Os três documentos são insumos de avaliação. A distribuição proposta ainda não substitui esta arquitetura. Depois de aprovação docente e confronto com a ementa institucional, as decisões aceitas devem ser incorporadas aqui antes da reconstrução dos pacotes A04 e A05.

## 1. Decisão central de desenho

A disciplina acompanha uma equipe que precisa **explicar evidências, proteger uma operação e justificar decisões de segurança**. O estudante não percorre um catálogo de ameaças ou ferramentas. Ele recebe situações progressivamente mais complexas e produz artefatos que seriam úteis em trabalho real.

A cadeia de raciocínio que atravessa o curso é:

```text
evidência → hipótese → funcionamento normal → condição → consequência
          → decisão → intervenção → validação → comunicação
```

Cada aula deve avançar essa cadeia. Um novo conceito somente entra quando ajuda a responder uma pergunta que o caso já tornou necessária.

### Promessa da experiência ao estudante

Ao concluir a disciplina, o estudante deverá conseguir receber uma situação de segurança ainda ambígua e:

1. separar fato, hipótese e conclusão;
2. compreender o sistema e o processo que precisam ser preservados;
3. localizar condições de risco em pessoas, aplicações, identidades, dados, infraestrutura e operação;
4. investigar de modo autorizado, seguro e reproduzível;
5. selecionar uma resposta compatível com consequência, custo e responsabilidade;
6. demonstrar por evidência que a intervenção funcionou e comunicar o risco residual.

## 2. O caso condutor e suas escalas

O fio principal é uma **empresa fictícia que vende pela Web e depende de uma operação física**. O OWASP Juice Shop representa a aplicação de comércio eletrônico em laboratório. A empresa possui usuários, equipe interna, fornecedores, dados, serviços em nuvem e uma linha produtiva simulada.

O curso não precisa mostrar toda essa arquitetura no início. Ela aparece por camadas, sempre quando uma nova evidência exigir ampliar o campo de visão:

| Escala revelada | Elementos observáveis | Questão profissional que abre |
|---|---|---|
| Pessoa e evidência | mensagem, horário, registro, comportamento | O que aconteceu e o que ainda é hipótese? |
| Aplicação local | navegador, requisição, resposta, conta e arquivo | O que está exposto e por que isso importa? |
| Fluxo legítimo | usuário, interface, API, armazenamento e decisão de acesso | Como o serviço deveria funcionar antes de procurar abuso? |
| Organização | responsáveis, políticas, fornecedores e prioridades | Quem decide, financia, aceita e acompanha o risco? |
| Nuvem | identidade, rede, serviço, log, armazenamento e custo | O que muda quando a infraestrutura é compartilhada e elástica? |
| Operação física | supervisão, controlador, processo e estado seguro | Como reduzir risco sem comprometer disponibilidade e safety? |

O caso pode mudar de perspectiva, mas não deve ser substituído por exemplos independentes a cada conceito. Exemplos externos servem para transferência, não para romper o fio principal.

## 3. Princípios que governam a progressão

### 3.1 Concreto antes do abstrato

Antes de apresentar uma taxonomia, método ou diagrama, o estudante deve encontrar um limite na forma atual de explicar ou decidir. STRIDE, CIA, AAA, CVE, CWE, matriz de risco e frameworks entram como instrumentos para resolver esse limite.

### 3.2 Funcionamento normal antes da falha

O estudante reconstrói primeiro função, usuário legítimo, dado, autoridade, dependência e resultado esperado. Só depois examina como uma condição pode quebrar esse fluxo. Isso evita controles tecnicamente corretos que inviabilizam o trabalho real.

### 3.3 Uma novidade estrutural por ciclo

Cada encontro pode aprofundar vários conceitos relacionados, mas deve impor apenas uma transformação principal ao modelo mental. Exemplos: “do evento ao risco”, “da resposta HTTP ao ativo”, “do uso normal à decisão de acesso”. Se o aluno precisa simultaneamente aprender o domínio, decifrar uma arquitetura, dominar uma notação e aplicar uma taxonomia, a aula deve ser dividida ou simplificada.

### 3.4 Artefato como consequência, não como burocracia

O entregável existe porque alguém precisa tomar uma decisão depois. Antes de solicitar um ticket, diagrama, registro ou relatório, a aula identifica destinatário, pergunta e uso. Campos que não alteram a decisão, a verificabilidade ou a comunicação devem ser removidos.

### 3.5 Explorar implica defender e validar

Uma observação ofensiva em laboratório não encerra um ciclo. Quando didaticamente possível, ela conduz a correção, contenção, detecção ou tratamento, seguida de reteste do caso negado e do fluxo legítimo.

### 3.6 Continuidade visível

Toda aula começa recuperando uma evidência ou decisão anterior e termina criando uma pergunta autêntica para a próxima. A ponte não pode ser apenas “na próxima aula veremos o conceito X”.

## 4. Ritmo de um encontro

O encontro de duas aulas de 52 minutos deve ser percebido como uma investigação única, não como uma metade teórica seguida de uma prática desconectada.

| Movimento | Faixa de referência | Função | Sinal de que está funcionando |
|---|---:|---|---|
| Reentrada e tensão | 8–12 min | recuperar o caso e apresentar nova evidência | estudantes formulam o que precisam descobrir |
| Observação e previsão | 12–18 min | inspecionar e registrar hipótese antes da explicação | fatos e inferências aparecem separados |
| Construção guiada | 20–28 min | introduzir somente os conceitos necessários | cada termo muda a leitura da evidência |
| Investigação e decisão | 32–42 min | aplicar em dupla ou grupo com escolhas reais | há justificativas diferentes que podem ser comparadas |
| Intervenção e validação | 12–20 min | propor/aplicar controle e definir teste | segurança e função legítima são verificadas |
| Fechamento e ponte | 6–10 min | consolidar evidência e abrir a próxima lacuna | a necessidade da aula seguinte fica compreensível |

As faixas são referências de desenho e podem se sobrepor. O plano de cada encontro continua responsável pela contabilização explícita de minutos teóricos e práticos.

## 5. Macroprogressão da disciplina

A arquitetura prevê **30 encontros de 104 minutos**, cada um com um bloco teórico e um prático de 52 minutos. Isso totaliza 30 aulas teóricas e 30 práticas de 52 minutos. Antes de fechar o cronograma, deve-se confirmar se “30 h teóricas + 30 h práticas” no plano institucional significa hora-aula de 52 minutos ou hora-relógio. Datas não são definidas aqui.

### Arco 1 — Da evidência ao modelo útil do sistema

**Transformação:** o estudante deixa de nomear problemas por impressão e aprende a sustentar uma decisão com evidência, contexto e consequência.

| ID | Pergunta que move o encontro | Conceito necessário | Experiência principal | Produto que segue adiante | Estado |
|---|---|---|---|---|---|
| A01 | O que a sequência de registros permite afirmar? | evento, incidente, risco, CIA, AAA e safety | ordenar e confrontar evidências de uma parada | linha do tempo e próxima coleta | produzido; preservar identidade |
| A02 | O que realmente está exposto e por que importa? | ativo, ameaça, vulnerabilidade, superfície e controle | observar uma resposta HTTP no Juice Shop local | registro de vulnerabilidade priorizado | produzido; preservar identidade |
| A03 | O acesso observado foi falha, uso legítimo ou abuso? | hipótese concorrente, ameaça candidata e limite de conclusão | comparar evidências da mesma exposição da A02 | nota curta de triagem | produzido; precisa ganhar mais investigação concreta |
| A04 | Onde a aplicação decide? | fluxo normal, requisição/resposta, identidade–ação–recurso e fronteira | observar a cesta no Juice Shop e representar `pessoa → navegador → serviço → dado` | diagrama de uma página, captura interpretada e pergunta sobre a decisão interna | ministrada; apresentação vigente no Drive confirmada em 1º set. 2026 |
| A05 | Bruno entrou na própria conta: por que ainda precisamos proteger a cesta de Ana? | sessão, término, propriedade do recurso, autorização horizontal, negação por padrão e accounting | acompanhar Ana e Bruno no mesmo computador, comparar fluxo legítimo, contexto antigo pós-logout e solicitação de Bruno à cesta de Ana | ticket integrado de sessão e autorização com quatro testes de aceitação | revisão contextual integrada com A07; não repetir cadastro, HTTP básico nem modelagem da A04 |

**Marco do arco:** briefing técnico curto que reconstrói `evidência → condição → consequência → controle → validação` no mesmo caso.

### Arco 2 — Identidade, acesso e abuso de aplicação

**Transformação:** o estudante passa de “há uma vulnerabilidade” para explicar quais decisões de identidade, sessão, autorização e entrada permitiram o comportamento.

| ID | Pergunta que move o encontro | Conceito necessário | Experiência principal | Produto |
|---|---|---|---|---|
| A06 | Encontro disponível para redefinição curricular | conteúdo de sessão incorporado à A05 | não manter uma segunda introdução ao mesmo ciclo | decisão pendente antes de produzir ou publicar substituta |
| A07 | Encontro disponível para redefinição curricular | autorização introdutória incorporada à A05 | não manter uma segunda introdução à propriedade de recurso | decisão pendente antes de produzir ou publicar substituta |
| A08 | Quando uma entrada passa a ser interpretada como instrução? | contexto de interpretação, parametrização e validação | comparar entrada legítima e variação controlada | caso de teste, controle e reteste funcional |
| A09 | O que estamos autorizados a testar? | escopo, regras de engajamento, coleta e parada | planejar pentest introdutório no Juice Shop | plano de teste autorizado |
| A10 | O teste encontrou o quê e como provamos a correção? | execução controlada, relatório, remediação e regressão | executar caso fornecido, relatar e retestar | relatório e registro atualizado |

**Marco do arco:** revisão defensiva de uma jornada do Juice Shop, comunicada como pequeno pull request ou ticket verificável.

### Arco 3 — Pessoas, dispositivos e caminhos de comprometimento

**Transformação:** o estudante amplia a análise da aplicação para o ambiente humano e tecnológico sem transformar ameaças em catálogo.

| ID | Pergunta que move o encontro | Conceito necessário | Experiência principal | Produto |
|---|---|---|---|---|
| A11 | Por que uma mensagem plausível consegue mudar uma ação? | pretexto, gatilho, impersonificação e verificação | analisar mensagens fictícias concorrentes | protocolo de verificação |
| A12 | O que uma campanha ética precisa medir sem expor pessoas? | simulação, consentimento, métrica e aprendizagem | desenhar campanha sem envio real | plano de simulação responsável |
| A13 | O que mudou no dispositivo e que evidência diferencia as hipóteses? | malware por comportamento, persistência e telemetria | triar pacote seguro de evidências | nota de triagem de endpoint |
| A14 | Quem fez o quê e podemos confiar no registro? | accounting, integridade, tempo, retenção e auditoria | correlacionar logs e avaliar a trilha | trilha auditável comentada |
| A15 | Onde o perímetro realmente termina? | segmentação, filtragem, DMZ, VPN, zonas/conduítes e defesa em profundidade | comparar arquitetura plana e segmentada | diagrama, matriz de fluxos e teste |

**Marco do arco:** análise de um caminho de comprometimento que conecte pessoa, dispositivo e acesso físico, sem executar ataque contra terceiros.

### Arco 4 — Dados e confiança criptográfica

**Transformação:** o estudante deixa de escolher “criptografia” genericamente e passa a selecionar mecanismos conforme estado do dado, propriedade desejada e gestão de chaves.

| ID | Pergunta que move o encontro | Conceito necessário | Experiência principal | Produto |
|---|---|---|---|---|
| A16 | Que dados existem, onde estão e quem responde por eles? | classificação, propriedade e estados do dado | seguir dados fictícios de cadastro/pedido | inventário e classificação justificados |
| A17 | O que deve permanecer secreto durante a troca? | criptografia simétrica, nonce e modo de operação | comparar evidências de configurações seguras/inseguras | decisão criptográfica contextualizada |
| A18 | Como estabelecer confiança sem compartilhar o mesmo segredo? | assimetria, assinatura e troca de chaves | verificar assinatura e discutir propriedade | registro de verificação |
| A19 | Senha, hash e segredo são protegidos da mesma forma? | hash, salt, derivação, segredo e rotação | avaliar armazenamento fictício | especificação e teste de aceitação |
| A20 | O canal é seguro e continua operável? | identidade, TLS/VPN, segmentação, chaves, logs e recuperação | integrar mecanismos em arquitetura de comunicação | diagrama, casos permitido/negado e recuperação |

**Marco do arco:** decisão de proteção de dados que declare ameaça, mecanismo, chave/segredo, operação, validação e limitação.

### Arco 5 — Operação defensiva, nuvem e resposta

**Transformação:** o estudante passa de controle isolado a operação observável, com responsabilidade, custo e recuperação.

| ID | Pergunta que move o encontro | Conceito necessário | Experiência principal | Produto |
|---|---|---|---|---|
| A21 | O que mudou em relação ao estado esperado? | baseline, hardening, desvio, prazo e exceção | comparar configuração esperada e observada | registro de desvio e acompanhamento |
| A22 | Quando um evento deve virar alerta? | log, telemetria, condição, falso positivo e contexto | transformar hipótese e baseline em regra | especificação de alerta testável |
| A23 | O alerta exige conter, recuperar ou escalar? | triagem, severidade, playbook e preservação de evidência | exercício de mesa com atualização de evidências | runbook curto e revisão pós-incidente |
| A24 | Quem pode fazer o quê na conta de nuvem? | responsabilidade compartilhada, IAM e menor privilégio | laboratório econômico na AWS Academy | revisão de acesso e evento de auditoria |
| A25 | Qual caminho de nuvem está exposto e como provar o encerramento? | VPC, rota, grupo de segurança, validação, limpeza e custo | observar, corrigir, retestar e remover configuração fornecida | relatório antes/depois e checklist de encerramento |

**Marco do arco:** mini-investigação em nuvem com contenção, validação funcional, limpeza e verificação de custo. Região, serviços, tamanhos, duração e estimativa somente serão fixados após validação atual.

### Arco 6 — Governar risco e proteger operação OT

**Transformação:** o estudante integra técnica, negócio e processo físico, assumindo que controles têm proprietários, custo, limitações e risco residual.

| ID | Pergunta que move o encontro | Conceito necessário | Experiência principal | Produto |
|---|---|---|---|---|
| A26 | Qual risco merece tratamento primeiro e por quê? | probabilidade, impacto, incerteza e apetite | comparar cenários acumulados do curso | registro de risco priorizado |
| A27 | Qual regra torna o tratamento repetível? | política, padrão, procedimento, exceção e métrica | corrigir política e derivar padrão/procedimento | regra verificável e acompanhamento |
| A28 | O que as referências industriais exigem desta decisão? | ISA/IEC 62443, NIST SP 800-82, CISA, ciclo de vida e responsabilidades | aplicar referências ao acesso remoto do fornecedor | matriz requisito-evidência-responsável-lacuna |
| A29 | O que muda quando o software controla um processo físico? | zonas, conduítes, legado, disponibilidade e safety | observar telemetria de OpenPLC/FUXA isolado ou pacote alternativo | inventário OT e decisão de segmentação |
| A30 | Conseguimos defender uma intervenção do início ao fim? | integração, risco residual e comunicação | exercício final com papéis técnicos e executivos | dossiê enxuto e apresentação curta |

**Marco do arco:** defesa de uma decisão que preserve o processo, trate o risco mais importante e demonstre validação e recuperação.

## 6. Dependências entre os arcos

```text
Arco 1: evidência e sistema
        ↓
Arco 2: decisões da aplicação
        ↓
Arco 3: pessoas e caminhos ─────┐
        ↓                       │
Arco 4: dados e confiança       │
        ↓                       │
Arco 5: operação e nuvem        │
        ↓                       │
Arco 6: risco, governança e OT ←┘
```

Os arcos não são gavetas temáticas. Cada um reutiliza evidências e produtos anteriores. O registro de risco final, por exemplo, deve nascer de condições observadas nos arcos anteriores, e não de um caso novo apresentado na última hora.

## 7. Registro da A04 ministrada e direção para A05

### Decisão posterior à A04

A04 foi ministrada com `svc_support`, VPN, `FILE-01`, `ENG-WS-01` e `OT-JUMP-01`. A turma partiu das ameaças candidatas da A03, reconstruiu fluxos legítimos, distinguiu ramos da VPN de uma sessão contínua, localizou mudanças de confiança e revisou uma ameaça depois da evidência de que a VPN não autorizava acesso direto à estação de engenharia.

Esse fato prevalece sobre a proposta posterior de substituir integralmente o caso pelo Juice Shop. O curso não deve atribuir aos estudantes uma captura da cesta, identidades chamadas Ana e Bruno ou um diagrama Web que não foram produzidos na A04. O produto herdado é o **ticket de revisão arquitetural** e sua lacuna mais fértil é: **quais evidências distinguem autenticar a entrada na VPN, autorizar uma ação no `FILE-01` e registrar quem decidiu ou executou a ação?**

A ruptura com o Juice Shop continua sendo um custo a administrar, não um motivo para apagar a experiência. Em retrospecto, a arquitetura corporativa exigiu que o aluno simultaneamente:

- compreenda um domínio corporativo/industrial novo;
- infira o funcionamento normal de componentes que não experimentou;
- aprenda notação de fluxo e fronteira;
- mantenha hipóteses de atribuição;
- prepare a aplicação de STRIDE.

O resultado provável é carga extrínseca: esforço para decifrar o cenário, sem ganho equivalente na decisão de segurança. Os slides passam a descrever etapas do método, em vez de ajudar a turma a enxergar algo que antes não conseguia explicar.

### Ajustes finos na A04

Os artefatos da A04 devem preservar o caso ministrado e receber apenas correções de consistência:

1. registrar A03, e não A04, como origem da nota de triagem;
2. tratar horários e nomes de componentes como evidências fornecidas, sem inferir uma sessão contínua;
3. conservar o caminho direto `VPN → ENG-WS-01` como hipótese removida pela nova evidência;
4. registrar como saída o ticket com fluxo, fronteira, ameaça revisada e evidência faltante;
5. substituir a antiga ponte para revisão sistemática de propriedades pela pergunta sobre autenticação, autorização e accounting no acesso `VPN → FILE-01`.

O diagrama continua sendo instrumento de explicação, não prova de percurso realizado. A localização da decisão deve responder: **quem solicita, qual recurso e ação estão em jogo, que informação autoriza a continuidade e qual rastro permitiria verificar a decisão?**

### Direção aprovada para A05

A05 reutiliza a habilidade da A04 de acompanhar `ação → requisição → decisão → resposta`, sem atribuir à A04 contas ou capturas Web. O novo cenário começa completo: Ana e Bruno são colegas que usam o mesmo computador do laboratório para montar cestas separadas no Juice Shop. A regra de negócio é visível desde o início: cada pessoa pode consultar e alterar somente a própria cesta; ao sair, o acesso anterior deve deixar de valer.

O percurso observável é `Ana usa a própria cesta → Ana sai → Bruno entra e usa a própria cesta → contexto antigo de Ana é repetido → requisição legítima de Bruno varia somente o identificador para a cesta de Ana → controles e retestes`. Durante 100 minutos, o professor demonstra uma ação no Firefox, cada dupla reproduz em sua máquina, todos param no mesmo checkpoint e então interpretam o rastro. A identidade deixa de ser uma abstração: cada requisição é lida como `quem está sendo representado → qual ação → cesta de quem`.

O resultado da repetição controlada não é antecipado: se o servidor aceitar a requisição preservada, o rastro sustenta que o logout observado não invalidou aquele contexto no servidor; se negar, sustenta recusa daquele contexto naquele momento. Expiração e revogação entram para explicar quais condições adicionais ainda precisam de teste. Accounting entra porque a comparação só é auditável quando os dois resultados podem ser correlacionados sem registrar o segredo de sessão.

O produto presencial é um ticket único com dois achados independentes: validade do contexto após logout e autorização de Bruno sobre a cesta de Ana. Ele inclui regra de negócio, evidências, causa provável, controle no servidor, evento auditável e quatro testes: Ana→Ana permitido, Bruno→Bruno permitido, Bruno→Ana negado e contexto antigo de Ana negado. A atividade domiciliar em dupla reproduz ou analisa o mesmo caso. O conteúdo introdutório de autorização antes previsto em A07 foi incorporado; A07 fica disponível para redefinição.

Os antigos conteúdos introdutórios de A06 e A07 foram absorvidos pela A05. Esses encontros não devem repetir sessão ou autorização horizontal nem ser republicados até receberem nova função. A ponte concreta da A05 para A08 é a requisição legítima de Bruno: depois de controlar quem pode agir sobre a cesta, a turma investigará quando uma entrada passa a ser interpretada como instrução.

## 8. Contrato narrativo dos slides

Os slides são **memória visual da conversa**, não formulário de processo. Uma apresentação atende à arquitetura quando:

1. a primeira tela útil contém uma evidência, situação ou decisão — não o nome de um método;
2. o mesmo caso evolui visualmente ao longo da aula;
3. cada slide resolve uma lacuna criada pelo anterior;
4. há algo para ver, comparar, marcar, prever ou decidir;
5. etapas administrativas ficam no roteiro prático, não ocupam a narrativa principal;
6. conceitos aparecem junto da evidência que passam a explicar;
7. o encerramento reinterpreta a evidência inicial e deixa uma pergunta não artificial para o próximo encontro.

### Orçamento de complexidade do slide

Um slide deve ter uma ideia decisiva e, em geral, no máximo:

- um diagrama principal;
- uma pergunta de mediação;
- uma conclusão curta que emerge da discussão.

Rótulos como `missão`, `entrada`, `framework`, `aplicação` ou `produto` não criam narrativa por si. Se o título apenas nomeia a etapa, ele deve ser reescrito como tensão ou decisão do caso.

### Teste sem notas

Ao percorrer apenas os slides, um professor familiarizado com o assunto deve conseguir responder:

- que evidência a turma possui neste momento;
- o que ela já pode afirmar;
- qual lacuna impede a decisão;
- por que o próximo conceito entra agora;
- o que os estudantes farão com ele;
- como saberão que a decisão melhorou.

Se duas telas consecutivas se conectam apenas porque pertencem à ordem de uma taxonomia, a transição falhou.

## 9. Governança dos pacotes de aula

### Antes de criar ou revisar

Cada ficha-base deve declarar, além dos campos já exigidos no `AGENTS.md`:

- **herança:** evidência, habilidade ou produto recebido da aula anterior;
- **transformação:** única mudança principal no modelo mental;
- **necessidade conceitual:** lacuna concreta que torna o conceito necessário;
- **destinatário do produto:** pessoa ou função que usará a entrega;
- **ponte:** pergunta ainda não resolvida que prepara a aula seguinte;
- **custo cognitivo:** domínio, ferramenta, notação e vocabulário novos; justificar quando mais de um for inevitável.

### Revisão de coerência entre artefatos

| Verificação | Slides | MkDocs | PDF prático | Plano docente |
|---|---|---|---|---|
| Mesma situação e pergunta | conduz visualmente | contextualiza | operacionaliza | explica a mediação |
| Mesmo objetivo observável | torna a decisão visível | sustenta conceitos | coleta evidência | distribui tempo |
| Sem repetição integral | síntese e participação | estudo e referência | ação e entrega | respostas e transições |
| Mesma intervenção/validação | demonstra ou compara | explica limites | exige execução/evidência | prevê alternativa e gabarito |
| Ponte para o percurso | cria a lacuna | registra a síntese | transfere o resultado | declara dependência seguinte |

Mudança de cenário, arquitetura, objetivo, comando, evidência ou critério de sucesso obriga a revisão dos quatro itens da linha correspondente.

### Portões contra drift

Uma aula não está pronta para publicação quando qualquer resposta abaixo for “não”:

1. O aluno sabe por que esta aula vem agora?
2. A situação é reconhecível ou foi suficientemente experimentada antes da abstração?
3. O conceito resolve uma necessidade produzida pela evidência?
4. A atividade contém ao menos uma decisão genuína?
5. O produto tem destinatário e uso claros?
6. Há intervenção defensiva ou decisão de tratamento quando aplicável?
7. A validação testa segurança e preservação do fluxo legítimo?
8. A aula deixa uma herança concreta para a seguinte?
9. Os slides ajudam a ver e raciocinar, em vez de apenas enumerar etapas?
10. O pacote respeita escopo, autorização, segurança, limpeza e custo?

## 10. Avaliação ao longo do percurso

A avaliação deve observar a maturação do mesmo raciocínio, com evidências pequenas e frequentes:

| Dimensão | Evidência inicial | Evidência intermediária | Evidência de integração |
|---|---|---|---|
| Qualidade da observação | separa fato de hipótese | correlaciona fontes | declara limites e confiança |
| Explicação do sistema | identifica ativo e função | representa fluxo e decisão | considera dependências e operação |
| Análise de risco | nomeia consequência | compara plausibilidade e impacto | prioriza e declara risco residual |
| Intervenção | sugere próxima ação | liga controle à condição | considera responsável, custo e trade-off |
| Validação | propõe nova evidência | executa casos permitido/negado | demonstra segurança, recuperação e função preservada |
| Comunicação | registro compreensível | artefato para equipe técnica | briefing adaptado ao decisor |

Flags, capturas ou execução de comandos são evidências auxiliares; nunca substituem interpretação e justificativa.

## 11. Registro de carga horária

Enquanto o calendário real não estiver disponível, a arquitetura controla blocos, não datas.

| Arco | Encontros | Teoria | Prática |
|---|---:|---:|---:|
| 1 — Evidência e modelo | 5 | 5 × 52 min | 5 × 52 min |
| 2 — Identidade e aplicação | 5 | 5 × 52 min | 5 × 52 min |
| 3 — Pessoas e caminhos | 5 | 5 × 52 min | 5 × 52 min |
| 4 — Dados e criptografia | 5 | 5 × 52 min | 5 × 52 min |
| 5 — Operação e nuvem | 5 | 5 × 52 min | 5 × 52 min |
| 6 — Risco, governança e OT | 5 | 5 × 52 min | 5 × 52 min |
| **Total** | **30** | **30 × 52 min** | **30 × 52 min** |

Após confirmação do plano institucional e calendário, este quadro deve receber a equivalência oficial em horas, semanas disponíveis, avaliações e eventuais reposições. Nenhuma data deve ser inferida.

## 12. Processo de mudança

1. Consultar este documento antes de criar ou revisar um pacote.
2. Identificar o arco, a herança, a transformação e a ponte afetados.
3. Registrar aqui mudanças que alterem ordem, cenário condutor, produtos integradores ou dependências.
4. Atualizar ficha-base, slides, MkDocs, prática e materiais docentes afetados.
5. Executar os portões contra drift e o checklist do `AGENTS.md`.
6. Validar o build local do MkDocs quando houver mudança publicável.

Decisões ainda em avaliação devem ser marcadas como propostas. A existência de um arquivo ou slide produzido não transforma automaticamente sua posição no percurso em decisão curricular aprovada.
