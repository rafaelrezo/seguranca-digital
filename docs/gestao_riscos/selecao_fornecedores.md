# Seleção e Monitoramento de Fornecedores

> **Objetivos de aprendizagem**
> - Montar criterios objetivos para escolher fornecedores com menor risco e melhor aderencia.
> - Identificar conflitos de interesse, requisitos de due diligence e pontos de entrada para contrato.
> - Manter monitoramento continuo para evitar que a postura do fornecedor piore depois da contratacao.
>
> **Tempo estimado:** 24 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/QQrwJDw2iss)

---

## 1. Por que a selecao importa?

Selecionar bem um fornecedor reduz retrabalho, incidentes e perda de controle. Em seguranca, isso significa escolher parceiros que consigam provar maturidade, e nao apenas prometer isso.

> Analogia: escolher fornecedor e parecido com escolher uma chave mestra para um edificio. Se a chave for facil de copiar, o edificio inteiro fica exposto.

---

## 2. Etapas de selecao

1. **Definir requisitos** de negocio, seguranca, privacidade e continuidade.
2. **Conduzir due diligence** com questionarios e evidencias.
3. **Pontuar candidaturas** em uma matriz comparavel.
4. **Executar prova de conceito** ou piloto quando o servico for critico.
5. **Formalizar contrato** com SLA, NDA, direito de auditoria e clausulas de incidente.
6. **Onboarding controlado** com acessos minimos e logs.

| Criterio | O que perguntar | Peso sugerido |
|---|---|---|
| Seguranca | MFA, logs, criptografia, resposta a incidente | Alto |
| Privacidade | Dados tratados, retencao, descarte, subcontratados | Alto |
| Continuidade | RTO, RPO, BCP, DRP | Alto |
| Financeiro | Saude financeira e estabilidade | Medio |
| Operacao | Suporte, escalabilidade, tempo de resposta | Medio |
| Juridico | NDA, SLA, direito de auditoria, responsabilidade | Alto |

---

## 3. Como evitar vieses na escolha

- Declarar conflitos de interesse antes da analise.
- Usar uma matriz com criterios e pesos definidos de antemao.
- Registrar justificativas para a decisao.
- Evitar contratar por conveniencia sem validacao minima.

Se a escolha e baseada apenas em preco, a organizacao pode economizar na compra e pagar caro na resposta ao incidente.

---

## 4. Monitoramento apos a contratacao

Selecionar nao basta. O fornecedor precisa ser monitorado durante todo o ciclo de vida do contrato.

Monitoramento util inclui:

- Revisao periodica de desempenho.
- Verificacao de mudancas relevantes de postura ou controle.
- Reavaliacao anual ou por evento.
- Acompanhamento de incidentes publicos e vulnerabilidades.
- Revisao de subcontratados e de acessos concedidos.

> Dica de prova: "selecionar" e "monitorar" sao fases diferentes. Um fornecedor bom hoje nao e automaticamente um fornecedor bom amanha.

---

## 5. Mini-caso prático

Uma empresa escolhe um fornecedor de SaaS porque ele oferece o menor preco. Depois da contratacao, descobre que o fornecedor nao possui canal formal de notificacao de incidentes e usa contas compartilhadas na administracao.

O que deveria ter acontecido:

- Matriz de avaliacao com peso maior para seguranca do que para preco.
- POC e revisao tecnica.
- Contrato com obrigacao de notificacao, logs e contas individuais.

---

## 6. Perguntas de revisão rápida

1. Por que uma matriz de selecao e melhor do que uma decisao intuitiva?
2. Qual a diferenca entre due diligence e monitoramento continuo?
3. O que deve constar no onboarding de um fornecedor critico?

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
