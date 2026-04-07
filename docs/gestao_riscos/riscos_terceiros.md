# Riscos de Terceiros

> **Objetivos de aprendizagem**
> - Identificar por que fornecedores, parceiros e prestadores ampliam a superficie de ataque.
> - Diferenciar riscos de terceiros, risco de cadeia de suprimentos e risco contratual.
> - Aplicar due diligence, clausulas de contrato e monitoramento continuo como controles de mitigacao.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/QQrwJDw2iss)

---

## 1. O que sao riscos de terceiros?

Risco de terceiros e o conjunto de ameacas e impactos que surgem quando a organizacao depende de entidades externas para operar. Isso inclui fornecedores de software, fabricantes de hardware, integradores, consultorias, MSPs, SaaS e parceiros com acesso a dados ou a redes internas.

O ponto central para Security+ e simples: quando um terceiro recebe acesso, a confianca dele vira parte da sua postura de seguranca. Se esse terceiro falha, o impacto deixa de ser dele e passa a ser seu tambem.

> Analogia: contratar um fornecedor sem verificar seguranca e como entregar a chave de uma sala tecnica a uma equipe de manutencao sem conferir cracha, escopo e horario de acesso.

---

## 2. Onde o risco aparece

| Tipo de terceiro | Exposicao tipica | Risco mais comum |
|---|---|---|
| Fornecedor de software | Atualizacoes, APIs, bibliotecas, suporte remoto | Compromisso da cadeia de software, credenciais vazadas, dependencia insegura |
| Fabricante de hardware | Equipamentos, firmware, componentes | Adulteracao, falha de integridade, origem nao verificavel |
| MSP ou SaaS | Acesso privilegiado a dados e administracao | Excesso de privilegio, vazamento, indisponibilidade |
| Integrador ou consultoria | Acesso temporario a ambientes internos | Credenciais compartilhadas, falta de rastreabilidade |
| Terceiro com subcontratados | Cadeia de fornecedores ampliada | Falta de visibilidade sobre quem realmente trata os dados |

Dica para a prova: se a pergunta envolver "quem mais tem acesso", "quem faz a manutencao", "quem hospeda", ou "quem atualiza", a resposta costuma estar em risco de terceiros.

---

## 3. O que precisa ser verificado

Antes de conceder confianca operacional, vale checar pelo menos estes pontos:

- Politicas de controle de acesso e MFA.
- Como o terceiro protege dados em repouso, em transito e em uso.
- Historico de incidentes, vazamentos e plano de resposta.
- Quem sao os subcontratados e quais acessos eles recebem.
- Como o fornecedor notifica incidentes e em quanto tempo.
- Se existe inventario de ativos, controle de patches e assinatura de atualizacoes.
- Se ha direito de auditoria, retencao, descarte e reversao de acesso no encerramento do contrato.

> Dica de memoracao: "acesso, dado, incidente, subcontratacao e saida" cobrem a maior parte das perguntas praticas.

---

## 4. Controles que reduzem o impacto

Os controles mais uteis nesta area costumam combinar governanca, tecnica e contrato:

- **Due diligence** antes da contratacao.
- **Menor privilegio** para qualquer acesso externo.
- **Segmentacao de rede** para limitar movimento lateral.
- **MFA e SSO** para reduzir risco de credenciais fragilizadas.
- **Monitoramento continuo** de postura, alertas e alteracoes.
- **Clausulas contratuais** com SLA, NDA, notificacao de incidente e direito de auditoria.
- **Plano de offboarding** para revogar acessos e recuperar ativos.

> Pense no terceiro como um visitante com chave temporaria: se ele sai da sala, a chave deixa de valer.

---

## 5. Mini-caso prático

Uma instituicao contrata um MSP para administrar backups e suporte remoto. O fornecedor recebe acesso privilegiado ao ambiente e usa contas compartilhadas entre tecnicos.

Problemas provaveis:

- Falta de rastreabilidade individual.
- Acesso excessivo fora da necessidade.
- Dificuldade de revogar acesso de um tecnico especifico.

Resposta adequada:

- Contas nominativas com MFA.
- Escopo minimo de permissao.
- Registro de sessao e logs de administracao.
- Clausula contratual com notificacao imediata de incidente e direito de auditoria.

---

## 6. Perguntas de revisão rápida

1. Qual a diferenca pratica entre risco de terceiro e risco de cadeia de suprimentos?
2. Por que contas compartilhadas aumentam o risco operacional?
3. Que controles devem existir no contrato para reduzir exposicao?

---

## 7. Fontes de referência

- NIST SP 800-161 Rev. 1, *Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations*  
  https://csrc.nist.gov/pubs/sp/800/161/r1/final
- CISA, *Procuring Safe and Secure ICT Products and Services Fact Sheet*  
  https://www.cisa.gov/resources-tools/resources/procuring-safe-and-secure-ict-products-and-services-fact-sheet
- CISA, *Vendor SCRM Template*  
  https://www.cisa.gov/resources-tools/resources/vendor-scrm-template
- NIC.br / Cidadão na Rede, *Nas compras on-line verifique o vendedor*  
  https://cidadaonarede.nic.br/pt/videos/seguranca/nas-compras-online-verifique-o-vendedor
