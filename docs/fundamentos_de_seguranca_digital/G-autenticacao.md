# Autenticação

> **Objetivos de aprendizagem**
> - Entender a função da autenticação no controle de acesso.
> - Diferenciar fatores de autenticação.
> - Aplicar MFA em cenários de risco.
>
> **Tempo estimado:** 12 minutos

## Vídeo da aula

![type:video](https://www.youtube.com/embed/7ijBiXddB7w)

## 1. O que é Autenticação?
Autenticação é o processo de **verificar a identidade** de pessoas ou sistemas em interações digitais, confirmando que são quem afirmam ser.

**Exemplo simples:**  

Ao receber uma carta do órgão de arrecadação de impostos com seu número de documento e informações corretas de pagamento, você confia mais nela do que em uma carta anônima solicitando dinheiro.


## 2. Por que a Autenticação é Importante?

### 2.1 Prevenir Acesso Não Autorizado

Bloqueia invasores e usuários não autorizados, protegendo sistemas e dados críticos.  
**Exemplo:** Conta bancária online protegida por senha e segundo fator.

### 2.2 Proteger Dados e Privacidade

Garante que informações pessoais (como dados médicos) sejam acessadas apenas pelos legítimos donos ou profissionais autorizados.

### 2.3 Garantir Uso Válido de Recursos

Evita que usuários não autenticados consumam recursos de rede, armazenamento ou serviços corporativos.


## 3. Cinco Fatores de Autenticação

### 3.1 Algo que Você Sabe (Knowledge Factor)

- Senhas, PINs, frases secretas.
- Baseia-se em informações que só o usuário conhece.

### 3.2 Algo que Você Tem (Possession Factor)

- Cartões de acesso, tokens físicos, códigos por SMS.
- Baseia-se na posse de um item físico ou virtual.

### 3.3 Algo que Você É (Inherence Factor)

- Impressão digital, reconhecimento facial, íris.
- Baseia-se em características biométricas únicas.

### 3.4 Algo que Você Faz (Action Factor)

- Assinatura manual, padrão de digitação, gestos.
- Baseia-se em ações ou comportamentos característicos.

### 3.5 Algum Lugar Onde Você Está (Location Factor)

- Verificação de localização geográfica.
- Uso de geofencing para liberar acesso apenas em áreas específicas.



## 4. Autenticação de Múltiplos Fatores (MFA)

- **2FA (Two-Factor Authentication):** Uso de dois fatores diferentes.
- **MFA (Multi-Factor Authentication):** Uso de dois ou mais fatores.
- Aumenta a segurança, pois mesmo que um fator seja comprometido, o invasor ainda precisa de outro para obter acesso.



## 5. Ponto-Chave
Autenticação é como um **porteiro digital**, controlando quem entra e o que pode acessar.  
Quanto mais fatores combinamos, mais difícil fica para um invasor se passar por um usuário legítimo.

---

## 6. Mini-caso prático

Um aluno usa a mesma senha em e-mail, AVA e rede social. Após vazamento externo, sua conta institucional é invadida.

- **Falha principal:** autenticação baseada em um único fator reutilizado.
- **Correção:** MFA + política de senha única + gestor de senhas.

---

## 7. Perguntas de revisão rápida

1. Qual a diferença entre 2FA e MFA?
2. SMS é fator de posse ou conhecimento?
3. Em quais situações você exigiria reautenticação?
