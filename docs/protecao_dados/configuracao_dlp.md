# Configuração de Data Loss Prevention (DLP)

Nesta aula, exploramos como **configurar uma solução de Prevenção de Perda de Dados (DLP)** usando o **Google Workspace (Drive, Chat e Gmail)**.  
Mais do que aprender o passo a passo da ferramenta, o foco está em **entender os conceitos** de como o DLP é configurado para evitar vazamento de informações críticas.

No contexto da **engenharia de controle e automação**, essa prática é essencial para proteger desde **relatórios técnicos de manutenção** até **documentação de processos industriais**.

---

## 1. Acesso ao Painel de Administração
- O DLP no Google Workspace só está disponível em contas **pagas (Enterprise ou Educacional)**.  
- O acesso é feito pelo [admin.google.com](https://admin.google.com).  
- O menu de configuração fica em: **Segurança → Acesso e Controle de Dados → Proteção de Dados**.

---

## 2. Configuração Inicial
- O painel exibe estatísticas de arquivos e chats monitorados, identificando dados sensíveis como:
  - **Endereços de e-mail**
  - **Números de telefone**
  - **Identificadores pessoais**

*Exemplo implícito*: um arquivo de configuração de CLP que contém e-mails de engenheiros de suporte pode ser sinalizado como sensível ao ser compartilhado fora da empresa.

---

## 3. Criação de Regras de Proteção
### Etapas principais:
1. **Adicionar uma nova regra** → Definir nome e descrição.  
   - Exemplo: *“Bloquear SSNs”* (equivalente a CPF no Brasil).  
2. **Definir o escopo** → Pode ser para toda a organização ou apenas um grupo (ex.: equipe de manutenção).  
3. **Escolher aplicativos** → Drive, Chat ou ambos.  
   - Inclui análise de texto e imagens (OCR).  
4. **Selecionar condições** → Palavras-chave, expressões regulares ou **dados pré-definidos** (CPF, passaporte, cartões, etc.).  
5. **Definir ações** → Bloquear, alertar ou apenas registrar (log).  
6. **Ativar alertas** → Enviar notificações ao painel de segurança ou à equipe de cibersegurança.

---

## 4. Exemplo Prático
- **Objetivo**: Bloquear o compartilhamento de números de CPF/SSN em arquivos ou mensagens.  
- **Ação configurada**:
  - Bloquear mensagens no **Google Chat** contendo o dado.  
  - Bloquear o **compartilhamento externo no Google Drive**.  
  - Registrar evento como nível **médio** no painel de alertas.  

*Exemplo implícito*: impedir que relatórios de calibração de sensores industriais contendo dados pessoais de operadores sejam enviados por e-mail a terceiros.

---

## 5. Configuração no Gmail
- Local: **Admin → Apps → Google Workspace → Gmail → Compliance**.  
- Criar regra de **Content Compliance** para **bloquear ou colocar em quarentena** mensagens com dados sensíveis (ex.: CPF, número de cartão, dados de saúde).  
- Possibilidade de:  
  - **Quarentenar e notificar** o remetente.  
  - **Rejeitar ou criptografar** mensagens automaticamente.

---

## 6. Testes e Ajustes
- O Google fornece um **modo de demonstração**, onde é possível:
  - Testar padrões de detecção (e-mail, telefone, CPF, cartão, etc.).  
  - Validar se o sistema interpreta corretamente **contexto e formato**.  

*Exemplo implícito*: verificar se o termo *“ID Máquina 123-45-6789”* é tratado como número de série industrial ou confundido com identificador pessoal.

---

## 7. Conclusão
A configuração de DLP no **Google Workspace** (ou em equivalentes como Office 365) permite:  
- **Proteger dados em uso, trânsito e repouso**.  
- **Aplicar regras específicas por departamento**.  
- **Atender legislações nacionais e internacionais** de proteção de dados.  

Na prática industrial, o DLP ajuda a **blindar documentos críticos** (diagramas elétricos, receitas de processos, relatórios de incidentes) contra **vazamentos internos ou externos**.

---
