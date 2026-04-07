# Padrões de Governança

> **Objetivos de aprendizagem**
> - Diferenciar padrão de política e de procedimento.
> - Reconhecer padrões mínimos em senhas, acesso, criptografia e logging.
> - Entender por que padrões tornam segurança mensurável e auditável.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/P4nNJk76xFo)

## 1. O que é um padrão

Padrão é a tradução técnica e obrigatória de uma política.

Se a política diz "contas privilegiadas devem ser protegidas", o padrão diz algo como:

- MFA obrigatório;
- senha mínima de 14 caracteres;
- sessão registrada;
- revisão trimestral de acesso.

Padrões existem para reduzir ambiguidade.

---

## 2. Exemplos de padrões comuns

| Área | Exemplo de padrão | Objetivo |
|---|---|---|
| **Senhas** | comprimento mínimo, bloqueio por tentativa, armazenamento com hash forte | reduzir comprometimento de credenciais |
| **Acesso** | MFA para admins, menor privilégio, revisão periódica | limitar abuso de identidade |
| **Criptografia** | TLS moderno, algoritmo aceito, rotação de chaves | proteger dados e comunicações |
| **Logs** | retenção mínima, sincronismo de horário, integridade | sustentar investigação e auditoria |
| **Mudanças** | RFC, aprovação, teste, rollback | reduzir falha operacional |

---

## 3. Como padrões ajudam a auditoria

Auditar política isolada é difícil. Auditar padrão é mais direto, porque ele permite verificar:

- existe MFA ou não;
- o log é retido pelo prazo mínimo ou não;
- a criptografia exigida foi aplicada ou não.

Ou seja: padrão transforma intenção em critério objetivo.

---

## 4. Erros comuns

- definir padrão impossível de sustentar;
- manter padrão antigo só por legado;
- criar exceção informal sem prazo;
- confundir recomendação com requisito obrigatório.

Em segurança, padrão bom é o que a organização consegue aplicar, revisar e provar.

---

## 5. Mini-caso prático

Uma política exige "senhas seguras", mas não existe padrão formal. Cada sistema adota um critério diferente.

Consequências:

- contas críticas sem uniformidade;
- usuário reutiliza credenciais fracas;
- auditoria não consegue medir aderência.

Quando o padrão é definido, a política deixa de ser genérica e vira controle verificável.

---

## 6. Perguntas de revisão rápida

1. Qual a função principal de um padrão?
2. Por que padrões ajudam auditoria mais do que políticas genéricas?
3. Qual a diferença entre requisito obrigatório e guideline?

---

## 7. Fontes de referência

- NIST SP 800-63B, Digital Identity Guidelines  
  https://pages.nist.gov/800-63-3/sp800-63b.html
- NIST SP 800-52 Rev. 2, Guidelines for the Selection, Configuration, and Use of TLS Implementations  
  https://csrc.nist.gov/pubs/sp/800/52/r2/final
- CIS Critical Security Controls  
  https://www.cisecurity.org/controls
