# Riscos na Cadeia de Suprimentos

> **Objetivos de aprendizagem**
> - Explicar como hardware, firmware, software e servicos podem entrar comprometidos na cadeia de suprimentos.
> - Reconhecer sinais de maturidade como SBOM, assinatura de codigo e rastreabilidade de origem.
> - Aplicar controles de aquisicao segura, inventario e validacao continua para reduzir risco.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/0LfsQtv0_6w)

---

## 1. O que e a cadeia de suprimentos digital?

A cadeia de suprimentos digital inclui tudo o que chega ate a organizacao por meio de terceiros: dispositivos fisicos, firmware, bibliotecas, imagens de container, atualizacoes, servicos em nuvem e componentes open source.

Se a organizacao nao conhece a procedencia do que instala, ela nao conhece a confiabilidade do que defende.

> Analogia: comprar um equipamento "novo" sem verificar a procedencia e como receber uma caixa lacrada sem saber se o lacre foi trocado no caminho.

---

## 2. Principais superficies de risco

| Camada | Exemplo de risco | Impacto prático |
|---|---|---|
| Hardware | Componente falsificado ou alterado | Backdoor, falha intermitente, perda de confianca no equipamento |
| Firmware | Atualizacao adulterada no dispositivo | Persistencia maliciosa antes da camada de sistema operacional |
| Software | Biblioteca contaminada ou pacote malicioso | Execucao de codigo indevido durante instalacao ou atualizacao |
| Servicos | SaaS, MSP ou integrador comprometido | Acesso indevido a dados e configuracoes internas |
| Open source | Dependencia sem manutencao ou sem assinatura | Introducao de vulnerabilidades ou dependencia abandonada |

Para Security+, saiba associar cadeia de suprimentos a "origem", "integridade", "atualizacao assinada" e "terceiros com acesso privilegiado".

---

## 3. O que indica maturidade na cadeia

Os controles abaixo ajudam a transformar confianca subjetiva em confianca verificavel:

- **Inventario de ativos e dependencias** para saber o que existe.
- **SBOM** para enxergar componentes de software.
- **Assinatura de codigo e de atualizacoes** para validar origem.
- **Controle de integridade** e validacao de hashes.
- **Processo de patch e change management** para reduzir janela de exposicao.
- **Rastreabilidade de fornecedores** e subfornecedores.
- **Plano de resposta** para revogar, isolar e substituir rapidamente.

> A regra pratica e: se voce nao consegue listar o que usa, tambem nao consegue proteger o que usa.

---

## 4. Como reduzir o risco

- Comprar de fontes autorizadas e verificaveis.
- Exigir comprovantes de integridade, assinatura e procedencia.
- Validar atualizacoes antes de expandir para todo o ambiente.
- Manter segmentacao entre ambientes de teste, homologacao e producao.
- Limitar privilegios de instalacao e atualizacao.
- Revisar fornecedores e dependencias periodicamente.

Em ambientes OT/ICS, a cautela precisa ser maior porque um dispositivo comprometido pode afetar disponibilidade e seguranca fisica.

---

## 5. Mini-caso prático

Uma equipe instala uma versao nova de um agente de monitoramento enviada por um fornecedor conhecido. Dias depois, o software abre conexoes externas inesperadas.

Licoes do caso:

- Confiar no nome do fornecedor nao e o mesmo que validar a entrega.
- Atualizacao assinada e ambiente de homologacao reduzem o risco.
- Monitoramento de saida de rede ajuda a detectar o problema cedo.

---

## 6. Perguntas de revisão rápida

1. Qual a diferenca entre risco de fornecedor e risco de cadeia de suprimentos?
2. Por que SBOM ajuda a responder mais rapido a incidentes?
3. Qual o papel de assinatura de codigo e de atualizacao?

---

## 7. Fontes de referência

- NIST SP 800-161 Rev. 1, *Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations*  
  https://csrc.nist.gov/pubs/sp/800/161/r1/final
- CISA, *Procuring Safe and Secure ICT Products and Services Fact Sheet*  
  https://www.cisa.gov/resources-tools/resources/procuring-safe-and-secure-ict-products-and-services-fact-sheet
- CISA, NSA and partners, *Securing the Software Supply Chain: Recommended Practices for Software Bill of Materials Consumption*  
  https://www.cisa.gov/news-events/alerts/2023/11/09/cisa-nsa-and-partners-release-new-guidance-securing-software-supply-chain
- OWASP, *CycloneDX v1.6 Released*  
  https://owasp.org/blog/2024/04/09/CycloneDX-v1.6-Released
- NIC.br / Cidadão na Rede, *Cuidado com Aplicativos Falsos*  
  https://www.youtube.com/watch?v=0LfsQtv0_6w
- NIC.br / Cidadão na Rede, *Mantenha os programas atualizados*  
  https://cidadaonarede.nic.br/pt/videos/seguranca/mantenha-os-programas-atualizados
