# A09 — Quais riscos a organização aceita e quais precisa tratar?

**Estado:** página integral publicada e verificada; aula não declarada ministrada.
**Ementa:** gestão de riscos, tratamento, responsabilidades, acompanhamento e relação TI/OT.
**Página:** `docs/aulas/A09-decisao-de-riscos.md`. **Atividade:** mesmo P1 de A08–A12.
**Carga:** 100 min, 60 T/40 P conduzida. **Recursos:** página, editor/caderno; fichas R01/R02, matriz e C1–C5 disponíveis na página.

## Ficha-base e continuidade

Objetivos: avaliar com critérios comuns/incerteza; justificar alternativas sob restrição; registrar autoridade e residual/revisão. Receber escopo e autoridade A08; base alternativa explícita na página. Não reabrir triagem, DFD ou laboratório para redescobrir ameaças.

Cadeia: governança A08 → riscos fornecidos → aplicar critérios/comparar → classificação justificada → ler limite → risco/aceitação/tratamento → escolher sob restrição → mudar premissa e revisar → seção P1 → decisão/critério para A10.

## Condução dos 100 minutos

| Minutos | T/P | Condução e resposta esperada |
|---|---|---|
| 0–10 | 5/5 | Receber R01/R02; localizar evidência e desconhecido. Ausência de comprovação não é demonstração de acesso ativo. |
| 10–30 | 15/5 | Explicar consequência/plausibilidade/incerteza; ler critérios e regra de aceitação sem multiplicação ordinal. |
| 30–55 | 15/10 | R01 trabalhado e R02 conduzido. Comparar justificativas e premissas, não exigir rótulo sem evidência. |
| 55–80 | 15/10 | C1–C5 e 8h disponíveis. R01 C1 usa 2h; alternativas para R02 dependem de função/autoridade. Mudar premissa do supervisor. |
| 80–100 | 10/10 | Residual estimado, autoridade, gatilho e revisão do registro; aplicar V1 de P1. Guardar decisão para A10. |

## Gabarito de raciocínio e critérios — não publicar no site

- R01: relevante/alta segundo convenção fornecida; tratar prioritariamente. 2/10 descreve amostra, não probabilidade de ataque. C1 é defensável graças ao canal interno existente; sem essa premissa, rever.
- R02: plausibilidade média é defensável porque falta condição efetiva; baixa exige evidência de barreira que o pacote não oferece. Consequência relevante ou grave precisa ser vinculada à função e à condição sobre projetos essenciais, não ao rótulo OT. Não há prova de caminho até CLP.
- C1+C3 soma 8h, mas só é viável se acompanhamento e aprovação existirem. Após indisponibilidade do supervisor, C3 não está pronta. C4 não cabe na janela; C5 pode exigir alternativa operacional. Não escolher apenas pelo esforço.
- V1 muda duração/pessoa/supervisão; a solicitação do fornecedor não equivale a aprovação. Esperar confirmação e escalar, delimitar condição temporária ou suspender com alternativa aprovada podem ser encaminhamentos defensáveis conforme premissas. Não aceitar acesso prolongado sem autoridade, limite e evidência.
- Residual é estimado antes de implementar/avaliar. Não pedir capturas de testes que não ocorreram.

## Apoio e encerramento

Se não houver P1 iniciado, usar base da abertura e modelo copiável. Se a matriz gerar empate, comparar urgência, dependência e reversibilidade. Se houver incerteza, registrar coleta e medida provisória proporcional; não preencher a lacuna com narrativa de ataque. Não há sistema remoto, gasto de nuvem ou ambiente a encerrar.

O registro deve conter dois riscos e uma decisão detalhada, com alternativa comparada, recurso, autoridade, residual e revisão. P1 é único e será consolidado após A12; não enviar atividade ao Classroom nesta publicação. A10 recebe decisão e critério para examinar aplicabilidade/eficácia dos controles.

**Fontes:** NIST SP 800-30r1, ISO/IEC 27001:2022 e NIST SP 800-82r3, conforme links na página. A matriz e os esforços são convenções didáticas originais, não prescrições normativas.
