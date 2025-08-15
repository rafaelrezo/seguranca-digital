# Conceitos Básicos

Este documento apresenta os principais conceitos de segurança da informação e sistemas, com explicações detalhadas para que o leitor possa aprender diretamente pelo conteúdo.

---

## 1. Segurança vs. Usabilidade

Segurança e conveniência estão quase sempre em **conflito direto**:

- **Mais segurança** → geralmente significa **menos conveniência** para o usuário.  

- **Mais conveniência** → geralmente significa **menos segurança**.

**Exemplo prático:**  

Um provedor de internet entrega um modem com senha Wi-Fi longa e complexa (ex.: `3%1WT&!92#SXH`).  

O usuário, para facilitar o uso, troca para algo simples como `cupcake#1`.

- Isso facilita a memorização, **mas** torna o sistema **mais vulnerável a ataques**.

**Conclusão:**  

Profissionais de cibersegurança precisam **equilibrar** facilidade de uso e proteção, evitando que o usuário tenha motivos para **burlar as medidas de 
segurança**.

---

## 2. Definições-Chave

### 2.1 Segurança da Informação (*Information Security*)  
Ato de **proteger dados** contra:

- Acesso não autorizado
- Modificação ilícita
- Divulgação indevida
- Corrupção ou destruição

> Foco: **o que** está sendo protegido → o dado em si.

---

### 2.2 Segurança de Sistemas de Informação (*Information System Security*)  

Ato de **proteger sistemas** que armazenam e processam dados, como:

- Computadores
- Servidores
- Dispositivos móveis
- Equipamentos de rede

> Foco: **onde** o dado está armazenado ou processado.

---

### 2.3 Segurança no Contexto Industrial  

No setor industrial, segurança inclui:

- **Cibersegurança** (*Cybersecurity*): proteção contra ataques digitais.
  
- **Safety**: proteção física de pessoas, meio ambiente e equipamentos, evitando:
  - Acidentes
  - Explosões
  - Vazamentos
  - Paradas de produção

> Aqui, a **integridade física e operacional** é tão importante quanto a segurança digital.

---

## 3. Tríade C.I.A

A base da segurança da informação é formada por três pilares:

1. **Confidencialidade**  
   Garantir que **apenas pessoas autorizadas** possam acessar a informação.  
   - Ex.: Criptografar arquivos sensíveis.
   
2. **Integridade**  
   Garantir que os dados **permaneçam corretos e inalterados**, exceto quando autorizado.  
   - Ex.: Uso de *checksums* para verificar alterações em arquivos.
   
3. **Disponibilidade**  
   Garantir que a informação esteja **acessível quando necessária**.  
   - Ex.: Servidores com redundância para evitar indisponibilidade.

> **Lembre-se:** Quebrar qualquer um desses pilares significa comprometer a segurança.

---

## 4. Modelo Ampliado – C.I.A.N.A

A tríade evoluiu para incluir mais dois conceitos:

- **N – Não-repúdio**  
  Garantir que uma ação **não possa ser negada** por quem a realizou.  
  - Ex.: Assinatura digital em um e-mail.

- **A – Autenticação**  
  Garantir que quem acessa um sistema **é realmente quem diz ser**.  
  - Ex.: Verificação de usuário e senha.

Essa ampliação conecta-se ao conceito dos **AAA** da segurança.

---

## 5. AAA da Segurança

1. **Autenticação** (*Authentication*)  
   Verifica a identidade do usuário ou sistema.  
   - Ex.: Login com usuário e senha.

2. **Autorização** (*Authorization*)  
   Define o que um usuário autenticado pode fazer.  
   - Ex.: Permitir leitura de dados, mas não alteração.

3. **Accounting (Auditoria/Rastreamento)**  
   Registra atividades para auditoria ou cobrança.  
   - Ex.: Logs de acesso e ações do usuário.

---

## 6. Controles de Segurança

**Categorias**:
- **Técnicos** – implementados via tecnologia (ex.: firewalls, criptografia).  
- **Gerenciais** – baseados em políticas e processos (ex.: gestão de riscos).  
- **Operacionais** – realizados por pessoas (ex.: treinamentos, monitoramento).  
- **Físicos** – barreiras físicas (ex.: portas com cadeado, câmeras).

**Tipos**:
- **Preventivos** – evitam incidentes antes de acontecerem.  
- **Dissuasivos** – desestimulam ações maliciosas.  
- **Detectivos** – identificam incidentes.  
- **Corretivos** – corrigem problemas após um incidente.  
- **Compensatórios** – medidas alternativas quando um controle primário não pode ser usado.  
- **Diretivos** – orientam comportamentos e ações.

---

## 7. Modelo Zero Trust

**Princípio:** *Nunca confiar, sempre verificar*.  
**Regra:** Sempre verificar antes de conceder acesso.

O modelo **Zero Trust** parte da ideia de que **ninguém é confiável por padrão** — nem mesmo usuários, dispositivos ou aplicações que já estejam dentro da rede da empresa. Isso significa que **todo acesso precisa ser validado** de forma contínua, a cada ação ou solicitação.

---

### 🔍 Por que isso é importante?
Antigamente, a segurança de redes seguia o modelo de **castelo e fosso**: tudo dentro da rede era confiável, e o perigo vinha de fora. No Zero Trust, **o perigo pode estar em qualquer lugar** — inclusive já dentro da rede —, então as verificações são constantes.

---

## 🔧 Planos no Zero Trust

O Zero Trust funciona como um conjunto de **camadas de decisão e execução**.  
Essas camadas são chamadas de **Plano de Controle** e **Plano de Dados**.

---

### 1. Plano de Controle (*Control Plane*)

É **o cérebro do sistema de segurança**. Ele decide **quem pode fazer o quê**, **quando** e **como**.  

Pense nele como um **sistema de segurança de um prédio inteligente** que avalia:

- Quem está tentando entrar.
- Qual é a identidade dessa pessoa.
- Qual área ela pode acessar.
- Em que condições ela pode estar lá.

**Funções principais:**

- **Identidade adaptativa:** o sistema analisa mais do que um simples login e senha. Ele pode considerar a localização, horário, dispositivo usado, e até o comportamento do usuário para reforçar a segurança.
- **Redução da superfície de ataque:** limita os caminhos que um invasor poderia usar para atacar, permitindo acesso apenas ao que é estritamente necessário.
- **Acesso baseado em políticas:** as permissões seguem regras definidas (políticas), e não apenas a vontade de um administrador.
- **Zonas seguras:** separa diferentes partes da rede em áreas controladas, para que um problema em uma não afete as demais.

---

### 2. Plano de Dados (*Data Plane*)
É **o executor das decisões** tomadas pelo Plano de Controle.  
Pense nele como os **guardas e catracas** que realmente permitem ou bloqueiam a entrada, seguindo as ordens do “cérebro” (Plano de Controle).

**Funções principais:**
- **Motor de políticas:** aplica as regras definidas pelo Plano de Controle.
- **Administrador de políticas:** gerencia e atualiza as regras de segurança para que sempre estejam corretas e alinhadas com a estratégia da organização.
- **Pontos de aplicação de políticas:** são os locais físicos ou virtuais onde a regra é aplicada — por exemplo, um firewall, um proxy, um agente no computador do usuário ou até um serviço em nuvem.

---

> Em resumo:  
> - **Plano de Controle:** pensa, decide e planeja (quem pode acessar e como).  
> - **Plano de Dados:** executa e aplica essas decisões no dia a dia