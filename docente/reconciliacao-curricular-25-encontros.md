# Reconciliação curricular aprofundada — A01 a A25

> **Estado em 8 set. 2026:** este documento permanece como referência curricular/proposta. Para formato, sequência reconciliada e heranças confirmadas, prevalecem a decisão vigente na [arquitetura](arquitetura-geral-da-experiencia.md) e o [diagnóstico](reconciliacao-mkdocs-2026-09-08/diagnostico.md). A07 publicada trabalha ATT&CK; a proposta antiga de tratamento não descreve essa aula. A próxima aula e o calendário ainda serão planejados após confirmar o último encontro ministrado.

> **Documento de governança curricular.** A01–A05 são registros históricos congelados. A06–A25 parte dos produtos efetivamente construídos. Pentest fica no fim, quando o estudante já possui modelos para selecionar, interpretar e comunicar testes.

**Estado:** proposta para validação docente; pacotes futuros ainda não reconstruídos  
**Data:** 1º de setembro de 2026  
**Carga futura:** 20 encontros × 90 min = 30 horas-relógio  
**Pendência:** confirmar a correspondência com a carga institucional de 30 h teóricas + 30 h práticas.

## 1. Por que pentest não abre a sequência

Pentest não é coleção de técnicas. Para selecionar um teste e interpretar um achado, o estudante precisa saber qual sistema e fluxo estão em escopo, quais ameaças e consequências justificam o teste, qual propriedade deveria ser preservada, como distinguir evidência de impacto presumido e quem decide o tratamento.

A01–A05 iniciaram essa construção, mas ainda não a consolidaram. Pentest em A06 tornaria WSTG e Juice Shop um roteiro procedural. Nesta sequência, A06–A22 constroem objeto, ameaças, mecanismos e governança; A23–A24 usam pentest como **verificação técnica orientada por risco**; A25 integra a decisão.

## 2. Reconciliação histórica A01–A05

| Encontro ministrado | Herança concreta | Limite que permanece | Retomada |
|---|---|---|---|
| **A01 — incidente e evidência** | registro, hipótese e conclusão; CIA, AAA e safety | evidências ainda não formam um modelo do sistema | A06 consolida sistema; A19 retoma processo e safety |
| **A02 — ativos, ameaças e vulnerabilidades** | HTTP; ativo, exposição, condição e consequência | exposição não define caminho completo nem prioridade | A07 mapeia, prioriza e deriva requisito |
| **A03 — ameaças candidatas** | hipóteses concorrentes e evidência discriminante | houve ruptura entre loja e caso corporativo/OT | A06 unifica os recortes |
| **A04 — onde a aplicação decide** | Juice Shop; requisição da cesta; fluxo `pessoa → navegador → serviço → dado`; identidade–ação–recurso; fronteira navegador–servidor; diagrama de uma página | o rastro externo não revela integralmente a regra interna de autorização | A05 testa a decisão; A06 formaliza o modelo apenas o necessário |
| **A05 — sessão e autorização** | Ana/Bruno; propriedade, contexto, negação por padrão e accounting | falta sistematizar ameaça, controle e teste num método | A06–A07 consolidam; A23–A24 verificam |

Cada dupla leva para A06 o diagrama e a pergunta de coleta da A04, além dos quatro testes de aceitação da A05. O curso não reinicia o cenário.

## 3. Macroprogressão

~~~text
A01–A05: evidência → ativo → ameaça candidata → fluxo → decisão de acesso
A06–A07: fluxo observado → ameaças sistemáticas → caminho priorizado → requisito e validação
A08–A10: caminho sociotécnico → logs/auditoria → perímetro e arquitetura
A11–A15: propriedades e mecanismos criptográficos
A16–A18: risco, SGSI, política, auditoria e melhoria
A19–A22: processo OT, IEC 62443, arquitetura e recuperação
A23–A24: pentest orientado pelo modelo e pelo risco
A25: defesa integrada
~~~

## 4. Planejamento aula a aula

Não há proporção fixa. Aulas densas podem usar 50–60 minutos de construção teórica. Laboratórios recebem mais tempo somente quando o estudante já domina o modelo necessário.

### Arco 1 — Sistema, ameaças e requisitos

| ID | Conhecimentos e transformação | Experiência significativa | Produto e ponte |
|---|---|---|---|
| **A06 — Do fluxo observado às ameaças: o que ainda pode dar errado?** | **Parte teórica (40 min):** por que modelar ameaças; escopo e ativos; DFD como formalização breve do diagrama já produzido; ameaça versus vulnerabilidade; condição, caminho, consequência e evidência; STRIDE seletivo. **Parte prática (50 min):** normalizar em 15–20 min o fluxo A04/A05 e aplicar lentes a dois pontos, produzindo ameaças testáveis sem repetir DevTools | o DFD não é o objetivo da aula: funciona como mapa persistente para localizar decisões e evitar ameaças soltas; a dupla compara formulações vagas e testáveis | DFD mínimo anotado + registro de três ameaças candidatas. Portão: cada ameaça contém ativo, condição, caminho, consequência e evidência discriminante |
| **A07 — Da ameaça à decisão defensável: qual caminho tratar?** | **Parte teórica (45 min):** caso de abuso; árvore de ataque AND/OR; pré-condições; priorização qualitativa com exposição, consequência, controles e incerteza; requisito, controle, risco residual e rastreabilidade. **Parte prática (45 min):** escolher uma ameaça da A06, aprofundar seus caminhos e fechar validação | a dupla constrói uma árvore curta, elimina ramos por evidência e deriva requisito, controle e casos permitido/negado/função preservada; revisão cruzada testa a coerência | registro completo ameaça → árvore → prioridade → requisito → controle → teste. Portão: outra dupla percorre a cadeia sem salto lógico |

### Arco 2 — Caminho sociotécnico, accounting e perímetro

| ID | Conhecimentos e transformação | Experiência significativa | Produto e ponte |
|---|---|---|---|
| **A08 — Como uma solicitação plausível vira comprometimento?** | engenharia social como manipulação de contexto; pretexto, autoridade, urgência, impersonificação, verificação independente e reporte; cadeia comportamental de malware: entrega, execução, persistência, comunicação e impacto; prevenção e contenção sem catálogo de famílias | analisar um único caminho mensagem → ação → processo → persistência → conexão; distinguir decisão humana, mudança técnica e consequência; selecionar verificação e contenção reversível | mapa do caminho sociotécnico, protocolo de verificação e hipótese sobre os rastros necessários |
| **A09 — Que registros permitem reconstruir o caminho?** | evento, fonte, identidade, contexto, accounting, sincronização temporal, integridade, retenção, acesso, correlação, lacuna e limite de atribuição; diferença entre logging, monitoramento e auditoria | receber logs de identidade, aplicação e endpoint do caminho A08; ordenar, confrontar relógios, identificar campo ausente, manter hipótese concorrente e definir requisitos de logging | trilha auditável comentada e três requisitos verificáveis de registro |
| **A10 — Onde o perímetro termina e a arquitetura começa?** | superfície; segmentação; filtragem; DMZ; VPN; allowlist; stateful; defesa em profundidade; administração, monitoramento e recuperação; introdução a zona/conduíte | comparar rede plana e segmentada; matriz origem–destino–serviço–justificativa; validar permitido, negado e retorno | arquitetura inicial; abre propriedades criptográficas |

### Arco 3 — Criptografia aplicada em profundidade

O arco mantém mensagem, fluxo e atacante constantes. Scripts são fornecidos; o objetivo é interpretar propriedades, não implementar primitivas.

| ID | Conhecimentos e transformação | Experiência significativa | Produto e ponte |
|---|---|---|---|
| **A11 — Que propriedade criptográfica o problema exige?** | dado em trânsito/repouso/uso; confidencialidade, integridade, autenticidade e não repúdio condicionado; entropia, aleatoriedade, segredo e modelo de atacante; codificação/ofuscação | teoria com microdemonstrações e classificação dos fluxos A06/A10 | matriz ameaça → propriedade → mecanismo → limite |
| **A12 — Como a criptografia simétrica protege conteúdo?** | chave; cifra de bloco/fluxo funcional; modo; nonce/IV; reutilização; AEAD; tag; confidencialidade sem integridade | comparar caso correto, adulteração, ausência de autenticação e nonce reutilizado | decisão simétrica e testes |
| **A13 — Hash, MAC, senha e segredo são o mesmo problema?** | resistências de hash; MAC; salt; ataque offline controlado; KDF; custo; pepper; secret manager; rotação | verificar MAC, comparar amostras e revisar armazenamento fictício | especificação de senha/segredo |
| **A14 — Como confiar sem compartilhar previamente a mesma chave?** | par público/privado; assimetria; troca de chaves; assinatura/verificação; autenticidade versus identidade; custo e limites | gerar chaves descartáveis, assinar, alterar conteúdo e testar chave errada | registro do que a assinatura prova e não prova |
| **A15 — Como certificados e TLS compõem um canal confiável?** | certificado; CA; cadeia; nome; validade; revogação introdutória; handshake funcional; solução híbrida; ciclo de chaves | diagnosticar conexões/certificados e completar arquitetura do fornecedor | portão criptográfico e lançamento do projeto mensal |

### Arco 4 — ISO/IEC 27001, riscos, políticas e auditoria

ISO/IEC 27001:2022 é norma de requisitos para SGSI; ISO/IEC 27002:2022 orienta controles. Não se percorre o Anexo A como catálogo nem se reproduz texto licenciado.

| ID | Conhecimentos e transformação | Experiência significativa | Produto e ponte |
|---|---|---|---|
| **A16 — O que a ISO/IEC 27001 realmente organiza?** | contexto; partes interessadas; escopo; liderança; papéis; objetivos; risco; suporte; operação; avaliação e melhoria; requisito versus controle versus certificação | delimitar SGSI da empresa e relacionar evidências A01–A15 | contexto/escopo; projeto P1 |
| **A17 — Como risco vira tratamento e controle justificável?** | critérios; avaliação/tratamento; proprietário; residual; plano; controles; Anexo A e declaração de aplicabilidade introdutória; ISO 27002 | oficina com três riscos e recorte de SoA | registro/tratamento; projeto P2 |
| **A18 — Como política e auditoria tornam o tratamento repetível?** | política, padrão, procedimento e registro; autoridade; regra verificável; exceção; métrica; auditoria interna; critério, evidência, constatação; não conformidade e ação corretiva | criticar política ornamental, reescrever e auditar evidências | política e constatação; portão do SGSI; projeto P3 |

### Arco 5 — IEC 62443 e segurança OT

A série é ensinada por problema, papel e decisão. Não se promete domínio integral ou preparação para certificação.

| ID | Conhecimentos e transformação | Experiência significativa | Produto e ponte |
|---|---|---|---|
| **A19 — O que muda quando software controla processo físico?** | IACS/OT; processo; PLC, HMI, estação de engenharia e historiador; disponibilidade, determinismo, legado, consequência física, safety e estado seguro | reconstruir processo normal; contato observacional com OpenPLC/FUXA ou pacote | diagrama, inventário e critérios de estado seguro |
| **A20 — Como a IEC 62443 distribui responsabilidades?** | estrutura por decisão; asset owner, integrador, prestador e fornecedor; ciclo de vida; visão funcional de 2-1, 2-4, 3-2, 3-3, 4-1 e 4-2; relação com ISO 27001 | atribuir decisões/evidências no acesso remoto | matriz decisão → papel → evidência → lacuna; projeto P4 |
| **A21 — Como zonas, conduítes e níveis de segurança mudam a arquitetura?** | sistema sob consideração; zonas/conduítes; agrupamento por função/risco; SL-T, SL-C e SL-A introdutórios; visão dos requisitos fundamentais; safety independente | redesenhar acesso remoto A04/A10 e justificar requisitos | arquitetura OT e portão conceitual |
| **A22 — Como intervir e recuperar sem comprometer o processo?** | acesso temporário; menor privilégio; monitoração; mudança; compensação; backup/restauração; contenção; recuperação; validação cibernética, funcional e safety | laboratório/mesa: permitido/negado, perda de acesso, rollback e retorno | runbook e matriz requisito–evidência; projeto congelado |

### Arco 6 — Pentest como verificação orientada por risco

| ID | Conhecimentos e transformação | Experiência significativa | Produto e ponte |
|---|---|---|---|
| **A23 — Como se planeja um pentest depois de conhecer o risco?** | scanner, auditoria, avaliação, pentest e ataque; função de NIST SP 800-115, PTES, OSSTMM e OWASP WSTG; Top 10:2025 como classificação; autorização, escopo, regras, reconhecimento, parada e relatório | comparar referências pela pergunta; transformar ameaça/requisito A07 em plano WSTG para Juice Shop | plano aprovado; sem exploração antes do escopo |
| **A24 — O achado resiste ao reteste e sustenta uma decisão?** | baseline; execução manual; prova mínima; falso positivo; severidade; causa; correção; regressão; residual; limites de scanner/classificação | DevTools; poucos casos aprofundados de Broken Access Control, Authentication Failures ou Injection; relatório e reteste | relatório e resumo. Portão: teste selecionado pelo modelo e risco, não por uma flag |

WSTG é o método operacional. OWASP Top 10:2025 classifica riscos depois da evidência. Juice Shop é o laboratório. NIST SP 800-115, PTES e OSSTMM são comparados, não executados integralmente.

### Arco 7 — Integração

| ID | Transformação | Experiência | Produto |
|---|---|---|---|
| **A25 — Conseguimos defender a decisão do início ao fim?** | integrar evidência, ameaça, propriedade/requisito, controle, política, validação, residual, limite e comunicação | demonstrações, contestação cruzada e injeção que altera premissa | dossiê, demonstração, briefing e reflexão individual |

## 5. Projeto mensal em dupla

**Missão:** produzir e defender assurance e tratamento para um caminho crítico, demonstrando que o controle reduz uma condição sem quebrar a função legítima.

- lançamento A15; entrega A25;
- 8–10 horas externas por dupla;
- um fluxo, uma condição e no máximo duas ameaças;
- catálogo de 4–6 condições autorizadas;
- 6–8 páginas mais anexos;
- cada dupla usa somente as lentes pertinentes.

| Checkpoint | Encontros | Evidência acumulativa |
|---|---|---|
| P1 — escopo e baseline | A15–A16 | fluxo, autorização e evidência inicial |
| P2 — ameaça e risco | A17 | condição, consequência, risco e responsável |
| P3 — tratamento e regra | A18 | controle, política/requisito, teste e rollback |
| P4 — revisão e assurance | A20–A24 | revisão, plano de verificação, resultado/evidência, residual e ensaio |

## 6. Portões contra saltos cognitivos

1. A06: fluxo normal narrável.
2. A07: ameaça com ativo, condição, caminho, consequência e evidência.
3. A15: propriedade escolhida antes do mecanismo.
4. A18: risco, tratamento, política e evidência corretamente relacionados.
5. A21: processo, estado seguro, zona, conduíte e responsável antes do controle.
6. A23: ameaça/requisito, escopo, parada e evidência antes do teste.
7. A25: evidência reproduzível ou contestável por outra dupla.

Se um portão falhar, o encontro seguinte inicia com exemplo trabalhado e reduz extensão; não adiciona taxonomia.

## 7. Limite alcançável

O curso pode produzir competência **introdutória e assistida** em modelagem, decisões criptográficas, SGSI, políticas, IEC 62443 selecionada e pentest web orientado por risco. Não promete autonomia profissional, auditoria de certificação, implementação criptográfica, domínio integral da IEC 62443 ou preparação para certificações.

## 8. Referências oficiais

- [OWASP Threat Modeling Project](https://owasp.org/www-project-threat-modeling/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/latest/)
- [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final)
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001)
- [ISO/IEC 27002:2022](https://www.iso.org/standard/75652.html)
- [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards)
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final)

## 9. Próximos passos

1. validar ordem e limites;
2. inventariar produtos reais da turma em A01–A05;
3. produzir fichas-base A06–A07 e o DFD canônico; depois instrumentar os pacotes distintos A08–A10;
4. selecionar experimentos e excertos normativos legais;
5. fixar versão do Juice Shop e casos WSTG usados apenas em A24;
6. reconstruir A06–A25 antes de substituir materiais no Drive.
