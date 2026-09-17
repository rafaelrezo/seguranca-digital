# A10 — Uma visita confirmada pode entrar em qualquer área?

Às 09:15, alguém apresenta uma imagem de crachá da ServTec e diz que precisa entrar **agora** na sala de engenharia de uma indústria de envase. Cita o chamado SV-999 e afirma que a produção será prejudicada se a portaria atrasar a entrada. **Qual controle decide esse pedido e que rastro permitiria revisar a decisão?**

Esta é uma situação didática nova depois da [A09](A09-decisao-de-riscos.md): os registros, nomes e horários são fictícios. A página fornece a matriz inicial. O [laboratório de política de visitas](../assets/m1/A10-painel-visitas.html) executa regras reais no navegador sobre dados simulados; não abre portas, consulta fornecedores ou comprova o funcionamento de uma instalação.

## Objetivos e percurso

Ao fim dos 100 minutos, você deverá conseguir:

1. **Explicar** como pretexto, impersonificação, pressão de urgência e entrada junto a outra pessoa tentam atravessar uma fronteira física.
2. **Distinguir** identificação, autenticação, autorização por pessoa/área/tempo e registro de acesso, escolhendo controles complementares.
3. **Configurar e testar** uma política de visitas com casos permitido, negado e limitado; registrar resultado, falha remanescente e revisão do risco.

**Recursos:** esta página, o painel local no navegador e papel ou editor para uma tabela de testes. O professor conduz a execução e pausa para previsão e comparação. O painel também funciona sem rede depois de aberto. Use apenas dados do exercício; não teste portarias, pessoas ou credenciais reais.

**Produto presencial:** duas linhas da matriz R10-01/R10-02 e uma tabela `caso → previsão → configuração → resultado → rastro → limite`. A atividade de governança/riscos encerrou-se na A09; esta aula não cria outra entrega no Classroom.

## 1. Primeiro teste: o que acontece sem uma política?

<div class="theme-summary" markdown="1">

- Um crachá visível é uma **alegação**; a autorização precisa existir antes da chegada.
- A função legítima é receber manutenção aprovada, com área e horário limitados.
- Uma decisão de acesso tem de ser testada com pedido legítimo e pedidos divergentes.
- O resultado do navegador prova a regra do modelo, não a operação de uma porta real.

</div>

Abra o [laboratório de política de visitas](../assets/m1/A10-painel-visitas.html). O estado inicial tem as cinco regras desmarcadas. Leia o caso **B** e anote sua previsão. Selecione B e clique em **Executar caso**. O resultado inicial é **PERMITIR: engenharia**: o modelo permissivo aceita o pedido apresentado sem confrontá-lo com o cadastro e libera a área inteira. Esse comportamento é a linha de base a corrigir, não uma política recomendada. Observe que o painel informa **“Sem rastro”** porque o registro também está desligado.

![Quatro etapas entre pedido e aplicação de acesso: alegação, confirmação, autorização e barreira física.](../assets/m1/A10-caminho-do-pretexto.svg)
*Figura 1 — Esquema original desta aula. Uma etapa não autoriza automaticamente a seguinte.*

A sequência normal é: um solicitante abre o chamado; o responsável interno aprova pessoa, serviço, área e janela; a portaria confere a pessoa pelo procedimento local e confirma o pedido em cadastro próprio; um contato **já cadastrado** confirma o escopo; a equipe emite credencial temporária, acompanha a visita e registra entrada e saída. Se o serviço mudar, uma nova autorização é necessária. O número de telefone apresentado pelo visitante não é o canal independente.

**Checkpoint:** o teste B revelou uma falha de identidade, de autorização, de registro ou uma combinação? Indique qual evidência falta para cada parte.

## 2. Engenharia social: técnicas e decisões que elas pressionam

<div class="theme-summary" markdown="1">

- **Pretexto** fornece uma história plausível; **impersonificação** empresta identidade ou marca.
- Urgência e autoridade aparente são **gatilhos** que tentam reduzir o tempo de verificação.
- *Tailgating* contorna a decisão de acesso ao seguir uma pessoa autorizada.
- A defesa verifica o pedido por fonte independente, limita o escopo e permite reporte sem culpabilização.

</div>

Engenharia social usa contexto e confiança para levar alguém a revelar informação, executar uma ação ou permitir acesso. Um pretexto pode conter dados verdadeiros, como o nome de uma fornecedora, e ainda pedir algo falso. A aparência, o tom e a precisão de um detalhe isolado não provam a intenção da pessoa. O que a equipe pode avaliar é a **compatibilidade entre pedido e autorização**.

| Técnica ou gatilho | Mecanismo no contexto da portaria | Sinal observável e resposta proporcional |
|---|---|---|
| **Pretexting** | “Preciso corrigir a rede antes que a linha pare”: uma história justifica acesso à engenharia. | Pedir chamado, área e responsável; consultar o cadastro sem completar as lacunas que a pessoa deixou. |
| **Impersonificação** | Pessoa exibe marca da ServTec, foto de crachá ou afirma ser técnica conhecida. | Identificação apresentada não equivale a visita aprovada; verificar pessoa e serviço no registro anterior à chegada. |
| **Autoridade e urgência** | “A gerência mandou liberar” ou “vocês serão responsáveis pelo atraso”. | Acelerar o contato com o responsável, sem pular autorização; registrar a exceção solicitada. |
| **Vishing/phishing** | Ligação ou mensagem chega antes da visita, aparentando vir do fornecedor e trazendo um número para retorno. | Não responder pelo número/link recebido; usar canal previamente cadastrado. |
| **Tailgating/piggybacking** | Alguém atravessa a porta logo atrás da visitante autorizada, possivelmente com a justificativa de estar com as mãos ocupadas. | Observar a passagem e orientar entrada individual; a regra de crachá não vê quem entrou junto. |

![Três caminhos de engenharia social e suas barreiras: alegação de identidade, pressão por exceção e entrada sem pedido.](../assets/m1/A10-tecnicas-e-barreiras.svg)
*Figura 2 — Esquema original desta aula. As duas primeiras linhas pressionam uma decisão; a terceira contorna a interface de decisão.*

Essas categorias não são mutuamente exclusivas: B combina pretexto, marca de fornecedor e urgência. O problema não é supor que a portaria “deveria perceber o golpe” pela aparência. O processo precisa oferecer fonte confiável, tempo e autoridade para interromper o pedido. [Veja os mecanismos de pretexting](../engenharia_social/pretexting.md), [impersonificação](../engenharia_social/impersonificacao.md) e [gatilhos](../engenharia_social/gatilhos.md) para exemplos fora da instalação; aqui o critério é a decisão de acesso.

**Aplicação curta:** redija uma pergunta aberta ao contato cadastrado que confirme pessoa, tarefa e área sem revelar o que Leo alegou. Depois identifique qual dado você não deve fornecer a quem ligou.

## 3. Segurança física: zonas, barreiras e rastros

<div class="theme-summary" markdown="1">

- **Perímetro** delimita a instalação; **controle de acesso** decide pessoa, zona e tempo.
- **Vigilância** torna desvios observáveis; **proteção ambiental** preserva equipamentos e operação.
- Credencial temporária, porta, acompanhante e registro exercem funções diferentes.
- Uma regra escrita só vira controle aplicado quando a barreira e a rotina produzem evidência.

</div>

Segurança física protege pessoas, instalações, equipamentos e mídias. Ela inclui perímetro e recepção, portas/fechaduras/catracas, câmeras e sensores, além de energia, incêndio e climatização. Uma câmera pode registrar passagem, mas não conceder autorização. Uma fechadura pode impedir entrada sem indicar quem tentou. Um crachá pode identificar visualmente, mas sua posse não prova que a tarefa e a área foram aprovadas. Compare o [panorama de controles físicos](../seguranca_fisica/controles_fisicos.md) com a função de cada barreira abaixo.

![Mapa de zonas: área externa, recepção, engenharia e processo OT, com a visita SV-104 limitada à recepção.](../assets/m1/A10-zonas-e-controles.svg)
*Figura 3 — Planta conceitual original desta aula. A fronteira OT será estudada depois; nenhuma visita desta aula tem acesso ao processo.*

| Zona ou barreira | O que deve permitir | O que deve negar ou detectar | Evidência necessária |
|---|---|---|---|
| Portaria → recepção | Marta, SV-104, impressora, 10:00–10:30, com Ana. | Pessoa sem chamado confirmado; visita fora da janela. | Chamado anterior, confirmação, identificação e entrada. |
| Recepção → engenharia | Serviço com aprovação **específica** para sala e finalidade. | SV-104 usado para “verificar a rede”; uso de crachá de recepção na sala. | Regra da zona, tentativa negada ou conferência manual e responsável. |
| Durante a visita → saída | Deslocamento acompanhado e devolução da credencial. | Desvio percebido, credencial ativa após saída, entrada junto de outra pessoa. | Responsável, horário de saída, baixa da credencial e ocorrência quando houver. |

![Credencial, leitor, controlador, política, porta e evento; acompanhamento e evacuação ficam fora do leitor.](../assets/m1/A10-controle-de-porta.svg)
*Figura 4 — Esquema original de um controle eletrônico possível, não da instalação real. O controlador aplica a regra; o leitor sozinho não decide.*

A implementação pode ser manual ou eletrônica. Em leitor eletrônico, a política compara identificador da credencial, zona e horário; o evento de **permissão ou negação** deve poder ser revisado. Em controle manual, uma pessoa confere os mesmos atributos e registra a decisão. Nenhum modelo dispensa saída de emergência nem autoriza bloquear evacuação. Se cadastro, relógio, leitor ou acompanhante falhar, suspenda a visita restrita e escale conforme o procedimento; mantenha a operação segura.

**Falhas físicas que mudam o desenho do controle:** uma credencial perdida ou copiada pode apresentar o identificador esperado, então emissão, devolução, revogação e revisão de uso são necessárias; uma pessoa que passa junto de outra pode não gerar leitura própria, então câmera, acompanhante ou passagem individual tratam um caminho diferente; uma porta mantida aberta por conveniência neutraliza a regra do controlador, então o estado da porta e a resposta ao alarme precisam ser definidos. Uma câmera é sobretudo **detectiva**; fechadura e regra de zona são **preventivas**; o procedimento de suspender e reautorizar é **corretivo**. A escolha depende do dano possível, da circulação legítima, da acessibilidade e da saída segura.

A [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) organiza, entre outros, **PE-2** (autorizações de acesso físico), **PE-3** (controle de acesso físico) e **PE-8** (registros de visitantes). Aqui usamos suas funções para analisar o exercício, sem alegar conformidade. Na trilha OT, a [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) exige considerar disponibilidade, confiabilidade e segurança de pessoas antes de aplicar uma barreira a um processo real.

## 4. Autenticar, autorizar, registrar: três perguntas diferentes

<div class="theme-summary" markdown="1">

- **Autenticar:** quem está diante da portaria? Documento, crachá e cadastro têm forças e limites diferentes.
- **Autorizar:** essa pessoa pode executar esta tarefa, nesta zona e janela, com este acompanhante?
- **Registrar/accounting:** qual pedido, decisão, responsável, hora e resultado ficaram observáveis?
- **Menor privilégio:** permitir a parte aprovada não expande o pedido nem presume confiança pela localização.

</div>

Uma identidade conferida não concede acesso amplo. A política de visita pode ser expressa como atributos: `pessoa + chamado + finalidade + zona + janela + responsável`. O crachá temporário representa uma autorização limitada; a portaria ou o leitor **aplica** a decisão; o registro permite revisá-la. O nome de uma fornecedora responde apenas a parte da pergunta de identidade. Consulte [autenticação](../fundamentos_de_seguranca_digital/G-autenticacao.md), [autorização](../fundamentos_de_seguranca_digital/H-autorizacao.md) e [accounting](../fundamentos_de_seguranca_digital/I-accounting.md) para mecanismos digitais equivalentes e suas diferenças.

**Exemplo trabalhado — A.** Às 10:05, Marta apresenta SV-104 para a impressora. O cadastro anterior à chegada traz Marta, ServTec, recepção, 10:00–10:30 e Ana. O contato conhecido confirma exatamente esse escopo. A regra pode **permitir a recepção**, com acompanhante e entrada/saída registradas. Isso não prova que o serviço foi concluído nem concede a sala de engenharia. No painel, ative as cinco regras e execute A: o resultado esperado é **PERMITIR: recepção**, com evento no log. O evento prova a decisão do modelo; a entrada física ainda precisaria de registro próprio.

A política também precisa funcionar no caso **C**: a identidade e a visita original são válidas, mas a sala de engenharia foi acrescentada. Negar toda a manutenção seria um custo desnecessário; permitir tudo violaria o escopo. O resultado correto é **LIMITAR: recepção** e pedir nova autorização para engenharia. Esse é um exemplo de autorização por atributos, não apenas por papel genérico “fornecedor”.

## 5. Matriz de riscos: que falhas os testes devem revelar?

<div class="theme-summary" markdown="1">

- Risco registra evento, condição e consequência; “crachá” é um mecanismo, não um risco completo.
- R10-01 testa identidade/pedido; R10-02 testa ampliação de escopo.
- A classe é provisória e usa premissas fornecidas; teste de navegador não mede frequência real.
- Cada controle precisa de caso legítimo, caso negado, rastro e limite declarado.

</div>

**Premissas fornecidas:** horizonte didático de 30 dias; iniciação moderada; dano condicionado alto se a sala de engenharia for alcançada; impacto alto para arquivos/estações. Não há ocorrência real medida. Usando as combinações qualitativas **G-5/I-2** explicadas na [A09](A09-decisao-de-riscos.md#tema-3), a verossimilhança geral e o risco são **moderados provisórios**. Não reclassifique com base apenas em cinco pedidos artificiais.

| ID | Evento e consequência | Condição a controlar | Experimento do encontro | Limite |
|---|---|---|---|---|
| **R10-01 — pretexto de manutenção** | Pessoa obtém entrada na engenharia sem visita válida; estações/arquivos podem ser expostos. | A alegação parece plausível, mas chamado e confirmação não existem. | B antes/depois da verificação independente; A garante que a visita legítima continue. | Simulação não confirma tentativa ou dano real. |
| **R10-02 — ampliação de escopo** | Visitante válida usa autorização da recepção para alcançar engenharia. | Pessoa aprovada, zona adicional não aprovada. | C antes/depois da regra de zona; A protege a função legítima. | Regra não detecta *tailgating* ou tarefa executada. |

D e E são **testes de condições** das mesmas decisões de visita: janela vencida e acompanhante indisponível. Eles não viram riscos separados só para caber na interface. Se a organização observar outras consequências ou caminhos, a matriz deve ser revisada. O [controle de segurança](../fundamentos_de_seguranca_digital/J-Controles_seguranca.md) pode prevenir, detectar ou apoiar correção; o rastro de um leitor sem revisão humana não resolve todos os caminhos.

## 6. Laboratório: construa e teste a política

<div class="theme-summary" markdown="1">

- Alterar **uma regra por vez** mostra que falha ela corrige e qual custo introduz.
- Testar A junto de B–E evita “resolver” o risco bloqueando toda manutenção.
- A decisão visível e o log têm funções diferentes: sem registro, falta rastro para revisão.
- Uma política aprovada no modelo ainda exige implantação, procedimento e teste na portaria real.

</div>

No [laboratório](../assets/m1/A10-painel-visitas.html), a seção **Pedidos e cadastro** contém os cinco insumos; **Configure a política** tem cinco caixas de seleção; **Executar caso** mostra a decisão escolhida; **Executar os cinco casos** compara os resultados; **Trilha desta sessão** só guarda eventos quando o registro estiver ativado. A saída **SUSPENDER** significa não conceder entrada até obter autorização ou condição faltante; não significa acusar alguém de ataque.

1. **Linha de base:** desmarque todas as regras, clique em **Executar os cinco casos** e anote os resultados. Pare se a configuração inicial não estiver vazia. Preveja qual pedido indevido passará.
2. **Pedido independente:** marque só **Exigir cadastro e confirmação**. Execute A e B. Anote o antes/depois de B e por que A permanece permitida. Não confunda “crachá mostrado” com chamada confirmada.
3. **Escopo:** mantenha a verificação, marque **Restringir a área** e execute C. Compare a zona solicitada com a zona liberada. Registre por que a visita original pode prosseguir.
4. **Tempo e pessoa responsável:** marque **Conferir janela** e execute D; marque **Exigir acompanhante** e execute E. Para cada suspensão, diga qual nova autorização ou recurso humano seria necessário para retomar o serviço.
5. **Rastro:** marque **Registrar decisão**, execute os cinco casos e leia a trilha. Compare com a execução anterior sem log. Registre **caso, decisão, motivo, regras e limite**. Use **Limpar trilha e resultados** antes de novo ensaio, sem confundir limpeza da interface com exclusão de registro real.

| Caso | Previsão antes da execução | Decisão com as cinco regras | O que o teste ensina |
|---|---|---|---|
| A — visita regular | Preencha antes de clicar. | **PERMITIR** recepção. | Função legítima preservada. |
| B — pretexto e urgência | Preencha. | **SUSPENDER**. | Falta cadastro/confirmação; intenção não está provada. |
| C — ampliação | Preencha. | **LIMITAR** à recepção. | Identidade válida não amplia a zona. |
| D — janela vencida | Preencha. | **SUSPENDER**. | Nova janela exige aprovação, não ajuste verbal. |
| E — sem acompanhante | Preencha. | **SUSPENDER**. | Uma condição operacional da autorização não foi atendida. |

**Alternativa sem painel:** use a tabela da seção 3 e aplique, nesta ordem, `cadastro/contato → janela → acompanhante → interseção de zonas → registro`. Faça a comparação inicial sem verificações e a final com todas. A mesma decisão cognitiva permanece disponível em papel.

**Diagnóstico:** se B ainda for permitido, confira **Exigir cadastro e confirmação**; se C for permitido integralmente, confira **Restringir a área**; se D/E passarem, confira janela/acompanhante; se a decisão aparecer sem evento, confira **Registrar decisão**. Se A for negado, volte aos dados de cadastro e às caixas marcadas. O painel não mede frequência, não identifica a pessoa real e não testa a porta.

## 7. O que a política ainda não vê? Implementação técnica e humana

A política cobre pedidos apresentados. Considere outra cena: Marta entra com credencial válida e alguém passa colado atrás dela sem apresentar nada. Não existe solicitação para o motor avaliar. **Tailgating** exige desenho da passagem, vigilância, regra de entrada individual, acompanhante atento e uma forma de reportar sem confronto arriscado. Câmera fornece observação e possível evidência posterior; não deve ser confundida com autorização. [Explore o papel de câmeras e controle de acesso](../seguranca_fisica/camaras_acesso.md) e [limites de credenciais](../seguranca_fisica/clonagem_cracha.md).

A implantação da política pede decisões técnicas e humanas diferentes:

| Camada | Quem prepara ou opera | Critério de aceitação e rastro | Falha a revisar |
|---|---|---|---|
| Cadastro e aprovação | Responsável interno e fornecedor mantêm pessoa, tarefa, zona, horário e contato de retorno. | Pedido existe antes da chegada; A confirma, B não. | Cadastro desatualizado gera falso bloqueio; há escalonamento. |
| Credencial e zona | Portaria e administração de acesso limitam cartão/identificação ao prazo e área aprovados. | A passa na recepção; C não recebe engenharia; acesso expira na saída. | Leitor, relógio ou porta em falha exigem procedimento seguro. |
| Acompanhamento e vigilância | Ana recebe, acompanha, observa desvios e confirma saída. | E suspende sem acompanhante; entrada e saída têm responsável. | Log de credencial não prova pessoa sozinha ou tarefa concluída. |
| Aprendizagem e resposta | Gestão treina frases de verificação e valoriza reporte de divergência. | Equipe sabe verificar, escalar e registrar sem culpar quem perguntou. | Treinamento concluído não prova comportamento futuro. |

**Defesa em profundidade** combina barreiras com funções distintas. Se a confirmação falhar, a zona e o acompanhamento ainda podem limitar o dano; se a porta permitir algo indevido, registro e vigilância podem tornar o evento observável. **Zero trust** aqui ajuda a rejeitar confiança implícita por estar no prédio ou usar a marca de um fornecedor; não é uma instrução de reautenticar indiscriminadamente em um processo industrial. A [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) aprofunda esse princípio; sua aplicação a OT exige os requisitos da A19–A22.

## Atividade {#atividade}

**Checkpoint presencial, sem nova entrega no Classroom.** Complete R10-01 e R10-02 com `caminho de dano → controle → caso de teste → antes/depois → rastro → limite → responsável`. Acrescente uma linha para o caso de *tailgating*: indique por que o painel não o testa e qual evidência humana/física seria necessária. Em dupla, uma pessoa defende a preservação da visita A/C; a outra questiona o efeito de cadastro desatualizado, falha do leitor ou ausência de Ana. Registrem uma melhoria de procedimento e uma condição para revisão do risco.

**Critério de conclusão:** A é permitida apenas na recepção; B é suspenso sem atribuição de intenção; C mantém apenas o escopo original; D/E apontam a condição faltante; o log é distinguido de entrada física; a lacuna de *tailgating* tem controle e responsável plausíveis. A [atividade A08–A09](A09-decisao-de-riscos.md#atividade) permanece encerrada.

### Revisão rápida

1. Qual diferença entre pretexto, impersonificação e gatilho de urgência no pedido B?
2. Por que uma credencial autêntica ainda pode ser negada na engenharia?
3. Que evento o log do painel comprova e que evento ele não pode comprovar?

### Continuidade e aprofundamento

A matriz industrial começa com acesso humano/físico. A A11 perguntará **quais dados estão na recepção e na engenharia, quem pode usá-los e como impedir uma saída indevida**, abrindo nova linha de risco com evidência própria.

Para ampliar a leitura: [engenharia social](../engenharia_social/introducao.md), [pretexting](../engenharia_social/pretexting.md), [impersonificação](../engenharia_social/impersonificacao.md), [gatilhos](../engenharia_social/gatilhos.md), [segurança física](../seguranca_fisica/introducao.md), [controles físicos](../seguranca_fisica/controles_fisicos.md) e [AAA](../fundamentos_de_seguranca_digital/H-autorizacao.md). As Figuras 1–4 são **originais deste material**, elaboradas para este caso; os conceitos usados têm as fontes abaixo.

**Fontes oficiais:** [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) (premissas e avaliação de risco); [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) (PE-2, PE-3, PE-8); [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) (restrições OT); [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) (confiança implícita); [CERT.br, Cartilha de Segurança para Internet](https://cartilha.cert.br/) (golpes e verificação).
