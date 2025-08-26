## 📊 Tabela Comparativa das Metodologias

| Metodologia       | Origem / Enfoque                        | Objetivo Principal                                  | Aplicação Prática | Nível de Uso |
|-------------------|------------------------------------------|---------------------------------------------------|------------------|--------------|
| **STRIDE**        | Microsoft (modelagem de ameaças)         | Identificar categorias de ameaças (Spoofing, Tampering etc.) | Avaliação de arquiteturas e software | Técnico |
| **DREAD**         | Microsoft (priorização de riscos)        | Classificar e priorizar ameaças por impacto        | Análise de vulnerabilidades e correções | Técnico |
| **OCTAVE**        | Carnegie Mellon (governança)             | Avaliar riscos em nível organizacional             | Gestão de ativos críticos e riscos corporativos | Estratégico |
| **PASTA**         | Consultoria de segurança (simulação)     | Simular ataques em cenários reais                  | Testar defesas em pipelines de ataque | Técnico ↔ Estratégico |
| **MITRE ATT&CK**  | MITRE (inteligência de ameaças)          | Catalogar táticas e técnicas de atacantes reais    | Threat Hunting, Red/Blue Teaming | Operacional |
| **NIST RMF**      | NIST (normas de conformidade)            | Estruturar processo de gestão de riscos            | Conformidade regulatória, auditorias | Estratégico |
| **Kill Chain**    | Lockheed Martin (ciclo de ataque)        | Mapear etapas do ataque para interromper           | SOC, defesa proativa, monitoramento | Operacional |

---

## 🛠️ Guia Prático: Quando Usar Cada Metodologia

- **STRIDE** → Use no **design de aplicações e arquiteturas** para identificar possíveis ameaças desde a fase de concepção.  
- **DREAD** → Ideal para **priorizar vulnerabilidades** já encontradas, decidindo o que corrigir primeiro.  
- **OCTAVE** → Aplicado em **organizações** para entender riscos em nível de negócio, não apenas técnico.  
- **PASTA** → Bom para **projetos avançados**, onde se deseja simular ataques e avaliar impactos reais.  
- **MITRE ATT&CK** → Excelente em ambientes de **operações de segurança (SOC)**, Threat Hunting e Red Teaming.  
- **NIST RMF** → Use em **projetos regulados** (governo, indústria crítica), onde conformidade é essencial.  
- **Kill Chain** → Indicado para **resposta a incidentes e defesa proativa**, entendendo em qual fase deter o ataque.  

## Conclusão

Essas metodologias não são excludentes — na prática, elas se **complementam**:

- **STRIDE e DREAD** ajudam no **nível técnico** (aplicações e sistemas).  
- **OCTAVE e NIST RMF** focam no **nível estratégico** (organização e conformidade).  
- **PASTA, MITRE ATT&CK e Kill Chain** são muito úteis no **nível operacional** (ataques reais e defesa).  
