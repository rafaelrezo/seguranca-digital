# Algoritmos Simétricos de Criptografia

Neste conteúdo, vamos organizar os principais algoritmos simétricos de criptografia estudados na aula, destacando suas características, limitações e aplicações. De forma implícita, alguns exemplos remetem a cenários industriais de controle e automação, onde a proteção da comunicação e do armazenamento de dados é essencial.

---

## Conceito Geral

- **Criptografia simétrica**: utiliza **a mesma chave** para encriptar e decriptar dados.  
- **Características principais**:
  - Rápida e eficiente.
  - Ideal para grandes volumes de dados.
  - Desafio: **distribuição segura da chave**.  
- **Classificação adicional**:
  - **Cifras de bloco**: processam dados em blocos fixos.
  - **Cifras de fluxo**: processam dados bit a bit ou byte a byte.

---

## Principais Algoritmos Simétricos

### 1. DES (Data Encryption Standard)
- Chave: 64 bits (efetivos: 56 bits).  
- Opera em blocos de 64 bits.  
- Utiliza 16 rodadas de substituição e transposição.  
- **Limitação**: atualmente considerado **fraco** diante da capacidade computacional moderna.  
- **Aplicação histórica**: usado amplamente até os anos 2000.  

> Exemplo industrial: antigos sistemas de supervisão podiam empregar DES para proteger dados de sensores, mas hoje seria inseguro.

---

### 2. 3DES (Triple DES)
- Evolução do DES.  
- Usa três chaves de 56 bits, em sequência: **encripta → decripta → encripta**.  
- Efetivamente alcança segurança de **112 bits**.  
- Mais seguro que o DES, mas **obsoleto** diante do AES.  

> Exemplo: empregado em sistemas legados de controle de acesso físico em plantas industriais.

---

### 3. IDEA (International Data Encryption Algorithm)
- Blocos de 64 bits.  
- Chave de 128 bits.  
- Usado historicamente no **PGP (Pretty Good Privacy)**.  
- Mais forte que o DES, mas pouco adotado em larga escala.  

---

### 4. AES (Advanced Encryption Standard)
- Substituto oficial do DES e 3DES, escolhido pelo **NIST**.  
- Tamanhos de chave: **128, 192 ou 256 bits**.  
- Também chamado de **Rijndael Cipher**.  
- **Mais usado atualmente**: padrão de criptografia simétrica em todo o mundo.  
- Rápido, seguro e amplamente suportado em hardware e software.  

> Exemplo industrial: utilizado em VPNs industriais, protocolos de automação e sistemas SCADA para proteger transmissões de dados.

---

### 5. Blowfish
- Cifra de bloco de 64 bits.  
- Chaves variáveis: de 32 a 448 bits.  
- Desenvolvido como substituto do DES.  
- Não patenteado, de uso livre.  
- Pouco utilizado em comparação ao AES.  

---

### 6. Twofish
- Evolução do Blowfish.  
- Blocos de 128 bits.  
- Chaves de 128, 192 ou 256 bits.  
- Também não patenteado, disponível como **open source**.  
- Foi finalista no concurso que escolheu o AES.  

> Exemplo: sistemas de controle embarcados podem adotar algoritmos abertos como o Twofish quando precisam de criptografia leve e eficiente.

---

### 7. Suíte RC (Rivest Ciphers)
- Criada por **Ron Rivest**.  
- **RC1**: nunca publicado.  
- **RC2**: considerado fraco.  
- **RC3**: comprometido antes do lançamento.  
- **RC4**:
  - **Cifra de fluxo**.
  - Tamanho variável de chave: 40 a 2048 bits.
  - Usado em SSL antigo e no protocolo WEP de redes Wi-Fi (ambos hoje inseguros).  
- **RC5**:
  - Cifra de bloco.
  - Chaves até 2048 bits.  
- **RC6**:
  - Baseado no RC5, mais avançado.  
  - Participou do concurso para substituir o DES, mas perdeu para o AES.  

> Exemplo: protocolos antigos em redes industriais sem fio utilizavam RC4 (como no WEP), mostrando a importância da atualização constante dos mecanismos de segurança.

---

## Comparação Resumida

| Algoritmo | Tipo         | Tamanho de Chave         | Situação Atual       |
|-----------|--------------|--------------------------|----------------------|
| DES       | Bloco (64b)  | 56 bits efetivos         | Obsoleto             |
| 3DES      | Bloco (64b)  | 112 bits efetivos        | Obsoleto             |
| IDEA      | Bloco (64b)  | 128 bits                 | Pouco utilizado      |
| AES       | Bloco (128b) | 128, 192, 256 bits       | **Padrão atual**     |
| Blowfish  | Bloco (64b)  | 32 a 448 bits            | Limitado             |
| Twofish   | Bloco (128b) | 128, 192, 256 bits       | Alternativa aberta   |
| RC4       | Fluxo        | 40 a 2048 bits           | Inseguro/obsoleto    |
| RC5       | Bloco        | Até 2048 bits            | Raramente usado      |
| RC6       | Bloco        | Até 2048 bits            | Finalista, não adotado |

---

## Conclusão

- **AES** é o algoritmo simétrico mais seguro e mais utilizado atualmente, inclusive em sistemas industriais modernos.  
- **Algoritmos legados** (DES, 3DES, RC4) são considerados inseguros e não devem ser aplicados em novos projetos.  
- **Blowfish e Twofish** oferecem alternativas abertas, podendo ser exploradas em cenários específicos.  
- O conhecimento desses algoritmos permite ao engenheiro de controle e automação selecionar soluções adequadas para **proteger dados críticos em ambientes industriais**, equilibrando segurança, desempenho e compatibilidade.

---
