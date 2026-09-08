# Referenciais profissionais e matriz de aderência curricular

> Documento de trabalho para revisão técnica e pedagógica da arquitetura da disciplina. Não é material do estudante nem equivalência ou preparação oficial para certificações.

**Data da pesquisa:** 13 de agosto de 2026  
**Estado:** levantamento inicial revisado após recebimento da ementa oficial  
**Arquitetura avaliada:** [`arquitetura-geral-da-experiencia.md`](arquitetura-geral-da-experiencia.md)

## 1. Base documental

A ementa oficial foi fornecida pelo docente em 13 de agosto de 2026 e está registrada em [`aderencia-a-ementa-oficial-e-drifts.md`](aderencia-a-ementa-oficial-e-drifts.md). O plano de ensino institucional completo ainda não foi localizado no repositório. Este cruzamento distingue:

- **arquitetura da experiência:** percurso proposto de A01 a A30;
- **conteúdo programático materializado:** temas presentes no `AGENTS.md`, no `mkdocs.yml`, nas páginas de referência e nos pacotes A01–A05;
- **ementa institucional:** conteúdo obrigatório informado pelo docente, já disponível para governar o replanejamento;
- **plano de ensino completo:** documento ainda pendente, necessário para conferir objetivos formais, avaliação, bibliografia e equivalência de carga horária.

A ementa prevalece como núcleo obrigatório. Os referenciais profissionais orientam profundidade, desempenho e extrapolações, sem transformar a disciplina em preparação integral para certificações.

## 2. Referenciais selecionados e função no cruzamento

| Referencial/formação | Função nesta análise | Competências ou domínios mobilizados | Limitação de uso |
|---|---|---|---|
| NIST NICE Framework, componentes 2.2.0 | linguagem de trabalho profissional baseada em tarefas, conhecimentos e habilidades | governança; projeto e desenvolvimento; implementação e operação; proteção e defesa; investigação | não é currículo pronto nem lista de disciplinas |
| CompTIA Security+ SY0-701 | referência ampla de entrada profissional | conceitos gerais; ameaças, vulnerabilidades e mitigações; arquitetura; operações; gestão e supervisão do programa | objetivo de certificação é mais amplo e mais enciclopédico que uma disciplina de 60 aulas |
| ISC2 CISSP, outline vigente desde 2024 | visão integrada de prática experiente | risco; ativos; arquitetura; redes; IAM; avaliação/testes; operações; desenvolvimento seguro | certificação avançada; profundidade e experiência exigidas excedem a disciplina |
| ISA/IEC 62443 Cybersecurity Certificate Program | ciclo de vida de segurança para automação e controle industrial | fundamentos IACS; avaliação de risco; projeto/implementação; operação/manutenção | parte das normas é licenciada; o curso deve usar fontes acessíveis e não prometer preparação integral |
| NIST SP 800-82 Rev. 3 | base pública para requisitos e decisões específicas de OT | topologias; ameaças/vulnerabilidades; contramedidas; desempenho; confiabilidade; safety; controles adaptados | guia extenso; precisa ser convertido em experiências de nível introdutório |
| CISA ICS Training (101, 201, 202 e trilhas correlatas) | referência prática defensiva e de progressão em ICS | diferenças TI/ICS; risco; vulnerabilidades; defesa; detecção; análise; remediação | ofertas e calendários mudam; não devem definir datas ou disponibilidade do curso local |

## 3. Síntese das competências profissionais recorrentes

O cruzamento entre os referenciais produz dez famílias de competência apropriadas à disciplina:

1. **Raciocínio baseado em evidência:** coletar, preservar, correlacionar, interpretar e declarar limites.
2. **Ativos, contexto e risco:** identificar valor, proprietário, função, dependência, ameaça, vulnerabilidade, consequência e risco residual.
3. **Arquitetura e engenharia segura:** reconstruir funcionamento normal, fluxos, fronteiras, redes, dependências e requisitos de segurança.
4. **Identidade e acesso:** distinguir identidade, autenticação, sessão, autorização, privilégio e rastreabilidade.
5. **Segurança de aplicações:** analisar entrada, lógica de negócio, dados, dependências, desenvolvimento, testes e correção verificável.
6. **Proteção de dados e criptografia:** classificar dados e escolher proteção para armazenamento, trânsito, integridade, identidade e gestão de chaves.
7. **Operações, detecção e resposta:** produzir telemetria útil, detectar, triar, conter, recuperar e aprender com incidentes.
8. **Nuvem e infraestrutura:** aplicar responsabilidade compartilhada, IAM, redes, logging, configuração, inventário, custo e encerramento.
9. **Governança e comunicação:** aplicar políticas, responsabilidades, terceiros, conformidade, tratamento de risco e comunicação a decisores.
10. **Segurança industrial:** preservar processo e safety; inventariar OT; segmentar; controlar acesso remoto; monitorar; responder e recuperar sob restrições operacionais.

Competências transversais aparecem em todas as famílias: ética e autorização, comunicação, colaboração, pensamento crítico, validação e aprendizagem a partir de falhas.

## 4. Matriz de aderência à arquitetura A01–A30

Escala usada:

- **Forte:** há sequência de experiências e produto verificável;
- **Parcial:** há encontro previsto, mas falta repetição, profundidade ou validação;
- **Fraca:** aparece apenas como menção, reflexão ou conteúdo de consulta;
- **Ausente:** não há experiência identificável na arquitetura.

| Família de competência | Encontros principais | Aderência | Evidência na arquitetura | Lacuna ou risco curricular |
|---|---|---|---|---|
| Raciocínio baseado em evidência | A01–A05, A13, A21–A22, A30 | Forte | linha do tempo, triagem, pergunta verificável, alerta e dossiê | A03 precisa recuperar investigação concreta para não virar preenchimento de nota |
| Ativos, contexto e risco | A01–A05, A16, A26–A30 | Forte | inventário, consequência, priorização e risco residual | risco quantitativo e continuidade de negócio ficam pouco desenvolvidos |
| Arquitetura e engenharia segura | A04–A05, A08–A10, A19, A24, A29 | Parcial | fluxos, decisões, testes e segmentação | A04 atual cobra arquitetura antes de construir familiaridade; configuração segura e hardening precisam ficar mais explícitos |
| Identidade e acesso | A06–A08, A19, A23 | Forte | autenticação, sessão, autorização, PKI e IAM em nuvem | ciclo de vida de identidade, acesso privilegiado e federação aparecem pouco |
| Segurança de aplicações | A02, A06–A10 | Forte | observação HTTP, controle de acesso, entrada e regressão | faltam dependências/supply chain de software, secrets e práticas de desenvolvimento seguro mais explícitas |
| Dados e criptografia | A16–A20 | Forte | classificação, proteção, assinatura, PKI e senhas | backup, descarte, privacidade e prevenção de perda precisam de decisões mais visíveis |
| Operações, detecção e resposta | A01, A10, A13, A21–A25, A30 | Forte | logging, alerta, triagem, runbook, contenção e encerramento | gestão de vulnerabilidades, baselines e melhoria pós-incidente precisam ser explicitadas |
| Nuvem e infraestrutura | A23–A25 | Parcial | IAM, rede, logs, custo e limpeza | três encontros podem ser insuficientes; sistemas operacionais, endpoints e protocolos de rede são pressupostos pouco verificados |
| Governança e comunicação | A15, A22, A26–A28, A30 | Forte | briefing, risco, política, terceiro e decisão final | conformidade, privacidade/LGPD, métricas e conscientização organizacional aparecem pouco |
| Segurança industrial | A01, A15, A29–A30 | Parcial | safety desde A01 e laboratório OT no fechamento | OT aparece na abertura e volta tarde; faltam acesso remoto, inventário/visibilidade, protocolos, defesa/detecção e recuperação em progressão suficiente |

## 5. Aderência ao conteúdo materializado no repositório

| Conteúdo existente | Cobertura na arquitetura | Julgamento inicial |
|---|---|---|
| Fundamentos: CIA, AAA, ameaças, vulnerabilidades, controles e Zero Trust | A01–A10 e retomadas posteriores | aderente; Zero Trust deve entrar apenas diante de decisão arquitetural concreta |
| Ameaças e metodologias | A03–A05 e A26 | aderente com ressalva; evitar transformar STRIDE, DREAD ou PASTA em catálogo ou equivalências forçadas |
| Segurança física | A14–A15 | aderente em dois encontros; precisa manter integração com identidade e operação |
| Engenharia social | A11–A12 e A15 | aderente; preservar ética, consentimento e foco defensivo |
| Malware | A13 | cobertura comprimida; suficiente apenas se o objetivo for triagem comportamental, não taxonomia completa |
| Proteção de dados e DLP | A16 e retomadas em A17–A20 | parcial; DLP, ciclo de vida, privacidade e descarte não possuem experiência claramente reservada |
| Criptografia, hashes, PKI e certificados | A17–A20 | aderente e sequenciado por decisões, desde que blockchain e ofuscação permaneçam consulta/transferência |
| Gestão de riscos e terceiros | A26 e A28 | parcial; conteúdo existente é amplo demais para dois encontros e deve ser priorizado por competências de decisão |
| Governança, políticas, padrões, procedimentos e compliance | A27 e A30 | parcial; risco de compressão enciclopédica |
| Pentest: visão, planejamento e coleta | distribuído em A02–A10 | parcial; escopo/autorização são fortes, mas planejamento de teste, regras de engajamento e relatório precisam ser explicitamente localizados |
| AWS Academy | A23–A25 | aderência estrutural; desenho só pode ser fechado após validação de serviços, região, custo e encerramento |
| Segurança OT | A01, A29–A30 | insuficiente para a centralidade declarada no `AGENTS.md` e para referenciais ISA/NIST/CISA |

## 6. Lacunas prioritárias para parecer técnico

### Prioridade alta

1. **Progressão OT insuficiente:** safety é apresentado cedo, mas o estudante passa mais de vinte encontros sem manipular novamente um processo, uma arquitetura ou telemetria OT.
2. **Fundamentos de infraestrutura pressupostos:** rede, sistema operacional, serviços, protocolos e configuração aparecem como meios, mas não há diagnóstico ou recuperação planejada para alunos sem essa base.
3. **Gestão de vulnerabilidades pouco explícita:** observar, corrigir e retestar aparece; inventariar, avaliar, priorizar, acompanhar exceção e verificar remediação ao longo do tempo precisa de maior visibilidade.
4. **Privacidade e ciclo de vida de dados:** classificação e criptografia estão fortes, mas minimização, retenção, descarte, backup, DLP e requisitos legais aparecem pouco.

### Prioridade média

5. **Desenvolvimento seguro:** dependências, segredos, pipeline e revisão de código podem ser integrados ao arco de aplicações sem criar um arco novo.
6. **Operação contínua:** baseline, hardening, patch/change management, métricas e lições aprendidas precisam aparecer como trabalho observável.
7. **Acesso remoto OT e cadeia de fornecedores:** podem conectar A28 e A29 e tornar a transição governança → OT mais autêntica.
8. **Comunicação por público:** produtos existem, mas a mesma evidência deveria ser comunicada de modo diferente a desenvolvimento, operações, gestão e responsável pelo processo.

## 7. Hipóteses de ajuste para análise especializada

Estas hipóteses não alteram ainda a arquitetura:

- alternar pequenos retornos ao cenário OT em A10, A15, A22 e A28, evitando concentrá-lo apenas no final;
- usar A15 como primeiro marco sociotécnico e A28 como preparação explícita para acesso remoto de fornecedor em OT;
- inserir gestão de vulnerabilidades como fio entre A02, A10, A21 e A26, em vez de criar aula expositiva;
- incorporar privacidade, retenção e descarte em A16; backup e restauração em A20/A25; DLP como decisão de A21 ou transferência;
- acrescentar dependência vulnerável, segredo e evidência de pipeline entre A09 e A10;
- verificar pré-requisitos de redes e sistemas no início e fornecer trilha de apoio sem consumir a narrativa principal;
- decidir tecnicamente se STRIDE permanece em A05 ou se autenticação/autorização deve precedê-lo.

## 8. Fontes primárias consultadas

- [NIST NICE Framework Resource Center — Getting Started](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/getting-started). Componentes de tarefas, conhecimentos, habilidades, competências e papéis profissionais. Acesso em 13 ago. 2026.
- [NIST NICE Framework — Current Versions](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/nice-framework-current-versions). Componentes versão 2.2.0, publicada em 28 abr. 2025. Acesso em 13 ago. 2026.
- [CompTIA Security+](https://www.comptia.org/certifications/security). Formação de entrada e objetivos do exame vigente. Acesso em 13 ago. 2026.
- [ISC2 CISSP — recursos e exam outline](https://www.isc2.org/certifications/cissp/cissp-self-study-resources). Oito domínios profissionais integrados. Acesso em 13 ago. 2026.
- [ISA/IEC 62443 Cybersecurity Certificate Program](https://www.isa.org/certification/certificate-programs/isa-iec-62443-cybersecurity-certificate-program). Fundamentos, avaliação de risco, projeto/implementação e manutenção de IACS. Acesso em 13 ago. 2026.
- [NIST SP 800-82 Rev. 3 — Guide to Operational Technology Security](https://csrc.nist.gov/pubs/sp/800/82/r3/final). Requisitos de desempenho, confiabilidade e safety, topologias, ameaças, vulnerabilidades e contramedidas de OT. Acesso em 13 ago. 2026.
- [CISA — Industrial Control Systems Training](https://www.cisa.gov/resources-tools/training). Progressão de fundamentos, risco, defesa, detecção, análise e remediação em ICS. Acesso em 13 ago. 2026.
