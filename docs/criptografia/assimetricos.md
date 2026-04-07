# Algoritmos Assimétricos

> **Objetivos de aprendizagem**
> - Explicar a lógica de pares de chave pública e privada.
> - Diferenciar troca de chaves, criptografia e assinatura digital.
> - Reconhecer os algoritmos assimétricos mais relevantes para Segurança+.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/fyjas9u2LWQ)

---

## 1. O que é criptografia assimétrica

A criptografia assimétrica usa dois elementos relacionados:

- **chave pública**, distribuída livremente;
- **chave privada**, mantida em segredo.

Ela resolve o problema da distribuição de chaves e sustenta autenticação e assinatura digital. A desvantagem é o custo computacional maior.

## 2. Algoritmos principais

| Algoritmo | Melhor uso | Observação |
|---|---|---|
| RSA | Criptografia, assinatura e compatibilidade ampla | Muito usado em legado e PKI |
| Diffie-Hellman | Troca segura de chave | Precisa de autenticação para evitar MITM |
| ECDH / ECDHE | Troca de chave em curvas elípticas | Mais eficiente que DH clássico |
| ECDSA | Assinatura digital | Comum em ambientes modernos |

## 3. O papel da assimétrica no mundo real

Em sistemas modernos, a assimétrica raramente protege grandes volumes de dados diretamente. Ela normalmente:

- autentica o servidor ou o cliente,
- negocia a chave simétrica da sessão,
- assina código, documentos e firmware.

É como usar uma chave mestra só para abrir a sala de chaves, não para abrir todas as portas do prédio.

## 4. Assinatura digital

A assinatura digital combina:

1. um hash do conteúdo,
2. a chave privada do signatário,
3. a verificação com a chave pública correspondente.

Isso oferece autenticidade, integridade e não repúdio. Para Segurança+ essa relação é fundamental.

## 5. Boas práticas

- Use RSA ou ECC com tamanhos compatíveis com a política da organização.
- Prefira ECDHE em trocas efêmeras quando suportado.
- Não use assimétrica para cifrar arquivos grandes.
- Proteja a chave privada em hardware ou módulo validado.

## 6. Mini-caso prático

Uma aplicação de telemetria precisa:

- provar a identidade do servidor,
- trocar uma chave de sessão,
- assinar firmware antes da atualização.

Ela usa certificados para autenticar o servidor, ECDHE para negociar a sessão e assinatura digital para validar o firmware.

## 7. Perguntas de revisão rápida

1. Qual é a diferença entre criptografia assimétrica e assinatura digital?
2. Por que a assimétrica é usada com frequência na fase inicial de uma conexão?
3. O que acontece se uma chave privada for exposta?

## 8. Fontes de referência

- NIST FIPS 186-5, Digital Signature Standard: https://csrc.nist.gov/pubs/fips/186-5/final
- NIST SP 800-56A Rev. 3, Pair-Wise Key-Establishment Schemes: https://csrc.nist.gov/pubs/sp/800/56/a/r3/final
- NIST SP 800-57 Part 1 Rev. 5, Key Management: https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final
- RFC 8446, TLS 1.3: https://datatracker.ietf.org/doc/rfc8446/
