# Avaliação de Fornecedores

> **Objetivos de aprendizagem**
> - Explicar o que deve ser avaliado em um fornecedor antes e depois da contratacao.
> - Diferenciar evidencias internas, auditorias independentes e questionarios de risco.
> - Aplicar avaliacao continua para detectar mudancas na postura de seguranca do terceiro.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/QQrwJDw2iss)

---

## 1. O que e uma avaliacao de fornecedores?

A avaliacao de fornecedores e o processo de coletar evidencias para decidir se um terceiro e confiavel o suficiente para receber dados, acesso ou responsabilidade operacional. Ela acontece antes da contratacao e continua ao longo do relacionamento.

Para Security+, o conceito importante nao e so "quem e o fornecedor", mas "o que ele consegue tocar, ver, alterar e recuperar dentro do seu ambiente".

---

## 2. O que precisa ser verificado

As perguntas basicas de uma avaliacao madura costumam cobrir:

- Governanca e politicas de seguranca.
- Protecao de dados e classificacao da informacao.
- Controles de acesso, MFA e segregacao de privilegios.
- Resposta a incidentes, continuidade e backup.
- Uso de subcontratados e controle da cadeia secundaria.
- Evidencias de auditoria, certificacoes e testes.

| Area | Pergunta pratica | Evidencia esperada |
|---|---|---|
| Acesso | Quem acessa o ambiente e por qual motivo? | Lista de contas, MFA, menor privilegio |
| Dados | Como os dados sao armazenados e descartados? | Politica, criptografia, retencao |
| Continuidade | O que acontece se o fornecedor cair? | BCP/DRP, RTO, RPO |
| Incidente | Como o fornecedor responde a um evento? | Plano de resposta, SLA de notificacao |
| Cadeia secundaria | O fornecedor usa outros terceiros? | Lista de subcontratados e controles |

---

## 3. Tipos de evidencia

### 3.1 Questionarios e declaracoes

Questionarios padronizados ajudam a comparar fornecedores. Sao uteis para verificar se existe um minimo de controles, mas nao substituem prova tecnica.

### 3.2 Auditorias internas e externas

Auditorias internas mostram maturidade operacional. Auditorias externas e certificacoes adicionam imparcialidade.

### 3.3 Testes e validacoes tecnicas

Quando aplicavel, vale pedir evidencias de:

- Teste de penetracao recente.
- Revisao de configuracao.
- Relatorio de vulnerabilidades.
- Evidencia de patching e hardening.

> Analogia: ler um contrato sobre um cofre nao e o mesmo que abrir o cofre e verificar se ele realmente trava.

---

## 4. Sinais de alerta

- Respostas vagas ou copiadas em questionarios.
- Recusa em falar sobre subcontratados.
- Falta de plano de resposta ou de notificacao de incidente.
- Credenciais compartilhadas ou acesso sem rastreabilidade.
- Ausencia de inventario, backup ou controle de mudancas.

Se o fornecedor nao consegue explicar como protege dados e acessos, o risco nao e apenas tecnico. Ele e operacional e juridico tambem.

---

## 5. Mini-caso prático

Uma empresa avalia um fornecedor de SaaS que tera acesso a dados de clientes. O fornecedor apresenta uma certificacao, mas nao consegue informar quem sao os subcontratados nem o tempo de notificacao em caso de vazamento.

Resposta correta:

- Exigir clarificacao documental.
- Validar direito de auditoria e notificacao de incidente.
- Confirmar controles de acesso e criptografia.
- Verificar se a certificacao cobre o servico contratado, e nao apenas a empresa de forma generica.

---

## 6. Perguntas de revisão rápida

1. Qual a diferenca entre questionario e auditoria?
2. Por que subcontratados sao relevantes para a avaliacao?
3. O que e mais importante: certificacao ou evidencia tecnica concreta?

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
- NIC.br / Cidadão na Rede, *Nas compras on-line verifique o vendedor*  
  https://cidadaonarede.nic.br/pt/videos/seguranca/nas-compras-online-verifique-o-vendedor
