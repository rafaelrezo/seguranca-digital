# Public Key Infrastructure (PKI) 
Este material organiza os principais conceitos sobre **Infraestrutura de Chave Pública (PKI)**. O foco está em como a PKI garante **confidencialidade, autenticação e integridade** em comunicações digitais, incluindo cenários discretos aplicados a **sistemas industriais**, como SCADA, CLPs e gateways de rede.

---

## 1) O que é PKI?

- **Definição**: conjunto de **hardware, software, políticas, procedimentos e pessoas** que viabilizam o uso de criptografia assimétrica.  
- **Objetivo**: garantir **segurança ponta a ponta** em redes corporativas e industriais.  
- **Exemplo prático**: ao acessar um painel de supervisão via HTTPS, o navegador ou cliente se apoia na PKI para validar o servidor antes de exibir dados de sensores.

---

## 2) Processo de Estabelecimento de Conexão Segura

1. **Navegador/cliente** acessa um servidor (ex.: `https://planta.empresa.com`).  
2. Consulta um **Autoridade Certificadora (CA)** para obter a **chave pública** do servidor.  
3. Cliente gera um **segredo aleatório** (chave simétrica temporária).  
4. Esse segredo é **criptografado com a chave pública** do servidor e enviado.  
5. Apenas o servidor, com sua **chave privada**, consegue decifrar o segredo.  
6. Estabelece-se um **túnel simétrico (TLS/SSL)** para tráfego seguro.

> Exemplo industrial: estação de operação estabelece um túnel TLS com o **servidor SCADA central**, garantindo que leituras de pressão e comandos não sejam interceptados.

---

## 3) Diferença entre Criptografia Assimétrica e PKI

- **Criptografia assimétrica**: apenas o processo matemático de usar chaves públicas e privadas.  
- **PKI**: toda a **infraestrutura** que gera, distribui, valida e revoga certificados, mantendo a confiança entre partes.  

---

## 4) Componentes Essenciais da PKI

### 4.1 Autoridade Certificadora (CA)
- Emite e valida **certificados digitais**.  
- Atua como **terceira parte confiável**.  
- Garante identidade de servidores, usuários e dispositivos.

> Exemplo industrial: uma **CA interna da empresa** emite certificados para todos os **gateways de dados de sensores**, evitando conexões falsas.

### 4.2 Certificados Digitais
- Contêm **chave pública + identidade** do proprietário.  
- Associados a prazos de validade e podem ser **revogados**.  
- Utilizados para autenticar **servidores, usuários e dispositivos**.

### 4.3 Key Escrow (Depósito de Chaves)
- Processo de armazenar chaves em **local seguro controlado**.  
- Permite recuperação em casos de perda, saída de funcionário ou investigações.  
- Risco: se mal protegido, pode abrir acesso indevido a grandes volumes de dados.  

> Exemplo industrial: engenheiro cifra relatórios de calibração com seu certificado pessoal; se ele sair da empresa, a chave no **escrow** garante acesso aos arquivos.

---

## 5) Benefícios do PKI

- **Confidencialidade**: apenas partes autorizadas acessam os dados.  
- **Autenticação**: confirmação da identidade de dispositivos e pessoas.  
- **Integridade**: mensagens não são alteradas em trânsito.  
- **Não repúdio**: impossibilidade de negar autoria de uma comunicação ou assinatura digital.

> Exemplo industrial: assinaturas digitais em **firmwares de CLPs** asseguram que apenas software legítimo do fabricante será instalado.

---

## 6) Desafios e Boas Práticas

- **Proteção do Key Escrow**: exigir controles rígidos de acesso.  
- **Gestão de ciclo de vida dos certificados**: emissão, renovação e revogação.  
- **Segmentação**: uso de PKI em redes industriais isoladas reduz riscos de ataque externo.  
- **Automação**: integração de certificados em **pipelines de CI/CD** garante que apenas aplicações assinadas cheguem à produção.  

---

## 7) Conclusão

A **PKI** é mais do que criptografia: é uma **estrutura completa** que garante **segurança confiável** em ambientes industriais e corporativos.  
Sua adoção em sistemas de **automação e controle** protege dados de sensores, impede adulteração de comandos e garante que apenas softwares e usuários autorizados participem da rede crítica.

---
