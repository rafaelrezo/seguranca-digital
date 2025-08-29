# Trancas e Fechaduras como Controles de Segurança Física

## 1. Introdução
Por mais robustas que sejam as barreiras externas de uma organização — cercas eletrificadas, bollards, câmeras, vigilantes ou câmaras de acesso controlado — o ponto crítico ocorre quando um intruso consegue atravessar o lobby e circular pelo interior da instalação.  
Nesse momento, a defesa recai principalmente sobre **fechaduras e trancas**.  

As fechaduras são controles de segurança física projetados para **restringir e regular o acesso** a um espaço, garantindo que apenas indivíduos com a chave, código ou credencial corretos possam entrar.  
Elas desempenham papel fundamental na proteção de:  
- Escritórios administrativos  
- Salas de servidores e data centers  
- Closets de rede  
- Áreas industriais de risco e depósitos de insumos  

---

## 2. Tipos de Fechaduras

### 2.1 Cadeados e Fechaduras Simples
- **Cadeados**: utilizam sistemas de pinos e molas básicos.  
- Vulnerabilidade: podem ser abertos por um atacante habilidoso em **segundos** usando ferramentas de lockpicking (chaves de tensão e gazuas).  
- Problema comum: ainda são usados em closets de rede ou armários de documentos sigilosos.  

### 2.2 Fechaduras Mecânicas Básicas
- Exemplos: portas internas de residências (banheiros e quartos).  
- Vulnerabilidade: podem ser abertas com grampos, agulhas, chaves de fenda ou até moedas.  
- Nível de proteção: muito baixo.  

### 2.3 Fechaduras Mecânicas Convencionais
- Exemplo: fechadura de porta residencial com chave comum.  
- Mais resistentes que as anteriores, mas ainda vulneráveis a lockpicking em menos de um minuto.  

---

### 2.4 Fechaduras Eletrônicas com PIN
- Funcionam com **códigos numéricos** (ex.: PIN de 6 ou 8 dígitos).  
- Benefícios: permitem auditoria de acessos, já que cada pessoa pode ter seu próprio código.  
- Exemplo: laboratórios ou estúdios que liberam acesso apenas para quem possui um PIN individual.  
- Probabilidade de acerto forçado é baixa (1 em 100 milhões para PIN de 8 dígitos).  

### 2.5 Fechaduras Eletrônicas Sem Fio
- Tecnologias: **NFC, RFID, Bluetooth, Wi-Fi**.  
- Exemplo: abrir a porta aproximando um smartphone do leitor.  
- Benefícios: conveniência e integração com sistemas de controle central.  
- Riscos: suscetíveis a ataques de replay ou jamming se não forem criptografadas.  

### 2.6 Fechaduras Biométricas
- Métodos: impressão digital, reconhecimento facial, leitura de retina, voz.  
- Benefícios: associam acesso a uma característica física única (“algo que você é”).  
- Aplicação comum:  
  - **TI** → salas de servidores e data centers.  
  - **Indústria** → áreas críticas como cabines de controle SCADA ou depósitos de combustíveis.  
- Problema: equilíbrio entre **FAR (False Acceptance Rate)** e **FRR (False Rejection Rate)**.  
  - O ponto de equilíbrio é chamado de **CER (Crossover Error Rate)**.  
  - CER baixo = sistema mais confiável.  

### 2.7 Fechaduras Mecânicas de Cifra (Cipher Locks)
- Funcionam com **botões mecânicos numerados** que exigem a combinação correta.  
- Usadas em áreas de alta segurança como closets de rede e salas de telecomunicações.  
- Vantagem: não dependem de energia elétrica.  
- Desvantagem: custo mais alto e necessidade de troca frequente da combinação.  

---

## 3. Autenticação Multifator em Fechaduras
As fechaduras modernas podem combinar diferentes fatores de autenticação, como:  
- Algo que você sabe (PIN)  
- Algo que você tem (crachá)  
- Algo que você é (biometria)  

Exemplo prático:  
- Servidor em um data center protegido por PIN de 8 dígitos **e** impressão digital.  
- Acesso em prédios corporativos via **crachá + PIN** em catracas eletrônicas.  

Essa combinação aumenta a segurança e reduz falhas individuais de cada método.

---

## 4. Considerações sobre Biometria
- **FAR (False Acceptance Rate)** → taxa de aceitação indevida (autoriza quem não deveria).  
- **FRR (False Rejection Rate)** → taxa de rejeição indevida (nega acesso a quem deveria entrar).  
- **CER (Crossover Error Rate)** → ponto de equilíbrio entre FAR e FRR, usado como métrica de qualidade.  

Na escolha de fechaduras biométricas, um **CER baixo** deve ser um critério essencial.

---

## 5. Conclusão
As fechaduras são um dos controles de segurança física mais críticos dentro de uma instalação, seja de TI ou industrial.  
Elas representam a **última linha de defesa** contra o acesso indevido após a violação do perímetro.  

Resumo:  
- Cadeados e fechaduras simples → baixo nível de proteção.  
- Fechaduras mecânicas convencionais → vulneráveis a lockpicking.  
- Fechaduras eletrônicas (PIN, NFC, RFID) → maior segurança e auditoria.  
- Fechaduras biométricas → alto nível de segurança, desde que bem configuradas (CER baixo).  
- Autenticação multifator → camada extra de proteção em ambientes críticos.  

O uso combinado de **fechaduras modernas, autenticação multifator e auditoria** é essencial para proteger informações sensíveis e garantir a continuidade operacional das organizações.
