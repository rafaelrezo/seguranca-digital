# A08 — Quem governa a segurança depois que a falha é conhecida?

**Estado:** página integral publicada e verificada; aula não declarada ministrada.
**Ementa:** políticas, governança, riscos, controles e responsabilidades.
**Página:** `docs/aulas/A08-governanca-sgsi.md`. **Atividade:** P1 compartilhada A08–A12.
**Carga:** 100 min, 50 T/50 P conduzida. **Formato:** página projetada, análise coletiva e editor/caderno; execução individual de ferramentas não obrigatória.

## Ficha-base e continuidade

Objetivos: delimitar SGSI/dependências; distinguir autoridade/propriedade/execução; definir objetivo e acompanhamento. Herança: A02 e A05 já trabalharam controles/testes; A06 modelagem e A07 ATT&CK. Texto integral das apresentações reconsultado no confronto desta sessão. Não refazer laboratório nem atribuir aos estudantes resultados não auditados.

Caso novo e explicitamente fictício: ValeVerde, portal de pedidos e suporte contratado. G01–G04 são documentos integralmente disponíveis na página. A análise de gestão não depende de sistema em execução ou de acesso ao texto pago da ISO. A consulta oficial OWASP tem resumo alternativo na página.

Cadeia: exemplo técnico resolvido → G01–G04 → comparar escopos e responsabilidades → registro de governança → ler lacunas → SGSI → atribuir autoridade/objetivo → confrontar com documentos e medida → seção de P1 → escopo/autoridade reabertos em A09.

## Condução dos 100 minutos

| Minutos | T/P | Condução e resposta esperada |
|---|---|---|
| 0–15 | 5/10 | Exemplo técnico e consulta Authorization. Esperado: teste isolado não governa futuras mudanças. Encerrar a retomada em 15 min. |
| 15–35 | 10/10 | G01–G03, SGSI e escopos A/B. Localizar dependência externa e informação ainda faltante sobre interface OT. |
| 35–55 | 10/10 | Papéis, autoridade, recurso e substituição. Uma atribuição genérica a TI não resolve aceitação operacional. |
| 55–80 | 15/10 | Objetivo, documentação, monitoramento/auditoria/análise crítica. G04: 4/5 = 80%; sexta autorização não venceu. Falta de comprovação não prova acesso ativo. |
| 80–100 | 10/10 | Construir/revisar registro. Introduzir P1/V1 e guardar escopo/autoridade para A09. Sem submissão extra. |

Prática contabilizada inclui leitura conduzida, comparação, cálculo contextual e validação do registro, não operação individual comprovada. Pausar antes de revelar a interpretação e pedir uma justificativa curta; não reservar longos blocos de trabalho autônomo.

## Critério e apoio

Registro deve identificar processo e interface, decisão e autoridade, executor/recurso, objetivo e fonte/momento de revisão. Se a turma voltar à cesta, mostrar a linha pronta e redirecionar a quem mantém a regra. Se faltar editor, registrar no caderno. Se OWASP não abrir, usar a síntese fiel da própria página. Não é necessário abrir Drive ou criar conta.

## Respostas de facilitação — não publicar no site

- Escopo B é mais útil para G02/G03, mas ainda precisa de especificação para ampliação à produção; não declarar SGSI de toda a indústria pronto.
- Em V1, ausência de supervisor e aprovação exige confirmar substituição/autoridade e escalar; não basta a solicitação do fornecedor. Não antecipar uma única resposta de tratamento: isso será comparado em A09.
- Meta de 100% é regra fictícia do exercício; a amostra não mede segurança global.
- Se houver discussão de certificação, distinguir requisitos, implantação e avaliação formal sem prometer conformidade.

**Fontes:** ISO/IEC 27001:2022, catálogo e emenda identificados na fonte oficial; OWASP Authorization/ASVS/WSTG. Links na página. Não reproduzir cláusulas integrais. Datas acadêmicas e nota final não foram inferidas.
