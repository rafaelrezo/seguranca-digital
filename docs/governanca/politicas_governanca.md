# Políticas em Governança de TI

## Introdução

Em um sistema de **governança de TI**, as **políticas** são o alicerce que orienta o comportamento, as decisões e as operações dentro da organização.  
Elas garantem **consistência, segurança e conformidade** com normas e legislações, funcionando como um “**manual de boas práticas**” que todos devem seguir.

Nesta lição, vamos abordar as principais políticas que compõem a base de uma boa governança de TI:

- **Política de Uso Aceitável (AUP)**  
- **Política de Segurança da Informação**  
- **Política de Continuidade de Negócios**  
- **Política de Recuperação de Desastres**  
- **Política de Resposta a Incidentes**  
- **Política de Ciclo de Vida de Desenvolvimento de Software (SDLC)**  
- **Política de Gerenciamento de Mudanças**

---

## 1. Política de Uso Aceitável (Acceptable Use Policy – AUP)

A **AUP** define os **limites e responsabilidades dos usuários** ao interagirem com os sistemas, redes e recursos tecnológicos da organização.  
Ela estabelece o que é **permitido** e o que é **proibido**, com o objetivo de proteger a empresa de **riscos legais, vazamentos de dados** e **ameaças de segurança**.

### Exemplo de regras típicas:
- É **proibido instalar softwares não autorizados**.  
- Não é permitido **acessar sites potencialmente maliciosos**.  
- O uso de recursos corporativos para fins pessoais deve ser **limitado e supervisionado**.  
- Credenciais e senhas são **pessoais e intransferíveis**.

> **Paralelo industrial:**  
> Assim como um operador de planta não pode usar um painel de controle para fins não relacionados à produção, um colaborador de TI não deve usar servidores corporativos para experimentos pessoais.

A AUP serve como um **contrato ético** entre a organização e seus usuários, garantindo um ambiente **seguro, produtivo e responsável**.

---

## 2. Política de Segurança da Informação

A **Política de Segurança da Informação (PSI)** é a espinha dorsal da postura de segurança da organização.  
Ela define **como proteger os ativos de informação** contra ameaças internas e externas, garantindo os princípios de **Confidencialidade, Integridade e Disponibilidade (CIA)**.

### Principais áreas cobertas:
- **Classificação de dados:** definição do que é público, interno, confidencial e restrito.  
- **Controle de acesso:** quem pode acessar o quê e sob quais condições.  
- **Criptografia:** exigência de proteção de dados em trânsito e em repouso.  
- **Segurança física:** restrição de acesso a datacenters e áreas críticas.  
- **Treinamento e conscientização:** garantir que todos compreendam suas responsabilidades.

> **Exemplo prático:**  
> Dados sensíveis (como informações de clientes) devem ser **criptografados** e **acessíveis apenas a pessoal autorizado**.


---

## 3. Política de Continuidade de Negócios

A **Política de Continuidade de Negócios (BCP – Business Continuity Policy)** define como a organização **mantém suas operações críticas** diante de interrupções — sejam falhas técnicas, desastres naturais ou ataques cibernéticos.

### Objetivos principais:
- **Assegurar funcionamento mínimo** dos serviços essenciais.  
- **Reduzir o impacto financeiro e operacional** de incidentes.  
- **Estabelecer prioridades e tempos de recuperação (RTO/RPO).**

### Exemplo:
Durante uma falha de energia, o BCP pode prever:
- Ativação de **geradores automáticos**.  
- Transferência de serviços para **servidores em nuvem**.  
- Comunicação imediata com stakeholders e clientes.

> **Paralelo industrial:**  
> Assim como uma planta prevê **modos de operação degradada** (produção reduzida) em caso de falha de sensores, a TI prevê mecanismos para manter a operação mínima durante incidentes.

---

## 4. Política de Recuperação de Desastres (Disaster Recovery Policy)

A **Política de Recuperação de Desastres (DRP)** complementa o plano de continuidade, com foco específico em **restaurar sistemas de TI e dados** após um incidente grave.

### Elementos fundamentais:
- **Backup e restauração:** frequência, local seguro (offsite ou em nuvem) e testes de recuperação.  
- **Plano de contingência:** designação de locais alternativos e responsáveis pela recuperação.  
- **Validação periódica:** simulações e auditorias de prontidão.

### Exemplo:
A política pode exigir **backups diários criptografados em data centers secundários**, com testes de restauração trimestrais.

---

## 5. Política de Resposta a Incidentes

A **Política de Resposta a Incidentes (IRP – Incident Response Policy)** estabelece **como detectar, comunicar e resolver** incidentes de segurança.  
Ela é essencial para **minimizar danos, tempo de inatividade** e **evitar recorrências**.

### Fases típicas de resposta:
1. **Detecção e relato:** identificar e comunicar o incidente.  
2. **Contenção:** isolar o impacto (por exemplo, desconectar sistemas comprometidos).  
3. **Erradicação:** remover a causa raiz.  
4. **Recuperação:** restaurar sistemas e serviços.  
5. **Lições aprendidas:** documentar e melhorar controles.

### Exemplo:
Ao detectar um **ransomware**, a equipe deve seguir um procedimento documentado:
- Desconectar servidores afetados.  
- Acionar a equipe de segurança.  
- Restaurar dados de backup verificado.  
- Reforçar medidas preventivas.

> **Paralelo industrial:**  
> Equivalente ao plano de resposta a emergências em uma refinaria — onde o tempo de reação e a clareza de papéis são vitais para evitar danos maiores.

---

## 6. Política de Ciclo de Vida de Desenvolvimento de Software (SDLC)

A **Política de SDLC** define **como o software deve ser planejado, desenvolvido, testado e mantido**.  
Seu objetivo é assegurar **qualidade, segurança e rastreabilidade** em todo o processo de desenvolvimento.

### Fases cobertas:
- Levantamento de requisitos  
- Desenho e arquitetura  
- Codificação e revisão de código  
- Testes (funcionais, segurança, integração)  
- Implantação controlada  
- Manutenção e documentação

### Padrões comuns:
- Revisão obrigatória de código (*code review*).  
- Práticas de **Secure Coding** (ex.: OWASP Top 10).  
- Automação de testes e **CI/CD pipelines**.

---

## 7. Política de Gerenciamento de Mudanças (Change Management Policy)

A **Política de Gerenciamento de Mudanças (CMP)** regula **como alterações em sistemas, infraestrutura ou processos devem ser propostas, avaliadas e implementadas**.

### Objetivos:
- Garantir que mudanças sejam **planejadas, revisadas e aprovadas**.  
- Reduzir riscos de falhas e indisponibilidades.  
- Documentar e auditar todas as alterações.

### Ciclo típico:
1. **Solicitação de mudança (RFC).**  
2. **Avaliação de impacto e aprovação.**  
3. **Execução controlada.**  
4. **Validação e revisão pós-implementação.**

---

## Conclusão

As políticas de TI formam a **coluna vertebral da governança corporativa**.  
Elas transformam princípios em ações concretas, promovendo **segurança, continuidade e confiabilidade**.

- A **AUP** define o uso ético e seguro dos recursos.  
- A **PSI** protege dados e sistemas.  
- O **BCP e o DRP** asseguram a continuidade e a recuperação após falhas.  
- A **IRP** garante resposta rápida a incidentes.  
- A **SDLC** mantém qualidade e segurança no desenvolvimento.  
- A **CMP** controla mudanças com previsibilidade.

> **Resumo geral:**  
> Sem políticas claras, a TI age de forma reativa e vulnerável.  
> Com políticas bem estruturadas, ela se torna um **sistema integrado e confiável**, tão seguro e previsível quanto uma planta automatizada bem controlada.
