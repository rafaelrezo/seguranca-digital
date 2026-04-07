# Infraestrutura de Chaves Públicas (PKI)

> **Objetivos de aprendizagem**
> - Explicar o papel da PKI na confiança digital.
> - Identificar CA, RA, cadeia de certificação, CRL e OCSP.
> - Relacionar PKI com TLS, mTLS e assinatura digital.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/qoO84zK3aJY)

---

## 1. O que é PKI

PKI é a estrutura que permite usar criptografia de chave pública em escala com confiança. Ela combina pessoas, processos, políticas e tecnologia para emitir, validar e revogar certificados.

Sem PKI, a chave pública até existe, mas a confiança nela é fraca. Com PKI, a organização consegue responder:

- quem é este servidor,
- quem é este usuário,
- se o certificado ainda é válido,
- se a identidade continua confiável.

## 2. Componentes principais

| Componente | Função |
|---|---|
| CA | Emite e assina certificados |
| RA | Valida identidade do solicitante |
| Certificado | Vincula identidade à chave pública |
| Root CA | Raiz de confiança |
| Intermediate CA | Intermedia emissão e reduz exposição da raiz |
| CRL | Lista de certificados revogados |
| OCSP | Verifica status de um certificado em tempo real |

## 3. Como a confiança é construída

A cadeia de confiança normalmente segue este caminho:

Root CA -> Intermediate CA -> Certificado final.

Se um elo compromete a confiança, o certificado deixa de ser aceito. Isso é comum em:

- HTTPS,
- assinatura de código,
- VPN com certificados,
- mTLS entre serviços.

## 4. Ciclo de vida

1. Geração do par de chaves.
2. Envio da CSR.
3. Validação pela RA ou CA.
4. Emissão do certificado.
5. Uso operacional.
6. Renovação antes do vencimento.
7. Revogação quando necessário.

O ponto mais negligenciado é a renovação. Em ambientes reais, certificado expirado derruba serviço sem precisar de ataque sofisticado.

## 5. Boas práticas

- Proteja chaves privadas em HSM, TPM ou mecanismo equivalente.
- Prefira CA intermediária para limitar impacto.
- Automatize renovação e inventário.
- Monitore expiração e revogação.
- Use mTLS em integrações sensíveis.

## 6. Mini-caso prático

Uma empresa integra três sistemas:

- portal web,
- API interna,
- túnel com filial.

A solução correta é emitir certificados por perfil, validar status com OCSP ou CRL e automatizar renovação antes do vencimento.

## 7. Perguntas de revisão rápida

1. Qual a diferença entre CA e RA?
2. O que a PKI adiciona além da criptografia assimétrica?
3. Por que revogação e expiração precisam de monitoramento?

## 8. Fontes de referência

- RFC 5280, Internet X.509 Public Key Infrastructure Certificate and CRL Profile: https://datatracker.ietf.org/doc/rfc5280/
- RFC 6960, Online Certificate Status Protocol (OCSP): https://datatracker.ietf.org/doc/rfc6960/
- NIST SP 800-57 Part 1 Rev. 5, Recommendation for Key Management: https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final
- NIST FIPS 140-3, Security Requirements for Cryptographic Modules: https://www.nist.gov/publications/security-requirements-cryptographic-modules-0
