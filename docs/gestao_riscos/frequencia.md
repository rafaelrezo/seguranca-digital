# Frequência das Avaliações de Risco

> **Objetivos de aprendizagem**
> - Diferenciar avaliações ad hoc, recorrentes, pontuais e contínuas.
> - Escolher a frequência adequada com base em criticidade e mudança.
> - Relacionar frequência com monitoramento continuo e Security+.
>
> **Tempo estimado:** 16 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/nnZVWbmVmG0)

---

## 1. O que a frequência responde

A frequência define **quando** a organizacao vai reavaliar seus riscos.

Nao existe uma periodicidade universal. A decisao depende de:

- criticidade do ativo;
- velocidade de mudanca do ambiente;
- exigencias legais ou contratuais;
- apetite e tolerancia ao risco.

> Analogia: uma planta industrial nao calibra todos os sensores com a mesma urgencia. Os sensores que controlam temperatura critica exigem verificacao mais frequente do que um indicador auxiliar.

---

## 2. Tipos de avaliacao

| Tipo | Gatilho | Melhor uso | Esforco |
|---|---|---|---|
| Ad hoc | Evento inesperado | Incidente, mudanca abrupta, nova ameaca | Medio |
| Recorrente | Calendario fixo | Revisoes mensais, trimestrais ou anuais | Medio |
| Pontual | Projeto especifico | Nova implementacao, fusao, migracao | Alto |
| Continua | Telemetria e alertas | Ambientes dinamicos, cloud, SOC, OT conectada | Alto |

### 2.1 Avaliacao ad hoc

E disparada quando algo relevante acontece:

- incidente de seguranca;
- mudanca grande em tecnologia;
- nova exigencia regulatoria;
- descoberta de nova exposicao.

### 2.2 Avaliacao recorrente

Segue um calendario definido. E a forma mais comum de manter a governanca viva sem depender de crise.

### 2.3 Avaliacao pontual

Tem inicio e fim claros. E tipica de projetos com escopo fechado.

### 2.4 Avaliacao continua

Usa sinais permanentes para atualizar o risco em tempo quase real. E comum com SIEM, EDR, dashboards de vulnerabilidade e monitoramento de fornecedores.

---

## 3. Como escolher a periodicidade

A regra pratica e simples:

1. Quanto maior o impacto, menor o intervalo entre revisoes.
2. Quanto mais rapido o ambiente muda, mais automatizado deve ser o monitoramento.
3. Quanto maior a dependencia de terceiros, mais relevante a reavaliacao.
4. Quanto mais madura a organizacao, maior a chance de combinar ciclos fixos com monitoramento continuo.

### Exemplo rapido

- Sistema de folha de pagamento: recorrente.
- Migração para nuvem: pontual + recorrente depois da entrada em producao.
- SOC com detecao 24x7: continua.

---

## 4. Ligacao com Security+ e continuidade

Na Security+, a ideia central e entender que:

- risco muda quando o ambiente muda;
- controles envelhecem;
- avaliacao unica nao sustenta segurança duradoura;
- continuidade e resposta a incidente dependem de revisao frequente.

Se o negocio nao tolera parada longa, a organizacao precisa revisar riscos com mais rigor, especialmente apos mudancas de arquitetura, fornecedores ou permissões.

---

## 5. Mini-caso prático

Uma empresa aprova uma nova aplicacao SaaS para RH. O sistema entra em producao sem integracao com o processo de revisao de riscos.

- Antes da entrada: avaliacao pontual.
- Depois da entrada: revisao recorrente de acessos e logs.
- Se houver alteracao contratual: avaliacao ad hoc.
- Se houver monitoramento de integracao e alertas: avaliacao continua.

---

## 6. Perguntas de revisão rápida

1. Qual a diferenca entre avaliacao ad hoc e pontual?
2. Por que ambientes cloud costumam exigir revisao mais frequente?
3. O que torna uma avaliacao continua mais eficaz do que uma revisao anual isolada?

---

## 7. Fontes de referência

- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
- NIST SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
- NIST SP 800-137, Information Security Continuous Monitoring (ISCM)  
  https://csrc.nist.gov/pubs/sp/800/137/final
