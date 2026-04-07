# Tipos de Criptografia e Primitivas Criptográficas

> **Objetivos de aprendizagem**
> - Diferenciar as principais primitivas criptográficas e seus usos corretos.
> - Reconhecer quando usar simétrica, assimétrica, hash, HMAC, assinatura digital e PKI.
> - Escolher a combinação adequada para confidencialidade, integridade e autenticidade.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

---

## 1. Visão geral

Criptografia não é uma ferramenta única. Ela é um conjunto de primitivas que resolvem problemas diferentes. Em Segurança+ isso aparece com frequência em perguntas como:

- o que cifra dados,
- o que só verifica integridade,
- o que prova autoria,
- o que cria confiança entre partes.

## 2. Comparativo das primitivas

| Categoria | Melhor uso | Esforço | Entregável | Limitação |
|---|---|---|---|---|
| Simétrica | Cifrar grandes volumes | Baixo | Confidencialidade | Distribuição da chave |
| Assimétrica | Trocar chaves e assinar | Médio/alto | Autenticidade e não repúdio | Mais lenta |
| Hash | Verificar integridade | Baixo | Digest | Não mantém segredo |
| HMAC | Integridade com segredo | Baixo/médio | Mensagem autenticada | Requer chave compartilhada |
| Assinatura digital | Provar autoria e integridade | Médio | Evidência criptográfica | Depende de PKI |
| PKI | Escalar confiança | Alto | Cadeia de confiança | Revogação e ciclo de vida |

## 3. Como combinar as primitivas

Em sistemas reais, quase nunca se usa apenas uma técnica.

- A simétrica protege o conteúdo.
- A assimétrica negocia a sessão ou assina.
- O hash gera o resumo do conteúdo.
- O HMAC valida mensagens entre sistemas que compartilham segredo.
- A PKI valida identidades e certificados.

Pense como um prédio com portas diferentes: a fechadura do apartamento não faz o trabalho da portaria, e a portaria não substitui a fechadura do cofre.

## 4. O que o Security+ costuma cobrar

1. **Confidencialidade** vem de cifragem.
2. **Integridade** vem de hash ou assinatura.
3. **Autenticidade** vem de assinatura, HMAC ou certificado válido.
4. **Não repúdio** vem de assinatura digital com chave privada sob controle do signatário.

## 5. Erros conceituais comuns

- Hash não cifra dado.
- Assinatura digital não é o mesmo que criptografar um arquivo inteiro.
- PKI não é algoritmo; é a infraestrutura que sustenta a confiança.
- Simétrica não significa insegura; significa que a mesma chave é usada nos dois lados.

## 6. Mini-caso prático

Uma empresa precisa publicar relatórios financeiros para um portal e integrar esse portal com sistemas internos.

- O arquivo final é assinado digitalmente.
- O portal usa TLS.
- A integração entre serviços usa HMAC.
- Os certificados são emitidos por uma CA interna.

Nesse cenário, a equipe usa cada primitiva para uma função distinta, sem tentar fazer a mesma técnica resolver tudo.

## 7. Perguntas de revisão rápida

1. Qual é a diferença entre hash e assinatura digital?
2. Por que a assimétrica costuma ser combinada com a simétrica?
3. Qual componente adiciona confiança em escala?

## 8. Fontes de referência

- NIST FIPS 197, Advanced Encryption Standard (AES): https://csrc.nist.gov/pubs/fips/197/final
- NIST FIPS 180-4, Secure Hash Standard: https://csrc.nist.gov/pubs/fips/180-4/upd1/final
- NIST FIPS 186-5, Digital Signature Standard: https://csrc.nist.gov/pubs/fips/186-5/final
- RFC 5280, Internet X.509 PKI Certificate and CRL Profile: https://datatracker.ietf.org/doc/rfc5280/
