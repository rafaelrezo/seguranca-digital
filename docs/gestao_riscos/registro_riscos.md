# O Registro de Riscos (Risk Register)

A **gestão de riscos** é uma atividade essencial em qualquer projeto ou operação organizacional.  
Ela envolve **identificar, avaliar e priorizar incertezas** que possam afetar os objetivos de negócio.  

Um dos instrumentos mais eficazes para conduzir essa gestão é o **registro de riscos** (*risk register*), também chamado de **log de riscos**.  
Ele centraliza todas as informações sobre os riscos identificados, seus impactos, probabilidades, responsáveis e estratégias de mitigação.

---

## 1. O que é um Registro de Riscos

O **registro de riscos** é um documento vivo, atualizado continuamente ao longo do ciclo de vida do projeto.  
Ele serve para **documentar, comunicar e acompanhar** riscos de maneira estruturada e transparente.

Ele pode ser comparado a uma **planilha de manutenção preventiva** em uma planta industrial ou a um **dashboard de monitoramento de vulnerabilidades** em TI — ambos permitem visualizar rapidamente onde estão os problemas e o que precisa de atenção.

O registro de riscos geralmente inclui:

- Descrição do risco  
- Impacto  
- Probabilidade (ou *likelihood*)  
- Resultado (*outcome*)  
- Nível ou limiar do risco  
- Custo estimado  
- Dono do risco (*risk owner*)  
- Indicadores-chave de risco (*KRIs*)  

---

## 2. Estrutura do Registro de Riscos

| Campo | Descrição | Exemplo em TI | Exemplo em Automação |
|--------|------------|---------------|----------------------|
| **Descrição do Risco** | Explica de forma clara o que é o risco e como ele pode afetar a operação | Falha no servidor de banco de dados | Queima de CLP principal da linha de produção |
| **Impacto** | Consequência caso o risco ocorra (financeiro, tempo, qualidade, reputação) | Perda de dados, indisponibilidade do sistema | Parada da linha, perda de lote |
| **Probabilidade (Likelihood)** | Chance de o risco acontecer | Alta (hardware antigo) | Média (componentes sujeitos a sobrecarga) |
| **Resultado (Outcome)** | Efeito final do risco caso ele ocorra | Interrupção do serviço e perda de clientes | Atraso na produção e perda de insumos |
| **Nível de Risco (Risk Level)** | Combinação de impacto e probabilidade (alto, médio, baixo) | Alto | Alto |
| **Custo** | Valor financeiro estimado do impacto ou mitigação | R$ 40.000 (reposicionar servidor e dados) | R$ 15.000 (compra de CLP reserva) |
| **Responsável (Risk Owner)** | Pessoa ou equipe responsável por monitorar e mitigar o risco | Líder de infraestrutura | Engenheiro de manutenção |
| **Indicadores de Risco (KRI)** | Métricas que alertam sobre aumento do risco | Número de falhas por mês | Temperatura média do painel elétrico |

---

## 3. Descrição do Risco

A **descrição** é o primeiro elemento do registro.  
Ela deve ser **clara, direta e compreensível**, para que qualquer pessoa consiga entender o que está sendo avaliado sem precisar de contexto adicional.

> Em TI: “Falha de autenticação entre microserviços devido a expiração de certificados.”  
>  
> Em automação: “Oscilação de tensão elétrica provocando reset de controladores lógicos programáveis.”

---

## 4. Impacto do Risco

O **impacto** define a **gravidade das consequências** caso o risco se concretize.  
Ele pode afetar **custos, prazos, qualidade, segurança ou reputação**.  

Escalas comuns:
- **Baixo:** impacto limitado e facilmente recuperável.  
- **Médio:** impacto moderado, mas gerenciável.  
- **Alto:** impacto crítico, com possibilidade de parada ou perda significativa.

> Exemplo: uma falha de servidor que interrompe o site de vendas por 2 horas é impacto **alto**;  
> uma queda momentânea de um sensor redundante pode ser **baixo**.

---

## 5. Probabilidade (Likelihood)

A **probabilidade** mede **a chance de o risco ocorrer**.  
Pode ser expressa em escala numérica (1–5, 1–10) ou descritiva (*raro*, *possível*, *provável*, *quase certo*).

> Em automação, a probabilidade de falha de um motor sem manutenção há mais de 2 anos é **alta**.  
>  
> Em TI, a probabilidade de ataque de phishing em uma empresa sem treinamento é **quase certa**.

---

## 6. Resultado (Outcome)

O **resultado** é o **efeito final** do risco se ele ocorrer.  
Ele está diretamente relacionado à combinação de impacto e probabilidade.  
Por exemplo, um risco de alto impacto e alta probabilidade gera um resultado crítico.

> É como em controle industrial: impacto e probabilidade são os “ganhos” que determinam a resposta do sistema — quanto maiores, mais severa a saída (resultado).

---

## 7. Nível ou Limiar de Risco (Risk Level / Threshold)

O **nível de risco** é obtido combinando impacto e probabilidade, normalmente através de uma **matriz de calor (heat map)**:

| Impacto ↓ / Probabilidade → | Baixa | Média | Alta |
|------------------------------|--------|--------|------|
| **Baixo** | Baixo | Baixo | Médio |
| **Médio** | Baixo | Médio | Alto |
| **Alto** | Médio | Alto | Crítico |

Esse nível define a **prioridade de tratamento**:
- **Alto / Crítico:** exige ação imediata.  
- **Médio:** deve ser monitorado e mitigado.  
- **Baixo:** pode ser aceito conforme a política da organização.

---

## 8. Custo do Risco

O **custo** pode representar:
- O **dano financeiro** causado pela materialização do risco; ou  
- O **investimento necessário** para mitigá-lo.

> Em TI: custo de reposição de servidores e restauração de backups.  
>  
> Em automação: custo de substituição de componentes e parada da linha.

---

## 9. Tolerância e Apetite ao Risco

Antes de definir se um risco é “alto” ou “baixo”, é essencial entender **quanto risco a organização está disposta a aceitar**.

### 9.1 Tolerância ao Risco (*Risk Tolerance*)
É o **nível máximo de risco** que uma organização aceita sem adotar contramedidas.  
Quando o custo de mitigação é superior ao dano potencial, o risco pode ser **tolerado**.

> Exemplo: aceitar o risco de pequenas oscilações na rede elétrica, sem investir em UPS industrial.

### 9.2 Apetite ao Risco (*Risk Appetite*)
Refere-se à **disposição da organização em assumir riscos** para alcançar seus objetivos.  
Existem três perfis principais:

| Tipo | Características | Exemplo |
|------|------------------|----------|
| **Expansivo (Expansionary)** | Busca oportunidades, assume riscos altos por retornos maiores | Startups de tecnologia ou empresas em rápida expansão |
| **Conservador (Conservative)** | Prefere estabilidade, assume poucos riscos | Indústria farmacêutica, setor elétrico |
| **Neutro (Neutral)** | Equilíbrio entre risco e retorno | Empresas de médio porte com foco em crescimento sustentável |

> Na prática, o apetite ao risco define o “limite operacional seguro” — tal como um engenheiro define faixas de operação segura para uma máquina.

---

## 10. Indicadores-Chave de Risco (KRIs)

Os **KRIs (Key Risk Indicators)** são métricas que funcionam como **sensores de alerta precoce**.  
Eles indicam quando um risco está se aproximando de um ponto crítico.

Exemplos:

| Contexto | Indicador | Interpretação |
|-----------|------------|---------------|
| **Banco** | Taxa de inadimplência | Aumento pode indicar maior risco de crédito |
| **TI** | Número de falhas em firewall por hora | Indica crescimento da superfície de ataque |
| **Automação** | Temperatura média dos inversores | Sinal de sobrecarga elétrica iminente |

> Assim como sensores industriais monitoram vibração e temperatura para prever falhas, os KRIs monitoram o ambiente corporativo para antecipar riscos organizacionais.

KRIs devem estar **alinhados aos objetivos estratégicos** e **ao apetite de risco da organização**.  
Eles permitem **ações preventivas** antes que o problema se torne crítico.

---

## 11. Responsável pelo Risco (Risk Owner)

O **responsável pelo risco** é a pessoa ou equipe **designada para acompanhar e tratar** aquele risco.  
Suas responsabilidades incluem:

- Monitorar indicadores e mudanças de cenário;  
- Implementar medidas de mitigação;  
- Atualizar o registro de riscos;  
- Reportar status à gestão.

> Em TI: o **líder de DevOps** pode ser o responsável por riscos de disponibilidade do sistema.  
>  
> Em automação: o **engenheiro de manutenção** pode ser responsável por riscos de falhas de equipamentos.

> O conceito é semelhante ao de um “dono do ativo” — quem conhece melhor o equipamento é quem deve zelar por sua confiabilidade.

---

## 12. Exemplo Prático de Registro de Riscos

| ID | Descrição do Risco | Impacto | Probabilidade | Nível | Custo Estimado | Dono | KRI |
|----|--------------------|----------|----------------|--------|----------------|------|-----|
| 1 | Falha no banco de dados principal | Alto | Média | Alto | R$ 40.000 | Arquiteto de Sistemas | Número de falhas por mês |
| 2 | Oscilação elétrica em painel SCADA | Alto | Alta | Crítico | R$ 15.000 | Eng. de Manutenção | Temperatura do painel |
| 3 | Atraso na entrega de fornecedor | Médio | Média | Médio | R$ 5.000 | Gerente de Compras | Percentual de entregas fora do prazo |

---

## 13. Conclusão

O **registro de riscos** é o **instrumento central da gestão de riscos**.  
Ele conecta informações estratégicas (apetite e tolerância), operacionais (indicadores e responsáveis) e financeiras (custos e impactos).

Com ele, a organização:

- Garante **visibilidade e rastreabilidade** dos riscos;  
- Prioriza ações com base em **dados objetivos**;  
- Integra **indicadores preditivos (KRIs)** à tomada de decisão;  
- Mantém **alinhamento entre gestão de riscos e objetivos estratégicos**.

> Em suma, o registro de riscos é o “painel de controle” da gestão de incertezas — assim como um SCADA exibe o estado de uma planta industrial, o risk register exibe o estado de resiliência de toda a organização.
