# Análise Quantitativa de Riscos

A **análise quantitativa de riscos** é uma abordagem que busca atribuir **valores numéricos e mensuráveis** aos riscos identificados em um projeto, operação ou infraestrutura.  
Enquanto a análise qualitativa fornece uma visão subjetiva e descritiva, a análise quantitativa permite **quantificar financeiramente o impacto** e **calcular o custo esperado das perdas**.

Essa metodologia é amplamente utilizada em **decisões financeiras, de segurança e de disponibilidade**, tanto em **ambientes de TI** quanto em **sistemas de automação industrial**.

---

## 1. Conceito de Análise Quantitativa de Riscos

A análise quantitativa consiste em **atribuir valores concretos** a variáveis como impacto, frequência e exposição ao risco, gerando uma visão **objetiva e comparável** entre diferentes cenários.

Ela permite:
- Estimar **perdas financeiras anuais esperadas**;
- Comparar **custos de mitigação** com **benefícios potenciais**;
- Tomar decisões baseadas em **dados e probabilidades**, e não apenas em percepções.

> Em TI, isso pode significar calcular o prejuízo anual esperado com falhas de servidor.  
> Em automação, pode significar estimar o custo anual médio de paradas não planejadas de uma linha de produção.

---

## 2. Componentes Principais da Análise Quantitativa

A análise quantitativa usa quatro elementos fundamentais:

- **Fator de Exposição (EF - Exposure Factor)**  
- **Expectativa de Perda Única (SLE - Single Loss Expectancy)**  
- **Taxa Anual de Ocorrência (ARO - Annualized Rate of Occurrence)**  
- **Expectativa de Perda Anual (ALE - Annualized Loss Expectancy)**  

Esses indicadores se combinam para traduzir riscos em valores monetários mensuráveis.

---

## 3. Fator de Exposição (EF)

O **fator de exposição (Exposure Factor)** representa **a porcentagem do ativo que seria perdida em um evento de risco**.  
É expresso como uma porcentagem de **0% (sem perda)** a **100% (perda total)**.

**Exemplo em TI:**  
Um datacenter avalia que uma enchente poderia inutilizar 70% de seus equipamentos.  
Logo, **EF = 70\%**.

**Exemplo em Automação:**  
Uma queima de módulo de controle causa perda de metade dos componentes da célula produtiva.  
Logo, **EF = 50\%**.

---

## 4. Expectativa de Perda Única (SLE)

A **SLE (Single Loss Expectancy)** é o **valor financeiro da perda esperada em um único evento**.  
É calculada multiplicando o **valor do ativo** pelo **fator de exposição (EF)**:

$$
SLE = Valor_{ativo} \times EF
$$

**Exemplo 1 – TI**  
Um servidor vale $$\text{R\$ }10{.}000$$ e o $$EF = 50\% = 0{,}5$$:  

$$
SLE = 10{.}000 \times 0{,}5 = \text{R\$ }5{.}000
$$

**Exemplo 2 – Automação**  
Um CLP e seus periféricos custam $$\text{R\$ }40{.}000$$, com $$EF = 25\% = 0{,}25$$ (perda parcial):  

$$
SLE = 40{.}000 \times 0{,}25 = \text{R\$ }10{.}000
$$

---

## 5. Taxa Anual de Ocorrência (ARO)

A **ARO (Annualized Rate of Occurrence)** estima **com que frequência** o evento ocorre por ano:

$$
ARO = \frac{1}{Per\acute{\i}odo_{m\acute{e}dio}\ \text{(em anos)}}
$$

**Exemplo 1 – TI**  
Se um servidor falha uma vez a cada 2 anos:  

$$
ARO = \frac{1}{2} = 0{,}5
$$

**Exemplo 2 – Automação**  
Se uma falha elétrica causa parada a cada 6 meses (**0{,}5 ano**):  

$$
ARO = \frac{1}{0{,}5} = 2
$$

(duas ocorrências por ano)

---

## 6. Expectativa de Perda Anual (ALE)

A **ALE (Annualized Loss Expectancy)** representa **a perda financeira esperada por ano** em função de um risco:

$$
ALE = SLE \times ARO
$$

Essa métrica traduz o impacto de um risco em **valores anuais**, facilitando comparações e decisões de investimento em mitigação.

**Exemplo Completo – TI**  

| Parâmetro | Valor |
|------------|--------|
| Valor do servidor | $$\text{R\$ }10{.}000$$ |
| Fator de Exposição (EF) | 50\% |
| SLE = 10.000 × 0,5 | $$\text{R\$ }5{.}000$$ |
| ARO (1 falha a cada 2 anos) | 0,5 |
| ALE = 5.000 × 0,5 | $$\text{R\$ }2{.}500/ano$$ |

A empresa pode então planejar que, **em média, perde R\$ 2.500 por ano** devido a falhas nesse servidor.

---

## 7. Analisando Opções de Mitigação

Com o valor da **ALE**, é possível avaliar se **vale a pena investir** em uma solução de mitigação.

### Exemplo Prático – TI

Um fornecedor oferece um novo servidor com redundância, reduzindo falhas para **1 a cada 10 anos $$ARO = 0{,}1$$:  

| Parâmetro | Valor |
|------------|--------|
| Novo ALE = 5.000 × 0,1 | $$\text{R\$ }500/ano$$ |
| Redução do risco anual | 2.500 − 500 = $$\text{R\$ }2.000/ano$$ |

Mas se o novo servidor custa $$\text{R\$ }50.000$$ e dura **3 anos**, o custo extra de $$\text{R\$ }40.000$$ não se paga com a economia de $$\text{R\$ }6.000$$ no período.

---

### Exemplo Prático – Automação

Uma linha de montagem perde $$\text{R\$ }15.000$$ sempre que um inversor queima (SLE).  
Com manutenção preventiva trimestral, a frequência de falhas cai de **4 para 1 por ano**:

| Parâmetro | Valor |
|------------|--------|
| ALE sem manutenção (ARO = 4): | 15.000 × 4 = $$\text{R\$ }60.000/ano |
| ALE com manutenção (ARO = 1): | 15.000 × 1 = $$\text{R\$ }15.000/ano$$ |
| Economia anual estimada | $$\text{R\$ }45.000$$ |

Se o custo da manutenção anual for **menor que R\$ 45.000**, a ação é economicamente vantajosa.

---

## 8. Interpretação dos Resultados

| Métrica | Significado | Unidade | Função |
|----------|--------------|----------|--------|
| **EF** | Percentual de perda por evento | % | Mede severidade |
| **SLE** | Perda monetária única | R\$ | Mede impacto isolado |
| **ARO** | Frequência anual do evento | Nº/ano | Mede probabilidade |
| **ALE** | Perda média anual esperada | R$/ano | Mede custo do risco |

Essas métricas permitem:
- Priorizar riscos com **maior custo anual esperado (ALE)**;  
- Avaliar o **retorno financeiro** de controles de mitigação;  
- Justificar investimentos com base em **dados objetivos**.

---

## 9. Aplicação na Prática

Na prática, a análise quantitativa funciona como um **modelo de previsão financeira de perdas**.  
Ela transforma a incerteza de eventos (falhas, ataques, paradas) em **valores previsíveis**, facilitando a tomada de decisão.

> Em TI, ela ajuda a responder: *“Vale a pena pagar por backup em tempo real?”*  
> Em automação, responde: *“Compensa comprar um CLP redundante?”*

---

## 10. Conclusão

A **análise quantitativa de riscos** é uma ferramenta poderosa e objetiva que traduz riscos em **valores financeiros concretos**.  
Ela permite comparar o custo do risco com o custo das soluções, facilitando decisões de investimento em segurança, disponibilidade e manutenção.

Os componentes principais são:

- **EF (Exposure Factor):** proporção do ativo perdida em um evento.  
- **SLE (Single Loss Expectancy):** perda financeira de um único evento.  
- **ARO (Annualized Rate of Occurrence):** frequência anual esperada do evento.  
- **ALE (Annualized Loss Expectancy):** perda anual média esperada.

> Em última análise, a análise quantitativa é como o **painel financeiro da segurança**: mostra, com números, quanto custa cada risco e quanto vale investir para reduzi-lo.
