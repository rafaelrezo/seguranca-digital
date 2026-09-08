# A08 — Quem governa a segurança depois que a falha é conhecida?

A equipe corrigiu uma exposição no portal. O teste passou e o chamado foi encerrado. Na semana seguinte, outro arquivo interno apareceu na área pública. O fornecedor afirma que publicou o material a pedido do negócio; o negócio afirma que a TI deveria ter impedido a publicação.

**Quem tinha autoridade para definir a regra, quem deveria executá-la e quem precisava acompanhar seu cumprimento?** Um teste técnico responde se determinada condição funcionou naquele momento. Para manter a proteção ao longo das mudanças, precisamos organizar decisões, responsabilidades e acompanhamento.

## Objetivos e preparação

Ao concluir esta aula, você deverá conseguir:

1. Delimitar o escopo de um Sistema de Gestão de Segurança da Informação e identificar suas dependências externas.
2. Distinguir quem responde pelo risco, quem executa o controle e quem autoriza uma exceção.
3. Formular um objetivo verificável e uma rotina de acompanhamento que permitam corrigir desvios.

**Duração:** 100 minutos. **Recursos:** navegador, esta página e um editor de texto ou caderno. A investigação será conduzida pelo professor; você participa prevendo resultados, comparando documentos e justificando decisões. Nenhuma instalação é necessária.

Se precisar retomar um conceito, consulte [controles de segurança](../fundamentos_de_seguranca_digital/J-Controles_seguranca.md) e [governança](../governanca/introducao.md). A leitura a seguir contém o percurso necessário mesmo sem abrir essas referências.

## 1. Da correção conhecida à pergunta de gestão

No caso das cestas, a regra era relacionar a identidade reconhecida à ação e ao recurso. O servidor precisava aplicar a autorização; a verificação deveria incluir tanto o acesso legítimo quanto a tentativa indevida. Essa cadeia continua útil, mas não resolve sozinha a responsabilidade pelas mudanças futuras.

| Parte da decisão | Exemplo já resolvido |
|---|---|
| Ameaça | Uma pessoa obtém dados de um recurso ao qual não deveria ter acesso. |
| Requisito | O serviço verifica a autorização em cada operação sobre o recurso. |
| Controle | A verificação ocorre no servidor antes de devolver o dado. |
| Verificação | Comparar um caso permitido e um negado, preservando o funcionamento legítimo. |
| Pergunta que permanece | Quem mantém essa regra, autoriza mudanças e verifica se ela continua atendida? |

A **OWASP** é uma comunidade que produz recursos abertos de segurança de aplicações. Suas referências desempenham funções diferentes: uma *Cheat Sheet* reúne orientação prática; o ASVS organiza requisitos de verificação; o WSTG orienta testes. Uma referência não decide automaticamente qual medida atende às necessidades da organização.

**Consulta conduzida:** abra a [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) e procure as seções “Deny by Default” e “Validate the Permissions on Every Request”. A primeira orienta negar quando não houver permissão definida; a segunda orienta verificar autorização em cada requisição. Relacione uma delas à linha “requisito” da tabela. Se a página não abrir, use essas duas orientações resumidas para a mesma comparação.

O ganho agora é perguntar quem transforma a orientação em uma regra mantida pela organização. Copiar uma recomendação para um documento não cria responsabilidade, recurso ou acompanhamento.

!!! question "Pare e decida"
    O teste passou ontem. Isso permite afirmar que todas as futuras alterações do portal respeitarão a mesma regra? Identifique qual processo ainda precisa existir para sustentar essa afirmação.

## 2. O caso ValeVerde: documentos para examinar

A **ValeVerde** é uma empresa fictícia que recebe pedidos pela web e depende de uma operação de embalagem. O portal pode ser representado pelo Juice Shop no laboratório; os documentos abaixo são insumos novos deste caso, não resultados obtidos na aplicação ou nas aulas anteriores.

O fornecedor **Suporte Norte** mantém o portal e apoia a engenharia em janelas aprovadas. A aplicação de pedidos não precisa enviar comandos ao processo industrial. Uma eventual permissão para manutenção é uma decisão separada.

| Documento | Conteúdo fornecido | O que ele não comprova |
|---|---|---|
| **G01 — Organização** | Direção aprova recursos; comercial responde pelo processo de pedidos; TI administra portal e identidades; operação aprova intervenções que afetem produção; fornecedor executa o suporte contratado. | Que essas responsabilidades já estejam formalizadas ou funcionando. |
| **G02 — Chamado de publicação** | A equipe retirou um documento interno de uma área pública, registrou a verificação daquela rota e encerrou o chamado. Não indicou quem aprova futuras publicações. | Que outras rotas foram verificadas ou que a causa não voltará a ocorrer. |
| **G03 — Acordo de suporte** | O fornecedor executa mudanças mediante solicitação aprovada. O texto não define quem pode aprovar, por quanto tempo vale o acesso ou como confirmar seu encerramento. | Que qualquer solicitante tenha autoridade para liberar manutenção. |
| **G04 — Revisão de acessos** | De seis autorizações examinadas, cinco já venceram. Quatro das cinco têm registro de encerramento; uma não tem comprovação. A sexta tem prorrogação aprovada e ainda está vigente. | Que a autorização sem comprovação permaneça tecnicamente ativa. É necessário verificar. |

**Como analisar:** leia primeiro o identificador e o conteúdo literal. Em seu registro, separe “o documento informa” de “precisamos confirmar”. Escolha uma decisão que ficou sem responsável definido. Não deduza invasão, vazamento ou atividade maliciosa a partir da ausência de um registro.

## 3. O que um SGSI organiza

Um **Sistema de Gestão de Segurança da Informação (SGSI)** é a organização contínua de políticas, responsabilidades, processos e recursos para tratar a segurança da informação. Ele permite que decisões sejam repetidas, avaliadas e corrigidas quando pessoas, sistemas e condições mudam.

No caso, remover o arquivo é uma intervenção técnica. Definir quem pode publicar, como a aprovação é registrada, quem acompanha exceções e quando a regra será revista pertence à gestão dessa proteção. As duas dimensões dependem uma da outra: uma política sem execução não protege o arquivo; uma correção sem gestão pode desaparecer na próxima mudança.

A **ISO/IEC 27001:2022** estabelece requisitos para um SGSI. Seu propósito inclui estabelecer, implementar, manter e melhorar esse sistema, considerando os riscos da organização. A implantação pode ser útil mesmo sem buscar certificação. Nesta aula, usaremos sua estrutura para organizar o caso; produzir um documento didático não demonstra conformidade ou certificação. [Referência oficial da ISO/IEC 27001](https://www.iso.org/standard/27001).

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

Uma organização pode ter muitos documentos e ainda deixar G03 sem uma autoridade de aprovação. O valor do SGSI depende de conectar o que está escrito ao que as pessoas conseguem executar e demonstrar.

## 4. Delimitar o escopo sem esconder uma dependência

O escopo do modelo técnico respondia qual parte do sistema seria analisada. O **escopo do SGSI** também precisa considerar processos, pessoas, informação, unidades e interfaces organizacionais. Não se limita a listar servidores.

Compare duas propostas:

> **Proposta A:** “O SGSI cobre o servidor do portal.”
>
> **Proposta B:** “O SGSI cobre o recebimento e a manutenção dos pedidos digitais da ValeVerde, incluindo informação de clientes e pedidos, equipe comercial e de TI, administração de identidades e mudanças no portal. O suporte contratado é uma dependência externa sujeita às regras de aprovação e acompanhamento. Intervenções no processo de embalagem exigem autorização da operação e análise específica.”

A proposta A identifica um equipamento, mas deixa obscuros os processos que publicam informação e autorizam terceiros. A proposta B permite perguntar quem decide sobre publicação e suporte. Isso não significa que ela já seja suficiente para toda a empresa: localizações, outras unidades, obrigações e interfaces ainda podem exigir detalhamento.

**Aplicação conduzida:** localize G02 e G03. Para cada documento, sublinhe uma expressão da proposta B que permite atribuir sua gestão a alguém. Depois indique uma informação que falta confirmar antes de ampliar o escopo à operação industrial.

Não ter controle direto sobre a infraestrutura interna do fornecedor não elimina a dependência. A ValeVerde pode estabelecer requisitos contratuais, limitar a interface de acesso, pedir evidências e acompanhar o serviço, dentro do que efetivamente consegue exigir e verificar.

!!! question "Teste o escopo"
    O fornecedor troca a pessoa que presta suporte. Qual parte da proposta B precisa continuar funcionando para que a troca não produza acesso sem aprovação? Uma resposta que cite somente o servidor está completa?

## 5. Responsabilidade precisa de autoridade e recurso

“TI é responsável pela segurança” concentra decisões diferentes numa frase que não explica quem pode agir. O analista pode configurar uma conta, mas talvez não possa aceitar uma interrupção de produção ou aprovar a contratação de pessoal.

**Proprietário do risco** é o papel com responsabilidade e autoridade para gerir aquele risco no contexto definido. **Executor do controle** realiza a medida. **Aprovador de exceção** pode autorizar uma condição diferente da regra, dentro de limites estabelecidos. **Responsável operacional** avalia o efeito da intervenção sobre o funcionamento do processo. Em uma organização pequena, uma pessoa pode acumular funções; as decisões e os limites ainda precisam ficar claros.

### Exemplo trabalhado: mudança no portal

| Decisão ou ação | Papel proposto | Autoridade e recurso necessários | Evidência esperada |
|---|---|---|---|
| Definir quem pode publicar informação de pedidos | Gestor comercial, apoiado por TI | Conhecer finalidade e restrição da informação; aprovar regra do processo | Regra aprovada e acessível. |
| Aplicar a regra no portal | TI e fornecedor contratado | Permissão de mudança, tempo e ambiente de verificação | Registro de mudança e resultado do teste. |
| Autorizar exceção que ultrapassa o limite do gestor | Direção | Avaliar consequência e assumir decisão dentro das obrigações aplicáveis | Justificativa, duração e condição de revisão. |
| Acompanhar publicações e exceções | Responsável designado pelo gestor | Acesso aos registros e tempo para revisão | Revisão com desvio e encaminhamento. |

Essa é uma proposta para o caso fictício, não uma distribuição obrigatória de cargos determinada pela norma. Ela deve ser testada contra as condições da empresa.

**Agora examine G03:** a solicitação de suporte chegou, mas o aprovador está ausente. A regra pode prever um substituto com autoridade delimitada. Criar uma conta porque “o chamado era urgente” não resolve a ausência de aprovação. A urgência precisa de um caminho de decisão definido, com registro e comunicação.

**Verificação coletiva:** para cada linha do seu quadro, tente responder: a pessoa sabe que recebeu a responsabilidade? Pode tomar a decisão? Tem recurso para executá-la? Quem recebe a informação se ela não puder agir? Uma lacuna em qualquer resposta impede considerar o arranjo concluído.

## 6. Objetivos que permitem descobrir se a gestão funciona

“Melhorar a segurança” expressa intenção, mas não informa como reconhecer melhora. Um objetivo útil relaciona resultado, objeto acompanhado, responsável, horizonte e critério de avaliação.

Considere o objetivo didático:

> “Na próxima revisão semanal, toda autorização de suporte cujo prazo tenha vencido terá uma verificação registrada de encerramento ou uma exceção válida identificada. TI reúne as evidências; o gestor do processo analisa os desvios; casos sem responsável são escalados à direção.”

O objetivo nomeia o universo observado: autorizações vencidas. Não mistura contas ainda válidas com as que deveriam ter terminado. Também distingue ausência de comprovação de acesso efetivamente ativo.

### Ler uma medida antes de tirar uma conclusão

Abra G04. Há seis autorizações no conjunto, mas somente cinco venceram. Quatro têm comprovação de encerramento. Portanto, a proporção com encerramento comprovado entre as vencidas é **4 ÷ 5 = 80%**. A sexta não entra nesse denominador porque sua prorrogação válida ainda não venceu.

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
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) e [WSTG](https://owasp.org/www-project-web-security-testing-guide/) — requisitos e testes, respectivamente.

Fontes consultadas em 8 de setembro de 2026. Empresa, documentos, metas e registros numéricos desta página são fictícios.
