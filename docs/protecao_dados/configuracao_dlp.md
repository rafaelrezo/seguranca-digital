# Configuração de DLP

> **Objetivos de aprendizagem**
> - Entender como transformar política de DLP em regra técnica.
> - Definir escopo, condição, ação e exceção para reduzir falso positivo.
> - Aplicar configuração de DLP em e-mail, armazenamento e colaboração.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. Antes de clicar na ferramenta

Configurar DLP começa fora da ferramenta. Antes de criar regra, a organização precisa saber:

- quais dados quer proteger;
- em quais canais o dado circula;
- o que deve ser bloqueado, alertado ou apenas registrado;
- quem pode aprovar exceções.

Sem isso, a ferramenta vira fonte de ruído.

---

## 2. Os quatro elementos da regra

Uma regra de DLP geralmente tem:

1. **escopo**: usuários, grupos, aplicativos e locais;
2. **condição**: padrão, palavra-chave, classificação, regex ou OCR;
3. **ação**: alertar, bloquear, quarentenar, justificar ou criptografar;
4. **tratamento de exceção**: casos em que o fluxo legítimo não deve ser quebrado.

---

## 3. Onde configurar

Os pontos mais comuns são:

- **e-mail**: impedir envio indevido de dados sensíveis;
- **armazenamento**: bloquear compartilhamento externo;
- **chat e colaboração**: evitar exposição por mensagem;
- **endpoint**: reduzir cópia, impressão e exportação;
- **nuvem**: aplicar regras em arquivos e serviços SaaS.

Tanto Google Workspace quanto Microsoft 365 seguem essa lógica, ainda que mudem a interface.

---

## 4. Boas práticas de implementação

- começar por modo de auditoria;
- validar padrões locais, como CPF ou matrícula;
- testar falso positivo com dados reais e dados parecidos;
- aplicar regra mais rígida primeiro em grupo piloto;
- revisar alertas com quem conhece o processo de negócio.

> Exemplo: uma sequência numérica pode ser CPF ou número de ativo. Sem ajuste fino, o DLP bloqueia trabalho legítimo.

---

## 5. Mini-caso prático

Uma instituição quer impedir compartilhamento externo de planilhas com dados de alunos.

Boa configuração:

- escopo inicial para secretaria e coordenação;
- detecção de CPF, e-mail e termos de matrícula;
- alerta primeiro, bloqueio depois de calibrar;
- exceção formal para comunicação com órgão regulador.

---

## 6. Perguntas de revisão rápida

1. Quais são os quatro elementos básicos de uma regra de DLP?
2. Por que começar em modo de auditoria costuma ser útil?
3. Qual o risco de criar regra sem conhecer o contexto do dado?

---

## 7. Fontes de referência

- Google Workspace Data Loss Prevention  
  https://support.google.com/a/topic/7557701
- Microsoft Purview Data Loss Prevention  
  https://learn.microsoft.com/purview/dlp-learn-about-dlp
- NIST SP 800-122  
  https://csrc.nist.gov/pubs/sp/800/122/final
