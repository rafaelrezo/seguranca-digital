# Accounting (Contabilização)
## 1. O que é Accounting?
No contexto da segurança da informação, **accounting** é o processo de **monitorar, registrar e armazenar todas as ações realizadas** por usuários ou sistemas durante interações digitais.

**Exemplo simples:**  
Assim como um extrato bancário detalhado fornece cada transação, data, hora e valor, o accounting registra todos os eventos dentro de um sistema, permitindo verificar e rastrear atividades.

---

## 2. Por que o Accounting é Importante?

### 2.1 Trilha de Auditoria (Audit Trail)
Mantém um registro cronológico de todas as ações, permitindo rastrear mudanças, identificar acessos não autorizados e detectar comportamentos anômalos.

### 2.2 Conformidade Regulatória
Ajuda a cumprir leis e normas de proteção de dados, como **LGPD**, **GDPR** e **HIPAA**, mantendo registros completos das atividades.

### 2.3 Análise Forense
Em caso de incidentes de segurança, fornece informações detalhadas para descobrir como e por que o ataque ocorreu e prevenir reincidências.

### 2.4 Otimização de Recursos
Permite identificar o uso de recursos (ex.: largura de banda, armazenamento) e otimizar sua alocação, reduzindo custos.

### 2.5 Responsabilidade do Usuário
Com o registro das ações, os usuários sabem que são monitorados, o que ajuda a prevenir abusos e incentivar o cumprimento das políticas internas.

---

## 3. Ferramentas Utilizadas

O accounting depende de **tecnologias de monitoramento e registro** que coletam, centralizam e analisam eventos.  
Essas ferramentas podem ser utilizadas de forma isolada ou integradas em um ecossistema de segurança.

### 3.1 Servidores Syslog
- **Função:** Centralizam logs vindos de dispositivos e sistemas diferentes (firewalls, roteadores, servidores, aplicações).
- **Exemplos de uso:**  
  - Coletar logs de segurança de um **firewall corporativo** e integrá-los a um sistema de análise.  
  - Registrar eventos de login e logout de servidores Linux.  
- **Soluções de mercado:**  
  - **Syslog-ng**, **Rsyslog**, **Graylog**.

### 3.2 Analisadores de Rede
- **Função:** Capturam e inspecionam tráfego de rede em tempo real para identificar padrões ou atividades suspeitas.
- **Exemplos de uso:**  
  - Investigar um pico de tráfego para detectar possível ataque **DDoS**.  
  - Analisar comunicação entre hosts para identificar transferência não autorizada de dados.
- **Soluções de mercado:**  
  - **Wireshark** (análise profunda de pacotes).  
  - **tcpdump** (captura de pacotes em linha de comando).  
  - **SolarWinds Network Performance Monitor**.

### 3.3 SIEM (Security Information and Event Management)
- **Função:** Integram e correlacionam registros de diferentes fontes, aplicam regras de detecção e geram alertas de segurança em tempo real.
- **Exemplos de uso:**  
  - Detectar tentativas de login suspeitas combinando eventos de firewall e servidor de autenticação.  
  - Cumprir requisitos de auditoria, gerando relatórios consolidados para reguladores.  
- **Soluções de mercado:**  
  - **Splunk Enterprise Security**.  
  - **IBM QRadar**.  
  - **Elastic Security** (baseado no Elastic Stack).  
  - **Microsoft Sentinel** (nativo em nuvem).  
  - **Wazuh** (open-source).

### 3.4 Plataformas de Auditoria e Observabilidade de Aplicações
- **Função:** Monitoram logs e métricas de aplicações, ajudando no diagnóstico de falhas e rastreamento de ações do usuário.
- **Exemplos de uso:**  
  - Rastrear a sequência de cliques de um usuário antes de um erro crítico.  
  - Registrar mudanças em configurações feitas via painel de administração.
- **Soluções de mercado:**  
  - **Datadog**.  
  - **New Relic**.  
  - **Dynatrace**.

### 3.5 Ferramentas de Gestão de Logs Centralizados
- **Função:** Armazenam e processam grandes volumes de logs, permitindo pesquisa e análise eficiente.
- **Exemplos de uso:**  
  - Investigar logs de múltiplos sistemas em um único dashboard.  
  - Identificar tendências de uso e anomalias ao longo do tempo.
- **Soluções de mercado:**  
  - **Elastic Stack (ELK: Elasticsearch, Logstash, Kibana)**.  
  - **Fluentd**.  
  - **Loki/Grafana**.

---

## 4. Ponto-Chave
Accounting é essencial para:
- **Transparência**
- **Rastreabilidade**
- **Confiabilidade** dos sistemas

Ele é o **histórico oficial** de todas as ações realizadas, funcionando como um extrato bancário para a segurança digital.  
Ferramentas modernas permitem integrar logs de diferentes fontes, correlacionar eventos e responder a incidentes com agilidade.
