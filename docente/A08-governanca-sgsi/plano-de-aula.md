# A08 — Quem governa a segurança depois que a falha é conhecida?

**Estado:** revisão de contexto explícito publicada e verificada em 8 set. 2026, commit `9ef07ea2`, validação e deploy aprovados. A07 reconsultada integralmente no Drive; A08 não declarada ministrada.
**Ementa:** políticas, governança, riscos, controles e responsabilidades.
**Página:** `docs/aulas/A08-governanca-sgsi.md`. **Atividade:** enunciado integral ao final da A09, encerrando A08–A09 (identificador interno P1).
**Carga:** 100 min, 50 T/50 P conduzida. **Formato:** página projetada, análise coletiva e editor/caderno; execução individual de ferramentas não obrigatória.

## Ficha-base e continuidade

Objetivos: relacionar seções ISO/IEC 27001 às decisões do SGSI; construir esboço com contexto/escopo/política/papéis/objetivo; planejar operação/avaliação/melhoria distinguindo plano e execução. Herança imediata confirmada: A07 usa narrativa consolidada para localizar e justificar comportamentos no ATT&CK. Slides 33–35 delimitam produto e alcance; não fornecem chamado, correção de arquivo ou teste. Texto integral dos 35 slides reconsultado em 8 set. 2026: https://docs.google.com/presentation/d/187O4GeB7Xz62l6ij-is0U7La_26eCO4308GKGYArjqk. A ponte é a pergunta de gestão que o mapeamento não resolve; o episódio das planilhas é novo e fornecido nesta página, sem alegar continuidade factual do incidente da A07 ou entrega individual comprovada.

Caso novo e explicitamente fictício: ValeVerde, portal de pedidos e suporte contratado. G01–G04 são documentos integralmente disponíveis na página. A análise de gestão não depende de sistema em execução ou de acesso ao texto pago da ISO. A consulta oficial OWASP tem resumo alternativo na página.

Cadeia: limite do mapa ATT&CK → pergunta sobre quem mantém a proteção → caso novo ValeVerde e funcionamento legítimo → G02 com planilha/caminho/retirada/verificação limitada → nova publicação interna exposta → regra de leitura → consulta Authorization → lacuna de autoridade → G01–G04 → comparar escopos e responsabilidades → registro de governança → ler lacunas → SGSI → atribuir autoridade/objetivo → confrontar com documentos e medida → registro para a atividade da A09 → escopo/autoridade reabertos em A09.

## Condução dos 100 minutos

| Minutos | T/P | Condução e resposta esperada |
|---|---|---|
| 0–15 | 5/10 | 0–2: limite do mapa ATT&CK e mudança explícita para um exercício de gestão. 2–7: ler o funcionamento do portal e G02; distinguir retirada de agosto e publicação de setembro, prevendo o limite do teste. 7–11: apresentar requisito e conferir duas orientações Authorization. 11–15: distinguir pedido de atualização de aprovação pública; identificar autoridade ausente. Leitura seletiva conduzida; descrição completa fica disponível para estudo. Encerrar a ponte em 15 min. |
| 15–30 | 10/5 | G01–G04 e síntese visual; mapa das seções 1–3, 4–10 e Anexo A. Localizar 5.3 para a autoridade ausente, conectando 7/8/9. Não ler o catálogo de subseções como exposição isolada. |
| 30–50 | 10/10 | Passos 1–2 com exemplos de escopo/papéis das seções 4–5 da aula. Produzir contexto, escopo e trecho de política; conferir autoridade e recurso. |
| 50–65 | 10/5 | Passos 3–4: risco candidato e pendência para A09; função da SoA; objetivo, recurso, competência e comunicação. Não classificar R02 antes dos critérios nem produzir SoA completa. |
| 65–85 | 10/10 | Passos 5–6: simular solicitação em papel, parar por falta de aprovador; G04 e medida 4/5; distinguir operação simulada, registro fornecido e teste real. |
| 85–100 | 5/10 | Passos 7–8: critério de auditoria, decisão da direção, correção/causa/eficácia; revisar esboço e levar escopo/autoridade para A09. |

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

**Vídeo de apoio:** “ISO 27001 - ENTENDA DE VEZ!”, Guru De Risco, https://www.youtube.com/watch?v=V6N6luxhnd0, 852 segundos (14:12), em português. Metadados e disponibilidade para incorporação confirmados no YouTube em 8 set. 2026; descrição do autor relaciona SGSI, gestão de riscos e processos. A posição após a estrutura do SGSI retoma a lacuna de aprovação de suporte antes de delimitar escopo. Recurso de estudo complementar; não somar automaticamente 14 minutos ao encontro de 100 minutos. A explicação e a pergunta estão também em texto. A consulta confirmou metadados e descrição, não uma revisão integral da fala do vídeo.

**Fechamento da entrega:** A08 produz anotações; o enunciado e a entrega de governança/risco estão em A09#atividade. A10–A12 reutilizam o registro em checkpoints, sem seções futuras obrigatórias no PDF.

**Uso da norma:** mapa explicativo e roteiro autoral, sem reproduzir texto normativo integral. ISO/IEC 27001:2022 + Amd 1:2024. Capítulos 4–10 não são exclusões opcionais; controles necessários e SoA dependem de contexto/risco. A ordem de oito passos não é prescrita pela norma. O ganho em A08 passa a ser reconstruir como criar o SGSI, não só reconhecer seus componentes. O vídeo de março de 2022 antecede a edição de outubro de 2022: usar como explicação conceitual, não como autoridade para numeração, controles ou edição vigente. Sua exibição integral não integra os 100 minutos planejados.

**Limite do produto:** esboço de SGSI com pendências. A entrega A09 exige apenas contexto/escopo, política curta, papéis, objetivo/rotina, avaliação e decisão. Não exigir comprovação de controles implementados, auditoria executada, SoA completa ou certificação.

## Exemplos públicos verificados em 8 set. 2026

Comparações inseridas nos passos 1, 2 e 7, dentro dos blocos de condução já previstos. Não acrescentam atividade nem tempo ao encontro. Ler o resumo e comparar o registro ValeVerde; navegação externa é consulta complementar. Não exigir leitura integral dos documentos em inglês.

- UCL RISM01, versão 10.4, revisão 31/03/2025: seções 1, 4 e 8, escopo de ambientes confiáveis de pesquisa, participantes e exclusões. Fonte: https://isms.arc.ucl.ac.uk/rism01-scope/
- LNCC PSI 3.1, 21/10/2025: seções 1 e 15, páginas 1–2 e 18, compromisso e aprovação. Fonte: https://www.gov.br/lncc/pt-br/acesso-a-informacao/institucional/politica-de-seguranca-1/politicas-de-seguranca-da-informacao/02-psi-v3-1.pdf
- UCL RISM05, versão 4.1, revisão 11/04/2025: seções 4 e 6, imparcialidade e rastreabilidade das ações. Fonte: https://isms.arc.ucl.ac.uk/rism05-audit_procedure/

Documentos consultados diretamente nas fontes institucionais. Resumos autorais, sem reprodução integral. Não foram auditados resultados, implantação ou certificados das instituições. Não confundir numeração das seções dos documentos com cláusulas ISO. Não transportar exclusões da UCL nem obrigações do LNCC para ValeVerde sem examinar contexto e requisitos.

## Cognitive Load Analysis

### Task Summary
Revisão da seção 4 para estudantes iniciantes em SGSI: delimitar a gestão do portal e compreender por que o suporte contratado precisa ser considerado.

### Load Breakdown
**Intrinsic Load: Medium** — quatro elementos relacionados: atividade, informação, pessoas e serviço externo.
**Extraneous Load: High (antes da revisão)** — referência não explicada ao modelo técnico, termos “interface governada” e “dependência” sem definição, salto para operação industrial.
**Germane Load: Medium** — comparar escopos e justificar a inclusão da aprovação do acesso.

### Overall Assessment
Diagnóstico textual, sem observação da turma: a versão anterior exigia reconstruir pré-requisitos antes de analisar o caso. A revisão apresenta uma relação por vez e mantém o contexto junto da pergunta.

### Problem Areas
Abertura abstrata; definição ausente; figura com termos adicionais; pergunta que exigia recuperar G02/G03 e inferir relação industrial.

### Modification Suggestions
Aplicado: começar pelo funcionamento normal dos pedidos digitais, definir escopo, mostrar os participantes, explicar dependência pelo serviço contratado e só então comparar A/B. Substituir a figura nessa seção por tabela de elementos e motivos; preservar o SVG no acervo. Explicitar a relação com embalagem como informação a confirmar. Na condução dos passos 1–2, usar a nova proposta B e perguntar por que a manutenção contratada pertence ao escopo. Permanecem os 100 minutos e os mesmos critérios de entrega.

### Expertise Reversal Check
Apoio adequado à introdução do SGSI. Quem já conhece o conceito pode avançar diretamente à comparação A/B e à justificativa. Não exigir copiar definições.

**Ajuste após retorno docente:** a comparação de escopos delimita atividades, sem avaliar eventos como descumprimento de política inexistente. Explicitar escopo → política a construir → responsabilidades/procedimentos; a pergunta final verifica inclusão do serviço, sem antecipar regra de aprovação.

**Revisão visual da seção 7:** cinco esquemas SVG (escopo, autoridade, risco candidato, aprovação e melhoria) e três quadros de leitura (preparação, medida e avaliação) substituem parte dos parágrafos. Diagramas com título e descrição acessíveis; disposição vertical para telas estreitas. Manter leitura de estados proposta/pendência/execução/verificação e os mesmos checkpoints. Tarefa executada; arquivo da fila excluído por solicitação docente.
