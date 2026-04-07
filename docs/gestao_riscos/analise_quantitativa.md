# Análise Quantitativa de Riscos

> **Objetivos de aprendizagem**
> - Calcular EF, SLE, ARO e ALE.
> - Comparar o custo do risco com o custo do controle.
> - Interpretar risco em linguagem financeira, como pede a Security+.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/du4ocukIUhQ)

---

## 1. O que é análise quantitativa

A analise quantitativa traduz risco em numeros. Em vez de dizer apenas que algo e "alto", ela estima quanto o evento pode custar por ano ou por incidente.

Essa abordagem ajuda a responder uma pergunta pratica:

> Vale mais a pena investir em controle ou aceitar a perda esperada?

---

## 2. Principais metricas

| Sigla | Nome | O que mede |
|---|---|---|
| EF | Exposure Factor | Percentual do ativo perdido em um evento |
| SLE | Single Loss Expectancy | Perda de um unico evento |
| ARO | Annualized Rate of Occurrence | Frequencia anual esperada |
| ALE | Annualized Loss Expectancy | Perda anual esperada |

---

## 3. Como calcular

### 3.1 EF

O fator de exposicao mostra quanta perda o evento causa.

Exemplo: se um incidente pode destruir metade de um servidor, o EF e 50%.

### 3.2 SLE

Formula:

$$
SLE = Valor_{ativo} \times EF
$$

Exemplo:

- ativo: R$ 20.000
- EF: 25%
- SLE: R$ 5.000

### 3.3 ARO

A ARO indica a frequencia por ano.

Exemplo:

- falha a cada 2 anos = 0,5
- falha 3 vezes por ano = 3

### 3.4 ALE

Formula:

$$
ALE = SLE \times ARO
$$

Exemplo:

- SLE: R$ 5.000
- ARO: 2
- ALE: R$ 10.000 por ano

---

## 4. Como usar na decisao

Se o custo de um controle e menor que a perda anual esperada, a mitigacao tende a ser justificavel.

### Exemplo simples

- ALE atual: R$ 30.000/ano
- novo controle: R$ 12.000/ano
- reducao estimada: ALE cai para R$ 8.000/ano

Nesse caso, o controle pode ser defendido economicamente porque reduz a perda esperada em R$ 22.000/ano.

> Analogia: e como comprar uma protecao para uma maquina que quebra com frequencia. Se o reparo e mais caro do que a protecao ao longo do tempo, a protecao faz sentido.

---

## 5. Cuidados na interpretacao

- Nao use numeros sem base minima.
- Nao confunda perda estimada com faturamento total.
- Nao ignore custos indiretos, como reputacao e retrabalho.
- Revise a estimativa sempre que o ambiente mudar.

Em Security+, o foco nao e memorizar formula por formula, mas entender a logica de custo-beneficio.

---

## 6. Mini-caso prático

Um portal de servicos ao aluno depende de um banco de dados que custa R$ 50.000 em infraestrutura. A equipe estima EF de 20% em um ataque de corrupcao de dados e ARO de 2 por ano.

- SLE = 50.000 x 0,2 = R$ 10.000
- ALE = 10.000 x 2 = R$ 20.000/ano

Se um novo controle de backup e imutabilidade custa R$ 8.000 por ano e reduz a ARO para 0,5, o custo do controle pode ser defendido como investimento racional.

---

## 7. Perguntas de revisão rápida

1. O que EF representa?
2. Qual a diferenca entre SLE e ALE?
3. Como usar ALE para justificar um controle de seguranca?

---

## 8. Fontes de referência

- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-39, Managing Information Security Risk  
  https://csrc.nist.gov/pubs/sp/800/39/final
- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
