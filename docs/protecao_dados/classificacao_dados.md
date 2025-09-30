# Classificação de Dados

A **classificação de dados** é uma prática fundamental da segurança da informação, baseada no valor que a informação tem para a organização e na sensibilidade em caso de divulgação.  
O nível de classificação é definido pelo **dono do dado (Data Owner)**, que deve equilibrar custos e recursos para aplicar os controles adequados.

---

## 1. Importância da Classificação
- **Evitar sobreclassificação**: tratar todos os dados como críticos gera desperdício de tempo, dinheiro e pessoal.  
- **Aplicar controles de forma proporcional**: quanto mais alta a classificação, mais recursos e mecanismos de segurança são aplicados.  

*Exemplo implícito*: em uma planta industrial, registros de calibração temporária de sensores podem ter proteção básica, enquanto parâmetros de segurança de caldeiras devem ter classificação mais elevada.

---

## 2. Esquemas de Classificação

### 2.1. Empresas Comerciais
Classificação usual em ambientes corporativos e industriais:
- **Público** – informações que podem ser divulgadas sem impacto.  
  *Exemplo*: manuais técnicos em sites institucionais.  
- **Sensível** – impacto mínimo em caso de divulgação.  
  *Exemplo*: relatórios financeiros internos ou especificações preliminares de automação.  
- **Privado** – dados pessoais de colaboradores ou clientes.  
  *Exemplo*: folha de pagamento de técnicos de manutenção.  
- **Confidencial** – informações que, se divulgadas, trariam sérios prejuízos.  
  *Exemplo*: algoritmos de controle de processos produtivos.  
- **Crítico** – dados cuja exposição é inaceitável.  
  *Exemplo*: credenciais de acesso a sistemas SCADA.  

---

### 2.2. Governo e Setor Militar
Classificação inspirada em legislações e práticas de segurança nacional:
- **Não Classificado** – divulgação pública permitida (ex.: Lei de Acesso à Informação no Brasil).  
- **Sensível mas Não Classificado** – informações pessoais, como registros médicos de militares.  
- **Confidencial** – dados que, se expostos, afetam seriamente a organização.  
- **Secreto** – informações estratégicas cuja divulgação causaria danos significativos.  
- **Altamente Secreto (Top Secret)** – dados críticos cuja exposição pode gerar danos graves à segurança nacional.  

---

## 3. Ciclo de Vida da Informação
- **Coleta** – definição clara do que é necessário armazenar.  
- **Armazenamento** – uso de meios seguros (criptografia, segmentação de rede).  
- **Retenção** – definição do período de guarda (curto, médio ou longo prazo).  
- **Descarte** – eliminação segura dos dados quando não forem mais necessários.  

*Exemplo implícito*: dados de sensores para auditoria de qualidade podem ser retidos por anos, enquanto logs de testes de linha podem ser descartados em semanas.

---

## 4. Conformidade Legal
A classificação deve estar alinhada às políticas internas e às leis que determinam:
- Como os dados são armazenados.  
- Por quanto tempo devem ser retidos.  
- Quais métodos de descarte devem ser utilizados.  

---

## 5. Principais Legislações Aplicáveis

### 5.1. Nacionais
- **LGPD (Lei Geral de Proteção de Dados – Lei 13.709/2018, Brasil)**  
  Regula o tratamento de dados pessoais em qualquer setor, inclusive industrial.  
- **Lei de Acesso à Informação (Lei 12.527/2011, Brasil)**  
  Garante a publicidade de informações não classificadas da administração pública.  
- **Normas da ANPD (Autoridade Nacional de Proteção de Dados)**  
  Orientações específicas sobre aplicação da LGPD.  

### 5.2. Internacionais
- **GDPR (General Data Protection Regulation – União Europeia)**  
  Regula o tratamento de dados pessoais, com foco em privacidade e consentimento.  
- **HIPAA (Health Insurance Portability and Accountability Act – EUA)**  
  Regula dados de saúde, importante em contextos industriais ligados à saúde ocupacional.  
- **SOX (Sarbanes-Oxley Act – EUA)**  
  Exige controles sobre informações financeiras corporativas.  
- **ISO/IEC 27001**  
  Norma internacional para sistemas de gestão de segurança da informação, aplicável a qualquer setor.  

---
