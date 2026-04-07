# Estratégias de Gerenciamento de Riscos

> **Objetivos de aprendizagem**
> - Diferenciar aceitar, evitar, mitigar e transferir risco.
> - Escolher a estrategia correta para cada cenario.
> - Relacionar a decisao com apetite e tolerancia ao risco.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/nnZVWbmVmG0)

---

## 1. O que fazer depois de identificar o risco

Identificar e medir risco nao basta. A organizacao precisa decidir a resposta.

As quatro respostas mais cobradas sao:

- **Aceitar**;
- **Evitar**;
- **Mitigar**;
- **Transferir**.

> Analogia: e como escolher a resposta para uma falha em linha de producao. Voce pode parar o processo, corrigir a causa, colocar um redundante ou contratar um fornecedor para assumir parte da responsabilidade.

---

## 2. Aceitação

Aceitar significa reconhecer o risco e conviver com ele enquanto o custo de reduzir o problema e maior que o dano esperado.

Usos comuns:

- risco baixo;
- controle muito caro;
- impacto toleravel;
- probabilidade pequena.

### Exemplo

Uma area de testes isolada pode aceitar risco residual de indisponibilidade temporaria, porque o custo de blindar totalmente o ambiente e maior que o beneficio.

---

## 3. Evitacao

Evitar significa remover a atividade, a dependencia ou o caminho de ataque.

### Exemplo

- retirar um servico legado exposto;
- desativar uma funcionalidade sem uso;
- recusar um fluxo de dados que nao atende requisitos de seguranca.

Evitar reduz o risco a zero naquele cenario, mas tambem pode reduzir receita, agilidade ou funcionalidade.

---

## 4. Mitigação

Mitigar significa reduzir probabilidade ou impacto com controles.

### Exemplo

- MFA reduz risco de comprometimento de conta;
- segmentacao reduz movimento lateral;
- backup testado reduz impacto de ransomware;
- patching reduz exposicao a falhas conhecidas.

Essa e a estrategia mais comum em Security+, porque combina protecao tecnica com custo administravel.

---

## 5. Transferência

Transferir e mover parte do impacto para outro ator, normalmente por contrato ou seguro.

### Exemplo

- seguro cibernetico;
- clausula contratual de responsabilidade;
- SLA com penalidade por indisponibilidade;
- outsourcing com responsabilidade definida.

Transferencia nao elimina a ameaca. Ela redistribui o impacto financeiro e juridico.

---

## 6. Comparativo rápido

| Estrategia | Melhor uso | Efeito | Limitacao |
|---|---|---|---|
| Aceitar | Risco baixo ou toleravel | Nenhuma reducao direta | Risco continua existindo |
| Evitar | Risco inaceitavel | Remove a atividade | Pode eliminar valor de negocio |
| Mitigar | Risco relevante | Reduz probabilidade ou impacto | Exige investimento continuo |
| Transferir | Exposicao com componente financeiro | Passa o impacto para terceiro | Nao remove o evento em si |

---

## 7. Como decidir

Uma decisao madura considera:

- apetite ao risco;
- tolerancia ao risco;
- impacto financeiro;
- impacto operacional;
- requisitos regulatórios;
- risco residual.

Se o risco residual ainda excede o limite aceitavel, o controle precisa ser revisto.

---

## 8. Mini-caso prático

Uma empresa recebe uma proposta para manter um servidor legado que nao pode ser atualizado.

- Aceitar: manter com controles compensatorios.
- Evitar: desativar o servico.
- Mitigar: isolar, segmentar e monitorar.
- Transferir: contratar fornecedor para operar com SLA e responsabilidade definida.

O time escolhe mitigar e transferir parte da responsabilidade operacional, porque o servico ainda e necessario para o negocio.

---

## 9. Perguntas de revisão rápida

1. Qual estrategia remove completamente a atividade de risco?
2. Quando aceitar risco e uma decisao defensavel?
3. Por que transferir risco nao e o mesmo que eliminar risco?

---

## 10. Fontes de referência

- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
- NIST SP 800-39, Managing Information Security Risk  
  https://csrc.nist.gov/pubs/sp/800/39/final
