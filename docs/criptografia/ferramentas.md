# Ferramentas de Criptografia

> **Objetivos de aprendizagem**
> - Diferenciar TPM, HSM, KMS e ambientes isolados de execução.
> - Entender onde cada ferramenta se encaixa no ciclo de vida das chaves.
> - Aplicar a escolha correta de ferramenta em cenários de Security+ e operação real.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

## 1. Por que ferramenta criptográfica importa

Algoritmo bom não basta. Chaves mal armazenadas, mal distribuídas ou mal rotacionadas comprometem o sistema inteiro.

As ferramentas desta seção existem para responder perguntas diferentes:

- onde guardar segredo;
- como gerar e rotacionar chaves;
- como executar operação sensível com menor exposição;
- como escalar criptografia com governança.

---

## 2. Comparativo rápido

| Ferramenta | Melhor uso | Ponto forte | Limitação |
|---|---|---|---|
| **TPM** | proteger segredo atrelado ao dispositivo | raiz de confiança local | não substitui cofre central |
| **HSM** | operações críticas e chaves de alto valor | resistência física e lógica | custo e operação mais complexos |
| **KMS** | gerenciar ciclo de vida de chaves em escala | automação e governança | depende de arquitetura e política corretas |
| **Enclave/TEE** | processar dado sensível em ambiente isolado | proteção durante uso | não elimina risco do restante do sistema |

---

## 3. Quando usar cada uma

### 3.1 TPM

Bom para:

- full disk encryption;
- boot confiável;
- segredos ligados ao endpoint.

### 3.2 HSM

Bom para:

- CA e PKI;
- assinatura digital sensível;
- chaves mestres;
- ambientes regulados.

### 3.3 KMS

Bom para:

- nuvem;
- rotação e auditoria de chaves;
- padronização de políticas criptográficas.

### 3.4 Enclave/TEE

Bom para:

- tratamento de dado em uso;
- operações com menor exposição de memória;
- cenários de computação confidencial.

---

## 4. Mini-caso prático

Uma organização quer:

- proteger notebooks de docentes;
- emitir certificados internos;
- cifrar documentos na nuvem com rotação centralizada.

Escolha provável:

- `TPM` para os notebooks;
- `HSM` para a chave da autoridade certificadora;
- `KMS` para a gestão em nuvem.

Nenhuma das três substitui sozinha política de acesso e inventário de chaves.

---

## 5. Perguntas de revisão rápida

1. Quando um HSM é mais adequado que um TPM?
2. Qual ferramenta ajuda mais na rotação centralizada de chaves?
3. O que um enclave tenta proteger que criptografia em repouso não cobre?

---

## 6. Fontes de referência

- Microsoft Learn, Trusted Platform Module Technology Overview  
  https://learn.microsoft.com/windows/security/hardware-security/tpm/trusted-platform-module-overview
- AWS Key Management Service  
  https://docs.aws.amazon.com/kms/
- AWS CloudHSM  
  https://docs.aws.amazon.com/cloudhsm/
- Microsoft Learn, Confidential Computing  
  https://learn.microsoft.com/azure/confidential-computing/
