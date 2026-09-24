# Revisão especializada de construção pedagógica — A11

**Data:** 24 set. 2026. **Sequência:** revisão técnica de proteção de dados lida primeiro, seguida da íntegra da A11, atividade integrada e arquitetura. Aplicada a skill `cognitive-load-analyser`. Público de referência: estudantes com conhecimentos gerais de acesso, novatos em DLP e sem experiência operacional confirmada. Não houve observação direta dos estudantes. Este parecer não altera a página pública nem sua duração.

## Cognitive Load Analysis

### Task Summary

Compreender como usuário, gestor e equipes técnicas protegem uma exportação, relacionar essas decisões às obrigações sobre dados pessoais e especificar testes de circulação e recuperação. A aprendizagem precisa produzir decisões justificadas, sem exigir administração corporativa pelo usuário comum.

### Load Breakdown

**Intrinsic Load: High**

- A decisão DLP completa relaciona aproximadamente seis elementos: conteúdo/rótulo, destinatário, cobertura, exceção, estado da política e efeito. A quantidade é uma descrição da tarefa, não medição da capacidade dos estudantes.
- Os papéis legais e organizacionais exigem duas classificações diferentes. O problema não está em incluir ambas, mas em apresentar sua relação explicitamente.
- Recuperação exige distinguir versão utilizável, perda temporal, duração, credenciais e função restaurada. A complexidade é necessária ao objetivo; não deve ser removida.

**Extraneous Load: Medium**

- A comparação entre coluna oculta e exportação mínima está distante do arquivo que lhe dá sentido. Isso exige recuperar mentalmente campos e finalidade depois de LGPD, estados e permissões.
- A Figura 2 aparece após ocultação, embora represente disco, canal e processo: o leitor procura uma relação que aquele bloco não explica.
- A classificação por formato abre o primeiro bloco técnico antes da exportação concreta; termos estruturado/semiestruturado/não estruturado competem com a pergunta principal.
- O projeto de backup pede frequência compatível com perda tolerável antes do exemplo que ensina RPO/RTO.
- A primeira orientação para preencher o registro exige todos os destinos antes de seus mecanismos terem sido apresentados.
- A passagem entre especificação D1–D5 e piloto Purview pode induzir a expectativa de que o piloto implementa todas as linhas, embora o próprio texto esclareça depois a lacuna de D4.

**Germane Load: High**

- Comparar acesso permitido/negado/revogado, simulação/aplicação e restauração prevista/observada constrói critérios de validação transferíveis.
- Perguntar qual informação adicional falta e recusar inferir autorização por ausência de bloqueio preserva dificuldade produtiva.
- Os exemplos completos permitem estudar antes de decidir a extensão. É adequado conservar tabelas, textos explicativos e alternativas documentais.

### Overall Assessment

A versão atual já responde substancialmente às críticas iniciais: responsabilidades estão explícitas, DLP começa por uma tentativa de envio e há configurações concretas. Não é necessária outra reescrita integral nem um enredo. O ganho principal vem de aproximar exemplos relacionados e ordenar pré-requisitos. Sem essas mudanças, o volume de remissões e alternâncias pode superar o repertório inicial de parte da turma; isso é uma hipótese de revisão, não diagnóstico medido.

## Mapa de reorganização aplicável hoje

Manter IDs existentes, figuras, links e uma única atividade. A mudança proposta é temática, não curricular.

| Ordem | Bloco e âncoras | Alteração concreta e motivo |
|---|---|---|
| 1 | `#responsabilidades` | Manter abertura, síntese, tabela funcional e procedimento do usuário. O leitor sabe desde o início quais exemplos executa e quais analisa como implementação de outra função. |
| 2 | `#classificacao`, `#tratamento-copias`, `#exportacao-minima` | Dentro de classificação, abrir pelo exemplo da exportação; depois explicar conteúdo, formato e impacto. Manter Figura 1 junto ao exemplo. O formato passa a explicar um objeto já conhecido. |
| 3 | `#ocultacao-exportacao`, `#transformacoes` | Mover a subseção de ocultação para imediatamente após o procedimento de exportação mínima; em seguida trazer o bloco inteiro de transformações, antes da LGPD. A comparação usa a mesma base sem exigir releitura de três blocos intermediários. |
| 4 | `#lgpd`, `#responsaveis-lgpd`, `#infracoes-consequencias` | Manter juntos fundamentos, agentes, direitos e consequências. Acrescentar encaminhamento de incidentes ao final. Não fragmentar as sanções em catálogo independente nem retirar os exemplos penais pedidos. |
| 5 | `#estados`, `#permissoes-drive` | Levar Figura 2 para depois da explicação de camadas e menor privilégio, antes de configurar Drive. Ela explica onde os controles atuam. Compartilhamento e Figura 9 continuam após o teste de permissões. |
| 6 | `#dlp` até `#reconhecimento-dlp` | Manter ordem atual: envio concreto → efeito → cobertura → D1–D5 → Figura 3 → mecanismos de reconhecimento. Não começar pelos classificadores nem antecipar todos os atributos na primeira frase. |
| 7 | `#implementacao-dlp`, `#purview` | Manter especificação funcional antes da plataforma. Tornar o objeto DOCX e as duas condições ligadas por E explícitos. Apresentar a limitação do piloto antes de seus passos, não somente depois. |
| 8 | `#recuperacao`, `#retencao-operacional` | Após síntese de recuperação, apresentar primeiro retenção operacional; depois comparação de sincronização/versionamento/snapshot/backup. Distingue a decisão de conservar da solução para voltar a funcionar. |
| 9 | Exemplo RPO/RTO e Figura 4; `#backup-operacional`, `#ensaio-restauracao` | Mover o exemplo completo RPO/RTO para antes dos parâmetros de implementação do backup. Manter Figura 11 com o projeto e o ensaio após ele. Frequência e duração agora têm critérios já compreendidos. |
| 10 | `#sintese`, `#atividade` | Fechar com responsabilidade e evidência, mantendo ponte para processos na A12. A atividade continua única, sem exigir execução de Purview. |

Não renumerar Figuras 1–11 ao mover blocos. Elas são identificadores estáveis, não uma exigência de ordem numérica estrita.

### Problem Areas

1. Registro completo solicitado cedo demais.
2. Duas taxonomias de responsabilidades podem ser confundidas apesar da definição correta.
3. Mascaramento é generalizado e pseudonimização carece de mecanismo mínimo de separação.
4. Piloto de produto parece equivalente à regra didática completa.
5. Recuperação apresenta parâmetro antes do exemplo necessário para entendê-lo.
6. Falta fechar o destino de uma suspeita e a diferença entre relato interno e comunicação legal.

### Modification Suggestions

#### 1. Completar o registro em etapas, mantendo seu modelo inteiro

**Problema:** “Preencha uma linha por destino relevante” entra antes de permissões, DLP e recuperação. **Princípio:** exemplo trabalhado e segmentação.

**Substituição exata sugerida no fim de `#tratamento-copias`:**

> O registro reúne as decisões que serão explicadas ao longo da página. Neste ponto, identifique objeto, finalidade, destino e responsável. Complete configuração e testes depois de estudar permissões e DLP; complete encerramento e recuperação nos blocos finais. O campo “resultado observado” permanece vazio até existir teste: uma previsão não é evidência de funcionamento.

Não abrir entregas novas. O texto pode anteceder ou suceder o link existente para o modelo.

#### 2. Ligar função interna e posição legal por uma pergunta respondida

**Problema:** nomes próximos sugerem equivalência de cargos e agentes. **Princípio:** comparação contrastiva localizada.

**Inserir após o exemplo de caracterização em `#responsaveis-lgpd`:**

> Quem configura a pasta é necessariamente o controlador? Não. Uma equipe de TI pode executar essa configuração dentro da organização que decide o tratamento. A função operacional explica quem realiza a tarefa; a posição legal depende de quem decide o tratamento e de quem atua em seu nome.

É um exemplo curto de relação, sem inventar personagens nem criar novo quadro repetindo todas as funções. Preservar a explicação sobre empregado e encarregado.

#### 3. Aplicar os dois fechamentos técnicos no ponto de comparação

**Problema:** conceitos podem ser memorizados com generalizações erradas. **Princípio:** distinguir casos próximos usando o mesmo objeto.

- Aplicar integralmente a correção técnica de mascaramento: síntese deve dizer que pode ocultar na consulta ou substituir valores na cópia; tabela deve nomear “Mascaramento na visualização”; texto explica dinâmico e estático sem acrescentar SQL.
- Após P07, explicar que a correspondência fica separada e com acesso mais restrito; entregar os dois conjuntos juntos anula a separação. Preservar outros atributos e impossibilidade de inferir anonimização automaticamente.
- Abrir `#transformacoes` com a escolha que a tabela resolve: “A contagem não precisa de contato; acompanhar a evolução de um registro pode exigir um identificador. A escolha começa pela informação necessária à tarefa.” A síntese continua existindo, mas não precisa repetir a frase de abertura em todos os seus itens.

#### 4. Materializar o anexo e segmentar a configuração Purview

**Problema:** o formato suportado e o rótulo exigem descoberta; o passo a passo mistura objeto, escopo, configuração e estado. **Princípio:** reduzir busca operacional e apresentar dependências antes da ação.

Usar o DOCX sanitizado proposto pelo root. Dizer junto ao download:

> Este documento contém os contatos artificiais da base e não possui rótulo de sensibilidade aplicado. No ambiente de teste, o administrador precisa disponibilizar o rótulo; uma conta autorizada o aplica em aplicativo compatível e confirma sua leitura antes de usar o documento no piloto.

Separar em três pequenos blocos: **Objeto e preparação**, **Campos da política**, **Estado e teste**. A tabela de campos deve conter Exchange, caixas de teste, rótulo restrito, compartilhamento externo, relação **E**, ação contra externos e sobreposição desabilitada, conforme auditor técnico e fonte do produto. Não adicionar capturas simuladas de interface.

**Inserir antes do preenchimento:**

> O piloto abaixo implementa o bloqueio de conteúdo restrito para destinatário externo, sem exceção individual. Ele permite testar D1–D3 sob essas premissas. D4 continua sendo requisito a implementar e validar separadamente; D5 verifica o limite de cobertura. Não declare a política completa com base apenas nesse piloto.

A regra didática D1–D5 deve permanecer completa; a limitação pertence à implementação, não à aprendizagem da exceção.

#### 5. Ajustar a instrução do piloto e adicionar contraprovas determinadas

**Problema:** “prever D1–D5” pode soar como ordem de executar uma exceção que não foi implementada. **Princípio:** coerência entre premissa, ação e evidência.

Reformular o passo 2: “Registrar a previsão para os casos implementados no piloto; identificar como não implementados os requisitos ainda ausentes. Quando houver mecanismo de exceção, testar também aprovação válida e expirada.” A análise documental continua permitindo decidir D1–D5.

Adicionar os dois testes pedidos pelo auditor técnico: arquivo com rótulo ilegível/ausente e destinatários internos e externos simultâneos. Especificar a pergunta de cada teste, sem prescrever resultado universal: “O que ocorre quando não se consegue reconhecer o rótulo?” e “Quem recebe a mensagem com os dois tipos de destinatário?”. Registrar previsão segundo a configuração e resultado observado. Não abrir nova lista de classificadores.

#### 6. Fechar incidente e conservação com contrastes curtos

**Problema:** responsabilidades legais reaparecem abstratamente no último parágrafo. **Princípio:** exemplo de encaminhamento com condição explícita.

Aplicar a tabela do auditor técnico (usuário → canal interno; operador → controlador; controlador → avaliação/comunicação à ANPD e titulares quando aplicável; encarregado/representante → canal formal em nome do controlador). Não representar uma cadeia obrigatória em que todo caso necessariamente passa por operador e termina na ANPD. Manter a condição de risco ou dano relevante e a distinção entre suspeita, alerta e incidente. O resumo não precisa incluir prazo numérico; se incluído, exige ressalvas apontadas na auditoria.

Em retenção, trocar a frase genérica por dois resultados:

- Cópia temporária sem necessidade remanescente: executar o descarte autorizado.
- Registro ainda sujeito à conservação: retirar acessos de uso encerrado, manter sob a regra aplicável e registrar o motivo.

Não acrescentar prazo legal hipotético.

#### 7. Fechar a síntese com responsabilidade e preservar legibilidade

Acrescentar à síntese final um item: “Indique quem aprova, quem configura e quem verifica; o usuário precisa conhecer seu procedimento e seu canal de apoio.” A redação final deve permitir descrever uma configuração sem atribuir sua execução ao estudante.

Na tabela das esferas de consequência, impedir quebra dentro de “Administrativa” no CSS ou ajustar largura da primeira coluna. Em tela pequena, permitir rolagem da tabela quando necessário, mantendo as palavras inteiras; não reduzir globalmente a fonte. Confirmar também que as tabelas maiores podem ser lidas por teclado e não fazem a página inteira transbordar.

## Exemplos, ilustrações e redução de repetição

**Não há necessidade de nova figura além das já previstas.** As Figuras 1–4 explicam cópias, fronteiras, decisão DLP e intervalos; os prompts 9–11 cobrem revogação, simulação/aplicação e restauração. As mudanças requeridas agora são relações curtas que funcionam melhor em tabela e exemplos contrastivos. Um novo fluxograma de responsabilidades arriscaria sugerir aprovação sequencial obrigatória para todo arquivo, e um novo fluxograma legal poderia sugerir comunicação automática à ANPD. Portanto, não reservar números 12/13 sem necessidade; nenhum novo prompt é recomendado nesta revisão.

Reduções que preservam conceitos:

- Após mover ocultação, manter sua tabela e decisão; eliminar sua recapitulação final se repetir integralmente a verificação imediatamente anterior.
- Em classificação, trocar a nova definição longa de proprietário/custodiante por remissão curta à tabela de responsabilidades; preservar a distinção em relação ao titular.
- Manter a advertência de que rótulo não é nome de arquivo no primeiro exemplo DLP e uma lembrança curta na preparação do piloto, sem repeti-la integralmente em três blocos.
- Usar uma única explicação desenvolvida de que download permanece; nos testes e retenção basta registrar o limite local.
- Não retirar exemplos penais, contraprovas, alternativas documentais, textos de estudo ou procedimentos para caber em tempo ainda não reavaliado.

## Alinhamento com a atividade

A atividade já exige os responsáveis e não demanda uma ferramenta licenciada. Preservar enunciados e rubrica. O item 1 da Parte A, porém, concentra muitas operações num parágrafo. Apresentá-lo como três aspectos a responder no mesmo bloco do parecer: **conteúdo e finalidade**, **acesso e responsáveis**, **encerramento e limite**. Não aumentar quantidade de produtos nem abrir tarefas separadas.

Não incluir a tabela de encaminhamento de incidentes como nova entrega obrigatória. Ela explica responsabilidade e fornece apoio para a reflexão, sem converter A11 em avaliação jurídica. Na revisão rápida, acrescentar ou substituir uma pergunta para verificar diretamente quem decide e quem configura, sem exigir memorização de penas.

### Expertise Reversal Check

Os exemplos trabalhados são apropriados ao nível informado. Estudantes com experiência podem começar pelas contraprovas e consultar os passos de plataforma quando necessário; a organização por âncoras permite essa navegação sem criar dois percursos obrigatórios. Não presumir que conhecimentos gerais de acesso equivalem a experiência de administração de DLP. O suporte deve diminuir nas extensões, não no primeiro exemplo.

## Critérios de conclusão da revisão

1. O leitor identifica seu papel antes de receber instruções operacionais.
2. O exemplo de ocultação está junto da exportação, e a Figura 2 está junto das camadas que representa.
3. A comparação de transformações incorpora as correções técnicas.
4. O anexo do piloto existe e seu estado sem rótulo está explícito; condições, relação E e limites da implementação estão claros.
5. Não se pede testar D4 como implantado enquanto seu mecanismo estiver ausente.
6. RPO/RTO precedem parâmetros de frequência/recuperação.
7. A suspeita tem encaminhamento interno claro e a comunicação legal mantém sua condição.
8. As responsabilidades aparecem na síntese e na atividade sem criar nova entrega.
9. Build estrito e revisão desktop/mobile preservam figuras, IDs, tabelas e links.

**Parecer:** aplicar as mudanças locais acima. O material tem base suficiente; o ajuste necessário é de sequência, ligação e fechamento operacional, não de expansão indiscriminada. Não há fundamento nesta revisão para declarar a edição compatível com 100 minutos.

## Adendo — procedimentos LGPD e DLP empresarial, nuvem e indústria

**24 set. 2026, revisão sequencial posterior à aprovação técnica dos novos blocos.** Foram lidos o adendo técnico, os relatórios `procedimentos-lgpd-fontes.md` e `pesquisa-mercado-dlp.md` e os blocos públicos atuais, incluindo suas entradas e saídas. A primeira reorganização foi aplicada: exportação/ocultação/transformações estão próximas; Figura 2 acompanha as camadas; o projeto de backup sucede RPO/RTO; piloto e regra completa estão distinguidos. As recomendações anteriores de mapa não devem ser reaplicadas como outra reestruturação. O marco de cinco anos a partir do registro já está correto na edição examinada.

### Parecer sobre a progressão ampliada

A sequência **regra concreta → configuração → operação organizacional → soluções → nuvem → aplicação industrial → alternativas** é didaticamente adequada. O estudante conhece a pergunta antes de encontrar marcas. Os exemplos de descoberta em S3 e de CAD/PDF têm função: mostram limites de evidência e de transferência de uma configuração. Não há necessidade de mais produtos, taxonomias, sanções ou tarefas. A robustez da nova edição pede quatro ajustes locais de apresentação e uma ilustração de pontos de controle; não exige reorganização geral ou estimativa de duração.

A carga intrínseca continua alta: compreender uma plataforma não basta para comparar seus canais, formatos e ações. A carga extrínseca aumentou especialmente no quadro de 12 procedimentos com quatro colunas e na interrupção da explicação empresarial por uma comparação bibliográfica. Rolagem por teclado resolve acesso físico à tabela, mas não substitui sua segmentação conceitual.

### Ajustes concretos prioritários

**1. `#procedimentos-lgpd`: começar pela rotina, segmentar o quadro sem perder condições.**

A frase sobre o portal ANPD é de procedência, não explica o problema ao estudante. Abrir com o segundo parágrafo atual, “Ao proteger uma cópia...”; colocar a referência ao portal junto da apresentação das fontes após o quadro. Mover o exemplo de conexão do CSV para antes da tabela: ele mostra por que aquelas rotinas existem. Para evitar antecipar a sigla, trocar nesse exemplo “não precisa elaborar sozinho um RIPD...” por “não precisa elaborar sozinho relatórios de impacto, escolher uma base legal ou protocolar comunicação na ANPD”.

Dividir a tabela existente em dois quadros de seis linhas, com as mesmas quatro colunas, todos os responsáveis, condições, ressalvas e fontes preservados:

- **Preparar e manter o tratamento:** primeiras seis linhas, de definir finalidade a indicar encarregado/manter canal. Acrescentar frase: “As linhas têm condições próprias; esta organização não transforma todas elas em obrigações universais.”
- **Responder a pedidos, ocorrências e situações específicas:** últimas seis linhas, de receber pedidos a transferência internacional. Acrescentar frase: “Localize a situação que ocorreu; nem todas essas rotinas serão acionadas em cada tratamento.”

Manter wrappers acessíveis separados, com rótulos que identifiquem o grupo. Não transformar os doze procedimentos em uma sequência numerada obrigatória. Na primeira linha sobre RIPD escrever **“Relatório de Impacto à Proteção de Dados Pessoais (RIPD)”**; em seguida a sigla basta. “Relatório de impacto” na evidência pode permanecer curto.

O parágrafo “Os detalhes de prazo abaixo apoiam...” deve vir **antes de “Prazos dependem do procedimento”**, para enquadrar também os 15 dias, e não apenas o prazo de incidente. Preservar em texto todas as condições e o marco do registro. Não criar atividade de memorização dos prazos.

**2. `#dlp-empresarial`: explicar o funcionamento antes de comparar leituras.**

A abertura já faz a ponte certa com o anexo. Manter o parágrafo sobre programa versus produto logo depois dessa abertura; então apresentar “Onde implantar”, a tabela de pontos de atuação e o parágrafo de operação contínua. Mover a tabela **“Três leituras complementares...”** para o fim da seção, depois da pergunta de conferência. Isso conserva as três fontes solicitadas e suas contribuições sem interromper o primeiro encadeamento da explicação.

A tabela inicial de cobertura DLP e a nova de implantação não precisam ser fundidas: a primeira ensina a condição da regra; a segunda prepara arquitetura e comparação de soluções. Evitar, porém, acrescentar outra definição integral de cobertura. Uma ligação suficiente é: “Os limites de cobertura já vistos passam a orientar quais componentes a organização precisa implantar.”

**3. `#solucoes-dlp` e `#dlp-nuvem`: usar o critério já conhecido e esclarecer o objeto novo.**

A tabela de seis marcas pode permanecer como consulta comparativa, com síntese e exemplo condicionado existentes. Introduzir antes dela: “Para ler a comparação, escolha primeiro uma operação — por exemplo, envio externo de anexo — e verifique uso e dependência correspondentes. Não é necessário memorizar a lista de marcas.” Isso direciona a leitura para o requisito e evita transformar a comparação em inventário para decorar.

Na entrada de nuvem, antes da tabela, esclarecer em uma frase: “Amazon S3 armazena arquivos e seus metadados como objetos em repositórios chamados buckets; aqui basta acompanhar um desses arquivos.” Não exigir console, criação de bucket nem vocabulário de arquitetura AWS. O exemplo posterior usa esse objeto para discutir acesso, não para iniciar um laboratório de nuvem.

No fim do exemplo S3, acrescentar uma contraprova curta: **“Se o achado surgiu hoje, ele informa se o arquivo foi baixado ontem? Não; essa conclusão exige registros e análise de acesso do período.”** Ela torna concreto o limite já afirmado sem pedir evidências que a página não fornece.

**4. `#dlp-industria` e `#alternativas-dlp`: preservar transferência e fechar com decisão específica.**

O exemplo CAD/PDF já é suficiente e deve ser preservado. Acrescentar só uma comparação explícita depois dele: **“O dado autorizado para o fornecedor é a versão aprovada; o teste deve distinguir sua entrega legítima da tentativa de entregar o projeto completo.”** Isso evidencia a contraprova sem inferir que bloquear qualquer CAD seja a regra universal.

A honestidade sobre adoção está correta. Não promover as fontes de engajamento ou avaliação comercial a evidência de instalações. Não expandir o exemplo para CLP/supervisório.

Em alternativas sem suíte, a combinação trabalhada é útil e já conecta usuário/gestor/custodiante. Não pedir um novo projeto. Manter a transição que distingue minimização, permissões, DLP e backup antes de recuperação; ela impede ler a sequência como uma lista de produtos substituíveis.

### Nova ilustração recomendada: localização do controle

Com a ampliação, passa a existir uma relação espacial ainda não representada pelas figuras anteriores: **o mesmo tipo de arquivo pode circular por caminhos independentes, com observação e efeito em pontos distintos**. Figura 3 explica uma decisão e Figura 10 explica o estado de uma política; nenhuma localiza os pontos de atuação. Recomendo um único prompt novo, Figura 12, após a tabela “Onde implantar”. A ilustração deve complementar a tabela, não acrescentar catálogo de produtos.

PROMPT ILUSTRATIVO FIGURA 12 = "Crie uma ilustração didática em português, horizontal 16:9, fundo claro, alto contraste e letras grandes, com três faixas horizontais independentes. Título: ONDE O CONTROLE ATUA. Em todas as faixas use um ícone simples de arquivo rotulado arquivo de teste, sem dados reais. Faixa 1: arquivo → serviço de e-mail com ponto de controle DLP → destinatário externo; junto ao ponto escreva envio coberto, e mostre uma tentativa impedida com o rótulo ação configurada: bloquear. Faixa 2: arquivo no dispositivo administrado com agente → mídia removível; marque o controle no próprio dispositivo e escreva operação local suportada e regra de teste: bloquear cópia. Faixa 3: arquivo já armazenado em repositório → análise de conteúdo → achado para revisão; escreva descoberta localiza conteúdo; não comprova bloqueio do acesso. As três faixas são exemplos separados, não etapas consecutivas, e não devem ter setas ligando uma à outra. No rodapé escreva: exemplos condicionados a configuração, formato e cobertura; nenhum ponto protege automaticamente todos os caminhos. Não use marcas, logotipos, telas falsas, escudo central, personagens ou uma seta que faça o achado apagar ou bloquear automaticamente o arquivo. Diferencie ação de bloqueio e achado por texto e símbolos, sem depender apenas de cor."

**Legenda de apoio sugerida quando recebida:** “Figura 12 — O ponto de controle limita o que pode ser observado e impedido. Os caminhos são exemplos independentes: controlar e-mail, operação local e descoberta em armazenamento exige componentes e verificações próprios.” Até a imagem ser fornecida, o prompt fica no padrão usado pelo curso; a tabela e o texto conservam a compreensão completa.

Não recomendo figura para os doze procedimentos legais: um fluxograma poderia criar obrigação sequencial falsa. Sua relação é condicional e comparativa, mais bem atendida pelos dois quadros. Não inserir outra figura para marcas ou ranking de mercado.

### Verificação de aplicação

- Preservar todos os IDs e fontes dos cinco blocos novos, bem como a seção de alternativas.
- Confirmar as duas tabelas LGPD com cabeçalhos repetidos, condições intactas e nomes legíveis; rolagem fica dentro de cada região.
- Confirmar que “RIPD” e “objeto S3” recebem explicação antes de uso autônomo.
- Conferir que a comparação de fontes continua presente, após a explicação de implantação.
- Numerar apenas o novo prompt como 12; não mover a numeração dos prompts 9–11 nem presumir figura recebida.
- Nenhum novo requisito de execução ou entrega é necessário. A atividade atual já verifica conteúdo, responsabilidade, regra, cobertura e limite; os novos exemplos ampliam transferência e consulta.

**Conclusão do adendo:** ampliação aprovada pedagogicamente com os ajustes locais acima. O conteúdo operacional e legal continua exigente, mas passa a organizar essa complexidade por decisões identificáveis. A adequação temporal permanece deliberadamente pendente, conforme solicitação docente.

## Registro de aplicação pelo editor

Recomendações da revisão inicial e dos adendos aplicadas à A11 em 24 set. 2026. Preservados objetivos, atividade única, figuras existentes e distinção entre procedimento documentado e teste executado. Ver `validacao-producao.md` para as verificações finais.
