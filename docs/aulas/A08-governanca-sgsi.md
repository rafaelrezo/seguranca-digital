# A08 — Governança e SGSI

<a id="a08-quem-governa-a-seguranca-depois-que-a-falha-e-conhecida"></a>

**Quem define a regra, autoriza a mudança e acompanha a proteção?**

Uma planilha interna foi publicada num portal. A equipe retirou a cópia, mas uma publicação posterior repetiu a exposição. Corrigir o arquivo resolveu uma ocorrência; faltaram regras e responsabilidades para as próximas mudanças.

O caso fictício **Nuvora** envolve um portal de pedidos, a equipe comercial, TI e um fornecedor de manutenção. Os documentos são insumos para análise em papel; não exigem acesso a um sistema real.

## Objetivos e preparação

Ao concluir esta aula, você deverá conseguir:

1. Relacionar as seções da ISO/IEC 27001 às decisões necessárias para criar um SGSI.
2. Construir um esboço de SGSI com contexto, escopo, política proposta, papéis e objetivo verificável.
3. Planejar operação, avaliação e melhoria, distinguindo registro proposto de evidência de execução.

**Duração:** 100 minutos de aula; vídeo complementar de 14 min 12 s para estudo. **Recursos:** navegador, esta página e um editor de texto ou caderno. Compare os documentos, preveja resultados e registre suas decisões com justificativa. Nenhuma instalação é necessária.

Se precisar retomar um conceito, consulte [controles de segurança](../fundamentos_de_seguranca_digital/J-Controles_seguranca.md) e [governança](../governanca/introducao.md).
**Temas:** [Governança](#tema-1) · [SGSI e ISO](#tema-2) · [Escopo](#tema-3) · [Política](#tema-4) · [Responsabilidades](#tema-5) · [Risco candidato](#tema-6) · [Objetivo e indicador](#tema-7) · [Operação](#tema-8) · [Auditoria](#tema-9) · [Melhoria](#tema-10)

**Consulta:** [Documentos do caso](#documentos-do-caso) · [Política integral](#politica-exemplo) · [Atividade](#atividade)

<a id="1-o-que-precisa-mudar-antes-da-proxima-publicacao"></a>

<a id="primeiro-esquema"></a>

## 1. Governança: decidir, executar e acompanhar {#tema-1}

<div class="theme-summary" markdown="1">

**Síntese**

- **Decidir:** estabelecer regra, autoridade e recursos.
- **Executar:** aplicar a proteção e registrar a ação.
- **Acompanhar:** verificar resultado e corrigir desvios.
- Uma correção pontual não demonstra proteção nas mudanças seguintes.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-01.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-01.svg" alt="Decisão → Execução → Evidência → Revisão. Mudanças reabrem a decisão." /></a>
</figure>

**Aplicação:** a planilha foi retirada; qual decisão continua faltando para a próxima publicação?

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

Governança define a orientação, as responsabilidades, os limites de decisão e o acompanhamento da segurança. A execução transforma essa orientação em ações. Sem autoridade definida, uma equipe pode executar um pedido tecnicamente correto e ainda divulgar uma informação que deveria permanecer interna.

No exemplo, o catálogo de produtos é público e as planilhas de margens são internas. A TI retirou a planilha de agosto; a atualização de setembro voltou a ficar pública. Isso permite separar duas decisões: **atualizar o documento** e **autorizar sua divulgação**. O resultado da retirada não demonstra que a regra de acesso das próximas publicações foi corrigida.

Os [documentos G01–G04](#documentos-do-caso) fornecem o chamado, os papéis e o acordo completos para consulta. A análise abaixo usa esse caso para relacionar uma regra técnica à autoridade que pode defini-la.

<a id="da-decisao-a-uma-regra-verificavel"></a>

Para a próxima planilha de margens, propomos uma regra: **sem permissão definida, o portal não libera a leitura; com permissão, confere se o solicitante pode ler aquele documento**. O catálogo continua público porque essa finalidade foi explicitamente aprovada. A proteção deve preservar tanto o acesso do comercial às planilhas quanto o acesso dos clientes ao catálogo.

| Parte da decisão | Aplicação à publicação das planilhas |
|---|---|
| Ameaça considerada | Uma pessoa sem permissão obtém custos e margens internos. O exercício informa disponibilidade pública, mas não identifica leitores externos. |
| Requisito proposto | Conferir a permissão em cada solicitação de leitura e negar quando nenhuma permissão se aplica. |
| Controle proposto | O serviço que entrega os documentos aplica a regra antes de devolver o conteúdo. |
| Verificação prevista | Confirmar que um visitante não recebe a planilha, que uma pessoa autorizada do comercial consegue lê-la e que o catálogo continua público. Repetir a comparação após uma nova publicação. Estes testes são propostos, não executados nesta aula. |

### Como conferir se a regra proposta tem fundamento técnico?

A dúvida técnica agora é precisa: **o que fazer quando não há permissão e com que frequência verificá-la?** Vamos confrontar a regra da planilha com uma orientação de segurança de aplicações.

A **OWASP** mantém recursos abertos sobre segurança de aplicações. A **Authorization Cheat Sheet** é seu guia prático de autorização: reúne recomendações para decidir quais ações sobre quais recursos a aplicação permite.

Leia [“Deny by Default”](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#deny-by-default) e [“Validate the Permissions on Every Request”](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#validate-the-permissions-on-every-request). Compare as duas orientações com a regra de acesso à planilha `margens-setembro.xlsx`:

- **Negar por padrão:** quando nenhuma permissão se aplica à solicitação, o portal recusa a leitura da planilha.
- **Verificar permissões em cada requisição:** o portal confere a permissão sempre que a planilha é solicitada, não apenas quando ela é cadastrada.

Registre qual parte da regra cada orientação sustenta. Explique por que conferir a permissão apenas no cadastro do arquivo seria insuficiente.

### Quem pode conceder a permissão que o portal vai aplicar?

O fornecedor ainda precisa saber quem pode autorizar uma publicação pública. A orientação técnica ajuda a aplicar permissões; a Nuvora precisa definir quem tem autoridade para concedê-las, quem executa a mudança e quem acompanha o resultado. Se alguém conceder indevidamente acesso público à planilha, o portal pode cumprir exatamente essa permissão e ainda expor informação interna.

**Decisão em sala:** no caso de `margens-setembro.xlsx`, explique por que “o comercial pediu uma atualização” não basta para autorizar acesso público. Em seguida, identifique a responsabilidade que a Nuvora precisa atribuir antes de aceitar uma nova publicação.

</div>

<a id="3-o-que-um-sgsi-organiza"></a>

## 2. SGSI e estrutura da ISO/IEC 27001 {#tema-2}

<div class="theme-summary" markdown="1">

**Síntese**

- **SGSI:** integra política, pessoas, processos e recursos.
- **Requisitos:** orientam contexto, liderança, planejamento, apoio, operação, avaliação e melhoria.
- **Controles:** são selecionados conforme riscos e requisitos; a aplicabilidade precisa ser justificada.
- Um esboço documentado não comprova implantação ou conformidade.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-02.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-02.svg" alt="Contexto e liderança → Planejamento e apoio → Operação → Avaliação e melhoria. Mapa funcional: a norma não impõe uma sequência única." /></a>
</figure>

**Aplicação:** localizar onde entram a autoridade para aprovar e a evidência de acompanhamento.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

Um **Sistema de Gestão de Segurança da Informação (SGSI)** é a organização contínua de políticas, responsabilidades, processos e recursos para tratar a segurança da informação. Ele permite que decisões sejam repetidas, avaliadas e corrigidas quando pessoas, sistemas e condições mudam.

Retirar a cópia pública de `margens-agosto.xlsx` foi uma intervenção técnica no caso fornecido. Definir quem pode publicar, como a aprovação é registrada, quem acompanha exceções e quando a regra será revista pertence à gestão dessa proteção. O episódio ilustra uma parte da gestão. O SGSI também precisa tratar continuidade, integridade dos pedidos, preparo das pessoas, fornecedores e incidentes. A política de referência reúne essas orientações e está disponível integralmente na consulta desta página.

A **ISO/IEC 27001:2022** estabelece requisitos para um SGSI. Seu propósito inclui estabelecer, implementar, manter e melhorar esse sistema, considerando os riscos da organização. A implantação pode ser útil mesmo sem buscar certificação. Nesta aula, usaremos sua estrutura para organizar o caso; produzir um documento didático não demonstra conformidade ou certificação. [Referência oficial da ISO/IEC 27001](https://www.iso.org/standard/27001).

### Como ler a ISO/IEC 27001 para construir o SGSI {#estrutura-iso27001}

O mapa a seguir relaciona os requisitos às decisões de gestão. Use a tabela para localizar uma necessidade, como autoridade para aprovar ou evidência para acompanhar.

Uma **norma de requisitos** estabelece condições pelas quais um sistema pode ser avaliado. A ISO/IEC 27001 fornece essa referência para o SGSI. Ela não entrega uma política pronta para a Nuvora nem determina quais cargos a empresa deve criar. A organização precisa traduzir os requisitos em processos adequados ao seu contexto. Para declarar conformidade, não pode excluir requisitos das seções 4 a 10. [Catálogo oficial da IEC](https://webstore.iec.ch/en/publication/79694).

Use a **edição de 2022**, junto da **Emenda 1:2024**. No [catálogo da ISO](https://www.iso.org/standard/27001), confira o ano e a emenda antes de consultar o sumário. A numeração identifica onde procurar um requisito; não é uma ordem rígida de implantação.

As seções **1 — Escopo**, **2 — Referências normativas** e **3 — Termos e definições** delimitam a aplicação da norma e seu vocabulário. O escopo da seção 1 descreve a própria norma; o escopo que a Nuvora deve definir para seu SGSI é tratado em **4.3**. A introdução explica a finalidade e a integração do sistema à organização.

| Seção da norma | Pergunta para construir o SGSI da Nuvora | Registro que usaremos no exemplo |
|---|---|---|
| **4 — Contexto da organização** | Que processos, informações e dependências precisam de proteção? | Contexto, partes interessadas e escopo. |
| **5 — Liderança** | Quem assume as decisões e estabelece a direção? | Política e papéis com autoridade. |
| **6 — Planejamento** | Que riscos tratar, que objetivos perseguir e que mudanças planejar? | Avaliação, tratamento, objetivos e plano de mudanças. |
| **7 — Apoio** | Quem tem conhecimento, tempo e informação para executar? | Recursos, competências, comunicação e documentos controlados. |
| **8 — Operação** | Como executar o que foi planejado e lidar com mudanças? | Aprovações e registros de execução. |
| **9 — Avaliação de desempenho** | Que evidência mostra o resultado e quem o examina? | Medidas, auditoria interna e análise crítica da direção. |
| **10 — Melhoria** | Como resolver o desvio e evitar sua repetição? | Correção, análise da causa e verificação da ação corretiva. |

Os nomes e a organização das seções podem ser conferidos na [prévia da norma disponibilizada pelo SIST](https://preview.sist.si/sist-preview/82875/4d4c8d99950c4b39aaa39cf5cb9a0bf3/ISO-IEC-27001-2022.pdf). As perguntas e os registros da tabela são nossa aplicação ao caso, não transcrição de requisitos ou formulários obrigatórios.

**Localize uma necessidade:** a ausência de quem aprova o suporte remete à seção 5.3, sobre papéis e autoridades. Depois da atribuição, ainda será preciso disponibilizar recurso e orientação (seção 7), executar a aprovação (seção 8) e conferir o resultado (seção 9). Registre essas relações em uma frase, usando o pedido de suporte como exemplo.

### Onde fica o Anexo A da ISO/IEC 27001 e para que serve {#o-anexo-a-entra-quando-e-preciso-conferir-os-controles}

O **Anexo A pertence à norma ISO/IEC 27001:2022**. Ele fica após a seção **10 — Melhoria**, antes da bibliografia. No sumário da edição em inglês, localize **“Annex A (normative) — Information security controls reference”**, isto é, referência de controles de segurança da informação. Essa localização pode ser conferida no [sumário da prévia da norma disponibilizada pelo SIST](https://preview.sist.si/sist-preview/82875/4d4c8d99950c4b39aaa39cf5cb9a0bf3/ISO-IEC-27001-2022.pdf).

Quando esta aula ou a política da Nuvora mencionar **“Anexo A”**, a referência será a esse anexo da norma. A política de exemplo não possui um anexo com esse nome.

**Como usar essa parte da norma:** o Anexo A oferece uma referência de controles de segurança. Durante o tratamento de riscos, a organização confronta os controles que considera necessários com essa referência para identificar omissões. A **Declaração de Aplicabilidade**, também chamada **SoA** (*Statement of Applicability*), registra controles necessários, justificativas de inclusão, situação de implementação e razões para exclusões de controles do Anexo A. Controles necessários podem vir também de outras fontes. [Nota educacional do grupo de práticas de auditoria da ISO/IEC 27001](https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IECJTC1-SC27-WG1_N3298_Auditing%20Practices%20Note%20-%20SoA.pdf).

Na Nuvora, “definir prazo e verificar o encerramento do acesso do fornecedor” é uma medida candidata porque responde à autorização vencida sem comprovação. A justificativa nasce dessa condição. Escrever “usar todos os controles” não demonstra que a seleção atende à necessidade. A ISO/IEC 27002 oferece orientação sobre controles; a ISO/IEC 27001 estabelece requisitos do sistema de gestão. A seleção e a avaliação de controles serão concluídas na A09, junto da decisão de risco.

**Confira a diferença:** “quem aprova a política?” é uma pergunta de liderança; “qual medida encerra o acesso no prazo?” é uma pergunta sobre controle. Ambas precisam de resposta para o mesmo serviço.

</div>

<a id="4-delimitar-o-escopo-sem-esconder-uma-dependencia"></a>

## 3. Contexto e escopo {#tema-3}

<div class="theme-summary" markdown="1">

**Síntese**

- Identificar serviço, informações e partes interessadas.
- Delimitar pessoas, processos e recursos abrangidos.
- Incluir dependências e interfaces relevantes.
- Distinguir o serviço contratado da empresa que o fornece.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-03.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-03.svg" alt="Escopo: pedidos, portal e manutenção → Fornecedor externo. O serviço integra o escopo; a empresa fornecedora é externa." /></a>
</figure>

**Aplicação:** comparar “servidor do portal” com um escopo que explicita o serviço de pedidos.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

A Nuvora usa um portal para receber pedidos e disponibilizar documentos. A equipe comercial trabalha com essas informações, TI mantém o portal e o Suporte Norte presta manutenção contratada. Antes de escrever a política de segurança, a empresa precisa responder: **quais dessas atividades serão abrangidas pelo SGSI?**

**Escopo do SGSI é a definição dos limites dessa gestão:** quais atividades, informações, pessoas e recursos serão abrangidos. Neste momento, estamos escolhendo o que será abrangido. A política será elaborada para orientar a proteção desse conjunto; ainda não estamos avaliando o cumprimento de uma política existente.

### Comece pela atividade e pelas pessoas envolvidas

Comece pelo serviço de pedidos digitais e identifique o que permite seu funcionamento:

| O que precisa entrar na gestão | Por que isso importa no caso |
|---|---|
| Documentos e informações dos pedidos | São informações utilizadas ou disponibilizadas pelo serviço. |
| Trabalho da equipe comercial | A equipe utiliza informações dos pedidos e seleciona documentos para publicação. |
| Trabalho de TI e funcionamento do portal | A equipe mantém os recursos que recebem pedidos e disponibilizam documentos. |
| Serviço de manutenção do Suporte Norte | A empresa conta com esse fornecedor para realizar manutenção no portal. |

A manutenção do portal depende do serviço prestado pelo Suporte Norte. Essa relação é uma **dependência externa**: uma atividade da Nuvora precisa do trabalho de outra organização. Por isso, o escopo deve considerar o serviço contratado e o acesso necessário para realizá-lo.

### Compare duas formas de escrever o escopo

> **Proposta A:** “O SGSI cobre o servidor do portal.”

Esse texto identifica um equipamento, mas deixa uma dúvida: o SGSI também abrange o trabalho com os pedidos, a publicação de documentos e a manutenção contratada?

> **Proposta B:** “O SGSI abrange o recebimento e a manutenção dos pedidos digitais e a publicação de documentos no portal da Nuvora. Inclui as informações de clientes e pedidos, os documentos publicados, o portal e as atividades das equipes comercial e de TI relacionadas a esses serviços. Abrange também a manutenção do portal realizada pelo Suporte Norte e o acesso utilizado pelo fornecedor nesse serviço.”

A proposta B identifica o conjunto para o qual a empresa vai estabelecer política, responsabilidades e procedimentos. Ela é um ponto de partida para o exercício; a empresa ainda precisaria identificar os locais e recursos envolvidos e confirmar os requisitos aplicáveis.

**Limite a confirmar:** o caso menciona a operação de embalagem, mas não detalha como a manutenção do portal poderia afetá-la. Antes de incluir essa operação no escopo, é preciso esclarecer essa relação. Se uma intervenção puder afetar a embalagem, será necessário avaliar seu efeito e obter autorização de quem responde pela operação.

!!! question "Confira seu escopo"
    A manutenção do portal faz parte da proposta B mesmo sendo executada por outra empresa? Localize o trecho que sustenta sua resposta e explique por que a Nuvora depende desse serviço. Você está verificando o que o escopo abrange; as regras de acesso ainda serão definidas.

<a id="passo-1-definir-contexto-necessidades-e-escopo"></a>

**Registro 1 — contexto e escopo:** use a proposta B e identifique uma necessidade de quem depende do portal, sua fonte e uma informação ainda a confirmar. O item 1 da política de referência deverá abranger esse mesmo conjunto.

**Leia os limites:** a manutenção contratada está dentro do escopo do SGSI; a empresa Suporte Norte é quem presta esse serviço. Incluir o serviço não significa administrar toda a empresa fornecedora.

A Emenda 1:2024 acrescenta a consideração de mudança climática ao contexto. Registre sua relevância como “a confirmar” enquanto faltarem dados e indique a informação necessária; o caso não permite concluir seu efeito sobre energia ou conectividade. [Emenda oficial](https://www.iso.org/standard/88435.html).

!!! example "Exemplo público — como a UCL delimita seu SGSI"
    A **University College London (UCL)** publica o escopo do SGSI de seus dados de pesquisa. O documento delimita ambientes de pesquisa confiáveis que processam dados altamente confidenciais; identifica pessoas e serviços envolvidos e explicita elementos fora do escopo. Isso torna a fronteira verificável, em vez de declarar apenas “proteger a universidade”. Consulte **1. Scope Statement** (declaração de escopo), **4. Scope Overview** (visão do escopo) e **8. Out of scope** (fora do escopo) no [RISM01, versão 10.4, revisão de 31/03/2025](https://isms.arc.ucl.ac.uk/rism01-scope/).

    **Aplique à Nuvora:** escreva uma frase que inclua o portal, a publicação de documentos e a interface com o suporte. Depois indique uma exclusão e explique por que ela não elimina uma dependência relevante. A fronteira escolhida pela UCL atende ao contexto de pesquisa; a Nuvora precisa justificar a sua.

O escopo delimita o conjunto protegido; a política estabelece os compromissos para esse conjunto.

</div>

<a id="politica-valeverde"></a>

## 4. Política, procedimento e registro {#tema-4}

<div class="theme-summary" markdown="1">

**Síntese**

- **Política:** estabelece compromisso e orientação.
- **Procedimento:** define como cumprir a orientação.
- **Registro:** documenta ação e resultado.
- Uma diretriz adequada pode ser mantida; detalhes operacionais vão ao procedimento.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-04.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-04.svg" alt="Política: orientação → Procedimento: como agir → Registro: ação e resultado. Aprovação registrada não comprova execução." /></a>
</figure>

**Aplicação:** ler o item 8 da política; localizar o que ainda precisa ser definido no procedimento.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

Definido o conjunto de atividades abrangidas, a direção precisa estabelecer como a organização se compromete a proteger suas informações. **A política de segurança da informação expressa essa orientação e sustenta os objetivos do SGSI.** Seu alcance inclui pessoas, processos, instalações, tecnologia e serviços contratados relacionados ao escopo.

A regra sobre publicação de arquivos é uma aplicação dessa orientação. A política também precisa orientar decisões sobre disponibilidade do serviço, integridade dos pedidos, competências das equipes, fornecedores e resposta a incidentes.

### Política, procedimento e registro têm funções diferentes

| Documento | Pergunta que responde | Exemplo breve |
|---|---|---|
| **Política** | Com o que a organização se compromete? | Manter a continuidade dos serviços e recuperar informações conforme as necessidades do negócio. |
| **Plano ou procedimento** | Como cumprir esse compromisso? | Definir responsáveis, sequência de recuperação e critérios para testar a restauração. |
| **Registro** | O que foi executado e qual foi o resultado? | Relatório do teste com duração, dados restaurados e falhas encontradas. |

A ISO/IEC 27001 trata da política em **5.2**. Os requisitos das seções **4–10** se aplicam ao SGSI como um todo: precisam aparecer em decisões, processos e evidências, além da política. Os exemplos públicos também apresentam documentos complementares; a [política da UCL](https://isms.arc.ucl.ac.uk/rism07-research_data_isms_information_security_policy/), por exemplo, remete a orientações específicas de acesso e responsabilidades.



### Aplicação ao acesso de fornecedores

O **item 8 — Serviços contratados e mudanças** da política proposta orienta: acesso com finalidade e período definidos, autorização, acompanhamento e encerramento. O procedimento deve indicar quem aprova, como registra o período e quem confere o encerramento. A política não aprova uma solicitação concreta.

[Consulte a política PSI-NU-01 integral e sua correspondência com a ISO/IEC 27001](#politica-exemplo). Seu estado é proposta didática, ainda sem aprovação. Use a identificação e o item pertinente; não é necessário copiar a política inteira.

### Dois casos para aplicar a orientação

- **Documento interno publicado:** o item 7 orienta a proteção da informação durante seu uso. Um procedimento deverá detalhar como decidir o que pode ser divulgado e como aplicar essa decisão no portal.
- **Pedido indisponível após uma mudança:** os itens 7 e 8 orientam continuidade e avaliação de mudanças. Um plano deverá definir como recuperar o serviço e verificar se os pedidos permanecem íntegros.

**Confira:** qual item orientaria a preparação de um novo integrante da equipe? Indique também um registro que permitiria verificar se a preparação aconteceu. Localizar a orientação e demonstrar sua execução são duas partes do mesmo trabalho.

</div>

<a id="5-responsabilidade-precisa-de-autoridade-e-recurso"></a>

## 5. Responsabilidade, autoridade e recursos {#tema-5}

<div class="theme-summary" markdown="1">

**Síntese**

- Quem responde pelo serviço decide dentro de sua autoridade.
- TI verifica condições técnicas; o executor realiza o autorizado.
- A conferência exige evidência e responsável definido.
- Ausência de autoridade ou recurso exige encaminhamento.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-05.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-05.svg" alt="Gestor decide → TI verifica condições → Prestador executa → TI confere. Arranjo proposto: autoridade, limites e recursos definidos." /></a>
</figure>

**Aplicação:** identificar quem recebe a pendência quando o aprovador está ausente.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

O item 8 da política propõe que o acesso de fornecedores tenha **finalidade e período definidos, autorização, acompanhamento e encerramento**. Para colocar essa orientação em prática, precisamos identificar quem decide, quem executa e quem confere o resultado.

**Proprietário do risco** é o papel com responsabilidade e autoridade para gerir o risco. **Executor** realiza a medida; **aprovador de exceção** decide condições diferentes da regra dentro de seus limites. Uma pessoa pode acumular funções, mas precisa conhecer sua responsabilidade e ter autoridade, tempo e recursos.

<a id="passo-2-estabelecer-politica-e-autoridade"></a>

### Avaliar a diretriz antes de decidir alterá-la

**Exemplo trabalhado — manter uma diretriz adequada:** o item 8 já exige aprovação e prazo para o suporte ao portal. Vamos mantê-lo, pois atende à necessidade do caso. O que falta é o procedimento definir aprovador, pedido, prazo e conferência. Escrever nomes e horários nesse procedimento não exige alterar a política.

| Avaliação da diretriz | Decisão | Desdobramento operacional |
|---|---|---|
| O acesso do Suporte Norte precisa ter finalidade, autorização e prazo. O item 8 já orienta esses pontos. | **Manter**, com essa justificativa. | Definir quem aprova, como registrar o período e quem comprova o encerramento. |

**Quando adaptar?** Considere uma condição adicional hipotética: a empresa decide exigir avaliação conjunta de negócio e TI para mudanças que possam interromper pedidos. Uma redação proposta seria: “Mudanças que possam interromper o recebimento de pedidos dependerão de avaliação conjunta do responsável pelo serviço e de TI.” A justificativa é preservar a continuidade; nomes, horários e formulário continuam no procedimento. Essa condição ilustra uma adaptação possível, não um novo requisito obrigatório da atividade.

### Arranjo proposto para o exercício

O item 3 da política atribui à direção a definição de autoridades. **Suponha, somente para a simulação em papel, que a direção tenha designado os papéis abaixo.** Essa designação fictícia não demonstra implantação do SGSI.

| Papel no exemplo | Pessoa fictícia | Autoridade e recurso necessários |
|---|---|---|
| Responsável pelo serviço de pedidos | Marina, gestora comercial | Aprovar a finalidade e o período da manutenção do portal; avaliar impacto no atendimento. |
| Coordenação de TI | Paulo | Examinar viabilidade técnica, acompanhar a manutenção e encaminhar impedimentos. |
| Execução contratada | Lia, do Suporte Norte | Executar somente a manutenção autorizada, com os meios de acesso que forem verificados. |
| Conferência do encerramento | Rui, de TI | Examinar os registros e comprovar o encerramento; encaminhar ausência de evidência. |
| Exceções acima desses limites | Direção | Decidir e registrar o tratamento das exceções; designar substituto quando necessário. |

**Registro 2 — diretriz e papéis:** identifique PSI-NU-01, item 8; registre “manter” ou uma adaptação necessária, com justificativa. Relacione aprovador, executor, responsável pela conferência e encaminhamento na ausência de autoridade. Não copie a política inteira.

**Confira:** o item 7 da política também orienta recuperação e proteção dos pedidos. Qual papel precisaria decidir a prioridade de recuperação e qual precisaria verificar sua viabilidade técnica? Isso mostra como os mesmos papéis atendem a outra necessidade do serviço.

!!! example "Exemplo público brasileiro — política e aprovação no LNCC"
    O **Laboratório Nacional de Computação Científica (LNCC)** publica sua Política de Segurança da Informação, versão 3.1, de 21/10/2025. Na **seção 1**, a política registra compromisso da administração, atendimento a requisitos e melhoria contínua. A **seção 15** separa elaboração, verificação e aprovação. Localize essas seções nas páginas **1–2 e 18** do [PDF oficial do LNCC](https://www.gov.br/lncc/pt-br/acesso-a-informacao/institucional/politica-de-seguranca-1/politicas-de-seguranca-da-informacao/02-psi-v3-1.pdf).

    **Aplique à Nuvora:** confira na identificação da política quem mantém o documento e quem aprova; indique quem verificará a viabilidade do procedimento proposto. Uma pessoa pode acumular funções quando isso for adequado, mas a autoridade precisa ficar explícita. O técnico que prepara o procedimento de manutenção não recebe automaticamente poder para autorizar qualquer acesso.

    Esse documento permite observar compromissos e responsabilidades formalizados. A execução do SGSI precisaria ser examinada por outros registros. Obrigações próprias de um órgão público brasileiro não são automaticamente requisitos da empresa fictícia.

</div>

<a id="51-registrar-o-risco-que-ainda-sera-avaliado"></a>

## 6. Risco candidato e informação pendente {#tema-6}

<div class="theme-summary" markdown="1">

**Síntese**

- **Evidência:** há autorização vencida sem encerramento comprovado.
- **Pergunta:** o acesso permanece disponível?
- **Risco candidato:** uso fora do período autorizado.
- A classificação e o tratamento exigem avaliação adicional.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-06.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-06.svg" alt="Evidência disponível → Condição a verificar → Risco a avaliar. Falta de comprovação não demonstra uso indevido." /></a>
</figure>

**Aplicação:** separar o dado conhecido da hipótese.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

<a id="passo-3-preparar-avaliacao-e-tratamento-dos-riscos"></a>

O item 4 da política orienta avaliar riscos com critérios e decidir seu tratamento. **Nesta aula, registre apenas o risco candidato, a evidência e a pergunta pendente.** A comparação de consequências, plausibilidade e alternativas ocorrerá na A09, com os critérios fornecidos lá.

No registro G04, falta comprovação de encerramento de uma autorização de manutenção do portal. Isso sustenta a pergunta “o acesso ainda está disponível?” e um risco candidato de uso fora do prazo. Não confirma acesso ativo nem uso indevido.

**Registro 3 — pendência:** `evidência fornecida → risco candidato → informação a verificar`. Qualquer medida sugerida nesta etapa é candidata para análise posterior; não a registre como tratamento escolhido ou eficácia demonstrada.

**Confira:** sua anotação distingue a falta de comprovação da hipótese de uso indevido? A futura escolha de controles será confrontada com o Anexo A da ISO/IEC 27001 e documentada na Declaração de Aplicabilidade; não é preciso produzir essa declaração agora.

</div>

<a id="6-objetivos-que-permitem-descobrir-se-a-gestao-funciona"></a>
<a id="passo-6-medir-o-resultado-sem-exagerar-a-conclusao"></a>

## 7. Objetivo, apoio e indicador {#tema-7}

<div class="theme-summary" markdown="1">

**Síntese**

- **Objetivo:** resultado esperado com responsável e momento de avaliação.
- **Apoio:** tempo, competência, registros e procedimento disponível.
- **Indicador:** regra de cálculo e conjunto observado.
- **Linha de base:** quatro encerramentos comprovados entre cinco autorizações vencidas.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-07.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-07.svg" alt="5 vencidas, 4 comprovadas → 1 vigente fora do cálculo. Linha de base da amostra, não medida de segurança global." /></a>
</figure>

**Aplicação:** explicar por que a prorrogação vigente fica fora do denominador.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

<a id="passo-4-definir-objetivos-e-preparar-a-execucao"></a>

O item 5 da política pede objetivos com responsável, prazo e forma de avaliação; o item 6 pede pessoas preparadas e documentos disponíveis. Vamos aplicar essas orientações ao encerramento do acesso previsto no item 8.

> **Objetivo proposto:** na próxima revisão semanal, 100% das autorizações de manutenção do portal cujo prazo vigente já tenha vencido devem ter encerramento comprovado. Rui reúne as evidências; Marina examina as pendências e encaminha as decisões necessárias.

A data e a hora da revisão são o **corte da medição**: comparamos o prazo vigente de cada autorização com esse instante. Uma prorrogação aprovada e ainda válida fica fora do conjunto de vencidas. Uma autorização já vencida sem comprovação continua sendo pendência; não deve ser retirada do cálculo para melhorar o resultado. A meta de 100% é uma proposta do exercício, não um percentual imposto pela ISO.

| Preparação | Como viabiliza o objetivo |
|---|---|
| Rui tem acesso aos registros e tempo reservado | Permite conferir cada autorização vencida. |
| Marina conhece seus limites de decisão | Permite encaminhar pendências sem aprovar condições além de sua autoridade. |
| Paulo e Lia recebem o procedimento vigente | Permite executar e registrar as etapas previstas. |
| O procedimento identifica versão, responsável e aprovação | Permite reconhecer a orientação que deve ser seguida. |

**Procedimento proposto PR-NU-01, versão 0.1:** receber pedido com finalidade, identidade e período; encaminhar a Marina após exame técnico de Paulo; registrar a decisão; executar somente se houver aprovação e condições verificadas; Rui confere o encerramento e registra qualquer pendência. O procedimento depende de aprovação antes do uso real.

**Registro 4 — objetivo e preparação:** guarde a meta, o conjunto observado, a data de corte a usar, responsáveis e recursos. Calcule a linha de base com G04 abaixo. No tema de operação, use o pedido S01 para examinar a clareza do procedimento.

**Confira:** outro integrante conseguiria localizar a versão vigente, identificar quem decide e saber qual evidência precisa guardar?

### Exemplo de medição: linha de base

**Orientação aplicada:** itens 5 e 10 da política — definir objetivos e acompanhar resultados. A seção 9.1 da ISO trata da medição e avaliação.

A amostra **G04 é anterior à proposta de procedimento**. Ela serve como linha de base para o objetivo de encerramento; não demonstra o efeito de PR-NU-01 ou da simulação S01. Use como corte o instante da revisão descrita em G04.

| Situação no corte da revisão G04 | Quantidade | Tratamento no cálculo |
|---|---:|---|
| Prazo vigente vencido, encerramento comprovado | **4** | Numerador e denominador. |
| Prazo vigente vencido, sem comprovação | **1** | Somente denominador; pendência. |
| Prorrogação aprovada e ainda vigente | **1** | Fora do conjunto de vencidas. |

**Registro 6 — medição:** `fonte G04 → corte da revisão → 4/5 → pendência a verificar por TI`. Numa nova revisão, registrar data/hora do corte, prazos vigentes e evidências para recalcular com a mesma regra.

**Confira:** por que a prorrogação ainda vigente fica fora, mas a autorização vencida sem comprovação precisa permanecer no denominador?

</div>

<a id="passo-a-passo-sgsi"></a>
<a id="passo-5-colocar-o-procedimento-a-prova"></a>

## 8. Operação: aprovação, condições e execução {#tema-8}

<div class="theme-summary" markdown="1">

**Síntese**

- O pedido informa finalidade, identidade e período.
- A autoridade registra decisão e limites.
- A execução depende de aprovação e condições verificadas.
- Execução e encerramento exigem evidências próprias.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-08.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-08.svg" alt="Pedido → Aprovação e condições → Execução → Encerramento. Decisão simulada; execução ainda exige evidência." /></a>
</figure>

**Aplicação:** comparar S01 no acordo original e no arranjo proposto.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

A simulação a seguir usa o escopo, a diretriz e os papéis propostos. A designação e a aprovação são condições fictícias para examinar o procedimento; não comprovam execução nem modificam os registros originais.

<a id="passo-5-colocar-o-processo-em-operacao-e-guardar-o-rastro"></a>

**Orientação aplicada:** item 8 da política — acesso com finalidade e período, autorização, acompanhamento e encerramento. A seção 8 da ISO/IEC 27001 trata da operação do que foi planejado.

#### Solicitação S01 — manutenção do portal

| Campo | Dado fictício fornecido |
|---|---|
| Finalidade | Corrigir a apresentação do catálogo no portal, preservando pedidos e documentos internos. |
| Solicitante | Setor comercial da Nuvora. |
| Técnica indicada | Lia, do Suporte Norte. |
| Identidade informada | `suporte-portal`; a atribuição individual e as permissões efetivas ainda precisam de verificação. |
| Período solicitado | 10/09/2026, das 14h às 15h; datas fictícias do caso. |
| Acompanhamento proposto | Paulo, da coordenação de TI. |
| Conferência proposta | Rui, de TI, ao término do período. |
| Aprovação no pedido original | Ausente. |

#### Compare o mesmo pedido em dois estados

| Estado examinado | Decisão sustentada | O que ainda não aconteceu |
|---|---|---|
| **Acordo original G03:** exige aprovação, mas não define o aprovador. | Manter S01 pendente e encaminhar a definição da autoridade. | Não há aprovação nem execução demonstrada. |
| **Arranjo proposto:** Marina tem a autoridade descrita na tema de responsabilidades e PR-NU-01 identifica as etapas. | Encaminhar S01 a Marina após exame técnico; registrar sua decisão simulada. | Ter definido papéis não autoriza automaticamente o pedido. |

**Decisão simulada fornecida:** Marina aprova somente a correção do catálogo no período solicitado, condicionada à verificação das permissões da identidade e ao acompanhamento de Paulo. Não autoriza alteração de dados dos pedidos nem divulgação de documentos internos. Se as condições não puderem ser verificadas antes do início, a manutenção não deve começar e o pedido volta à responsável pelo serviço.

**Registro 5 — resultado da simulação:** `S01 → estado examinado → autoridade → decisão e condições → evidência ainda necessária`. Não preencha “executado” ou “encerrado” com base apenas na aprovação.

**Confira:** qual impedimento foi resolvido pela definição dos papéis e qual verificação continua necessária antes de iniciar o acesso?

</div>

<a id="passo-7-auditar-o-processo-e-levar-decisoes-a-direcao"></a>

## 9. Monitoramento, auditoria e análise crítica {#tema-9}

<div class="theme-summary" markdown="1">

**Síntese**

- **Monitoramento:** acompanha medidas e pendências.
- **Auditoria:** compara evidências com critérios, com imparcialidade.
- **Análise crítica:** a direção avalia adequação, mudanças e recursos.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-09.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-09.svg" alt="Medidas → Achados de auditoria → Mudanças do contexto → Decisões da direção. A direção considera evidências, contexto e recursos." /></a>
</figure>

**Aplicação:** distinguir “faltou comprovação” de “precisamos alterar recursos ou responsabilidades”.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

**Orientação aplicada:** item 10 da política — realizar auditorias e análises críticas em intervalos planejados. Na ISO, auditoria interna está em 9.2 e análise crítica da direção em 9.3.

**Faça:** planeje uma verificação do processo em relação a critérios definidos, com escopo, responsabilidade e imparcialidade. Separe o exame das evidências da decisão da direção sobre adequação, mudanças e recursos.

| Quem examina | Pergunta que orienta o trabalho | Saída esperada |
|---|---|---|
| Responsável pela revisão semanal | Quantos encerramentos têm comprovação? | Medida e pendências. |
| Auditor competente e imparcial | O procedimento aprovado foi seguido? | Achados sustentados por evidências. |
| Direção | O SGSI continua adequado? Que mudanças e recursos são necessários? | Decisões, responsáveis e acompanhamento. |

**Prepare a auditoria:** inclua autoridade, prazo e rastreabilidade nos critérios. Evite que uma pessoa avalie sozinha seu próprio trabalho. A direção também precisa considerar mudanças no fornecedor e dificuldades de recurso, além do indicador.

**Registre:** critério e escopo da auditoria, responsável, evidências a examinar, achados quando houver execução e decisões a levar à direção.

**Confira:** o documento diferencia auditoria planejada de realizada? A direção recebeu uma decisão necessária, além do indicador?

!!! example "Exemplo público — o que acontece depois de uma auditoria na UCL"
    No procedimento público de auditoria da UCL, as seções **4. Responsibilities** (responsabilidades) e **6. Audit Findings** (achados de auditoria) tratam da imparcialidade e do encaminhamento dos achados. As ações recebem identificador, responsável, prazo e estado para acompanhamento. Consulte o [RISM05, versão 4.1, revisão de 11/04/2025](https://isms.arc.ucl.ac.uk/rism05-audit_procedure/).

    **Aplique à Nuvora:** se uma auditoria confirmar que a comprovação de encerramento exigida pelo procedimento está ausente, registre o achado e atribua a ação de investigar a causa, com responsável, prazo e estado. A ausência de comprovação, por si só, ainda não demonstra uso indevido do acesso. Esse encaminhamento prepara a análise de melhoria.

    O procedimento publicado descreve como auditar. Ele não fornece, sozinho, o resultado de uma auditoria executada.

</div>

<a id="passo-8-corrigir-o-desvio-e-verificar-a-melhoria"></a>

## 10. Correção, ação corretiva e melhoria {#tema-10}

<div class="theme-summary" markdown="1">

**Síntese**

- **Correção:** tratar a situação identificada.
- **Causa:** investigar por que o desvio ocorreu.
- **Ação corretiva:** agir sobre a causa confirmada.
- **Eficácia:** avaliar nova evidência e revisar quando necessário.

<figure class="didactic-figure thematic-figure" tabindex="0" role="group" aria-label="Esquema; role lateralmente se necessário">
<a href="../../assets/m1/sinteses/A08-10.svg" target="_blank" rel="noopener" aria-label="Abrir esquema ampliado"><img src="../../assets/m1/sinteses/A08-10.svg" alt="Desvio e correção → Causa confirmada → Ação corretiva → Verificar eficácia. Nova evidência pode reabrir a investigação." /></a>
</figure>

**Aplicação:** indicar quando atribuir um responsável resolveria a causa e quando seria insuficiente.

</div>

<div class="study-explanation" markdown="1">

**Explicação e exemplo**

**Orientação aplicada:** item 10 da política — tratar desvios, examinar causas e verificar ações. Na ISO, melhoria contínua está em 10.1 e não conformidade/ação corretiva em 10.2.

**Faça:** diante de um requisito não atendido, trate a situação, investigue sua causa, decida a ação necessária e verifique o resultado. Não presuma que toda falta de registro tem a mesma causa.

**Exemplo condicionado:** se a causa confirmada for falta de responsável pelo encerramento, atribua esse papel e teste o fluxo. Se a causa for outra, a ação precisa mudar. A nova amostra permitirá avaliar o resultado; ainda não temos essa evidência.

**Registre:** `desvio → correção → causa verificada → ação corretiva → responsável/prazo → evidência de eficácia`.

**Confira:** você está propondo a coleta ou já dispõe do resultado? Mantenha essa diferença explícita. O ciclo reabre contexto, riscos e planos quando as condições mudam.

</div>

<a id="sintese-dos-oito-passos-o-que-cada-registro-acrescentou"></a>

## Checklist do esboço de SGSI

| Passo | Orientação aplicada | Registro ou estado alcançado nesta aula |
|---|---|---|
| 1. Contexto e escopo | Política, item 1: serviços abrangidos. | Portal, pedidos, documentos e manutenção contratada delimitados. |
| 2. Política e autoridade | Itens 3 e 8: papéis e acesso autorizado. | Diretriz avaliada e arranjo proposto; manutenção ou adaptação justificada. |
| 3. Riscos | Item 4: critérios e tratamento. | Risco candidato e pergunta; comparação fica para A09. |
| 4. Objetivo e apoio | Itens 5 e 6: resultado e condições de trabalho. | Meta, responsáveis e procedimento proposto. |
| 5. Operação | Item 8: acesso delimitado e acompanhado. | S01 com decisão simulada; execução não demonstrada. |
| 6. Medição | Item 10: acompanhamento. | Linha de base G04: 4/5; efeito da proposta ainda desconhecido. |
| 7. Auditoria e análise crítica | Item 10: examinar e decidir. | Plano de exame e decisões a encaminhar. |
| 8. Melhoria | Item 10: tratar causas e verificar eficácia. | Ação condicionada à causa e coleta futura. |

Você tem um **esboço com decisões e pendências**, não um SGSI implantado. A ordem apresentada organiza o exercício; a norma não impõe um roteiro único de implantação. Guarde os registros para a atividade da A09, que completará a avaliação e a decisão de risco.

## Atividade {#atividade}

Guarde os registros disponíveis de contexto, escopo, diretriz, papéis, objetivo e acompanhamento. Na [atividade de governança, riscos e controles da A09](A09-decisao-de-riscos.md#atividade), você aplicará esses conceitos a **uma central fictícia de empréstimo de equipamentos tecnológicos**, levantando seis riscos e propondo controles. Explique a mudança de escopo; a política do portal não cobre automaticamente o novo ambiente. A entrega reúne A08–A09 e inclui análise e avaliação de controles, sem envio separado na A08. Se não houver registro próprio, a A09 fornece a base necessária e pede que sua origem seja identificada.


## Síntese e próxima decisão

A falha conhecida orientou uma proposta de processo com escopo, autoridade, recursos e acompanhamento. Sua implantação e seu resultado ainda precisam de evidência. A organização ainda precisa decidir **quais riscos tratar primeiro e o que pode aceitar**. Na [A09](A09-decisao-de-riscos.md), aplicaremos **escopo e autoridade de decisão** a seis riscos digitais já formulados num novo ambiente fornecido. A análise, a escolha dos controles e a avaliação de evidências serão concluídas nesse encontro.

**Revisão rápida:**

1. Como as seções 5, 8 e 9 da ISO/IEC 27001 conectam autoridade, operação e evidência no acesso do fornecedor?
2. Em G04, por que o denominador é cinco e que conclusão os 80% não permitem?
3. Por que preencher o esboço e selecionar um controle não comprova a implantação de um SGSI?

**Transferência:** em um hospital ou outra organização, identifique uma decisão que um técnico consegue executar, mas que precisa ser autorizada por quem responde pela operação.

<a id="2-o-caso-valeverde-documentos-para-examinar"></a>

## Consulta: documentos do caso {#documentos-do-caso}

<a id="como-o-portal-da-valeverde-deveria-funcionar"></a>

### Funcionamento do portal e chamado G02

A **Nuvora** é a empresa fictícia deste exercício. Ela recebe pedidos pela web e mantém uma operação de embalagem. O **setor comercial** cuida dos pedidos e das informações oferecidas aos clientes. A **equipe de TI** administra o portal e os acessos. A empresa contratada **Suporte Norte** executa mudanças no portal quando recebe uma solicitação aprovada.

O portal oferece um catálogo público de produtos. Também há documentos de trabalho do comercial, como planilhas de custos e margens de venda, que devem permanecer disponíveis somente à equipe autorizada. **Publicar um documento**, neste caso, significa colocá-lo à disposição para leitura pelo portal. Poder enviar um arquivo ao sistema não significa ter autoridade para torná-lo público.

| Documento do exercício | Conteúdo e uso | Quem deveria poder ler |
|---|---|---|
| `catalogo-produtos.pdf` | Produtos oferecidos aos clientes. | Qualquer visitante, inclusive sem entrar em uma conta. |
| `margens-agosto.xlsx` | Custos e margens usados pelo comercial para negociar pedidos. | Pessoas do comercial com permissão para esse trabalho. |
| `margens-setembro.xlsx` | Atualização mensal das mesmas informações internas. | Pessoas do comercial com permissão para esse trabalho. |

Os nomes e os registros abaixo são dados fictícios para leitura em sala. Você não precisa baixar essas planilhas, abrir um portal ou reproduzir um teste.

### G02 — o atendimento que retirou a primeira planilha

Um **chamado de suporte** é um registro de atendimento: descreve o problema comunicado à equipe, a ação realizada e o motivo do encerramento. Leia o chamado G02 fornecido para esta aula:

> **Solicitante:** setor comercial da Nuvora.

> **Problema informado:** a planilha interna `margens-agosto.xlsx` pode ser baixada sem entrar em uma conta pelo endereço do portal cujo caminho é `/publicacoes/margens-agosto.xlsx`.

> **Ação registrada pela TI:** retirada dessa cópia da área pública.

> **Verificação registrada:** depois da retirada, a TI abriu o mesmo endereço sem entrar em uma conta; o portal deixou de entregar a planilha. O catálogo público continuou disponível em `/publicacoes/catalogo-produtos.pdf`.

> **Encerramento:** chamado encerrado porque a cópia indicada deixou de estar disponível naquele endereço.

> **Informação ausente:** o registro não define quem aprova a publicação de novos documentos nem registra uma mudança na regra de acesso para os próximos arquivos.

O **caminho** é a parte do endereço que identifica o recurso solicitado ao portal. Aqui, `/publicacoes/margens-agosto.xlsx` identifica a cópia da planilha e `/publicacoes/catalogo-produtos.pdf` identifica o catálogo. São caminhos ilustrativos, não endereços de um laboratório disponível. Verificar o acesso a um arquivo significa, neste exemplo, solicitar seu endereço e observar se o portal entrega o conteúdo.

A verificação registrada em G02 permite afirmar que **a cópia de agosto deixou de ser entregue pelo endereço examinado**. Ela não demonstra que o portal passou a verificar permissão em cada leitura: retirar um arquivo também impede sua entrega, mesmo sem corrigir a autorização. Também não informa se alguém de fora baixou a planilha antes da retirada.

!!! question "Confira o alcance do teste"
    Depois que a TI retirou `margens-agosto.xlsx`, seu endereço deixou de entregar a planilha. Esse resultado prova que o portal impedirá a publicação pública de `margens-setembro.xlsx`? Explique qual condição o teste não examinou.

### A segunda publicação expõe a decisão que faltava

Uma semana depois, o Suporte Norte colocou `margens-setembro.xlsx` em `/publicacoes/margens-setembro.xlsx`. O registro fornecido para o exercício informa que essa nova planilha também pôde ser baixada sem entrar em uma conta. O fornecedor afirma que atendeu a um pedido do comercial; o comercial afirma que pediu a atualização para uso interno. Não há aprovação registrada para disponibilizá-la ao público.

Temos duas ocorrências diferentes: a cópia de agosto foi retirada; a de setembro foi publicada depois. Não se trata do mesmo arquivo reaparecendo. A exposição de setembro mostra que a retirada de agosto não bastou para manter a restrição nas publicações seguintes. Ainda precisamos confirmar como o portal foi configurado e quem recebeu autoridade para decidir sobre a publicação.

!!! question "Decida sobre a próxima publicação"
    O fornecedor recebe outra planilha de margens, sem aprovação de acesso público. O portal deve liberá-la a qualquer visitante? Justifique distinguindo a necessidade de atualizar o documento da autorização para divulgá-lo.

### Organização, suporte e revisão de acessos

A publicação das planilhas depende de pessoas e de um serviço contratado. Para definir quem decide, precisamos conhecer as atribuições e os acordos da empresa. Os registros G01–G04 abaixo são os insumos de gestão deste exercício; cada identificação permite citar a evidência usada na decisão.

O Suporte Norte também apoia a engenharia em períodos de manutenção previamente aprovados. Esse acesso precisa de autorização própria: receber permissão para atualizar documentos no portal não autoriza intervir no processo de embalagem. A aplicação de pedidos não precisa enviar comandos ao processo industrial.

| Documento | Conteúdo fornecido | O que ele não comprova |
|---|---|---|
| **G01 — Organização** | Direção aprova recursos; comercial responde pelos pedidos e pela finalidade das informações comerciais; TI administra portal e identidades; operação aprova intervenções que afetem produção; fornecedor executa o suporte contratado. | Que já esteja definido quem pode aprovar a divulgação pública das planilhas de margens ou substituir um aprovador ausente. |
| **G02 — Chamado de publicação** | A TI retirou a cópia pública de `margens-agosto.xlsx` e confirmou que seu endereço deixou de entregá-la, mantendo o catálogo acessível. Encerrou o atendimento sem definir quem aprova novas publicações. Na semana seguinte, `margens-setembro.xlsx` ficou pública após pedido de atualização interna ao fornecedor. | Que houve correção da regra de autorização para novos arquivos ou que terceiros baixaram as planilhas. |
| **G03 — Acordo de suporte** | O fornecedor executa mudanças mediante solicitação aprovada. O texto não define quem pode aprovar, por quanto tempo vale o acesso ou como confirmar seu encerramento. | Que um pedido de atualização autorize divulgação pública ou que qualquer solicitante possa liberar manutenção. |
| **G04 — Revisão de acessos** | De seis autorizações de manutenção do portal examinadas, cinco já venceram. Quatro das cinco têm registro de encerramento; uma não tem comprovação. A sexta tem prorrogação aprovada e ainda está vigente. | Que a autorização sem comprovação permaneça tecnicamente ativa. É necessário verificar. |

**Como analisar:** o acordo G03 exige uma aprovação, mas não identifica o papel que pode concedê-la. Registre “autoridade de aprovação não definida no acordo” e indique que definição precisa ser obtida. Depois encontre outra lacuna de responsabilidade nos registros. A ausência de aprovação documentada exige confirmação; sozinha, não demonstra invasão ou intenção maliciosa.

**Leitura da síntese:** acompanhe o caminho de G03 até a decisão central. O acordo exige aprovação, mas não define quem pode concedê-la. Explique que autoridade precisa ser atribuída e qual registro permitiria conferir a aprovação. Essa ligação entre regra, pessoa e acompanhamento prepara o Sistema de Gestão de Segurança da Informação.

### Ilustrações do caso

<figure class="didactic-figure didactic-figure-wide">
  <a href="../../assets/m1/A08-contexto-governanca.jpeg" target="_blank" rel="noopener">
    <img src="../../assets/m1/A08-contexto-governanca.jpeg" alt="Equipe corrige uma falha no portal e o teste passa. A falha se repete e expõe dúvidas sobre quem define a regra, executa a proteção e acompanha seu cumprimento." />
  </a>
  <figcaption><strong>O teste passou. Quem mantém a proteção na próxima mudança?</strong> A repetição da exposição no portal abre a investigação sobre regras, autoridade e acompanhamento. Ilustração fornecida pelo docente para o caso fictício; não representa evidência de incidente real. Clique para ampliar.</figcaption>
</figure>

<figure class="didactic-figure didactic-figure-wide" id="sintese-visual-valeverde">
  <a href="../../assets/m1/A08-nuvora-responsabilidades.png" target="_blank" rel="noopener">
    <img src="../../assets/m1/A08-nuvora-responsabilidades.png" alt="Síntese dos registros Nuvora: G01 deixa a autoridade de publicação indefinida; G02 distingue retirada da planilha de agosto de nova exposição em setembro; G03 exige aprovação de suporte sem definir responsabilidades; G04 contém cinco autorizações vencidas, quatro com encerramento comprovado e uma sem comprovação, além de uma ainda vigente. A análise liga cada lacuna a quem pode decidir e acompanhar." loading="lazy" />
  </a>
  <figcaption><strong>Da lacuna no registro à responsabilidade pela decisão.</strong> Na publicação de planilhas, falta definir quem autoriza sua divulgação; no suporte, quem aprova, limita e acompanha o acesso. Em G04, contamos autorizações de suporte, e a falta de comprovação de encerramento exige verificação. Ilustração fornecida pelo docente, adaptada ao caso fictício desta aula. Clique para ampliar.</figcaption>
</figure>

## Consulta: política integral {#politica-exemplo}

**Identificação:** PSI-NU-01 · **Versão:** 0.1 · **Data:** 08/09/2026.

**Estado:** proposta didática, ainda sem aprovação.

**Responsável pela manutenção:** responsável pelo SGSI a ser designado pela direção.

**Aprovação prevista:** direção da Nuvora. **Vigência:** após aprovação formal e comunicação.

**Revisão proposta:** anual ou diante de mudança relevante; esta periodicidade é uma escolha do exemplo.

#### 1. Finalidade e abrangência

Esta política orienta a proteção das informações necessárias ao recebimento e à manutenção dos pedidos digitais e à publicação de documentos no portal. Aplica-se às pessoas, processos, instalações e recursos que sustentam esses serviços, incluindo o trabalho contratado do Suporte Norte. Abrange informações digitais, impressas ou comunicadas verbalmente nesse contexto. A relação com a operação de embalagem deverá ser esclarecida antes de ampliar o escopo do SGSI.

#### 2. Compromissos de segurança

A Nuvora se compromete a preservar a **confidencialidade**, permitindo conhecimento por pessoas autorizadas; a **integridade**, protegendo a exatidão e as alterações legítimas; e a **disponibilidade**, mantendo informações e serviços acessíveis quando necessários. Compromete-se a satisfazer os requisitos de segurança aplicáveis, inclusive legais e contratuais, e a melhorar continuamente o SGSI. Esses requisitos serão identificados e mantidos atualizados.

#### 3. Liderança e responsabilidades

A direção aprova esta política, define autoridades e disponibiliza recursos. Os gestores respondem pelos riscos e pelas necessidades de informação de seus processos. O responsável pelo SGSI coordena o acompanhamento e comunica pendências à direção. TI e prestadores executam as medidas sob sua responsabilidade. Todas as pessoas abrangidas devem conhecer as orientações pertinentes, proteger as informações utilizadas e comunicar situações suspeitas. Delegações e substituições deverão ter limites explícitos.

#### 4. Riscos e seleção de controles

A organização avaliará os riscos com critérios definidos e comparáveis, identificará seus proprietários e decidirá o tratamento necessário. A aceitação do risco que permanecer dependerá de autoridade competente e justificativa registrada. Os controles serão selecionados conforme riscos e requisitos aplicáveis, confrontados com o Anexo A da ISO/IEC 27001:2022 e registrados na Declaração de Aplicabilidade. Mudanças relevantes exigirão reavaliação.

#### 5. Objetivos e planejamento

A organização estabelecerá objetivos de segurança coerentes com esta política e suas necessidades de negócio, mensuráveis quando praticável. Cada objetivo terá responsável, ações, recursos, prazo e forma de avaliar resultados. Alterações no SGSI serão planejadas para preservar sua finalidade e seu funcionamento.

#### 6. Pessoas, comunicação e documentos

As pessoas receberão orientação e preparação compatíveis com suas responsabilidades. A organização verificará as competências necessárias e a eficácia das ações de capacitação. A política será comunicada internamente e disponibilizada às partes interessadas conforme pertinente. Documentos e registros terão identificação, versão, aprovação quando cabível, proteção, acesso e conservação definidos, com prevenção do uso de versões obsoletas.

#### 7. Proteção das informações e operação

As informações e os recursos terão responsáveis e proteção proporcional à sua importância e aos riscos. As medidas deverão considerar todo o ciclo de uso, incluindo criação, acesso, compartilhamento, armazenamento e descarte. A organização estabelecerá orientações específicas para acesso, uso de dispositivos, proteção física, configuração, mudanças, cópias de segurança e recuperação, conforme sua necessidade. A continuidade dos serviços será planejada e verificada de acordo com as prioridades do negócio.

#### 8. Serviços contratados e mudanças

A contratação e a alteração de serviços deverão considerar os riscos à informação, as responsabilidades e os requisitos de segurança. O acesso de fornecedores será autorizado para finalidade e período definidos, acompanhado e encerrado quando deixar de ser necessário. Mudanças relevantes terão avaliação de impacto, aprovação e verificação do resultado.

#### 9. Incidentes e exceções

A organização manterá um processo para comunicar, avaliar e responder a incidentes, preservar evidências pertinentes, recuperar o serviço e registrar lições aprendidas. Exceções às orientações de segurança dependerão de análise, justificativa, autoridade, prazo e acompanhamento. Uma exceção interna não dispensa o atendimento a obrigações aplicáveis.

#### 10. Avaliação e melhoria

A organização acompanhará objetivos e controles, realizará auditorias internas com objetividade e imparcialidade e promoverá análises críticas pela direção em intervalos planejados. Desvios serão tratados, suas causas examinadas e a eficácia das ações corretivas verificada. Decisões sobre mudanças, recursos e oportunidades de melhoria serão registradas e acompanhadas.

**Fim da política de exemplo.** [Baixar a política em PDF — 2 páginas](../assets/m1/A08-politica-seguranca-nuvora.pdf).

### Como essa política se relaciona à ISO/IEC 27001

A tabela relaciona os principais blocos do SGSI à proposta. **Não é uma lista completa de conformidade:** os documentos e as evidências deverão ser definidos conforme os requisitos e o contexto. A numeração dos itens da política é própria deste exemplo.

| Seção da ISO/IEC 27001 | Orientação na política | O que precisa ser desenvolvido além dela |
|---|---|---|
| **4 — Contexto** | Itens 1 e 2: abrangência e requisitos. | Análise do contexto e das partes interessadas; escopo documentado e processos do SGSI. Considerar a relevância da mudança climática, conforme a Emenda 1:2024. |
| **5 — Liderança** | Itens 2, 3 e 6: compromissos, autoridade e comunicação. | Aprovação, comunicação e demonstração do envolvimento da direção. |
| **6 — Planejamento** | Itens 4 e 5: riscos, objetivos e mudanças. | Critérios, avaliação de riscos, plano de tratamento, Declaração de Aplicabilidade e plano dos objetivos. |
| **7 — Apoio** | Itens 3 e 6: recursos, competências e documentos. | Recursos disponíveis, registros de competência e documentos controlados. |
| **8 — Operação** | Itens 4, 7, 8 e 9: execução e mudanças. | Procedimentos aplicados, avaliações de risco atualizadas e registros da execução do tratamento. |
| **9 — Avaliação** | Item 10: medição, auditoria e análise crítica. | Resultados das medidas, auditorias e decisões da direção. |
| **10 — Melhoria** | Itens 2, 9 e 10: compromisso, lições e correção. | Registro dos desvios, causas, ações e verificação de eficácia. |

A política proposta oferece orientação para o conjunto. Ela não torna obrigatório todo controle do Anexo A da ISO/IEC 27001:2022, nem substitui a seleção justificada, a execução e a avaliação. Estrutura normativa: [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) e [prévia do SIST](https://preview.sist.si/sist-preview/82875/4d4c8d99950c4b39aaa39cf5cb9a0bf3/ISO-IEC-27001-2022.pdf).

### Vídeo — como a ISO 27001 organiza a gestão {#video-sgsi}

Assista a **“ISO 27001 - ENTENDA DE VEZ!”**, do canal **Guru De Risco** (**14 min 12 s**, em português). Observe como a gestão de riscos se relaciona aos processos de um Sistema de Gestão de Segurança da Informação.

![type:video](https://www.youtube.com/embed/V6N6luxhnd0)

[Abrir o vídeo no YouTube](https://www.youtube.com/watch?v=V6N6luxhnd0). Publicado em 29 de março de 2022, o vídeo apresenta o conceito de SGSI. Para a numeração e a estrutura dos requisitos, use o mapa da edição de outubro de 2022 apresentado nesta página.

**Aplique à Nuvora:** o acordo de suporte exige aprovação, mas não define quem pode concedê-la. Explique qual responsabilidade precisa ser estabelecida e como a empresa poderia acompanhar seu cumprimento. Relacione sua resposta a uma das seções da norma apresentadas na tabela: liderança, planejamento, operação, avaliação ou melhoria.

Um SGSI conecta a regra às pessoas, aos recursos e à revisão dos resultados. Na Nuvora, isso significa identificar quem pode aprovar o suporte, registrar a execução e verificar o encerramento do acesso. Use esse vínculo para justificar a responsabilidade proposta para o acesso do fornecedor.

## Referências

- [UCL — documentação pública do SGSI de dados de pesquisa](https://isms.arc.ucl.ac.uk/), com [escopo RISM01](https://isms.arc.ucl.ac.uk/rism01-scope/) e [procedimento de auditoria RISM05](https://isms.arc.ucl.ac.uk/rism05-audit_procedure/).
- [LNCC — Política de Segurança da Informação, versão 3.1](https://www.gov.br/lncc/pt-br/acesso-a-informacao/institucional/politica-de-seguranca-1/politicas-de-seguranca-da-informacao/02-psi-v3-1.pdf) — exemplo brasileiro de documento integrante do SGSI.

- [Guru De Risco — ISO 27001 - ENTENDA DE VEZ!](https://www.youtube.com/watch?v=V6N6luxhnd0) — vídeo complementar, 14 min 12 s, em português.

- [ISO/IEC 27001:2022 — requisitos do SGSI](https://www.iso.org/standard/27001) e [catálogo da IEC](https://webstore.iec.ch/en/publication/79694).
- [Prévia ISO/IEC 27001:2022 — SIST](https://preview.sist.si/sist-preview/82875/4d4c8d99950c4b39aaa39cf5cb9a0bf3/ISO-IEC-27001-2022.pdf) — estrutura e numeração; o exemplo de implantação é autoral.
- [ISO/IEC 27001:2022/Amd 1:2024](https://www.iso.org/standard/88435.html) — atualização sobre mudança climática.
- [ISO/IEC 27001 Auditing Practices Group — nota sobre SoA](https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IECJTC1-SC27-WG1_N3298_Auditing%20Practices%20Note%20-%20SoA.pdf) — material educacional de interpretação, não substitui a norma nem constitui requisito adicional.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — negar por padrão e verificar permissão por requisição.

Fontes consultadas em 8 de setembro de 2026. A Nuvora, seus documentos, metas e registros numéricos são fictícios. Os documentos da UCL e do LNCC são fontes institucionais reais, resumidas para comparação.
