# Identificação de Riscos e Análise de Impacto nos Negócios (BIA)

A **identificação de riscos** é o **primeiro passo** do processo de gestão de riscos.  
Ela consiste em **reconhecer ameaças e vulnerabilidades** que possam comprometer os objetivos ou a operação de uma organização.

Esse processo é **proativo** — busca antecipar o que pode dar errado antes que um evento de fato ocorra, permitindo à organização **planejar ações preventivas e corretivas**.

---

## 1. O Que é Identificação de Riscos

Identificar riscos significa **mapear potenciais eventos** que possam causar **impactos negativos** nos objetivos estratégicos, operacionais, financeiros ou reputacionais de uma organização.

Essa atividade não depende apenas da probabilidade do risco, mas também do **potencial impacto** que ele pode gerar, mesmo que seja improvável.

### Exemplos

- **Em TI:** falha de servidor, invasão cibernética, vazamento de dados, erro humano.  
- **Em Automação Industrial:** falha em sensores críticos, perda de comunicação entre CLPs, interrupção de energia, sabotagem de rede OT.

> Assim como um engenheiro de automação inspeciona preventivamente cabos, fontes e aterramento para garantir a estabilidade do sistema, o profissional de segurança digital mapeia pontos vulneráveis em servidores, aplicações e redes.

---

## 2. Técnicas de Identificação de Riscos

A identificação de riscos pode ser feita de diversas formas, combinando métodos quantitativos e qualitativos.  
Os mais utilizados incluem:

- **Brainstorming:** discussão colaborativa com especialistas e gestores.  
- **Checklists:** uso de listas pré-definidas com categorias de risco.  
- **Entrevistas:** coleta de percepções individuais sobre vulnerabilidades.  
- **Análise de Cenários:** simulação de eventos para prever efeitos e reações.  

O objetivo é gerar uma **lista abrangente de riscos** que sirva como base para as próximas etapas da gestão.

> Em uma indústria, isso pode incluir riscos físicos (falha de compressor, aquecimento excessivo) e digitais (ataques a sistemas SCADA ou PLCs).  
> Em TI, pode envolver desde falhas de autenticação até indisponibilidade de APIs críticas.

---

## 3. Classificação dos Riscos

Durante a identificação, os riscos podem ser agrupados em categorias, facilitando a priorização e o tratamento posterior.

| Categoria | Descrição | Exemplo |
|------------|------------|----------|
| **Operacional** | Falhas em processos e sistemas internos | Pane em servidor, erro de configuração |
| **Financeiro** | Perdas monetárias diretas ou indiretas | Multas por não conformidade, fraudes |
| **Estratégico** | Decisões que afetam o posicionamento da organização | Adoção de tecnologia não testada |
| **Reputacional** | Impacto na imagem e confiança pública | Vazamento de dados de clientes |

Mesmo riscos considerados **improváveis** devem ser documentados, pois o impacto potencial pode ser significativo.

---

## 4. Da Identificação à Análise de Impacto (BIA)

Após a identificação dos riscos, a próxima etapa é a **Análise de Impacto nos Negócios** (BIA – *Business Impact Analysis*).  
Essa análise determina **quais funções da organização são críticas**, **qual o impacto de uma interrupção** e **quanto tempo e dados podem ser perdidos** sem causar danos irreversíveis.

O BIA orienta as decisões sobre **planos de continuidade de negócios (BCP)** e **planos de recuperação de desastres (DRP)**.

---

## 5. Principais Métricas da Análise de Impacto

A análise de impacto se baseia em quatro métricas fundamentais: **RTO**, **RPO**, **MTTR** e **MTBF**.  
Esses indicadores permitem quantificar a resiliência operacional.

---

### 5.1 RTO — Recovery Time Objective (Objetivo de Tempo de Recuperação)

O **RTO** representa o **tempo máximo aceitável** de indisponibilidade de um serviço ou sistema antes que a operação seja severamente afetada.

> É o **“limite de tolerância ao tempo de parada”**.

#### Exemplo em TI:
Uma loja virtual determina que, se o site ficar fora do ar por mais de **2 horas**, perde vendas e credibilidade.  
Logo, o **RTO = 2 horas**.

#### Exemplo em Automação:
Uma linha de envase automatizada pode parar no máximo **30 minutos** antes que a produção sofra atrasos irreversíveis.  
Logo, o **RTO = 30 minutos**.

---

### 5.2 RPO — Recovery Point Objective (Objetivo de Ponto de Recuperação)

O **RPO** mede a **quantidade máxima de dados** que pode ser perdida, expressa em **tempo**.

> É o **“limite de tolerância à perda de dados”**.

#### Exemplo em TI:
Um banco define que pode perder no máximo **15 minutos de transações**.  
Isso significa que os backups precisam ocorrer **a cada 15 minutos**.  
Logo, **RPO = 15 minutos**.

#### Exemplo em Automação:
Um sistema SCADA coleta dados a cada segundo. Caso o histórico de dados seja perdido por mais de **10 segundos**, a rastreabilidade do processo é comprometida.  
Logo, **RPO = 10 segundos**.

---

### 5.3 MTTR — Mean Time To Repair (Tempo Médio de Reparo)

O **MTTR** indica o **tempo médio necessário para reparar** um componente ou sistema após uma falha.

> Quanto menor o MTTR, mais eficiente é a equipe ou o processo de recuperação.

#### Exemplo em TI:
Um servidor apresentou falhas cinco vezes no ano, e cada reparo levou em média **4 horas**.  
Logo, **MTTR = 4 horas**.

#### Exemplo em Automação:
Um motor de esteira leva em média **2 horas** para ser substituído após uma pane mecânica.  
Logo, **MTTR = 2 horas**.

---

### 5.4 MTBF — Mean Time Between Failures (Tempo Médio Entre Falhas)

O **MTBF** mede a **confiabilidade** de um sistema.  
É o **tempo médio entre falhas sucessivas** de um mesmo equipamento ou processo.

> Quanto maior o MTBF, mais confiável é o sistema.

#### Exemplo em TI:
Um roteador corporativo apresenta falhas a cada **180 dias**.  
Logo, **MTBF = 180 dias**.

#### Exemplo em Automação:
Um sensor de nível falha cinco vezes por ano, logo o tempo médio entre falhas é **72 dias**.  
**MTBF = 72 dias.**

---

## 6. Relação entre as Métricas

Essas métricas estão interligadas e formam a base da estratégia de **continuidade de negócios**:

| Métrica | Objetivo | Foco |
|----------|-----------|------|
| **RTO** | Tempo máximo para recuperar operação | Tempo |
| **RPO** | Quantidade máxima de dados perdidos | Dados |
| **MTTR** | Tempo médio de reparo | Manutenibilidade |
| **MTBF** | Tempo médio entre falhas | Confiabilidade |

> Um bom plano de continuidade busca **reduzir o RTO e o RPO**, enquanto **aumenta o MTBF** e **reduz o MTTR**.

---

## 7. Integração com o Processo de Gestão de Riscos

Após identificar riscos e medir seus impactos, a organização deve:

1. **Registrar todos os riscos** identificados (mesmo os de baixa probabilidade);  
2. **Avaliar impacto e probabilidade** de cada risco;  
3. **Priorizar** aqueles que representam maior ameaça;  
4. **Planejar ações preventivas e corretivas**, definindo métricas e limites de tolerância (RTO/RPO/MTTR/MTBF);  
5. **Monitorar continuamente** o desempenho e revisar periodicamente as métricas.

---

## 8. Exemplo Integrado: Caso Prático

Uma indústria alimentícia utiliza um sistema SCADA para controle de temperatura e pressão.  
Durante uma análise de risco, foram identificados os seguintes pontos:

| Risco | Impacto | Métrica | Valor |
|--------|----------|----------|-------|
| Falha de sensor de temperatura | Parada de linha e perda de lote | RTO | 1 hora |
| Perda de dados de histórico | Compromete rastreabilidade de produção | RPO | 10 segundos |
| Tempo médio de substituição de sensor |  | MTTR | 45 minutos |
| Intervalo médio entre falhas de sensor |  | MTBF | 120 dias |

Esses valores guiaram a decisão de:
- Implementar **redundância de sensores**;
- Adotar **backup automático a cada 5 segundos**;
- Manter peças sobressalentes no estoque local.

---

## 9. Conclusão

A **identificação de riscos** é o alicerce de todo o processo de segurança e continuidade operacional.  
Ela permite que organizações, sejam elas de TI ou de automação industrial, **antecipem ameaças, planejem respostas e mantenham a resiliência**.

Ao integrar o BIA e as métricas (RTO, RPO, MTTR, MTBF), a organização transforma a teoria em prática — criando um ciclo de prevenção e resposta tão eficiente quanto um sistema de controle em malha fechada.

> Em resumo: identificar riscos é como mapear os sensores críticos de um sistema — só é possível reagir rapidamente quando você sabe **onde e como o problema pode surgir**.
