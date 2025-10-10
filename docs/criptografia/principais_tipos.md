# Criptografia Simétrica e Assimétrica

Este conteúdo organiza os principais tópicos sobre criptografia simétrica e assimétrica, apresentando exemplos de aplicação implícitos ao contexto da engenharia de controle e automação. O objetivo é oferecer um material didático claro e aplicável para compreensão e uso em ambientes industriais.

---

## Conceito Geral

- **Classificação dos algoritmos**:  
  Todo algoritmo de criptografia pode ser classificado em duas categorias principais:
  - **Simétrica (chave única)**  
  - **Assimétrica (par de chaves)**

> Exemplo: no acesso a sistemas de supervisão industrial, pode-se utilizar criptografia simétrica para proteger a comunicação entre sensores e o servidor central, enquanto certificados digitais assimétricos garantem a autenticação do sistema.

---

## Criptografia Simétrica

- **Definição**: utiliza **a mesma chave** para criptografar e descriptografar os dados.  
- **Nomes alternativos**: criptografia de chave privada ou de segredo compartilhado.  
- **Exemplo cotidiano**: abrir uma porta de casa com a mesma chave que todos os moradores possuem.  
- **Características**:
  - Rápida (100 a 1000 vezes mais veloz que algoritmos assimétricos).
  - Boa para grandes volumes de dados.
- **Desafios**:
  - **Distribuição da chave**: cada par de usuários precisa de uma chave exclusiva.
  - **Não repúdio**: não é possível provar quem usou a chave, já que ela é compartilhada.  

> Exemplo industrial: em uma rede de controladores lógicos programáveis (CLPs), todos com a mesma senha de rede Wi-Fi, qualquer técnico que tenha a chave poderia acessar os dados, sem garantia de rastreabilidade.

---

## Criptografia Assimétrica

- **Definição**: utiliza **um par de chaves distintas**:
  - **Chave pública**: usada para criptografar.
  - **Chave privada**: usada para descriptografar.  
- **Também chamada**: criptografia de chave pública.  
- **Principais algoritmos**:
  - RSA
  - Diffie-Hellman
  - ECC (Criptografia de Curvas Elípticas)  
- **Vantagem principal**: resolve o problema da distribuição de chaves.
- **Limitação**: desempenho inferior à criptografia simétrica.

> Exemplo industrial: certificados digitais utilizados para validar a identidade de um servidor SCADA que centraliza dados de sensores espalhados pela planta.

---

## Abordagem Híbrida

- Combina as vantagens dos dois modelos:  
  1. **Assimétrica**: usada para trocar com segurança a chave simétrica.  
  2. **Simétrica**: utilizada para a transmissão contínua de dados, garantindo rapidez.  
- Esta prática é comum em protocolos como **TLS/SSL**.

> Exemplo industrial: durante a comunicação segura entre uma estação de engenharia e um CLP remoto, utiliza-se criptografia assimétrica apenas na fase inicial (troca de chaves), passando depois para simétrica no tráfego contínuo de comandos e dados.

---

## Tipos de Cifras

### Cifra de Fluxo (Stream Cipher)
- Encripta dados **bit a bit** ou **byte a byte** em fluxo contínuo.  
- Usa um gerador de fluxo de chaves (keystream generator).  
- Geralmente baseada em operações XOR.  
- Mais adequada para comunicações em **tempo real** (ex.: streaming de vídeo de câmeras industriais).  
- Comum em soluções **hardware**.

### Cifra de Bloco (Block Cipher)
- Divide a mensagem em blocos fixos (64, 128, 256 bits).  
- Cada bloco passa pelo algoritmo de criptografia.  
- Caso o bloco seja menor, aplica-se **padding**.  
- Mais fácil de implementar em software e menos suscetível a problemas de segurança.  
- Exemplos: AES, DES.  

> Exemplo industrial: logs de produção podem ser armazenados em blocos cifrados para garantir integridade e confidencialidade.

---

## Comparação Geral

| Critério                | Criptografia Simétrica       | Criptografia Assimétrica      |
|--------------------------|------------------------------|-------------------------------|
| **Chave**               | Mesma chave (única)          | Par de chaves (pública/privada) |
| **Velocidade**           | Muito rápida                 | Mais lenta                    |
| **Distribuição de chaves** | Difícil em larga escala      | Resolvido pelo par de chaves  |
| **Uso típico**           | Proteção de dados em massa   | Autenticação e troca de chaves |

---

## Conclusão

- **Simétrica**: rápida, eficiente, mas com problemas de distribuição de chaves.  
- **Assimétrica**: resolve o problema de distribuição e garante autenticação, mas é mais lenta.  
- **Abordagem híbrida**: combina o melhor dos dois mundos.  
- **Stream vs Block Ciphers**: escolha depende do contexto — comunicações em tempo real ou armazenamento seguro de grandes volumes de dados.  

Na engenharia de controle e automação, compreender essas diferenças é essencial para projetar sistemas seguros que conciliem **desempenho, confidencialidade e confiabilidade** em ambientes críticos.

---
