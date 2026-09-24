# Revisão especializada de proteção de dados — A11

**Data:** 24 set. 2026. **Objeto:** edição ampliada de `docs/aulas/A11-protecao-de-dados.md`, lida integralmente, confrontada com a atividade integrada, o registro de controles, plano A11, planejamento integrado e arquitetura. Revisão conceitual e operacional; não houve teste em tenant nem alteração pública pelo revisor.

## Parecer

O material agora entrega soluções pragmáticas, e não apenas nomes de controles. A divisão usuário/gestor/TI/segurança/privacidade responde à crítica docente. Os procedimentos identificam executores e distinguem permissão técnica de autoridade organizacional. Não identifiquei erro crítico que invalide os exemplos centrais ou os cálculos. A seção legal distingue corretamente agentes, encarregado, sanção administrativa, reparação civil e crime previsto em outra lei. Não há motivo para ampliar o catálogo penal.

Recomendo corrigir duas simplificações de transformações, fechar o encaminhamento de incidentes e tornar mais determinada a preparação do exemplo Purview. Os pontos abaixo são pequenos em extensão, mas evitam interpretações incorretas. Não exigem inventar uma empresa nem limitar a duração da edição.

## Achados e correções recomendadas

### 1. Prioridade alta — mascaramento não é sempre alteração somente da apresentação

**Local:** `#transformacoes`, síntese “Mascaramento altera a apresentação” e tabela de técnicas.

**Problema:** a definição generaliza o caso de mascaramento dinâmico/visual. Também existe mascaramento estático que substitui valores na cópia. Isso pode levar o estudante a concluir que qualquer máscara deixa o valor integral no arquivo entregue, apesar da discussão correta sobre coluna oculta.

**Correção exata sugerida:** substituir o item por “Mascaramento pode ocultar valores na consulta ou substituí-los em uma cópia; é preciso verificar onde o original permanece”. Na tabela, nomear o exemplo “Mascaramento na visualização”. Acrescentar após a tabela: “No mascaramento dinâmico, a consulta pode mostrar valores parciais sem alterar a base. No mascaramento estático, os valores de uma cópia são substituídos. Em ambos, confirme se o resultado ainda permite associação e onde o original fica acessível; mascarar não comprova anonimização.” Não é necessário ensinar SQL nem criar nova prática.

**Base:** documentação primária [Microsoft — Dynamic Data Masking](https://learn.microsoft.com/en-us/sql/relational-databases/security/dynamic-data-masking?view=sql-server-ver17), inclusive exportações que persistem valores mascarados. O [registro histórico oficial de mascaramento estático](https://azure.microsoft.com/en-us/blog/static-data-masking-preview/) serve para a distinção conceitual, não para recomendar um recurso atual em preview.

### 2. Prioridade alta — falta fechar quem comunica incidente a quem

**Local:** `#infracoes-consequencias`, parágrafo final “Consequência prática para o usuário”; tabela de responsáveis legais.

**Problema:** a orientação de comunicar internamente está correta. Porém, depois de explicar os agentes e as sanções, “responsáveis legais avaliam as obrigações cabíveis” deixa abstrata a obrigação mais diretamente ligada à proteção de dados. Pode parecer que qualquer incidente é automaticamente comunicado à ANPD pelo usuário ou que basta reportar à autoridade, sem atender os titulares.

**Correção sugerida:** incluir um pequeno quadro de encaminhamento, sem novo catálogo normativo:

| Quem | Encaminhamento |
|---|---|
| Usuário | Comunica prontamente a suspeita ao canal interno, informa o necessário e segue a orientação recebida; não espera definir crime ou provar o vazamento |
| Operador | Informa o controlador sem demora injustificada e fornece as informações necessárias |
| Controlador | Avalia o incidente e, quando puder acarretar risco ou dano relevante aos titulares, cumpre a comunicação à ANPD e aos titulares, nos termos legais |
| Encarregado ou representante autorizado | Executa o canal formal em nome do controlador; a obrigação não é transferida integralmente para a pessoa que envia o formulário |

Acrescentar um contraste de duas frases: incidente com dados pessoais pode envolver alteração ou indisponibilidade, não apenas exposição; nem todo alerta ou vulnerabilidade já comprova incidente. A comunicação interna de uma suspeita não depende da conclusão dessa apuração.

**Sobre prazo:** é suficiente remeter à regra oficial nesta visão geral. Se o material incluir o número, usar “regra geral de três dias úteis a partir do conhecimento pelo controlador de que o incidente afetou dados pessoais, ressalvados os regimes e prazos específicos aplicáveis”; não apresentar como prazo para o usuário esperar antes de avisar. A Resolução 15 contém condições específicas e contagem em dobro para agentes de pequeno porte nos termos regulamentares. Evitar prazo universal sem essa ressalva.

**Fontes:** [LGPD, art. 48](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm); [ANPD — comunicação de incidente, orientações e perguntas frequentes](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis); [Resolução 15/2024 no acervo do Ministério da Justiça](https://dspace.mj.gov.br/bitstream/1/12879/1/RES_ANPD_2024_15.pdf). A página ANPD foi acessível nesta revisão.

### 3. Prioridade média — o exemplo Purview deixa o objeto e alguns campos para descoberta

**Local:** `#purview`, preparação e preenchimento comentado.

**Problema:** o texto já avisa corretamente que CSV não ganha rótulo automaticamente, distingue plataformas independentes e admite configuração não implementada. Ainda assim, o único arquivo de contatos concretamente fornecido é CSV, enquanto o piloto por rótulo requer formato suportado; “rótulo previamente criado/publicado” não torna claro o que será rotulado. “Combine com destinatário externo” também não mostra os campos e a relação lógica com precisão suficiente para repetir a configuração.

**Correção sugerida:** definir explicitamente um anexo `.docx` ou `.xlsx` de teste contendo os contatos artificiais, rotulado no aplicativo compatível, e confirmar a leitura desse rótulo no item analisado. Não distribuir uma planilha real nem rotular o CSV por nome. Mostrar uma tabela curta com: local Exchange; conteúdo contém → rótulo restrito de teste; condição de compartilhamento fora da organização; relação **E** entre condições; ação de impedir recebimento pelos externos; sobreposição pelo usuário desabilitada. Manter o aviso de que D4 não foi implementado nessa política inicial. Vincular a documentação específica de formatos/rótulos além do exemplo genérico.

Para não afirmar capacidade inexistente, separar o que está especificado do que exige preparação: criação/publicação do rótulo e validação de conta/licença são pré-requisitos do administrador, não ações já executadas. A alternativa documental pode mostrar o objeto `.docx` e seu rótulo como premissas, sem simular tela de produto.

**Fontes:** [Microsoft — rótulos como condições DLP e formatos suportados](https://learn.microsoft.com/en-us/purview/dlp-sensitivity-label-as-condition); [Microsoft — criação de política de e-mail](https://learn.microsoft.com/en-us/purview/dlp-create-policy-cc-email). Não recomendo trocar todos os exemplos para uma só suíte; a independência Drive/Purview já está clara.

### 4. Prioridade média — pseudonimização precisa de um mecanismo mínimo de separação

**Local:** `#transformacoes`, linha “Substituir identificação direta por P07” e explicação seguinte.

**Problema:** a página pergunta corretamente quem acessa a correspondência e rejeita anonimização automática, mas ainda pode dar a impressão de que renumerar a coluna é uma proteção suficiente.

**Correção exata sugerida:** após o exemplo P07, inserir: “Se for necessário manter uma tabela que liga P07 à pessoa, conserve essa correspondência separada e com acesso mais restrito que o conjunto usado na análise. Entregar a tabela de correspondência junto do conjunto anula essa separação. Outros atributos ainda podem permitir associação.” Manter a advertência jurídica existente; não afirmar que o dado pseudonimizado sai da LGPD.

**Base:** [NIST — pseudonymization](https://csrc.nist.gov/glossary/term/pseudonymization) e [NIST IR 8053](https://csrc.nist.gov/pubs/ir/8053/final). É um fechamento operacional, não pedido de capítulo de técnicas de anonimização.

### 5. Prioridade média — acrescentar duas contraprovas à política de envio, sem aumentar o catálogo

**Local:** “Do piloto ao bloqueio” e “Diagnosticar uma decisão diferente da esperada”.

**Problema:** D1–D5 cobrem corretamente regra, uso legítimo, exceção e canal. Mas o salto para o piloto real deixa de testar duas condições ligadas aos limites já discutidos: arquivo sem rótulo legível e envio com destinatários internos e externos simultaneamente.

**Correção sugerida:** inserir dois casos de validação do administrador: (a) arquivo restrito cujo rótulo não pôde ser reconhecido — verificar comportamento configurado e registrar a lacuna, sem tratar ausência de correspondência como público; (b) mensagem com destinatário interno autorizado e externo não aprovado — verificar exatamente quem recebe conforme a ação escolhida. Não inventar resultado universal para o produto; exigir previsão a partir da configuração e comparação. São testes de cobertura e granularidade da ação, não novas tarefas no Classroom.

**Base:** capacidade e ação dependem do item e local na documentação Microsoft já citada no item 3. Esta é recomendação de cobertura de teste, não afirmação de defeito comprovado na plataforma.

### 6. Prioridade baixa — conectar retenção aprovada a uma decisão antes/depois

**Local:** `#retencao-operacional`.

**Problema:** não há erro conceitual. A separação entre revogação, exclusão ativa e expiração de backup é forte; correções/restrições reaplicadas após restauração já estão previstas. Falta somente um exemplo que mostre o resultado quando existe obrigação de conservar, para evitar o aluno assimilar “encerrar = apagar”.

**Correção opcional:** duas linhas comparativas: “Cópia temporária sem necessidade remanescente: executar descarte autorizado”; “Registro cuja conservação continua exigida: retirar acesso de uso que deixou de ser necessário, conservar sob a regra aplicável e registrar o motivo”. Não definir prazo legal. Esse contraste pode substituir uma frase genérica existente, sem adicionar mais seção ou imagem.

## Pontos verificados que devem ser preservados

- Usuário comum não é automaticamente operador legal; gestor organizacional não é automaticamente controlador; encarregado não é responsável universal.
- LGPD não cria crime genérico de vazamento. As penas básicas apresentadas para os arts. 154 e 154-A e a distinção entre multa administrativa e pena criminal estão adequadas ao resumo; não é necessário mais catálogo criminal.
- Multa simples: percentual/teto não são automáticos; distinção do regime de entidades públicas preservada.
- Dados sensíveis e rótulo restrito não são equivalentes; consentimento não é base obrigatória universal; dados artificiais não são apresentados como dados reais.
- Revisão de agregado não presume anonimização; grupo pequeno já é reconhecido como risco de associação.
- “Restrito” no nome não equivale a rótulo; política escrita não equivale a implantação; correspondência/alerta não equivalem a bloqueio; simulação é corretamente distinguida de aplicação.
- D4 específico não se confunde com exclusão ampla de conta. A lacuna de validade temporal na implementação inicial já está explicitamente declarada.
- Revogação de link não recolhe download. Conta proprietária não serve de contraprova. Grupos e herança entram no acesso efetivo.
- Backup não equivale a sincronização; três pastas no mesmo disco não são apresentadas como proteção à perda física. Dependências de credenciais e chaves estão previstas. Cálculos e distinção RPO/RTO estão corretos.
- A atividade não pede executar produto licenciado em casa nem inventar base legal ou evidência observada; solicita responsáveis, implementação, contraprovas e limite.

## Encaminhamento ao especialista pedagógico

Aplicar sobretudo itens 1–4. Avaliar se o quadro de encaminhamento do item 2 se comunica melhor em tabela ou figura, preservando os dois níveis: operação interna e obrigação legal. Uma figura não deve sugerir que todo caso vai automaticamente à ANPD. Não é necessária nova imagem para os ajustes de mascaramento ou retenção; exemplos contrastivos curtos bastam. A extensão e a ordem geral são decisões pedagógicas, não erros técnicos. O material não precisa de mais siglas, plataformas ou categorias penais para ganhar robustez.

## Adendo — procedimentos LGPD e ampliação empresarial de DLP

**24 set. 2026, revisão estreita posterior à incorporação.** Foram lidos os relatórios `procedimentos-lgpd-fontes.md` e `pesquisa-mercado-dlp.md` e as seções públicas `#procedimentos-lgpd`, `#dlp-empresarial`, `#solucoes-dlp`, `#dlp-nuvem` e `#dlp-industria`. As seis recomendações da revisão inicial já foram atendidas na edição atual. Nenhuma página pública foi editada pelo revisor.

**Parecer:** não identifiquei erro material nos acréscimos. Pode seguir à revisão pedagógica. As obrigações gerais e condicionais estão separadas, pequeno porte não é tratado como dispensa automática, os prazos não foram generalizados para todos os direitos e a comunicação de incidentes conserva o gatilho correto. RIPD não é apresentado como envio universal obrigatório. Os registros de operação, acesso e incidente são diferenciados.

**Um ajuste de precisão recomendado, sem bloqueio da revisão pedagógica:** na frase sobre conservação do registro de incidente, escrever “mínimo de cinco anos **a partir da data do registro**”. A ausência do marco não torna o prazo informado falso, mas deixa incompleta sua operacionalização. A ressalva existente para obrigações adicionais e entidades públicas deve permanecer. Fonte conferida: [Resolução 15/2024, art. 10](https://bibliotecadigital.mj.gov.br/bitstream/1/12879/2/RES_ANPD_2024_15.html).

**Pontos técnicos confirmados:**

- Programa organizacional não se confunde com capacidade de produto. A análise contínua, proteção dos registros e revisão das exceções completam a regra isolada sem prometer cobertura universal.
- As seis marcas são comparadas por função e dependência, sem ranking de implantação ou preço fictício. Os limites de agente, local, integração e formato estão explícitos.
- Macie está descrito como descoberta em S3; a amostragem é atribuída especificamente à descoberta automatizada, sem declarar que toda modalidade de análise usa a mesma cobertura. Achado não equivale a bloqueio de download. [AWS — funcionamento](https://docs.aws.amazon.com/macie/latest/user/discovery-asdd-how-it-works.html).
- Sensitive Data Protection é distinguido de Workspace DLP e sua transformação não é apresentada como prova de anonimização jurídica. [Google — desidentificação](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data).
- O exemplo industrial é artificial e documental, não atribui homologação a CLP/supervisório e exige verificar CAD, PDF e rótulo após conversão. A conclusão de adoção permanece honestamente inconclusiva; engajamento e avaliação competitiva não são instalações.

Também foram reconferidas a [orientação ANPD sobre RIPD](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/relatorio-de-impacto-a-protecao-de-dados-pessoais-ripd), atualizada em 23 set. 2026, e a [Resolução 2 sobre pequeno porte](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022). A releitura de Fortinet retornou erro do leitor e a página Broadcom expôs conteúdo mínimo; para esses dois produtos, a conclusão considera a pesquisa documental anterior registrada pelo agente pesquisador, sem alegar nova leitura integral ou teste real. Os enunciados públicos são limitados e não exigem extrapolação de capacidade.

**Para o pedagogo:** verificar apresentação e progressão do quadro de 12 procedimentos, preservando as condições legais e o fato de que não é um checklist universal da ANPD. Não retirar ressalvas essenciais para encurtar células. Não é necessário acrescentar mais taxonomias, sanções ou marcas.

## Registro de aplicação pelo editor

Recomendações da revisão inicial e dos adendos aplicadas à A11 em 24 set. 2026. Preservados objetivos, atividade única, figuras existentes e distinção entre procedimento documentado e teste executado. Ver `validacao-producao.md` para as verificações finais.
