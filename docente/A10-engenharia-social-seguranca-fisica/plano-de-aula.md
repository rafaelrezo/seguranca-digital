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
| Infraestrutura | MkDocs, navegador, `docs/assets/m1/A10-painel-visitas.html`; alternativa integral em tabelas na página. Não usar instalação real. |
| Evidência | R10-01/R10-02 e tabela de testes antes/depois com configuração, decisão, log, limite e responsável. |
| Critério | Preservar A, suspender B/D/E, limitar C; reconhecer que tailgating não gera pedido para o motor; propor controle humano e técnico. |

## Ganho e cadeia

A09 avaliou riscos; A10 mostra **como uma decisão de tratamento altera o comportamento de uma política** e o que permanece fora do teste. O painel anterior era uma pergunta de múltipla escolha com resposta pronta. O painel atual implementa condições configuráveis, executa cinco casos e evidencia a diferença entre decisão e registro. Não representa uma porta real. A10 não antecipa um impacto no CLP; A11 receberá a pergunta sobre dados alcançáveis pelas áreas.

**Cadeia:** herança de avaliação de risco → pedido B e política permissiva → execução da linha de base → rastro sem registro → pretexto e fronteiras físicas → regra de verificação/zona/janela/acompanhante → casos A–E → log e limites → R10-01/R10-02 → falha fora do modelo (*tailgating*) → revisão de procedimento → pergunta de dados para A11.

## Condução por blocos

| Minutos | T/P | Demonstração e participação | Ponto de espera |
|---|---:|---|---|
| 0–10 | 3/7 | Abrir B com política vazia; turma prevê, observa PERMITIR e ausência de log. | Todos identificam que o modelo inicial aceita o pedido sem confronto com cadastro e condições. |
| 10–25 | 10/5 | Figuras 1–2 e comparação de pretexto, impersonificação, urgência, vishing e tailgating; pergunta aberta ao contato cadastrado. | Não chamar pressão de urgência de prova de fraude nem usar número fornecido no pedido. |
| 25–40 | 10/5 | Figuras 3–4, perímetro, zona, leitor/controlador, vigilância, ambiente; PE-2/3/8 por função; distinguir autorização de registro. | SV-104 termina na recepção; leitor não detecta pessoa que entra junto. |
| 40–55 | 7/8 | AAA/atributos, matriz R10-01/R10-02 e caso A trabalhado; ativar as cinco regras e testar A. | A passa com log, sem liberar engenharia. |
| 55–80 | 5/20 | Redefinir painel, ligar regra a regra; B, C, D, E; executar conjunto e comparar com previsão. | B/D/E suspendem, C limita; log apenas quando habilitado. |
| 80–95 | 3/12 | Tailgating fora do modelo; equipe propõe vigilância, acompanhante e resposta; completar duas linhas de risco. | Distinguir teste do motor e controle físico real. |
| 95–100 | 2/3 | Revisão rápida e ponte para tipos/fluxos de dados de A11. | Registrar uma falha remanescente e responsável. |
| **Total** | **40/60** |  |  |

## Gabarito e limites

- **Linha de base:** A–E são permitidos porque a configuração não consulta cadastro, área, janela ou acompanhante. O resultado é intencionalmente inadequado. Sem regra de registro, a tela mostra decisão mas nenhum evento de revisão.
- **Confirmação:** B suspende. A, C, D e E ainda podem passar porque a regra não testa as demais condições. Essa observação motiva as regras seguintes.
- **Escopo:** C fica limitado à recepção; o chamado original continua válido. B continua suspenso.
- **Janela:** D suspende até autorização nova; não basta editar o relógio ou aceitar fala do visitante.
- **Acompanhamento:** E suspende até acompanhante aprovado; evitar que a portaria assuma essa função sem designação.
- **Registro:** o log guarda ID do caso, decisão, motivo e regras ativas na sessão. Não comprova identidade física, passagem, execução da tarefa ou intenção.
- **Tailgating:** não há pedido ao motor. Câmera, desenho da passagem, observação, entrada individual, acompanhamento e reporte são camadas possíveis; discutir custo operacional e privacidade.
- **R10-01/R10-02:** premissas qualitativas fornecidas, risco moderado provisório; cinco casos artificiais não estimam probabilidade nem risco residual real. PE-2/3/8 são referências de função, não certificação.

## Contingência e segurança

Sem JavaScript ou projeção, a página contém os dados de A–E e a ordem de avaliação: `cadastro/contato → janela → acompanhante → interseção de zonas → registro`. Simular a política em papel e comparar antes/depois. Não realizar ensaio físico em instalações, abordar visitantes, expor contatos reais ou usar credenciais reais. Se o navegador abrir o arquivo local, a navegação de volta ao MkDocs pode depender da URL do site; a página da aula continua disponível no menu.

A atividade é checkpoint presencial, não nova tarefa do Classroom. A política exige procedimento de exceção, manutenção do cadastro e resposta a falha de leitor/relógio; não apresentar toggles do laboratório como implantação produtiva.
