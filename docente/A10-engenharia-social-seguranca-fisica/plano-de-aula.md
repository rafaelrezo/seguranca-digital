# Plano docente — A10: quem pode entrar e até onde pode ir?

## Ficha-base

| Campo | Definição |
|---|---|
| Identificador | A10 — início da nova matriz industrial prospectiva |
| Ementa | Engenharia social e conscientização; segurança física como condição de acesso; autenticação, autorização, accounting e gestão de riscos. |
| Objetivos | Separar alegação e confirmação; decidir entrada e escopo por evidências; propor verificação, acompanhamento e registro que preservem manutenção legítima. |
| Carga | 100 min: 40 T / 60 P conduzidos pelo professor. Proporção do curso completo a recalcular na nova edição. |
| Situação | Portaria de indústria fictícia de envase; visita para impressora da recepção versus pedido de sala de engenharia. |
| Pré-requisito | A09 forneceu método de avaliação de risco; a página A10 contém toda a matriz de partida e não depende de entrega individual. |
| Infraestrutura | MkDocs e painel HTML local em `docs/assets/m1/A10-painel-visitas.html`; navegador com JavaScript. Alternativa completa na página. Nenhum acesso físico ou digital externo. |
| Evidência | Registro curto R10-01/R10-02 e decisões A, B, C com rastro, limite e responsável. |
| Critério | Autorizar A só no escopo; negar B e escalar sem atribuir intenção; preservar a visita original em C e negar a ampliação; distinguir simulação de controle físico executado. |
| Fontes | NIST SP 800-30r1, SP 800-53r5 Update 1, SP 800-207 e SP 800-82r3; links na página. |

## Posição no curso e cadeia didática

A09 foi confirmada como realizada, mas a versão projetada e os produtos individuais não foram confirmados. A10 abre novo cenário industrial sem transportar fatos da Nuvora ou da central de equipamentos. A08/A09 permanecem históricas. A competência é aplicar decisão de risco a um **processo sociotécnico de acesso**, com controles humanos e físicos complementares. A11 abordará dados; OT técnico e processo físico virão depois, com fundamentos NIST SP 800-82, defesa em profundidade, leitura situada de zero trust e ISA/IEC 62443.

**Cadeia:** herança conceitual de risco → apresentar função normal e áreas → fornecer matriz R10-01/R10-02 → prever decisão para pedido → consultar cadastro/canal conhecido no painel → ler resultado e trilha → explicar pretexto, escopo e barreiras físicas → decidir A/B/C → comparar efeito e limite → registrar responsável/rotina → abrir risco de dados para A11. O painel executa comparação local com dados fictícios; não comprova que uma portaria real bloqueou entrada.

## Condução e tempo

| Minutos | T/P | Ação do professor e participação | Ponto de espera |
|---|---:|---|---|
| 0–15 | 10/5 | Abertura com pedido B sem resposta; identificar função legítima, áreas e informação faltante. Mostrar matriz pronta. | Turma separa fala/crachá de autorização cadastrada. |
| 15–30 | 10/5 | Sistematizar pretexto, urgência, canal independente, papéis. Exemplo trabalhado A. | Ninguém trata telefone informado pelo visitante como contato confiável. |
| 30–50 | 5/15 | Painel A: previsão, consulta, decisão, acompanhante, log. Professor mostra cada botão e sua função antes do uso. | A autorizado só na recepção; entrada/saída ainda são registros a produzir. |
| 50–70 | 5/15 | Painel B: pedido urgente; turma prevê, consulta, registra, revisa hipótese. | B negado/escalado; intenção não atribuída. |
| 70–85 | 5/10 | Painel C: escopo original versus sala adicional; discutir zonas, acompanhamento e exceção. | C preserva serviço aprovado e nega ampliação. |
| 85–95 | 3/7 | Comparar duas barreiras, responsáveis e evidências; completar matriz e criticar falha de cadastro. | Controle proposto não vira controle executado no mundo físico. |
| 95–100 | 2/3 | Revisão rápida, ponte para dados A11 e recolha oral de uma decisão corrigida. | Checkpoint final, sem envio no Classroom. |
| **Total** | **40/60** |  |  |

As pausas presenciais são curtas, com previsão e interpretação; não reservar um bloco longo para estudantes explorarem o painel sozinhos. O professor abre o painel, apresenta o estado, opera e congela os resultados. Quem não estiver no computador participa com a mesma tabela da página.

## Respostas e decisões esperadas

- **R10-01:** a classe moderada é provisória, derivada da premissa de iniciação moderada e dano condicionado alto, com impacto alto. Não converter ausência de histórico em probabilidade zero. Nova evidência pode mudar a avaliação.
- **R10-02:** autorização inicial verdadeira não cobre novo local ou finalidade. Controle é negar ampliação e pedir nova autoridade, sem cancelar automaticamente a manutenção legítima.
- **A:** Marta/SV-104/10:00–10:30/impressora/recepção coincidem com cadastro e retorno no número conhecido. Autorizar só esse escopo, com acompanhante e registro. O painel não prova execução do serviço.
- **B:** Leo/SV-999/sala de engenharia não constam; o contato conhecido nega a solicitação. Não autorizar entrada, registrar a divergência e escalar. Não chamar a pessoa de atacante comprovado.
- **C:** Marta e SV-104 são válidos para impressora, mas a sala de engenharia não foi aprovada. Permitir o original com acompanhante, negar a expansão, registrar a necessidade de novo chamado/autorização.
- Decisão antes da consulta é insuficiente, mesmo que por acaso coincida com a resposta esperada. Log local mostra o que o operador escolheu e a regra avaliou; não é log de catraca.

## Segurança, contingência e limites

Não executar teste de intrusão física, não abordar visitantes reais, não usar nomes ou contatos de fornecedores verdadeiros. O painel é um artefato estático sem rede; não coleta dados pessoais. Se JavaScript falhar, a tabela A/B/C e os registros de cadastro na página permitem o mesmo exercício. Se faltar projeção, o docente lê os três pedidos e as confirmações fornecidas, com pausa para previsão.

Evitar apresentar NIST SP 800-207 como obrigação de comprar uma ferramenta ou aplicar zero trust diretamente ao CLP. Nesta aula, a ideia pertinente é não dar acesso implícito pela localização ou afiliação; a avaliação de OT e seus limites operacionais será feita em A19–A22. NIST SP 800-53 oferece famílias de controles; citar a publicação não equivale a conformidade. Não descrever entrada, incidente ou entrega da turma como fato até que haja registro real.

## Produto e ponte

Checkpoint presencial: duas linhas de risco com controle, caso, resultado, limite, responsável e rotina de revisão. A atividade de A08–A09 segue encerrada. A11 receberá a pergunta “que dados a indústria mantém, quem deve vê-los e como prevenir sua saída indevida?”, abrindo nova linha da matriz sem reclassificar R10-01/R10-02 automaticamente.
