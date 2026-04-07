# Algoritmos Simétricos

> **Objetivos de aprendizagem**
> - Explicar como a criptografia simétrica protege dados em massa.
> - Distinguir algoritmos e modos de operação relevantes para Segurança+.
> - Reconhecer quando um algoritmo está legado, obsoleto ou recomendado.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

---

## 1. O que é criptografia simétrica

Na criptografia simétrica, a mesma chave cifra e decifra o dado. Isso a torna rápida e adequada para:

- discos e backups,
- túneis VPN,
- tráfego TLS após a troca inicial de chaves,
- volumes grandes de informação.

A limitação central é operacional: se uma chave vazar, todo o tráfego ou dado protegido por ela fica exposto.

## 2. Algoritmos importantes

| Algoritmo | Situação atual | Uso típico | Observação |
|---|---|---|---|
| AES | Recomendado | Dados em repouso e trânsito | Padrão moderno |
| 3DES | Legado | Sistemas antigos | Deve ser evitado em novos projetos |
| DES | Obsoleto | Muito antigo | Chave pequena, inseguro |
| ChaCha20-Poly1305 | Recomendado | Software e dispositivos sem aceleração AES | AEAD moderno |

AES continua sendo o nome mais cobrado em prova. Para o examinador, o ponto não é decorar siglas de legado, e sim saber que DES e 3DES são escolhas ruins hoje.

## 3. Modos de operação

O algoritmo não anda sozinho. O modo muda como os blocos são processados.

- **ECB**: simples, mas expõe padrões. Não é indicado para dados sensíveis.
- **CBC**: antigo, ainda encontrado em legado.
- **CTR**: transforma a cifra em algo semelhante a um fluxo.
- **GCM**: muito importante porque entrega confidencialidade e integridade ao mesmo tempo.

Se a questão falar em autenticidade e confidencialidade combinadas, GCM é uma resposta muito forte.

## 4. Boas práticas

1. Use **AES-128, AES-192 ou AES-256** conforme a política da organização.
2. Prefira **AEAD** quando possível, como AES-GCM ou ChaCha20-Poly1305.
3. Elimine **DES**, **3DES** e outros algoritmos legados em novos sistemas.
4. Não reutilize vetor de inicialização ou nonce quando o modo exigir unicidade.

## 5. Erro clássico de prova

Uma cifra forte com configuração ruim continua sendo insegura. O modo de operação, o reuso de nonce, a qualidade da implementação e o gerenciamento de chave importam tanto quanto o algoritmo.

## 6. Mini-caso prático

Uma equipe precisa proteger:

- o banco de dados de um portal de clientes,
- o backup noturno,
- o túnel entre matriz e filial.

Ela usa AES para o backup, TLS com AEAD no portal e uma VPN com cifras modernas. DES e 3DES ficam fora do desenho.

## 7. Perguntas de revisão rápida

1. Por que a criptografia simétrica é mais rápida que a assimétrica?
2. Qual modo é mais seguro para unir confidencialidade e integridade?
3. Por que DES e 3DES não são boas escolhas hoje?

## 8. Fontes de referência

- NIST FIPS 197, Advanced Encryption Standard (AES): https://csrc.nist.gov/pubs/fips/197/final
- NIST SP 800-131A Rev. 2, Transitioning the Use of Cryptographic Algorithms and Key Lengths: https://csrc.nist.gov/pubs/sp/800/131/a/r2/final
- RFC 8439, ChaCha20 and Poly1305 for IETF Protocols: https://datatracker.ietf.org/doc/rfc8439/
- NIST FIPS 140-3, Security Requirements for Cryptographic Modules: https://www.nist.gov/publications/security-requirements-cryptographic-modules-0
