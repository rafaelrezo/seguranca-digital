# Algoritmos Assimétricos de Criptografia

Este material organiza os principais conceitos e algoritmos de criptografia **assimétrica** (também conhecida como **criptografia de chave pública**). Diferente da criptografia simétrica, aqui não existe chave secreta compartilhada; em vez disso, cada entidade utiliza um **par de chaves** (pública e privada).  
Aplicações práticas em ambientes industriais são apresentadas de forma implícita para reforçar a compreensão no contexto da engenharia de controle e automação.

---

## 1) Conceito de Criptografia Assimétrica

- Utiliza um **par de chaves**:
  - **Chave pública**: livremente distribuída, usada para encriptar dados.
  - **Chave privada**: mantida em segredo pelo proprietário, usada para decriptar.  
- Proporciona:
  - **Confidencialidade**: somente o detentor da chave privada consegue ler o conteúdo.  
  - **Integridade**: assegura que a mensagem não foi alterada.  
  - **Autenticação**: valida a identidade de quem enviou.  
  - **Não repúdio**: garante que o autor não pode negar ter enviado a mensagem.

> Exemplo industrial: uma IHM (Interface Homem-Máquina) pode utilizar certificados digitais baseados em chaves públicas para se autenticar junto ao servidor SCADA, garantindo que comandos críticos não sejam falsificados.

---

## 2) Funcionamento Básico

1. **Confidencialidade**  
   - Mensagem é cifrada com a **chave pública do destinatário**.  
   - Apenas o destinatário, com sua **chave privada**, consegue decriptar.  

2. **Não repúdio**  
   - Mensagem ou assinatura é cifrada com a **chave privada do remetente**.  
   - Qualquer pessoa pode verificar a autenticidade utilizando a **chave pública do remetente**.  

3. **Combinação de técnicas**  
   - **Assinatura digital**: cria-se um **hash** da mensagem, cifrado com a chave privada do remetente.  
   - A mensagem, por sua vez, é cifrada com a chave pública do destinatário.  
   - Assim, garantem-se: **confidencialidade, autenticidade, integridade e não repúdio**.  

> Exemplo industrial: ao transmitir relatórios de produção críticos para a matriz, pode-se usar a chave pública da matriz para cifrar os dados e a chave privada da planta para assinar digitalmente o arquivo.

---

## 3) Principais Algoritmos Assimétricos

### 3.1 Diffie-Hellman (DH)
- Desenvolvido para **troca segura de chaves**.  
- Usado em **túneis VPN** e no estabelecimento de sessões IPSec.  
- Permite compartilhar chaves simétricas de forma segura.  
- Vulnerável a ataques **man-in-the-middle** se não houver autenticação adicional.  

> Exemplo: em uma rede de automação distribuída, o Diffie-Hellman pode ser usado para negociar a chave simétrica que protegerá o tráfego entre controladores remotos e um gateway seguro.

---

### 3.2 RSA
- Criado por **Rivest, Shamir e Adleman**.  
- Baseado na dificuldade de fatoração de grandes números primos.  
- Usos principais:
  - **Troca de chaves**.  
  - **Criptografia de dados**.  
  - **Assinaturas digitais**.  
- Tamanhos de chave: entre **1024 e 4096 bits**.  
- Amplamente utilizado em **autenticação multifator** (tokens, smartcards).  

> Exemplo industrial: autenticação de engenheiros de manutenção que acessam remotamente servidores SCADA utilizando certificados RSA de 2048 bits.

---

### 3.3 ECC (Elliptic Curve Cryptography)
- Baseado em curvas elípticas sobre campos finitos.  
- Mais eficiente que RSA: uma chave **ECC de 256 bits** equivale a uma chave **RSA de 2048 bits**.  
- Ideal para dispositivos com **baixo poder de processamento**, como sensores industriais IoT.  
- Variações:
  - **ECDH**: versão elíptica do Diffie-Hellman (troca de chaves).  
  - **ECDHE**: versão efêmera (chaves temporárias para cada sessão).  
  - **ECDSA**: usado para assinaturas digitais.  

> Exemplo industrial: sensores de vibração ou temperatura em campo, com bateria limitada, podem usar ECC para se autenticar de forma eficiente em um sistema de monitoramento central.

---

## 4) Comparação Rápida

| Algoritmo     | Uso Principal            | Segurança Relativa      | Eficiência          | Aplicação Industrial |
|---------------|--------------------------|--------------------------|---------------------|----------------------|
| Diffie-Hellman| Troca de chaves          | Alta (com autenticação) | Médio               | Estabelecer túneis seguros (VPNs industriais) |
| RSA           | Criptografia e assinaturas| Alta (com chaves ≥ 2048)| Mais lento          | Certificados digitais em SCADA/PLC |
| ECC           | Criptografia, assinaturas| Muito alta (com chaves pequenas) | Muito eficiente    | IoT e sensores de baixo consumo |

---

## 5) Conclusão

- A criptografia assimétrica resolve os problemas de **distribuição de chaves** presentes nos algoritmos simétricos.  
- **Diffie-Hellman**: ideal para troca inicial de chaves em conexões seguras.  
- **RSA**: amplamente difundido, usado em certificados, tokens e autenticação.  
- **ECC**: padrão emergente para **mobilidade, IoT e dispositivos de baixo consumo**, com segurança equivalente ao RSA em chaves menores.  
- Na engenharia de controle e automação, compreender esses algoritmos é essencial para projetar **sistemas confiáveis**, garantindo a segurança de dados em redes industriais críticas.  

---
