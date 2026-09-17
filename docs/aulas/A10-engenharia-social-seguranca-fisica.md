# A10 — Quem pode entrar e até onde pode ir?

Uma pessoa chega à portaria de uma indústria de envase e afirma que precisa fazer manutenção urgente. Ela mostra um crachá com o nome de uma fornecedora conhecida e pede acesso à sala de engenharia. **O que precisa ser confirmado antes da entrada?** Nesta aula, você vai combinar análise de risco, engenharia social e segurança física para manter a manutenção legítima sem aceitar uma justificativa não verificada.

Esta é uma **nova situação didática**, posterior à avaliação de riscos da [A09](A09-decisao-de-riscos.md). Não depende de matriz produzida pela turma naquela aula. Os nomes, horários, chamados e resultados são fictícios. O painel interativo executa regras de comparação no navegador, mas não controla portas, contas ou sistemas reais.

## Objetivos e preparação

Ao terminar o encontro, você deverá conseguir:

1. Separar afirmação apresentada, dado cadastrado, confirmação independente e conclusão ao analisar uma tentativa de acesso.
2. Definir controles complementares de verificação, autorização, delimitação de área, acompanhamento e registro, preservando a visita legítima.
3. Interpretar o resultado de três pedidos e revisar uma decisão quando a pessoa, o horário, a finalidade ou a área não coincidirem.

**Tempo:** 100 minutos. **Recursos:** esta página e o [painel local de visitas](../assets/m1/A10-painel-visitas.html), aberto em navegador. O professor conduz a demonstração e pausa para previsões; papel ou editor bastam para o registro. O painel funciona sem contas e sem rede externa depois de carregado. Se ele não abrir, use os dados e a tabela de casos desta página. Não use documentos ou credenciais reais e não tente entrar em áreas restritas para testar uma hipótese.

**Produto presencial:** uma matriz curta de dois riscos e um registro de decisão para três casos. O encontro não cria nova entrega no Classroom; a atividade principal de governança e riscos foi encerrada na A09.

## 1. Função normal e fronteiras de acesso

<div class="theme-summary" markdown="1">

- A indústria precisa receber manutenção autorizada; impedir todas as visitas interromperia uma função legítima.
- Uma área pública, uma área controlada e uma sala restrita têm regras diferentes.
- Crachá e presença física indicam uma alegação de identidade; não concedem escopo por si.
- O limite de uma visita inclui pessoa, finalidade, local, horário e responsável.

</div>

Na indústria fictícia, a recepção atende visitantes e mantém uma impressora. A sala de engenharia abriga estações com arquivos de configuração; sua entrada é restrita. Uma área de processo físico será apresentada em aulas futuras. **Não há nesta aula um caminho demonstrado da recepção até um controlador industrial.**

O fluxo normal é: o solicitante abre um chamado; o responsável interno aprova **pessoa, serviço, área e janela**; a portaria confere documento conforme procedimento local e verifica a autorização em cadastro próprio; o visitante recebe identificação temporária, é acompanhado quando exigido e tem entrada e saída registradas. Uma alteração de escopo exige nova decisão. Em emergência, o procedimento pode acelerar a verificação, mas não transformar urgência alegada em autorização automática.

| Área | Uso legítimo | Condição de entrada no exercício |
|---|---|---|
| Recepção | Atendimento e manutenção da impressora | Chamado confirmado, pessoa identificada, janela válida, responsável e registro. |
| Sala de engenharia | Trabalho técnico com arquivos e estações | Autorização específica da área, finalidade e acompanhamento; chamado da recepção não basta. |
| Processo físico | Será definido na A19 | Nenhuma visita desta aula está autorizada a operar ou observar esse processo. |

**Checkpoint:** uma pessoa tem crachá autêntico da fornecedora, mas o chamado cobre somente a impressora. O crachá permite entrar na sala de engenharia? Registre qual informação ainda falta.

## 2. Matriz de riscos pronta: por que verificar duas barreiras?

<div class="theme-summary" markdown="1">

- O risco descreve evento, condição e consequência; “crachá” e “porta” são partes do caminho, não riscos completos.
- A primeira barreira confirma a solicitação por canal independente.
- A segunda limita área, tempo e acompanhamento, mesmo depois da identificação.
- A avaliação é uma premissa de aula; os resultados do painel serão interpretados depois, sem reclassificar automaticamente o risco.

</div>

**Base fornecida:** o cadastro de visitas contém serviços aprovados, contatos previamente registrados e responsáveis internos. Uma imagem de e-mail ou um número oferecido pelo próprio visitante pode ser fabricado; o contato deve ser obtido no cadastro já conhecido. O registro atual não informa quantas tentativas semelhantes ocorreram no mundo real. Para trabalhar a decisão, adotamos um horizonte didático de **30 dias** e premissas de iniciação **moderada**. Os impactos são locais ao exercício: entrada indevida na sala de engenharia é **alta**; ampliação de área sem acesso a arquivos ou operação, detectada antes da entrada, é **moderada**. Nenhuma ocorrência real foi observada.

| ID | Fonte, evento e consequência possível | Condição e limite da evidência | Avaliação inicial fornecida | Controle e critério de verificação |
|---|---|---|---|---|
| **R10-01 — pretexto de manutenção** | Alguém se apresenta como técnico e obtém entrada na sala de engenharia sem chamado válido; arquivos ou estações ficam expostos. | Crachá visual e urgência não provam identidade nem autorização; não há acesso indevido comprovado. | Iniciação moderada × dano condicionado alto → verossimilhança geral **moderada**; impacto **alto** → risco **moderado**, provisório. | Confirmar chamado e pessoa no contato cadastrado; sem confirmação, negar a entrada solicitada e registrar/escalar. |
| **R10-02 — desvio de escopo** | Visitante legítimo amplia a visita da recepção para a sala de engenharia; pessoas, arquivos e estações ficam fora do alcance originalmente aprovado. | A autorização original pode ser verdadeira, mas não cobre a área adicional; não há entrada indevida comprovada. | Iniciação moderada × dano condicionado alto → geral **moderada**; impacto **alto** se a sala for acessada → risco **moderado**, provisório. | Conferir área e finalidade, acompanhar e registrar; visita original permitida, ampliação negada até nova aprovação. |

As combinações seguem o exemplo qualitativo **G-5 e I-2** usado na [A09](A09-decisao-de-riscos.md#tema-3) e não são frequências medidas. Se aparecerem registros de tentativas, uso de acesso ou mudanças de layout, a avaliação deverá ser revista. A matriz serve para orientar os controles de hoje; a futura matriz industrial será ampliada com fatos próprios nas aulas de dados, criptografia e OT.

## 3. Engenharia social: verificar o pedido, não julgar a aparência

<div class="theme-summary" markdown="1">

- Pretexto é uma história criada para tornar um pedido plausível; urgência e autoridade aparente pressionam a decisão.
- Um sinal isolado, como erro de escrita ou crachá bem feito, não prova legitimidade nem fraude.
- Confirmar por canal independente significa usar um contato já cadastrado, nunca o número apresentado no pedido suspeito.
- A resposta segura pode preservar a parte legítima do serviço e negar apenas a ampliação não aprovada.

</div>

Uma ação de engenharia social tenta influenciar uma pessoa para obter acesso, informação ou mudança de procedimento. O problema não está em “pessoas ingênuas”: se a organização não oferece cadastro confiável, tempo para verificar e autoridade para interromper o fluxo, o procedimento favorece a falha. Treinamento útil ensina **o que conferir, onde conferir, quem decide e como registrar**, sem culpar quem pede ajuda.

**Exemplo trabalhado — caso A.** Às 10:05, Marta apresenta o chamado SV-104 para manutenção da impressora da recepção. O cadastro já existente contém Marta, ServTec, 10:00–10:30, a impressora e Ana como responsável. Uma ligação para o número previamente cadastrado confirma a visita e esse escopo. A portaria pode autorizar **essa visita**, com identificação, acompanhamento e registro. Isso não autoriza a sala de engenharia nem prova que o serviço foi concluído.

| Elemento | O que foi observado no exemplo A | O que ainda não concluir |
|---|---|---|
| Crachá e fala | Marta afirma vínculo e finalidade. | Aparência não valida chamada nem área. |
| Cadastro interno | Pessoa, chamado, área e janela coincidem. | Cadastro não prova que ela já entrou ou concluiu trabalho. |
| Canal independente | Número cadastrado confirma a visita. | Confirma a solicitação, não qualquer ação adicional. |
| Registro de entrada | Deve ser produzido na portaria. | Plano de registro não é registro executado. |

**Aplicação:** formule uma pergunta para o contato cadastrado que confirme o escopo sem lhe oferecer a resposta desejada. Depois diga qual campo mudaria se o serviço fosse ampliado.

## 4. Segurança física: autorização continua depois da portaria

<div class="theme-summary" markdown="1">

- Controle físico envolve área, barreira, identificação, acompanhamento e registro de saída.
- Uma autorização válida tem alcance limitado; uma porta aberta ou crachá temporário não expandem a finalidade.
- Acompanhamento permite perceber desvio e preservar a manutenção autorizada.
- Registro de visita apoia auditoria, mas não prova sozinho cada movimento dentro da instalação.

</div>

O controle de entrada começa antes da porta, com aprovação e identidade. Ele continua depois, com **zonas** (áreas com regras distintas), credencial temporária, acompanhante e encerramento. Um visitante pode ser legítimo e ainda assim pedir um recurso não aprovado. O responsável interno deve conhecer o serviço e ter um canal para autorizar mudança; a portaria não deve inventar essa autoridade.

Na implantação, o cadastro de visitas guarda a **autorização aprovada**, enquanto a portaria verifica a pessoa e emite uma credencial com área e validade limitadas. Quando há leitor de acesso, a regra da porta compara credencial, zona e horário; uma negativa deve aparecer como evento para análise. Onde a abertura é manual, a conferência e o registro dependem do procedimento e da pessoa responsável. Em ambos os casos, a decisão precisa de uma saída para emergência e de revisão quando cadastro, relógio ou leitor falharem; ninguém deve improvisar acesso à sala restrita por causa da falha.

| Controle | Implementação possível | Evidência que permite avaliar | Falha que exige atenção |
|---|---|---|---|
| Lista de visita aprovada | Chamado com pessoa, serviço, zona, janela e aprovador. | Registro anterior à chegada e confirmação pelo contato cadastrado. | O próprio visitante fornecer o contato usado para “confirmar” o pedido. |
| Credencial temporária | Crachá identificado visualmente ou cartão configurado para a zona e o prazo aprovados. | Área e validade da credencial; tentativa de acesso negada fora do escopo, se houver leitor. | Crachá visual ser confundido com permissão técnica ou cartão continuar ativo após a saída. |
| Acompanhamento e encerramento | Responsável recebe, acompanha e confirma a devolução da credencial. | Entrada, responsável, saída e baixa da autorização. | Registro de entrada existir sem saída ou sem responsável identificado. |

Uma catraca ou leitor pode registrar **uso de credencial**, mas não provar que a pessoa autorizada estava sozinha, que executou apenas a tarefa prevista ou que o serviço foi concluído. A tentativa de passar junto com outra pessoa (*tailgating*) exige observação, desenho do fluxo e orientação humana; acrescentar tecnologia sem procedimento de resposta deixa essa lacuna. Por isso, a validação combina caso permitido, caso negado, observação de acompanhamento e conferência do encerramento.

**Caso C — ampliação:** Marta apresenta SV-104, mas pede também acesso à sala de engenharia para “verificar a rede”. O cadastro confirma apenas a impressora da recepção. A decisão proporcional é **permitir somente a visita cadastrada e negar a ampliação**. Se houver necessidade real de rede, novo chamado, responsável e janela serão verificados antes de abrir a área. Acompanhamento e registro de entrada/saída continuam necessários.

Uma regra física também precisa prever exceções: se a manutenção legítima exigir acesso fora da janela, o responsável pode emitir autorização nova com motivo, área, duração e acompanhante. Pressa não dispensa documentação. Controles sobre pessoas devem coletar somente os dados necessários e definir acesso e retenção do registro conforme a política da organização; não divulgue documento pessoal em captura de tela.

## 5. Prática guiada: três decisões no painel

<div class="theme-summary" markdown="1">

- Primeiro preveja; depois consulte o registro independente.
- Compare pessoa, serviço, área, horário e responsável.
- Escolha a menor autorização que preserve a função legítima.
- Registre conclusão e limite; não transforme divergência em acusação de ataque comprovado.

</div>

Abra o [painel de verificação de visitas](../assets/m1/A10-painel-visitas.html). O estado inicial mostra o **caso A**, o pedido apresentado e “Consulta ainda não realizada”. O painel executa a comparação localmente: nenhuma informação sai para uma conta externa. Use-o assim, acompanhado da demonstração:

1. Leia o pedido. **Antes de clicar**, anote se permitiria, limitaria ou suspenderia a entrada e qual evidência falta.
2. Clique em **Consultar cadastro e contato conhecido**. Compare os campos. Esse botão representa a consulta independente simulada; em uma organização, ela exige canal previamente estabelecido.
3. Escolha a ação; marque acompanhante quando a visita prosseguir; clique em **Registrar decisão**.
4. Leia o resultado e a **trilha desta sessão**. Registre o que o painel confirmou e o que continua fora da prova. Pare antes de mudar de caso se os campos não coincidirem.
5. Repita para B e C. Para B, o cadastro não traz SV-999 e o contato conhecido nega a visita urgente. Para C, a confirmação cobre apenas o serviço original.

| Caso | Pedido apresentado | Registro independente fornecido | Pergunta a resolver |
|---|---|---|---|
| **A** | Marta, SV-104, impressora da recepção, 10:05. | Pessoa, serviço, área e janela confirmados; Ana acompanha. | Como permitir a função sem ampliar o escopo? |
| **B** | Leo, crachá exibido, urgência na sala de engenharia, SV-999, 09:15. | Não há chamado nem visita; o contato conhecido não confirmou o serviço. | Que entrada negar, que divergência registrar e a quem escalar? |
| **C** | Marta, SV-104, impressora **e** sala de engenharia, 10:07. | Apenas impressora da recepção confirmada. | Qual parte pode prosseguir e qual precisa de nova autorização? |

**Saída esperada do painel:** A pode ser autorizado com acompanhamento; B exige não autorizar a entrada pedida e escalar; C preserva somente o escopo da recepção. O painel também registra tentativa de decidir antes da consulta e ausência de acompanhante quando necessário. Esses são resultados **da simulação**, não prova de bloqueio físico real. Se o painel falhar, use a tabela e faça o mesmo registro em papel: `pedido → cadastro → decisão → responsável → limite`.

**Erros comuns para diagnosticar:** aceitar o crachá como aprovação; ligar para o número mostrado pelo visitante; negar também a manutenção legítima do caso C; chamar o caso B de invasão comprovada; interpretar o log do painel como se uma porta tivesse sido aberta ou bloqueada.

## 6. Aplicar controles e revisar o risco

Uma medida funciona quando **o pedido legítimo passa**, o pedido sem autorização é recusado e a ampliação de escopo pede nova decisão. São três resultados diferentes. A portaria verifica e registra; o responsável interno autoriza; o fornecedor mantém contatos e pessoas atualizados; a gestão revisa exceções e treinamento. Se o cadastro estiver desatualizado, a equipe precisa de caminho de escalonamento, não de uma permissão improvisada.

| Camada | Ação técnica/organizacional | Evidência a obter | Limite |
|---|---|---|---|
| Cadastro e canal | Manter chamados e contato de retorno fora da mensagem recebida. | Versão do chamado e confirmação por contato conhecido. | Cadastro desatualizado pode gerar falso bloqueio. |
| Controle de área | Credencial temporária e autorização por zona. | Área e prazo registrados; pedido fora do escopo recusado. | Regra escrita não comprova porta aplicada. |
| Acompanhamento | Responsável recebe e acompanha, com entrada e saída. | Registro de ambos os momentos e responsável identificável. | Log não mostra todos os deslocamentos. |
| Cultura e melhoria | Treinar verificação e revisar exceções sem punir relatos. | Casos discutidos, correções e prazo de atualização do cadastro. | Participação em treinamento não prova comportamento futuro. |

O conceito de **defesa em profundidade** aparece aqui como barreiras de funções distintas: confirmação do pedido, delimitação física e acompanhamento. Se uma falhar, outra pode impedir ou tornar visível o desvio. **Zero trust** não significa “desconfiar de pessoas” ou eliminar portarias: significa não conceder acesso implícito apenas porque alguém está no prédio ou pertence a um fornecedor. A aplicação técnica a OT será estudada depois de conhecer o processo e suas restrições. Consulte [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) e [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) para os sentidos próprios desses referenciais.

**Revisão rápida:**

1. Qual fato permite autorizar o caso A e qual limite continua valendo?
2. Por que a ausência de SV-999 impede o pedido B, sem provar a intenção de Leo?
3. Que registro e autoridade faltam para ampliar o caso C à sala de engenharia?

## Atividade {#atividade}

**Checkpoint presencial:** complete uma linha para R10-01 e outra para R10-02: `caminho de dano → controle → caso usado → rastro → resultado → limite → responsável`. Depois entregue oralmente ou registre no caderno uma revisão de uma decisão inicial após consultar o painel. Compare um caso permitido, um negado e um limitado. **Não há nova tarefa no Classroom.** A [atividade principal A08–A09](A09-decisao-de-riscos.md#atividade) permanece encerrada.

**Critério de conclusão:** sua análise mantém a visita legítima A dentro do escopo; nega B sem atribuição de intenção; separa, em C, a visita aprovada da área adicional; identifica confirmação independente, responsável, acompanhamento e saída; distingue resultado do painel de execução física.

### Continuidade

A matriz industrial agora tem dois riscos de acesso humano/físico. Na A11, uma nova linha tratará **dados: tipos, classificação, finalidade e prevenção de perda**. Mais adiante, a área OT ganhará fatos sobre processo, fronteiras, segurança em profundidade e critérios de operação; a entrada nesta aula não demonstra acesso a CLP ou impacto físico.

### Fontes oficiais

- [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final): avaliação de riscos e comunicação de premissas; combinações qualitativas usadas na A09.
- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final): famílias de acesso físico, registro de visitantes e conscientização; a atividade não declara conformidade.
- [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final): ausência de confiança implícita pela localização ou afiliação.
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final): requisitos próprios de OT, a aprofundar na trilha industrial.
