# A09 — Quais riscos a organização aceita e quais precisa tratar?

A ValeVerde tem dois problemas conhecidos e apenas oito horas de trabalho técnico disponíveis antes da próxima janela de manutenção. Uma informação interna pode voltar a ser publicada no portal. Um acesso de fornecedor pode permanecer disponível além da janela autorizada.

**Qual risco deve receber atenção primeiro?** A escolha não pode depender de qual ferramenta parece mais interessante ou de qual ameaça tem o nome mais assustador. Precisamos comparar consequências, plausibilidade, incerteza e alternativas que caibam nas condições da operação.

## Objetivos e preparação

Ao concluir esta aula, você deverá conseguir:

1. Comparar dois riscos usando critérios comuns e deixando explícita a incerteza.
2. Justificar prioridade e tratamento diante de restrições de recurso e operação.
3. Registrar proprietário, autoridade de aceitação, residual estimado e condição de revisão.

**Duração:** 100 minutos. **Recursos:** navegador, esta página e o mesmo documento de P1 iniciado na [A08](A08-governanca-sgsi.md). Professor e turma avaliarão os mesmos insumos; não haverá varredura ou exploração técnica.

Se você não tiver o registro anterior, use esta base fornecida: o escopo cobre pedidos digitais, publicação, identidades e suporte ao portal; comercial responde pela informação de pedidos; TI executa mudanças; operação autoriza intervenções que afetem produção; direção decide exceções acima dos limites dos gestores. Essa base é suficiente para acompanhar a aula, mas pode ser criticada e ajustada com justificativa.

## 1. Receber riscos formulados, sem reiniciar a investigação

Os documentos desta página continuam o caso fictício da ValeVerde. Os fatos de cada ficha valem **dentro do exercício**. Eles não são observações do Juice Shop ou evidências de incidentes reais.

### R01 — Publicação de informação interna

| Campo | Informação fornecida |
|---|---|
| Processo e ativo | Publicação no portal; informação comercial interna. |
| Condição | A equipe pode colocar arquivos na área pública sem uma aprovação específica do conteúdo. |
| Evento de risco | Um documento interno é publicado e obtido por pessoa sem autorização. |
| Consequência | Divulgação de informação comercial, necessidade de contenção e revisão de publicações; não há consequência física indicada nesta ficha. |
| Evidência **R01-E1** | Em uma amostra fornecida de dez publicações recentes, duas continham documento marcado como interno e foram retiradas. O procedimento de aprovação não mudou. |
| Controle existente | É possível retirar o arquivo; o canal interno de consulta continua disponível. |
| Incerteza | A ficha não informa quem obteve os arquivos nem quantas pessoas os acessaram. A frequência de duas em dez não é probabilidade de ataque. |

### R02 — Acesso de manutenção além do prazo

| Campo | Informação fornecida |
|---|---|
| Processo e ativo | Suporte contratado; identidade de manutenção e projetos de engenharia. |
| Condição | A identidade usada pelo fornecedor não tem expiração automática demonstrada e não permite atribuir individualmente todas as ações. |
| Evento de risco | O acesso é usado fora da janela aprovada para consultar ou alterar projetos sem a autorização correspondente. |
| Consequência | Alteração indevida de projetos e atraso na manutenção. A possibilidade de efeito sobre produção precisa de avaliação da operação; não há demonstração de caminho direto até o CLP. |
| Evidência **R02-E1** | Das cinco autorizações vencidas examinadas na A08, uma não tem comprovação de encerramento. Não há demonstração de uso indevido. |
| Evidência **R02-E2** | O acordo exige solicitação aprovada, mas não define atribuição individual, expiração ou verificação de encerramento. |
| Controle existente | A manutenção deve ocorrer em janela acompanhada pela operação; a amostra não prova que isso ocorreu em todos os casos. |
| Incerteza | Não sabemos se a autorização sem registro ainda está ativa nem quais permissões efetivas alcança. Isso exige verificação autorizada. |

**Primeira leitura:** localize, em cada ficha, uma evidência e uma incerteza. Complete oralmente: “posso usar esta informação para avaliar…, mas ainda não posso afirmar…”. Não crie novos ativos ou uma narrativa de invasão para tornar o risco mais convincente.

<figure class="didactic-figure" id="primeiro-esquema">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: A evidência sustenta uma condição; o risco descreve um cenário.">
    <img src="../../assets/m1/esquemas/A09-cadeia-risco.svg" alt="A evidência sustenta uma condição; o risco descreve um cenário." loading="lazy" />
  </div>
  <figcaption><strong>A evidência sustenta uma condição; o risco descreve um cenário.</strong> Acompanhe R01 sem preencher as lacunas: a amostra informa ocorrências, mas não revela destinatários nem probabilidade de ataque. <a href="../../assets/m1/esquemas/A09-cadeia-risco.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

## 2. Avaliar risco é relacionar cenário, consequência e plausibilidade

Uma vulnerabilidade descreve uma condição que pode ser explorada ou contribuir para um evento indesejável. A avaliação de risco considera o evento e sua consequência no contexto da organização. Dois sistemas com a mesma condição técnica podem exigir prioridades diferentes porque sustentam funções e expõem informações diferentes.

A **consequência** responde o que muda para pessoas, informação, operação e obrigações se o evento ocorrer. A **plausibilidade** responde quão sustentado é considerar sua ocorrência nas condições avaliadas. A **incerteza** identifica o que falta saber e quanto essa falta afeta a conclusão.

A avaliação pode usar abordagens qualitativas ou quantitativas, conforme objetivo e dados. Aqui adotaremos categorias qualitativas. Não atribuímos porcentagens a um cenário sem base para estimá-las. O NIST SP 800-30r1 orienta preparar, conduzir e manter avaliações de risco; ele serve como referência para explicitar contexto, pressupostos e resultados. [NIST SP 800-30r1](https://csrc.nist.gov/pubs/sp/800/30/r1/final).

### Critérios de consequência para esta decisão

As categorias abaixo são uma **convenção didática da ValeVerde**, não uma escala universal da ISO ou do NIST.

| Nível | Descrição operacional |
|---|---|
| **Limitada** | Retrabalho localizado, sem divulgação relevante de informação interna e sem interrupção significativa do processo considerado. |
| **Relevante** | Divulgação de informação comercial interna ou interrupção que exige coordenação de mais de uma equipe para recuperar a função. |
| **Grave** | Comprometimento de projetos essenciais ou interrupção que a operação avalia como capaz de impedir a manutenção/produção na janela necessária. |

Se houver possibilidade sustentada de dano a pessoas ou condição física insegura, a decisão exige participação imediata da operação e da autoridade competente. Não se aceita esse cenário apenas porque uma célula da matriz parece favorável. Em R02, o caminho e a consequência física permanecem desconhecidos; a ficha não permite inventá-los.

### Critérios de plausibilidade

| Nível | Base para atribuição |
|---|---|
| **Baixa** | O cenário depende de condição ainda não sustentada e há evidência pertinente de barreira funcionando no recorte. Ausência de incidente, sozinha, não basta. |
| **Média** | Existe condição e caminho plausível, mas faltam dados decisivos sobre capacidade efetiva ou ocorrência nas circunstâncias avaliadas. |
| **Alta** | Há ocorrências comparáveis documentadas no recorte e a condição que as favoreceu permanece, sem evidência suficiente de tratamento eficaz. |

Não confunda desconhecimento com baixa plausibilidade. Se a classificação depender de uma premissa, escreva-a junto do resultado. A confiança na avaliação pode ser reduzida mesmo quando uma consequência potencial é grave.

## 3. Uma matriz ajuda a conversar; não decide sozinha

Use a matriz apenas depois de justificar as categorias. Não transforme as palavras em números e multiplique como se fossem grandezas físicas.

| Consequência / plausibilidade | Baixa | Média | Alta |
|---|---|---|---|
| Limitada | Acompanhar | Planejar tratamento | Planejar tratamento |
| Relevante | Planejar tratamento | Tratar prioritariamente | Tratar prioritariamente |
| Grave | Avaliação prioritária com gestor | Tratar prioritariamente | Tratar prioritariamente |

**Regras de decisão do exercício:**

- “Acompanhar” exige proprietário e revisão; não significa abandonar.
- “Planejar tratamento” exige ação, responsável e condição de acompanhamento.
- “Tratar prioritariamente” exige ação antes da próxima janela ou decisão formal sobre uma alternativa temporária, com limites e revisão.
- O gestor compara alternativas considerando dependências, reversibilidade, recurso e efeito operacional. Empate na matriz não significa equivalência dos riscos.
- Exceções acima do limite do gestor são encaminhadas à direção, com participação da operação quando a produção puder ser afetada.

Essas regras constituem **critérios de aceitação e encaminhamento** para a simulação. A disposição geral de uma organização para assumir riscos precisa ser traduzida em limites utilizáveis nas decisões concretas. Nenhuma matriz autoriza descumprir uma obrigação aplicável.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: Cruze categorias justificadas para orientar o encaminhamento.">
    <img src="../../assets/m1/esquemas/A09-matriz-decisao.svg" alt="Cruze categorias justificadas para orientar o encaminhamento." loading="lazy" />
  </div>
  <figcaption><strong>Cruze categorias justificadas para orientar o encaminhamento.</strong> No exemplo R01, consequência relevante e plausibilidade alta levam a tratamento prioritário. Uma classificação sem justificativa continua frágil. <a href="../../assets/m1/esquemas/A09-matriz-decisao.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

### Exemplo trabalhado — avaliar R01

A consequência é **relevante** pelo critério fornecido: há divulgação de informação comercial interna. A plausibilidade é **alta** porque R01-E1 informa ocorrências comparáveis e manutenção da condição de publicação. A conclusão é **tratar prioritariamente**.

Isso não quer dizer que cada publicação tenha 20% de chance de sofrer ataque. A amostra de dez publicações informa ocorrências naquele conjunto; não oferece tamanho de população, exposição, independência dos eventos ou outros elementos para uma previsão estatística.

O proprietário proposto é o gestor comercial, porque a decisão envolve informação e processo sob sua responsabilidade. TI executa a intervenção técnica. A autoridade de exceção permanece a definida na governança da A08.

**Registro do exemplo:**

> R01 — consequência relevante; plausibilidade alta; prioridade de tratamento. Base: R01-E1 e permanência da condição. Incerteza: destinatários e alcance da divulgação. Proprietário: gestor comercial. A classificação será revista se a condição mudar e houver evidência de verificação.

### Aplicação conduzida — avaliar R02

Agora percorra o mesmo caminho, sem copiar as categorias de R01:

1. Localize R02-E1 e R02-E2. Qual condição elas sustentam? Qual capacidade efetiva ainda falta verificar?
2. Escolha consequência e plausibilidade com referência aos critérios. Se houver duas classificações defensáveis, explicite a premissa de cada uma.
3. Use a matriz para encaminhar. A próxima ação deve incluir tratamento, coleta adicional ou ambos?
4. Indique qual papel precisa participar antes de alterar a condição de suporte.

O professor registra as alternativas e compara suas premissas. O critério de qualidade é a rastreabilidade da escolha. Dizer “é industrial, então sempre é o mais grave” não substitui a análise da função e da consequência.

## 4. Escolher um tratamento exige preservar o que precisa funcionar

Avaliar aponta relevância e prioridade. **Tratar** é decidir o que fazer para modificar a exposição ou suas consequências. **Aceitar** é uma decisão informada da autoridade competente de manter um risco sob condições explícitas. **Monitorar** permite reconhecer quando essas condições deixam de valer.

| Alternativa | Quando faz sentido | Esforço/custo | Evidência esperada | Limite |
|---|---|---|---|---|
| **Evitar** a atividade que cria o risco | A função pode ser descontinuada ou substituída | Pode exigir mudar o processo | Demonstração de que o caminho deixou de existir e a função necessária foi atendida de outro modo | Pode gerar perda de serviço ou outro risco. |
| **Reduzir** plausibilidade ou consequência | Há medida viável para atuar no cenário | Implantação, operação e revisão | Medida aplicada e avaliada no caso | Permanece risco residual. |
| **Compartilhar** consequências/responsabilidades contratuais | Parte do impacto pode ser distribuída com terceiro | Contrato, serviço ou cobertura | Condições e responsabilidades verificáveis | Não transfere automaticamente todo risco nem elimina a condição técnica. |
| **Reter/aceitar** o risco | Está dentro dos critérios ou há exceção autorizada | Monitoramento e capacidade de resposta | Decisão com proprietário, justificativa, limite e revisão | Não pode ser confundido com falta de ação ou de autoridade. |

Uma mesma decisão pode combinar medidas. Acompanhar sessões pode apoiar um tratamento temporário, mas não equivale a corrigir a identidade compartilhada. Contratar um serviço pode melhorar capacidade de resposta, mas o cliente ainda precisa governar suas dependências.

### Condições de recurso da ValeVerde

As estimativas abaixo foram fornecidas para a simulação; não são preços ou durações medidos em sistemas reais.

- Há **oito horas técnicas** disponíveis antes da próxima janela.
- A consulta interna aos documentos pode continuar por um canal já disponível.
- A manutenção agendada é necessária; suspendê-la exige que a operação avalie a consequência e aprove uma alternativa.
- Nenhuma mudança no processo físico será executada nesta aula.

| Opção | Medida candidata | Esforço estimado | Função preservada e condição | Limitação a avaliar |
|---|---|---:|---|---|
| **C1 — R01** | Retirar da publicação pública os documentos internos e adicionar aprovação de conteúdo | 2h | Consulta permanece pelo canal interno; verificar que a publicação pública necessária continua funcionando | Outros caminhos de publicação precisam de revisão. |
| **C2 — R01** | Criar acesso restrito no portal para esses documentos | 8h | Pode manter consulta no portal se implementação e testes forem adequados | Consome toda a disponibilidade; a autorização ainda precisa de validação. |
| **C3 — R02** | Preparar acesso temporário acompanhado, com aprovação, registro e conferência de encerramento | 6h | Depende de supervisor disponível e aprovação da operação | Solução temporária; atribuição individual e eficácia precisam de confirmação. |
| **C4 — R02** | Substituir o mecanismo por identidades individuais e expiração verificada | 12h | Requer preparação e janela acordada | Não cabe integralmente antes da janela atual. |
| **C5 — R02** | Suspender o acesso remoto até resolver a condição | 1h | Depende de alternativa de manutenção aprovada | Pode atrasar manutenção; não decidir apenas pelo baixo esforço. |

### Exemplo trabalhado — tratar R01

C1 é uma escolha defensável para R01 porque existe canal interno que preserva a consulta. Ela atua no caminho público com menor esforço que C2, liberando recurso para outra prioridade. A justificativa precisa citar essa condição; sem canal alternativo, a escolha teria outro impacto.

A decisão fica **planejada**, não “risco eliminado”. Antes de alegar redução, será necessário verificar que o conteúdo interno não é entregue pela área pública e que as funções autorizadas continuam disponíveis. O responsável também precisa rever outros caminhos de publicação.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: Caber no orçamento de horas é somente uma condição.">
    <img src="../../assets/m1/esquemas/A09-recurso-premissa.svg" alt="Caber no orçamento de horas é somente uma condição." loading="lazy" />
  </div>
  <figcaption><strong>Caber no orçamento de horas é somente uma condição.</strong> Compare o comprimento das barras. Depois confira a premissa de C3: sem supervisão e aprovação, a soma não torna a alternativa pronta. <a href="../../assets/m1/esquemas/A09-recurso-premissa.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

### Decisão da turma — combinar prioridades

Restam seis horas após C1. Compare C3, C4 e C5 para R02. A soma das horas informa viabilidade de esforço, mas não prova que a opção atende às restrições. Escreva uma alternativa escolhida e uma rejeitada, com premissa, efeito operacional e autoridade necessária.

!!! question "A condição mudou"
    A operação informa que o supervisor previsto para acompanhar a manutenção não estará disponível. A opção C3 ainda está pronta para uso? Reabra a premissa, proponha o encaminhamento e identifique quem pode aprová-lo. Não suponha que alguém ocupará o papel sem autorização e recurso.

Essa mudança mostra por que uma decisão precisa guardar suas condições. A recomendação pode ter sido adequada no momento anterior e deixar de ser executável diante da nova informação.

## 5. O que permanece depois da decisão

**Risco residual** é o risco que permanece após considerar o tratamento. Enquanto a medida não foi implementada e avaliada, o residual descrito é uma **estimativa condicionada**. Depois da execução, a avaliação deve incorporar evidências reais e ainda declarar limitações.

Para R01, retirar um documento não comprova que outro não poderá ser publicado novamente. A aprovação de conteúdo precisa funcionar no processo, e sua revisão deve produzir evidência. Essa distinção será importante na A10: controle definido, implantado e eficaz não são estados equivalentes.

<figure class="didactic-figure">
  <div class="didactic-scroll" tabindex="0" role="region" aria-label="Esquema: A evidência muda o estado da decisão.">
    <img src="../../assets/m1/esquemas/A09-residual-revisao.svg" alt="A evidência muda o estado da decisão." loading="lazy" />
  </div>
  <figcaption><strong>A evidência muda o estado da decisão.</strong> Percorra proposta, implantação e avaliação. O retorno à decisão representa revisão por mudança de premissa ou desvio, não prova de risco eliminado. <a href="../../assets/m1/esquemas/A09-residual-revisao.svg" target="_blank" rel="noopener">Abrir esquema ampliado</a>.</figcaption>
</figure>

Um registro de aceitação não pode se resumir a “aceito”. Ele deve permitir que outra pessoa saiba qual risco, em qual condição e até quando pode permanecer.

| Campo | Pergunta que precisa ser respondida |
|---|---|
| Proprietário | Quem responde pelo acompanhamento desse risco? |
| Autoridade | Quem pode aceitar a condição e qual limite de decisão possui? |
| Justificativa | Por que esta alternativa foi escolhida agora? |
| Premissa | Que condição precisa permanecer verdadeira? |
| Residual estimado | O que continua possível apesar da medida planejada? |
| Evidência de avaliação | O que será observado para julgar o tratamento? |
| Revisão | Quando ou diante de qual mudança a decisão será reaberta? |

**Gatilhos de revisão** podem incluir nova exposição, mudança de fornecedor, falha no encerramento, alteração de permissão ou impossibilidade de cumprir a supervisão. Um prazo periódico ajuda, mas não deve impedir revisão antecipada quando a condição muda.

## 6. Construa um registro que outra equipe consiga usar

No [modelo de P1](../assets/m1/P1-modelo.txt), preencha o quadro de riscos. Para cada um, registre ID, evidências, consequência, plausibilidade, incerteza, prioridade e proprietário. Detalhe uma decisão de tratamento, comparando a alternativa escolhida com outra considerada.

O exemplo R01 permite conferir a forma. Para R02, a qualidade está na justificativa e no tratamento das lacunas. Não há necessidade de inventar um resultado de teste para completar a tabela.

**Confira antes de concluir:**

- As duas avaliações usam os mesmos critérios?
- A decisão menciona a restrição de recurso e preservação da função?
- O responsável tem autoridade ou sabe para quem escalar?
- O residual está identificado como estimado enquanto não há verificação?
- A mudança de supervisor alterou uma premissa registrada ou ficou escondida?

| Dificuldade comum | Como corrigir o raciocínio |
|---|---|
| “Não houve incidente, então é baixo.” | Examine a condição e a evidência de barreira; ausência conhecida de incidente não basta. |
| “Risco alto exige comprar ferramenta.” | Compare opções pelo cenário e pela função a preservar. |
| “O fornecedor aceitou, então a empresa não responde.” | Verifique que responsabilidade foi compartilhada e qual permanece com a organização. |
| “A medida foi aprovada; o residual já é baixo.” | Declare a previsão e a evidência ainda necessária. |
| “A matriz deu empate.” | Compare urgência, dependência, reversibilidade e efeito operacional. |

## Atividade {#atividade}

Continue **o mesmo P1** iniciado na A08. O [enunciado único](../atividades/P1-governanca-e-riscos.md#atividade) apresenta a variação de manutenção para a dupla. Acrescente avaliação dos dois riscos e uma decisão detalhada; não crie uma entrega separada de A09.

Se não conseguir usar o modelo, copie os campos em um editor local ou caderno. Os insumos necessários estão nesta página e no enunciado. Não se acessam sistemas de terceiros, não se criam contas e não há infraestrutura a desligar. Guarde seu registro com as premissas para a próxima revisão.

## Síntese e continuidade

A organização recebeu riscos formulados, definiu critérios comuns, comparou alternativas e registrou uma decisão condicionada. O próximo passo será examinar **quais controles atendem ao tratamento, por que se aplicam e que evidência permite avaliar sua operação**. Leve para A10 o campo **decisão de tratamento**, acompanhado do critério de aceitação e da evidência ainda necessária.

**Revisão rápida:**

1. Por que duas ocorrências em dez publicações não autorizam afirmar “20% de chance de ataque”?
2. O que precisa mudar na decisão quando uma premissa operacional deixa de valer?
3. Qual diferença existe entre residual estimado e redução sustentada por evidência?

**Transferência:** considere dois serviços com a mesma falha técnica, um usado para consulta eventual e outro necessário à manutenção. Que informações adicionais você precisaria para comparar prioridade sem decidir apenas pelo nome do setor?

## Referências

- [NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments](https://csrc.nist.gov/pubs/sp/800/30/r1/final) — preparação, avaliação e manutenção dos resultados.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) — gestão da segurança no contexto da organização.
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) — considerações de segurança e operação OT, aprofundadas nos encontros seguintes.
- Consulta do curso: [análise qualitativa](../gestao_riscos/analise_qualitativa.md) e [estratégias de gerenciamento](../gestao_riscos/estrategias_gerenciamento.md).

Fontes consultadas em 8 de setembro de 2026. Categorias, matriz, fichas, estimativas de esforço e condições operacionais são convenções fictícias do exercício, não prescrições universais dos referenciais.
