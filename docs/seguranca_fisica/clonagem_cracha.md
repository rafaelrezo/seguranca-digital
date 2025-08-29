# Clonagem de Crachás de Acesso (RFID e NFC)

## 1. Introdução
Os sistemas modernos de controle de acesso utilizam, com frequência, tecnologias de **Identificação por Radiofrequência (RFID)** e **Comunicação por Proximidade (NFC)**.  
Esses crachás ou cartões permitem autenticação sem contato, trazendo praticidade para escritórios, plantas industriais e até sistemas de pagamento.  

Entretanto, esses sistemas apresentam vulnerabilidades.  
Uma das mais graves é a **clonagem de crachás de acesso**, técnica que permite a criação de cópias não autorizadas para burlar controles de segurança física.

---

## 2. O que é a Clonagem de Crachás de Acesso
A clonagem consiste em **copiar os dados de um crachá legítimo** (RFID ou NFC) para outro cartão ou dispositivo.  
O clone passa a se comportar como se fosse o crachá original, permitindo:  
- Acesso a áreas restritas de prédios ou plantas industriais.  
- Autenticação indevida em sistemas corporativos.  
- Fraudes financeiras em sistemas de pagamento baseados em NFC.  

Na prática, o invasor nunca precisa ter posse do crachá original — apenas capturar seus dados.

---

## 3. Etapas de um Ataque de Clonagem

### 3.1 Escaneamento
- O atacante aproxima um leitor portátil de RFID ou NFC do crachá alvo.  
- A leitura pode ser feita de forma discreta, a alguns centímetros de distância.  
- Exemplo: leitor escondido em uma mochila, acionado em uma aproximação no corredor ou portaria.  

### 3.2 Extração de Dados
- Os dados capturados (identificadores únicos, chaves ou blocos de informação) são armazenados.  
- Essa etapa pode ser feita posteriormente, em laboratório, sem necessidade de contato contínuo com a vítima.  

### 3.3 Gravação em Novo Dispositivo
- Utilizando ferramentas de escrita, os dados são copiados para:  
  - Um cartão RFID/NFC em branco.  
  - Um dispositivo multifuncional, como o **Flipper Zero**.  
- O clone passa a ser funcional e válido perante o sistema de autenticação.  

### 3.4 Uso do Crachá Clonado
- O atacante utiliza o clone para abrir portas, acessar sistemas ou realizar transações.  
- O sistema interpreta o clone como se fosse o crachá original, sem suspeitar da fraude.  

---

## 4. Por que a Clonagem é uma Ameaça
- **Execução simples**: dispositivos para clonagem estão cada vez mais baratos e acessíveis.  
- **Ataque furtivo**: não exige contato prolongado nem furto do crachá original.  
- **Impacto elevado**: pode comprometer desde escritórios até instalações críticas em áreas industriais.  

Exemplo em ambiente industrial: um invasor pode clonar o crachá de um funcionário autorizado a entrar em um depósito de combustíveis ou sala de controle SCADA, obtendo acesso sem levantar suspeitas.

---

## 5. Contramedidas contra Clonagem

### 5.1 Criptografia Avançada
- Substituir sistemas RFID/NFC simples por modelos com dados criptografados.  
- Utilizar algoritmos robustos que impeçam a cópia direta de identificadores.  

### 5.2 Autenticação Multifator (MFA)
- Associar o crachá a outro fator, como:  
  - PIN ou senha.  
  - Biometria (impressão digital, reconhecimento facial).  
- Exemplo: crachá + PIN de 8 dígitos → mesmo com clonagem, o atacante não terá sucesso.  

### 5.3 Rotação de Chaves e Protocolos
- Alterar periodicamente as chaves de autenticação.  
- Atualizar o firmware e protocolos dos leitores e cartões.  

### 5.4 Educação de Usuários
- Alertar sobre os riscos de clonagem.  
- Orientar a manter crachás protegidos e denunciar situações suspeitas.  

### 5.5 Carteiras ou Capas Blindadas
- Crachás guardados em carteiras com **bloqueio de radiofrequência** impedem leitura indevida à distância.  

### 5.6 Auditoria e Monitoramento de Logs
- Revisar acessos registrados.  
- Identificar anomalias, como tentativas de entrada em locais diferentes ao mesmo tempo com o mesmo crachá.  
- Exemplo: crachá usado no prédio enquanto o funcionário está em viagem → forte indício de clonagem.  

---

## 6. Conclusão
A **clonagem de crachás de acesso** é uma das principais vulnerabilidades dos sistemas baseados em RFID e NFC.  
Ela se destaca pela facilidade de execução e pela dificuldade de detecção imediata.  

Resumo:  
- **Etapas do ataque**: escaneamento → extração → gravação → uso do clone.  
- **Impacto**: acesso não autorizado a prédios, data centers e áreas industriais críticas.  
- **Defesa**: criptografia, MFA, rotação de chaves, educação de usuários, carteiras blindadas e monitoramento contínuo.  

Combinando tecnologia avançada e conscientização, é possível reduzir significativamente os riscos desse tipo de ataque.
