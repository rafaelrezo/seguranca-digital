# Blockchain: Conceitos, Limites e Uso Prático

> **Objetivos de aprendizagem**
> - Explicar como o blockchain usa hash, encadeamento e consenso para manter integridade.
> - Diferenciar blockchain público, permissionado e smart contracts.
> - Reconhecer onde o blockchain agrega valor e onde ele não resolve o problema de segurança.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

## 1. O que blockchain faz bem

Blockchain é um registro compartilhado em que blocos são encadeados de forma que alterações indevidas se tornem evidentes.

Ele costuma ser útil quando várias partes precisam:

- registrar eventos;
- validar integridade;
- manter histórico rastreável;
- reduzir dependência de um único intermediário.

---

## 2. Elementos essenciais

| Elemento | Função |
|---|---|
| **Hash do bloco anterior** | liga um bloco ao outro |
| **Timestamp e dados** | registram o evento |
| **Mecanismo de consenso** | define como a rede aceita mudanças |
| **Merkle tree** | ajuda a validar integridade das transações |

O ponto importante é que blockchain depende de criptografia, mas não substitui PKI, IAM ou governança.

---

## 3. Público vs. permissionado

| Tipo | Melhor uso | Vantagem | Limitação |
|---|---|---|---|
| **Público** | ecossistemas abertos | alta descentralização | menor privacidade e maior custo operacional |
| **Permissionado** | consórcios e ambientes corporativos | controle de participantes | ainda exige confiança e governança |

Em contexto empresarial, permissioned blockchain costuma fazer mais sentido do que copiar o modelo de criptomoedas.

---

## 4. Smart contracts

Smart contracts são regras codificadas que executam ações quando condições são atendidas.

Eles podem ajudar em:

- rastreabilidade de supply chain;
- automação de liberação de etapa;
- registro de evento auditável.

Mas também trazem risco: código errado ou lógica mal modelada pode automatizar erro em escala.

---

## 5. O que blockchain não resolve sozinho

- qualidade do dado de entrada;
- autenticação forte de quem registra;
- segurança do endpoint;
- proteção de segredo fora da cadeia;
- conformidade regulatória.

> Analogia: um livro-caixa pode ser muito bem protegido, mas ainda depende de quem escreve a entrada. Se o dado de origem for ruim, a trilha só preserva o erro.

---

## 6. Mini-caso prático

Um consórcio logístico quer rastrear peças críticas desde o fabricante até a instalação.

Blockchain pode ajudar a:

- registrar cada transferência;
- provar ordem temporal dos eventos;
- reduzir disputa sobre quem alterou o histórico.

Mas a solução ainda depende de:

- identidade confiável dos participantes;
- validação do dado de origem;
- regras claras de governança.

---

## 7. Perguntas de revisão rápida

1. Qual a diferença entre blockchain público e permissionado?
2. Por que blockchain não substitui autenticação forte?
3. Que problema o smart contract resolve e que risco ele cria?

---

## 8. Fontes de referência

- NISTIR 8202, Blockchain Technology Overview  
  https://csrc.nist.gov/pubs/ir/8202/final
- Hyperledger Foundation  
  https://www.hyperledger.org/
