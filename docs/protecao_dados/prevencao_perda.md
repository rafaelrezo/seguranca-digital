# Prevenção de Perda de Dados (DLP)

A **Prevenção de Perda de Dados (DLP)** é um conjunto de soluções projetadas para **monitorar e proteger dados em uso, em trânsito e em repouso**.  
Seu objetivo é **detectar e impedir tentativas de roubo ou vazamento de informações**, garantindo a proteção de ativos valiosos como propriedade intelectual, segredos industriais e dados pessoais.

---

## 1. Evolução dos Riscos de Perda de Dados
- **Armazenamento físico**: dados em papel em armários. Roubo dependia de acesso físico.  
- **Laptops**: com a mobilidade, perder um dispositivo significava expor grandes volumes de dados.  
- **Discos externos**: passaram a permitir cópia massiva de informações de forma discreta.  
- **Pendrives**: pequenos, baratos e capazes de carregar milhões de documentos sem chamar atenção.  
- **Serviços em nuvem (ex.: Google Drive, Dropbox)**: permitem transferir terabytes de dados para fora da organização em segundos.  

*Exemplo implícito*: um operador de manutenção poderia, sem querer, salvar relatórios técnicos de máquinas críticas em uma conta pessoal de nuvem, expondo dados estratégicos da planta.

---

## 2. Tipos de Sistemas DLP

### 2.1. Endpoint DLP
- Instalado em **estações de trabalho ou laptops**.  
- Monitora dados **em uso** no dispositivo.  
- Pode bloquear ou alertar transferências não autorizadas.  

*Exemplo implícito*: impedir que relatórios de calibração de sensores sejam copiados para um pendrive pessoal.

---

### 2.2. Network DLP
- Implantado no **perímetro da rede**.  
- Monitora **dados em trânsito**, verificando informações que saem da rede corporativa.  
- Foco em evitar **exfiltração de dados confidenciais**.  

*Exemplo implícito*: detectar se arquivos de configuração de CLPs estão sendo enviados por e-mail sem autorização.

---

### 2.3. Storage DLP
- Instalado em **servidores ou datacenters**.  
- Inspeciona **dados em repouso**, verificando acessos fora do padrão.  
- Usa técnicas como criptografia, marca d’água e monitoramento de horários de acesso.  

*Exemplo implícito*: alertar quando um usuário tenta baixar logs completos de produção às 2h da manhã, fora da política de acesso.

---

### 2.4. Cloud DLP
- Fornecido como **serviço em nuvem (SaaS)**.  
- Protege dados armazenados em plataformas de cloud.  
- Aplica políticas de segurança diretamente nos serviços de armazenamento.  

*Exemplo implícito*: restringir o upload de relatórios técnicos de equipamentos para contas pessoais de armazenamento em nuvem.

---

## 3. Resumo das Funcionalidades
- Monitora dados **em uso, trânsito e repouso**.  
- Atua em **modo de detecção** (apenas alerta) ou **modo de prevenção** (bloqueia tentativas de vazamento).  
- Apoia o trabalho do **administrador de segurança** na aplicação das políticas corporativas.  

---

## 4. Conclusão
A **Prevenção de Perda de Dados** é essencial para proteger os ativos informacionais de uma organização.  
No contexto da **engenharia de controle e automação**, a aplicação de DLP reduz o risco de:  
- Vazamento de projetos de automação (segredos industriais).  
- Cópia indevida de configurações de máquinas ou CLPs.  
- Exposição de informações pessoais de técnicos e operadores.  

Com o uso de **endpoint, network, storage e cloud DLP**, a organização garante maior resiliência contra incidentes internos e externos, preservando tanto a **segurança da informação** quanto a **continuidade operacional**.
