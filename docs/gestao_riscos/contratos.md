# Contratos e Acordos

> **Objetivos de aprendizagem**
> - Diferenciar SLA, MSA, SOW, NDA, MOU e outros acordos comuns em seguranca e terceiros.
> - Identificar clausulas que reduzem risco, como notificacao de incidente, direito de auditoria e retencao.
> - Relacionar contratos a governanca, privacidade e continuidade de negocio.
>
> **Tempo estimado:** 24 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/zVQ8Hl2m5tI)

---

## 1. Por que contratos importam?

Confianca sem documento e fragil. Em seguranca, o contrato transforma expectativa em obrigacao verificavel: define responsabilidades, limites, prazos, evidencias e consequencias.

Para Security+, a mensagem e direta: contratos sao controles de governanca. Eles fazem parte da resposta de risco tanto quanto criptografia, backup ou MFA.

---

## 2. Tipos de acordo mais cobrados

| Tipo de acordo | Melhor uso | Esforço | Entregável | Limitação |
|---|---|---|---|---|
| **SLA** | Definir disponibilidade, tempo de resposta e qualidade do servico | Medio | Metricas e penalidades | Nao cobre todo o relacionamento juridico |
| **MSA** | Estabelecer termos gerais para varios projetos | Medio | Regras-base do contrato | Precisa de anexos para cada trabalho |
| **SOW** | Detalhar escopo, marcos e entregas de um projeto | Alto | Escopo operacional | Nao substitui contrato-base |
| **NDA** | Proteger informacoes confidenciais | Baixo | Obrigacao de sigilo | Nao resolve requisitos tecnicos de seguranca |
| **MOU/MOA** | Formalizar parceria ou intencao de cooperacao | Baixo a medio | Intencao ou responsabilidades | Pode ser menos especifico que um contrato completo |
| **DPA/BAA** | Tratar dados pessoais ou dados sensiveis de forma formal | Medio | Regras de tratamento de dados | Exige alinhamento legal especifico |

> Regra pratica: SLA mede servico; NDA protege informacao; SOW descreve trabalho; MSA organiza o relacionamento.

---

## 3. Clausulas que valem ouro

Os contratos de terceiros devem responder, no minimo, estas perguntas:

- Quem pode acessar os dados e com qual finalidade.
- Como os dados sao criptografados, armazenados e descartados.
- Em quanto tempo incidentes devem ser comunicados.
- Se existe direito de auditoria e evidencias periodicas.
- Como sao tratados subcontratados e transferencias internacionais.
- O que acontece no encerramento do contrato e na revogacao de acessos.
- Quais sao os SLAs de disponibilidade, suporte e recuperacao.

Se a clausula nao permitir medir, auditar ou revogar, ela esta fraca demais para um ambiente com risco real.

---

## 4. Contratos como controle de saida

Um bom contrato tambem precisa prever o fim da relacao:

- devolucao ou destruicao de dados;
- revogacao de credenciais e chaves;
- confirmacao de exclusao em sistemas e backups quando aplicavel;
- apoio na transicao para outro fornecedor;
- retencao de logs para auditoria e forense.

> Analogia: o contrato e a planta eletrica do relacionamento. Sem ele, desligar com seguranca fica muito mais dificil.

---

## 5. Mini-caso prático

Uma empresa contrata um SaaS para armazenar dados de clientes. O contrato possui SLA de uptime, mas nao traz prazo de notificacao de incidente nem clausula de auditoria.

Risco residual:

- Demora para resposta em vazamento.
- Falta de visibilidade sobre controles reais.
- Dificuldade de responsabilizacao.

O que deveria constar:

- Prazo maximo de notificacao.
- Direito de auditoria.
- Regras de subcontratacao.
- Requisitos de criptografia e descarte.

---

## 6. Perguntas de revisão rápida

1. Qual a diferenca entre SLA e SOW?
2. Por que um NDA sozinho nao basta para proteger dados?
3. Quais clausulas reduzem mais o risco de um terceiro?

---

## 7. Fontes de referência

- CISA, *Procuring Safe and Secure ICT Products and Services Fact Sheet*  
  https://www.cisa.gov/resources-tools/resources/procuring-safe-and-secure-ict-products-and-services-fact-sheet
- CISA, *Vendor SCRM Template*  
  https://www.cisa.gov/resources-tools/resources/vendor-scrm-template
- NIST SP 800-161 Rev. 1, *Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations*  
  https://csrc.nist.gov/pubs/sp/800/161/r1/final
- NIST SP 800-218, *Secure Software Development Framework (SSDF)*  
  https://csrc.nist.gov/pubs/sp/800/218/final
- NIC.br / Cidadão na Rede, *Garantias de segurança para cumprimento da LGPD*  
  https://www.youtube.com/watch?v=zVQ8Hl2m5tI
