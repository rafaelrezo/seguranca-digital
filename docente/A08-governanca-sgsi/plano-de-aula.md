# A08 — Quem governa a segurança depois que a falha é conhecida?

**Estado:** revisão de contexto explícito publicada e verificada em 8 set. 2026, commit `9ef07ea2`, validação e deploy aprovados. A07 reconsultada integralmente no Drive; A08 não declarada ministrada.
**Ementa:** políticas, governança, riscos, controles e responsabilidades.
**Página:** `docs/aulas/A08-governanca-sgsi.md`. **Atividade:** P1 compartilhada A08–A12.
**Carga:** 100 min, 50 T/50 P conduzida. **Formato:** página projetada, análise coletiva e editor/caderno; execução individual de ferramentas não obrigatória.

## Ficha-base e continuidade

Objetivos: delimitar SGSI/dependências; distinguir autoridade/propriedade/execução; definir objetivo e acompanhamento. Herança imediata confirmada: A07 usa narrativa consolidada para localizar e justificar comportamentos no ATT&CK. Slides 33–35 delimitam produto e alcance; não fornecem chamado, correção de arquivo ou teste. Texto integral dos 35 slides reconsultado em 8 set. 2026: https://docs.google.com/presentation/d/187O4GeB7Xz62l6ij-is0U7La_26eCO4308GKGYArjqk. A ponte é a pergunta de gestão que o mapeamento não resolve; o episódio das planilhas é novo e fornecido nesta página, sem alegar continuidade factual do incidente da A07 ou entrega individual comprovada.

Caso novo e explicitamente fictício: ValeVerde, portal de pedidos e suporte contratado. G01–G04 são documentos integralmente disponíveis na página. A análise de gestão não depende de sistema em execução ou de acesso ao texto pago da ISO. A consulta oficial OWASP tem resumo alternativo na página.

Cadeia: limite do mapa ATT&CK → pergunta sobre quem mantém a proteção → caso novo ValeVerde e funcionamento legítimo → G02 com planilha/caminho/retirada/verificação limitada → nova publicação interna exposta → regra de leitura → consulta Authorization → lacuna de autoridade → G01–G04 → comparar escopos e responsabilidades → registro de governança → ler lacunas → SGSI → atribuir autoridade/objetivo → confrontar com documentos e medida → seção de P1 → escopo/autoridade reabertos em A09.

## Condução dos 100 minutos

| Minutos | T/P | Condução e resposta esperada |
|---|---|---|
| 0–15 | 5/10 | 0–2: limite do mapa ATT&CK e mudança explícita para um exercício de gestão. 2–7: ler o funcionamento do portal e G02; distinguir retirada de agosto e publicação de setembro, prevendo o limite do teste. 7–11: apresentar requisito e conferir duas orientações Authorization. 11–15: distinguir pedido de atualização de aprovação pública; identificar autoridade ausente. Leitura seletiva conduzida; descrição completa fica disponível para estudo. Encerrar a ponte em 15 min. |
| 15–35 | 10/10 | G01–G03, síntese visual ValeVerde, SGSI e escopos A/B. Localizar dependência externa e informação ainda faltante sobre interface OT. |
| 35–55 | 10/10 | Papéis, autoridade, recurso e substituição. Uma atribuição genérica a TI não resolve aceitação operacional. |
| 55–80 | 15/10 | Objetivo, documentação, monitoramento/auditoria/análise crítica. G04: 4/5 = 80%; sexta autorização não venceu. Falta de comprovação não prova acesso ativo. |
| 80–100 | 10/10 | Construir/revisar registro. Introduzir P1/V1 e guardar escopo/autoridade para A09. Sem submissão extra. |

Prática contabilizada inclui leitura conduzida, comparação, cálculo contextual e validação do registro, não operação individual comprovada. Pausar antes de revelar a interpretação e pedir uma justificativa curta; não reservar longos blocos de trabalho autônomo.

## Critério e apoio

Registro deve identificar processo e interface, decisão e autoridade, executor/recurso, objetivo e fonte/momento de revisão. Manter as planilhas de margens e o catálogo como contraste legítimo em toda a ponte. Ao perguntar, nomear documento, ação e condição; não dizer apenas “retome a abertura”, “aquela rota” ou “use G02”. IDs permitem citar evidências; não substituem o contexto. Não apresentar catálogo ASVS/WSTG. A ilustração de topo representa o problema e a direção de solução; não comprova causa técnica. Se faltar editor, registrar no caderno. Se OWASP não abrir, usar a síntese fiel da própria página. Não é necessário abrir Drive ou criar conta.

## Respostas de facilitação — não publicar no site

- G02 é o atendimento fictício da planilha de agosto, transcrito na seção 1. A indisponibilidade posterior daquele endereço não comprova autorização implantada: a própria retirada da cópia explica o resultado. O catálogo permanecer acessível demonstra somente a função pública examinada.
- Setembro é outra planilha e outra publicação. Atualizar informação interna não autoriza divulgar custos e margens. A pergunta de gestão é quem tem autoridade para conceder essa permissão, quem executa e quem verifica.
- Os caminhos ilustrativos não são endpoints do Juice Shop nem links operacionais; nenhuma nova execução foi realizada. Não pedir acesso a esses caminhos como prática.

- Escopo B é mais útil para G02/G03, mas ainda precisa de especificação para ampliação à produção; não declarar SGSI de toda a indústria pronto.
- Em V1, ausência de supervisor e aprovação exige confirmar substituição/autoridade e escalar; não basta a solicitação do fornecedor. Não antecipar uma única resposta de tratamento: isso será comparado em A09.
- Meta de 100% é regra fictícia do exercício; a amostra não mede segurança global.
- Se houver discussão de certificação, distinguir requisitos, implantação e avaliação formal sem prometer conformidade.

**Fontes:** ISO/IEC 27001:2022, catálogo e emenda identificados na fonte oficial; OWASP Authorization. Links na página. Não reproduzir cláusulas integrais. Datas acadêmicas e nota final não foram inferidas.

**Mediação da síntese visual:** após a tabela G01–G04, percorrer G03 → autoridade ausente → registro de aprovação. A figura resume os insumos já apresentados; não exige memorizar IDs. G04 representa autorizações de suporte, não planilhas. Fonte original e registro da adaptação preservados em `ilustracoes/`.

**Separação entre condução e instrução pública:** apresentar a comparação das orientações Authorization durante a aula; se o site externo estiver indisponível, usar as definições já incorporadas ao texto. A página dirige ações ao estudante, sem rótulos como “consulta conduzida pelo professor” ou comentários sobre a estratégia de condução. Essas orientações ficam neste plano.
