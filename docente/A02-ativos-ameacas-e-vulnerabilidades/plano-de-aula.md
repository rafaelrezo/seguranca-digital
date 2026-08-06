# A02 — Ativos, ameaças e vulnerabilidades

## Ficha-base

| Campo | Definição |
|---|---|
| Unidade e conteúdo programático | Unidade 1 — ativos TI/OT; superfície de ataque; ameaça, fraqueza, vulnerabilidade, exposição, exploit, CVE, CWE e controle |
| Resultado de engenharia | Inventariar e priorizar ativos; registrar uma vulnerabilidade por evidência; selecionar e validar tratamento |
| Objetivos observáveis | inventariar ativos com consequência; distinguir os termos no caso; produzir registro com controle e reteste |
| Carga | 52 min conceituais + 52 min práticos |
| Cenário e pergunta mobilizadora | arquivo interno entregue pela loja: o que está exposto e por que agir primeiro? |
| Pré-requisitos | A01; navegador; leitura básica de HTTP |
| Infraestrutura | Juice Shop local em host indicado pelo docente; navegador; DevTools; Burp opcional; pacote alternativo no PDF |
| Evidência de aprendizagem | inventário priorizado e registro de vulnerabilidade com evidência interpretada |
| Critérios de conclusão | reprodução, termos corretos, consequência, controle, reteste, ética e sanitização |
| Referências oficiais | NIST CSF 2.0; CVE; CWE; OWASP Juice Shop |

## Roteiro de 104 minutos

| Minutos | Dimensão | Ação | Papel dos estudantes | Evidência |
|---:|---|---|---|---|
| 0–7 | T | Mostrar resposta HTTP fictícia | separar observação e inferência | duas observações e uma hipótese |
| 7–15 | T | Apresentar missão e restrições | identificar ativo e consequência | previsão individual |
| 15–29 | T | Construir inventário TI/OT | comparar função, proprietário e impacto | linha de inventário priorizada |
| 29–43 | T | Diferenciar ameaça, CWE, vulnerabilidade, exposição, exploit e CVE | classificar cartões do cenário | cadeia terminológica justificada |
| 43–52 | T | Comparar controles e prever reteste | votar e defender tratamento | decisão condicional |
| 52–60 | P | Confirmar alvo, papéis e prontidão | validar endereço e registrar estado | checklist de prontidão |
| 60–76 | P | Observar acesso simples | uma requisição por vez; interpretar resposta | evidência sanitizada |
| 76–90 | P | Inventariar e registrar | relacionar ativo, fraqueza, vetor e impacto | registro preliminar |
| 90–99 | P | Escolher intervenção e validação | comparar controles e definir reteste | decisão justificada |
| 99–104 | P | Revisão cruzada e encerramento | revisar outra dupla e limpar ambiente | ticket final |

**Somatório verificável:** teoria = 52 min; prática = 52 min; total = 104 min.

## Preparação docente

- Confirmar a URL local e impedir exposição pública do Juice Shop.
- Fixar e registrar a versão usada no laboratório; validar a rota escolhida na véspera.
- Preparar a evidência alternativa do PDF caso a interface ou o desafio varie.
- Reiniciar o ambiente antes da turma e usar somente dados fictícios.
- Não disponibilizar o gabarito fora de `docente/`.

## Plano alternativo

Se o Juice Shop não iniciar ou a versão alterar o desafio, as duplas usam a resposta HTTP fictícia e o conjunto de ativos do PDF. Elas ainda devem produzir inventário, hipótese, registro, controle e plano de validação. O objetivo avaliativo permanece alcançável sem uma flag.

## Segurança e encerramento

Alvo único fornecido pelo docente; sem demonstração pública; sem automação, força bruta, enumeração ampla ou terceiros. Critério de parada: destino divergente, dados reais, efeito fora do container ou comportamento instável. Encerrar o container e confirmar que a porta não responde ao final.
