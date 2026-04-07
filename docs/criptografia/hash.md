# Hashing, Integridade e Assinaturas

> **Objetivos de aprendizagem**
> - Explicar o que uma função de hash faz e o que ela não faz.
> - Diferenciar hash puro, HMAC e assinatura digital.
> - Reconhecer algoritmos de hash aceitos e algoritmos legados.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/H5__Qgtlg6k)

---

## 1. O que é um hash

Uma função de hash transforma uma entrada de qualquer tamanho em um resumo fixo chamado digest. O objetivo é verificar integridade, não esconder conteúdo.

Se um único caractere muda, o digest também muda de forma perceptível. Isso é útil para:

- validar downloads,
- verificar firmware,
- comparar arquivos,
- detectar adulteração.

## 2. Propriedades desejadas

- **Determinístico**: a mesma entrada gera o mesmo digest.
- **Unidirecional**: não é viável reconstruir a entrada a partir do resumo.
- **Resistente a colisões**: duas entradas diferentes não devem gerar o mesmo digest com facilidade.
- **Efeito avalanche**: pequenas mudanças geram grandes alterações.

## 3. Algoritmos principais

| Algoritmo | Situação | Comentário |
|---|---|---|
| MD5 | Obsoleto | Colisões práticas conhecidas |
| SHA-1 | Depreciado | Não usar para segurança nova |
| SHA-2 | Recomendado | SHA-256 é a escolha mais comum |
| SHA-3 | Recomendado | Projeto diferente, boa opção moderna |
| HMAC | Recomendado | Hash com segredo compartilhado |

## 4. Hash, HMAC e assinatura digital

Essas três coisas são parecidas só na aparência.

- **Hash** verifica integridade.
- **HMAC** verifica integridade e autenticidade com segredo compartilhado.
- **Assinatura digital** verifica integridade, autenticidade e não repúdio com chave privada.

O examinador costuma explorar essa diferença para testar se o aluno entende o objetivo de cada mecanismo.

## 5. Onde hash aparece no dia a dia

- checagem de ISO, binários e pacotes;
- validação de firmware antes da instalação;
- comparação de arquivos em pipeline de atualização;
- construção de assinaturas digitais.

## 6. Boas práticas

1. Padronize **SHA-256** ou **SHA-3** para novos usos de integridade.
2. Evite **MD5** e **SHA-1** em decisões de segurança.
3. Use **HMAC** quando duas partes compartilham segredo.
4. Use **assinatura digital** quando precisar provar autoria.

## 7. Mini-caso prático

Uma equipe publica uma atualização para um sensor remoto.

- O pacote é assinado pelo fabricante.
- O download disponibiliza um SHA-256 para conferência.
- O canal de distribuição usa TLS.
- O dispositivo valida a assinatura antes de instalar.

Assim, a integridade é verificada em mais de uma camada.

## 8. Perguntas de revisão rápida

1. Por que hash não substitui criptografia?
2. O que HMAC acrescenta em relação a um hash puro?
3. Qual algoritmo é o mais adequado para novos sistemas: MD5, SHA-1, SHA-2 ou SHA-3?

## 9. Fontes de referência

- NIST FIPS 180-4, Secure Hash Standard: https://csrc.nist.gov/pubs/fips/180-4/upd1/final
- NIST FIPS 202, SHA-3 Standard: https://csrc.nist.gov/pubs/fips/202/final
- NIST FIPS 198-1, The Keyed-Hash Message Authentication Code (HMAC): https://csrc.nist.gov/pubs/fips/198-1/final
- NIST SP 800-107 Rev. 1, Recommendation for Applications Using Approved Hash Algorithms: https://csrc.nist.gov/pubs/sp/800/107/r1/final
