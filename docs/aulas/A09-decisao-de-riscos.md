# A09 — Decidir e avaliar controles de segurança digital

<a id="a09-quais-riscos-a-organizacao-aceita-e-quais-precisa-tratar"></a>

Uma equipe técnica precisa proteger contas, projetos e estações de trabalho. Os seis riscos abaixo disputam tempo e recursos. Você vai compará-los e completar uma única matriz: primeiro as evidências, depois a avaliação, as medidas possíveis e os resultados que sustentam a decisão.

## Objetivos e preparação

Ao concluir, você deverá conseguir:

1. Formular riscos digitais a partir de fatos e compará-los com critérios comuns e incertezas explícitas.
2. Justificar controles viáveis, indicando benefício, limite e função legítima preservada.
3. Avaliar resultados fornecidos e registrar risco residual, autoridade e condição de revisão.

**Tempo:** 100 minutos. **Base conceitual:** a retomada abaixo reúne o contexto de governança; os conceitos necessários à análise são explicados ao longo desta página. **Recursos:** esta página, navegador e editor de texto ou papel. Não há instalação obrigatória. A análise pode ser acompanhada sem computador individual.

**O registro da aula será uma matriz com seis riscos.** Comece pelas evidências e acrescente as colunas à medida que tomar as decisões. R01 mostra um preenchimento possível; R02 será revisto com mais detalhe. Nos demais riscos, registre conclusões curtas e justificadas. A análise e a avaliação de controles terminam nesta aula. Na [atividade](#atividade), você aplicará o método a outro cenário e formulará os próprios riscos.

!!! note "Origem e limite dos registros"
    A Nuvora e todos os dados, configurações, esforços e resultados desta página são **simulações didáticas**. Não são incidentes reais, comandos executados ou resultados obtidos pela turma. Abra o [pacote em texto](../assets/m1/A09-pacote-evidencias.txt) para consulta ou uso sem conexão; seu conteúdo essencial também está nesta página. Não execute malware, envie mensagens de teste ou tente acessar contas reais.

## Da A08 à A09: o contexto necessário {#contexto-a08}

- **Escopo:** delimita o que será protegido e quais atividades dependem disso.
- **Governança:** define quem decide, quem executa e como acompanhar.
- **SGSI:** organiza objetivos, riscos, medidas e revisão dos resultados.

A A08 apresentou uma questão de gestão: **quem decide como proteger um serviço, quem executa essa decisão e como a organização acompanha o resultado?** O exemplo era o portal de pedidos da Nuvora, com equipe comercial, TI e manutenção contratada. Uma correção técnica isolada não definia responsabilidades nem garantia que o problema deixaria de se repetir.

Essa organização da segurança é a ideia de um **Sistema de Gestão de Segurança da Informação (SGSI)**: estabelecer objetivos e responsabilidades, avaliar riscos, colocar medidas em prática e revisar seus resultados. Uma política faz parte desse sistema; escrevê-la, por si só, não significa que a proteção esteja funcionando.

| Ideia retomada | O que significa | Como será usada nesta aula |
|---|---|---|
| **Contexto e escopo** | Entender a atividade e delimitar pessoas, informações, serviços e recursos abrangidos. | Proteger o trabalho da equipe técnica: identidades, e-mail, plataforma de projetos, estações e recuperação. |
| **Política e diretriz** | Declarar o compromisso e orientar as decisões; o procedimento detalha como agir. | Justificar os controles pelo que precisam proteger, sem transformar a política numa lista de ferramentas. |
| **Responsabilidade e autoridade** | Distinguir quem responde pelo risco, quem executa a medida e quem pode aceitar uma exceção. | Registrar esses papéis junto da decisão, inclusive quando uma medida ficar adiada. |
| **Objetivo e critério** | Dizer qual resultado se busca e como reconhecê-lo. | Verificar se a função crítica retorna em até **4 h**, com perda de trabalho de até **24 h**. |
| **Evidência e acompanhamento** | Comparar o resultado com o critério, registrar desvios e decidir o que revisar. | Usar os registros fornecidos para avaliar controles e atualizar o risco residual — a exposição que permanece. |

**Base de governança fornecida para a A09:** a coordenação técnica responde pelos seis riscos e aprova a priorização; TI executa e documenta as medidas; a direção decide eventuais exceções para risco alto. A diretriz proposta é: “Proteger identidades e a continuidade do trabalho técnico, preservando autoria, uso autorizado e recuperação verificável”. A proposta ainda exige aprovação; não representa um SGSI implantado.

O ambiente técnico desta aula tem **escopo diferente do portal**. Reaproveitamos os princípios de gestão, sem presumir que a política anterior já cubra essas novas atividades. O próximo passo é preencher a matriz: avaliar os riscos, escolher medidas viáveis e verificar o que seus resultados permitem concluir.

**Você pode realizar a A09 com as informações desta página.** A [A08 — Governança e SGSI](A08-governanca-sgsi.md) fica como aprofundamento; não é necessário consultá-la nem recuperar um registro anterior para iniciar a análise.

<a id="1-receber-riscos-formulados-sem-reiniciar-a-investigacao"></a>
<a id="primeiro-esquema"></a>

## 1. Escopo: reconhecer o que está em risco {#tema-1}

<div class="theme-summary" markdown="1">

**O que está em jogo**

- O escopo reúne o trabalho, as pessoas, os dados e os recursos que serão protegidos.
- As mesmas atividades podem depender de contas, estações, serviços externos e cópias.
- Separe informação disponível de hipótese antes de formular ou classificar riscos.

</div>
<div class="study-explanation" markdown="1">

### O ambiente da equipe técnica

A equipe técnica da Nuvora tem seis profissionais que elaboram projetos de software ou automação, registram e aprovam alterações numa plataforma web e atendem clientes por e-mail. O trabalho acontece nas estações da equipe e num notebook usado em visitas técnicas, com apoio de um fornecedor de suporte remoto.

A figura reúne os recursos usados nesse trabalho, as cópias para recuperação e os responsáveis pelas decisões de segurança. A plataforma web é mantida por um provedor externo; TI cuida das estações e acompanha o suporte contratado.

<figure class="didactic-figure didactic-figure-wide" style="display: block; width: 100%; max-width: 100%;">
<a href="../../assets/m1/A09-ambiente-equipe-tecnica.jpeg" target="_blank" rel="noopener" aria-label="Abrir ilustração do ambiente em tamanho original" style="display: block; width: 100%;">
<img src="../../assets/m1/A09-ambiente-equipe-tecnica.jpeg" alt="Equipe técnica com contas pessoais para registrar e aprovar alterações na plataforma web; estações e notebook para projetos e visitas; suporte remoto e cópias de recuperação. A coordenação prioriza riscos, TI executa e documenta medidas, e a direção decide exceções." />
</a>
<figcaption>Ambiente de trabalho e responsabilidades de segurança da equipe técnica. Clique para ampliar.</figcaption>
</figure>

O ambiente acima é o escopo desta análise. Use a [base de governança da retomada](#contexto-a08) para identificar a diretriz, os responsáveis e o objetivo de recuperação.

### Linha de base — antes dos controles propostos

Os registros abaixo descrevem as condições atuais do ambiente e o que ainda falta verificar. Eles serão o ponto de partida para formular e comparar os riscos.

| Registro simulado | Informação fornecida | Limite |
|---|---|---|
| **E1 — Identidade** | E-mail e plataforma aceitam senha sem segundo fator. A conta analisada pode aprovar alterações e enviar mensagens externas. | Isso descreve capacidade; não prova abuso ocorrido. |
| **E2 — Verificação de entrada** | No teste fictício, entrar de outro navegador apenas com a senha correta permite abrir a plataforma. | Mostra o que alguém com a senha consegue fazer; não mede frequência de ataques. |
| **E3 — Estação** | O inventário fictício registra usuários com administração local e ausência de regra de bloqueio de aplicações não aprovadas. | Privilégios administrativos ampliam capacidades, mas programas maliciosos também podem afetar dados acessíveis ao usuário comum. Não há prova de propagação. |
| **E4 — Recuperação** | Há cópia diária com acesso separado, mas nenhum registro de restauração completa. | “Cópia concluída” não demonstra prazo nem retorno da função. |
| **E5 — Solicitação externa** | Uma mensagem simulada de domínio parecido com o do fornecedor pede alteração técnica. O procedimento aceita e-mail sem confirmar por contato previamente conhecido. | Não há registro de alteração executada; a aceitação da mensagem ainda é condição a verificar. |
| **E6 — Suporte** | Conta remota administrativa do fornecedor continua habilitada após o encerramento do serviço, sem aprovação de uma nova sessão. | Falta verificar conexão efetiva e alcance; não há uso indevido observado. |
| **E7 — Notebook** | Inventário informa ausência de criptografia do disco e cópia local de projetos confidenciais. O cenário considera perda com o equipamento desligado. | Não há perda real nem leitura por terceiros; senha de login não equivale a criptografia do disco. |
| **E8 — Cópias** | A conta administrativa de backup é separada das contas de trabalho, mas usa só senha e pode apagar todas as cópias, sem retenção protegida. | A posse dessa senha é hipótese. Separação de acesso não significa proteção contra o próprio administrador comprometido. |

**Na primeira leitura:** em uma frase, separe a observação de E2 da hipótese de roubo de senha. Depois indique qual desconhecido de E4 mais pesa na decisão.

Na leitura dos riscos, **ativo** é aquilo que precisa de proteção; **ameaça** é uma possível causa de dano; **vulnerabilidade** é uma fragilidade que pode permitir esse dano. As fichas abaixo ligam essas ideias a situações concretas.

### Seis riscos para comparar

| Risco | Caminho e consequência plausível | O que ainda não afirmar |
|---|---|---|
| **R01 — Comprometimento de conta** | Um terceiro obtém a senha e usa a identidade de um responsável para aprovar alterações ou enviar mensagens em seu nome, comprometendo autoria e integridade. | Não há comprovação de invasão real, roubo de sessão ou domínio de todas as contas. |
| **R02 — Ransomware nas estações** | Um programa malicioso executa na estação, cifra dados necessários ao trabalho e interrompe aplicações; recuperação insuficiente prolonga a indisponibilidade. | Não há comprovação de execução de malware, alcance às seis estações ou comprometimento da plataforma externa. |
| **R03 — Fraude por e-mail** | Um terceiro se passa por fornecedor e pede uma alteração técnica por mensagem; a equipe executa uma solicitação falsa. | Não pressupõe roubo da conta verdadeira: a identidade do remetente pode ser imitada. |
| **R04 — Suporte remoto indevido** | Uma conta de fornecedor mantida após o serviço permite nova conexão e alteração não autorizada na estação. | Conta disponível não prova que o fornecedor a utilizou indevidamente. |
| **R05 — Perda de notebook** | Um notebook perdido permite leitura de dados técnicos armazenados sem proteção de disco, comprometendo confidencialidade. | Perder o equipamento não comprova leitura ou vazamento dos dados. |
| **R06 — Destruição das cópias** | Um terceiro obtém a credencial administrativa do backup e apaga as cópias disponíveis, prejudicando a recuperação. | É um caminho próprio; pode agravar R02, mas não deve ser contado como outra perda independente sem justificar. |

*Ransomware* é uma forma de malware associada à extorsão; neste exercício, analisamos a indisponibilidade causada pela cifragem. A possibilidade de vazamento exigiria evidências e tratamento próprios.




### Dos fatos à formulação de um risco

- **Condição conhecida:** E1/E2 mostram que só a senha basta para entrar numa conta com poder de aprovação.
- **Evento de ameaça:** um terceiro obtém e usa essa senha; isso é uma hipótese do cenário, não um incidente comprovado.
- **Consequência:** alterações ou mensagens passam a ser emitidas em nome de outra pessoa, comprometendo autoria e integridade.

A combinação desses elementos forma R01. Ao levantar outros riscos, mantenha essa ligação entre fato, hipótese e consequência; apenas escrever “senha fraca” ou “ransomware” não descreve um cenário completo.

<a id="guia-colunas"></a>
<a id="matriz-riscos"></a>

### Na matriz: o que sabemos

Cada linha acompanha um dos seis riscos. **Evidência** registra a informação disponível e sua origem; **incerteza** indica o que falta saber ou está sendo assumido. R01 mostra um exemplo. Confira essas duas informações nas demais linhas antes de avançar.

A matriz reaparece ao final de cada tema com as novas colunas. As edições feitas aqui aparecem nas outras etapas da página. Clique numa célula para escrever e use Tab para avançar. “Mostrar só as colunas novas” permite focar a discussão mantendo os mesmos riscos.

<noscript>Para preencher um registro único, use o modelo CSV ou papel. As tabelas abaixo permitem acompanhar cada etapa.</noscript>

**Exporte antes de sair:** o preenchimento não fica salvo ao fechar ou recarregar a página. O [modelo CSV](../assets/m1/A09-matriz-riscos.csv), o [modelo em texto](../assets/m1/A09-modelo-matriz-aula.txt) e papel são alternativas para acompanhar o registro.

<div class="risk-matrix" id="matriz-etapa-1" data-matrix-stage="1">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">O que sabemos · 3 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 1: O que sabemos; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td></tr></tbody></table></div>
</div>

</div>

<a id="2-avaliar-risco-e-relacionar-cenario-consequencia-e-plausibilidade"></a>

## 2. Critérios: comparar consequência e plausibilidade {#tema-2}

<div class="theme-summary" markdown="1">

**Para comparar com a mesma régua**

- Consequência é a perda caso o cenário ocorra.
- Plausibilidade depende das condições e barreiras conhecidas.
- Use os mesmos critérios em todas as linhas e explicite as hipóteses.
- Informação ausente exige verificação; não autoriza classificar o risco como baixo.

</div>
<div class="study-explanation" markdown="1">

Avaliar não é apenas chamar um problema de grave. É explicar **o que pode acontecer, em quais condições e com que consequência**. A relação entre impacto e possibilidade de ocorrência orienta a avaliação; a escala abaixo é uma convenção do exercício, não uma fórmula prescrita pelo NIST. [Referência: NIST SP 800-30 Rev. 1](https://www.nist.gov/publications/guide-conducting-risk-assessments).

| Consequência | Critério desta equipe |
|---|---|
| **Limitada** | Interrupção de até uma hora, reversível localmente, sem aprovação falsa ou comunicação externa indevida. |
| **Relevante** | Retrabalho ou interrupção acima de uma e até quatro horas, sem compromisso externo indevido. |
| **Grave** | Interrupção acima de quatro horas, perda superior a 24 horas de trabalho, exposição de projetos confidenciais a terceiros, ou aprovação/comunicação externa indevida que comprometa a confiança na decisão técnica. |

Use o critério mais elevado aplicável e explicite a hipótese. Uma parada de duas horas não torna limitada uma aprovação falsa enviada ao cliente.

| Plausibilidade | Critério do caminho descrito |
|---|---|
| **Baixa** | Há barreira pertinente e verificação que impede o caminho nas condições examinadas. |
| **Média** | O caminho é possível, mas depende de condição relevante ainda não verificada. |
| **Alta** | O caminho está demonstrado no recorte fornecido, sem barreira pertinente nesse recorte. |

A plausibilidade é **qualitativa e condicionada ao cenário**. Em R01, considere um terceiro que já obteve somente a senha, sem sessão ativa nem segundo fator. O teste E2 permite classificar esse caminho, mas não estimar a chance anual de roubo de senha. Em R02, as lacunas de execução e recuperação não provam chegada de malware nem alcance da interrupção.

**O que falta saber?** “não encontramos teste de restauração” permite concluir “a cópia é inútil”? Explique o que seria necessário observar para afirmar que a função volta dentro do prazo.


### Na matriz: consequência e plausibilidade

Acrescente **consequência** e **plausibilidade** às mesmas seis linhas. Na primeira, indique a perda e sua gravidade; na segunda, relacione as condições e barreiras que sustentam o cenário. Use as escalas que acabou de ler e escreva a hipótese junto da classificação. Ainda não é necessário escolher a classe do risco.

<div class="risk-matrix" id="matriz-etapa-2" data-matrix-stage="2">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Consequência e plausibilidade · 5 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 2: Consequência e plausibilidade; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

</div>

<a id="3-uma-matriz-ajuda-a-conversar-nao-decide-sozinha"></a>

## 3. Prioridade: justificar o que exige ação {#tema-3}

<div class="theme-summary" markdown="1">

**A classe ainda não decide a ordem do trabalho**

- Combine consequência e plausibilidade para obter a classe inicial.
- Considere prazo, dependências e incerteza para justificar a prioridade.
- Defina quem pode aceitar a exposição enquanto uma medida aguarda execução.

</div>
<div class="study-explanation" markdown="1">

| Consequência / plausibilidade | Baixa | Média | Alta |
|---|---|---|---|
| Limitada | Baixo | Baixo | Moderado |
| Relevante | Baixo | Moderado | Alto |
| Grave | Moderado | Alto | Alto |

Este quadro de classificação não mede perdas financeiras nem produz probabilidades. **Não multiplique rótulos ou números ordinais como se fossem medidas físicas.** Duas classificações “alto” podem ocultar urgências diferentes.

**Regra de decisão fornecida:** risco alto exige plano e encaminhamento à direção, sem aceitação rotineira pela equipe; moderado pode ter aceitação temporária pela coordenação por até sete dias, com justificativa, acompanhamento e gatilho; baixo permanece acompanhado. Pendência de evidência exige coleta definida. A classificação não aprova automaticamente uma exceção.

<a id="exemplo-trabalhado-r01"></a>
<a id="extensao-r02"></a>

**Para discutir:** quais riscos receberam a mesma classe por motivos diferentes? Se R01 e R02 ficarem altos, justifique se é necessário terminar a solução de um antes de iniciar uma medida do outro.


### Na matriz: classe inicial

Agora acrescente **classe inicial**, combinando consequência e plausibilidade no quadro acima. Anote também uma razão para a prioridade. R01 ilustra a classificação; em R02, uma consequência grave depende da hipótese explícita de parada acima de quatro horas. Compare as premissas quando duas avaliações divergirem.

<div class="risk-matrix" id="matriz-etapa-3" data-matrix-stage="3">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Classe inicial · 6 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 3: Classe inicial; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th><th scope="col" data-column="5" data-introduced="3">Classe inicial</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td><td data-row="0" data-column="5" data-introduced="3" aria-label="R01 · Conta comprometida: Classe inicial" data-placeholder="Preencha e justifique">Alto.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="5" data-introduced="3" aria-label="R02 · Ransomware: Classe inicial" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="5" data-introduced="3" aria-label="R03 · Fraude por e-mail: Classe inicial" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="5" data-introduced="3" aria-label="R04 · Suporte remoto: Classe inicial" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="5" data-introduced="3" aria-label="R05 · Notebook perdido: Classe inicial" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="5" data-introduced="3" aria-label="R06 · Cópias destruídas: Classe inicial" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

</div>

<a id="4-escolher-um-tratamento-exige-preservar-o-que-precisa-funcionar"></a>

## 4. Tratamento: escolher a resposta ao risco {#tema-4}

<div class="theme-summary" markdown="1">

**Antes de escolher a resposta**

- Reduzir atua na possibilidade ou na consequência; evitar retira a atividade ou condição.
- Compartilhar distribui responsabilidades ou perdas, sem eliminar todo o risco.
- Reter exige justificativa, autoridade e acompanhamento.
- Compare o benefício da resposta com seu efeito sobre o trabalho legítimo.

</div>
<div class="study-explanation" markdown="1">

O tratamento é a resposta escolhida para lidar com o risco. O controle é uma medida que ajuda a executar essa resposta. “Reduzir R02” ainda não diz o que será feito nem o que precisa continuar funcionando.

| Resposta | Exemplo neste ambiente | Limite da decisão |
|---|---|---|
| Reduzir | Restringir execução de aplicações e preparar recuperação da estação | Precisa de teste de bloqueio e da função legítima |
| Evitar | Suspender temporariamente o uso de uma aplicação não aprovada | Exige alternativa para o trabalho que dependia dela |
| Compartilhar | Contratar apoio especializado para recuperar o ambiente | O contrato não restaura a estação por si só nem transfere toda a responsabilidade |
| Reter | Admitir temporariamente uma exposição com prazo e monitoramento | Exige autoridade e respeito à regra de aceitação |

**Exemplo — R01:** desabilitar toda a identidade bloquearia o uso indevido, mas também e-mail e aprovação legítima. A autenticação adicional é uma alternativa de redução que permite manter essas funções, desde que o usuário autorizado consiga entrar e a recuperação da conta seja protegida.

**Compare as opções:** uma contratação que só disponibiliza suporte em 24 horas atende ao objetivo de retorno em quatro horas? Identifique a incompatibilidade antes de propor a contratação como solução suficiente.


### Na matriz: tratamento

Acrescente **tratamento**: reduzir, evitar, compartilhar ou reter, acompanhado de uma razão. Neste ponto, escolha a resposta ao risco e considere o trabalho que precisa continuar. A medida concreta será definida no próximo tema.

<div class="risk-matrix" id="matriz-etapa-4" data-matrix-stage="4">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Tratamento · 7 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 4: Tratamento; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th><th scope="col" data-column="5" data-introduced="3">Classe inicial</th><th scope="col" data-column="6" data-introduced="4">Tratamento</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td><td data-row="0" data-column="5" data-introduced="3" aria-label="R01 · Conta comprometida: Classe inicial" data-placeholder="Preencha e justifique">Alto.</td><td data-row="0" data-column="6" data-introduced="4" aria-label="R01 · Conta comprometida: Tratamento" data-placeholder="Preencha e justifique">Reduzir o uso indevido da conta.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="5" data-introduced="3" aria-label="R02 · Ransomware: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="6" data-introduced="4" aria-label="R02 · Ransomware: Tratamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="5" data-introduced="3" aria-label="R03 · Fraude por e-mail: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="6" data-introduced="4" aria-label="R03 · Fraude por e-mail: Tratamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="5" data-introduced="3" aria-label="R04 · Suporte remoto: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="6" data-introduced="4" aria-label="R04 · Suporte remoto: Tratamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="5" data-introduced="3" aria-label="R05 · Notebook perdido: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="6" data-introduced="4" aria-label="R05 · Notebook perdido: Tratamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="5" data-introduced="3" aria-label="R06 · Cópias destruídas: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="6" data-introduced="4" aria-label="R06 · Cópias destruídas: Tratamento" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

</div>



## 5. Controles: definir mecanismo, cobertura e verificação {#tema-5}

<div class="theme-summary" markdown="1">

**Uma medida precisa responder a três perguntas**

- Em qual condição ou consequência ela atua?
- Onde será aplicada, por quem e com qual recurso?
- Que resultado mostrará a proteção e a continuidade do trabalho legítimo?

</div>
<div class="study-explanation" markdown="1">

<a id="condicoes-de-recurso-da-valeverde"></a>

A equipe dispõe de **12 horas de trabalho de TI na próxima janela de dois dias**, com os recursos do exercício já disponíveis. As horas abaixo são estimativas fictícias para comparar decisões, não preços ou estimativas universais. São horas de implementação e verificação da equipe, não tempo de aula.

| Medida candidata | Função e alcance | Esforço | Critério de verificação e limite |
|---|---|---:|---|
| **C1 — Autenticação multifator (MFA)** | Exigir, além da senha, uma segunda prova nas contas de e-mail e plataforma | 4 h | Só a senha não permite entrar; usuário com fatores válidos entra. O teste não cobre roubo de sessão nem todas as formas de phishing. |
| **C2 — Execução controlada em uma estação piloto** | Usuário padrão e regra de aplicações aprovadas, com exceção documentada por TI | 4 h | Aplicação não aprovada é bloqueada e ferramenta técnica autorizada funciona. Piloto não significa cobertura das seis estações. |
| **C3 — Recuperação completa da estação piloto** | Validar cópia com acesso separado e roteiro de reconstrução de sistema, aplicações e dados | 4 h | Função crítica retorna em até 4 h e perda fica em até 24 h. Não impede infecção nem garante recuperação das outras estações. |
| **C4 — Expandir C2 às outras cinco estações** | Aplicar a configuração validada e verificar as ferramentas de cada estação | 8 h adicionais | Depende da conclusão satisfatória de C2; requer verificações nas cinco estações. |
| **C5 — Confirmação de solicitações externas** | Confirmar mudanças por contato previamente conhecido, com registro e responsável substituto | 2 h | Solicitação falsa não é executada; solicitação legítima confirmada prossegue. Depende de cumprimento pela equipe. |
| **C6 — Sessão remota por autorização** | Desabilitar acesso permanente; autorizar e encerrar sessão de suporte por chamado | 2 h | Conexão fora da janela é negada; suporte autorizado funciona e acesso termina. Não cobre outros acessos. |
| **C7 — Criptografia do notebook** | Proteger o disco do notebook e testar a recuperação da chave por TI | 4 h | Disco retirado de equipamento desligado não revela os projetos sem chave; uso autorizado funciona. Não cobre sessão já desbloqueada. |
| **C8 — Retenção protegida das cópias** | Impedir exclusão antecipada das cópias retidas pela conta de backup analisada | 4 h | Exclusão com essa conta é negada; nova cópia e restauração continuam possíveis. Outros papéis administrativos e prazo de retenção exigem revisão. |

MFA acrescenta uma prova à autenticação; usuário padrão reduz privilégios; controle de execução restringe quais aplicações podem rodar; recuperação busca restabelecer a função após uma perda. São mecanismos diferentes. Confirmar remetentes por outro canal ajuda a reconhecer fraudes; criptografar dados em repouso protege o recorte de equipamento perdido desligado. Veja as orientações da [CISA sobre phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing) e [criptografia de armazenamento do NIST](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=51291). A redução de privilégio isolada não impede toda cifragem de dados acessíveis ao usuário.

A recomendação de combinar proteção de identidade, restrições de execução e cópias com restauração testada aparece no [guia #StopRansomware da CISA](https://www.cisa.gov/stopransomware/ransomware-guide).

### Exemplo trabalhado — plano inicial

C1 + C2 + C3 consomem **12 h**. O plano atua no uso de senha roubada, no início de execução não aprovada e no retorno da estação piloto. É viável no recurso fornecido, mas deixa cinco estações sem o controle de execução validado e não comprova recuperação da equipe inteira. C2 + C4 também consomem 12 h, ampliando execução controlada, mas adiam C1 e C3. A soma não decide qual exposição pode esperar.

**Confira a cobertura:** o registro “C2 instalado em uma estação” autoriza afirmar “R02 controlado na equipe”? Nomeie a diferença entre alcance do plano e alcance da evidência.


### Na matriz: controle e verificação

Acrescente **controle**, **recurso/cobertura** e **critério de verificação**. Diga qual medida executa o tratamento, onde ela se aplica, seu esforço e o resultado esperado para proteção e uso legítimo.

Proponha uma medida por risco, mas marque quais cabem nas **12 h** e quais ficam adiadas. Some controles compartilhados apenas uma vez. Para R02, justifique também a alternativa rejeitada. Registre o critério antes de consultar os resultados do próximo tema.

<div class="risk-matrix" id="matriz-etapa-5" data-matrix-stage="5">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Controle e verificação · 10 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 5: Controle e verificação; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th><th scope="col" data-column="5" data-introduced="3">Classe inicial</th><th scope="col" data-column="6" data-introduced="4">Tratamento</th><th scope="col" data-column="7" data-introduced="5">Controle</th><th scope="col" data-column="8" data-introduced="5">Recurso / cobertura</th><th scope="col" data-column="9" data-introduced="5">Critério de verificação</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td><td data-row="0" data-column="5" data-introduced="3" aria-label="R01 · Conta comprometida: Classe inicial" data-placeholder="Preencha e justifique">Alto.</td><td data-row="0" data-column="6" data-introduced="4" aria-label="R01 · Conta comprometida: Tratamento" data-placeholder="Preencha e justifique">Reduzir o uso indevido da conta.</td><td data-row="0" data-column="7" data-introduced="5" aria-label="R01 · Conta comprometida: Controle" data-placeholder="Preencha e justifique">C1 — MFA nos dois serviços.</td><td data-row="0" data-column="8" data-introduced="5" aria-label="R01 · Conta comprometida: Recurso / cobertura" data-placeholder="Preencha e justifique">4 h; seis contas. Incluir no plano de exemplo.</td><td data-row="0" data-column="9" data-introduced="5" aria-label="R01 · Conta comprometida: Critério de verificação" data-placeholder="Preencha e justifique">Senha sozinha deve ser negada; fatores válidos devem permitir entrada.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="5" data-introduced="3" aria-label="R02 · Ransomware: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="6" data-introduced="4" aria-label="R02 · Ransomware: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="7" data-introduced="5" aria-label="R02 · Ransomware: Controle" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="8" data-introduced="5" aria-label="R02 · Ransomware: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="9" data-introduced="5" aria-label="R02 · Ransomware: Critério de verificação" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="5" data-introduced="3" aria-label="R03 · Fraude por e-mail: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="6" data-introduced="4" aria-label="R03 · Fraude por e-mail: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="7" data-introduced="5" aria-label="R03 · Fraude por e-mail: Controle" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="8" data-introduced="5" aria-label="R03 · Fraude por e-mail: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="9" data-introduced="5" aria-label="R03 · Fraude por e-mail: Critério de verificação" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="5" data-introduced="3" aria-label="R04 · Suporte remoto: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="6" data-introduced="4" aria-label="R04 · Suporte remoto: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="7" data-introduced="5" aria-label="R04 · Suporte remoto: Controle" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="8" data-introduced="5" aria-label="R04 · Suporte remoto: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="9" data-introduced="5" aria-label="R04 · Suporte remoto: Critério de verificação" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="5" data-introduced="3" aria-label="R05 · Notebook perdido: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="6" data-introduced="4" aria-label="R05 · Notebook perdido: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="7" data-introduced="5" aria-label="R05 · Notebook perdido: Controle" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="8" data-introduced="5" aria-label="R05 · Notebook perdido: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="9" data-introduced="5" aria-label="R05 · Notebook perdido: Critério de verificação" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="5" data-introduced="3" aria-label="R06 · Cópias destruídas: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="6" data-introduced="4" aria-label="R06 · Cópias destruídas: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="7" data-introduced="5" aria-label="R06 · Cópias destruídas: Controle" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="8" data-introduced="5" aria-label="R06 · Cópias destruídas: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="9" data-introduced="5" aria-label="R06 · Cópias destruídas: Critério de verificação" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

</div>



## 6. Evidências: distinguir proposta, implantação e resultado {#tema-6}

<div class="theme-summary" markdown="1">

**O que a evidência permite afirmar**

- Desenho, implantação e resultado respondem a perguntas diferentes.
- Compare o resultado informado com o critério definido antes do teste.
- Registre atende, não atende ou inconclusivo, com uma razão.
- Limite a conclusão aos casos, ao alcance e às condições examinadas.

</div>
<div class="study-explanation" markdown="1">

Abra o pacote de evidências no navegador ou leia os registros abaixo. Os campos são: **medida** (o que foi aplicado), **alcance** (onde), **ação/caso** (o que foi verificado), **resultado** (o que ocorreu no teste fictício) e **limite** (o que ficou de fora).

Antes de consultar o resultado, escreva o que precisa acontecer. Depois compare os casos e registre a conclusão; se faltar um dado indispensável, indique qual. A análise usa os registros fornecidos, sem executar comandos.

### Resultados fornecidos — cenário de implantação de C1 + C2 + C3

Estes resultados descrevem o plano de exemplo, independentemente do plano que você recomendou. Se sua escolha for outra, use-os como evidência comparativa; não atribua resultados a controles que seu plano não incluiu.

| Registro simulado | Configuração e caso | Resultado fornecido | Conclusão e limite |
|---|---|---|---|
| **T1 — Identidade** | MFA nas seis contas, e-mail e plataforma; verificar entrada com senha apenas e depois com os fatores válidos | Senha sozinha: negada. Fatores válidos: entrada permitida nos dois serviços | Critério atendido nesse caminho. Não testa recuperação de conta, sessões existentes ou uso contínuo. |
| **T2 — Execução** | C2 em uma estação piloto; comparar aplicação não aprovada e ferramenta técnica autorizada | Não aprovada: bloqueada. Ferramenta autorizada: abriu e concluiu tarefa de referência | Atende aos dois casos do piloto. As cinco estações restantes não foram verificadas. |
| **T3 — Recuperação inicial** | Cópia separada da estação piloto; restaurar sistema, aplicação e dados; verificar abertura e consulta | Em 3 h, a aplicação abriu e consultou o projeto; cópia tinha 20 h | Prazo e idade da cópia atendem aos números. Falta verificar execução da tarefa crítica completa: conclusão de recuperação funcional é provisória. |

**Não confunda:** nenhuma dessas linhas é teste executado por você. Na entrega, escreva “o registro simulado T2 informa…”. A avaliação é sua; a origem do resultado é o pacote.

### Verificações das outras opções

Os registros abaixo são **cenários comparativos separados**. Não significam que todas as medidas couberam na janela de 12 h ou foram implantadas juntas.

| Registro simulado | Casos e resultados fornecidos | Limite |
|---|---|---|
| **T4 — Confirmação de mensagem (C5)** | Mensagem falsa não confirmada: alteração suspensa. Pedido legítimo confirmado por contato conhecido: alteração permitida. | Dois casos não provam que todos seguem o procedimento. |
| **T5 — Suporte (C6)** | Fora da janela: conexão negada. Sessão autorizada: suporte funciona. Após encerramento: nova conexão negada. | Amostra de um chamado e uma conta. |
| **T6 — Notebook (C7)** | Disco retirado do notebook desligado: projetos não legíveis sem chave. Uso autorizado e recuperação com chave de TI: acesso funciona. | Não representa notebook ligado e desbloqueado. |
| **T7 — Cópias (C8)** | Exclusão de cópia retida com a conta de backup: negada. Nova cópia e restauração de amostra: permitidas. | Não comprova restauração completa nem testa todos os administradores. |

### Exemplo trabalhado — avaliar C1

O desenho atua no caminho “terceiro tem só a senha”. A configuração informa cobertura das contas e serviços especificados. T1 informa bloqueio desse caminho e entrada legítima. É defensável reduzir a plausibilidade **desse cenário específico**, registrando que recuperação de conta e outros caminhos não foram examinados. Não escrever “a identidade está segura contra qualquer ataque”.

**Antes de continuar:** qual verificação falta em T3 para saber se o profissional consegue trabalhar? Formule um caso com ação e resultado observável antes de ler a próxima seção.


### Na matriz: resultado e limite

Acrescente **resultado/limite**. Compare cada registro pertinente com o critério que você já escreveu e conclua: **atende**, **não atende** ou **inconclusivo**, com uma razão. Se a medida ficou adiada, identifique o resultado como comparativo; ele não comprova redução da exposição atual.

<div class="risk-matrix" id="matriz-etapa-6" data-matrix-stage="6">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Resultado e limite · 11 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 6: Resultado e limite; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th><th scope="col" data-column="5" data-introduced="3">Classe inicial</th><th scope="col" data-column="6" data-introduced="4">Tratamento</th><th scope="col" data-column="7" data-introduced="5">Controle</th><th scope="col" data-column="8" data-introduced="5">Recurso / cobertura</th><th scope="col" data-column="9" data-introduced="5">Critério de verificação</th><th scope="col" data-column="10" data-introduced="6">Resultado / limite</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td><td data-row="0" data-column="5" data-introduced="3" aria-label="R01 · Conta comprometida: Classe inicial" data-placeholder="Preencha e justifique">Alto.</td><td data-row="0" data-column="6" data-introduced="4" aria-label="R01 · Conta comprometida: Tratamento" data-placeholder="Preencha e justifique">Reduzir o uso indevido da conta.</td><td data-row="0" data-column="7" data-introduced="5" aria-label="R01 · Conta comprometida: Controle" data-placeholder="Preencha e justifique">C1 — MFA nos dois serviços.</td><td data-row="0" data-column="8" data-introduced="5" aria-label="R01 · Conta comprometida: Recurso / cobertura" data-placeholder="Preencha e justifique">4 h; seis contas. Incluir no plano de exemplo.</td><td data-row="0" data-column="9" data-introduced="5" aria-label="R01 · Conta comprometida: Critério de verificação" data-placeholder="Preencha e justifique">Senha sozinha deve ser negada; fatores válidos devem permitir entrada.</td><td data-row="0" data-column="10" data-introduced="6" aria-label="R01 · Conta comprometida: Resultado / limite" data-placeholder="Preencha e justifique">T1 atende aos dois casos. Não cobre sessões existentes.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="5" data-introduced="3" aria-label="R02 · Ransomware: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="6" data-introduced="4" aria-label="R02 · Ransomware: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="7" data-introduced="5" aria-label="R02 · Ransomware: Controle" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="8" data-introduced="5" aria-label="R02 · Ransomware: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="9" data-introduced="5" aria-label="R02 · Ransomware: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="10" data-introduced="6" aria-label="R02 · Ransomware: Resultado / limite" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="5" data-introduced="3" aria-label="R03 · Fraude por e-mail: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="6" data-introduced="4" aria-label="R03 · Fraude por e-mail: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="7" data-introduced="5" aria-label="R03 · Fraude por e-mail: Controle" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="8" data-introduced="5" aria-label="R03 · Fraude por e-mail: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="9" data-introduced="5" aria-label="R03 · Fraude por e-mail: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="10" data-introduced="6" aria-label="R03 · Fraude por e-mail: Resultado / limite" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="5" data-introduced="3" aria-label="R04 · Suporte remoto: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="6" data-introduced="4" aria-label="R04 · Suporte remoto: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="7" data-introduced="5" aria-label="R04 · Suporte remoto: Controle" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="8" data-introduced="5" aria-label="R04 · Suporte remoto: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="9" data-introduced="5" aria-label="R04 · Suporte remoto: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="10" data-introduced="6" aria-label="R04 · Suporte remoto: Resultado / limite" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="5" data-introduced="3" aria-label="R05 · Notebook perdido: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="6" data-introduced="4" aria-label="R05 · Notebook perdido: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="7" data-introduced="5" aria-label="R05 · Notebook perdido: Controle" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="8" data-introduced="5" aria-label="R05 · Notebook perdido: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="9" data-introduced="5" aria-label="R05 · Notebook perdido: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="10" data-introduced="6" aria-label="R05 · Notebook perdido: Resultado / limite" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="5" data-introduced="3" aria-label="R06 · Cópias destruídas: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="6" data-introduced="4" aria-label="R06 · Cópias destruídas: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="7" data-introduced="5" aria-label="R06 · Cópias destruídas: Controle" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="8" data-introduced="5" aria-label="R06 · Cópias destruídas: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="9" data-introduced="5" aria-label="R06 · Cópias destruídas: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="10" data-introduced="6" aria-label="R06 · Cópias destruídas: Resultado / limite" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

</div>



## 7. Risco residual: revisar quando a evidência muda {#tema-7}

<div class="theme-summary" markdown="1">

**O que precisa ser revisto**

- Risco residual é a exposição que permanece após as medidas consideradas.
- Uma redução planejada depende de implantação e verificação; ainda é uma estimativa.
- Nova evidência pode mudar a conclusão sem invalidar todos os resultados anteriores.
- Preserve a avaliação inicial e justifique a revisão nas novas colunas.

</div>
<div class="study-explanation" markdown="1">

<a id="5-o-que-permanece-depois-da-decisao"></a>

Depois de escolher controles, estime o residual sob condições explícitas. Depois de avaliar resultados, reabra essas condições. Uma medida planejada não reduz, por si só, a exposição atual; um piloto não transforma automaticamente o risco de toda a equipe.

### V1 — A aplicação abre, mas a tarefa crítica falha

**Novo registro simulado:** após T3, a equipe tenta gerar a entrega técnica de referência. Um componente necessário não foi restaurado e a tarefa falha. **Seis horas após o início da recuperação, a estação ainda não executa a tarefa.** Não há resultado de recuperação completa das outras cinco estações.

O que mudou foi a evidência de recuperação funcional. A existência da cópia e a consulta inicial continuam registradas, mas **o limite de quatro horas não foi atendido**. A informação nova não demonstra que C1 ou C2 falharam, nem confirma propagação ou vazamento.

| Antes — T3 | Depois — V1 | Efeito na linha de R02 |
|---|---|---|
| Aplicação abriu e consultou projeto em 3 h; tarefa completa não foi verificada. | Tarefa crítica falha; às 6 h, ainda não pode ser concluída. | Recuperação funcional passa de inconclusiva a não atendida no prazo; revisar residual e encaminhamento. |

| Campo a revisar | Pergunta para a decisão |
|---|---|
| Consequência e classe | O que V1 permite afirmar sobre o cenário de interrupção? Que incerteza continua? |
| Controle | O que falta ao roteiro de C3 e qual tarefa comprovaria a correção? |
| Prazo e recurso | A janela de 12 h já foi alocada. O que pedir, adiar ou conter? Quem pode aprovar? |
| Residual | Que exposição permanece na estação piloto e no restante da equipe? |
| Aceitação e revisão | A classe permite aceitação pela coordenação ou exige direção? Até quando e com qual gatilho? |

**Exemplo de registro parcial:** “V1 invalida a conclusão de retorno funcional em até quatro horas. TI deve completar as dependências e verificar a entrega técnica, cronometrando o processo completo. A coordenação encaminha o recurso e a exposição remanescente à autoridade competente”. Complete a classificação, a medida provisória e a alternativa justificada; não suponha aprovação ou correção já realizadas.

Defina revisão em até sete dias ou antes, caso ocorra novo bloqueio da função, falha de recuperação ou expansão sem verificação. Esse prazo é convenção do exercício; a urgência pode exigir ação imediata. **Concluir o registro não significa eliminar o risco.**

**Revise sua decisão:** mudar a nota para baixa resolve V1? Identifique a evidência que precisaria existir para sustentar uma redução.


### Na matriz: risco residual

Acrescente **risco residual**: o que permanece exposto após as medidas consideradas e o que a evidência permite afirmar. Mantenha a avaliação inicial visível e registre aqui a revisão de R02 após V1. Em R06, considere a dependência entre preservar cópias e recuperar a função; V1 não comprova destruição das cópias.

<div class="risk-matrix" id="matriz-etapa-7" data-matrix-stage="7">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Risco residual · 12 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 7: Risco residual; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th><th scope="col" data-column="5" data-introduced="3">Classe inicial</th><th scope="col" data-column="6" data-introduced="4">Tratamento</th><th scope="col" data-column="7" data-introduced="5">Controle</th><th scope="col" data-column="8" data-introduced="5">Recurso / cobertura</th><th scope="col" data-column="9" data-introduced="5">Critério de verificação</th><th scope="col" data-column="10" data-introduced="6">Resultado / limite</th><th scope="col" data-column="11" data-introduced="7">Risco residual</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td><td data-row="0" data-column="5" data-introduced="3" aria-label="R01 · Conta comprometida: Classe inicial" data-placeholder="Preencha e justifique">Alto.</td><td data-row="0" data-column="6" data-introduced="4" aria-label="R01 · Conta comprometida: Tratamento" data-placeholder="Preencha e justifique">Reduzir o uso indevido da conta.</td><td data-row="0" data-column="7" data-introduced="5" aria-label="R01 · Conta comprometida: Controle" data-placeholder="Preencha e justifique">C1 — MFA nos dois serviços.</td><td data-row="0" data-column="8" data-introduced="5" aria-label="R01 · Conta comprometida: Recurso / cobertura" data-placeholder="Preencha e justifique">4 h; seis contas. Incluir no plano de exemplo.</td><td data-row="0" data-column="9" data-introduced="5" aria-label="R01 · Conta comprometida: Critério de verificação" data-placeholder="Preencha e justifique">Senha sozinha deve ser negada; fatores válidos devem permitir entrada.</td><td data-row="0" data-column="10" data-introduced="6" aria-label="R01 · Conta comprometida: Resultado / limite" data-placeholder="Preencha e justifique">T1 atende aos dois casos. Não cobre sessões existentes.</td><td data-row="0" data-column="11" data-introduced="7" aria-label="R01 · Conta comprometida: Risco residual" data-placeholder="Preencha e justifique">Moderado no caminho testado (grave/baixa), condicionado a C1 implantado. Outros caminhos não avaliados.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="5" data-introduced="3" aria-label="R02 · Ransomware: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="6" data-introduced="4" aria-label="R02 · Ransomware: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="7" data-introduced="5" aria-label="R02 · Ransomware: Controle" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="8" data-introduced="5" aria-label="R02 · Ransomware: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="9" data-introduced="5" aria-label="R02 · Ransomware: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="10" data-introduced="6" aria-label="R02 · Ransomware: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="11" data-introduced="7" aria-label="R02 · Ransomware: Risco residual" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="5" data-introduced="3" aria-label="R03 · Fraude por e-mail: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="6" data-introduced="4" aria-label="R03 · Fraude por e-mail: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="7" data-introduced="5" aria-label="R03 · Fraude por e-mail: Controle" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="8" data-introduced="5" aria-label="R03 · Fraude por e-mail: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="9" data-introduced="5" aria-label="R03 · Fraude por e-mail: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="10" data-introduced="6" aria-label="R03 · Fraude por e-mail: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="11" data-introduced="7" aria-label="R03 · Fraude por e-mail: Risco residual" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="5" data-introduced="3" aria-label="R04 · Suporte remoto: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="6" data-introduced="4" aria-label="R04 · Suporte remoto: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="7" data-introduced="5" aria-label="R04 · Suporte remoto: Controle" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="8" data-introduced="5" aria-label="R04 · Suporte remoto: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="9" data-introduced="5" aria-label="R04 · Suporte remoto: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="10" data-introduced="6" aria-label="R04 · Suporte remoto: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="11" data-introduced="7" aria-label="R04 · Suporte remoto: Risco residual" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="5" data-introduced="3" aria-label="R05 · Notebook perdido: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="6" data-introduced="4" aria-label="R05 · Notebook perdido: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="7" data-introduced="5" aria-label="R05 · Notebook perdido: Controle" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="8" data-introduced="5" aria-label="R05 · Notebook perdido: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="9" data-introduced="5" aria-label="R05 · Notebook perdido: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="10" data-introduced="6" aria-label="R05 · Notebook perdido: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="11" data-introduced="7" aria-label="R05 · Notebook perdido: Risco residual" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="5" data-introduced="3" aria-label="R06 · Cópias destruídas: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="6" data-introduced="4" aria-label="R06 · Cópias destruídas: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="7" data-introduced="5" aria-label="R06 · Cópias destruídas: Controle" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="8" data-introduced="5" aria-label="R06 · Cópias destruídas: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="9" data-introduced="5" aria-label="R06 · Cópias destruídas: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="10" data-introduced="6" aria-label="R06 · Cópias destruídas: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="11" data-introduced="7" aria-label="R06 · Cópias destruídas: Risco residual" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

</div>

<a id="6-construa-um-registro-que-outra-equipe-consiga-usar"></a>

## 8. Registro: tornar a decisão verificável {#tema-8}

<div class="theme-summary" markdown="1">

**Antes de encerrar o registro**

- Ligue cada decisão ao risco, ao controle e à evidência ou verificação necessária.
- Nomeie executor, autoridade, prazo e gatilho de revisão.
- Diferencie proposta, aprovação, implantação e resultado.
- Confira os riscos adiados e o que ainda permanece exposto.

</div>
<div class="study-explanation" markdown="1">

O produto é um registro que outra pessoa consegue revisar sem reconstruir uma história. Um ID ajuda a localizar a fonte, mas não substitui a explicação: escreva “T3 verificou abertura e consulta, não a tarefa completa”, em vez de apenas “conforme T3”.

| Se o registro contém… | Confira ou corrija… |
|---|---|
| “Colocar segurança” | Nomear a medida, seu mecanismo, alcance e critério |
| “Backup funcionou” | Distinguir cópia, consulta e recuperação da tarefa crítica |
| “Risco baixo porque há controle” | Indicar resultado, cobertura e caminhos não verificados |
| “Equipe aceitou” | Identificar autoridade, justificativa, prazo e acompanhamento |
| “Instalamos/testamos” sem execução | Identificar recomendação ou resultado simulado fornecido |

**Revisão cruzada:** leia a decisão de outra dupla ou releia a sua como revisor. Localize um benefício sem evidência, uma dependência não atendida ou uma função legítima esquecida. Corrija antes de entregar. Não há envio separado deste checkpoint.

### Na matriz: decisão e acompanhamento

Complete **decisão/acompanhamento**: o que será feito, quem executa, quem pode aprovar, até quando e qual ocorrência exige revisão. Indique aprovações pendentes. Agora a matriz reúne toda a análise; confira também os riscos cujas medidas ficaram adiadas.

<div class="risk-matrix" id="matriz-etapa-8" data-matrix-stage="8">
<div class="risk-matrix-controls" hidden><label><input type="checkbox" class="matrix-focus"> Mostrar só as colunas novas</label><button type="button" class="matrix-export">Exportar até aqui — CSV</button></div>
<p class="matrix-status" aria-live="polite">Decisão e acompanhamento · 13 colunas acumuladas.</p>
<div class="risk-matrix-scroll" role="region" aria-label="Matriz após o tema 8: Decisão e acompanhamento; role horizontalmente para ler" tabindex="0"><table><thead><tr><th scope="col" data-column="0" data-introduced="1">Risco</th><th scope="col" data-column="1" data-introduced="1">Evidência</th><th scope="col" data-column="2" data-introduced="1">Incerteza</th><th scope="col" data-column="3" data-introduced="2">Consequência</th><th scope="col" data-column="4" data-introduced="2">Plausibilidade</th><th scope="col" data-column="5" data-introduced="3">Classe inicial</th><th scope="col" data-column="6" data-introduced="4">Tratamento</th><th scope="col" data-column="7" data-introduced="5">Controle</th><th scope="col" data-column="8" data-introduced="5">Recurso / cobertura</th><th scope="col" data-column="9" data-introduced="5">Critério de verificação</th><th scope="col" data-column="10" data-introduced="6">Resultado / limite</th><th scope="col" data-column="11" data-introduced="7">Risco residual</th><th scope="col" data-column="12" data-introduced="8">Decisão / acompanhamento</th></tr></thead><tbody><tr><th scope="row" data-column="0" data-introduced="1">R01 · Conta comprometida</th><td data-row="0" data-column="1" data-introduced="1" aria-label="R01 · Conta comprometida: Evidência" data-placeholder="Preencha e justifique">E1/E2: senha permite entrada e a conta aprova alterações.</td><td data-row="0" data-column="2" data-introduced="1" aria-label="R01 · Conta comprometida: Incerteza" data-placeholder="Preencha e justifique">Senha já obtida é premissa; invasão real não demonstrada.</td><td data-row="0" data-column="3" data-introduced="2" aria-label="R01 · Conta comprometida: Consequência" data-placeholder="Preencha e justifique">Grave: aprovação ou comunicação indevida.</td><td data-row="0" data-column="4" data-introduced="2" aria-label="R01 · Conta comprometida: Plausibilidade" data-placeholder="Preencha e justifique">Alta no caminho de senha já obtida.</td><td data-row="0" data-column="5" data-introduced="3" aria-label="R01 · Conta comprometida: Classe inicial" data-placeholder="Preencha e justifique">Alto.</td><td data-row="0" data-column="6" data-introduced="4" aria-label="R01 · Conta comprometida: Tratamento" data-placeholder="Preencha e justifique">Reduzir o uso indevido da conta.</td><td data-row="0" data-column="7" data-introduced="5" aria-label="R01 · Conta comprometida: Controle" data-placeholder="Preencha e justifique">C1 — MFA nos dois serviços.</td><td data-row="0" data-column="8" data-introduced="5" aria-label="R01 · Conta comprometida: Recurso / cobertura" data-placeholder="Preencha e justifique">4 h; seis contas. Incluir no plano de exemplo.</td><td data-row="0" data-column="9" data-introduced="5" aria-label="R01 · Conta comprometida: Critério de verificação" data-placeholder="Preencha e justifique">Senha sozinha deve ser negada; fatores válidos devem permitir entrada.</td><td data-row="0" data-column="10" data-introduced="6" aria-label="R01 · Conta comprometida: Resultado / limite" data-placeholder="Preencha e justifique">T1 atende aos dois casos. Não cobre sessões existentes.</td><td data-row="0" data-column="11" data-introduced="7" aria-label="R01 · Conta comprometida: Risco residual" data-placeholder="Preencha e justifique">Moderado no caminho testado (grave/baixa), condicionado a C1 implantado. Outros caminhos não avaliados.</td><td data-row="0" data-column="12" data-introduced="8" aria-label="R01 · Conta comprometida: Decisão / acompanhamento" data-placeholder="Preencha e justifique">Coordenação acompanha; TI executa. Aceitação temporária depende de aprovação, até 7 dias; reabrir se senha sozinha permitir entrada.</td></tr><tr><th scope="row" data-column="0" data-introduced="1">R02 · Ransomware</th><td data-row="1" data-column="1" data-introduced="1" aria-label="R02 · Ransomware: Evidência" data-placeholder="Preencha e justifique">E3/E4: execução sem regra; restauração completa não comprovada.</td><td data-row="1" data-column="2" data-introduced="1" aria-label="R02 · Ransomware: Incerteza" data-placeholder="Preencha e justifique">Prazo de retorno e alcance desconhecidos.</td><td data-row="1" data-column="3" data-introduced="2" aria-label="R02 · Ransomware: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="4" data-introduced="2" aria-label="R02 · Ransomware: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="5" data-introduced="3" aria-label="R02 · Ransomware: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="6" data-introduced="4" aria-label="R02 · Ransomware: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="7" data-introduced="5" aria-label="R02 · Ransomware: Controle" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="8" data-introduced="5" aria-label="R02 · Ransomware: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="9" data-introduced="5" aria-label="R02 · Ransomware: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="10" data-introduced="6" aria-label="R02 · Ransomware: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="11" data-introduced="7" aria-label="R02 · Ransomware: Risco residual" data-placeholder="Preencha e justifique"></td><td data-row="1" data-column="12" data-introduced="8" aria-label="R02 · Ransomware: Decisão / acompanhamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R03 · Fraude por e-mail</th><td data-row="2" data-column="1" data-introduced="1" aria-label="R03 · Fraude por e-mail: Evidência" data-placeholder="Preencha e justifique">E5: domínio parecido e pedido sem confirmação por contato conhecido.</td><td data-row="2" data-column="2" data-introduced="1" aria-label="R03 · Fraude por e-mail: Incerteza" data-placeholder="Preencha e justifique">Execução da solicitação falsa não demonstrada.</td><td data-row="2" data-column="3" data-introduced="2" aria-label="R03 · Fraude por e-mail: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="4" data-introduced="2" aria-label="R03 · Fraude por e-mail: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="5" data-introduced="3" aria-label="R03 · Fraude por e-mail: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="6" data-introduced="4" aria-label="R03 · Fraude por e-mail: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="7" data-introduced="5" aria-label="R03 · Fraude por e-mail: Controle" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="8" data-introduced="5" aria-label="R03 · Fraude por e-mail: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="9" data-introduced="5" aria-label="R03 · Fraude por e-mail: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="10" data-introduced="6" aria-label="R03 · Fraude por e-mail: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="11" data-introduced="7" aria-label="R03 · Fraude por e-mail: Risco residual" data-placeholder="Preencha e justifique"></td><td data-row="2" data-column="12" data-introduced="8" aria-label="R03 · Fraude por e-mail: Decisão / acompanhamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R04 · Suporte remoto</th><td data-row="3" data-column="1" data-introduced="1" aria-label="R04 · Suporte remoto: Evidência" data-placeholder="Preencha e justifique">E6: conta do fornecedor habilitada após o serviço.</td><td data-row="3" data-column="2" data-introduced="1" aria-label="R04 · Suporte remoto: Incerteza" data-placeholder="Preencha e justifique">Conexão efetiva e alcance a verificar.</td><td data-row="3" data-column="3" data-introduced="2" aria-label="R04 · Suporte remoto: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="4" data-introduced="2" aria-label="R04 · Suporte remoto: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="5" data-introduced="3" aria-label="R04 · Suporte remoto: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="6" data-introduced="4" aria-label="R04 · Suporte remoto: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="7" data-introduced="5" aria-label="R04 · Suporte remoto: Controle" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="8" data-introduced="5" aria-label="R04 · Suporte remoto: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="9" data-introduced="5" aria-label="R04 · Suporte remoto: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="10" data-introduced="6" aria-label="R04 · Suporte remoto: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="11" data-introduced="7" aria-label="R04 · Suporte remoto: Risco residual" data-placeholder="Preencha e justifique"></td><td data-row="3" data-column="12" data-introduced="8" aria-label="R04 · Suporte remoto: Decisão / acompanhamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R05 · Notebook perdido</th><td data-row="4" data-column="1" data-introduced="1" aria-label="R05 · Notebook perdido: Evidência" data-placeholder="Preencha e justifique">E7: projetos confidenciais em disco sem criptografia.</td><td data-row="4" data-column="2" data-introduced="1" aria-label="R05 · Notebook perdido: Incerteza" data-placeholder="Preencha e justifique">Leitura por terceiros não demonstrada; cenário desligado.</td><td data-row="4" data-column="3" data-introduced="2" aria-label="R05 · Notebook perdido: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="4" data-introduced="2" aria-label="R05 · Notebook perdido: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="5" data-introduced="3" aria-label="R05 · Notebook perdido: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="6" data-introduced="4" aria-label="R05 · Notebook perdido: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="7" data-introduced="5" aria-label="R05 · Notebook perdido: Controle" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="8" data-introduced="5" aria-label="R05 · Notebook perdido: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="9" data-introduced="5" aria-label="R05 · Notebook perdido: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="10" data-introduced="6" aria-label="R05 · Notebook perdido: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="11" data-introduced="7" aria-label="R05 · Notebook perdido: Risco residual" data-placeholder="Preencha e justifique"></td><td data-row="4" data-column="12" data-introduced="8" aria-label="R05 · Notebook perdido: Decisão / acompanhamento" data-placeholder="Preencha e justifique"></td></tr><tr><th scope="row" data-column="0" data-introduced="1">R06 · Cópias destruídas</th><td data-row="5" data-column="1" data-introduced="1" aria-label="R06 · Cópias destruídas: Evidência" data-placeholder="Preencha e justifique">E8: conta de backup pode apagar todas as cópias.</td><td data-row="5" data-column="2" data-introduced="1" aria-label="R06 · Cópias destruídas: Incerteza" data-placeholder="Preencha e justifique">Posse da senha é hipótese; relação com R02 exige cuidado.</td><td data-row="5" data-column="3" data-introduced="2" aria-label="R06 · Cópias destruídas: Consequência" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="4" data-introduced="2" aria-label="R06 · Cópias destruídas: Plausibilidade" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="5" data-introduced="3" aria-label="R06 · Cópias destruídas: Classe inicial" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="6" data-introduced="4" aria-label="R06 · Cópias destruídas: Tratamento" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="7" data-introduced="5" aria-label="R06 · Cópias destruídas: Controle" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="8" data-introduced="5" aria-label="R06 · Cópias destruídas: Recurso / cobertura" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="9" data-introduced="5" aria-label="R06 · Cópias destruídas: Critério de verificação" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="10" data-introduced="6" aria-label="R06 · Cópias destruídas: Resultado / limite" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="11" data-introduced="7" aria-label="R06 · Cópias destruídas: Risco residual" data-placeholder="Preencha e justifique"></td><td data-row="5" data-column="12" data-introduced="8" aria-label="R06 · Cópias destruídas: Decisão / acompanhamento" data-placeholder="Preencha e justifique"></td></tr></tbody></table></div>
</div>

### Revisão rápida

1. Por que E2 não mede a probabilidade anual de comprometimento da conta?
2. Que diferença existe entre T2 no piloto e a eficácia do controle na equipe inteira?
3. Como V1 muda a avaliação de C3 e a decisão de aceitar o residual?

O ciclo de análise e avaliação de controles está concluído nesta aula quando a decisão, seus limites e a revisão estiverem registrados. A implementação técnica aprofundada pode ser estudada em outros temas do curso; não é requisito adicional desta entrega.




</div>

## Atividade {#atividade}

### Uma central de equipamentos precisa proteger seu serviço

- **Investigue:** leia o cenário e formule **seis riscos digitais distintos**, com base nos fatos fornecidos.
- **Decida:** construa a matriz completa, proponha controles e justifique prioridades e limites.
- **Entregue:** um PDF de **3–4 páginas por dupla**, com matriz, síntese de governança e justificativas individuais.

Você já acompanhou o método na Nuvora. Agora vai aplicá-lo a uma **central fictícia de empréstimo de equipamentos tecnológicos**. Os riscos e controles desta atividade serão definidos por sua dupla. Use o [cenário para consulta sem conexão](../assets/m1/A09-atividade-cenario.txt), a [matriz em branco — CSV](../assets/m1/A09-atividade-matriz.csv) e o [modelo da entrega — texto](../assets/m1/A09-modelo-governanca-riscos.txt).

### Conheça o serviço e seus limites

A central empresta notebooks, kits de sensores e instrumentos de medição a estudantes e equipes de projetos. O solicitante reserva pelo site; um atendente aprova o pedido; o sistema emite um comprovante em **QR Code**, uma imagem que representa o número da reserva. Na retirada e na devolução, o atendente atualiza o inventário digital.

O serviço depende do portal, do banco de reservas, dos computadores do balcão e de uma integração que envia notificações. Essa integração usa uma **API**, interface pela qual um sistema troca dados com outro; sua chave funciona como credencial. Um fornecedor presta manutenção no portal.

| Acordo do cenário | Informação para sua decisão |
|---|---|
| **Escopo** | Reservas, aprovações, retirada/devolução e inventário, incluindo dados, contas, computadores, integração, cópias e manutenção associadas. |
| **Função a preservar** | Emprestar ao solicitante autorizado e manter registro confiável de quem está com cada equipamento. |
| **Dados protegidos** | Nome, contato e histórico individual de empréstimos são de uso interno; o catálogo de equipamentos pode ser público. |
| **Responsabilidades** | Coordenação da central responde pelo serviço e prioriza; TI do campus executa medidas; direção decide exceções para risco alto. |
| **Objetivo de recuperação** | Retomar o serviço em até 4 h, com perda de registros de até 24 h. |
| **Recurso inicial** | 12 horas de trabalho de TI na primeira semana. Proponha estimativas de esforço, declare premissas e indique o que ficará adiado. Não são orçamentos reais. |

### Examine os fatos antes de nomear os riscos

Todos os registros abaixo são **fictícios**. Eles descrevem condições do serviço, sem afirmar que houve ataque. Não há credenciais, endereços ou sistemas reais para testar.

| Registro | Informação disponível |
|---|---|
| **F01 — Atendimento** | Estudantes usam contas pessoais. Quatro atendentes compartilham uma conta que aprova reservas e altera o inventário. Os registros de alteração mostram apenas o nome dessa conta. |
| **F02 — Comprovante** | Na demonstração fictícia, uma cópia encaminhada do QR Code abre o mesmo comprovante em outro celular sem pedir login. O atendente libera a retirada ao ler o código; o procedimento exige retirada pelo titular, mas não prevê conferir sua identidade. |
| **F03 — Atualização** | Atendentes recebem por e-mail links para utilitários e atualizações do fornecedor. Instalam esses programas no computador do balcão sem confirmar a origem por um contato já conhecido. Não há registro de programa malicioso encontrado. |
| **F04 — Integração** | A chave usada para enviar notificações também permite alterar reservas. Ela aparece no registro de diagnóstico de uma página consultável pelos monitores de atendimento. Não foi fornecida nenhuma chave real. |
| **F05 — Catálogo** | Uma consulta fictícia ao catálogo público mostra, junto ao equipamento, o nome e o e-mail de quem o retirou. Não é necessário entrar no sistema para essa consulta. |
| **F06 — Recuperação** | A base é copiada diariamente para outra pasta do mesmo servidor. A conta que administra a base consegue apagar também as cópias. Há registro de cópia concluída, mas não de restauração completa. |
| **F07 — Manutenção** | A conta remota de um técnico do fornecedor continua habilitada após o término do contrato e permite alterar configurações do portal. Não há comprovação de conexão posterior ao encerramento. |
| **F08 — Barreiras existentes** | As contas pessoais de administração usam MFA. A interface do catálogo público não oferece aprovação de reservas. Essas condições não demonstram a proteção de todas as contas ou da API. |

### Formule os seis riscos

- Identifique **ativo ou função afetada, evento de ameaça, condição que o permite e consequência**.
- Use identificadores **N01–N06** e dê a cada risco um nome descritivo. Não há correspondência obrigatória entre número do risco e número do fato.
- Relacione cada risco a um ou mais registros F01–F08 e indique a incerteza. Um fato pode sustentar mais de uma análise; dois nomes para o mesmo caminho não contam como riscos distintos.
- Mantenha o foco em segurança digital. Atraso de entrega ou perda física de equipamento, isoladamente, não descrevem um risco digital: explique a ação sobre conta, sistema, informação ou serviço que leva à consequência.

Uma forma de escrever a linha é: **“Se [evento de ameaça] ocorrer, a condição [fato ou hipótese] poderá afetar [ativo/função], causando [consequência]”.** Complete com sua análise do caso.

### Avalie e priorize com critérios comuns

Use as escalas de [plausibilidade](#tema-2) e o [quadro de classificação](#tema-3) da aula. Para consequência, aplique a régua ao serviço da central:

| Consequência | Critério deste cenário |
|---|---|
| **Limitada** | Correção local e reversível em até 1 h, sem retirada indevida nem exposição de dados internos. |
| **Relevante** | Retrabalho ou interrupção acima de 1 h e até 4 h, com registros recuperáveis e sem exposição de dados internos ou empréstimo indevido confirmado. |
| **Grave** | Interrupção acima de 4 h, perda de registros superior a 24 h, exposição de dados internos ou retirada indevida que comprometa a responsabilização pelo equipamento. |

Explique a condição que sustenta a consequência e a plausibilidade; não classifique todos os riscos automaticamente como altos. Risco alto exige encaminhamento à direção; moderado pode ter aceitação temporária pela coordenação por até sete dias, com justificativa e acompanhamento; baixo permanece acompanhado. Não presuma que uma exceção já foi aprovada.

### Construa a matriz completa com controles

Preencha as **treze colunas** no mesmo percurso demonstrado em aula:

1. **Risco, evidência e incerteza:** formule os seis cenários e cite os fatos usados.
2. **Consequência, plausibilidade e classe inicial:** avalie e justifique a prioridade.
3. **Tratamento:** escolha reduzir, evitar, compartilhar ou reter e explique por quê.
4. **Controle:** proponha uma medida específica por risco, ligada à condição ou consequência. Um controle compartilhado pode atender a vários riscos, com cobertura justificada.
5. **Recurso/cobertura:** estime esforço, dependências e alcance; indique medidas incluídas nas 12 h e adiadas. Não conte duas vezes o esforço de um controle compartilhado.
6. **Critério de verificação:** diga qual ação verificaria o controle e qual resultado mostraria proteção e função legítima preservada. Para recuperação, verificar apenas abertura da aplicação não basta.
7. **Resultado/limite:** como os controles são propostas, registre **“não verificado”**, o limite atual e a verificação necessária. Resultados da Nuvora não são evidência desta central.
8. **Risco residual:** estime a exposição que permaneceria **se o controle fosse implantado e atendesse ao critério**. A exposição atual continua sem redução comprovada.
9. **Decisão/acompanhamento:** nomeie executor, autoridade, prazo e gatilho de revisão, inclusive para os riscos adiados.

A matriz está completa quando todos os campos têm informação justificada. **“Não verificado” é um estado válido; resultado inventado não é.** A atividade termina na análise e no plano de verificação, sem instalação, exploração ou teste em sistemas reais.

### Organize e confira a entrega

- **Governança:** em poucas linhas, delimite o escopo, proponha uma diretriz coerente com o serviço e registre papéis e objetivo. A [retomada da própria A09](#contexto-a08) oferece os conceitos necessários.
- **Matriz:** mantenha N01–N06 na mesma ordem; divida as colunas em três faixas, como no modelo, para preservar a leitura em 3–4 páginas.
- **Justificativa:** destaque o risco priorizado, uma alternativa de controle rejeitada/adiada e uma informação que poderia mudar a decisão. Inclua uma justificativa individual curta de cada integrante.
- **Revisão cruzada:** confira se a ameaça, a condição e a consequência estão ligadas; se o controle atua nesse caminho; e se a verificação preserva o uso legítimo. Cite fontes e declare o uso de IA.

**Entrega:** `A08-A09-sobrenome1-sobrenome2.pdf`, pelo Classroom conforme orientação docente. Prazo definido pelo professor; estimativa de até duas horas fora da aula. Um único envio, encerrado na A09.

| Critério | Peso | Evidência esperada |
|---|---:|---|
| Contexto e identificação dos riscos | 25% | Escopo, diretriz e papéis coerentes; seis riscos digitais distintos ligados a F01–F08, com incertezas |
| Avaliação e prioridade | 20% | Critérios comuns, classes justificadas e prioridade explicada |
| Tratamento e controles | 25% | Medidas específicas, recurso, dependências, cobertura e função legítima |
| Verificação, residual e decisão | 20% | Critérios observáveis, estado não verificado, residual condicionado, responsável, autoridade e revisão |
| Clareza e autoria | 10% | Matriz completa e legível, justificativas individuais e fontes/uso de IA declarados |

**Uso de IA:** se utilizada, registre o pedido, as decisões aceitas/rejeitadas e sua justificativa. Não envie dados sensíveis. Cada integrante deve compreender e defender o resultado. Se não utilizada, declare isso.

**Extensão opcional, sem nova entrega:** escolha uma medida adiada e explique qual mudança de condição faria sua prioridade aumentar.

## Referências

- [NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments](https://www.nist.gov/publications/guide-conducting-risk-assessments): avaliação de risco e relação entre impacto, possibilidade e informação disponível.
- [CISA — #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide): medidas de proteção e recuperação. Leitura complementar; o exercício não exige executar os procedimentos técnicos do guia.
- [A08 — Governança e SGSI](A08-governanca-sgsi.md): conceitos de escopo, diretriz, autoridade e acompanhamento.
- [Consulta conceitual sobre riscos](../gestao_riscos/introducao.md): aprofundamento. Os critérios, a matriz, os esforços e os registros desta A09 são convenções didáticas originais, não requisitos normativos.
