# Planejamento integrado — segurança das operações industriais e ponte para pentest

**Direção:** solicitação docente de 29 out. 2026: visão geral de segurança industrial pelo NIST, em até dois encontros, com ponte para validação por pentest e apresentação de referenciais, possivelmente com foco OWASP.

**Estado:** duas páginas integrais e atividade única publicadas no GitHub Pages para avaliação em 29 out. 2026; ver [verificação](validacao-pages-2026-10-29.md). Não comprova realização, entrega estudantil, laboratório industrial ou teste web. Identificadores A19/A20 mantidos provisoriamente, sem conciliação do calendário. A preferência de formato foi perguntada durante a produção; sem resposta recebida, adotou-se exposição com análise de evidências como opção de menor preparação para o limite de dois encontros.

## Diagnóstico curricular antes da escolha dos exemplos

A arquitetura e o roadmap vigentes reservavam quatro encontros prospectivos a OT: processo/risco, fundamentos, defesa/acesso e observação/resposta. Condensar por decisões, mantendo os seis eixos essenciais: função física, risco, proteção em camadas, acesso, detecção/resposta e recuperação. A ponte pentest deve nascer do critério de validação, evitando uma terceira aula disfarçada de instalação ou oficina.

Não foi informado novo estado de realização de A13–A17. O material publicado de criptografia/VPN oferece conceitos de canal, identidade e alcance; não autoriza presumir execução, instalação ou produto da turma. Por isso, as páginas reintroduzem as definições mínimas e não exigem recuperar uma VPC, certificado, matriz ou diagrama anterior. Não há reconciliação histórica de aulas ministradas nesta produção; não se atribui nova herança aos slides antigos, nem é necessário usar seu conteúdo para sustentar o recorte.

As fontes antigas A28/A29 descrevem um caso industrial e dependências não confirmadas. Foram consultadas como diagnóstico de material existente; não se incorporou sua alegação de fluxo herdado da A04. Permanecem intactas e fora da navegação ativa. A nova base é um exemplo técnico mínimo, explicitamente artificial e sem empresa/personagens.

## Fichas-base

| Campo | A19 | A20 |
|---|---|---|
| Título | Segurança das operações industriais: o que precisa continuar funcionando? | Validar controles OT e preparar um pentest autorizado |
| Ementa | Função de controle, componentes, restrições, risco, inventário, arquitetura e camadas | Acesso, monitoração, resposta, recuperabilidade, avaliação e referenciais de pentest |
| Ganho novo | Relacionar informação/ação à consequência física e justificar proteção compatível | Passar de recomendação a critério, evidência e plano de teste delimitado |
| Objetivos | Reconstruir a malha; explicar consequências condicionadas; justificar controle e evidência | Avaliar acesso/função; condicionar contenção/retorno; diferenciar métodos e formular caso web |
| Tempo | 100 min: 65 T/35 P | 100 min: 55 T/45 P |
| Pergunta | A tela parada representa processo estável ou perda de visibilidade? | O bloqueio demonstra proteção e preservação da função? |
| Pré-requisitos | Noções de CIA e acesso; definições retomadas na página | Funções de CLP/IHM e registro da A19, também recuperáveis pelo texto |
| Infraestrutura | MkDocs, navegador, editor; planilha opcional | Mesma infraestrutura; sem VPN, simulador ou Juice Shop obrigatório |
| Evidência | Inventário, análise de amostra e decisão de proteção | Casos permitido/negados, função, contenção/retorno e caso web proposto |
| Critério | Função/consequência/controle conectados e limite explícito | Evidência compatível com conclusão e distinção entre fornecido/proposto/executado |
| Avaliação | Início da única atividade OT | Conclusão da mesma atividade, sem entrega nova de pentest |

**Fontes principais:** SP 800-82 Rev. 3 (seções 2–5, controles da seção 6 e apêndice E), CSF 2.0 (mapa complementar), SP 800-115 (seções 5–8/apêndice B), WSTG 4.2 e ASVS 5.0.0. Fontes primárias e versões conferidas em 29 out. 2026. A Rev. 4 da SP 800-82 está em rascunho; Top 10 vigente consultado é 2025. Não atribuir Govern à organização CSF 1.1 da Rev. 3.

## Cadeias de aprendizagem

**A19:** herança concreta = material disponível de proteção e confiança, sem prática presumida → preparação = esquema funcional e definições → ação = comparar aquisição/observação e funções → rastro = dados fornecidos com unidade/horário → leitura = perda de atualização, sem afirmar parada física → conceito = integridade/disponibilidade, consequência e camadas → decisão = escolher proteção compatível → validação = definir permitido/negado e função → produto = registro OT → ponte = reabrir esses campos na A20.

**A20:** herança concreta = registro ou exemplo completo da A19 → preparação = autorização M-01 e tabelas completas → ação = comparar eventos, janela e amostras → rastro = casos fornecidos e lacunas → leitura = conclusão limitada ao intervalo e às operações → conceito = acesso, detecção, resposta, recuperação e avaliação → decisão = contenção condicionada e método apropriado → validação = critério, contraprova e limite → produto = registro concluído e plano web não executado → ponte = A23 reabre autorização/alvo/evidência antes de requisições reais.

## A19 — condução de 100 minutos

| Intervalo | Núcleo e ação | T | P |
|---|---|---:|---:|
| 0–10 | Tela parada: previsão; comparar os dois horários e registrar uma conclusão limitada | 5 | 5 |
| 10–30 | Malha de controle, componentes e diferença entre mostrar/decidir/atuar; completar três ativos | 15 | 5 |
| 30–45 | Propriedades, restrições e estado seguro; justificar por que reinício exige análise | 10 | 5 |
| 45–55 | Base NIST e mapa CSF 2.0, com distinção entre guia OT, gestão e avaliação | 10 | 0 |
| 55–70 | Inventário/risco e exemplo de parâmetro; propor evidência discriminante | 10 | 5 |
| 70–90 | Arquitetura, VPN/DMZ e camadas; marcar um fluxo permitido/negado e seu limite | 10 | 10 |
| 90–100 | Transformar controle em critério; salvar registro, revisão rápida e ponte | 5 | 5 |
| **Total** | | **65** | **35** |

P é análise guiada com produção de registro, previsão, comparação e decisão; não representa configuração ou teste operacional. Não contabilizar a explicação conceitual ou a leitura de respostas pelo professor como prática. Se o tempo de participação não ocorrer, registrar o desvio da alocação.

**Esperas:** antes de nomear a falha, todos distinguem aquisição e observação; antes de escolher controle, todos identificam sensor/controlador/atuador; antes do fechamento, cada registro contém um caso legítimo e uma lacuna.

**Respostas esperadas:** a amostra final tem dez segundos; a tela perdeu atualização, mas o CLP pode continuar em automático. Sensoriamento, comunicação e apresentação são hipóteses diferentes. Estado seguro depende da função; desligar tudo não é regra. VPN não autoriza alteração; VLAN não comprova filtro; um controle não prova independência das proteções físicas.

## A20 — condução de 100 minutos

| Intervalo | Núcleo e ação | T | P |
|---|---|---:|---:|
| 0–15 | Autenticação/autorização; comparar M-01 com eventos e separar uma permissão de dois bloqueios | 8 | 7 |
| 15–30 | Monitoramento e função; correlacionar amostras e registrar limite de dez segundos | 7 | 8 |
| 30–50 | Resposta/recuperação; decidir contenção sob premissa e formular critérios de retorno | 12 | 8 |
| 50–65 | Avaliação proporcional e regras de engajamento; distinguir revisão, observação, scanner e pentest | 10 | 5 |
| 65–80 | Comparar NIST/PTES/OSSTMM/WSTG; separar WSTG, ASVS e Top 10 | 12 | 3 |
| 80–95 | Exemplo WSTG e extensão: formular par de leitura, contraprova e limite | 4 | 11 |
| 95–100 | Revisão cruzada da entrega única; indicar autorização pendente para execução futura | 2 | 3 |
| **Total** | | **55** | **45** |

**Esperas:** conferir a regra M-01 antes dos eventos; obter a conclusão da dupla antes de apresentar seu limite; não avançar a metodologia sem distinguir resultado fornecido e teste; exigir “proposto, não executado” na extensão.

**Respostas esperadas:** autenticação VPN pode ocorrer antes da janela para acesso à engenharia; isso não viola a regra específica M-01. Bloqueios: 09:59:35 e 10:00:02. Casos permitidos: acesso de 10:00:04 e diagnóstico de 10:00:06. Amostras 10:00:00–10:00:10 são compatíveis com operação em faixa, sem comprovar integridade do sensor ou ensaio de proteção. Não inferir que o firewall controla a função interna da aplicação.

Na contenção, a suspensão do caminho remoto depende da premissa expressa de autonomia local e autorização operacional. Retorno requer estado conhecido, permissões revisadas, qualidade/atualidade e função verificadas, além das proteções pertinentes. Não declarar cópia restaurada.

No caso web, extensão possível: B lendo 18 (permitido) e B lendo 17 (negado). Esperar sessão, conteúdo, resultado e parada, sem revelar esse par antes da decisão da dupla. O caso trabalhado demonstra a lógica de um reteste ilustrativo; não representa uma correção implantada.

## Seleção e limites metodológicos

O foco OWASP é **recomendação para a continuação**, pois a solicitação expressa “talvez”. Produziu-se a apresentação solicitada sem reescrever todo o bloco A23–A31 ou presumir decisão sobre seus laboratórios. WSTG 4.2 fornece o procedimento de referência direta a objeto; o ASVS oferece requisitos e o Top 10 categorias de risco. Não atribuir cobertura completa a qualquer seleção.

PTES e OSSTMM entram como comparação breve de função. O site oficial PTES não pôde ser recuperado na consulta; não se declaram versão vigente nem fases detalhadas verificadas. A página primária da TrustedSec confirma a organização de ferramentas segundo PTES. O Read the Docs encontrado declara ser fork não oficial e não foi usado como autoridade. A apresentação oficial do ISECOM foi acessada; o PDF OSSTMM 3 não pôde ser recuperado. Não se declara edição mais recente, aplicação de métricas ou conformidade com OSSTMM.

ISA/IEC 62443 é complemento, sem reprodução do texto pago nem promessa de conformidade. O alerta CISA AA23-335A usado é o PDF atualizado em dezembro de 2024; o portal HTML retornou 403, mas o PDF primário foi recuperado. Não atribuir os números didáticos ao incidente.

## Preparação, contingência e limites

Abrir ambas as páginas e a atividade no navegador; verificar acesso ao modelo e ao pacote. A infraestrutura mínima já é suficiente para toda decisão exigida. Todos os registros essenciais estão nas páginas, sem download ou aplicativo indispensável. Orientar por projeção; reprodução individual é opcional. Não criar contas, serviços AWS, redes ou endpoints industriais.

Se houver proposta posterior de usar OpenPLC/FUXA, Wireshark ou aplicação real, preparar e ensaiar o ambiente antes, com versão/procedência, estado inicial, ação, saída, parada e limpeza. Essa inclusão substituirá tempo e exigirá alinhamento da atividade. O material atual não deve ser anunciado como laboratório implementado.

**Limites:** overview não ensina projeto completo de automação, segurança funcional, conformidade 62443, restauração industrial nem pentest de protocolos. A leitura de HTTP não valida processo. Duração é previsão de planejamento, não medição em turma. A carga global permanece pendente de calendário e T/P realizados.

## Artefatos e distribuição

- [Página A19](../../docs/aulas/A19-seguranca-operacoes-industriais.md) e [plano A19](../A19-seguranca-operacoes-industriais/plano-de-aula.md).
- [Página A20](../../docs/aulas/A20-validacao-ot-pentest.md) e [plano A20](../A20-validacao-ot-pentest/plano-de-aula.md).
- [Atividade única](../../docs/atividades/A19-A20-protecao-validacao-ot.md#atividade), [pacote](../../docs/assets/a19-a20/pacote-evidencias-ot.md) e [modelo](../../docs/assets/a19-a20/modelo-registro-ot.md).

Endereço a distribuir após eventual publicação: `atividades/A19-A20-protecao-validacao-ot/#atividade`. Não houve envio ao Classroom. Navegação/percurso incluem somente os dois novos encontros. Arquitetura/roadmap mantêm explicação dos identificadores e encontros liberados. O manifesto registra a publicação OT para avaliação em bloco próprio, preservando os registros anteriores.

Ver a [validação local](validacao-local.md) para checks efetivamente executados e seus limites.


## Revisão de 29 out. 2026 (tarde) — resumo da SP 800-82 com cards

**Solicitação docente:** revisar A19–A20 destacando conceitos em cards; A19 (e A20, se necessário) como resumo da NIST SP 800-82 para engenheiros de controle e automação; ponte para verificação/pentest, com frameworks e ferramentas (OWASP, ZAP) a avaliar depois.

**Decisão: dois encontros são necessários.** A Rev. 3 tem mais de 300 páginas e seis seções. Uma só aula reduziria o guia a lista de títulos ou cortaria a seção 6, que é a mais aplicável. A19 = seções 2–5; A20 = seção 6 + apêndices C e F + gancho de avaliação. Estrutura do guia conferida no PDF oficial em 29 out. 2026 (sumário, seção 2.4, apêndice C.3.4 e discussão OT do CA-8 no apêndice F).

**Mudanças:** grids de cards do Material (`grid cards`, sem CSS de terceiros) para mapa do guia, malha de controle, as dez considerações OT × TI da seção 2.4, conteúdo do programa (seção 3), inventário, cinco camadas (seção 5.2), funções do CSF (seção 6), acesso remoto, detecção, resposta, incidentes do apêndice C e prévia dos referenciais. Tabelas mantidas onde há comparação. Removido o caso web de ordens, a comparação de PTES/OSSTMM/WSTG e o trio WSTG/ASVS/Top 10 da A20 e do pacote público; preservados em [reserva](reserva-ponte-pentest-web.md) e no Git. Etapa 4 da atividade e rubrica (critério 5) passam a plano de avaliação técnica OT.

**Respostas esperadas novas.** A19 checkpoint de reinício: disponibilidade/processo contínuo e *safety* (seção 2.4); a malha local pode continuar; reinício pode produzir outra falha (caso NASA, visto na A20). Revisão 3: camada 1 orienta as demais; sem dono, controle técnico é desativado. A20 revisão 1: Proteger (PR, 6.2.12); sem relógio comum não há correlação entre fontes. Revisão 3: prática de TI aplicada sem considerar tempo/disponibilidade/efeito físico; testar em réplica/simulador, janela planejada, impedir propagação TI→OT. Etapa 4: abordagem mínima esperada = revisão de regras + observação passiva; tentativa ativa somente em réplica.

### Condução A19 revista — 100 min (70 T/30 P)

| Intervalo | Núcleo e ação | T | P |
|---|---|---:|---:|
| 0–10 | Tela parada e mapa do guia | 7 | 3 |
| 10–25 | Malha, tipos de sistema (2.3); leitura guiada da amostra | 8 | 7 |
| 25–45 | OT × TI (2.4), propriedades e estado seguro; checkpoint do reinício | 15 | 5 |
| 45–55 | Programa (seção 3) | 10 | 0 |
| 55–75 | Risco (seção 4), inventário e exemplo; aplicação dos três ativos | 12 | 8 |
| 75–95 | Cinco camadas, Purdue, percurso remoto, AA23-335A; aplicação no desenho | 15 | 5 |
| 95–100 | Critério verificável e ponte | 3 | 2 |
| **Total** | | **70** | **30** |

### Condução A20 revista — 100 min (60 T/40 P)

| Intervalo | Núcleo e ação | T | P |
|---|---|---:|---:|
| 0–10 | Mapa da seção 6 e nota CSF 1.1/2.0 | 8 | 2 |
| 10–30 | Acesso remoto, M-01; correções e tempo | 8 | 12 |
| 30–45 | Detectar: camadas, função preservada, regra | 7 | 8 |
| 45–60 | Responder/recuperar: contenção condicionada, retorno | 8 | 7 |
| 60–70 | Apêndice F e CA-8 | 8 | 2 |
| 70–80 | Apêndice C: quatro incidentes acidentais | 8 | 2 |
| 80–95 | Avaliação proporcional, regras de engajamento, prévia dos referenciais | 10 | 5 |
| 95–100 | Checkpoint IHM web × controlador; fechamento | 3 | 2 |
| **Total** | | **60** | **40** |

**Bloco:** 130 T/70 P em 200 min, valores de planejamento. As tabelas de condução anteriores ficam como histórico.

### Avaliação preliminar de referenciais para o bloco de pentest (a decidir)

| Opção | Melhor uso | Esforço/custo | Evidência ou entregável | Limitação/risco |
|---|---|---|---|---|
| NIST SP 800-115 | Processo: planejar, executar, relatar; regras de engajamento | Baixo; gratuito | Plano e relatório | 2008; sem ferramentas atuais |
| PTES | Fases do engajamento (pré-acordo → relatório) | Baixo | Escopo e estrutura do relatório | Site oficial instável na consulta; sem versão verificável |
| OSSTMM 3 | Métricas de superfície operacional | Alto | Medição estruturada | Denso; pouco ganho para 100 min |
| OWASP WSTG 4.2 (+ ASVS, Top 10) | Casos de teste web reproduzíveis no Juice Shop | Médio | Requisição/resposta, caso e reteste | Só aplicação web |
| MITRE ATT&CK for ICS | Vocabulário de comportamentos adversários em OT | Baixo | Mapeamento de achados e detecções | Não é método de teste |
| CISA CSET | Autoavaliação de controles OT por questionário | Médio (Windows) | Relatório de lacunas | Não verificado nesta revisão; avaliar instalação/licença |

Recomendação preliminar: processo pela SP 800-115 (com fases do PTES como vocabulário), prática web com WSTG no Juice Shop local e ATT&CK for ICS para traduzir achados ao contexto OT. Ferramenta: ZAP é viável no lugar do Burp Suite (Apache 2.0, gratuito, proxy + varredura). Desde set. 2023 não é projeto OWASP; desde set. 2024 é "ZAP by Checkmarx", mantido pela equipe original. Citar como ZAP, não "OWASP ZAP". Fonte: <https://www.zaproxy.org/docs/zap-ownership/> (consulta 29 out. 2026).
