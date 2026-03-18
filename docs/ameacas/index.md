# Ameaças Cibernéticas e Atores de Ameaça

> **Objetivos de aprendizagem**
> - Diferenciar ameaça, ator de ameaça, vetor de ataque e superfície de ataque.
> - Entender como motivações e técnicas de ataque alteram o risco organizacional.
> - Escolher abordagens práticas para identificar, priorizar e tratar ameaças.
>
> **Tempo estimado:** 24 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/vb-0zwDJ4YQ)

## 1. O que é uma ameaça cibernética?

Uma ameaça cibernética é qualquer evento, agente ou ação capaz de comprometer a **confidencialidade, integridade ou disponibilidade** de sistemas e dados.

Em termos práticos:

- **Ameaça**: o perigo (ex.: campanha de ransomware).
- **Ator de ameaça**: quem executa ou patrocina o ataque.
- **Vetor de ataque**: o caminho usado para explorar a fraqueza inicial.
- **Vulnerabilidade**: a fraqueza explorável (ex.: servidor sem correção).
- **Risco**: probabilidade e impacto da exploração.

---

## 2. Quem são os atores de ameaça?

Atores de ameaça (*threat actors*) são indivíduos ou grupos que executam ou patrocinam ataques.

### 2.1 Categorias mais comuns

- **Cibercrime organizado:** foco em lucro (ransomware, fraude, extorsão).
- **Hacktivistas:** motivação ideológica e política, frequentemente com DDoS e defacement.
- **Estados-nação e grupos alinhados:** espionagem, sabotagem e influência.
- **Ameaças internas:** abuso de acesso legítimo por funcionário, terceiro ou ex-colaborador.
- **Oportunistas/script kiddies:** baixa sofisticação, alto volume.

### 2.2 Motivação define estratégia

- **Financeira:** rápido retorno, alta escala.
- **Espionagem:** persistência e discrição.
- **Disrupção:** indisponibilidade e dano reputacional.
- **Influência:** manipulação de narrativa, vazamento seletivo, desinformação.

---

## 3. Vetores de ataque mais observados

Com base em relatórios recentes, três padrões se destacam:

- **Phishing e engenharia social** continuam como porta de entrada relevante.
- **Exploração de vulnerabilidades** cresceu e acelera comprometimentos iniciais.
- **Terceiros/cadeia de suprimentos** ampliam impacto, porque um fornecedor afeta vários clientes.
- **Roubo de credenciais e abuso de identidade** mantêm alta efetividade, especialmente em ambientes com MFA parcial ou permissões excessivas.

Isso reforça um ponto: não basta “proteger o perímetro”, é necessário reduzir exposição interna e dependências externas.

---

## 4. Tendências atuais (visão 2025)

### 4.1 O que os dados mostram

- O **DBIR 2025 (Verizon)** analisou mais de 22 mil incidentes e 12.195 violações confirmadas, com aumento de exploração de vulnerabilidades e maior peso de terceiros.
- O **ENISA Threat Landscape 2025** destacou forte presença de DDoS em campanhas hacktivistas e apontou ransomware como ameaça de alto impacto.
- O **CISA KEV Catalog** segue crescendo e reforça que vulnerabilidades já exploradas em ambiente real devem ter prioridade máxima de correção.

### 4.2 Tradução prática para empresas

- Tempo de patch virou fator crítico de sobrevivência.
- Gestão de terceiros não pode ser apenas contratual.
- Controles de identidade (MFA, privilégio mínimo, revisão de acesso) reduzem impacto real.

---

## 5. Superfície de ataque e Shadow IT

A **superfície de ataque** é o conjunto de pontos que um invasor pode tentar explorar para obter acesso, elevar privilégios, mover-se na rede ou causar indisponibilidade.

Na prática, ela inclui:

- ativos expostos na Internet;
- contas, identidades e credenciais;
- APIs, integrações e acessos de terceiros;
- serviços em nuvem mal configurados;
- endpoints, dispositivos móveis e softwares instalados.

Já **Shadow IT** é o uso de tecnologia sem aprovação, inventário ou monitoramento formal da área de TI ou segurança. Isso pode incluir:

- aplicativos SaaS adotados diretamente por áreas de negócio;
- armazenamento de arquivos em contas pessoais;
- automações e integrações criadas fora do padrão institucional;
- dispositivos, extensões de navegador ou softwares não homologados.

### 5.1 Qual a diferença entre os termos?

| Termo | O que significa | Pergunta prática |
|---|---|---|
| **Superfície de ataque** | Todos os pontos exploráveis por um atacante | "Por onde alguém pode me atacar?" |
| **Shadow IT** | Tecnologia usada sem governança formal | "O que está sendo usado sem a equipe de segurança saber?" |

Em outras palavras, **superfície de ataque** é um conceito mais amplo. **Shadow IT** é uma das causas de expansão dessa superfície, porque cria ativos, acessos e fluxos de dados fora da visibilidade institucional.

### 5.2 Por que Shadow IT é perigoso?

O problema não é apenas "usar uma ferramenta diferente". O risco surge porque soluções fora de governança tendem a ficar sem:

- avaliação de segurança e privacidade;
- autenticação forte e integração com MFA;
- controle de acesso e revisão de permissões;
- backup, retenção e trilha de auditoria;
- processo de resposta a incidentes e desligamento seguro.

O impacto prático é direto: dados sensíveis podem ir para serviços não aprovados, credenciais podem ser reutilizadas sem controle e integrações podem abrir novos caminhos de ataque.

### 5.3 Relação com defesa

Uma organização pode ter firewall, antivírus e MFA, mas ainda assim manter uma superfície de ataque maior do que imagina se houver Shadow IT espalhado por departamentos.

Por isso, a ação recomendada não é apenas bloquear. É combinar:

- inventário contínuo de ativos e SaaS;
- políticas claras de adoção de ferramentas;
- SSO/MFA e revisão periódica de acessos;
- descoberta de aplicações não autorizadas;
- diálogo com áreas de negócio para substituir uso informal por alternativas aprovadas.

---

## 6. Técnicas de engano para detecção

Controles de engano ajudam a detectar movimentação do atacante:

- **Honeypots**: serviços isca.
- **Honeytokens**: credenciais falsas.
- **Honeyfiles**: arquivos que disparam alerta ao serem abertos.

Quando bem usados, esses recursos antecipam a detecção antes do dano principal.

---

## 7. Como avaliar ameaças com método

Quando a organização já conhece seus ativos e sua superfície de ataque, o próximo passo é evitar análise baseada apenas em opinião. Três abordagens aparecem com frequência em sala, em arquitetura e em gestão de risco:

| Metodologia/Técnica | Melhor uso | Esforço | Entregável | Limitação |
|---|---|---|---|---|
| **STRIDE** | Descobrir ameaças em arquitetura, APIs e fluxos de dados | Baixo a médio | Lista estruturada de ameaças por categoria | Não prioriza impacto de negócio sozinho |
| **DREAD** | Ranquear e discutir prioridade entre ameaças já identificadas | Baixo | Matriz de pontuação e fila de tratamento | Pode variar bastante entre avaliadores |
| **PASTA** | Conectar cenários de ataque a ativos críticos e impacto institucional | Médio a alto | Cenários de ataque, análise de risco e plano de contramedidas | Exige mais tempo, contexto e evidências |

### 7.1 Como elas se complementam

- **STRIDE** responde: "o que pode dar errado neste componente ou fluxo?"
- **DREAD** responde: "o que precisa ser tratado primeiro?"
- **PASTA** responde: "qual cenário de ataque realmente ameaça o negócio e quais controles justificam investimento?"

Em conjunto, essas abordagens ajudam a sair de uma lista genérica de ameaças para um processo defensável de decisão. Esse encadeamento também melhora a qualidade dos artefatos produzidos pela equipe: diagrama, registro de ameaças, matriz de priorização e plano de mitigação.

### 7.2 Ponte com a prática da trilha

A prática guiada da seção de ameaças usa um **portal acadêmico com SSO, API, banco de dados, armazenamento em nuvem e integração com terceiro** para mostrar como:

- modelar o cenário com fronteiras de confiança;
- levantar ameaças por STRIDE;
- priorizar com DREAD;
- transformar o resultado em análise orientada ao negócio com PASTA.

O roteiro completo está em [Prática guiada de avaliação de ameaças](pratica_guiada_ameacas.md).

---

## 8. Mini-caso prático

Uma instituição de ensino utiliza VPN legada sem MFA e com plugins desatualizados.

- **Ameaça:** grupo de ransomware com acesso inicial por exploração de falha conhecida.
- **Vulnerabilidade:** ausência de MFA e correções pendentes.
- **Risco:** interrupção das aulas e vazamento de dados acadêmicos.
- **Tratamento prioritário:** patch baseado em KEV, MFA obrigatório, segmentação de rede e plano de resposta testado.

Se a equipe aplicar as metodologias citadas:

- **STRIDE** evidencia spoofing de identidade, denial of service e possível elevation of privilege no acesso remoto.
- **DREAD** ajuda a demonstrar por que o acesso remoto sem MFA deve subir para o topo do backlog.
- **PASTA** conecta o incidente ao impacto acadêmico: paralisação do calendário, indisponibilidade do portal e exposição de dados sensíveis.

---

## 9. Perguntas de revisão rápida

1. Qual a diferença entre ator de ameaça e vetor de ataque?
2. Por que exploração de vulnerabilidade exige priorização diferente de CVEs “teóricas”?
3. Em que ordem STRIDE, DREAD e PASTA podem ser combinados em uma análise prática?

---

## 10. Fontes de referência

- Verizon: 2025 Data Breach Investigations Report (DBIR)  
  https://www.verizon.com/about/news/2025-data-breach-investigations-report-apac
- ENISA Threat Landscape 2025  
  https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
- ENISA (press release ETL 2025)  
  https://www.enisa.europa.eu/news/etl-2025-eu-consistently-targeted-by-diverse-yet-convergent-threat-groups
- CISA Known Exploited Vulnerabilities Catalog  
  https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- Microsoft Threat Modeling (STRIDE)  
  https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats
- OWASP Threat Modeling  
  https://owasp.org/www-community/Threat_Modeling
