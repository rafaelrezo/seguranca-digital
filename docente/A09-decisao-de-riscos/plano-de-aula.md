# A09 — Avaliar riscos com a NIST SP 800-30

## Ficha-base

**Estado:** revisão e publicação autorizadas em 10 set. 2026; execução de A09 não confirmada. **Carga:** 100 min, 60T/40P. **Vínculo:** M1, uma atividade A08–A09, encerrada nesta aula; A10 pendente de replanejamento.

**Ementa:** preparar, conduzir, comunicar e manter avaliação de riscos; fontes/eventos, vulnerabilidades, condições predisponentes, controles existentes, verossimilhança e impacto; aplicação dos resultados a resposta, verificação e residual.

**Objetivos:** formular e avaliar riscos com critérios e incertezas; justificar controles viáveis com função preservada; interpretar resultados e revisar residual/decisão. **Pergunta:** como avaliar seis riscos digitais e recomendar proteção dentro do recurso disponível?

**Herança:** A08 ministrada confirmada pelo docente; versão exata e entregas individuais não identificadas. Retomar escopo, diretriz, autoridade e acompanhamento com conteúdo na própria A09. Não atribuir o novo ambiente ou os testes à aula anterior. **Infraestrutura:** página MkDocs, navegador/projeção e papel/editor; sem instalação ou teste externo. Pacote simulado como alternativa. Evidência de aprendizagem é a análise justificada.

**Cadeia:** governança → preparar novo escopo/E1–E8 → identificar fontes/eventos/condições → matrizes progressivas → G-5/I-2 → resposta e plano de 12 h → comunicar → interpretar T1–T7 → V1 e residual → decisão revista/atividade em novo caso → fechamento em A09.

**Referência:** NIST SP 800-30 Rev. 1 final, setembro de 2012, edição mais recente disponível no CSRC em 10 set. 2026. A edição de 2002 foi retirada. A página resume fundamentos e tarefas do guia; não segue os nove passos de 2002. Figuras 3/5 redesenhadas; G-5/I-2 traduzidas preservando suas células. Critérios de impacto, autoridades, recursos e exercícios são locais. Responder e testar controles não são novas etapas atribuídas à Rev. 1.

## Condução — 100 minutos

| Minutos | T/P | Tema e ganho | Participação |
|---|---|---|---|
| 0–12 | 8/4 | Retomada A08 e tema 1: processo NIST, ambiente, linha de base e preparação. | Identificar finalidade, horizonte e informação faltante. Não exibir matriz completa. |
| 12–25 | 8/5 | Tema 2: fontes, eventos, vulnerabilidades, condições e controles existentes. Primeira matriz com cinco campos. | R01 trabalhado; comparar R02–R06 com respostas breves. |
| 25–45 | 13/7 | Temas 3–4: iniciação, dano condicionado, geral e impacto; depois classe. | Ler G-5 e I-2 por linha/coluna. Demonstrar H1 e sensibilidade em R01; justificar R02. |
| 45–63 | 11/7 | Tema 5: tratamento, medidas, recurso e critério. | Comparar planos de 12 h; explicar dependências e medidas adiadas. |
| 63–70 | 4/3 | Tema 6: comunicar avaliação e recomendação. | Identificar destinatário, executor, aprovação e prazo. |
| 70–85 | 9/6 | Temas 7–8: T1–T7 e V1; reavaliar fatores, residual e decisão. | Prever critério, interpretar alcance e revisar a conclusão. |
| 85–100 | 7/8 | Exportar e transferir para central de equipamentos; CSV em branco e entrega. | Ler fatos, identificar ativo e lacuna, explicar as quatro faixas; não fornecer seis riscos prontos. |
| **Total** | **60/40** | **Análise e controles encerrados em A09** | **Uma entrega** |

R01 ensina o método; R02 recebe aprofundamento/V1; R03–R06 ampliam a comparação sem seis investigações longas. Se houver atraso, reduzir rodadas de fala; preservar distinção das verossimilhanças, V1 e transferência. O professor registra sínteses; reprodução individual opcional.

## Matriz e operação

Sete vistas sincronizadas nos temas 2–8: 5, 9, 10, 14, 15, 16 e 17 campos. Tema 1 prepara a análise sem antecipar linhas. Tema 2 identifica; 3 estima; 4 classifica; 5 planeja resposta; 6 comunica; 7 registra resultado; 8 atualiza residual. Campos aparecem somente depois da explicação. “Mostrar só as colunas novas” mantém o risco; exportação inclui o acumulado. Exportar antes de sair; sem persistência. Sem JavaScript, tabelas legíveis e CSV/texto/papel.

A matriz de registro tem seis linhas. As tabelas G-5/I-2 têm 5×5 combinações e outras finalidades: G-5 combina duas verossimilhanças; I-2 determina risco a partir de geral e impacto. Não confundir as três tabelas nem multiplicar rótulos.

## Respostas e pontos de atenção

### R01 e a correção metodológica

E1/E2 sustentam fragilidade e capacidade de uso, não frequência de obtenção de senha. H1 é hipótese de iniciação moderada em 30 dias, com confiança baixa. Dano dado o evento alto → G-5 geral moderada; impacto alto → I-2 risco moderado provisório. Se iniciação mudar para alta, geral e risco ficam altos. Não repetir o antigo gabarito grave/alta/alto: ele misturava probabilidade condicional com geral e usava outra escala.

Após T1, sob H1 e no caminho testado: dano condicionado baixo → geral baixa → risco baixo com impacto alto. Não generalizar a sessões, recuperação de conta ou outros ataques. A medida não comprova diminuição da iniciação.

### R02 e os demais riscos

R02: execução de malware e recuperação funcional não demonstradas. Pedir hipótese de iniciação e estimativa separada de dano; ausência de dado não produz nível moderado automaticamente. Se iniciação moderada, dano alto e impacto alto, risco moderado; se dano muito alto, G-5 geral alta e I-2 risco alto. A extensão do dano exige justificativa, não escolha para forçar rótulo. V1 confirma falha de recuperação funcional além de 4 h, não chegada de malware nem propagação.

R03: fonte adversarial por imitação de remetente; E5 não prova que solicitação foi executada. R04: conta persistente não prova intenção nem conexão posterior. R05: perda acidental e exposição do notebook; distinguir frequência de perda, acesso posterior e gravidade da divulgação. R06: separação de credencial é controle existente, insuficiente contra o próprio administrador comprometido; não somar perda comum a R02 duas vezes.

Vulnerabilidade é fragilidade; condição predisponente pode ser característica legítima, como uso em visitas. Considerar controles existentes com alcance/eficácia, sem misturar recomendações futuras à linha de base. MFA em algumas contas não comprova proteção de toda API ou de contas compartilhadas.

### Planos e verificações

C1+C2+C3=12 h; protege identidade, piloto de execução e prepara recuperação, sem cobrir tudo. C2+C4=12 h depende de piloto satisfatório e adia C1/C3. C1+C2+C4=16 h, não cabe. C1+C5+C6+C7=12 h é outra combinação, com execução/recuperação/retenção adiadas. Não inventar horas gratuitas nem exigir implantar as oito medidas.

T1: proteção e entrada legítima no recorte. T2: piloto apenas. T3: 3 h e cópia com 20 h, mas retorno funcional inconclusivo antes de V1. T4–T7 são planos comparativos separados, não todas as medidas implementadas em 12 h. V1: tarefa falha e às 6 h ainda não pode ser concluída; recuperação no prazo não atendida. Não invalida T1/T2 nem prova cópias apagadas. Correção: completar dependências e verificar tarefa inteira, com esforço adicional a estimar e aprovação pendente.

Residual registra fatores e classe revistos, hipótese e alcance. A linha de base fica preservada. Se mudou encaminhamento, atualizar decisão e comunicar. Sete dias é limite didático de revisão, não autorização para ignorar urgência.

## Atividade em novo cenário

Central fictícia de empréstimo de equipamentos: seis riscos N01–N06 levantados pela dupla a partir de F01–F08. Dezessete campos, PDF 3–4 páginas, quatro faixas de colunas, até 2 h externas. Um envio; prazo docente. Resultado/limite registra não verificado e verificação necessária; residual condicionado ao sucesso do controle proposto. Não transportar T1–T7/V1 da Nuvora. Exigir sensibilidade em um risco e distinguir hipótese de frequência observada.

Possibilidades para mediação, sem gabarito público: F01 conta compartilhada e autoria; F02 comprovante repassado e retirada não autorizada; F03 atualização maliciosa; F04 chave exposta e privilégio excessivo; F05 divulgação de dados internos; F06 cópia no mesmo servidor e destruição/recuperação; F07 acesso após contrato. Aceitar seis caminhos distintos sustentados pelos fatos. F08 permite analisar controles existentes e seus limites; não transforma os demais fatos em seguros. F05 já mostra exposição, sem precisar inventar um incidente de invasão.

Rubrica: contexto/identificação 25%; avaliação/prioridade 20%; tratamento/controles 25%; verificação/residual/decisão 20%; clareza/autoria 10%. Não premiar a coincidência com uma classe única; avaliar coerência das premissas, combinações e decisões.

## Fontes e rastreabilidade

- https://csrc.nist.gov/pubs/sp/800/30/r1/final
- https://doi.org/10.6028/NIST.SP.800-30r1
- Figura 3 p. 12; Figura 5 p. 23; tarefas 1-1–1-5, 2-1–2-6, 3-1/3-2 e 4-1/4-2.
- Apêndices D–F para fontes/eventos/condições; G verossimilhança; H impacto; I risco; J priorização; K relatório.
- Página e evidências Nuvora são exercício original; não alegar SGSI conforme ou testes executados pela turma.
