# Impersonificação (Impersonation) em Engenharia Social

## 1. Introdução
- A **impersonificação** é uma técnica de engenharia social em que o atacante **assume a identidade de outra pessoa ou entidade** para obter acesso não autorizado ou roubar dados sensíveis.  
- Existem **quatro formas principais** de ataques de impersonificação:  
  1. Impersonificação direta (pessoa)  
  2. Impersonificação de marca (brand impersonation)  
  3. Typosquatting (domínios falsos com erros de digitação)  
  4. Watering Hole (armadilha em sites legítimos)  

---

## 2. Impersonificação Direta
- O atacante finge ser **alguém confiável ou de autoridade**.  
- Estratégias:
  - Personificar colegas de trabalho (“sou do TI do 3º andar”).  
  - Fingir ser cliente importante ou chefe para pressionar funcionários.  
- **Exemplo**: um invasor liga para um colaborador fingindo ser do suporte interno e pede acesso remoto para “resolver um problema”.  
- **Impactos**:
  - Acesso indevido a dados sensíveis.  
  - Interrupção de serviços.  
  - Possível **tomada de controle total do sistema**.  
- **Defesa**: Treinamento regular em conscientização de segurança e validação de identidade antes de atender solicitações.  

---

## 3. Impersonificação de Marca
- Atacante finge ser uma **empresa legítima** (banco, fabricante, e-commerce).  
- Técnicas:
  - Phishing com e-mails usando logotipo, identidade visual e linguagem da marca.  
  - Perfis falsos em redes sociais.  
- **Exemplo real**:  
  - Em 2020, uma conta falsa no Twitter se passou pela farmacêutica Eli Lilly e anunciou que “a insulina seria gratuita”.  
  - O tweet viralizou e fez as ações da empresa caírem 4% em 24h, resultando em **bilhões de dólares em perdas** de valor de mercado.  
- **Defesa**:
  - Gateways de e-mail com filtros de phishing.  
  - Monitoramento ativo da presença digital da marca.  
  - Alertar usuários sobre golpes recorrentes.  

---

## 4. Typosquatting (Domínios Parecidos)
- Também chamado de **URL hijacking ou cybersquatting**.  
- O atacante registra domínios com erros de digitação comuns ou variações visuais.  
- Objetivo: levar vítimas a sites fraudulentos para roubo de credenciais ou instalação de malware.  
- **Exemplos**:
  - `gnail.com` no lugar de `gmail.com`.  
  - `Di0ntraining.com` (com número 0 no lugar da letra O).  
  - Subdomínios falsos usando provedores confiáveis, ex.: `empresa.azure.com`.  
- **Defesa**:
  - Registrar variações comuns do domínio da organização.  
  - Monitorar registros suspeitos de domínios semelhantes.  
  - Treinar usuários a sempre verificar a URL com atenção.  
- **Caso real**: empresas como **Accolade** registram domínios com erros comuns (ex.: `acclade.com`) e redirecionam para o site oficial, evitando que atacantes usem essas variações.  

---

## 5. Watering Hole Attacks
- O atacante **compromete um site legítimo** frequentado pelo alvo.  
- Objetivo: instalar malware ou explorar vulnerabilidades quando a vítima acessa o site.  
- Características:
  - **Ataque passivo**: o invasor não aborda diretamente a vítima.  
  - Usa a confiança no site como vetor de ataque.  
- **Metáfora**:  
  - Tal como predadores na savana esperam animais no bebedouro (“watering hole”), o invasor espera que as vítimas acessem um site confiável para atacá-las.  
- **Defesa**:
  - Manter sistemas atualizados.  
  - Usar inteligência de ameaças (Threat Intelligence) para detectar compromissos em sites parceiros.  
  - Implementar ferramentas avançadas de detecção de malware.  

---

## 6. Resumo
- **Impersonificação direta**: fingir ser uma pessoa confiável ou de autoridade.  
- **Impersonificação de marca**: usar identidade visual de empresas para enganar.  
- **Typosquatting**: criar domínios parecidos para capturar erros de digitação.  
- **Watering Hole**: comprometer sites confiáveis usados pelas vítimas.  

**Defesa principal**:  
- **Educação do usuário** (treinamento contínuo).  
- **Políticas de validação** de identidade.  
- **Monitoramento e resposta proativa** a fraudes digitais.  

---
