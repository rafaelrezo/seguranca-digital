# Tipos de Dados

Na era digital, os **dados são o combustível das organizações**.  
Eles orientam decisões, impulsionam a inovação e oferecem insights valiosos sobre operações.  
Entretanto, **nem todos os dados são iguais**: cada tipo exige níveis distintos de proteção e pode estar sujeito a legislações e normas específicas.

---

## 1. Dados Regulamentados
São informações controladas por **leis, regulamentos ou padrões de mercado**.  
Incluem **PII (Personally Identifiable Information)**, **PHI (Protected Health Information)** e dados de cartão de crédito.

- **PII (Dados Pessoais Identificáveis)**: informações que permitem identificar um indivíduo.  
  *Exemplo*: nome, CPF, endereço.  
  *Contexto industrial*: registros de funcionários que operam máquinas.  

- **PHI (Informações de Saúde Protegidas)**: dados sobre saúde ou histórico médico associados a uma pessoa.  
  *Exemplo*: atestados ocupacionais em empresas de manufatura.  

- **Cartões de pagamento**: exigem conformidade com o **PCI DSS (Payment Card Industry Data Security Standard)**.  
  *Exemplo*: sistemas de pagamento em restaurantes industriais.  

### Regulamentações Relacionadas
- **LGPD (Brasil)** e **GDPR (Europa)** – proteção de dados pessoais.  
- **HIPAA (EUA)** – proteção de informações de saúde.  
- **PCI DSS** – padrões para transações financeiras com cartões.  

---

## 2. Segredos Comerciais
São informações confidenciais que fornecem vantagem competitiva.  
Incluem processos produtivos, listas de clientes, estratégias de mercado ou softwares proprietários.  

*Exemplo implícito*: parâmetros de calibração de equipamentos industriais ou métodos exclusivos de manutenção preventiva.  

---

## 3. Propriedade Intelectual (IP)
Abrange **criações da mente**, como invenções, projetos, obras literárias e marcas.  
Protegida por leis de **patente, direito autoral e marca registrada**.  

*Exemplo implícito*: diagramas de automação de processos, desenvolvidos internamente, registrados como propriedade intelectual da empresa.  

---

## 4. Informações Legais
Relacionadas a contratos, processos judiciais e conformidade regulatória.  
Requerem proteção reforçada para garantir **sigilo e privilégio profissional**.  

*Exemplo implícito*: contratos de fornecimento de sistemas de controle para plantas industriais.  

---

## 5. Informações Financeiras
Dados ligados a transações econômicas da organização.  
Incluem notas fiscais, balanços, registros bancários e impostos.  
São alvos frequentes de cibercriminosos para fraudes ou roubo de identidade.  

*Exemplo implícito*: relatórios de custos de produção e ordens de compra de insumos.  

### Normas e Regulamentações
- **SOX (Sarbanes-Oxley, EUA)** – controles internos e retenção de informações financeiras.  
- **LGPD/GDPR** – proteção de dados pessoais presentes em transações.  
- **PCI DSS** – quando envolve cartões de crédito.  

---

## 6. Dados Legíveis e Não-Legíveis por Humanos
- **Legíveis por Humanos**: entendidos diretamente, como documentos de texto ou planilhas.  
  *Exemplo*: relatórios de inspeção de máquinas.  

- **Não-Legíveis por Humanos**: exigem software ou máquinas para interpretação, como binários ou logs de controladores.  
  *Exemplo*: códigos binários de CLPs ou registros brutos de sensores.  

Ambos podem conter informações críticas e exigem proteção equivalente.  

---

## 7. Conclusão
A correta **classificação dos tipos de dados** permite aplicar medidas de segurança proporcionais, atender legislações e proteger a reputação organizacional.  
Em ambientes de **engenharia de controle e automação**, isso se traduz na proteção de:
- Registros de funcionários (dados pessoais).  
- Configurações de máquinas (segredos comerciais).  
- Projetos de automação (propriedade intelectual).  
- Contratos e auditorias (informações legais).  
- Custos e transações (informações financeiras).  
- Logs e binários de controladores (dados não-humanos).  

