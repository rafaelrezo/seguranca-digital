# Não Repúdio (Non-Repudiation)

> **Objetivos de aprendizagem**
> - Entender o princípio de não repúdio.
> - Relacionar não repúdio com assinatura digital e PKI.
> - Reconhecer evidências digitais para auditoria.
>
> **Tempo estimado:** 10 minutos

## Vídeo da aula

![type:video](https://www.youtube.com/embed/UlRCVihN3pE)

## 1. O que é Não Repúdio?
Não repúdio é o princípio que garante **prova incontestável** de que uma pessoa ou entidade participou de uma comunicação ou transação digital, impedindo que ela negue a autoria ou o envolvimento.

**Exemplo simples:**  
Enviar uma carta registrada que exige assinatura na entrega — a assinatura confirma que o destinatário recebeu e não pode negar.

---

## 2. Origem e Exemplo Histórico
Antes da era digital, reis e nobres usavam **anéis-sinete** para imprimir um selo de cera único em documentos oficiais.  
Esse selo era prova de autenticidade, pois apenas o proprietário do anel poderia produzi-lo.

---

## 3. Como Funciona no Mundo Digital
No ambiente digital, o não repúdio é implementado principalmente através de **assinaturas digitais**.

**Passos básicos:**
1. Gerar um **hash** (resumo criptográfico) da mensagem ou transação.
2. Criptografar esse hash usando a **chave privada** do remetente.
3. O destinatário pode verificar a assinatura usando a **chave pública** correspondente.

**Benefícios:**
- Garante que o remetente é quem afirma ser (**autenticidade**).
- Garante que o conteúdo não foi alterado (**integridade**).

---

## 4. Por que o Não Repúdio é Importante?

### 4.1 Confirmar Autenticidade de Transações Digitais
Evita que alguém negue ter enviado uma mensagem ou realizado uma ação.  
**Exemplo:** Um e-mail assinado digitalmente para um corretor de ações solicitando a venda de ativos.

### 4.2 Garantir Integridade
Alterações no conteúdo quebram o vínculo com a assinatura digital, denunciando qualquer modificação não autorizada.

### 4.3 Prover Responsabilidade (Accountability)
Ações ficam associadas a um usuário específico, incentivando comportamento responsável.  
**Exemplo:** Aplicativos de seguro de carro que registram dados de direção vinculados ao motorista autenticado.

---

## 5. Ferramenta Principal: Assinatura Digital
A assinatura digital é para o mundo eletrônico o que o anel-sinete foi para a Idade Média:  
uma **marca única e comprovável** que liga o autor a uma mensagem ou ação.

---

## 6. Ponto-Chave
Sempre que ouvir o termo **não repúdio**, associe a **assinaturas digitais**.  
Elas são essenciais para criar **confiança, autenticidade e responsabilização** nas interações digitais.

---

## 7. Mini-caso prático

Um fornecedor diz que não autorizou uma ordem de compra enviada por e-mail.

- **Problema:** ausência de prova forte de autoria.
- **Controle recomendado:** assinatura digital com certificado válido e guarda de logs da transação.

---

## 8. Perguntas de revisão rápida

1. Qual evidência técnica reduz a negação de autoria?
2. Não repúdio depende de qual par de chaves?
3. Por que logs sozinhos podem não ser suficientes?
