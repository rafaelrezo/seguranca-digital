# Criptografia e Soluções Criptográficas

Este material apresenta uma organização dos principais tópicos abordados na aula de criptografia, trazendo exemplos aplicados de forma implícita ao contexto da engenharia de controle e automação industrial. O objetivo é fornecer uma base conceitual sólida para compreender como a criptografia é utilizada para garantir a segurança da informação em diferentes cenários, incluindo ambientes industriais.

---

## Conceito de Criptografia

- **Definição**: prática de escrever e resolver códigos para ocultar o verdadeiro significado da informação.
- **Uso mais comum**: **encriptação**, que transforma dados em texto ilegível (cifra) a partir de um dado legível (texto plano).
- **Processo básico**:
  - Texto plano → Algoritmo + Chave → Texto cifrado  
  - Texto cifrado + Chave → Algoritmo → Texto plano  

> Exemplo: em um sistema industrial, relatórios de produção podem ser armazenados cifrados para que apenas engenheiros autorizados consigam lê-los.

---

## Estados dos Dados

- **Dados em repouso (at rest)**  
  Informações arquivadas ou armazenadas (ex.: registros históricos em banco de dados de sensores industriais).
- **Dados em trânsito (in transit)**  
  Informações que trafegam pela rede (ex.: sinais de telemetria enviados do chão de fábrica para um servidor de controle).
- **Dados em uso (in use)**  
  Informações em processamento (ex.: cálculos em tempo real de parâmetros de um motor em um CLP).

---

## Funcionamento da Criptografia

- **Cifra ROT13**: exemplo simples de rotação de letras em 13 posições.  
  - Mostra que a **segurança vem da chave** (13), não do algoritmo.
- **Princípio geral**: os algoritmos modernos são públicos e auditados, mas a segurança depende da proteção da chave.

---

## Importância da Chave

- **Chave**: informação essencial que define o resultado do processo de criptografia.  
- **Boas práticas**:
  - Utilizar chaves longas (128 bits, 256 bits).
  - Rotacionar periodicamente as chaves (ex.: a cada 90 dias).
  - Armazenar em módulos seguros (HSM, TPM).
- **Força da criptografia**: proporcional ao tamanho e à proteção da chave.

> Exemplo: em sistemas de automação distribuída, a troca de chaves TLS entre dispositivos evita que comandos de controle sejam interceptados e manipulados.

---

## Tipos de Algoritmos Criptográficos

- **Simétricos** (mesma chave para cifrar e decifrar)  
  Ex.: AES, DES, 3DES, Blowfish, Twofish.  
  Usados em transmissão de dados em redes industriais privadas.
- **Assimétricos** (par de chaves: pública e privada)  
  Ex.: RSA, Diffie-Hellman, ECC.  
  Usados em autenticação de dispositivos e assinaturas digitais.

---

## Hashing

- **Definição**: transforma dados em uma cadeia fixa (digest).  
- **Exemplos de algoritmos**: MD5, SHA (SHA-1, SHA-256, etc.), RIPEMD, HMAC.  
- **Aplicação**: verificação de integridade de firmware de controladores industriais.

---

## Infraestrutura de Chaves Públicas (PKI)

- **PKI**: estrutura que gerencia certificados digitais e chaves.  
- **Certificados digitais**: validam a identidade de dispositivos ou usuários.  
- **Exemplo**: validar se um software de supervisão conectado a sensores foi emitido por fornecedor confiável.

---

## Blockchain e Registros Imutáveis

- **Blockchain**: livro-razão descentralizado e imutável.  
- **Aplicações**:
  - Rastreabilidade de peças e insumos na cadeia de suprimentos industrial.
  - Registro confiável de eventos de manutenção.

---

## Ferramentas de Criptografia

- **TPM (Trusted Platform Module)**
- **HSM (Hardware Security Module)**
- **Secure Enclaves**  
  Garantem a proteção de chaves e operações críticas.

---

## Técnicas de Ofuscação

- **Esteganografia**: ocultar dados em arquivos comuns.  
- **Tokenização**: substituir dados sensíveis por tokens.  
- **Mascaramento de dados**: proteger dados reais em ambientes de teste.  

> Exemplo: ocultar dados de operadores em logs de sistemas de supervisão para preservar privacidade.

---

## Principais Ataques Criptográficos

- **Downgrade Attack**: forçar uso de algoritmo fraco.  
- **Collision Attack**: encontrar duas entradas com mesmo hash.  
- **Birthday Attack**: explorar probabilidade de colisões.  
- **Quantum-based Attacks**: ameaças futuras com computadores quânticos.

---

## Boas Práticas de Segurança Criptográfica

1. Usar algoritmos consolidados e auditados.  
2. Proteger e rotacionar chaves periodicamente.  
3. Monitorar acessos e uso de chaves.  
4. Integrar criptografia aos processos de controle e automação.  

---

## Conclusão

A criptografia é fundamental para proteger dados em diferentes estados (repouso, trânsito, uso).  
Na engenharia de controle e automação, ela garante **confiabilidade, integridade e autenticidade** em comunicações entre dispositivos, sistemas supervisórios e infraestrutura crítica.  
Ao longo do curso, aprofundaremos em **algoritmos, ferramentas e ataques**, consolidando o entendimento para aplicação prática em ambientes industriais.

---
