# Proteção de Dados

A proteção de dados é um pilar essencial da segurança da informação.  
Seu objetivo é salvaguardar informações importantes contra corrupção, comprometimento ou perda, garantindo **confidencialidade, integridade e disponibilidade**.  
No contexto atual, altamente digitalizado, sua importância se torna central para indivíduos, empresas e governos.

---

## 1. Objetivos de Aprendizagem (Domínios)
- **1.4**: Explicar a importância do uso de soluções criptográficas adequadas.  
- **3.3**: Comparar e contrastar conceitos e estratégias para proteção de dados.  
- **4.2**: Explicar as implicações de segurança no gerenciamento de hardware, software e ativos de dados.  
- **4.4**: Explicar conceitos e ferramentas de alerta e monitoramento de segurança.  
- **5.1**: Resumir elementos de uma governança de segurança eficaz.  

---

## 2. Classificação de Dados
A classificação define como os dados devem ser tratados e protegidos:
- **Sensíveis** – registros de sensores críticos.  
- **Confidenciais** – manuais internos de operação.  
- **Públicos** – relatórios de divulgação ao mercado.  
- **Restritos** – procedimentos internos de manutenção.  
- **Privados** – informações pessoais de funcionários.  
- **Críticos** – parâmetros de controle em tempo real.  

---

## 3. Papéis e Responsabilidades
Para garantir a proteção ao longo do ciclo de vida da informação, existem diferentes funções:
- **Dono do Dado (Data Owner)** – define requisitos e classificação.  
- **Controlador (Data Controller)** – decide como os dados são processados.  
- **Processador (Data Processor)** – executa o processamento.  
- **Custodiante (Data Custodian)** – cuida do armazenamento seguro.  
- **Administrador/Steward** – garante conformidade com políticas.  

*Exemplo implícito*: Um engenheiro de produção pode ser dono dos registros de eficiência das linhas, enquanto o time de TI atua como custodiante.

---

## 4. Estados dos Dados
- **Em Repouso (At Rest)** – armazenados em bancos de dados industriais.  
- **Em Trânsito (In Transit)** – transmissão de medições entre sensores e supervisórios.  
- **Em Uso (In Use)** – processamento por algoritmos de controle em tempo real.  

**Técnicas de proteção**: criptografia de disco, tunelamento de comunicação (VPN, TLS) e segmentação de rede.

---

## 5. Tipos de Dados
- **Regulados** – relatórios ambientais exigidos por lei.  
- **Segredos Comerciais** – parâmetros de calibração exclusivos.  
- **Propriedade Intelectual** – diagramas de automação.  
- **Informações Legais e Financeiras** – contratos com fornecedores.  
- **Dados Humanos e Não-humanos** – relatórios manuais vs. telemetria de máquinas.  

---

## 6. Soberania de Dados
Informações devem obedecer às leis do país onde são coletadas.  
No setor industrial, isso pode significar que dados de telemetria de fábricas devem permanecer em servidores locais para cumprir requisitos legais.

---

## 7. Métodos de Proteção de Dados
- Restrições geográficas  
- Criptografia e hashing  
- Mascaramento e tokenização  
- Ofuscação e segmentação  
- Restrições de permissão  

*Nota industrial*: a separação entre redes de TI (escritório) e redes de OT (chão de fábrica) reduz riscos de exposição.

---

## 8. Prevenção de Perda de Dados (DLP)
Estratégia para evitar que informações sensíveis saiam da organização, intencional ou não intencionalmente.  
Exemplo: bloqueio da cópia de arquivos de configuração de CLPs ou relatórios de segurança para dispositivos externos.

---

## 9. Governança de Segurança
A governança eficaz envolve:
- Definição de políticas  
- Monitoramento contínuo  
- Auditorias periódicas  
- Revisão de processos  

*Aplicação*: auditorias de logs de sistemas de manutenção para rastrear acesso e garantir conformidade regulatória.

---


