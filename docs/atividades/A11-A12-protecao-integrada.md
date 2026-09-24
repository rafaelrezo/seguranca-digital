# A11–A12 — Parecer técnico sobre dados e endpoint

## Atividade {#atividade}

**Missão:** justificar controles de proteção e uma decisão de resposta a partir dos dois conjuntos de dados abaixo. Trabalhe em dupla e produza um único parecer. Não é necessário inventar empresa, incidente, personagem ou matriz de riscos.

**Preparação:** estude [A11 — proteção de dados](../aulas/A11-protecao-de-dados.md) e [A12 — proteção de endpoints](../aulas/A12-protecao-de-endpoints.md). Antes da entrega, confira a comparação de conteúdo mínimo e os exemplos de permissões e revogação, LGPD, regra com contraprova, recuperação e leitura de alerta. Todos os insumos são artificiais e estão nesta página; a atividade funciona sem ferramentas especializadas.

**Prazo:** conforme convocação no Classroom. **Entrega:** um PDF com os quatro blocos indicados abaixo, nomeado `A11-A12_sobrenome1_sobrenome2.pdf`. Uma pessoa envia, identificando os dois integrantes. Use o [modelo de texto](../assets/a11-a12/modelo-parecer.txt) ou a mesma estrutura em seu editor.

### Escopo e segurança

Analise apenas as tabelas fornecidas. Não execute os caminhos ou endereços dos registros, não faça varreduras e não teste regras em serviços pessoais ou institucionais. Não inclua dados reais, credenciais ou capturas do seu dispositivo. As respostas são decisões justificadas; não devem ser descritas como testes executados.

Se usar IA, registre o pedido, as sugestões aceitas e rejeitadas e sua justificativa. Não envie dados sensíveis. Cada integrante deve conseguir explicar a decisão entregue.

### Parte A — Dados, circulação e recuperação

A tarefa é produzir uma contagem por setor e situação. A base de teste contém:

| registro | setor | contato_teste | situacao |
|---|---|---|---|
| T01 | LAB | t01@example.invalid | aberto |
| T02 | LAB | t02@example.invalid | fechado |
| T03 | SUPORTE | t03@example.invalid | aberto |

**Informações fornecidas:** a origem tem acesso restrito a uma equipe autorizada. Uma cópia CSV com todas as colunas foi salva em pasta compartilhada com um grupo mais amplo. Esse grupo precisa apenas da contagem por setor e situação. Para este exercício, a exportação completa recebe o rótulo **restrito**; um resultado agregado só recebe rótulo **público** depois de revisão e aprovação explícitas. Não suponha que uma transformação muda automaticamente a classificação.

A política didática em avaliação é:

> No canal coberto, bloquear conteúdo restrito enviado a destinatário externo não aprovado. Exceção só vale quando aprovada para o conteúdo, destinatário e horário do envio. Registrar resultado e motivo. A regra não concede outras permissões.

| Envio | Rótulo | Destinatário | Canal coberto? | Exceção |
|---|---|---|---|---|
| A | Restrito | Externo não aprovado | Sim | Nenhuma |
| B | Restrito | Interno autorizado | Sim | Nenhuma |
| C | Público, já revisado | Externo | Sim | Nenhuma |
| D | Restrito | Externo não aprovado | Sim | Expirou antes do envio |
| E | Restrito | Externo não aprovado | Não | Nenhuma |

**Recuperação:** houve interrupção às 15h. A última cópia utilizável representa o estado das 14h30. O objetivo de RPO é 15 minutos. O objetivo de RTO é 60 minutos, contado a partir das 15h. Um ensaio registrou retorno funcional e conferência do conteúdo às 15h45. Todos os horários usam a mesma referência. Estes valores são dados do exercício, não medições da sua dupla.

Produza:

1. Um mapa curto de origem e cópia, identificando o acesso ampliado, acompanhado de uma proposta de controle. Organize esse mesmo bloco do parecer pelos três aspectos abaixo; não são entregas separadas.

    | Aspecto | O que explicar |
    |---|---|
    | Conteúdo e finalidade | Campos ou agregações necessários e verificação antes de compartilhar; relação da minimização com um princípio da LGPD; informação ainda ausente para fundamentar o tratamento em situação real, sem inventar base legal |
    | Acesso e responsáveis | Destino, leitores/editores e local da configuração; quem aprova finalidade/destinatários, quem configura/verifica, o que cabe ao usuário e a quem encaminhar dúvidas; teste permitido e negado |
    | Encerramento e limite | Teste após retirada do acesso, tratamento dos downloads anteriores e momento de revisão da necessidade da cópia |

2. Uma decisão para cada envio A–E, com condição aplicada e limite. Identifique um caso que verifica preservação do uso legítimo. Para E, diferencie ausência de cobertura de autorização.
3. Uma possível causa de falso positivo ou falso negativo, explicando que informação de referência permitiria reconhecê-la.
4. Cálculo da janela potencial de perda e do tempo de recuperação. Compare separadamente com RPO e RTO. Descreva origem da recuperação, destino de teste, dependências de acesso e uma verificação necessária além da existência de um arquivo restaurado.

### Parte B — Endpoint, rastros e resposta

**Registros didáticos:** todos são do dispositivo `LAB-02`, em UTC. O usuário informou que iniciaria uma exportação, mas não forneceu aprovação para envio externo. A fonte de eventos associa as operações ao identificador estável P44 neste conjunto. Os caminhos e endereços existem apenas como texto do exercício.

| Registro | Horário | Fonte e observação |
|---|---|---|
| R1 | 10:20:00 | Execução: P44 iniciado por P30, usuário comum, programa `/lab/exportador` |
| R2 | 10:20:02 | Arquivo: P44 criou `/lab/saida.csv` |
| R3 | 10:20:03 | Rede: P44 tentou conexão TCP a `192.0.2.60:443`; a ferramenta registrou bloqueio dessa tentativa |
| R4 | 10:20:04 | Alerta: a tentativa acionou regra de destino não aprovado; registro vinculado a R3 |
| R5 | 10:20:08 | Arquivo: P44 alterou `/lab/saida.csv` novamente |

**Informações que não foram fornecidas:** conteúdo do CSV; comunicações anteriores; inventário de outros processos; mecanismos de inicialização; intenção do usuário; evidência de propagação a outro dispositivo.

Produza:

1. Uma linha do tempo comentada relacionando pelo menos três registros. Explique por que R4 não significa erradicação e o que R5 acrescenta à leitura.
2. Duas afirmações sustentadas e duas conclusões que não podem ser feitas com esses dados. Indique a evidência adicional necessária para uma delas.
3. Compare duas medidas possíveis de contenção quanto a alvo, efeito esperado, impacto e limite. Escolha uma ação ou um encaminhamento condicionado à informação ausente. Justifique o critério; não apresente uma intervenção em produção como realizada.
4. Um critério para verificar a contenção e outro para considerar retorno. Relacione sua decisão a um controle de dados da Parte A, sem afirmar que os dois conjuntos pertencem a um mesmo incidente.

### Organização do parecer e conclusão

Use quatro blocos: **exposição e controles**, **regra e contraprovas**, **recuperação**, **triagem e resposta**. Responda com referência aos campos e IDs pertinentes. Capturas não são necessárias. Uma resposta que apenas recomenda “DLP”, “antivírus” ou “backup” não explica o mecanismo nem permite verificar a decisão.

Antes de enviar, cada integrante revisa uma decisão do outro. Registre uma correção feita ou uma discordância resolvida. Confira se o PDF abre, se tabelas e justificativas estão legíveis e se todos os cálculos indicam unidade. Encerre fechando os arquivos de trabalho; esta atividade não cria recursos em nuvem nem exige limpeza de ambiente vulnerável.

| Critério | Peso | Evidência de atendimento |
|---|---:|---|
| Exposição e controles | 25% | Origem/cópia, finalidade, relação com LGPD, configuração proposta, responsáveis e testes permitido/negado/revogação, com limite |
| Regra e contraprovas | 25% | Decisões A–E coerentes, exceção e cobertura diferenciadas, erro de classificação explicado |
| Leitura de rastros | 25% | Correlação fundamentada, ação efetiva identificada e incertezas preservadas |
| Recuperação e resposta | 25% | RPO/RTO calculados, impacto da contenção discutido e verificações de contenção/retorno propostas |

Em cada critério: **completo** apresenta os elementos solicitados sem extrapolação; **parcial** omite mecanismo, verificação ou limite; **insuficiente** apresenta apenas nomes de ferramentas ou contradiz os dados. A avaliação considera a justificativa; intervenções diferentes podem ser defensáveis sob condições explicitadas.

**Extensão opcional:** substitua R3 por uma conexão estabelecida, sem informação de conteúdo. Identifique quais frases do parecer precisam mudar e quais permanecem válidas. Não transforme essa alteração em prova automática de vazamento.
