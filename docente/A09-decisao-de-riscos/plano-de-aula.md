# A09 — Quais riscos a organização aceita e quais precisa tratar?

**Estado:** revisão temática aprovada em 10 set. 2026; aula não declarada ministrada. Oito temas com síntese, esquema, aplicação e explicação completa.
**Ementa:** gestão de riscos, tratamento, responsabilidades e acompanhamento no serviço de pedidos digitais.
**Página:** `docs/aulas/A09-decisao-de-riscos.md`. **Atividade:** enunciado ao final desta página, fechando A08–A09; P1 é somente identificador interno.
**Carga:** 100 min, 60 T/40 P conduzida. **Recursos:** página, editor/caderno; fichas R01/R02, matriz e C1–C5 disponíveis na página.

## Ficha-base e continuidade

Objetivos: avaliar com critérios comuns/incerteza; justificar alternativas sob restrição; registrar autoridade e residual/revisão. Receber esboço A08 com contexto/escopo do portal, política proposta, papéis, objetivo e rotina; base alternativa explícita na página. R01/R02 descrevem a situação original anterior às propostas: não presumir aprovação ou implantação. O gestor comercial responde pelo serviço de pedidos e pela aprovação; TI fornece supervisão e execução; a direção recebe exceções acima dos limites do gestor. Não reabrir triagem, DFD ou laboratório para redescobrir ameaças.

Cadeia: governança A08 → riscos fornecidos → aplicar critérios/comparar → classificação justificada → ler limite → risco/aceitação/tratamento → escolher sob restrição → mudar premissa e revisar → atividade concluída de A08–A09 → decisão/critério para A10.

## Condução dos 100 minutos

| Minutos | T/P | Condução e resposta esperada |
|---|---|---|
| 0–10 | 5/5 | Tema 1: receber R01/R02 no escopo do portal; separar linha de base e propostas A08; localizar evidência e desconhecido. Ausência de comprovação não é demonstração de acesso ativo. |
| 10–30 | 15/5 | Tema 2: explicar consequência/plausibilidade/incerteza; ler critérios e regra de aceitação sem multiplicação ordinal. |
| 30–55 | 15/10 | Tema 3: R01 trabalhado e R02 conduzido. Comparar justificativas e premissas, não exigir rótulo sem evidência. |
| 55–80 | 15/10 | Temas 4–5: estratégias e C1–C5 e 8h disponíveis. R01 C1 usa 2h; alternativas para R02 dependem de função/autoridade. Identificar as premissas de supervisão e aprovação que serão revistas no tema 7. |
| 80–100 | 10/10 | Temas 6–8: residual estimado, autoridade, gatilho e revisão do registro; aplicar V1 da atividade no final da A09. Guardar decisão para A10. |

## Gabarito de raciocínio e critérios — não publicar no site

- R01: relevante/alta segundo convenção fornecida; tratar prioritariamente. 2/10 descreve amostra, não probabilidade de ataque. C1 é defensável graças ao canal interno existente; sem essa premissa, rever.
- R02: plausibilidade média é defensável porque falta condição efetiva; baixa exige evidência de barreira que o pacote não oferece. Consequência relevante ou grave precisa ser vinculada às permissões, à integridade dos pedidos e à disponibilidade do portal. A ficha não informa duração de interrupção ou capacidade de recuperação; uma conclusão grave exige declarar e verificar essas premissas. Engenharia e processo industrial não integram R02.
- C1+C3 soma 8h, mas só é viável se acompanhamento e aprovação existirem. Após indisponibilidade do supervisor de TI, C3 não está pronta; o gestor comercial precisa decidir o encaminhamento dentro de sua autoridade. C4 não cabe na janela; C5 pode exigir alternativa operacional. Não escolher apenas pelo esforço.
- V1 muda duração/pessoa/supervisão; a solicitação do fornecedor não equivale a aprovação. Esperar confirmação e escalar, delimitar condição temporária ou suspender com alternativa aprovada podem ser encaminhamentos defensáveis conforme premissas. Não aceitar acesso prolongado sem autoridade, limite e evidência.
- Residual é estimado antes de implementar/avaliar. Não pedir capturas de testes que não ocorreram.

## Apoio e encerramento

Se não houver registro de governança iniciado, usar base da abertura e modelo copiável. Se a matriz gerar empate, comparar urgência, dependência e reversibilidade. Se houver incerteza, registrar coleta e medida provisória proporcional; não preencher a lacuna com narrativa de ataque. Não há sistema remoto, gasto de nuvem ou ambiente a encerrar.

O registro deve conter dois riscos e uma decisão detalhada, com alternativa comparada, recurso, autoridade, residual e revisão. O enunciado integral fecha no final da A09, com PDF de 3–4 páginas e decisão para R02; não exigir seção futura de controles/OT nem enviar atividade ao Classroom nesta publicação. A10 recebe decisão e critério para examinar aplicabilidade/eficácia dos controles.

**Fontes:** NIST SP 800-30r1 e ISO/IEC 27001:2022, conforme links na página. A matriz e os esforços são convenções didáticas originais, não prescrições normativas.

**Encaminhamento vigente:** A08 aponta para A09#atividade; o menu não apresenta P1 como destino separado. A URL antiga conserva somente o link para o novo enunciado. Modelo: `docs/assets/m1/A09-modelo-governanca-riscos.txt`; a cópia no caminho antigo foi alinhada para compatibilidade. A10–A12 usam o registro como insumo, sem ampliar esta entrega.

**Alinhamento à política PSI-NU-01 da A08:** na entrega, avaliar o item 8 para o suporte do portal: conservar ou adaptar a diretriz conforme necessidade, justificar a decisão e indicar aprovador. Separar o detalhe a inserir no procedimento e o registro que demonstraria execução; citar a referência sem copiar seu texto integral. Uma diretriz adequada pode ser mantida: não exigir alteração artificial. O item 8 fornece orientação, não aprovação já concedida para uma manutenção concreta. Preservar carga, rubrica e limite de 3–4 páginas.

**Registro da revisão de 8 set. 2026:** o caso anterior de R02 mencionava projetos de engenharia e autoridade da operação industrial, enquanto o escopo recebido da A08 era o portal. A versão vigente mantém os dois riscos em pedidos/publicações/manutenção do portal. Preservados 100 minutos, PDF de 3–4 páginas, C1–C5 (2/8/6/12/1 horas), oito horas totais e V1 com 48 horas adicionais, troca de técnico e ausência do supervisor. O histórico anterior permanece no Git; esta orientação substitui a aplicação industrial de R02.

## Condução pela síntese temática

Os temas 4, 5 e 7 separam estratégias, viabilidade e mudança de premissa. No tema 6, distinguir aceitação e residual; depois reabrir a decisão por ausência de supervisor e aplicar V1, preservando as condições completas. R01 continua como exemplo trabalhado; R02 exige justificativa. A atividade, rubrica, oito horas totais, seis restantes após C1 e PDF de 3–4 páginas permanecem. O texto de estudo fica aberto abaixo de cada síntese.
