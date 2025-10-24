# Frequência das Avaliações de Risco

A **frequência das avaliações de risco** define **com que regularidade** uma organização realiza o processo de identificação, análise e tratamento de riscos.  
Essa regularidade depende do tipo de atividade da organização, do ambiente em que ela atua e da natureza dos riscos envolvidos.

Em ambientes de **TI corporativa**, isso pode envolver vulnerabilidades de sistemas, falhas de configuração ou riscos de segurança da informação.  
Já na **automação industrial**, pode estar relacionado à confiabilidade de sensores, falhas de comunicação entre CLPs ou ameaças cibernéticas a redes industriais.

---

## 1. Tipos de Frequência de Avaliação de Risco

Existem quatro tipos principais de frequência de avaliação:

- Avaliações **Ad hoc**
- Avaliações **Recorrentes**
- Avaliações **Pontuais (One-time)**
- Avaliações **Contínuas**

Cada tipo tem um propósito específico e é aplicado de acordo com a maturidade da organização e o contexto operacional.

---

## 2. Avaliações Ad Hoc

As **avaliações ad hoc** são realizadas **quando necessário**, geralmente em resposta a **eventos específicos** que podem introduzir novos riscos ou alterar os existentes.

### Exemplos em TI:
- Lançamento de um novo produto digital ou serviço em nuvem.  
- Mudança significativa em políticas de privacidade (por exemplo, adequação à LGPD).  
- Incidente de segurança, como um ataque de ransomware ou vazamento de dados.

### Exemplos em Automação:
- Instalação de um novo controlador lógico programável (CLP) em uma linha de produção.  
- Interferência eletromagnética inesperada em um sensor crítico.  
- Alteração no fornecedor de energia ou atualização de firmware de um equipamento industrial.

> Assim como um engenheiro realiza uma **análise emergencial** após um pico de corrente elétrica em uma subestação, a equipe de segurança realiza uma avaliação ad hoc após um evento que pode comprometer a integridade dos sistemas.

---

## 3. Avaliações Recorrentes

As **avaliações recorrentes** são realizadas **em intervalos regulares** — mensal, trimestral, semestral ou anual — e fazem parte das rotinas de operação da organização.

### Exemplos em TI:
- Avaliações anuais de conformidade com normas ISO 27001.  
- Testes de invasão (pentests) realizados trimestralmente.  
- Revisão periódica de permissões de acesso em sistemas críticos.

### Exemplos em Automação:
- Inspeções mensais de sistemas de instrumentação e controle.  
- Testes de redundância de rede industrial (Modbus, Profinet, EtherCAT).  
- Revisão semestral da calibração de sensores e atuadores.

> A lógica é similar à **manutenção preventiva** em equipamentos: prevenir falhas ao invés de apenas reagir a elas.

---

## 4. Avaliações Pontuais (One-Time)

As **avaliações pontuais** são executadas **uma única vez**, geralmente relacionadas a um projeto, sistema ou iniciativa específica.

### Características:
- Têm **escopo definido** e **prazo determinado**.  
- São **não recorrentes** — uma vez concluído o projeto, a avaliação é encerrada.

### Exemplos em TI:
- Avaliação de riscos antes da implantação de um novo ERP.  
- Auditoria única de segurança antes de um processo de certificação.  

### Exemplos em Automação:
- Avaliação de riscos durante a construção de uma nova planta fabril.  
- Integração de sistemas SCADA de diferentes fornecedores.

> Enquanto a avaliação ad hoc é **reativa** (resposta a um evento inesperado), a avaliação pontual é **planejada** e vinculada a um **projeto específico**.

---

## 5. Diferença entre Ad Hoc e Pontual

Embora pareçam semelhantes, há uma distinção clara:

| Tipo | Gatilho | Repetição | Exemplo |
|------|----------|------------|----------|
| **Ad Hoc** | Evento inesperado ou circunstancial | Pode se repetir se o evento ocorrer novamente | Avaliação após um incidente de rede |
| **Pontual** | Projeto planejado e com início e fim definidos | Não se repete | Avaliação antes da entrega de uma nova planta industrial |

> Em termos de engenharia, é como comparar um **ajuste emergencial** em uma linha de produção com um **estudo de viabilidade** antes de montar uma nova linha.

---

## 6. Avaliações Contínuas

As **avaliações contínuas** são realizadas **em tempo real**, com monitoramento e análise constante de riscos.  
Essa abordagem é viabilizada por **tecnologias de automação, telemetria e análise de dados**.

### Exemplos em TI:
- Sistemas de detecção e resposta a incidentes (SIEM, XDR) que analisam logs e alertas em tempo real.  
- Ferramentas de monitoramento contínuo de vulnerabilidades.  

### Exemplos em Automação:
- Sistemas SCADA com alarmes inteligentes que detectam variações anômalas de processo.  
- Monitoramento contínuo de vibração em motores com sensores IoT.  
- Supervisão preditiva baseada em IA que identifica falhas antes que causem paradas.

> Essa abordagem é comparável a um **sistema de controle em malha fechada**: há coleta contínua de dados e ajustes automáticos para manter a operação dentro dos limites seguros.

---

## 7. Escolhendo a Frequência Adequada

A escolha da frequência depende de diversos fatores:

- **Criticidade do ativo:** quanto mais importante, mais frequente deve ser a avaliação.  
- **Exposição a ameaças:** ambientes com alto risco cibernético ou físico requerem avaliações contínuas.  
- **Regulamentações:** setores financeiros e industriais críticos possuem exigências específicas.  
- **Cultura de segurança:** organizações maduras tendem a adotar avaliações recorrentes e contínuas.

---

## 8. Comparativo Geral

| Tipo de Avaliação | Gatilho | Frequência | Custo | Automação | Exemplo Prático |
|--------------------|----------|-------------|--------|------------|----------------|
| **Ad Hoc** | Evento inesperado | Sob demanda | Médio | Baixa | Avaliar impacto de ataque DDoS |
| **Recorrente** | Procedimento padrão | Regular | Médio | Média | Pentest trimestral |
| **Pontual** | Projeto específico | Única | Alto | Baixa | Avaliação antes de uma fusão |
| **Contínua** | Monitoramento permanente | Constante | Alto | Alta | SIEM em tempo real |

---

## 9. Conclusão

A **frequência da avaliação de riscos** deve ser ajustada ao contexto da organização e à criticidade de seus ativos.  
Nenhum tipo é universalmente melhor — o equilíbrio entre custo, complexidade e sensibilidade operacional é o que define a melhor abordagem.

Em síntese:

- **Ad Hoc:** reativa e situacional.  
- **Recorrente:** preventiva e cíclica.  
- **Pontual:** específica e planejada.  
- **Contínua:** preditiva e automatizada.

> Em TI, isso garante a segurança da informação.  
> Em automação industrial, garante **a segurança das operações e das pessoas**.

Assim, compreender e aplicar corretamente a frequência das avaliações de risco é um passo essencial para construir uma **gestão de riscos robusta e resiliente**.
