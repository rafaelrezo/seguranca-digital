# Propriedade de Dados

A **propriedade de dados** define quem é o responsável por garantir a **confidencialidade, integridade, disponibilidade e privacidade** das informações dentro de uma organização.  
Não se trata necessariamente de quem criou o arquivo ou o registro, mas sim de papéis bem estabelecidos que compõem a governança de dados.

---

## 1. Principais Papéis na Propriedade de Dados

### 1.1. Data Owner (Dono do Dado)
- Papel executivo, geralmente associado a líderes de área.  
- Responsável por definir a **classificação**, **rótulo** e **controles de proteção** aplicados aos dados.  
- Exemplo: em uma indústria de automação, o gerente de produção pode ser dono dos dados de telemetria da linha, definindo-os como **críticos** para segurança operacional.

### 1.2. Data Controller (Controlador de Dados)
- Entidade ou pessoa responsável por decidir **como os dados serão coletados, armazenados e utilizados**.  
- É quem responde legalmente por violações de privacidade e conformidade.  
- Exemplo: em um projeto de integração de sistemas SCADA com ERP, o controlador decide finalidades de uso e garante a legalidade do processamento.

### 1.3. Data Processor (Processador de Dados)
- Executa tarefas de coleta, análise ou armazenamento sob instruções do controlador.  
- Não toma decisões sobre finalidade, apenas aplica as regras.  
- Exemplo: empresa terceirizada que armazena registros de sensores industriais em nuvem.

### 1.4. Data Steward (Administrador de Dados)
- Responsável pela **qualidade** e **consistência** dos dados.  
- Garante que rótulos e classificações sejam aplicados corretamente.  
- Exemplo: validar que todos os relatórios de eficiência energética estão devidamente classificados como “dados regulatórios”.

### 1.5. Data Custodian (Custodiante de Dados)
- Geralmente a equipe de TI.  
- Responsável por sistemas, backups, criptografia e controles de acesso.  
- Exemplo: administrador de banco de dados que garante redundância e segurança de registros de manutenção preditiva.

### 1.6. Data Privacy Officer (Encarregado de Privacidade)
- Garante conformidade com legislações de proteção de dados.  
- Responsável por PII (informações pessoais identificáveis), SPI (informações sensíveis) e PHI (dados de saúde).  
- Exemplo: zelar pela conformidade da empresa industrial com a **LGPD**, quando coleta dados pessoais de operadores e visitantes.

---

## 2. Quem Deve Ser o Data Owner?
- Não deve ser a equipe de TI, pois conhece os sistemas, mas não o **contexto do dado**.  
- O Data Owner deve estar no **lado do negócio**, ou seja, nas áreas que produzem ou usam a informação.  
- Exemplos:  
  - Em uma empresa de software → líder de desenvolvimento.  
  - Em uma indústria de manufatura → gerente de qualidade ou de produção.  
  - Em uma empresa de auditoria → CFO ou líder financeiro.  

---

## 3. Ciclo de Responsabilidade
- **Data Owner** define políticas e classificação.  
- **Data Steward** garante conformidade.  
- **Data Custodian** aplica controles técnicos.  
- **Data Privacy Officer** assegura aderência às leis.  

---

## 4. Papel do Data Owner nas Legislações

### 4.1. Brasil
- **LGPD (Lei 13.709/2018)**:  
  - Define papéis equivalentes a **controlador** e **operador** (análogos a Data Controller e Data Processor).  
  - O **Data Owner** se aproxima do papel de controlador, pois decide finalidade e tratamento.  
  - Exemplo industrial: controlador decide por quanto tempo manter dados pessoais de trabalhadores em registros de segurança.

### 4.2. União Europeia
- **GDPR (Regulamento Geral de Proteção de Dados)**:  
  - Define claramente **Data Controller** e **Data Processor**.  
  - O **Data Owner** é associado ao **Controller**, pois tem responsabilidade legal primária sobre dados.  

### 4.3. Estados Unidos
- **HIPAA (saúde)**: Owner e Controller se aproximam de “Covered Entity”.  
- **SOX (Sarbanes-Oxley)**: exige clareza sobre propriedade e retenção de dados financeiros.  

---

## 5. Normas e Padrões Relacionados

- **ISO/IEC 27001**:  
  - Estabelece papéis de responsabilidade pela segurança da informação.  
  - O Data Owner é quem define a criticidade e controles de ativos de informação.  

- **NIST Privacy Framework (EUA)**:  
  - Propõe divisão clara de papéis semelhantes a **owner**, **controller** e **custodian**.  

- **ISA/IEC 62443 (Indústria e Automação)**:  
  - Define papéis de responsabilidade na proteção de ativos industriais.  
  - O Data Owner é correlacionado ao **responsável pelos ativos de automação**, garantindo que informações de sistemas industriais sejam protegidas conforme risco.  

