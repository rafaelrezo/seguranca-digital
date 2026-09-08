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

1. Delimitar o escopo de um Sistema de Gestão de Segurança da Informação e identificar suas dependências externas.
2. Distinguir quem responde pelo risco, quem executa o controle e quem autoriza uma exceção.
3. Formular um objetivo verificável e uma rotina de acompanhamento que permitam corrigir desvios.

**Duração:** 100 minutos. **Recursos:** navegador, esta página e um editor de texto ou caderno. A investigação será conduzida pelo professor; você participa prevendo resultados, comparando documentos e justificando decisões. Nenhuma instalação é necessária.

Se precisar retomar um conceito, consulte [controles de segurança](../fundamentos_de_seguranca_digital/J-Controles_seguranca.md) e [governança](../governanca/introducao.md). A leitura a seguir contém o percurso necessário mesmo sem abrir essas referências.

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

**Consulta conduzida pelo professor:** abra a [seção “Deny by Default”](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#deny-by-default), que recomenda negar acesso por padrão. Depois, localize [“Validate the Permissions on Every Request”](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html#validate-the-permissions-on-every-request), que orienta verificar permissões em cada requisição. Se o site não abrir, estes dois resumos permitem realizar a mesma comparação.

**Aplicação:** para `margens-setembro.xlsx`, negar por padrão sustenta recusar uma leitura sem permissão aplicável. Verificar a cada requisição significa aplicar a decisão sempre que a planilha for solicitada, não apenas quando for cadastrada. Explique qual parte da regra cada orientação sustenta e encerre a consulta.

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

### Uma estrutura que acompanha a decisão

| Parte da gestão | Pergunta no caso | Registro útil |
|---|---|---|
| Contexto e escopo | Que processo e informação queremos proteger? De quem dependemos? | Declaração de escopo e interfaces. |
| Liderança | Quem estabelece direção, assume decisões e disponibiliza recursos? | Papéis e autoridade. |
| Planejamento | Que riscos e objetivos orientam o trabalho? | Critérios, prioridades e plano. |
| Apoio e operação | Quem sabe executar? Qual procedimento e informação estão disponíveis? | Orientação vigente, execução e registros. |
| Avaliação | Que evidência permite julgar o resultado? | Medição, auditoria e análise crítica. |
| Melhoria | O que muda quando a evidência mostra um desvio? | Correção, responsável e verificação posterior. |

Leia essa estrutura como um percurso. O escopo determina quais interfaces importam; os papéis atribuem as decisões; os objetivos orientam o acompanhamento; a evidência permite revisar o que foi decidido.

Uma organização pode ter muitos documentos e ainda manter um acordo de suporte, como G03, sem definir quem pode aprovar o acesso do fornecedor. O valor do SGSI depende de conectar o que está escrito ao que as pessoas conseguem executar e demonstrar.

## 4. Delimitar o escopo sem esconder uma dependência

O escopo do modelo técnico respondia qual parte do sistema seria analisada. O **escopo do SGSI** também precisa considerar processos, pessoas, informação, unidades e interfaces organizacionais. Não se limita a listar servidores.

Compare duas propostas:

> **Proposta A:** “O SGSI cobre o servidor do portal.”
>
> **Proposta B:** “O SGSI cobre o recebimento e a manutenção dos pedidos digitais da ValeVerde, incluindo informação de clientes e pedidos, equipe comercial e de TI, administração de identidades e mudanças no portal. O suporte contratado é uma dependência externa sujeita às regras de aprovação e acompanhamento. Intervenções no processo de embalagem exigem autorização da operação e análise específica.”

A proposta A identifica um equipamento, mas deixa obscuros os processos que publicam informação e autorizam terceiros. A proposta B permite perguntar quem decide sobre publicação e suporte. Isso não significa que ela já seja suficiente para toda a empresa: localizações, outras unidades, obrigações e interfaces ainda podem exigir detalhamento.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: A dependência externa cruza uma interface governada.">
    <img src="../../assets/m1/esquemas/A08-escopo-interface.svg" alt="A dependência externa cruza uma interface governada." loading="lazy" />
  </div>
  <figcaption><strong>A dependência externa cruza uma interface governada.</strong> O contorno delimita os pedidos digitais; a relação com o fornecedor permanece explícita. A conexão com a operação exige uma decisão própria. <a href="../../assets/m1/esquemas/A08-escopo-interface.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

**Aplicação conduzida:** o chamado G02 encerrou a retirada da planilha sem definir quem aprova novas publicações; o acordo G03 exige aprovação para suporte sem nomear quem pode concedê-la. Para cada lacuna, sublinhe uma expressão da proposta B que inclui esse processo ou dependência na gestão. Depois indique uma informação que falta confirmar antes de ampliar o escopo à operação industrial.

Não ter controle direto sobre a infraestrutura interna do fornecedor não elimina a dependência. A ValeVerde pode estabelecer requisitos contratuais, limitar a interface de acesso, pedir evidências e acompanhar o serviço, dentro do que efetivamente consegue exigir e verificar.

!!! question "Teste o escopo"
    O fornecedor troca a pessoa que presta suporte. Qual parte da proposta B precisa continuar funcionando para que a troca não produza acesso sem aprovação? Uma resposta que cite somente o servidor está completa?

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

**Verificação coletiva:** para cada linha do seu quadro, tente responder: a pessoa sabe que recebeu a responsabilidade? Pode tomar a decisão? Tem recurso para executá-la? Quem recebe a informação se ela não puder agir? Uma lacuna em qualquer resposta impede considerar o arranjo concluído.

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

## 7. Construa e confira o registro de governança

Use o [modelo editável de P1](../assets/m1/P1-modelo.txt). Você também pode copiar os campos abaixo para seu editor; não depende de conta em outro serviço.

1. **Escopo:** processo, informação, pessoas e interfaces incluídas; limite que não elimina a dependência externa.
2. **Papéis:** proprietário do risco, executor e autoridade de exceção, com recurso ou condição de escalonamento.
3. **Objetivo:** resultado que será acompanhado, conjunto observado e critério.
4. **Rotina:** fonte de evidência, responsável, momento de revisão e resposta a desvio.

Comece pelo exemplo de publicação trabalhado. Depois adapte o raciocínio à solicitação do fornecedor na atividade compartilhada. A alteração de contexto exige decidir, não apenas trocar nomes.

| Se seu registro contém… | Verifique… |
|---|---|
| “Toda a empresa” | É possível identificar processo, interface e responsabilidade? |
| “Responsável: TI” | Qual decisão pode tomar e quando precisa escalar? |
| “Meta: mais segurança” | Qual evidência distingue cumprimento de desvio? |
| “Sem registro, houve invasão” | A ausência não deveria gerar uma verificação antes dessa conclusão? |
| “Fornecedor fora do escopo” | Como será governada a interface da qual a operação depende? |

Ao terminar, outra pessoa deve conseguir localizar quem decide, quem executa e o que acontece se o objetivo não for atendido.

## Atividade {#atividade}

Esta aula inicia **P1 — Governança e decisão de tratamento**, a atividade compartilhada de A08–A12. Abra o [enunciado único de P1](../atividades/P1-governanca-e-riscos.md#atividade) e preencha apenas a seção de governança do mesmo documento. Não há uma entrega separada de A08.

Os documentos G01–G04 e o exemplo desta página são suficientes para acompanhar a aula. Se um link externo não abrir, use as explicações aqui e registre a referência pendente; se não puder editar o modelo, use caderno ou editor local. Não há recursos de laboratório a desligar. Guarde o registro para continuar a análise.

## Síntese e próxima decisão

A falha conhecida passou a integrar um processo com escopo, autoridade, recursos e acompanhamento. A organização ainda precisa decidir **quais riscos tratar primeiro e o que pode aceitar**. Na [A09](A09-decisao-de-riscos.md), reabriremos precisamente o **escopo e a autoridade de decisão** do registro, usando dois riscos já formulados.

**Revisão rápida:**

1. Por que testar uma correção não substitui estabelecer sua gestão?
2. Em G04, por que o denominador é cinco e que conclusão os 80% não permitem?
3. Que informação diferencia um executor de controle de uma autoridade de aceitação de risco?

**Transferência:** em um hospital ou outra organização, identifique uma decisão que um técnico consegue executar, mas que precisa ser autorizada por quem responde pela operação.

## Referências

- [ISO/IEC 27001:2022 — requisitos do SGSI](https://www.iso.org/standard/27001). O catálogo também identifica a emenda de 2024; não reproduzimos o texto normativo integral.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — negar por padrão e verificar permissão por requisição.

Fontes consultadas em 8 de setembro de 2026. Empresa, documentos, metas e registros numéricos desta página são fictícios.
