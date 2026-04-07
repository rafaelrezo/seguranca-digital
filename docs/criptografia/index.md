# Criptografia e Soluções Criptográficas

> **Objetivos de aprendizagem**
> - Explicar o que a criptografia protege e por que a chave é o ponto sensível do sistema.
> - Diferenciar criptografia simétrica, assimétrica, hash, HMAC, assinatura digital e PKI.
> - Aplicar escolhas criptográficas corretas em dados em repouso, em trânsito e em uso.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

---

## 1. O que a criptografia resolve

A criptografia transforma dados legíveis em dados protegidos para reduzir exposição a interceptação, adulteração e fraude. Em Segurança+ isso aparece como resposta a três perguntas simples:

- quem pode ler,
- quem pode provar autoria,
- como verificar que nada foi alterado.

Pense em um cofre com duas camadas. O formato do cofre importa, mas o ponto decisivo é quem controla a combinação. Em criptografia, essa combinação é a chave.

## 2. Estados dos dados

| Estado | Pergunta prática | Controle típico |
|---|---|---|
| Em repouso | O arquivo ou banco foi roubado? | Criptografia de disco, banco e backups |
| Em trânsito | O tráfego pode ser lido na rede? | TLS, VPN, mTLS |
| Em uso | O dado pode ser exposto durante o processamento? | Enclaves, memória protegida, menor privilégio |

Em prova, a escolha correta quase sempre depende do estado do dado e do impacto de vazamento.

## 3. Primitivas criptográficas

| Primitiva | Melhor uso | Entregável | Limitação |
|---|---|---|---|
| Simétrica | Grandes volumes de dados | Confidencialidade rápida | Distribuição de chave |
| Assimétrica | Troca de chaves, assinatura | Autenticação e não repúdio | Mais lenta |
| Hash | Integridade | Digest | Não cifra dados |
| HMAC | Integridade com segredo | Mensagem autenticada | Exige chave compartilhada |
| Assinatura digital | Autenticidade e não repúdio | Prova de origem | Depende de PKI e chave privada |
| PKI | Confiança em escala | Cadeia de confiança | Custo operacional e revogação |

## 4. Como a segurança realmente funciona

Algoritmos modernos são públicos e auditados. O que deve permanecer secreto é a chave e o material de suporte a ela. É por isso que NIST trata key management como disciplina própria e não como detalhe secundário.

O ponto prático é simples:

- algoritmo fraco compromete a proteção;
- chave fraca compromete a proteção;
- implementação ruim compromete a proteção.

## 5. Combinações que o examinador cobra

- **Confidencialidade**: AES com TLS.
- **Integridade**: SHA-256 ou SHA-3.
- **Autenticidade**: assinatura digital.
- **Autenticidade + integridade de mensagem**: HMAC.
- **Confiança de ponta a ponta**: PKI com certificados válidos.

## 6. Mini-caso prático

Uma equipe de TI publica uma aplicação web interna e um portal de fornecedores.

- O banco da aplicação usa criptografia em repouso.
- O tráfego externo usa TLS.
- As APIs entre serviços usam certificados e mTLS.
- Os contratos de integração usam HMAC para mensagens críticas.

Se a empresa só cifra o disco, mas deixa o tráfego exposto, a proteção está incompleta.

## 7. Perguntas de revisão rápida

1. Por que criptografia não é o mesmo que hash?
2. Em que cenário a assimétrica é usada para negociar chaves?
3. O que a PKI adiciona além do algoritmo de chave pública?

## 8. Fontes de referência

- NIST FIPS 197, Advanced Encryption Standard (AES): https://www.nist.gov/publications/advanced-encryption-standard-aes
- NIST SP 800-57 Part 1 Rev. 5, Recommendation for Key Management: Part 1 - General: https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final
- NIST FIPS 140-3, Security Requirements for Cryptographic Modules: https://www.nist.gov/publications/security-requirements-cryptographic-modules-0
- CompTIA Security+ exam objectives: https://www.comptia.org/training/resources/exam-objectives
