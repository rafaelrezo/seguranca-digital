# A08 — Quem governa a segurança depois que a falha é conhecida?

<figure class="didactic-figure didactic-figure-wide">
  <a href="../../assets/m1/A08-contexto-governanca.jpeg" target="_blank" rel="noopener">
    <img src="../../assets/m1/A08-contexto-governanca.jpeg" alt="Equipe corrige uma falha no portal e o teste passa. A falha se repete e expõe dúvidas sobre quem define a regra, executa a proteção e acompanha seu cumprimento." />
  </a>
  <figcaption><strong>O teste passou. Quem mantém a proteção na próxima mudança?</strong> A repetição da exposição no portal abre a investigação sobre regras, autoridade e acompanhamento. Ilustração fornecida pelo docente para o caso fictício; não representa evidência de incidente real. Clique para ampliar.</figcaption>
</figure>

Na A07, o relatório fornecido descrevia a exploração de um portal, a execução de comandos e a alteração de um parâmetro industrial. O trabalho com o **MITRE ATT&CK** consistiu em relacionar esses comportamentos às técnicas e justificar o mapeamento. Esse mapa ajuda a descrever o comportamento adversário. Ao recebê-lo, a organização ainda precisa decidir **quem cuida da proteção, quem autoriza mudanças e como acompanha os resultados**.

A A08 desenvolve essa pergunta de gestão com um **novo caso fictício, apresentado por completo abaixo**: a ValeVerde publicou uma planilha interna de margens em seu portal. A TI retirou a cópia pública e verificou que ela deixou de estar disponível. Na atualização do mês seguinte, outra planilha interna foi publicada para qualquer visitante. O fornecedor e o comercial discordam sobre quem deveria aprovar essa divulgação.

O exercício permite examinar por que resolver uma ocorrência não define, por si só, as responsabilidades pelas próximas mudanças. Os arquivos e o atendimento deste caso são insumos novos da A08; não são fatos do relatório analisado na A07 nem resultados de testes realizados pela turma.

## Objetivos e preparação

Ao concluir esta aula, você deverá conseguir:

1. Relacionar as seções da ISO/IEC 27001 às decisões necessárias para criar um SGSI.
2. Construir um esboço de SGSI com contexto, escopo, política proposta, papéis e objetivo verificável.
3. Planejar operação, avaliação e melhoria, distinguindo registro proposto de evidência de execução.

**Duração:** 100 minutos de aula; vídeo complementar de 14 min 12 s para estudo. **Recursos:** navegador, esta página e um editor de texto ou caderno. Compare os documentos, preveja resultados e registre suas decisões com justificativa. Nenhuma instalação é necessária.

Se precisar retomar um conceito, consulte [controles de segurança](../fundamentos_de_seguranca_digital/J-Controles_seguranca.md) e [governança](../governanca/introducao.md).

## 1. O que precisa mudar antes da próxima publicação?

### Como o portal da ValeVerde deveria funcionar

A **ValeVerde** é a empresa fictícia deste exercício. Ela recebe pedidos pela web e mantém uma operação de embalagem. O **setor comercial** cuida dos pedidos e das informações oferecidas aos clientes. A **equipe de TI** administra o portal e os acessos. A empresa contratada **Suporte Norte** executa mudanças no portal quando recebe uma solicitação aprovada.

O portal oferece um catálogo público de produtos. Também há documentos de trabalho do comercial, como planilhas de custos e margens de venda, que devem permanecer disponíveis somente à equipe autorizada. **Publicar um documento**, neste caso, significa colocá-lo à disposição para leitura pelo portal. Poder enviar um arquivo ao sistema não significa ter autoridade para torná-lo público.

| Documento do exercício | Conteúdo e uso | Quem deveria poder ler |
|---|---|---|
| `catalogo-produtos.pdf` | Produtos oferecidos aos clientes. | Qualquer visitante, inclusive sem entrar em uma conta. |
| `margens-agosto.xlsx` | Custos e margens usados pelo comercial para negociar pedidos. | Pessoas do comercial com permissão para esse trabalho. |
| `margens-setembro.xlsx` | Atualização mensal das mesmas informações internas. | Pessoas do comercial com permissão para esse trabalho. |

Os nomes e os registros abaixo são dados fictícios para leitura em sala. Você não precisa baixar essas planilhas, abrir um portal ou reproduzir um teste.

### G02 — o atendimento que retirou a primeira planilha

Um **chamado de suporte** é um registro de atendimento: descreve o problema comunicado à equipe, a ação realizada e o motivo do encerramento. Leia o chamado G02 fornecido para esta aula:

> **Solicitante:** setor comercial da ValeVerde.  
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

### Da decisão a uma regra verificável

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

O fornecedor ainda precisa saber quem pode autorizar uma publicação pública. A orientação técnica ajuda a aplicar permissões; a ValeVerde precisa definir quem tem autoridade para concedê-las, quem executa a mudança e quem acompanha o resultado. Se alguém conceder indevidamente acesso público à planilha, o portal pode cumprir exatamente essa permissão e ainda expor informação interna.

**Decisão em sala:** no caso de `margens-setembro.xlsx`, explique por que “o comercial pediu uma atualização” não basta para autorizar acesso público. Em seguida, identifique a responsabilidade que a ValeVerde precisa atribuir antes de aceitar uma nova publicação.

## 2. O caso ValeVerde: documentos para examinar

A publicação das planilhas depende de pessoas e de um serviço contratado. Para definir quem decide, precisamos conhecer as atribuições e os acordos da empresa. Os registros G01–G04 abaixo são os insumos de gestão deste exercício; cada identificação permite citar a evidência usada na decisão.

O Suporte Norte também apoia a engenharia em períodos de manutenção previamente aprovados. Esse acesso precisa de autorização própria: receber permissão para atualizar documentos no portal não autoriza intervir no processo de embalagem. A aplicação de pedidos não precisa enviar comandos ao processo industrial.

| Documento | Conteúdo fornecido | O que ele não comprova |
|---|---|---|
| **G01 — Organização** | Direção aprova recursos; comercial responde pelos pedidos e pela finalidade das informações comerciais; TI administra portal e identidades; operação aprova intervenções que afetem produção; fornecedor executa o suporte contratado. | Que já esteja definido quem pode aprovar a divulgação pública das planilhas de margens ou substituir um aprovador ausente. |
| **G02 — Chamado de publicação** | A TI retirou a cópia pública de `margens-agosto.xlsx` e confirmou que seu endereço deixou de entregá-la, mantendo o catálogo acessível. Encerrou o atendimento sem definir quem aprova novas publicações. Na semana seguinte, `margens-setembro.xlsx` ficou pública após pedido de atualização interna ao fornecedor. | Que houve correção da regra de autorização para novos arquivos ou que terceiros baixaram as planilhas. |
| **G03 — Acordo de suporte** | O fornecedor executa mudanças mediante solicitação aprovada. O texto não define quem pode aprovar, por quanto tempo vale o acesso ou como confirmar seu encerramento. | Que um pedido de atualização autorize divulgação pública ou que qualquer solicitante possa liberar manutenção. |
| **G04 — Revisão de acessos** | De seis autorizações de suporte examinadas, cinco já venceram. Quatro das cinco têm registro de encerramento; uma não tem comprovação. A sexta tem prorrogação aprovada e ainda está vigente. | Que a autorização sem comprovação permaneça tecnicamente ativa. É necessário verificar. |

**Como analisar:** o acordo G03 exige uma aprovação, mas não identifica o papel que pode concedê-la. Registre “autoridade de aprovação não definida no acordo” e indique que definição precisa ser obtida. Depois encontre outra lacuna de responsabilidade nos registros. A ausência de aprovação documentada exige confirmação; sozinha, não demonstra invasão ou intenção maliciosa.

<figure class="didactic-figure didactic-figure-wide" id="sintese-visual-valeverde">
  <a href="../../assets/m1/A08-valeverde-responsabilidades.png" target="_blank" rel="noopener">
    <img src="../../assets/m1/A08-valeverde-responsabilidades.png" alt="Síntese dos registros ValeVerde: G01 deixa a autoridade de publicação indefinida; G02 distingue retirada da planilha de agosto de nova exposição em setembro; G03 exige aprovação de suporte sem definir responsabilidades; G04 contém cinco autorizações vencidas, quatro com encerramento comprovado e uma sem comprovação, além de uma ainda vigente. A análise liga cada lacuna a quem pode decidir e acompanhar." loading="lazy" />
  </a>
  <figcaption><strong>Da lacuna no registro à responsabilidade pela decisão.</strong> Na publicação de planilhas, falta definir quem autoriza sua divulgação; no suporte, quem aprova, limita e acompanha o acesso. Em G04, contamos autorizações de suporte, e a falta de comprovação de encerramento exige verificação. Ilustração fornecida pelo docente, adaptada ao caso fictício desta aula. Clique para ampliar.</figcaption>
</figure>

**Leitura da síntese:** acompanhe o caminho de G03 até a decisão central. O acordo exige aprovação, mas não define quem pode concedê-la. Explique que autoridade precisa ser atribuída e qual registro permitiria conferir a aprovação. Essa ligação entre regra, pessoa e acompanhamento prepara o Sistema de Gestão de Segurança da Informação.

## 3. O que um SGSI organiza

Um **Sistema de Gestão de Segurança da Informação (SGSI)** é a organização contínua de políticas, responsabilidades, processos e recursos para tratar a segurança da informação. Ele permite que decisões sejam repetidas, avaliadas e corrigidas quando pessoas, sistemas e condições mudam.

Retirar a cópia pública de `margens-agosto.xlsx` foi uma intervenção técnica no caso fornecido. Definir quem pode publicar, como a aprovação é registrada, quem acompanha exceções e quando a regra será revista pertence à gestão dessa proteção. As duas dimensões dependem uma da outra: uma política sem execução não protege o arquivo; uma correção sem gestão pode desaparecer na próxima mudança.

A **ISO/IEC 27001:2022** estabelece requisitos para um SGSI. Seu propósito inclui estabelecer, implementar, manter e melhorar esse sistema, considerando os riscos da organização. A implantação pode ser útil mesmo sem buscar certificação. Nesta aula, usaremos sua estrutura para organizar o caso; produzir um documento didático não demonstra conformidade ou certificação. [Referência oficial da ISO/IEC 27001](https://www.iso.org/standard/27001).

<figure class="didactic-figure" id="primeiro-esquema">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: A correção entra em um ciclo de gestão.">
    <img src="../../assets/m1/esquemas/A08-ciclo-sgsi.svg" alt="A correção entra em um ciclo de gestão." loading="lazy" />
  </div>
  <figcaption><strong>A correção entra em um ciclo de gestão.</strong> Siga as setas: uma nova mudança reabre responsabilidades, execução e acompanhamento. Por que a retirada da planilha de agosto não definiu quem aprovaria a publicação de setembro? <a href="../../assets/m1/esquemas/A08-ciclo-sgsi.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

### Como ler a ISO/IEC 27001 para construir o SGSI {#estrutura-iso27001}

A ValeVerde já identificou uma lacuna: o fornecedor recebe pedidos de mudança sem uma autoridade de aprovação claramente definida. Precisamos conferir quais outras decisões devem acompanhar essa responsabilidade para formar um sistema de gestão.

Uma **norma de requisitos** estabelece condições pelas quais um sistema pode ser avaliado. A ISO/IEC 27001 fornece essa referência para o SGSI. Ela não entrega uma política pronta para a ValeVerde nem determina quais cargos a empresa deve criar. A organização precisa traduzir os requisitos em processos adequados ao seu contexto. Para declarar conformidade, não pode excluir requisitos das seções 4 a 10. [Catálogo oficial da IEC](https://webstore.iec.ch/en/publication/79694).

Use a **edição de 2022**, junto da **Emenda 1:2024**. No [catálogo da ISO](https://www.iso.org/standard/27001), confira o ano e a emenda antes de consultar o sumário. A numeração identifica onde procurar um requisito; não é uma ordem rígida de implantação.

As seções **1 — Escopo**, **2 — Referências normativas** e **3 — Termos e definições** delimitam a aplicação da norma e seu vocabulário. O escopo da seção 1 descreve a própria norma; o escopo que a ValeVerde deve definir para seu SGSI é tratado em **4.3**. A introdução explica a finalidade e a integração do sistema à organização.

| Seção da norma | Pergunta para construir o SGSI da ValeVerde | Registro que usaremos no exemplo |
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

### O Anexo A entra quando é preciso conferir os controles

O **Anexo A** é uma referência de controles de segurança. Durante o tratamento de riscos, a organização confronta os controles que considera necessários com essa referência para identificar omissões. A **Declaração de Aplicabilidade**, também chamada **SoA** (*Statement of Applicability*), registra controles necessários, justificativas de inclusão, situação de implementação e razões para exclusões de controles do Anexo A. Controles necessários podem vir também de outras fontes. [Nota educacional do grupo de práticas de auditoria da ISO/IEC 27001](https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IECJTC1-SC27-WG1_N3298_Auditing%20Practices%20Note%20-%20SoA.pdf).

Na ValeVerde, “definir prazo e verificar o encerramento do acesso do fornecedor” é uma medida candidata porque responde à autorização vencida sem comprovação. A justificativa nasce dessa condição. Escrever “usar todos os controles” não demonstra que a seleção atende à necessidade. A ISO/IEC 27002 oferece orientação sobre controles; a ISO/IEC 27001 estabelece requisitos do sistema de gestão. A seleção será aprofundada depois da decisão de risco da A09.

**Confira a diferença:** “quem aprova a política?” é uma pergunta de liderança; “qual medida encerra o acesso no prazo?” é uma pergunta sobre controle. Ambas precisam de resposta para o mesmo serviço.

### Vídeo — como a ISO 27001 organiza a gestão {#video-sgsi}

Assista a **“ISO 27001 - ENTENDA DE VEZ!”**, do canal **Guru De Risco** (**14 min 12 s**, em português). Observe como a gestão de riscos se relaciona aos processos de um Sistema de Gestão de Segurança da Informação.

![type:video](https://www.youtube.com/embed/V6N6luxhnd0)

[Abrir o vídeo no YouTube](https://www.youtube.com/watch?v=V6N6luxhnd0). Publicado em 29 de março de 2022, o vídeo apresenta o conceito de SGSI. Para a numeração e a estrutura dos requisitos, use o mapa da edição de outubro de 2022 apresentado nesta página.

**Aplique à ValeVerde:** o acordo de suporte exige aprovação, mas não define quem pode concedê-la. Explique qual responsabilidade precisa ser estabelecida e como a empresa poderia acompanhar seu cumprimento. Relacione sua resposta a uma das seções da norma apresentadas na tabela: liderança, planejamento, operação, avaliação ou melhoria.

Um SGSI conecta a regra às pessoas, aos recursos e à revisão dos resultados. Na ValeVerde, isso significa identificar quem pode aprovar o suporte, registrar a execução e verificar o encerramento do acesso. Use esse vínculo para justificar a responsabilidade proposta para o acesso do fornecedor.

## 4. Definir o que o SGSI vai proteger {#4-delimitar-o-escopo-sem-esconder-uma-dependencia}

A ValeVerde usa um portal para receber pedidos e disponibilizar documentos. A equipe comercial trabalha com essas informações, TI mantém o portal e o Suporte Norte presta manutenção contratada. Antes de escrever a política de segurança, a empresa precisa responder: **quais dessas atividades serão abrangidas pelo SGSI?**

**Escopo do SGSI é a definição dos limites dessa gestão:** quais atividades, informações, pessoas e recursos serão abrangidos. Neste momento, estamos escolhendo o que será abrangido. A política será elaborada para orientar a proteção desse conjunto; ainda não estamos avaliando o cumprimento de uma política existente.

### Comece pela atividade e pelas pessoas envolvidas

Comece pelo serviço de pedidos digitais e identifique o que permite seu funcionamento:

| O que precisa entrar na gestão | Por que isso importa no caso |
|---|---|
| Documentos e informações dos pedidos | São informações utilizadas ou disponibilizadas pelo serviço. |
| Trabalho da equipe comercial | A equipe utiliza informações dos pedidos e seleciona documentos para publicação. |
| Trabalho de TI e funcionamento do portal | A equipe mantém os recursos que recebem pedidos e disponibilizam documentos. |
| Serviço de manutenção do Suporte Norte | A empresa conta com esse fornecedor para realizar manutenção no portal. |

### O que significa “dependência” aqui?

A ValeVerde contrata o Suporte Norte para realizar manutenção no portal. Para executar esse serviço, conta com o trabalho de outra empresa. **Essa necessidade de contar com um serviço, uma pessoa ou um recurso é uma dependência.** Como o Suporte Norte pertence a outra empresa, temos uma **dependência externa**.

Por isso, o escopo precisa considerar a manutenção contratada e o acesso do fornecedor ao portal. Isso delimita o serviço que será acompanhado. As regras sobre quem autoriza o acesso, por quanto tempo e como verificar seu encerramento serão estabelecidas na construção da política e dos procedimentos. A ValeVerde não passa a administrar toda a empresa fornecedora; considera a parte do serviço que atende ao seu portal.

### Compare duas formas de escrever o escopo

> **Proposta A:** “O SGSI cobre o servidor do portal.”

Esse texto identifica um equipamento, mas deixa uma dúvida: o SGSI também abrange o trabalho com os pedidos, a publicação de documentos e a manutenção contratada?

> **Proposta B:** “O SGSI abrange o recebimento e a manutenção dos pedidos digitais e a publicação de documentos no portal da ValeVerde. Inclui as informações de clientes e pedidos, os documentos publicados, o portal e as atividades das equipes comercial e de TI relacionadas a esses serviços. Abrange também a manutenção do portal realizada pelo Suporte Norte e o acesso utilizado pelo fornecedor nesse serviço.”

A proposta B identifica o conjunto para o qual a empresa vai estabelecer política, responsabilidades e procedimentos. Ela é um ponto de partida para o exercício; a empresa ainda precisaria identificar os locais e recursos envolvidos e confirmar os requisitos aplicáveis.

**Limite a confirmar:** o caso menciona a operação de embalagem, mas não detalha como a manutenção do portal poderia afetá-la. Antes de incluir essa operação no escopo, é preciso esclarecer essa relação. Se uma intervenção puder afetar a embalagem, será necessário avaliar seu efeito e obter autorização de quem responde pela operação.

!!! question "Confira seu escopo"
    A manutenção do portal faz parte da proposta B mesmo sendo executada por outra empresa? Localize o trecho que sustenta sua resposta e explique por que a ValeVerde depende desse serviço. Você está verificando o que o escopo abrange; as regras de acesso ainda serão definidas.

O escopo responde **“o que será abrangido?”**. A política estabelecerá **“quais compromissos e orientações de segurança serão adotados?”**. Para que essa política possa ser aprovada e colocada em prática, precisamos definir os responsáveis pelas decisões. Essa é a próxima etapa.

## 5. Responsabilidade precisa de autoridade e recurso

“TI é responsável pela segurança” concentra decisões diferentes numa frase que não explica quem pode agir. O analista pode configurar uma conta, mas talvez não possa aceitar uma interrupção de produção ou aprovar a contratação de pessoal.

**Proprietário do risco** é o papel com responsabilidade e autoridade para gerir aquele risco no contexto definido. **Executor do controle** realiza a medida. **Aprovador de exceção** pode autorizar uma condição diferente da regra, dentro de limites estabelecidos. **Responsável operacional** avalia o efeito da intervenção sobre o funcionamento do processo. Em uma organização pequena, uma pessoa pode acumular funções; as decisões e os limites ainda precisam ficar claros.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: Decidir, executar e acompanhar são responsabilidades distintas.">
    <img src="../../assets/m1/esquemas/A08-papeis-decisao.svg" alt="Decidir, executar e acompanhar são responsabilidades distintas." loading="lazy" />
  </div>
  <figcaption><strong>Decidir, executar e acompanhar são responsabilidades distintas.</strong> Localize o ponto em que a solicitação precisa de autoridade. Se faltar recurso ou surgir um desvio, a decisão precisa ser reaberta. <a href="../../assets/m1/esquemas/A08-papeis-decisao.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

### Exemplo trabalhado: mudança no portal

| Decisão ou ação | Papel proposto | Autoridade e recurso necessários | Evidência esperada |
|---|---|---|---|
| Definir quem pode publicar informação de pedidos | Gestor comercial, apoiado por TI | Conhecer finalidade e restrição da informação; aprovar regra do processo | Regra aprovada e acessível. |
| Aplicar a regra no portal | TI e fornecedor contratado | Permissão de mudança, tempo e ambiente de verificação | Registro de mudança e resultado do teste. |
| Autorizar exceção que ultrapassa o limite do gestor | Direção | Avaliar consequência e assumir decisão dentro das obrigações aplicáveis | Justificativa, duração e condição de revisão. |
| Acompanhar publicações e exceções | Responsável designado pelo gestor | Acesso aos registros e tempo para revisão | Revisão com desvio e encaminhamento. |

Essa é uma proposta para o caso fictício, não uma distribuição obrigatória de cargos determinada pela norma. Ela deve ser testada contra as condições da empresa.

**Aplique ao acordo de suporte G03:** ele exige solicitação aprovada, mas não define quem pode aprovar. Suponha que a ValeVerde designe um aprovador e que essa pessoa esteja ausente quando o fornecedor pedir acesso. A regra pode prever um substituto com autoridade delimitada. Criar uma conta porque “o chamado era urgente” não resolve a ausência de aprovação. A urgência precisa de um caminho de decisão definido, com registro e comunicação.

**Confira as responsabilidades:** para cada linha do seu quadro, tente responder: a pessoa sabe que recebeu a responsabilidade? Pode tomar a decisão? Tem recurso para executá-la? Quem recebe a informação se ela não puder agir? Uma lacuna em qualquer resposta impede considerar o arranjo concluído.

## 6. Objetivos que permitem descobrir se a gestão funciona

“Melhorar a segurança” expressa intenção, mas não informa como reconhecer melhora. Um objetivo útil relaciona resultado, objeto acompanhado, responsável, horizonte e critério de avaliação.

Considere o objetivo didático:

> “Na próxima revisão semanal, toda autorização de suporte cujo prazo tenha vencido terá uma verificação registrada de encerramento ou uma exceção válida identificada. TI reúne as evidências; o gestor do processo analisa os desvios; casos sem responsável são escalados à direção.”

O objetivo nomeia o universo observado: autorizações vencidas. Não mistura contas ainda válidas com as que deveriam ter terminado. Também distingue ausência de comprovação de acesso efetivamente ativo.

### Ler uma medida antes de tirar uma conclusão

O registro G04 reúne seis autorizações de suporte do fornecedor. Cinco já venceram. Quatro têm comprovação de encerramento. Portanto, a proporção com encerramento comprovado entre as vencidas é **4 ÷ 5 = 80%**. A sexta não entra nesse denominador porque sua prorrogação válida ainda não venceu.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: Quatro encerramentos comprovados entre cinco autorizações vencidas.">
    <img src="../../assets/m1/esquemas/A08-medida-evidencia.svg" alt="Quatro encerramentos comprovados entre cinco autorizações vencidas." loading="lazy" />
  </div>
  <figcaption><strong>Quatro encerramentos comprovados entre cinco autorizações vencidas.</strong> O ponto de interrogação significa falta de comprovação, não abuso demonstrado. A autorização ainda vigente fica fora do denominador. <a href="../../assets/m1/esquemas/A08-medida-evidencia.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

O resultado indica uma lacuna de comprovação em uma autorização vencida. Não demonstra que 20% da rede está insegura, nem que houve uso indevido. A próxima ação é verificar a autorização sem comprovação, decidir a resposta e corrigir o processo que permitiu a lacuna.

Uma meta de 100% nesse exemplo é uma escolha didática da organização, não um percentual universal imposto pela ISO. Mesmo atingida, ela mede o cumprimento desse critério; não prova segurança absoluta.

### Informação documentada e melhoria

A regra vigente precisa ser identificável: título, responsável, aprovação, versão e local de consulta. O registro de execução precisa permitir reconstruir o que foi feito. Manter acesso adequado e controlar alterações evita que duas equipes sigam instruções incompatíveis.

**Monitoramento** acompanha uma condição ou resultado. **Auditoria** examina evidências em relação a critérios definidos, com objetividade e imparcialidade. **Análise crítica da direção** usa resultados e mudanças para decidir adequação, prioridade e recursos. As três atividades podem se alimentar, mas não são o mesmo trabalho.

Se a revisão encontrar um acesso sem comprovação, a correção resolve aquela situação. A ação sobre a causa pode modificar o procedimento de encerramento e sua responsabilidade. Depois será necessário verificar se a mudança evitou a recorrência. “Escrever uma nova política” é uma ação possível; seu efeito ainda precisa de evidência.

## 7. Passo a passo: construir o SGSI da ValeVerde {#passo-a-passo-sgsi}

Abra o [modelo do registro de governança e riscos](../assets/m1/A09-modelo-governanca-riscos.txt) ou use um editor de texto. Identifique o registro como **“SGSI ValeVerde — esboço”**, com responsável pela redação, versão e data. Use os oito passos abaixo para ligar cada decisão ao que precisará existir na empresa.

Em cada registro, distinga **proposto**, **aprovado**, **executado** e **verificado**. Os exemplos são propostas para o exercício. Uma aprovação simulada não comprova implantação na empresa, e um plano de auditoria não é auditoria realizada.

### Passo 1 — Definir contexto, necessidades e escopo

**Onde procurar na norma:** seção 4, especialmente 4.1, 4.2 e 4.3.

**Faça:** descreva o processo a proteger e identifique quem depende dele. Registre a necessidade de cada parte interessada, sua origem e o que ainda precisa confirmar. Depois delimite o escopo, incluindo as interfaces com fornecedores.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema do passo: role lateralmente para ver todos os elementos.">
  <img src="../../assets/m1/esquemas/A08-passo1-escopo.svg" alt="Comercial, TI, pedidos e portal dentro do escopo proposto; Suporte Norte fornece manutenção externa." loading="lazy" />
  </div>
  <figcaption>Esquema do caso fictício ValeVerde. <a href="../../assets/m1/esquemas/A08-passo1-escopo.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

**Leia o esquema:** o suporte está fora da equipe da ValeVerde, mas seu serviço atende ao portal. Por isso, a manutenção contratada precisa ser considerada no escopo. A relação com a embalagem ainda precisa ser esclarecida.

Use a proposta B da seção 4 para escrever o escopo. Acrescente uma necessidade de quem utiliza o serviço e sua fonte. Obrigações legais e contratuais devem ser verificadas, não inventadas.

**Registre:** `processo → parte interessada → necessidade/fonte → limite ou dependência`.

**Confira:** é possível decidir se uma publicação de planilha e uma solicitação de manutenção pertencem ao escopo? Se a resposta depender apenas de uma lista de servidores, revise o texto.

A Emenda 1:2024 acrescenta a consideração de mudança climática ao contexto dos sistemas de gestão. Na ValeVerde, cabe verificar sua relevância, por exemplo, para a continuidade de energia e conectividade; o caso não fornece dados para concluir que esse risco existe ou foi tratado. [Emenda oficial](https://www.iso.org/standard/88435.html).

!!! example "Exemplo público — como a UCL delimita seu SGSI"
    A **University College London (UCL)** publica o escopo do SGSI de seus dados de pesquisa. O documento delimita ambientes de pesquisa confiáveis que processam dados altamente confidenciais; identifica pessoas e serviços envolvidos e explicita elementos fora do escopo. Isso torna a fronteira verificável, em vez de declarar apenas “proteger a universidade”. Consulte **1. Scope Statement** (declaração de escopo), **4. Scope Overview** (visão do escopo) e **8. Out of scope** (fora do escopo) no [RISM01, versão 10.4, revisão de 31/03/2025](https://isms.arc.ucl.ac.uk/rism01-scope/).

    **Aplique à ValeVerde:** escreva uma frase que inclua o portal, a publicação de documentos e a interface com o suporte. Depois indique uma exclusão e explique por que ela não elimina uma dependência relevante. A fronteira escolhida pela UCL atende ao contexto de pesquisa; a ValeVerde precisa justificar a sua.

### Passo 2 — Estabelecer política e autoridade

**Onde procurar:** seção 5, com política em 5.2 e papéis em 5.3.

**Faça:** escreva uma orientação de alto nível para o escopo e indique quem poderá aprová-la. Diferencie essa orientação do procedimento que detalhará como executá-la.

**Exemplo de trecho de política proposto:** “A ValeVerde protege as informações dos pedidos e da manutenção, preservando confidencialidade, integridade e disponibilidade. Publicações e acessos dependem de autoridade definida. A empresa se compromete com os requisitos aplicáveis e com a melhoria contínua da gestão da segurança.”

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema do passo: role lateralmente para ver todos os elementos.">
  <img src="../../assets/m1/esquemas/A08-passo2-autoridade.svg" alt="Direção aprova política, autoridade decide sobre acesso e TI executa; ausência exige substituto autorizado." loading="lazy" />
  </div>
  <figcaption>Esquema do caso fictício ValeVerde. <a href="../../assets/m1/esquemas/A08-passo2-autoridade.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

**Leia o esquema como proposta de papéis.** Aprovar a política e autorizar um acesso são decisões diferentes. Indique quem poderá assumir cada uma e como encaminhar pedidos na ausência do aprovador.

**Registre:** política proposta, aprovador, papéis, limites de autoridade e encaminhamento de exceções.

**Confira:** um pedido urgente do fornecedor encontra uma pessoa autorizada a decidir e uma forma de escalonamento? “TI resolve” ainda deixa a decisão indefinida.

!!! example "Exemplo público brasileiro — política e aprovação no LNCC"
    O **Laboratório Nacional de Computação Científica (LNCC)** publica sua Política de Segurança da Informação, versão 3.1, de 21/10/2025. Na **seção 1**, a política registra compromisso da administração, atendimento a requisitos e melhoria contínua. A **seção 15** separa elaboração, verificação e aprovação. Localize essas seções nas páginas **1–2 e 18** do [PDF oficial do LNCC](https://www.gov.br/lncc/pt-br/acesso-a-informacao/institucional/politica-de-seguranca-1/politicas-de-seguranca-da-informacao/02-psi-v3-1.pdf).

    **Aplique à ValeVerde:** acrescente ao seu trecho de política quem redige, quem verifica a viabilidade e quem aprova. Uma pessoa pode acumular funções quando isso for adequado, mas a autoridade precisa ficar explícita. O técnico que prepara o procedimento de manutenção não recebe automaticamente poder para autorizar qualquer acesso.

    Esse documento permite observar compromissos e responsabilidades formalizados. A execução do SGSI precisaria ser examinada por outros registros. Obrigações próprias de um órgão público brasileiro não são automaticamente requisitos da empresa fictícia.

### Passo 3 — Preparar avaliação e tratamento dos riscos

**Onde procurar:** avaliação em 6.1.2, tratamento em 6.1.3 e objetivos em 6.2. As avaliações e o tratamento também precisam ser realizados e atualizados na operação, tratada na seção 8.

**Faça:** defina como comparar riscos e quem pode aceitar a condição que permanecer. Para cada risco, registre informação protegida, condição, consequência, evidência, incerteza e proprietário. Só então compare alternativas de tratamento.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema do passo: role lateralmente para ver todos os elementos.">
  <img src="../../assets/m1/esquemas/A08-passo3-risco.svg" alt="Falta de comprovação é evidência; acesso disponível é pergunta; uso fora do prazo é risco candidato; encerramento é medida proposta." loading="lazy" />
  </div>
  <figcaption>Esquema do caso fictício ValeVerde. <a href="../../assets/m1/esquemas/A08-passo3-risco.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

**Limite da leitura:** falta de comprovação não confirma acesso disponível nem uso indevido. Compare a medida candidata com outras alternativas e preserve a manutenção autorizada.

Na [A09](A09-decisao-de-riscos.md), as fichas R01/R02 e os critérios fornecidos permitem completar essa avaliação. Agora registre o risco candidato e a pergunta pendente. Não antecipe uma classificação sem examinar os critérios.

**Registro de tratamento a construir:** `risco → alternativa → controle necessário → responsável/recurso → residual estimado → aprovação`.

**Como isso chega à SoA:** para a medida candidata de encerramento, escreva a justificativa ligada ao risco e marque “proposta; implementação não demonstrada”. A correspondência com o Anexo A e as justificativas de exclusão ainda precisam ser examinadas. Essa linha de trabalho não é uma Declaração de Aplicabilidade completa.

**Confira:** cada controle candidato responde a uma condição identificada? A pessoa indicada pode aprovar o tratamento e aceitar o residual dentro de seus limites?

### Passo 4 — Definir objetivos e preparar a execução

**Onde procurar:** objetivo em 6.2, mudanças planejadas em 6.3 e apoio na seção 7.

**Faça:** transforme a intenção em resultado verificável e identifique recurso, competência, comunicação e documento necessários. O quadro de responsabilidades só poderá funcionar se as pessoas souberem o que fazer e tiverem condições de agir.

**Objetivo proposto:** verificar todas as autorizações vencidas na revisão semanal.

| Para executar o objetivo | Preparação necessária |
|---|---|
| TI reúne e confere os registros | Acesso à fonte e tempo reservado. |
| Aprovador decide sobre exceções | Conhecimento dos limites de sua autoridade. |
| Fornecedor segue o procedimento | Comunicação da versão vigente. |
| Empresa troca o fornecedor | Atualização planejada dos papéis e das orientações. |

Um procedimento simples pode orientar: receber pedido com finalidade e prazo, obter aprovação, executar acesso delimitado, conferir encerramento e registrar desvio. Dê ao documento título, versão, responsável e aprovação. Identifique onde a versão vigente ficará disponível e quem pode alterá-la.

**Registre:** `objetivo → ação → recurso/competência → comunicação → prazo → critério de avaliação`.

**Confira:** uma pessoa recém-designada conseguiria executar a tarefa usando a orientação vigente? Se depender de “alguém explica depois”, falta apoio para a operação.

### Passo 5 — Colocar o processo em operação e guardar o rastro

**Onde procurar:** seção 8, incluindo controle operacional e execução da avaliação e do tratamento.

**Faça:** aplique o procedimento a uma solicitação, conservando a aprovação e o resultado. Mudanças e serviços externos relevantes ao SGSI também precisam de controle.

**Simulação em papel:** examine um pedido do Suporte Norte com finalidade, identidade, início, fim e responsável pelo encerramento. Confira também quem pode aprová-lo.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema do passo: role lateralmente para ver todos os elementos.">
  <img src="../../assets/m1/esquemas/A08-passo5-aprovacao.svg" alt="Sem autoridade confirmada, parar e encaminhar. Com autoridade, registrar decisão e executar somente se aprovado; conferir encerramento." loading="lazy" />
  </div>
  <figcaption>Esquema do caso fictício ValeVerde. <a href="../../assets/m1/esquemas/A08-passo5-aprovacao.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

**Ponto de parada:** o acordo fornecido não identifica o aprovador. A simulação permanece pendente, mesmo com os outros campos preenchidos.

**Registre:** `pedido → decisão/autoridade → execução → conferência → evidência`, com o estado de cada etapa. Uma simulação testa a clareza do procedimento; a operação real ainda precisará produzir registros.

**Confira:** seria possível reconstruir quem autorizou e quem encerrou o acesso? Sem evidência, mantenha o resultado como desconhecido.

### Passo 6 — Medir o resultado sem exagerar a conclusão

**Onde procurar:** seção 9.1.

**Faça:** defina o que medir, com qual fonte, quem analisa e quando. Use o resultado para localizar um desvio e encaminhá-lo.

**Leia a amostra de seis autorizações do registro G04:**

| Situação observada | Quantidade | Entra no cálculo? |
|---|---:|---|
| Vencida, com encerramento comprovado | **4** | Sim: atende ao critério. |
| Vencida, sem comprovação | **1** | Sim: precisa de verificação. |
| Ainda vigente | **1** | Não: o prazo ainda não venceu. |

> **4 com comprovação ÷ 5 vencidas = 80%.**
>
> A medida descreve essa amostra. A falta de comprovação exige verificação de TI.

**Registre:** `medida → conjunto observado → resultado → limite → responsável pela verificação`.

**Confira:** sua conclusão permanece restrita às autorizações examinadas? “A empresa está 80% segura” não é uma interpretação sustentada.

### Passo 7 — Auditar o processo e levar decisões à direção

**Onde procurar:** auditoria interna em 9.2 e análise crítica da direção em 9.3.

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

    **Aplique à ValeVerde:** se uma auditoria confirmar que a comprovação de encerramento exigida pelo procedimento está ausente, registre o achado e atribua a ação de investigar a causa, com responsável, prazo e estado. A ausência de comprovação, por si só, ainda não demonstra uso indevido do acesso. Esse encaminhamento prepara a melhoria do passo 8.

    O procedimento publicado descreve como auditar. Ele não fornece, sozinho, o resultado de uma auditoria executada.

### Passo 8 — Corrigir o desvio e verificar a melhoria

**Onde procurar:** seção 10, com melhoria contínua em 10.1 e não conformidade/ação corretiva em 10.2.

**Faça:** diante de um requisito não atendido, trate a situação, investigue sua causa, decida a ação necessária e verifique o resultado. Não presuma que toda falta de registro tem a mesma causa.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema do passo: role lateralmente para ver todos os elementos.">
  <img src="../../assets/m1/esquemas/A08-passo8-melhoria.svg" alt="Correção da situação, investigação da causa, ação corretiva e nova amostra; recorrência reabre investigação." loading="lazy" />
  </div>
  <figcaption>Esquema do caso fictício ValeVerde. <a href="../../assets/m1/esquemas/A08-passo8-melhoria.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

**Exemplo condicionado:** se a causa confirmada for falta de responsável pelo encerramento, atribua esse papel e teste o fluxo. Se a causa for outra, a ação precisa mudar. A nova amostra permitirá avaliar o resultado; ainda não temos essa evidência.

**Registre:** `desvio → correção → causa verificada → ação corretiva → responsável/prazo → evidência de eficácia`.

**Confira:** você está propondo a coleta ou já dispõe do resultado? Mantenha essa diferença explícita. O ciclo reabre contexto, riscos e planos quando as condições mudam.

### O que foi construído e o que ainda precisa acontecer

Você tem um esboço com escopo, política proposta, papéis, objetivo e acompanhamento, além do caminho para avaliar riscos, operar e melhorar. Um SGSI implantado exige que essas decisões sejam aprovadas, executadas e avaliadas com evidências suficientes. A ordem dos oito passos é uma organização deste exercício; a norma não impõe um roteiro único de implantação.

Guarde o esboço. Na atividade ao final da A09, consolide o recorte de governança e a decisão de risco; não apresente o roteiro de implantação como comprovação de conformidade nem como certificação.

## Atividade {#atividade}

Guarde o contexto, o escopo, a política proposta, os papéis, o objetivo e a rotina de acompanhamento que você registrou. Eles serão usados na [atividade de governança e decisão de tratamento, ao final da A09](A09-decisao-de-riscos.md#atividade), junto da avaliação dos riscos. A entrega reúne o trabalho das duas aulas; não há envio separado na A08.


## Síntese e próxima decisão

A falha conhecida passou a integrar um processo com escopo, autoridade, recursos e acompanhamento. A organização ainda precisa decidir **quais riscos tratar primeiro e o que pode aceitar**. Na [A09](A09-decisao-de-riscos.md), reabriremos precisamente o **escopo e a autoridade de decisão** do registro, usando dois riscos já formulados.

**Revisão rápida:**

1. Como as seções 5, 8 e 9 conectam autoridade, operação e evidência no acesso do fornecedor?
2. Em G04, por que o denominador é cinco e que conclusão os 80% não permitem?
3. Por que preencher o esboço e selecionar um controle não comprova a implantação de um SGSI?

**Transferência:** em um hospital ou outra organização, identifique uma decisão que um técnico consegue executar, mas que precisa ser autorizada por quem responde pela operação.

## Referências

- [UCL — documentação pública do SGSI de dados de pesquisa](https://isms.arc.ucl.ac.uk/), com [escopo RISM01](https://isms.arc.ucl.ac.uk/rism01-scope/) e [procedimento de auditoria RISM05](https://isms.arc.ucl.ac.uk/rism05-audit_procedure/).
- [LNCC — Política de Segurança da Informação, versão 3.1](https://www.gov.br/lncc/pt-br/acesso-a-informacao/institucional/politica-de-seguranca-1/politicas-de-seguranca-da-informacao/02-psi-v3-1.pdf) — exemplo brasileiro de documento integrante do SGSI.

- [Guru De Risco — ISO 27001 - ENTENDA DE VEZ!](https://www.youtube.com/watch?v=V6N6luxhnd0) — vídeo complementar, 14 min 12 s, em português.

- [ISO/IEC 27001:2022 — requisitos do SGSI](https://www.iso.org/standard/27001) e [catálogo da IEC](https://webstore.iec.ch/en/publication/79694).
- [Prévia ISO/IEC 27001:2022 — SIST](https://preview.sist.si/sist-preview/82875/4d4c8d99950c4b39aaa39cf5cb9a0bf3/ISO-IEC-27001-2022.pdf) — estrutura e numeração; o exemplo de implantação é autoral.
- [ISO/IEC 27001:2022/Amd 1:2024](https://www.iso.org/standard/88435.html) — atualização sobre mudança climática.
- [ISO/IEC 27001 Auditing Practices Group — nota sobre SoA](https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IECJTC1-SC27-WG1_N3298_Auditing%20Practices%20Note%20-%20SoA.pdf) — material educacional de interpretação, não substitui a norma nem constitui requisito adicional.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — negar por padrão e verificar permissão por requisição.

Fontes consultadas em 8 de setembro de 2026. A ValeVerde, seus documentos, metas e registros numéricos são fictícios. Os documentos da UCL e do LNCC são fontes institucionais reais, resumidas para comparação.
