# Metodologias de Análise de Ameaças

> **Objetivos de aprendizagem**
> - Entender o propósito de cada metodologia de análise de ameaças.
> - Escolher a metodologia adequada por contexto (projeto, operação ou governança).
> - Combinar abordagens sem sobrecarregar a equipe.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/cr-vpVvq8Fw)

## 1. Por que usar metodologia?

Sem método, a análise de ameaças vira opinião.  
Com método, a equipe consegue:

- repetir o processo com qualidade,
- justificar prioridades,
- rastrear decisões de segurança ao longo do tempo.

---

## 2. STRIDE (Microsoft)

**Quando usar:** design de software, revisão de arquitetura e APIs.

**Categorias:**

| Letra | Ameaça | Pergunta prática |
|---|---|---|
| S | Spoofing | Alguém pode se passar por outro usuário/serviço? |
| T | Tampering | Alguém consegue alterar dados sem autorização? |
| R | Repudiation | Existe trilha para provar quem fez o quê? |
| I | Information Disclosure | Dados sensíveis podem vazar? |
| D | Denial of Service | É possível derrubar ou degradar o serviço? |
| E | Elevation of Privilege | Um usuário comum pode virar admin? |

**Ponto forte:** simples e direto para identificar lacunas cedo.  
**Limitação:** não prioriza impacto de negócio sozinho.

---

## 3. DREAD (priorização de risco)

**Quando usar:** priorizar lista de ameaças já identificadas.

Critérios clássicos:

- Damage (dano),
- Reproducibility (repetibilidade),
- Exploitability (explorabilidade),
- Affected Users (usuários afetados),
- Discoverability (descoberta).

**Ponto forte:** ajuda a ranquear correções.  
**Limitação:** alta subjetividade entre avaliadores; muitas equipes modernas combinam com métricas como CVSS, EPSS e contexto de negócio.

---

## 4. PASTA (Process for Attack Simulation and Threat Analysis)

**Quando usar:** sistemas críticos e decisões que exigem ligação direta com risco de negócio.

Etapas (resumo):

1. Definir objetivos de negócio.
2. Definir escopo técnico.
3. Decompor aplicação/ambiente.
4. Analisar ameaças.
5. Mapear vulnerabilidades.
6. Simular cenários de ataque.
7. Priorizar contramedidas.

**Ponto forte:** profundidade técnica + visão de impacto no negócio.  
**Limitação:** exige mais tempo, maturidade e dados.

---

## 5. OCTAVE (CMU/SEI)

**Quando usar:** gestão de risco organizacional e governança.

Foco principal:

- identificar ativos críticos,
- avaliar ameaças internas e externas,
- definir estratégia de proteção institucional.

**Ponto forte:** excelente para nível estratégico.  
**Limitação:** menor detalhamento técnico para engenharia de aplicação.

---

## 6. MITRE ATT&CK

**Quando usar:** detecção, threat hunting, resposta a incidentes e purple team.

O ATT&CK organiza **táticas e técnicas observadas em ataques reais** (TTPs), permitindo:

- mapear cobertura de controles,
- traduzir alertas em comportamento adversário,
- medir lacunas do SOC.

**Ponto forte:** base viva e orientada a evidência operacional.  
**Limitação:** não substitui modelagem de ameaça no design.

---

## 7. Cyber Kill Chain (Lockheed Martin)

**Quando usar:** entender progressão de campanhas e pontos de interrupção.

Fases clássicas:

1. Reconhecimento
2. Armazenamento/preparação de artefatos
3. Entrega
4. Exploração
5. Instalação
6. Comando e Controle (C2)
7. Ações no objetivo

**Ponto forte:** ótimo para explicar e comunicar ataques em sequência.  
**Limitação:** menos granular que ATT&CK para mapeamento moderno de TTPs.

---

## 8. Como combinar metodologias na prática

Uma combinação equilibrada para curso e ambiente real:

- **Projeto/arquitetura:** STRIDE.
- **Priorização de backlog:** DREAD (ou equivalente com critérios objetivos).
- **Operação/SOC:** ATT&CK + Kill Chain.
- **Risco corporativo:** OCTAVE ou RMF/NIST em governança.
- **Sistemas críticos:** PASTA para análise aprofundada.

---

## 9. Mini-caso prático

Portal acadêmico em nuvem com autenticação fraca e APIs públicas.

- **STRIDE:** identifica spoofing e information disclosure.
- **DREAD:** classifica spoofing de credenciais como prioridade alta.
- **ATT&CK:** mapeia técnicas observáveis de credential access e lateral movement.
- **Kill Chain:** define onde interromper (entrega e exploração).
- **PASTA/OCTAVE:** conecta impacto técnico ao impacto institucional.

---

## 10. Perguntas de revisão rápida

1. Em que cenário STRIDE é mais útil que ATT&CK?
2. Qual limitação prática do DREAD em equipes grandes?
3. Por que Kill Chain e ATT&CK podem ser usados juntos?

---

## 11. Fontes de referência

- Microsoft Threat Modeling (STRIDE)  
  https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats
- OWASP Threat Modeling  
  https://owasp.org/www-community/Threat_Modeling
- MITRE ATT&CK  
  https://attack.mitre.org/
- Cyber Kill Chain (Lockheed Martin)  
  https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html
- OCTAVE (CMU SEI)  
  https://www.sei.cmu.edu/library/octave-octave-s-and-octave-allegro/
