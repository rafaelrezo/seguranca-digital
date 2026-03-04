# Ameaças Cibernéticas e Atores de Ameaça

> **Objetivos de aprendizagem**
> - Diferenciar ameaça, ator de ameaça e vetor de ataque.
> - Entender as motivações de atacantes e seu impacto no risco.
> - Relacionar tendências atuais de ataques com controles práticos.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/vb-0zwDJ4YQ)

## 1. O que é uma ameaça cibernética?

Uma ameaça cibernética é qualquer evento, agente ou ação capaz de comprometer a **confidencialidade, integridade ou disponibilidade** de sistemas e dados.

Em termos práticos:

- **Ameaça**: o perigo (ex.: campanha de ransomware).
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

Superfície de ataque é o conjunto de pontos exploráveis por um invasor:

- ativos expostos na Internet,
- contas e credenciais,
- APIs e integrações,
- serviços em nuvem mal configurados,
- dispositivos e software não homologados.

**Shadow IT** aumenta essa superfície sem visibilidade da equipe de segurança.

---

## 6. Técnicas de engano para detecção

Controles de engano ajudam a detectar movimentação do atacante:

- **Honeypots**: serviços isca.
- **Honeytokens**: credenciais falsas.
- **Honeyfiles**: arquivos que disparam alerta ao serem abertos.

Quando bem usados, esses recursos antecipam a detecção antes do dano principal.

---

## 7. Mini-caso prático

Uma instituição de ensino utiliza VPN legada sem MFA e com plugins desatualizados.

- **Ameaça:** grupo de ransomware com acesso inicial por exploração de falha conhecida.
- **Vulnerabilidade:** ausência de MFA e correções pendentes.
- **Risco:** interrupção das aulas e vazamento de dados acadêmicos.
- **Tratamento prioritário:** patch baseado em KEV, MFA obrigatório, segmentação de rede e plano de resposta testado.

---

## 8. Perguntas de revisão rápida

1. Qual a diferença entre ator de ameaça e vetor de ataque?
2. Por que exploração de vulnerabilidade exige priorização diferente de CVEs “teóricas”?
3. Como Shadow IT altera a superfície de ataque?

---

## 9. Fontes de referência

- Verizon: 2025 Data Breach Investigations Report (DBIR)  
  https://www.verizon.com/about/news/2025-data-breach-investigations-report-apac
- ENISA Threat Landscape 2025  
  https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
- ENISA (press release ETL 2025)  
  https://www.enisa.europa.eu/news/etl-2025-eu-consistently-targeted-by-diverse-yet-convergent-threat-groups
- CISA Known Exploited Vulnerabilities Catalog  
  https://www.cisa.gov/known-exploited-vulnerabilities-catalog
