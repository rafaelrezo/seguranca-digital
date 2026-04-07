# Certificados Digitais X.509

> **Objetivos de aprendizagem**
> - Identificar os campos essenciais de um certificado X.509.
> - Diferenciar tipos de certificado e cenários de uso.
> - Interpretar cadeia de confiança, validade e revogação.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/qoO84zK3aJY)

---

## 1. O que é um certificado digital

Certificado digital é um documento assinado que associa uma identidade a uma chave pública. Em Segurança+ ele aparece como a peça que liga autenticação, TLS e assinatura de código.

## 2. Estrutura básica de um X.509

| Campo | O que indica |
|---|---|
| Subject | Identidade do titular |
| Issuer | CA que assinou o certificado |
| Serial Number | Identificador único |
| Validity | Data de início e expiração |
| Public Key | Chave pública do titular |
| SAN | Nomes alternativos válidos |
| Key Usage | Para que o certificado pode ser usado |
| Extended Key Usage | Uso estendido, como TLS server auth ou client auth |

## 3. Tipos comuns

- **Self-signed**: útil em laboratório e ambientes controlados.
- **Certificate Authority issued**: recomendado para produção.
- **Wildcard**: cobre vários subdomínios.
- **SAN certificate**: cobre múltiplos nomes diferentes.
- **Client certificate**: autentica usuário, máquina ou serviço.

## 4. O que validar ao inspecionar um certificado

1. Nome do sujeito e SAN.
2. Emissor confiável.
3. Período de validade.
4. Algoritmo de assinatura.
5. Uso permitido.
6. Situação de revogação.

Se o nome do site não bate com o SAN, o navegador deve alertar. Isso não é detalhe visual; é a verificação da identidade.

## 5. Cadeia e revogação

Um certificado é confiável porque a CA raiz é confiável. Entre os mecanismos de revogação mais lembrados estão:

- **CRL**,
- **OCSP**,
- **OCSP stapling**.

Quando um certificado é comprometido, revogação é tão importante quanto expiração.

## 6. Mini-caso prático

Uma equipe publica uma API sensível.

- A API recebe um certificado SAN com o domínio correto.
- O certificado é emitido por uma CA intermediária.
- O cliente valida a cadeia até a raiz confiável.
- O status é checado por OCSP.

## 7. Perguntas de revisão rápida

1. O que o campo SAN resolve?
2. Qual a diferença entre CRL e OCSP?
3. Por que certificado expirado pode causar indisponibilidade?

## 8. Fontes de referência

- RFC 5280, Internet X.509 PKI Certificate and CRL Profile: https://datatracker.ietf.org/doc/rfc5280/
- RFC 6960, Online Certificate Status Protocol (OCSP): https://datatracker.ietf.org/doc/rfc6960/
- RFC 6818, Updates to RFC 5280: https://datatracker.ietf.org/doc/rfc6818/
- NIST SP 800-52 Rev. 2, Guidelines for TLS Implementations: https://csrc.nist.gov/pubs/sp/800/52/r2/final
