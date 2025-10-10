# Hashing: Integridade, Assinaturas e Aplicações em Controle e Automação

Material didático de apoio sobre **funções de hash** e seu papel em **integridade**, **autenticidade** (via HMAC) e **assinaturas digitais**. Os exemplos são apresentados de forma discreta, com cenários comuns a redes industriais (SCADA, CLPs, sensores, gateways, historiadores).

---

## 1) Conceito e Propriedades Essenciais

- **Hashing** é uma função **criptográfica unidirecional** que transforma uma entrada de qualquer tamanho em um **resumo (digest)** de tamanho fixo.  
- **Propriedades desejáveis**:
  1. **Unidirecionalidade**: não é viável recuperar a entrada a partir do digest.
  2. **Tamanho fixo**: o digest tem comprimento constante (ex.: 256 bits) independentemente do tamanho da entrada.
  3. **Resistência a colisões**: difícil encontrar **duas entradas diferentes** com **o mesmo digest**.
  4. **Avalanche**: pequenas mudanças na entrada produzem **grandes mudanças** no digest.

> Exemplo industrial: ao exportar um **relatório de produção** para a matriz, o sistema gera um **hash do arquivo**; na recepção, o hash é recalculado e comparado para garantir que **nada foi alterado** durante o transporte.

---

## 2) Algoritmos de Hash em Foco

### 2.1 MD5
- Digest de **128 bits**.  
- Histórico e amplamente difundido; **não recomendado** devido a **colisões práticas**.  
- Adequado no máximo para **verificação não-crítica** (ex.: checagem de integridade de download interno sem exposição a atacantes).

### 2.2 Família SHA
- **SHA-1**: **160 bits**; melhor que MD5, porém **depreciado** para segurança (colisões conhecidas).
- **SHA-2**: variantes **SHA-224/256/384/512** (224–512 bits). Padrão atual de mercado (**use pelo menos SHA-256**).
- **SHA-3**: também com 224–512 bits; projeto distinto (baseado em Keccak) e **robustez elevada**.

> Exemplo industrial: **historiadores** e **repositórios de firmware** podem publicar **SHA-256** do arquivo; dispositivos em campo verificam o digest antes de aceitar a atualização.

### 2.3 RIPEMD
- Variantes **RIPEMD-160/256/320**.  
- Projeto aberto; uso prático menor que SHA-2/SHA-3; útil em compatibilidade e estudos.

### 2.4 HMAC (Hash-based Message Authentication Code)
- Combina **hash** + **segredo compartilhado**, fornecendo **integridade** e **autenticidade** da mensagem.  
- Notação: **HMAC-SHA256**, **HMAC-SHA1**, etc.  
- Muito usado em **APIs**, **túneis** e **protocolos industriais** para evitar adulteração em trânsito.

> Exemplo industrial: um **gateway de telemetria** anexa **HMAC-SHA256** aos pacotes enviados ao servidor; o receptor valida o HMAC com a chave compartilhada e rejeita pacotes forjados.

---

## 3) Assinaturas Digitais (Integração Hash + Chave Assimétrica)

1. O emissor calcula o **hash** (ex.: SHA-256) da mensagem/arquivo.  
2. **Assina** o hash com sua **chave privada** (RSA, ECDSA/EdDSA).  
3. O destinatário:  
   - **Verifica a assinatura** com a **chave pública** do emissor (autenticidade e **não repúdio**).  
   - **Recalcula o hash** da mensagem e compara com o hash assinado (garantia de **integridade**).

> Exemplo industrial: **code signing** de firmware de CLPs. O fabricante assina o digest do binário; o CLP verifica a assinatura antes de instalar, mitigando **malware** e **alterações indevidas**.

---

## 4) Colisões e Efeito Avalanche

- **Colisão**: duas entradas diferentes geram o **mesmo** digest.  
  - Mais provável em **hashes curtos** (ex.: **MD5/128 bits**).  
  - Por isso, **MD5/SHA-1** estão **obsoletos** para segurança.  
- **Avalanche**: trocar um único caractere altera drasticamente o digest — útil para **detectar qualquer mudança**.

> Exemplo industrial: uma **ordem de setpoint** alterada por 1 unidade deve gerar um digest totalmente diferente, facilitando a auditoria de mensagens no enlace de controle.

---

## 5) Boas Práticas no Chão de Fábrica

- **Evite** MD5 e SHA-1 em novos projetos; padronize **SHA-256** ou **SHA-3**.  
- Para **mensagens em trânsito** sob segredo compartilhado, use **HMAC-SHA256**.  
- Para **software/firmware**, exija **assinatura digital** (RSA-2048+ ou ECDSA com curvas modernas) além do hash.  
- **Armazene** e **publique** o digest (ex.: `.sha256`) junto ao artefato.  
- **Automatize** a verificação de hash/assinatura no pipeline de **CI/CD** antes de promover pacotes para ambientes de teste/produção.  
- Proteja **chaves privadas** em **HSM/TPM/KMS**; faça **rotação** periódica e **auditoria** de uso.  
- Em redes industriais sem fio/IoT, combine **TLS 1.3** (para canal seguro) com **HMAC** em mensagens de aplicação quando aplicável.

---

## 6) Tabela-Resumo

| Finalidade             | Ferramenta Recomendada               | Observação                                      |
|------------------------|--------------------------------------|-------------------------------------------------|
| Integridade de arquivo | **SHA-256** / **SHA-3-256**          | Publicar digest `.sha256` junto ao artefato     |
| Mensagem autenticada   | **HMAC-SHA256**                      | Requer **segredo compartilhado**                |
| Assinatura digital     | **RSA-2048+/ECDSA** (sobre hash)     | Não confundir com simples hash                  |
| Legado (evitar)        | **MD5 / SHA-1**                      | Colisões conhecidas; não usar para segurança    |

---

## 7) Exercícios de Fixação (curtos)

1. Por que **HMAC-SHA256** fornece **integridade + autenticidade**, enquanto SHA-256 puro fornece apenas integridade?  
2. Em uma atualização de firmware de CLP, quais **duas** camadas de proteção você aplicaria além do transporte TLS?  
3. Quando faz sentido **ainda** calcular MD5 em um fluxo industrial?

**Gabarito resumido:**  
1. Porque HMAC inclui um **segredo compartilhado**; sem o segredo, um atacante não consegue forjar o código de autenticação.  
2. **(a)** Hash forte do binário (**SHA-256/3**); **(b)** **assinatura digital** do hash (RSA/ECDSA) verificada no dispositivo.  
3. Verificação **não-crítica/legada** (ex.: conferência rápida de integridade onde não há adversário ativo), sempre acompanhado de uma alternativa segura para fins de segurança real.

---

## 8) Conclusão

- **Hashing** é a base da **integridade**; com **HMAC**, agrega-se **autenticidade**; com **assinatura digital**, obtêm-se **autenticidade + não repúdio**.  
- Para controle e automação, padronize **SHA-256/SHA-3**, use **HMAC** em mensagens e **assinaturas digitais** em firmware/software.  
- A combinação correta desses mecanismos sustenta a **confiabilidade operacional** e a **segurança** em ambientes industriais críticos.

---
