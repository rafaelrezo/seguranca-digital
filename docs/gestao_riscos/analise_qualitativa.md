# Análise Qualitativa de Riscos

A **análise qualitativa de riscos** é um dos métodos fundamentais utilizados na **gestão de riscos**.  
Seu objetivo é **avaliar e priorizar os riscos** de acordo com sua **probabilidade de ocorrência** e seu **impacto potencial** sobre os objetivos do projeto ou operação.

Essa abordagem é **subjetiva**, baseada na **experiência e julgamento de especialistas**, mas oferece uma forma prática e eficiente de avaliar riscos sem a complexidade matemática da análise quantitativa.

---

## 1. Conceito de Análise Qualitativa de Riscos

A **análise qualitativa de riscos** busca **classificar** os riscos identificados em categorias como **alto**, **médio** ou **baixo**, conforme o potencial de dano que representam.

Essa análise ajuda equipes de projetos, operações industriais e áreas de TI a **priorizarem recursos** e **definirem ações preventivas e corretivas** mais adequadas.

> Em outras palavras, é como fazer um “check-up visual” da saúde de um sistema: sem números precisos, mas suficiente para saber onde está o problema mais urgente.

---

## 2. Componentes-Chave da Análise Qualitativa

A análise qualitativa se baseia em dois fatores principais:

- **Probabilidade (ou Likelihood):** a chance de o risco ocorrer.  
- **Impacto (ou Impact):** as consequências caso o risco aconteça.

Ambos são avaliados de forma **qualitativa**, normalmente em escalas como:

- **Baixo (Low)**
- **Médio (Medium)**
- **Alto (High)**

Essas categorias podem ser expressas em cores (verde, amarelo, vermelho) ou descrições textuais (raro, possível, provável).

---

## 3. Probabilidade (Likelihood)

A **probabilidade** indica o **grau de chance de um evento de risco ocorrer**.  
É estimada com base em **histórico, experiência anterior, estatísticas** ou **julgamento especializado**.

| Categoria | Descrição | Exemplo em TI | Exemplo em Automação |
|------------|------------|----------------|----------------------|
| **Baixa** | Pouco provável de ocorrer | Falha em sistema redundante | Queima de motor recém-substituído |
| **Média** | Pode ocorrer ocasionalmente | Interrupção de rede por atualização | Falha de sensor por desgaste natural |
| **Alta** | Provável ou frequente | Ataques de phishing semanais | Oscilação elétrica em ambiente industrial |

> Assim como engenheiros de manutenção avaliam a probabilidade de falha de um componente com base em horas de uso, analistas de segurança avaliam riscos digitais com base em frequência histórica de incidentes.

---

## 4. Impacto (Impact)

O **impacto** representa o **efeito ou gravidade** das consequências caso o risco se concretize.  
Ele pode afetar **custos, prazos, qualidade, segurança, reputação ou continuidade operacional**.

| Categoria | Descrição | Exemplo em TI | Exemplo em Automação |
|------------|------------|----------------|----------------------|
| **Baixo** | Danos mínimos; sistema continua operando | Erro menor no log do servidor | Pequena oscilação de leitura em sensor |
| **Médio** | Perdas moderadas; afeta desempenho | Lentidão em sistema de banco de dados | Parada parcial de uma célula de produção |
| **Alto** | Impacto crítico; operação interrompida | Queda de serviço em produção | Falha em CLP principal ou linha parada |

> Em um ambiente industrial, “baixo impacto” pode ser a falha de um sensor redundante; “alto impacto” é quando o controlador principal deixa de operar e paralisa toda a planta.

---

## 5. Matriz de Risco Qualitativa

Combinando probabilidade e impacto, é possível visualizar os riscos em uma **matriz de calor** (heat map):

| Impacto ↓ / Probabilidade → | Baixa | Média | Alta |
|------------------------------|--------|--------|------|
| **Baixo** | Baixo | Baixo | Médio |
| **Médio** | Baixo | Médio | Alto |
| **Alto** | Médio | Alto | Crítico |

Essa matriz ajuda gestores a **priorizar esforços**, concentrando mitigação nos riscos classificados como **Altos ou Críticos**.

> É como em um painel SCADA: cores e níveis ajudam a perceber rapidamente onde a operação está sob risco.

---

## 6. Exemplos de Aplicação

### 6.1 Em Projetos de Software
**Risco:** saída de um desenvolvedor-chave durante o projeto.

- **Probabilidade:** Média (devido à rotatividade da área).  
- **Impacto:** Alto (atrasos, retrabalho, perda de conhecimento).  
- **Classificação:** **Alto risco**.  

**Mitigações possíveis:**
- Realizar **cross-training** entre membros da equipe.  
- Manter documentação atualizada.  
- Criar plano de retenção de talentos.

---

### 6.2 Em Projetos de Construção Civil
**Risco:** atraso na entrega de materiais críticos.

- **Probabilidade:** Alta (cadeia de suprimentos instável).  
- **Impacto:** Alto (custos e prazos comprometidos).  
- **Classificação:** **Risco Crítico**.  

**Mitigações possíveis:**
- Trabalhar com **múltiplos fornecedores**.  
- **Antecipar pedidos** e definir contratos com cláusulas de contingência.  
- Manter **estoque mínimo** de materiais essenciais.

---

### 6.3 Em Automação Industrial
**Risco:** falha de comunicação entre CLPs de uma linha de montagem.

- **Probabilidade:** Média (instalação exposta a interferências).  
- **Impacto:** Alto (parada de produção e perda de dados).  
- **Classificação:** **Alto risco**.

**Mitigações possíveis:**
- Implementar **malha de redundância de rede**.  
- Monitorar a **latência e perda de pacotes** com KRIs.  
- Revisar aterramento e blindagem de cabos.

---

## 7. Benefícios da Análise Qualitativa

- **Rápida e acessível:** pode ser aplicada mesmo sem dados numéricos detalhados.  
- **Facilita a comunicação:** apresenta resultados compreensíveis a todos os níveis da organização.  
- **Prioriza ações:** direciona esforços para os riscos mais críticos.  
- **Complementa a análise quantitativa:** serve como primeira triagem antes de cálculos financeiros mais complexos.

> É semelhante à manutenção preditiva visual: mesmo sem sensores precisos, um técnico experiente pode identificar sinais de alerta antes que o problema se agrave.

---

## 8. Limitações

- **Subjetividade:** depende da experiência e percepção dos avaliadores.  
- **Ausência de dados numéricos:** não permite estimar custos exatos de impacto.  
- **Comparabilidade limitada:** os critérios de “alto” ou “baixo” podem variar entre projetos.

Por isso, em projetos complexos, a análise qualitativa é frequentemente **complementada** por uma **análise quantitativa**, que aplica valores e cálculos objetivos aos riscos.

---

## 9. Conclusão

A **análise qualitativa de riscos** é uma ferramenta essencial para qualquer tipo de organização — seja em **TI, engenharia ou automação**.  
Ela oferece uma visão clara das vulnerabilidades, permite **classificar prioridades** e fornece uma base sólida para as próximas etapas da gestão de riscos.

> Em resumo: assim como um engenheiro usa sinais visuais e históricos de falha para prever uma parada, o gestor de riscos usa a análise qualitativa para antecipar incertezas e manter a operação sob controle.
