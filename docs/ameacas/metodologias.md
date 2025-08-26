# Metodologias de Análise de Ameaças em Cibersegurança

A **análise de ameaças** é um processo essencial para entender os riscos que podem comprometer a segurança de sistemas, dados e operações de uma organização. Existem diversas metodologias reconhecidas no mercado e na academia que ajudam profissionais a **identificar, classificar, priorizar e responder** a ameaças de maneira sistemática.

A seguir, vamos explorar as principais metodologias, seus objetivos, aplicações práticas e exemplos.

---

## 1. STRIDE

- **Origem:** Criada pela Microsoft.  
- **Objetivo:** Identificar diferentes tipos de ameaças em sistemas e aplicações.  
- **Funcionamento:** O nome STRIDE é um acrônimo que representa seis categorias de ameaças:
- **Mais informações**: [What is STRIDE threat model?](https://www.practical-devsecops.com/what-is-stride-threat-model/?srsltid=AfmBOoowqYbc8LJ8fqniz3US56mCB4vICAzu9AevK5w3xwANnkvXx-n0)

| Letra | Tipo de ameaça | Explicação |
|-------|----------------|------------|
| **S** | **Spoofing** | Quando alguém falsifica a identidade de outro usuário (ex.: login com credenciais roubadas). |
| **T** | **Tampering** | Alteração de dados sem autorização (ex.: modificar configurações de um sistema). |
| **R** | **Repudiation** | Quando o autor de uma ação nega tê-la realizado, e não há provas suficientes para contestar. |
| **I** | **Information Disclosure** | Vazamento de informações sensíveis (ex.: dados pessoais expostos em um site). |
| **D** | **Denial of Service** | Ataques que impedem o acesso a sistemas (ex.: DDoS). |
| **E** | **Elevation of Privilege** | Quando um usuário comum consegue permissões de administrador. |

**Exemplo prático:**  
Ao analisar um aplicativo bancário, a equipe de segurança pode aplicar STRIDE para verificar se o app está protegido contra falsificação de identidade (Spoofing) ou contra vazamento de dados sensíveis (Information Disclosure).

---

## 2. DREAD

- **Origem:** Criada também pela Microsoft.  
- **Objetivo:** Priorizar ameaças com base no **risco**.  
- **Funcionamento:** Cada ameaça é avaliada em **cinco dimensões**, geralmente em uma escala de 1 a 10:
- **Mais informações:** [DREAD Threat Modeling Methology](https://www.practical-devsecops.com/dread-threat-modeling/?srsltid=AfmBOopsgihg1_oI_W1TOwjr4SJ2vv1OYkldTjD3PRxjCh7CJ_ZGezAZ)

1. **Damage Potential (Potencial de dano):** Quanto impacto a ameaça pode causar?  
2. **Reproducibility (Reprodutibilidade):** O ataque pode ser facilmente repetido?  
3. **Exploitability (Explorabilidade):** É fácil ou difícil explorar essa falha?  
4. **Affected Users (Usuários afetados):** Quantos usuários seriam impactados?  
5. **Discoverability (Descobribilidade):** A falha pode ser facilmente descoberta por atacantes?  

A soma ou média dessas notas ajuda a determinar quais ameaças são **mais críticas** e devem ser tratadas primeiro.

**Exemplo prático:**  
Uma falha de SQL Injection pode ter alto potencial de dano (roubo de banco de dados), ser fácil de explorar e afetar todos os usuários do sistema. Logo, teria prioridade máxima.

---

## 3. PASTA (Process for Attack Simulation and Threat Analysis)

- **Origem:** Metodologia moderna, muito usada em ambientes corporativos.  
- **Objetivo:** Simular ataques reais para entender riscos técnicos e de negócio.  
- **Funcionamento:** Segue **7 etapas estruturadas**, desde a definição de objetivos até a simulação de ataques e recomendações de mitigação.

As 7 etapas são:
1. Definir objetivos de negócio.  
2. Identificar ativos críticos.  
3. Modelar ameaças.  
4. Analisar vulnerabilidades.  
5. Simular ataques.  
6. Avaliar impacto nos negócios.  
7. Desenvolver contramedidas.  

**Exemplo prático:**  
Uma empresa que deseja migrar para a nuvem pode usar PASTA para simular ataques durante a migração, avaliando riscos como falhas de criptografia ou erros na configuração de permissões.

---

## 4. OCTAVE (Operationally Critical Threat, Asset, and Vulnerability Evaluation)

- **Origem:** Desenvolvida pela Carnegie Mellon University.  
- **Objetivo:** Avaliar riscos organizacionais de forma estratégica.  
- **Funcionamento:** OCTAVE é menos técnico e mais voltado à **gestão**, permitindo que a organização identifique:

1. **Ativos críticos** – O que precisa ser protegido.  
2. **Ameaças internas e externas** – O que pode comprometer esses ativos.  
3. **Vulnerabilidades** – Quais fraquezas existem que podem ser exploradas.  

**Exemplo prático:**  
Uma universidade pode usar OCTAVE para identificar que seus sistemas de matrícula online são ativos críticos. A análise revela que falhas de backup e falta de treinamento de funcionários são vulnerabilidades que expõem o sistema a riscos.

---

## 5. MITRE ATT&CK

- **Origem:** Criado pelo MITRE, organização sem fins lucrativos ligada ao governo dos EUA.  
- **Objetivo:** Mapear técnicas de ataque utilizadas por adversários no mundo real.  
- **Funcionamento:** É uma **base de conhecimento viva**, que documenta **táticas, técnicas e procedimentos (TTPs)** usados em ataques cibernéticos.  
- Estrutura dividida em fases, como:
  - Reconhecimento  
  - Execução  
  - Persistência  
  - Escalada de privilégios  
  - Exfiltração de dados  

**Exemplo prático:**  
Se uma empresa sofrer um ataque de ransomware, pode usar o MITRE ATT&CK para identificar em qual fase do ataque está, e quais medidas de defesa são mais eficazes contra as técnicas usadas.

---

## 6. Cyber Kill Chain (Lockheed Martin)

- **Origem:** Desenvolvido pela Lockheed Martin.  
- **Objetivo:** Descrever as **fases de um ataque cibernético** para identificar pontos de defesa.  
- **Funcionamento:** Divide um ataque em **7 etapas**:

1. Reconhecimento (coleta de informações).  
2. Preparação (weaponization).  
3. Entrega (delivery).  
4. Exploração (exploit).  
5. Instalação (malware/backdoor).  
6. Comando e Controle (C2).  
7. Ações finais (roubo, espionagem, destruição).  

**Exemplo prático:**  
Se um atacante envia um e-mail malicioso, o ataque percorre etapas como **entrega** (phishing), **exploração** (abrir anexo infectado) e **instalação** (malware). O objetivo da Kill Chain é interromper o ataque no meio do caminho, antes que chegue às ações finais.

---

# Comparação Geral

| Metodologia       | Foco principal                     | Nível de aplicação |
|-------------------|-------------------------------------|--------------------|
| **STRIDE**        | Identificar categorias de ameaças   | Técnico            |
| **DREAD**         | Priorizar ameaças                  | Técnico            |
| **PASTA**         | Simulação de ataques reais         | Técnico + Negócio  |
| **OCTAVE**        | Risco organizacional e gestão      | Estratégico        |
| **MITRE ATT&CK**  | Técnicas reais de adversários       | Técnico            |
| **Kill Chain**    | Etapas de um ataque cibernético     | Técnico/Operacional|

---

# Conclusão

Essas metodologias **não competem entre si**, mas se **complementam**.  
- **STRIDE** ajuda a identificar ameaças,  
- **DREAD** define a prioridade,  
- **PASTA** mostra o impacto no negócio,  
- **OCTAVE** olha de forma estratégica,  
- **MITRE ATT&CK** conecta a análise a técnicas reais,  
- e a **Kill Chain** mostra como bloquear ataques em cada fase.  

Um bom programa de segurança pode combinar várias dessas abordagens para criar uma **defesa em camadas**, robusta e alinhada tanto à tecnologia quanto ao negócio.
