# Padrões (Standards) em Governança e Segurança da Informação

## Introdução

Os **padrões (standards)** são um dos principais pilares da **governança de TI**.  
Eles transformam as **políticas** em **regras técnicas e práticas obrigatórias**, assegurando que as medidas de segurança sejam aplicadas de forma **uniforme, mensurável e auditável** em toda a organização.

Esses padrões estabelecem **como as políticas devem ser implementadas**, criando consistência nos controles e permitindo que a segurança evolua junto com as tecnologias e regulamentações.

Nesta lição, vamos explorar os principais padrões usados em governança e segurança:
- Padrões de Senhas  
- Padrões de Controle de Acesso  
- Padrões de Segurança Física  
- Padrões de Criptografia  

---

## 1. Padrões de Senhas (Password Standards)

As **senhas** continuam sendo um dos mecanismos mais comuns e sensíveis da autenticação digital.  
Os padrões de senha definem **níveis mínimos de complexidade, validade e armazenamento seguro**, garantindo que sejam **resistentes a ataques de força bruta, dicionário e engenharia social**.

### Diretrizes típicas:
- **Tamanho mínimo:** entre 8 e 14 caracteres.  
- **Complexidade:** combinação de letras maiúsculas, minúsculas, números e caracteres especiais.  
- **Validade:** renovação a cada **60 a 90 dias**.  
- **Proibição de repetição:** impedir o uso das últimas senhas anteriores.  
- **Bloqueio temporário:** após tentativas consecutivas de falha.  

### Boas práticas complementares:
- Uso de **gerenciadores de senhas** seguros (ex.: Bitwarden, KeePass).  
- **Hashing e salting** de senhas (ex.: Argon2, bcrypt, PBKDF2).  
- Implementação de **autenticação multifator (MFA)**.  

> **Exemplo prático:**  
> A política pode exigir que todos os usuários usem senhas com pelo menos 12 caracteres e que os administradores troquem suas credenciais a cada 60 dias.

> **Paralelo industrial:**  
> Assim como válvulas de segurança têm múltiplos estágios de travamento para evitar falhas catastróficas, senhas devem ter camadas de complexidade e renovação periódica para resistir a tentativas de invasão.

---

## 2. Padrões de Controle de Acesso (Access Control Standards)

Os **padrões de controle de acesso** definem **quem pode acessar o quê**, **quando** e **de que forma**.  
Eles organizam a relação entre **usuários, funções, recursos e níveis de privilégio**, servindo como base para a **autorização** e a **segregação de responsabilidades**.

### 2.1 Modelos Clássicos de Controle de Acesso

#### a) Discretionary Access Control (DAC)
O proprietário do recurso decide quem pode acessá-lo.  
É o modelo mais flexível, mas também o mais suscetível a erros humanos.  
Exemplo: o criador de um documento concede manualmente permissão de leitura a outro usuário.

#### b) Mandatory Access Control (MAC)
O acesso é determinado por **níveis de classificação e rótulos de segurança** (ex.: “Confidencial”, “Secreto”, “Top Secret”).  
Comum em ambientes **militares e governamentais**.  
Exemplo: um usuário com nível “Confidencial” não pode acessar arquivos “Secretos”.

#### c) Role-Based Access Control (RBAC)
O acesso é concedido com base em **funções (roles)** desempenhadas dentro da organização.  
Reduz erros e simplifica a gestão de permissões.  
Exemplo: todos os usuários com o papel de “Analista Financeiro” têm o mesmo conjunto de permissões.

---

### 2.2 Modelos Avançados de Controle de Acesso

#### d) Attribute-Based Access Control (ABAC)
O acesso é concedido com base em **atributos** de usuários, recursos, ações e contexto.  
É mais dinâmico e adaptável.  
Exemplo: um usuário pode acessar um relatório **apenas durante o horário comercial** e **se estiver na rede corporativa**.

> **Analogia industrial:**  
> ABAC é como um sistema SCADA que libera uma válvula apenas se **temperatura**, **pressão** e **nível do tanque** estiverem dentro dos limites seguros.

#### e) Policy-Based Access Control (PBAC)
Similar ao ABAC, mas com foco em **políticas declarativas centralizadas** que são avaliadas por um **PDP (Policy Decision Point)**.  
Essas políticas podem ser escritas em linguagens como **Rego (Open Policy Agent)** ou **FGA (OpenFGA)**.

Exemplo: “Usuários do departamento de Engenharia podem aprovar ordens de serviço apenas se o projeto estiver em fase de testes”.

#### f) Rule-Based Access Control (RuBAC)
O acesso é controlado por **regras predefinidas**, muitas vezes baseadas em eventos ou condições específicas.  
Exemplo: bloquear acesso administrativo durante janelas de manutenção programada.

#### g) Context-Based Access Control (CBAC)
Leva em conta o **contexto de operação** — localização, horário, dispositivo ou tipo de rede.  
Muito usado em **arquiteturas Zero Trust**, onde cada requisição é autenticada e verificada continuamente.

#### h) Risk-Adaptive Access Control (RAdAC)
Acesso ajustado **dinamicamente** com base em avaliação de **risco em tempo real**.  
Exemplo: um login suspeito (localização desconhecida) exige fator adicional de autenticação.

#### i) Relationship-Based Access Control (ReBAC)
Baseia-se em **relações entre entidades**, como “coordenador”, “orientando” ou “colaborador”.  
Usado em sistemas modernos como o **Google Zanzibar** e **OpenFGA**.

Exemplo: um pesquisador pode editar apenas projetos em que ele **mantém uma relação ‘coordenador de’**.

---

### 2.3 Princípios Complementares de Segurança

- **Menor Privilégio (Least Privilege):** cada usuário tem apenas o acesso necessário.  
- **Separação de Funções (Separation of Duties):** impede que uma pessoa controle todas as etapas de um processo crítico.  
- **Auditoria e Rastreamento:** cada ação deve ser registrada para garantir accountability.  
- **Revisão Periódica de Acessos:** os privilégios devem ser reavaliados regularmente.

> **Paralelo industrial:**  
> Em uma refinaria, o operador de caldeira não deve ter permissão para alterar parâmetros de controle químico.  
> Na TI, isso equivale a restringir administradores de banco de dados a não modificarem código de aplicação.

---

## 3. Padrões de Segurança Física (Physical Security Standards)

A **segurança física** protege os **ativos tangíveis** da organização — pessoas, instalações, equipamentos e mídias de armazenamento.

### Controles comuns:
- **Perímetro protegido:** cercas, portões, guaritas e iluminação adequada.  
- **Controle de acesso físico:** catracas, cartões RFID, biometria, PINs ou múltiplos fatores.  
- **Monitoramento contínuo:** câmeras (CCTV), sensores de movimento e alarmes.  
- **Ambientes controlados:**  
  - Salas de servidores com acesso restrito.  
  - Sistemas de supressão de incêndio (CO₂, FM200).  
  - Controle de temperatura e umidade (HVAC).  
  - Redundância elétrica (UPS, geradores).  

> **Exemplo:**  
> A norma **ISO 27002** recomenda a segregação de áreas físicas e o registro de entrada de visitantes em áreas sensíveis.

