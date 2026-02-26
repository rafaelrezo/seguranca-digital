# Autorização

> **Objetivos de aprendizagem**
> - Diferenciar autenticação de autorização.
> - Entender RBAC, ABAC e políticas por regras.
> - Definir permissões por menor privilégio.
>
> **Tempo estimado:** 12 minutos

## Vídeo da aula

![type:video](https://www.youtube.com/embed/7ijBiXddB7w)

## 1. O que é Autorização?
Autorização é o processo que determina **o que um usuário pode fazer** dentro de um sistema **após ter sua identidade confirmada** pela autenticação.

**Diferença essencial:**
- **Autenticação:** verifica *quem você é*.
- **Autorização:** define *o que você pode fazer*.

**Exemplo simples:**  
Usar um crachá para entrar em um prédio (autenticação) e poder acessar apenas determinados andares ou salas (autorização).

---

## 2. Por que a Autorização é Importante?

### 2.1 Proteção de Dados Sensíveis
Garante que apenas pessoas autorizadas acessem informações críticas.  
**Exemplo:**  
- Em um hospital:  
  - Enfermeiros veem sinais vitais.  
  - Médicos podem alterar planos de tratamento.  
  - Pacientes acessam apenas parte do prontuário.

### 2.2 Manutenção da Integridade do Sistema
Restringe alterações a usuários capacitados, evitando erros ou manipulações indevidas.  
**Exemplo:**  
- Em software financeiro: todos podem consultar relatórios, mas apenas contadores inserem transações.

### 2.3 Experiência de Usuário Otimizada
Mostra apenas funções e dados relevantes ao papel do usuário, tornando o sistema mais simples e seguro.  
**Exemplo:**  
- Alunos veem quizzes e aulas.  
- Instrutores podem criar ou editar conteúdos.

---

## 3. Tipos de Mecanismos de Autorização

### 3.1 Controle Baseado em Função (RBAC)
Permissões são atribuídas conforme a função do usuário (ex.: administrador, editor, leitor).

### 3.2 Controle Baseado em Regras
Permissões seguem políticas e condições predefinidas (ex.: horário de acesso, origem da conexão).

### 3.3 Controle Baseado em Atributos (ABAC)
Permissões são determinadas por atributos do usuário, do recurso e do contexto (ex.: localização, cargo, nível de confidencialidade).

---

## 4. Ponto-Chave
Autorização é o **porteiro interno** do sistema:  
Depois que ele confirma *quem você é* (autenticação), decide *onde você pode ir* e *o que pode fazer*.  
Isso garante **segurança, integridade e eficiência** no uso de recursos.

---

## 5. Mini-caso prático

No sistema acadêmico, todos os professores têm permissão para editar notas de qualquer turma.

- **Risco:** alteração indevida e falta de segregação de responsabilidades.
- **Correção:** RBAC por disciplina/turma e auditoria de alterações.

---

## 6. Perguntas de revisão rápida

1. Qual diferença prática entre RBAC e ABAC?
2. Qual modelo ajuda quando o contexto (horário/local) importa?
3. O que muda quando aplicamos menor privilégio?
