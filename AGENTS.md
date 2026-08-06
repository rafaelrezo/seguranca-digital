# Diretrizes para Criação e Revisão do Curso de Segurança Digital

Estas instruções orientam todo conteúdo criado ou revisado neste repositório. O curso deve ser desenvolvido a partir de problemas observáveis, experimentação segura e situações profissionais verossímeis. A teoria entra quando ajuda o estudante a explicar uma evidência, tomar uma decisão ou melhorar uma solução.

## 1. Princípio pedagógico central

- Começar cada unidade por uma situação concreta: comportamento inesperado, incidente, evidência, decisão de negócio ou desafio técnico.
- Usar prioritariamente o **OWASP Juice Shop** como aplicação vulnerável condutora da trilha web.
- Introduzir conceitos no momento em que forem necessários para investigar, explicar, explorar de forma controlada, corrigir ou comunicar o problema observado.
- Encerrar cada ciclo com um produto verificável: evidência, configuração, código corrigido, diagrama, registro de risco, alerta, relatório ou apresentação curta.
- Conectar cada atividade a funções reais, como desenvolvimento, operações, defesa, auditoria, resposta a incidentes, gestão de riscos e segurança industrial.
- Evitar longos blocos expositivos antes do primeiro contato do estudante com o problema.

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

### 2.1 Pacote obrigatório de cada aula

Cada aula ou encontro planejado deve formar um pacote coerente com três artefatos complementares:

1. **Apresentação em slides:** apoio visual para mediação do professor, demonstrações, perguntas e sínteses.
2. **Página no MkDocs:** âncora permanente do estudante, com fundamentos, exemplos, referências e materiais para consulta posterior.
3. **Roteiro prático em PDF:** atividade autocontida para distribuição no Google Classroom, com desafio, execução, evidências e entrega.

Os três artefatos devem compartilhar título, identificador, objetivos e cenário, mas não repetir integralmente o mesmo texto. Antes de criar qualquer um deles, definir uma ficha-base com:

- identificador e título da aula;
- conteúdo programático atendido;
- objetivos observáveis;
- carga teórica e prática;
- cenário e pergunta mobilizadora;
- pré-requisitos e infraestrutura;
- evidência de aprendizagem;
- critérios de conclusão;
- referências essenciais.

Alterações relevantes em objetivos, comandos, arquitetura ou critérios de entrega devem ser refletidas nos três artefatos do pacote.

### 2.2 Função de cada artefato

| Artefato | Função principal | Deve privilegiar | Deve evitar |
|---|---|---|---|
| Slides | Conduzir a experiência síncrona | Narrativa, imagens, diagramas, perguntas, demonstrações e sínteses | Parágrafos longos e conteúdo suficiente para substituir a aula |
| MkDocs | Sustentar estudo e consulta | Explicações, glossário contextual, exemplos, aprofundamentos e fontes oficiais | Ser mera transcrição dos slides |
| PDF prático | Orientar ação e entrega | Contexto, regras, etapas, decisões, evidências, critérios e encerramento | Revelar respostas, depender da fala do professor ou conter teoria extensa |

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

- Criar uma apresentação para cada aula ou encontro, alinhada à ficha-base do pacote.
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

Uma sequência típica, adaptável ao encontro, é:

1. provocação ou evidência inicial;
2. cenário e missão;
3. previsão dos estudantes;
4. demonstração ou observação;
5. explicação conceitual em blocos curtos;
6. nova decisão ou aplicação;
7. síntese e ponte para a prática.

### 5.2 Roteiros práticos em PDF

- Produzir uma fonte editável versionada e sua versão PDF para cada prática distribuída no Google Classroom.
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
- Definir no PDF exatamente o que será enviado pelo Google Classroom, em qual formato e com qual convenção de nome.
- Manter a rubrica breve o suficiente para orientar a execução e específica o suficiente para permitir devolutiva consistente.

## 8. Estilo de escrita

- Escrever em português claro, objetivo e tecnicamente preciso.
- Adotar tom de professor especialista próximo da prática profissional.
- Explicar na ordem **evidência → conceito → impacto → ação → validação**.
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
- Manter apresentações e atividades sempre fora de `docs/`, em árvores próprias na raiz do repositório. Não criar cópias desses arquivos em subdiretórios publicáveis do MkDocs.
- Organizar slides e atividades por aula, usando o mesmo identificador estável adotado na página teórica correspondente.
- Manter fontes editáveis de apresentações e práticas sob controle de versão; não tratar PDF exportado como única fonte.
- Armazenar os PDFs destinados ao Google Classroom somente na árvore de atividades, sem incluí-los na navegação ou no artefato do MkDocs.
- Quando forem criados materiais docentes, respostas ou arquivos operacionais, armazená-los em área não publicada e confirmar que não entram na navegação nem no artefato do MkDocs.
- Manter gabaritos, notas de facilitação sensíveis e soluções em diretório docente claramente separado dos materiais distribuídos.
- Reutilizar um cenário entre módulos quando isso mostrar evolução; evitar duplicar a mesma explicação em várias páginas.
- Atualizar `mkdocs.yml` quando páginas forem incluídas, removidas ou reorganizadas.
- Verificar links internos, imagens, vídeos, comandos e arquivos citados.

### 13.1 Estrutura obrigatória por aula

Usar a seguinte organização como padrão:

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
- Usar o mesmo identificador nos três artefatos para permitir associação imediata entre MkDocs, slides e atividade.
- Colocar em `slides/.../fonte/` o arquivo editável da apresentação e em `slides/.../exportados/` apenas versões derivadas para apresentação ou distribuição.
- Colocar em `atividades/.../fonte/` o documento editável e em `atividades/.../pdf/` o PDF final destinado ao Google Classroom.
- Manter imagens e outros recursos específicos em `assets/` dentro da pasta da respectiva aula. Compartilhar um recurso global somente quando houver reutilização real.
- Usar o `README.md` de cada pasta para registrar título, objetivos, página MkDocs relacionada, arquivos principais e procedimento de geração dos exportados.
- Não criar links, entradas de navegação ou processos de cópia que levem `slides/`, `atividades/` ou `docente/` para o diretório de saída do MkDocs.

## 14. Checklist antes de publicar

- [ ] A página começa por um problema, evidência, caso ou decisão significativa.
- [ ] Os objetivos são observáveis e estão ligados ao conteúdo programático.
- [ ] A teoria aparece conectada à investigação ou à intervenção.
- [ ] Há participação ativa do estudante e pelo menos um ponto de decisão.
- [ ] A atividade produz evidência verificável de aprendizagem.
- [ ] O pacote possui slides, página MkDocs e PDF prático coerentes entre si.
- [ ] Os slides são visuais, legíveis e incluem participação dos estudantes.
- [ ] O MkDocs contém a base teórica e as referências necessárias para consulta.
- [ ] O PDF é autocontido, instigante e define evidências, entrega e critérios de sucesso.
- [ ] Fontes editáveis e artefatos exportados estão identificados corretamente.
- [ ] Slides e atividades estão fora de `docs/` e organizados na pasta da aula correspondente.
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
