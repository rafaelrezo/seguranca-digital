# Análise Qualitativa de Riscos

> **Objetivos de aprendizagem**
> - Classificar riscos com base em impacto e probabilidade.
> - Interpretar uma matriz de calor sem depender de formulas complexas.
> - Priorizar tratativas para apoiar Security+ e GRC.
>
> **Tempo estimado:** 15 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/nnZVWbmVmG0)

---

## 1. O que é análise qualitativa

A análise qualitativa classifica riscos em categorias como baixo, medio, alto ou critico.

Ela é rapida, comunicavel e muito util quando ainda nao existem dados numericos suficientes para uma abordagem mais precisa.

> Analogia: e o equivalente ao primeiro diagnostico de um equipamento. Antes de medir tudo com precisão, o tecnico experiente ja percebe onde esta a anomalia mais urgente.

---

## 2. Fatores avaliados

Os dois eixos principais sao:

- **Probabilidade**: chance de o evento ocorrer.
- **Impacto**: gravidade da consequencia.

Esses eixos sao combinados em uma matriz de risco. A leitura da matriz ajuda a decidir o que deve receber acao imediata e o que pode ser monitorado.

### Escalas comuns

| Nivel | Probabilidade | Impacto |
|---|---|---|
| Baixo | Raro ou improvavel | Dano limitado |
| Medio | Possivel | Dano relevante, mas controlavel |
| Alto | Provavel | Dano serio |
| Critico | Muito provavel com dano alto | Efeito severo sobre negocio ou operação |

---

## 3. Matriz de calor

| Impacto \ Probabilidade | Baixa | Media | Alta |
|---|---|---|---|
| Baixo | Baixo | Baixo | Medio |
| Medio | Baixo | Medio | Alto |
| Alto | Medio | Alto | Critico |

A matriz nao substitui julgamento profissional. Ela organiza a conversa para que gestores e equipes tecnicas falem a mesma lingua.

---

## 4. Quando usar

A abordagem qualitativa e a melhor escolha quando:

- o prazo e curto;
- o dado historico e limitado;
- a organizacao precisa priorizar rapidamente;
- o objetivo e comunicar risco para publico misto, tecnico e executivo.

Em Security+, isso aparece bastante em perguntas sobre priorizacao de controles, resposta a incidentes e continuidade.

---

## 5. Limites da abordagem

- Depende da experiencia dos avaliadores.
- Pode variar entre areas diferentes.
- Nao gera um valor financeiro exato.

Por isso, ela costuma ser o primeiro passo antes da analise quantitativa.

---

## 6. Mini-caso prático

Uma universidade identifica tres riscos:

- senha fraca em sistema academico;
- falha intermitente em backup;
- atraso na renovacao de licencas.

O time classifica:

- senha fraca: alto/critico;
- backup intermitente: alto;
- licencas: medio.

Essa triagem permite agir primeiro no risco com maior chance de vazamento e maior impacto sobre alunos e docentes.

---

## 7. Perguntas de revisão rápida

1. Por que a analise qualitativa e util mesmo sem numeros precisos?
2. O que a matriz de calor ajuda a priorizar?
3. Quando vale a pena complementar a analise qualitativa com uma quantitativa?

---

## 8. Fontes de referência

- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-39, Managing Information Security Risk  
  https://csrc.nist.gov/pubs/sp/800/39/final
- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
