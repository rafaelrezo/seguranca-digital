# Plano docente — A10: uma visita confirmada pode entrar em qualquer área?

## Ficha-base

| Campo | Definição |
|---|---|
| Identificador | A10 — engenharia social, segurança física e política de visitas. |
| Ementa | Engenharia social e conscientização; segurança física; autenticação, autorização, accounting; avaliação e mitigação de risco. |
| Objetivos | Explicar quatro mecanismos de engenharia social; distinguir zonas/barreiras e AAA; configurar e testar política com permitido, negado e limitado. |
| Carga | 100 minutos: 40 T / 60 P de demonstração e análise conduzidas. |
| Situação | Indústria didática de envase, visita para impressora da recepção e pedidos de acesso à engenharia. |
| Pré-requisito | Método de risco da A09; página fornece matriz nova e todos os dados dos testes. Não presumir entrega individual. |
| Infraestrutura | Página A10 no MkDocs com laboratório integrado; alternativa com os mesmos casos na própria página. Não usar instalação real. |
| Evidência | R10-01/R10-02 e comparação de B antes/depois, C limitado e A preservado, com decisão, limite e responsável. |
| Critério | Preservar A, suspender B, limitar C; reconhecer que tailgating não gera pedido para o motor; propor controle humano e técnico. |

## Ganho e cadeia

A09 avaliou riscos; A10 mostra **como uma decisão de tratamento altera o comportamento de uma política** e o que permanece fora do teste. Na própria página, a turma alterna duas regras e compara três pedidos. A trilha registra somente as decisões calculadas no navegador, não eventos de porta. A10 não antecipa um impacto no CLP; A11 receberá a pergunta sobre dados alcançáveis pelas áreas.

**Cadeia:** herança de avaliação de risco → pedido B e política permissiva → previsão da linha de base → pretexto e fronteiras físicas → regras de confirmação e zona → B antes/depois, C e A → trilha e limites → R10-01/R10-02 → falha fora do modelo (*tailgating*) → revisão de procedimento → pergunta de dados para A11.

## Condução por blocos

| Minutos | T/P | Demonstração e participação | Ponto de espera |
|---|---:|---|---|
| 0–10 | 3/7 | Apresentar B na abertura; turma prevê a decisão do modelo permissivo e anota qual dado verificaria. | Todos identificam que o pedido ainda não foi confrontado com cadastro. |
| 10–25 | 10/5 | Figuras 1–2 e comparação de pretexto, impersonificação, urgência, vishing e tailgating; pergunta aberta ao contato cadastrado. | Não chamar pressão de urgência de prova de fraude nem usar número fornecido no pedido. |
| 25–40 | 10/5 | Figuras 3–4, perímetro, zona, leitor/controlador, vigilância, ambiente; PE-2/3/8 por função; distinguir autorização de registro. | SV-104 termina na recepção; leitor não detecta pessoa que entra junto. |
| 40–55 | 7/8 | AAA/atributos, matriz R10-01/R10-02 e caso A trabalhado; localizar os dados no laboratório integrado. | A tem cadastro confirmado e escopo restrito à recepção. |
| 55–80 | 5/20 | Na própria seção do laboratório, testar B sem regra, B com confirmação, C com limite de área e A como contraprova. Cada mudança vem após previsão da turma. | B passa a suspenso, C fica limitado e A permanece permitido; a trilha registra apenas decisões do navegador. |
| 80–95 | 3/12 | Tailgating fora do modelo; equipe propõe vigilância, acompanhante e resposta; completar duas linhas de risco. | Distinguir teste do motor e controle físico real. |
| 95–100 | 2/3 | Revisão rápida e ponte para tipos/fluxos de dados de A11. | Registrar uma falha remanescente e responsável. |
| **Total** | **40/60** |  |  |

## Gabarito e limites

- **Linha de base:** B é permitido porque a configuração ainda não consulta cadastro ou área. O resultado é intencionalmente inadequado.
- **Confirmação:** B suspende quando o chamado é conferido pelo contato conhecido. Isso não acusa o visitante; interrompe a entrada até esclarecimento.
- **Escopo:** C fica limitado à recepção; o chamado original continua válido. A também continua permitida.
- **Condições fora do motor:** janela e acompanhante são discutidos como requisitos operacionais; exigir como conferir, registrar exceção e responder a indisponibilidade.
- **Trilha:** guarda ID do caso, regras ativas e decisão desta sessão. Não comprova identidade física, passagem, execução da tarefa ou intenção.
- **Tailgating:** não há pedido ao motor. Câmera, desenho da passagem, observação, entrada individual, acompanhamento e reporte são camadas possíveis; discutir custo operacional e privacidade.
- **R10-01/R10-02:** premissas qualitativas fornecidas, risco moderado provisório; três casos artificiais não estimam probabilidade nem risco residual real. PE-2/3/8 são referências de função, não certificação.

## Contingência e segurança

Sem JavaScript ou projeção, usar os pedidos A/B/C e o cadastro apresentados na página: `chamado confirmado? → área solicitada está aprovada?`. Simular a política em papel e comparar antes/depois. Não realizar ensaio físico em instalações, abordar visitantes, expor contatos reais ou usar credenciais reais.

A atividade é checkpoint presencial, não nova tarefa do Classroom. A política exige procedimento de exceção, manutenção do cadastro e resposta a falha de leitor/relógio; não apresentar toggles do laboratório como implantação produtiva.
