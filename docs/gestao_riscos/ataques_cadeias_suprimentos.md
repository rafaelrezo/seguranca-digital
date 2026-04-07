# Ataques na Cadeia de Suprimentos

> **Objetivos de aprendizagem**
> - Identificar vetores comuns de ataque em cadeia de suprimentos, como updates comprometidos e dependencias maliciosas.
> - Reconhecer por que um alvo protegido pode ser atingido por meio de um fornecedor menos protegido.
> - Selecionar contramedidas de assinatura, inventario, isolamento e monitoramento para reduzir impacto.
>
> **Tempo estimado:** 24 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/0LfsQtv0_6w)

---

## 1. O que e um ataque de cadeia de suprimentos?

E um ataque que compromete um elo confiavel para atingir a vitima final. Em vez de atacar diretamente o alvo, o invasor altera um pacote, uma atualizacao, um firmware, um repositório ou um fornecedor com acesso ao ambiente.

Esse tipo de ataque e perigoso porque explora uma expectativa legitima de confianca. O usuario acredita estar instalando algo correto; o atacante faz o restante.

> Analogia: e como receber uma entrega de um transportador conhecido, mas com a caixa trocada no caminho.

---

## 2. Vetores mais comuns

| Vetor | Como acontece | Defesa principal |
|---|---|---|
| Atualizacao comprometida | O canal de update e adulterado | Assinatura de codigo, validacao de hash, rollout gradual |
| Dependencia maliciosa | Pacote com nome parecido ou mantido por atacante | Allowlist, pinning de versao, revisao de origem |
| Repositorio invadido | O repositório de software e manipulado | MFA, controle de publicacao, segregacao de funcoes |
| Hardware adulterado | Componente recebe firmware ou chip alterado | Cadeia de custodia, compra autorizada, teste de integridade |
| Fornecedor privilegiado | MSP, integrador ou suporte remoto e comprometido | Menor privilegio, contas nominativas, monitoramento de sessao |

O exame costuma cobrar a ideia de que a superficie de ataque aumenta quando a confianca no terceiro e maior que a visibilidade que a organizacao tem sobre ele.

---

## 3. Exemplos didaticos

- **Update infectado:** um agente de gerenciamento recebe uma versao assinada de forma fraca ou sem verificacao adequada e instala codigo malicioso em massa.
- **Package confusion:** um desenvolvedor baixa uma dependencia de nome semelhante ao pacote real e introduz o componente errado no build.
- **Fornecedor remoto comprometido:** um parceiro de suporte usa credenciais roubadas para entrar no ambiente da vitima.

> Dica de prova: quando a pergunta mencionar "software confiavel" que chega "contaminado", pense em supply chain compromise.

---

## 4. Como responder ao risco

- Exigir assinatura e validacao de integridade.
- Usar SBOM para saber o que compoe o software.
- Adotar revisao de dependencias e controle de repositorios.
- Segmentacao de rede e isolamento de ambiente de build.
- MFA e menor privilegio para qualquer acesso de terceiro.
- Monitoramento de saida, logs de instalacao e alertas de comportamento anomalo.
- Plano de recuperacao com rollback e substituicao rapida.

Numa frase: o atacante tenta se esconder no processo; a defesa precisa enxergar o processo inteiro.

---

## 5. Mini-caso prático

Uma empresa publica um novo agente de telemetria. O fornecedor legitimo foi comprometido e distribuiu uma versao alterada. A instalacao automatica espalhou o problema em varias filiais.

O que teria reduzido o impacto:

- Ambiente de homologacao antes da producao.
- Verificacao de assinatura e hash.
- Inventario de onde o agente esta instalado.
- Monitoramento de conexoes externas inesperadas.

---

## 6. Perguntas de revisão rápida

1. Por que um ataque de cadeia de suprimentos pode atingir muitas vitimas ao mesmo tempo?
2. Como assinatura de codigo ajuda na defesa?
3. Qual a diferenca entre pacote malicioso e fornecedor comprometido?

---

## 7. Fontes de referência

- NIST SP 800-161 Rev. 1, *Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations*  
  https://csrc.nist.gov/pubs/sp/800/161/r1/final
- CISA, *Procuring Safe and Secure ICT Products and Services Fact Sheet*  
  https://www.cisa.gov/resources-tools/resources/procuring-safe-and-secure-ict-products-and-services-fact-sheet
- CISA, NSA and partners, *Securing the Software Supply Chain: Recommended Practices for Software Bill of Materials Consumption*  
  https://www.cisa.gov/news-events/alerts/2023/11/09/cisa-nsa-and-partners-release-new-guidance-securing-software-supply-chain
- ENISA, *ENISA Threat Landscape 2024*  
  https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024
- NIC.br / Cidadão na Rede, *Cuidado com Aplicativos Falsos*  
  https://www.youtube.com/watch?v=0LfsQtv0_6w
- NIC.br / Cidadão na Rede, *Mantenha os programas atualizados*  
  https://cidadaonarede.nic.br/pt/videos/seguranca/mantenha-os-programas-atualizados
