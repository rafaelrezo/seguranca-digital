# Notas de facilitação — A02

## Respostas esperadas

- A resposta `200` comprova entrega do recurso naquela requisição; não comprova causa, autoria ou impacto total.
- O arquivo e seu conteúdo são ativos; aplicação, rota, container e dados relacionados também podem ser ativos.
- “Arquivo em área publicamente servida” e “controle de acesso inadequado” são hipóteses de fraqueza até a arquitetura ser examinada.
- CWE classifica fraquezas; CVE identifica vulnerabilidade específica publicada. Não atribuir CVE ao desafio didático sem fonte.
- Remoção da área pública é preferível quando o recurso não precisa ser servido; autorização é adequada quando há necessidade funcional.

## Perguntas de aprofundamento

- Quem é o proprietário do ativo e quem aceita o risco residual?
- Que evidência distingue descoberta acidental de exploração deliberada?
- Um `404` basta para provar correção, ou o arquivo apenas mudou de nome?
- Como a prioridade mudaria se o recurso comandasse um processo físico?

## Pistas progressivas

1. **Conceitual:** comece pelo substantivo que tem valor, não pela técnica.
2. **Observação:** compare comportamento esperado e observado da mesma rota.
3. **Técnica:** use a aba Network do navegador; não automatize enumeração.

## Cuidados

- Não revelar o caminho ao arquivo antes da previsão; entregar a evidência alternativa somente quando necessário.
- Captura isolada não atende: exigir interpretação e limites.
- Burp é opcional; DevTools deve permitir concluir toda a atividade.
- Se uma dupla acessar destino fora do escopo, interromper, registrar o ocorrido e restaurar o ambiente.

## Fechamento

Solicitar a frase: “Priorizamos o ativo ___ porque a consequência ___; o controle ___ será validado por ___.” Retomar confusões terminológicas no início da A03.
