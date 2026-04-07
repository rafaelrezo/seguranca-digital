# Políticas de Governança

> **Objetivos de aprendizagem**
> - Entender o papel das políticas na definição de obrigações organizacionais.
> - Diferenciar políticas comuns de segurança e continuidade.
> - Aplicar o conceito de política como base para padrões, procedimentos e auditoria.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/P4nNJk76xFo)

## 1. O que é uma política

Política é uma declaração formal de intenção e obrigação. Ela define o que a organização exige, sem descrever cada detalhe operacional.

Uma boa política precisa ser:

- clara;
- aprovada por autoridade competente;
- aplicável ao negócio;
- revisável;
- auditável.

Se a política não puder ser entendida, aplicada ou verificada, ela falha como instrumento de governança.

---

## 2. Políticas mais comuns em segurança

| Política | O que define | Exemplo de decisão |
|---|---|---|
| **Uso aceitável** | limites de uso de recursos corporativos | instalação de software não autorizado |
| **Segurança da informação** | princípios gerais de proteção | classificação e acesso a dados |
| **Continuidade de negócios** | prioridades para manter operação | serviços críticos e RTO/RPO |
| **Resposta a incidentes** | regras de detecção, escalonamento e comunicação | quando acionar CSIRT/SOC |
| **Mudanças** | como alterações relevantes são aprovadas | janela, rollback, evidência |
| **SDLC seguro** | requisitos de segurança no desenvolvimento | revisão de código e testes |

---

## 3. O que uma política não deve fazer

Uma política não deve tentar virar manual técnico. Quando ela detalha demais:

- envelhece rápido;
- perde legibilidade;
- duplica conteúdo de procedimento;
- dificulta auditoria.

O papel da política é dizer "o que precisa existir". O padrão e o procedimento explicam "como".

---

## 4. Como políticas se conectam à Security+

Em `Security+`, políticas aparecem em cenários de:

- exceção a controle;
- revisão de acesso;
- uso de BYOD;
- resposta a incidente;
- retenção e descarte;
- cadeia de aprovação.

Quando a questão traz "qual documento orienta a regra de alto nível?", a resposta normalmente aponta para política.

---

## 5. Mini-caso prático

Uma empresa possui backup diário, mas não tem política formal de retenção, restauração e teste.

Na prática:

- a equipe técnica até faz backup;
- a direção não definiu prioridade de recuperação;
- auditoria não consegue provar consistência.

Quando a política é criada, padrões e procedimentos passam a ter base institucional.

---

## 6. Perguntas de revisão rápida

1. O que diferencia política de padrão?
2. Por que política excessivamente técnica é um problema?
3. Qual política é mais diretamente ligada a RTO e RPO?

---

## 7. Fontes de referência

- NIST Cybersecurity Framework 2.0  
  https://www.nist.gov/cyberframework
- NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide  
  https://csrc.nist.gov/pubs/sp/800/61/r2/final
- NIST SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems  
  https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
