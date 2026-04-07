# Procedimentos de Governança

> **Objetivos de aprendizagem**
> - Entender como procedimentos operacionalizam políticas e padrões.
> - Identificar procedimentos críticos em onboarding, offboarding, mudanças e incidentes.
> - Relacionar procedimento, repetibilidade e evidência de auditoria.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/P4nNJk76xFo)

## 1. O que é um procedimento

Procedimento é o passo a passo documentado para executar uma atividade de forma consistente.

Se a política define a obrigação e o padrão define o requisito mínimo, o procedimento define:

- quem faz;
- em que ordem;
- com qual evidência;
- com qual critério de sucesso.

Sem procedimento, a organização depende de memória, improviso e boa vontade.

---

## 2. Procedimentos que mais impactam segurança

### 2.1 Onboarding e offboarding

- criação e revisão de acesso;
- entrega e devolução de ativos;
- assinatura de termos e ciência de políticas;
- revogação imediata no desligamento.

### 2.2 Gerenciamento de mudanças

- abertura de solicitação;
- análise de impacto;
- aprovação;
- teste;
- execução;
- rollback;
- revisão pós-implementação.

### 2.3 Resposta a incidentes

- triagem;
- escalonamento;
- contenção;
- erradicação;
- recuperação;
- lições aprendidas.

---

## 3. Playbooks e repetibilidade

Playbooks são procedimentos especializados para cenários recorrentes:

- ransomware;
- phishing reportado;
- conta comprometida;
- falha de backup;
- mudança emergencial.

Eles reduzem tempo de resposta e variabilidade entre equipes.

> Analogia: procedimento é como checklist de cabine. Em situação crítica, a equipe não deveria depender de memória para fazer o básico certo.

---

## 4. Como isso aparece na Security+

A prova costuma associar procedimento a:

- consistência operacional;
- segregação de funções;
- evidência;
- controle de mudanças;
- resposta a incidentes.

Se a questão perguntar "qual documento descreve como executar a tarefa?", o foco tende a ser procedimento ou playbook.

---

## 5. Mini-caso prático

Um colaborador sai da organização numa sexta-feira. O desligamento é comunicado, mas não existe procedimento formal de offboarding.

Resultado:

- conta de VPN continua ativa;
- tokens não são revogados;
- notebook não é recolhido;
- acesso a dados persiste além da necessidade.

Com procedimento formal, a saída deixa de depender de comunicação informal e passa a ser verificável.

---

## 6. Perguntas de revisão rápida

1. O que diferencia procedimento de padrão?
2. Por que playbooks reduzem risco operacional?
3. Qual procedimento tende a falhar mais quando não há checklist formal?

---

## 7. Fontes de referência

- NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide  
  https://csrc.nist.gov/pubs/sp/800/61/r2/final
- CISA Cybersecurity Performance Goals  
  https://www.cisa.gov/cybersecurity-performance-goals
- NIST SP 800-53 Rev. 5  
  https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
