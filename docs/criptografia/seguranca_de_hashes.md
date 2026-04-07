# Segurança de Hashes e Armazenamento de Senhas

> **Objetivos de aprendizagem**
> - Explicar como proteger hashes contra ataques offline e reutilização indevida.
> - Diferenciar salting, stretching, pepper e rate limiting.
> - Relacionar segurança de hashes com Pass-the-Hash e armazenamento de senhas.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/H5__Qgtlg6k)

---

## 1. Por que hashes precisam de proteção

Hash não é senha. Um hash vazado pode ser atacado offline com força bruta, dicionário ou tabelas pré-computadas. Em contas corporativas, isso abre caminho para:

- roubo de credenciais,
- movimentação lateral,
- Pass-the-Hash,
- abuso de contas fracas.

## 2. Técnicas de defesa

### 2.1 Salting

O salt é um valor aleatório único por credencial. Ele impede que senhas iguais produzam o mesmo hash e torna rainbow tables inúteis.

### 2.2 Stretching

Key stretching aumenta o custo por tentativa. Os nomes mais lembrados em prova são:

- PBKDF2,
- bcrypt,
- scrypt,
- Argon2.

### 2.3 Pepper

Pepper é um segredo adicional mantido fora do banco de hashes. Ele não substitui o salt; complementa a defesa.

### 2.4 Rate limiting e lockout

Mesmo com hashes fortes, o sistema precisa limitar tentativas repetidas de login.

- poucas tentativas antes de atrasar,
- bloqueio progressivo,
- monitoramento de padrões anormais,
- MFA onde possível.

## 3. Recomendações práticas

| Cenário | Recomendação | Motivo |
|---|---|---|
| Senhas de usuários | Salt + hash com Argon2id ou bcrypt | Resiste melhor a ataque offline |
| Mensagens entre sistemas | HMAC-SHA256 | Autenticidade e integridade |
| Atualização de firmware | SHA-256 + assinatura digital | Verificação de integridade e autoria |
| Acesso administrativo | MFA + rate limiting + logs | Reduz abuso de hashes vazados |

## 4. Pass-the-Hash em linguagem de prova

No Pass-the-Hash, o invasor não precisa descobrir a senha em texto claro. Ele reutiliza o hash capturado para se autenticar em outro ponto. A defesa combina:

- MFA,
- segmentação,
- patching,
- privilégio mínimo,
- redução de credenciais cacheadas.

## 5. Erros comuns

- armazenar hash sem salt,
- usar SHA-1 ou MD5 para senha,
- ignorar lockout e rate limiting,
- tratar hash vazado como se fosse irrelevante,
- permitir reutilização ampla de credenciais administrativas.

## 6. Mini-caso prático

Uma empresa migra de um sistema antigo que guardava senhas com MD5.

O plano correto é:

1. migrar para Argon2id ou bcrypt;
2. adicionar salt único por usuário;
3. redefinir senhas sensíveis;
4. ativar MFA;
5. monitorar login anômalo e limitação de tentativas.

## 7. Perguntas de revisão rápida

1. Qual problema o salt resolve?
2. Por que stretching é importante contra ataques offline?
3. O que torna o Pass-the-Hash perigoso em redes corporativas?

## 8. Fontes de referência

- NIST SP 800-63B, Digital Identity Guidelines: Authentication and Lifecycle Management: https://pages.nist.gov/800-63-4/sp800-63b.html
- NIST SP 800-57 Part 1 Rev. 5, Recommendation for Key Management: https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final
- NIST FIPS 180-4, Secure Hash Standard: https://csrc.nist.gov/pubs/fips/180-4/upd1/final
- NIST Glossary, Hash-Based Message Authentication Code (HMAC): https://csrc.nist.gov/glossary/term/hash_based_message_authentication_code
