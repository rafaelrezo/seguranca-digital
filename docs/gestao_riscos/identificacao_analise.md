# Identificação de Riscos e Análise de Impacto nos Negócios (BIA)

> **Objetivos de aprendizagem**
> - Identificar ativos, ameaças, vulnerabilidades e impactos.
> - Explicar o papel da BIA na continuidade de negocio.
> - Relacionar RTO, RPO, MTTR e MTBF com prioridades de resposta.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/du4ocukIUhQ)

---

## 1. Identificar antes de analisar

A identificacao de riscos e o primeiro filtro da gestao de riscos. Antes de calcular prioridade, a equipe precisa saber:

- quais ativos importam;
- quais processos dependem deles;
- quais ameacas podem explorá-los;
- quais vulnerabilidades tornam o evento mais provavel.

> Analogia: e como mapear um circuito eletrico antes de ligar a energia. Se voce nao sabe quais fios alimentam o sistema critico, tambem nao sabe onde a falha vai doer mais.

---

## 2. Técnicas de identificacao

As tecnicas mais usadas combinam visao tecnica e visao de negocio:

- entrevistas com donos de processo;
- revisao de incidentes anteriores;
- checklists e auditorias;
- analise de arquitetura;
- brainstorm com times de negocio, TI e seguranca.

### 2.1 O que procurar

- dados sensiveis;
- servicos expostos;
- dependencias de terceiros;
- pontos unicos de falha;
- controles ausentes ou antigos.

---

## 3. BIA: o que e critico para o negocio

A **Business Impact Analysis** identifica o que acontece quando um processo fica indisponivel. Ela responde:

- qual servico nao pode parar por muito tempo;
- quanto tempo de parada e aceitavel;
- quanto dado pode ser perdido;
- qual setor sofre o maior impacto.

Isso orienta o plano de continuidade, o DRP e a priorizacao de controles.

### Principais metricas

| Metrica | Significado | Pergunta pratica |
|---|---|---|
| RTO | Tempo maximo de recuperacao | Em quanto tempo o servico precisa voltar? |
| RPO | Ponto maximo de perda de dados | Quanto dado podemos perder? |
| MTTR | Tempo medio para reparar | Quanto tempo a equipe leva para corrigir? |
| MTBF | Tempo medio entre falhas | Quao confiavel e o componente? |

> O Security+ costuma cobrar a interpretacao dessas siglas em cenarios de continuidade e backup.

---

## 4. Como a analise de impacto funciona

Depois de identificar o risco, a equipe avalia o dano para a operacao:

1. Para qual processo o sistema e essencial?
2. Se ele parar, o que quebra primeiro?
3. A parada gera perda financeira, legal ou reputacional?
4. O problema e local ou atinge toda a empresa?

### Exemplo de priorizacao

- Servico de autenticacao: impacto alto, porque afeta varios sistemas.
- Portal interno de comunicados: impacto medio.
- Area de testes isolada: impacto baixo.

---

## 5. Tabela de decisão rapida

| Cenário | Impacto | Prioridade |
|---|---|---|
| Portal de atendimento fora do ar por 4 horas | Alto | Imediata |
| Arquivo de teste corrompido | Baixo | Baixa |
| Sistema de folha indisponivel no fechamento do mes | Alto | Imediata |

---

## 6. Mini-caso prático

Uma clinica digital usa prontuarios, agenda de exames e acesso por aplicativo. O time descobre que o backup diario nao cobre o banco de dados transacional.

- Ativo critico: prontuario e agenda.
- RTO: 1 hora.
- RPO: 15 minutos.
- Ação: reduzir janela de backup, testar restauração e revisar dependencia de autenticação.

---

## 7. Perguntas de revisão rápida

1. O que a BIA acrescenta a uma lista simples de riscos?
2. Qual a diferenca pratica entre RTO e RPO?
3. Por que MTTR e MTBF ajudam a priorizar investimentos?

---

## 8. Fontes de referência

- NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems  
  https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide  
  https://csrc.nist.gov/pubs/sp/800/61/r2/final
- NIST CSF 2.0  
  https://www.nist.gov/cyberframework
