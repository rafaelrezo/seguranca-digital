# Monitoramento e Relatório de Riscos

Entre os diversos componentes do gerenciamento de riscos, o **monitoramento** e o **relatório** desempenham um papel fundamental.  
Eles representam a **fase final do ciclo de gestão de riscos**, onde a organização acompanha continuamente os riscos existentes, identifica novos e comunica os resultados aos interessados.

---

## 1. O que é o Monitoramento de Riscos

O **monitoramento de riscos** é o processo contínuo de **acompanhamento, reavaliação e controle** dos riscos identificados, verificando se as respostas aplicadas permanecem eficazes e se novos riscos surgiram.

Em termos práticos, envolve:
- Rastrear riscos existentes e seus indicadores;
- Identificar **novos riscos** que podem emergir;
- Acompanhar **riscos residuais** (após tratamento);
- Avaliar a **efetividade das medidas de resposta**;
- Atualizar planos e registros conforme o projeto evolui.

### Exemplo 1 – TI
Uma empresa de desenvolvimento de software monitora continuamente:
- Riscos de atraso em prazos de entrega;
- Bugs críticos;
- Mudanças de requisitos ou mercado.

Ela utiliza **ferramentas de gestão de projetos** (como Jira, Trello ou GitLab) para acompanhar indicadores e realizar **revisões de risco em sprints**.

### Exemplo 2 – Automação Industrial
Em uma planta industrial, o time de manutenção monitora:
- Taxas de falha em sensores;
- Paradas não planejadas;
- Efetividade das manutenções preventivas.

Esses dados são coletados por sistemas **SCADA** ou **historiadores industriais**, que permitem detectar variações e prever riscos antes que causem paradas de produção.

---

## 2. Riscos Residuais e Riscos de Controle

Durante o monitoramento, dois conceitos tornam-se importantes:

### a) Risco Residual
É o risco **remanescente** após a aplicação de medidas de mitigação, transferência ou aceitação.  
Mesmo após controles, **parte do risco sempre permanece**.

**Exemplo – TI:**  
Após implementar firewall e autenticação multifator, ainda pode haver risco de vazamento por erro humano — esse é o **risco residual**.

**Exemplo – Automação:**  
Mesmo após instalar sensores redundantes, pode ocorrer falha simultânea dos sensores — o risco residual de indisponibilidade permanece.

$$
Risco_{residual} = Risco_{inicial} - Eficácia_{dos\_controles}
$$

### b) Risco de Controle
Representa a **perda de eficácia dos controles ao longo do tempo**.  
Controles técnicos ou administrativos degradam-se se não forem revisados.

**Exemplo – TI:**  
Um antivírus inicialmente eficiente torna-se menos eficaz à medida que surgem novos tipos de malware e assinaturas não são atualizadas.

**Exemplo – Automação:**  
Um sistema de proteção elétrica pode perder precisão se não for calibrado periodicamente, elevando o risco de falha.

> O monitoramento contínuo permite **identificar a degradação de controles** e **corrigir antes que ocorram incidentes**.

---

## 3. Relatório de Riscos

O **relatório de riscos** é o processo de **comunicação estruturada** das informações relacionadas à gestão de riscos para os **stakeholders** (gestores, equipe técnica, clientes e órgãos reguladores).

Ele apresenta:
- Riscos identificados e classificados;
- Ações de mitigação em andamento;
- Mudanças no nível de risco;
- Planos corretivos e desempenho dos controles.

### Exemplo 1 – Construção Civil
Uma construtora emite **relatórios mensais de risco** contendo:
- Riscos de segurança (acidentes, atrasos);
- Impactos financeiros estimados;
- Medidas adotadas e status.

Esses relatórios são compartilhados com engenheiros, gestores e clientes, promovendo **transparência e confiança**.

### Exemplo 2 – Automação Industrial
Uma indústria pode gerar **dashboards de risco operacional** em tempo real,
exibindo indicadores como **MTBF (tempo médio entre falhas)** e **MTTR (tempo médio de reparo)**.
Essas informações permitem priorizar manutenção e alinhar decisões com a direção.

---

## 4. Importância do Monitoramento e relatório

O monitoramento e o relatório de riscos são essenciais por quatro motivos principais:

### a) Tomada de Decisão Informada
Ao acompanhar continuamente os riscos, a organização obtém dados atualizados que orientam decisões sobre **recursos, prazos e prioridades**.

> Exemplo: em TI, se o risco de atraso em um módulo crítico aumenta, a gestão pode realocar desenvolvedores; em automação, pode antecipar compras de peças sobressalentes.

---

### b) Mitigação Contínua
O monitoramento permite **agir preventivamente**.  
Ao identificar tendências de aumento na probabilidade ou impacto, a equipe pode reforçar controles antes que o problema se concretize.

> Exemplo: um aumento no número de alertas de segurança pode indicar necessidade de atualização de firewall ou reconfiguração de rede.

---

### c) Comunicação com Stakeholders
O **relatório de riscos** garante que todos os envolvidos compreendam a situação e as ações tomadas.  
Isso promove **alinhamento, transparência e confiança** entre times técnicos e executivos.

> Em auditorias e conselhos corporativos, os relatórios de risco são evidências de **governança e responsabilidade**.

---

### d) Conformidade Regulatória
Em setores regulados (como **energia, finanças, saúde e tecnologia**), o relatório de riscos é **obrigatório por lei ou norma** (ex.: ISO 31000, ISO 27001, IEC 62443).  
Relatórios periódicos demonstram **aderência às práticas de segurança e continuidade**.

---

## 5. Boas Práticas de Monitoramento e Relatório

- **Estabelecer KPIs e KRIs:** indicadores mensuráveis de risco e desempenho.  
- **Definir periodicidade:** semanal, mensal ou contínua, conforme criticidade.  
- **Automatizar coleta de dados:** usando sistemas de logs, SIEM, SCADA ou BI.  
- **Padronizar relatórios:** formato, escala de impacto, e critérios de priorização.  
- **Comunicar em diferentes níveis:** relatórios executivos (resumo) e técnicos (detalhes).  
- **Registrar histórico:** permite análise de tendência e aprendizado organizacional.

---

## 6. Exemplo de Estrutura de Relatório de Riscos

| ID | Descrição do Risco | Probabilidade | Impacto | Nível | Ação de Mitigação | Status | Responsável |
|----|--------------------|---------------|----------|--------|------------------|----------|-------------|
| R-001 | Falha no servidor de banco de dados | Média | Alta | Alto | Backup diário e redundância | Em andamento | Equipe de Infra |
| R-002 | Vazamento de dados confidenciais | Baixa | Crítico | Alto | Revisão de acessos e logs | Controlado | Segurança da Informação |
| R-003 | Parada da linha de envase | Média | Alta | Alto | Troca preventiva de motores | Planejada | Eng. de Manutenção |

---

## 7. Conclusão

O **monitoramento e o relatório de riscos** são os mecanismos que **mantêm o gerenciamento de riscos vivo e dinâmico**.

- O **monitoramento** acompanha riscos e mede a eficácia dos controles, identificando mudanças no cenário.  
- O **relatório** garante que essas informações cheguem aos **decisores**, promovendo ações coordenadas.

> Seja em TI ou automação industrial, uma boa gestão de riscos é **contínua, comunicativa e baseada em dados**.  
> O monitoramento constante e relatórios bem estruturados são os pilares que sustentam **a resiliência e a confiabilidade das operações**.
