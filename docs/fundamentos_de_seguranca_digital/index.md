# Conceitos Básicos

Esta página é um **mapa de estudo** para Fundamentos de Segurança Digital.  
Use-a para entender a ordem recomendada, os objetivos de aprendizagem e os materiais de apoio.

## Objetivos de aprendizagem

Ao final desta trilha, o aluno deve ser capaz de:

- Diferenciar ameaça, vulnerabilidade, risco e controle.
- Explicar e aplicar os pilares **CIA** e o modelo **AAA**.
- Classificar controles de segurança por categoria e tipo.
- Entender os princípios de **Zero Trust** e sua aplicação prática.

**Tempo estimado da trilha:** 2h30 a 3h30 (sem exercícios).  
**Pré-requisito:** noções básicas de redes e sistemas operacionais.

## Vídeo de abertura

![type:video](https://www.youtube.com/embed/AWykXE3XbaY)

---

## Ordem sugerida de estudo

| Etapa | Tópico | Objetivo principal |
|---|---|---|
| 1 | [Ameaças e Vulnerabilidades](B-ameacas_vulnerabilidades.md) | Entender origem do risco |
| 2 | [Confidencialidade](C-confidencialidade.md) | Proteger acesso ao dado |
| 3 | [Integridade](D-integridade.md) | Garantir que o dado não foi adulterado |
| 4 | [Disponibilidade](E-disponibilidade.md) | Manter serviços acessíveis |
| 5 | [Não Repúdio](F-nao-repudio.md) | Garantir autoria de ações |
| 6 | [Autenticação](G-autenticacao.md) | Verificar identidade |
| 7 | [Autorização](H-autorizacao.md) | Definir permissões |
| 8 | [Accounting](I-accounting.md) | Rastrear eventos e evidências |
| 9 | [Controles de Segurança](J-Controles_seguranca.md) | Montar defesa em camadas |
| 10 | [Zero Trust](K-zerotrust.md) | Aplicar verificação contínua |
| 11 | [Análise de Gaps](L-analise-lacunas.md) | Planejar melhorias |

---

## Resumo rápido dos conceitos

### 1. Segurança vs. Usabilidade

- **Mais segurança** normalmente reduz conveniência.
- **Mais conveniência** normalmente aumenta exposição.
- O papel do profissional é buscar equilíbrio para evitar burla de controles.

### 2. Segurança da informação vs. segurança de sistemas

- **Segurança da informação:** protege o dado (o que proteger).
- **Segurança de sistemas:** protege infraestrutura e aplicações (onde proteger).

### 3. Tríade CIA

- **Confidencialidade:** apenas autorizados acessam.
- **Integridade:** dado permanece correto e íntegro.
- **Disponibilidade:** dado/serviço acessível quando necessário.

### 4. AAA

- **Autenticação:** quem é você.
- **Autorização:** o que você pode fazer.
- **Accounting:** o que foi feito e quando.

### 5. Zero Trust

Princípio operacional: **nunca confiar por padrão; sempre verificar** identidade, contexto e risco antes de liberar acesso.

---

## Perguntas de revisão rápida

1. Qual a diferença entre ameaça e vulnerabilidade?
2. Dê um exemplo de quebra de confidencialidade.
3. Por que autenticação e autorização não são a mesma coisa?
4. Em qual situação um controle compensatório é útil?
5. Por que Zero Trust não é apenas "comprar uma ferramenta"?

---

## Checklist de saída

- [ ] Sei explicar CIA e AAA sem consultar material.
- [ ] Sei classificar um controle como técnico, gerencial, operacional ou físico.
- [ ] Sei diferenciar controle preventivo, detectivo e corretivo.
- [ ] Sei descrever o princípio de menor privilégio em Zero Trust.
- [ ] Completei o quiz em [Exercícios (Google Forms)](M-exercicios_google_forms.md).
