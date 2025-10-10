# Demonstração: Explorando Certificados Digitais em Sites Brasileiros

Nesta demonstração, vamos analisar os **certificados digitais** de alguns sites conhecidos no Brasil e observar as informações contidas nesses certificados públicos.  
Os exemplos a seguir utilizam conexões HTTPS na **porta 443**, padrão para navegação segura.

---

## 1) Exemplo: Governo Federal (gov.br)

- Ao acessar `https://www.gov.br`, é exibido o ícone de cadeado ao lado do endereço.  
- O certificado digital está **válido** e foi emitido para o domínio `www.gov.br`.  
- **Emissor**: Autoridade Certificadora **SERPRO** (Serviço Federal de Processamento de Dados), amplamente utilizada em órgãos públicos.  
- **Algoritmo de assinatura**: SHA-256.  
- **Chave pública**: RSA com 2.048 bits.  
- **Validade**: contém informações de início e expiração da confiança.  

> Exemplo industrial: em sistemas de controle governamentais (ex.: fiscalização de energia ou saneamento), certificados como os emitidos pela SERPRO podem ser usados para garantir autenticidade das comunicações com portais oficiais.

---


## 2) Outras Informações Relevantes dos Certificados

- **Identificação**: Razão social, localização (cidade/estado) e domínio.  
- **Autoridade emissora (CA)**: entidade confiável responsável pela assinatura.  
- **Período de validade**: início e fim de vigência.  
- **Fingerprint único**: identificação exclusiva do certificado.  
- **Cadeia de confiança**: Root CA → CA intermediária → Certificado do site.  

---

## 3) Observações Didáticas

- Certificados digitais não se restringem a sites de internet.  
- Em **sistemas industriais**, certificados são aplicados para:  
  - **Gateways IoT industriais** que reportam dados de campo.  
  - **Servidores SCADA** que exigem autenticação forte antes de aceitar conexões.  
  - **VPNs corporativas** que interligam unidades fabris com a matriz.  

---

## 4) Conclusão

A análise de certificados em sites como **gov.br** e **Banco do Brasil** ilustra como **diferentes algoritmos e tamanhos de chave** são escolhidos conforme o contexto:  
- RSA (compatibilidade ampla, usado em portais governamentais).  
- ECC (eficiência em dispositivos móveis, adotado por instituições financeiras).  

Em ambientes de **Engenharia de Controle e Automação**, compreender essas diferenças é essencial para projetar **redes industriais seguras**, escolhendo certificados digitais de acordo com os requisitos de desempenho e confiabilidade do processo.
