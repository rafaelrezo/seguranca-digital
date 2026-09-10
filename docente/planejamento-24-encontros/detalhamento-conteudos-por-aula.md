# Detalhamento temático dos conteúdos — A08 a A31

**Precedência — 10 set. 2026:** a reformulação vigente de A09 conclui análise e avaliação de controles em comprometimento de conta/ransomware. A10 está pendente. Os registros editoriais anteriores abaixo conservam o histórico e não prevalecem sobre as fichas A09/A10 atualizadas.

**Estado:** detalhamento curricular docente solicitado em 8 de setembro de 2026, com revisão independente de especialista em segurança IT/OT. Não constitui material de aula ensaiado ou publicado. Deriva da [macroorganização](proposta-macroorganizacao.md) e da [arquitetura vigente](../arquitetura-geral-da-experiencia.md).

Mantêm-se **24 encontros de 100 minutos**, títulos temáticos e numeração **A08–A31**, em continuidade à A07. São cinco macrocomponentes e **cinco submissões principais**, uma por componente. Os registros de cada aula são partes do exemplo conduzido e insumos da mesma atividade, não tarefas extras. A atividade externa é apresentada no início do bloco e consolidada depois de demonstrado o percurso indispensável.

**Gestão de riscos e definição de controles pertencem ao M1:** A08 estabelece o SGSI, A09 conclui avaliação, decisão de risco e avaliação de controles; A10 aguarda replanejamento; A11–A12 adaptam o tratamento a OT. M2–M4 concretizam os controles, e M5 verifica eficácia e reabre risco residual. Definir controle e comprovar sua eficácia são momentos conectados do curso.

## Organização e continuidade

| Macrocomponente | Aulas | Carga | Atividade principal |
|---|---|---:|---|
| M1 — Governança, riscos e controles TI/OT | A08–A12 | 8h20 | P1 — decisão de tratamento |
| M2 — Arquiteturas, perímetro e continuidade TI/OT | A13–A15 | 5h | P2 — revisão da arquitetura |
| M3 — Criptografia, assinaturas e confiança | A16–A21 | 10h | P3 — verificações criptográficas |
| M4 — Pessoas, endpoint e operação defensiva | A22–A24 | 5h | P4 — análise e detecção |
| M5 — Pentest e atuação Red/Blue/Purple | A25–A31 | 11h40 | P5 — avaliação e reteste |

A reconciliação histórica usa as apresentações A01–A07 reconsultadas no Drive nesta conversa: A06 modelou cestas com DFD/STRIDE, e A07 trabalhou mapeamento ATT&CK sobre relato fornecido. A02 e A05 já apresentaram escolha de controles, correção e testes; não se presume execução individual, mas também não se trata esse conteúdo como novo. A08 usa uma ponte de 15 minutos e inicia o SGSI. A [confrontação de repetição](confrontacao-a01-a07-a08-a10.md) corrige a justificativa anterior. Não se exige que os estudantes tenham produzido uma arquitetura industrial na A06. Se uma entrega anterior não estiver disponível, o professor fornece a base e identifica sua procedência.

**Caso prospectivo:** a empresa fictícia tem operação web representada pelo Juice Shop e uma operação física virtual. A11 introduz um tanque/bomba como processo didático fornecido; A13–A15 e A30 reutilizam esse processo. A passagem web→OT é transferência de raciocínio, não alegação de caminho de invasão demonstrado. M3 usa um artefato de configuração/atualização fictício; M4 usa pedido de manutenção e registros preparados. Esses recursos ainda precisam ser produzidos e ensaiados.

**Condução:** professor opera ferramentas e constrói o exemplo completo; a turma prevê, interpreta, compara e decide. Reprodução nas máquinas dos estudantes é opcional. A referência de 100 minutos é: 10 de reentrada/previsão, 20 de primeira observação, 15 de leitura e conceito, 25 de caso contrastante, 20 de decisão/validação e 10 de síntese. Os conceitos de cada ficha distribuem-se nesses momentos; não formam exposição contínua. As proporções T/P abaixo indicam natureza do trabalho, não exigência de operação individual. Total planejado: 1.200 minutos T e 1.200 P; não é reconciliação automática com as 30h/30h institucionais do curso completo.

**Em toda demonstração:** declarar estado inicial, ferramenta, ação, local do rastro, interpretação possível e critério de parada. O pacote alternativo de evidências deve permitir a mesma decisão; quando substituir execução por análise, registrar esse limite. Objetivos indicam desempenhos esperados com apoio, não competências já comprovadas.

**Padrão aprovado em 10 set. 2026:** as páginas A08/A09 passam a dez/oito temas com síntese, esquema e aplicação, mantendo explicação integral. Os planos vigentes registram a condução: na A08 a medição acompanha objetivo/apoio; na A09 estratégias, viabilidade e revisão têm blocos distintos. Política e documentos completos são consulta na mesma página. Os oito passos de SGSI são checklist. Esta organização supera a ordem editorial descrita nos registros de 8 set. abaixo, sem mudar objetivos, cargas ou atividade.

## Índice temático

- [A08 — Governança e SGSI](#a08)
- [A09 — Decidir e avaliar controles de segurança digital](#a09)
- [A10 — Replanejamento pendente](#a10)
- [A11 — O que muda no programa de segurança quando há processo físico?](#a11)
- [A12 — Como usar NIST SP 800-82 e ISA/IEC 62443 na mesma decisão?](#a12)
- [A13 — Como o processo físico depende dos fluxos de comunicação?](#a13)
- [A14 — Como controlar o acesso remoto sem perder a operação?](#a14)
- [A15 — Como preservar manutenção, continuidade e recuperação?](#a15)
- [A16 — O que a criptografia precisa proteger neste fluxo?](#a16)
- [A17 — Cifrar impede adulterar? Criptografia simétrica autenticada](#a17)
- [A18 — Hash, HMAC, senha e segredo resolvem o mesmo problema?](#a18)
- [A19 — O que uma assinatura digital permite verificar?](#a19)
- [A20 — Certificado válido significa confiança suficiente?](#a20)
- [A21 — Como TLS, assinaturas e gestão de chaves trabalham juntos?](#a21)
- [A22 — Como uma mensagem leva uma pessoa a tomar a decisão errada?](#a22)
- [A23 — Que comportamento diferencia manutenção de comprometimento?](#a23)
- [A24 — Que registros permitem detectar, auditar e responder?](#a24)
- [A25 — Pentest, Red Team, Blue Team e Purple Team: qual é a missão?](#a25)
- [A26 — O que o reconhecimento permite afirmar?](#a26)
- [A27 — O controle de acesso resiste a variações que ainda não testamos?](#a27)
- [A28 — Quando o dado passa a ser interpretado como instrução?](#a28)
- [A29 — A defesa percebe o caminho que o exercício Red Team percorreu?](#a29)
- [A30 — Como validar defesa OT sem comprometer o processo?](#a30)
- [A31 — O reteste sustenta a decisão da organização?](#a31)

## M1 — Da modelagem à governança, gestão de riscos e controles TI/OT

**Finalidade:** Governar a decisão: fechar uma ameaça, avaliar até dois riscos e definir tratamento, controles, responsabilidades e evidência.

**Uma atividade principal — P1:** 3–4 páginas; um fluxo, até dois riscos e uma decisão de tratamento detalhada; aproximadamente 2h externas por dupla. Preparação em A08; enunciado integral e fechamento em A09#atividade, sem rótulo público P1. A entrega inclui a avaliação de controles em A09. A10 aguarda replanejamento; dependências posteriores serão revalidadas sem ampliar esta entrega.

<a id="a08"></a>

### A08 — Governança e SGSI

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M1/P1.

**Herança concreta:** A07 descreve comportamentos com ATT&CK, sem definir resposta ou responsabilidade pela proteção. A A08 explicita essa lacuna e apresenta um novo caso de gestão completo: portal Nuvora, catálogo público, planilhas internas, atendimento G02 com retirada e verificação limitada, seguido de nova publicação. Não herdar chamado ou correção como produto da A07. Controle/teste entram como exemplo fornecido, sem exigir arquivo de entrega anterior.

**Objetivos observáveis:**

- Relacionar as seções da ISO/IEC 27001 às decisões de criação de um SGSI.
- Construir esboço com contexto, escopo, política proposta, papéis e objetivo.
- Planejar operação, avaliação e melhoria, distinguindo proposta de execução.

**Conteúdos, na ordem de construção:**

1. Ponte de 15 minutos: explicar a passagem de mapeamento ATT&CK a responsabilidade pela proteção; apresentar o caso novo, os arquivos e o chamado G02 antes de qualquer pergunta sobre eles. Distinguir retirada da planilha de agosto de autorização para novas publicações. Formular a regra de leitura e consultar duas orientações da Authorization Cheat Sheet; retornar à autoridade para aprovar divulgação pública. Não reconstruir DFD, testes de cestas ou catálogo de referenciais.
2. Estrutura ISO/IEC 27001:2022 e emenda 2024: seções 1–3, 4–10 e função do Anexo A/SoA. Construção em oito passos autorais, com registro e validação por etapa. Problema novo: a correção foi proposta, mas a empresa não definiu quem mantém a regra, acompanha fornecedor e revisa a decisão. Introduzir Sistema de Gestão de Segurança da Informação (SGSI) e função da ISO/IEC 27001 pela necessidade de continuidade organizacional.
3. Contexto, partes interessadas, processos, informação e dependências externas: definir o que o SGSI abrange a partir de pedidos e manutenção do portal. A atividade contratada integra o escopo, embora a empresa fornecedora seja externa; não depender de referência ao modelo de A06.
4. Política PSI-NU-01 como referência: selecionar e avaliar diretriz; manter quando adequada ou adaptar com justificativa. Desdobrar em papéis e procedimento, distinguindo orientação de detalhe operacional. Fornecer arranjo hipotético com autoridade e recursos.
5. Risco candidato/pergunta para A09; objetivo e preparação do procedimento. Aplicar S01 ao acordo original e ao arranjo proposto, distinguindo aprovação simulada de execução. G04 é linha de base: encerramentos comprovados entre autorizações cujo prazo vigente venceu no corte. Planejar auditoria e melhoria; sintetizar os oito passos sem reconstruir os registros das seções 4–6.

**Investigação e participação conduzidas:** professor apresenta o registro técnico pronto e uma falha de gestão fornecida. A turma compara dois escopos, identifica uma dependência omitida e acompanha o preenchimento de papéis, autoridade, recurso, objetivo e revisão. Não se exige nova investigação técnica.

**Distribuição dos 100 minutos:** 15 ponte; 15 mapa da norma; 20 contexto/escopo/política; 15 risco/objetivo/apoio; 20 operação/medida; 15 auditoria/melhoria e revisão do esboço. A proporção T/P classifica construção conceitual e análise guiada dentro desses blocos.

**Registro e critério de conclusão:** esboço de SGSI com contexto/escopo, diretriz mantida ou adaptada com justificativa, papéis, objetivo/rotina e pendências de implantação; integra a atividade encerrada em A09. O registro deve identificar uma dependência externa, quem autoriza a decisão, quem executa e qual evidência aciona revisão. Repetir a regra Ana/Bruno não cumpre este objetivo.

**Limite e cuidado de preparação:** fornecer o caso técnico resumido e insumos de gestão. Não prometer implantação ou certificação integral do SGSI. Dificuldades na ponte recebem apoio focal, sem transformar os 85 minutos seguintes em revisão de fundamentos.

**Ponte:** escopo, autoridade e objetivo para avaliar até dois riscos fornecidos em A09.

<a id="a09"></a>

### A09 — Decidir e avaliar controles de segurança digital

**Carga:** 100 min (60 T / 40 P). **Vínculo:** M1/P1, entrega encerrada aqui.

**Herança:** conceitos de escopo, diretriz, papéis e objetivo da A08. O caso da equipe técnica é fornecido como novo recorte; não presumir cobertura pela política do portal nem execução de atividade anterior. Matriz progressiva com R01 comprometimento de conta, R02 ransomware, R03 fraude por e-mail, R04 suporte remoto indevido, R05 notebook perdido e R06 destruição de cópias. R01 exemplo e R02 aprofundado; demais decisões breves. Sem avanço para chão de fábrica.

**Objetivos:** comparar riscos por critérios comuns e incertezas; justificar controles viáveis e função preservada; avaliar resultados e revisar residual/autoridade/gatilho.

**Conteúdos e condução:** oito temas — escopo/componentes; consequência e plausibilidade; prioridade; tratamento; mecanismos/cobertura/recursos; desenho/implantação/resultado; residual e V1; registro. E1–E8 são linha de base simulada. C1–C8 permitem comparar planos de 12 h. T1–T7 permitem avaliar bloqueio, uso legítimo e recuperação; V1 mostra falha funcional após a aplicação abrir. Não executar malware nem chamar registros fictícios de testes da turma.

**Tempo:** 15 ambiente (5T/10P); 20 critérios/prioridade (15T/5P); 25 tratamento/controles (15T/10P); 25 evidências/revisão (15T/10P); 15 consolidação (10T/5P). Total 60T/40P.

**Produto e critério:** PDF único de 3–4 páginas, seis riscos em matriz cumulativa, plano viável e decisão detalhada de R02 após V1. Evidência distingue proposta, implantação e resultado; piloto não prova eficácia na equipe. Residual, autoridade e revisão explícitos. [Plano docente](../A09-decisao-de-riscos/plano-de-aula.md).

**Fechamento:** análise, seleção e avaliação de controles concluídas na A09. Nenhuma etapa obrigatória adiada para A10.

<a id="a10"></a>

### A10 — Replanejamento pendente

**Reserva de carga anterior:** 100 min (50 T / 50 P), a revalidar com o novo plano. Não atribuir novo conteúdo ou objetivo sem decisão docente. A função anterior de completar seleção e avaliação de controles foi absorvida pela A09. O registro A08–A09 já está concluído e não recebe nova exigência nesta aula.

A sequência histórica está preservada no histórico Git e nos documentos anteriores. Dependências A11–A12 de um produto de A10 devem ser revalidadas antes de produzir esses encontros; não pressupor que a reserva de carga confirma um plano pronto.

<a id="a11"></a>

### A11 — O que muda no programa de segurança quando há processo físico?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M1/P1.

**Herança a revalidar antes da produção:** A09 fornece decisão e avaliação de controle com limites; A10 aguarda replanejamento. Não presumir produto de A10.

**Objetivos observáveis:**

- Explicar a função normal de um processo OT fornecido.
- Relacionar falha digital a consequência física plausível.
- Identificar restrições operacionais para tratar riscos.

**Conteúdos, na ordem de construção:**

1. Introduzir o NIST SP 800-82 Rev. 3 a partir de uma operação: tanque virtual, sensor de nível, bomba, controlador lógico programável (CLP) e interface homem-máquina (HMI). Este é cenário prospectivo fornecido.
2. Distinguir medição, comando, estado, referência de operação e consequência. Separar indicação visual de valor recente e confiável.
3. Comparar TI e OT por função: disponibilidade, integridade, confidencialidade, confiabilidade, tempo de resposta e segurança de pessoas/processo; considerar legado e ciclo de vida.
4. Reconhecer efeitos de perda de comunicação, comando inadequado, leitura desatualizada e manutenção; relacionar inventário, responsável operacional e janela de mudança.
5. Situar programa OT no SGSI: equipe de operação, automação, segurança e fornecedores; definir quem avalia a consequência e autoriza intervenção.

**Investigação e participação conduzidas:** Professor percorre o processo normal e compara tela atualizada com captura congelada, explicitamente identificada. A turma prevê a consequência de uma perda de visibilidade e diferencia essa hipótese de perda efetiva de controle.

**Registro e critério de conclusão:** Função normal, consequência física e responsável operacional. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro é um checkpoint de aplicação da decisão de A09, sem ampliar a entrega concluída.

**Limite e cuidado de preparação:** Definir unidade, intervalo operacional e condições de parada na preparação do cenário; não inventar resultados. Disponibilidade não é prioridade absoluta em todo contexto e desligamento abrupto não é resposta universalmente segura.

**Ponte:** Condição operacional que limita o tratamento em A12.

<a id="a12"></a>

### A12 — Como usar NIST SP 800-82 e ISA/IEC 62443 na mesma decisão?

**Carga:** 100 min (40 T / 60 P). **Vínculo:** M1/P1.

**Herança concreta:** A11 — Função normal, consequência física e responsável operacional.

**Objetivos observáveis:**

- Relacionar recomendação normativa a uma decisão OT.
- Distinguir papéis e escopos na série ISA/IEC 62443.
- Consolidar tratamento com responsável e evidência.

**Conteúdos, na ordem de construção:**

1. Retomar acesso de manutenção e risco físico. Usar NIST SP 800-82r3 por função: programa, avaliação de risco, arquitetura e seleção/adaptação de controles OT.
2. Distinguir NIST SP 800-82 de ISA/IEC 62443: referências complementares, sem equivalência automática. O overlay OT do apêndice F do NIST usa controles SP 800-53r5.
3. Situar partes da 62443: programa do proprietário (2-1), avaliação de risco/projeto do sistema (3-2), requisitos do sistema (3-3) e desenvolvimento/componentes do fornecedor (4-1/4-2). Não estudar os catálogos integralmente.
4. Introduzir zonas e conduítes como agrupamento por necessidades de segurança e comunicação controlada; distinguir nível de segurança de maturidade de gestão.
5. Consolidar matriz fonte/edição, finalidade, decisão, responsável, efeito operacional, validação e residual; revisar a coerência da decisão de A09 em checkpoint.

**Investigação e participação conduzidas:** Professor trabalha uma decisão de manutenção remota desde a restrição do processo até uma recomendação NIST e uma referência ISA/IEC pertinente. A turma rejeita uma correspondência indevida e verifica se o controle admite operação legítima e tem responsável.

**Registro e critério de conclusão:** Matriz fonte→decisão→responsável→evidência; fechamento conceitual de M1. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro é um checkpoint de aplicação da decisão de A09, sem ampliar a entrega concluída.

**Limite e cuidado de preparação:** Não chamar ISA/IEC 62443 de “ISO 62443”, nem afirmar que o NIST a engloba. Usar textos licenciados quando disponíveis e fontes oficiais públicas para a visão geral; não inventar cláusulas nem declarar conformidade por associação temática.

**Ponte:** Fluxo autorizado e restrição operacional para A13.

**Referências oficiais do macrocomponente:** [ISO/IEC 27001](https://www.iso.org/standard/27001); [ISO/IEC 27002](https://www.iso.org/standard/75652.html); [NIST SP 800-82r3](https://csrc.nist.gov/pubs/sp/800/82/r3/final); [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards); [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/); [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/). As fichas futuras devem registrar edição, seção e, quando aplicável, identificador do requisito/teste realmente utilizado.

## M2 — Arquiteturas, perímetro e continuidade TI/OT

**Finalidade:** Aplicar as decisões de M1 a fluxos, manutenção e recuperação preservando a função do processo.

**Uma atividade principal — P2:** Um diagrama e até 2 páginas; permitido/negado, manutenção e recuperação; aproximadamente 2h externas por dupla. Introdução em A13; consolidação após A15. Sem submissão a cada aula.

<a id="a13"></a>

### A13 — Como o processo físico depende dos fluxos de comunicação?

**Carga:** 100 min (55 T / 45 P). **Vínculo:** M2/P2.

**Herança concreta:** A12 — Matriz fonte→decisão→responsável→evidência; fechamento conceitual de M1.

**Objetivos observáveis:**

- Reconstruir fluxo necessário ao processo OT.
- Distinguir endereço, serviço, protocolo e operação.
- Relacionar evidência de comunicação a estado do processo.

**Conteúdos, na ordem de construção:**

1. Reabrir o tanque da A11 e a decisão da A12. Fixar componentes, variável observada, unidade, referência temporal e comportamento normal.
2. Relacionar sensor, CLP, atuador, HMI e estação de engenharia; distinguir plano de supervisão e função de controle, conforme a topologia preparada.
3. Explicar IP, porta, serviço, protocolo e comando pela leitura de um fluxo; comparar consulta e alteração quando houver suporte no ambiente.
4. Construir matriz iniciador/destino/serviço/finalidade/frequência e dependência; separar capacidade de alcançar a rede de autorização para atuar.
5. Localizar zona, fronteira e conduíte; prever perda de comunicação e efeito na atualização, controle e recuperação sem pressupor causa única.

**Investigação e participação conduzidas:** Professor opera o cenário previamente preparado e correlaciona mudança de variável com registro de comunicação. Congela um trecho com relógio, origem e destino; a turma compara um fluxo necessário com uma conexão sem finalidade justificada.

**Registro e critério de conclusão:** Matriz origem/destino/serviço/finalidade. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P2, sem entrega separada.

**Limite e cuidado de preparação:** Porta conhecida não prova conteúdo nem autorização. Evidência offline sustenta leitura do fluxo, mas não comprova comportamento atual do laboratório.

**Ponte:** Regras de filtragem e acesso remoto para A14.

<a id="a14"></a>

### A14 — Como controlar o acesso remoto sem perder a operação?

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M2/P2.

**Herança concreta:** A13 — Matriz origem/destino/serviço/finalidade.

**Objetivos observáveis:**

- Traduzir fluxo autorizado em regra mínima.
- Distinguir proteção de canal, segmentação e autorização.
- Avaliar bloqueio sem perder função legítima.

**Conteúdos, na ordem de construção:**

1. Defesa em profundidade a partir da matriz da A13: segmentação lógica, zonas/conduítes, DMZ e pontos de aplicação dos controles.
2. Regra de firewall/ACL: origem, destino, iniciador, serviço, retorno, ordem e política padrão; distinguir regra desenhada de caminho efetivo.
3. Acesso remoto: VPN para canal, identidade e autenticação, jump host para mediação e autorização para operação; evitar equivalência entre as funções.
4. Identificar caminhos alternativos, exceções e dependências de serviços; relacionar menor privilégio, disponibilidade e rastreabilidade.
5. Planejar mudança reversível e validação: conexão permitida, tentativa negada, funcionamento legítimo e condição de retorno.

**Investigação e participação conduzidas:** Professor aplica uma regra ensaiada no ambiente isolado, demonstra um acesso permitido e outro negado, observa a função do processo e restaura o estado. A turma indica onde a decisão foi aplicada e qual caminho ainda precisa de verificação.

**Registro e critério de conclusão:** Diagrama antes/depois e testes de função. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P2, sem entrega separada.

**Limite e cuidado de preparação:** VPN não autoriza qualquer comando industrial. Uma conexão negada não comprova isolamento de todas as rotas; não generalizar teste parcial.

**Ponte:** Transferência de responsabilidade e identidade em A15.

<a id="a15"></a>

### A15 — Como preservar manutenção, continuidade e recuperação?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M2/P2.

**Herança concreta:** A14 — Diagrama antes/depois e testes de função.

**Objetivos observáveis:**

- Definir ciclo de manutenção com acesso temporário.
- Verificar recuperação além da existência do backup.
- Transferir responsabilidade e menor privilégio à nuvem.

**Conteúdos, na ordem de construção:**

1. Ciclo de manutenção: solicitação, aprovação, janela, identidade, privilégio temporário, acompanhamento, encerramento e revogação efetiva.
2. Continuidade: função mínima aceitável, dependências, recuperação e comunicação; introduzir objetivos de tempo e ponto de recuperação (RTO/RPO) pela decisão do caso.
3. Backup de configuração, lógica, versões e dependências; distinguir cópia disponível, restauração executada e estado operacional validado.
4. Relacionar encerramento de sessão, expiração de autorização e impedimento de novo acesso; registrar exceção e responsável por confirmar retorno.
5. Transferência curta à nuvem: responsabilidade compartilhada, política IAM, grupo de segurança e registro de auditoria em insumos fornecidos; concluir P2 sem abrir laboratório extra.

**Investigação e participação conduzidas:** Professor percorre manutenção temporária, revoga a capacidade de acesso e demonstra restauração ensaiada, comparando serviço e estado do processo. Reserva uma comparação curta com política e registros de nuvem preparados.

**Registro e critério de conclusão:** Revisão arquitetural P2 com acesso, fluxo, restauração e propriedade do canal ainda pendente. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P2, sem entrega separada.

**Limite e cuidado de preparação:** Restaurar arquivo não prova recuperação do processo. Usar pacote de evidências equivalente se o ambiente falhar; não impor uma atividade AWS adicional.

**Ponte:** Dados e mensagens que exigem proteção criptográfica na A16.

**Referências oficiais do macrocomponente:** [NIST SP 800-82r3 — arquitetura e controles OT](https://csrc.nist.gov/pubs/sp/800/82/r3/final). As fichas futuras devem registrar edição, seção e, quando aplicável, identificador do requisito/teste realmente utilizado.

## M3 — Criptografia, assinaturas e confiança

**Finalidade:** Escolher e verificar mecanismos de proteção para o mesmo artefato e sua transferência.

**Uma atividade principal — P3:** Tabela de verificações e até 3 páginas de justificativa, com insumos fornecidos; aproximadamente 3h externas por dupla. Introdução em A16; consolidação após A21. Sem submissão a cada aula.

<a id="a16"></a>

### A16 — O que a criptografia precisa proteger neste fluxo?

**Carga:** 100 min (60 T / 40 P). **Vínculo:** M3/P3.

**Herança concreta:** A15 — Revisão arquitetural P2 com acesso, fluxo, restauração e propriedade do canal ainda pendente.

**Objetivos observáveis:**

- Associar propriedade de segurança ao dado e ao adversário.
- Distinguir codificação, cifra, hash e assinatura.
- Justificar mecanismo sem prometer proteção universal.

**Conteúdos, na ordem de construção:**

1. Usar configuração/atualização fictícia ligada à manutenção: quem produz, armazena, transporta, verifica e utiliza o artefato.
2. Separar confidencialidade, integridade e autenticidade nos estados repouso, trânsito e uso; declarar capacidade do adversário considerado.
3. Comparar representação/codificação, ofuscação, cifra e digest; algoritmo público e segredo da chave. Introduzir funções distintas de mecanismos simétricos e assimétricos.
4. Explicar chave, aleatoriedade criptográfica, espaço de busca e condições de uso em nível aplicado; distinguir segurança de algoritmo e de implementação/operação.
5. Construir matriz propriedade/mecanismo/premissa/evidência/limite que será completada em todo M3.

**Investigação e participação conduzidas:** Professor apresenta os mesmos bytes em texto, codificação, cifra e digest; a turma prevê o que se consegue recuperar ou verificar e justifica por que um arquivo cifrado ainda pode ser usado por um processo autorizado comprometido.

**Registro e critério de conclusão:** Matriz propriedade→mecanismo→limite. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P3, sem entrega separada.

**Limite e cuidado de preparação:** Não iniciar por demonstrações de criptoanálise ou implementação de primitivas. Cifra de disco não protege automaticamente dados em uso.

**Ponte:** Proteção de conteúdo e adulteração para A17.

<a id="a17"></a>

### A17 — Cifrar impede adulterar? Criptografia simétrica autenticada

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M3/P3.

**Herança concreta:** A16 — Matriz propriedade→mecanismo→limite.

**Objetivos observáveis:**

- Explicar os componentes de uma operação AEAD.
- Interpretar sucesso e rejeição de autenticação.
- Identificar condições de uso e proteção ausente.

**Conteúdos, na ordem de construção:**

1. Cifra simétrica: chave compartilhada, noção de cifra de bloco/fluxo e finalidade dos modos; AES como referência, sem catálogo de algoritmos.
2. Criptografia autenticada com dados associados (AEAD): texto claro, cifra, nonce, tag e dados associados autenticados (AAD). AAD é autenticado, não cifrado.
3. Percorrer caso válido e variações: cifra adulterada, AAD alterado, chave errada e falha de autenticação; conteúdo inválido não deve ser aceito.
4. Distinguir segredo da chave e unicidade do nonce para a mesma chave; explicar por que repetição viola condições do esquema.
5. Separar autenticidade criptográfica de autorização e proteção contra repetição; considerar contador/estado de aplicação quando a decisão exigir.

**Investigação e participação conduzidas:** Professor usa demonstrador pronto com interface AEAD e arquivos descartáveis. A turma prevê cada resultado antes de executar, identifica o componente alterado e compara aceitar/devolver conteúdo com rejeitar a mensagem.

**Registro e critério de conclusão:** Resultados comparados: correto, adulterado e chave errada. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P3, sem entrega separada.

**Limite e cuidado de preparação:** Não usar openssl enc como se suportasse GCM/CCM. Escolher ferramenta adequada e ensaiada; não implementar primitivas. Não afirmar que AEAD, isoladamente, impede replay.

**Ponte:** Diferença entre hash, MAC e verificador de senha em A18.

<a id="a18"></a>

### A18 — Hash, HMAC, senha e segredo resolvem o mesmo problema?

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M3/P3.

**Herança concreta:** A17 — Resultados comparados: correto, adulterado e chave errada.

**Objetivos observáveis:**

- Escolher entre hash, HMAC e verificação de senha.
- Explicar confiança na referência e segredo compartilhado.
- Avaliar armazenamento de senha com salt e custo.

**Conteúdos, na ordem de construção:**

1. Hash criptográfico: digest, pré-imagem, segunda pré-imagem e colisão pelo efeito sobre uma verificação; hash rápido não é armazenamento adequado de senha por si só.
2. Integridade relativa a referência confiável: comparar arquivo alterado com digest preservado e com digest também substituído.
3. HMAC: autenticação com segredo compartilhado, mensagem e comparação; limite de atribuição entre participantes que conhecem a mesma chave.
4. Senha: salt individual público, função de derivação/verificação apropriada e custo ajustável; mostrar por que salt não precisa ser secreto e não elimina senha fraca.
5. Distinguir senha verificável de segredo recuperável, token e chave de serviço; associar armazenamento e acesso à finalidade.

**Investigação e participação conduzidas:** Professor compara três bancadas no mesmo pacote: arquivo/digest, mensagem/HMAC e registros fictícios de senha com salt. Turma escolhe mecanismo para três necessidades e explica uma solução inadequada.

**Registro e critério de conclusão:** Decisão de armazenamento e evidência de autenticidade da mensagem. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P3, sem entrega separada.

**Limite e cuidado de preparação:** Usar dados fictícios e parâmetros explicitados no futuro roteiro; não fazer competição de quebra de senhas. HMAC não identifica qual detentor do segredo produziu a mensagem.

**Ponte:** Limite de atribuição com segredo compartilhado para A19.

<a id="a19"></a>

### A19 — O que uma assinatura digital permite verificar?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M3/P3.

**Herança concreta:** A18 — Decisão de armazenamento e evidência de autenticidade da mensagem.

**Objetivos observáveis:**

- Interpretar assinatura e verificação de um artefato.
- Separar posse da chave, identidade e autorização.
- Comparar assinatura, HMAC e acordo de chaves por função.

**Conteúdos, na ordem de construção:**

1. Par de chaves e funções assimétricas: assinatura/verificação, cifração e acordo de chaves são operações diferentes. Introduzir acordo de chave como preparação conceitual para TLS.
2. Assinatura digital de bytes determinados: mensagem, processamento criptográfico, assinatura destacada e verificação com chave pública. Alteração de formato também pode alterar bytes.
3. RSA-PSS, ECDSA e EdDSA como famílias por função; executar somente uma implementação pronta, sem três tutoriais nem álgebra obrigatória.
4. Comparar verificabilidade pública e segredo compartilhado do HMAC; explicar como obter e confiar na chave pública usada.
5. Discutir vínculo de identidade, guarda da chave, autorização para assinar e limites de não repúdio; separar assinatura válida de conteúdo benigno.

**Investigação e participação conduzidas:** Professor assina um artefato, verifica original, arquivo alterado e chave errada. A turma explica exatamente o que cada resultado sustenta e identifica o que ainda falta para atribuir a chave a um fornecedor autorizado.

**Registro e critério de conclusão:** Tabela de verificação e conclusões condicionadas. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P3, sem entrega separada.

**Limite e cuidado de preparação:** Não definir assinatura como “cifrar com a chave privada”. Verificação não prova intenção humana, ausência de comprometimento ou efeito jurídico automático; PKI não é requisito universal para toda assinatura.

**Ponte:** Vínculo entre chave, identidade e finalidade para A20.

<a id="a20"></a>

### A20 — Certificado válido significa confiança suficiente?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M3/P3.

**Herança concreta:** A19 — Tabela de verificação e conclusões condicionadas.

**Objetivos observáveis:**

- Diagnosticar falhas diferentes de certificado.
- Explicar cadeia e âncora de confiança.
- Avaliar identidade, finalidade e estado de validação.

**Conteúdos, na ordem de construção:**

1. Certificado X.509 como vínculo declarado entre chave e identidade/atributos; emissor, titular, chave, serial, validade, SAN e usos de chave.
2. Construção e validação de cadeia até âncora confiada; diferenciar assinatura matemática de decisão local de confiança.
3. Identidade esperada e finalidade: nome do serviço, uso do certificado e contexto da operação; comparar cadeia desconhecida, expiração e nome divergente.
4. Revogação: motivo, publicação, consulta e política do cliente; introduzir CRL/OCSP pela pergunta operacional, sem presumir que toda ferramenta os consulta.
5. Ciclo de emissão, renovação e retirada; distinguir confiança de transporte e confiança de assinatura de artefato.

**Investigação e participação conduzidas:** Professor inspeciona certificados preparados e compara diagnósticos positivos e negativos. A turma localiza qual verificação falhou e propõe uma ação que preserve o objetivo de segurança, sem desabilitar validação.

**Registro e critério de conclusão:** Diagnóstico de certificado e requisito de confiança. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P3, sem entrega separada.

**Limite e cuidado de preparação:** Não declarar revogação verificada sem mecanismo efetivamente consultado/aplicado. Certificado aceito não comprova que aplicação ou arquivo são seguros.

**Ponte:** Negociação de canal e ciclo das chaves para A21.

<a id="a21"></a>

### A21 — Como TLS, assinaturas e gestão de chaves trabalham juntos?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M3/P3.

**Herança concreta:** A20 — Diagnóstico de certificado e requisito de confiança.

**Objetivos observáveis:**

- Explicar como TLS integra mecanismos estudados.
- Distinguir proteção do canal e confiança no artefato.
- Planejar resposta a comprometimento e rotação de chave.

**Conteúdos, na ordem de construção:**

1. TLS 1.3 em sequência funcional: negociação, acordo de chaves autenticado, certificado/assinatura e proteção simétrica do tráfego; reutilizar funções introduzidas nas aulas anteriores.
2. Distinguir autenticação do servidor e mTLS, segredo de sessão e chave de identidade; autenticação de canal não autoriza qualquer operação.
3. Comparar canal válido, identidade divergente e atualização assinada recebida pelo canal; validações protegem objetos e momentos distintos.
4. Versão autorizada e prevenção de regressão: artefato antigo pode manter assinatura válida. Separar validade criptográfica, atualidade e aprovação de instalação.
5. Gestão de chaves: geração, armazenamento e acesso, distribuição/confiança, rotação, revogação, comprometimento, recuperação e descarte; consolidar P3.

**Investigação e participação conduzidas:** Professor percorre conexão preparada, inspeciona identidade e demonstra rejeição de um caso inválido. Depois verifica artefato atual e versão antiga legitimamente assinada; a turma define qual decisão adicional impede regressão.

**Registro e critério de conclusão:** Decisão criptográfica integrada com testes positivos e negativos. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P3, sem entrega separada.

**Limite e cuidado de preparação:** Não implementar protocolo TLS nem fazer um laboratório de infraestrutura PKI completo. Usar rastros de conexão e ferramentas prontas; a política de versão pertence à aplicação/gestão de atualização.

**Ponte:** Eventos necessários para reconhecer uso indevido na A22.

**Referências oficiais do macrocomponente:** [AEAD — RFC 5116](https://www.rfc-editor.org/rfc/rfc5116.html); [Assinaturas — FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final); [TLS 1.3 — RFC 8446](https://www.rfc-editor.org/rfc/rfc8446.html); [Gestão de chaves — NIST SP 800-57 parte 1r5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final); [OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html); [Limites do OpenSSL enc](https://docs.openssl.org/master/man1/openssl-enc/). As fichas futuras devem registrar edição, seção e, quando aplicável, identificador do requisito/teste realmente utilizado.

## M4 — Pessoas, endpoint, logs e operação defensiva

**Finalidade:** Analisar o caminho de uma solicitação suspeita até o endpoint e construir uma hipótese de detecção.

**Uma atividade principal — P4:** Até 3 páginas com mensagem, hipótese, trilha, detector e limites, sobre um pacote único; aproximadamente 2h externas por dupla. Introdução em A22; consolidação após A24. Sem submissão a cada aula.

<a id="a22"></a>

### A22 — Como uma mensagem leva uma pessoa a tomar a decisão errada?

**Carga:** 100 min (55 T / 45 P). **Vínculo:** M4/P4.

**Herança concreta:** A21 — Decisão criptográfica integrada com testes positivos e negativos.

**Objetivos observáveis:**

- Analisar uma solicitação de manutenção suspeita.
- Definir verificação independente e autorização.
- Propor conscientização com métrica de processo.

**Conteúdos, na ordem de construção:**

1. Reabrir manutenção e identidade do fornecedor em mensagem fictícia urgente: contexto, pedido, pretexto e ação esperada.
2. Explicar engenharia social por autoridade, urgência, confiança e pressão; distinguir indício de conclusão.
3. Comparar remetente aparente, link/anexo e canal conhecido; identidade da mensagem não substitui autorização de acesso, pagamento ou mudança.
4. Construir procedimento de verificação independente, denúncia e escalonamento; fornecer resposta segura que preserve atendimento legítimo.
5. Conscientização: feedback, aprendizagem com erro e minimização de dados; definir medida de correção/tempo de verificação, não apenas taxa de clique.

**Investigação e participação conduzidas:** Professor exibe duas mensagens de manutenção e conduz consulta a um cadastro fictício de contatos. A turma decide como verificar a solicitação e critica uma política que culpa o usuário, mas não oferece canal de confirmação.

**Registro e critério de conclusão:** Protocolo de verificação e métrica de processo. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P4, sem entrega separada.

**Limite e cuidado de preparação:** Não enviar campanha real nem coletar credenciais. Boa escrita não prova legitimidade; erro gramatical não prova ataque.

**Ponte:** Ação da pessoa e possível execução no endpoint para A23.

<a id="a23"></a>

### A23 — Que comportamento diferencia manutenção de comprometimento?

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M4/P4.

**Herança concreta:** A22 — Protocolo de verificação e métrica de processo.

**Objetivos observáveis:**

- Construir hipótese de endpoint com múltiplos rastros.
- Distinguir administração legítima e comportamento anômalo.
- Justificar contenção compatível com evidência e operação.

**Conteúdos, na ordem de construção:**

1. Usar o mesmo pedido de manutenção da A22 e dois pacotes de eventos: ação autorizada e sequência suspeita.
2. Ler pai/filho de processos, usuário, comando sanitizado, arquivo, conexão e inicialização persistente; associar cada campo à pergunta de investigação.
3. Malware por comportamento: execução, persistência, comunicação e impacto; distinguir família declarada de comportamento realmente sustentado.
4. Introduzir detecção e resposta em endpoint (EDR) pela capacidade de observar e agir; reconhecer fontes ausentes e limites do sensor.
5. Comparar coletar mais evidência, restringir capacidade e isolar host; considerar impacto em estação de engenharia e participação da operação.

**Investigação e participação conduzidas:** Professor alinha registros de processo e conexão em uma linha do tempo. Antes de revelar o contexto de manutenção, a turma formula hipóteses; depois revisa a conclusão e escolhe próxima evidência e resposta proporcional.

**Registro e critério de conclusão:** Hipótese e sequência de evidências do endpoint. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P4, sem entrega separada.

**Limite e cuidado de preparação:** Não executar malware real. Ferramenta administrativa não é maliciosa por definição; ausência de evento numa fonte não comprova ausência de ação.

**Ponte:** Campos e relógios para a trilha auditável de A24.

<a id="a24"></a>

### A24 — Que registros permitem detectar, auditar e responder?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M4/P4.

**Herança concreta:** A23 — Hipótese e sequência de evidências do endpoint.

**Objetivos observáveis:**

- Correlacionar eventos com tempo e contexto.
- Testar regra de detecção em casos positivos e negativos.
- Distinguir alerta, incidente e lacuna de coleta.

**Conteúdos, na ordem de construção:**

1. Accounting e trilha: fonte, instante/fuso, sujeito, ação, objeto, resultado, identificador de correlação e contexto de autorização.
2. Organizar aquisição, transporte, armazenamento e consulta; distinguir ausência de ação, coleta ausente, atraso e filtro. Considerar relógios e diferenças entre fontes.
3. Separar evento, alerta, hipótese de incidente e incidente confirmado; construir uma regra candidata a partir do caminho A22–A23.
4. Aplicar conjunto positivo e negativo fornecido, analisar falsos positivos/negativos e ajustar hipótese sem ocultar limites da amostra.
5. Planejar acesso, integridade, retenção, minimização e resposta; definir dono da análise, escalonamento e critério de recuperação. Consolidar P4 e preservar detector para A29.

**Investigação e participação conduzidas:** Professor correlaciona um pacote único de registros, aplica uma regra simples preparada e compara evento que dispara com caso legítimo que não deveria disparar. Turma diagnostica um caso em que a ação ocorreu, mas o sensor não registrou.

**Registro e critério de conclusão:** Trilha e detecção candidata com limitações. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P4, sem entrega separada.

**Limite e cuidado de preparação:** Não registrar tokens, senhas ou dados pessoais reais. Resultado em amostra não mede eficácia universal; distinguir análise sintética e telemetria real.

**Ponte:** Critérios de êxito da defesa a testar no bloco final.

**Referências oficiais do macrocomponente:** [OWASP Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [Resposta a incidentes — NIST SP 800-61r3](https://csrc.nist.gov/pubs/sp/800/61/r3/final). As fichas futuras devem registrar edição, seção e, quando aplicável, identificador do requisito/teste realmente utilizado.

## M5 — Segurança ofensiva e defensiva: pentest, Red, Blue e Purple Team

**Finalidade:** Avaliar controles e visibilidade, corrigir/retestar e comunicar o risco que permanece.

**Uma atividade principal — P5:** Até 5 páginas novas, no máximo dois achados, evidência Red/Blue, melhoria e reteste; referenciar P1–P4; aproximadamente 3h externas por dupla. Introdução em A25; consolidação após A31. Sem submissão a cada aula.

<a id="a25"></a>

### A25 — Pentest, Red Team, Blue Team e Purple Team: qual é a missão?

**Carga:** 100 min (55 T / 45 P). **Vínculo:** M5/P5.

**Herança concreta:** A24 — Trilha e detecção candidata com limitações.

**Objetivos observáveis:**

- Derivar objetivo de avaliação de riscos anteriores.
- Distinguir missões de pentest, Red, Blue e Purple.
- Definir escopo, observabilidade e critérios de parada.

**Conteúdos, na ordem de construção:**

1. Reabrir riscos P1, fluxos P2, confiança P3 e detector P4; selecionar o que a organização precisa verificar.
2. Distinguir avaliação de vulnerabilidades, pentest sob escopo e prova mínima, emulação de objetivo adversário Red Team e operação defensiva Blue Team.
3. Purple Team como colaboração: hipótese compartilhada, ação, observação, ajuste e repetição; não exige equipe permanente separada.
4. Regras de engajamento: alvos isolados, contas fictícias, técnicas permitidas, janela a definir, dados, autorização, comunicação e parada.
5. Métricas independentes: controle resistiu, ação teve êxito, sensor registrou, alerta apareceu, resposta preservou função; limitar P5 a dois achados.

**Investigação e participação conduzidas:** Professor transforma um risco anterior em objetivo e regras de exercício. A turma corrige um escopo amplo demais, define o que conta como sucesso ofensivo/defensivo e verifica se há retorno ao estado inicial.

**Registro e critério de conclusão:** Plano de avaliação com objetivos ofensivos e defensivos. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Não apresentar o bloco como formação avançada completa de Red Team. Nenhum teste contra sistemas públicos, institucionais ou terceiros.

**Ponte:** Superfície em escopo para A26.

<a id="a26"></a>

### A26 — O que o reconhecimento permite afirmar?

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M5/P5.

**Herança concreta:** A25 — Plano de avaliação com objetivos ofensivos e defensivos.

**Objetivos observáveis:**

- Construir inventário de superfície no laboratório.
- Separar descoberta, hipótese e condição demonstrada.
- Escolher confirmação proporcional ao escopo.

**Conteúdos, na ordem de construção:**

1. Reconhecimento orientado ao objetivo da A25: inventário conhecido, serviço, interface e fluxo de usuário; distinguir informação fornecida de observação atual.
2. Usar navegação e DevTools para endpoints, parâmetros, métodos, respostas e limites de confiança; registrar origem de cada afirmação.
3. Introduzir descoberta restrita de serviço ou proxy/scanner somente se resolver lacuna real e após mostrar funcionamento e rastro.
4. Separar banner/versão declarada, associação em catálogo, candidato e vulnerabilidade confirmada; considerar configuração e caminho efetivo.
5. Priorizar até dois candidatos para autorização e entrada de dados; formular teste mínimo e regra de parada.

**Investigação e participação conduzidas:** Professor percorre o alvo local autorizado, confronta inventário com requisições e apresenta um candidato produzido por ferramenta. A turma escolhe qual evidência ainda falta antes de chamar o candidato de achado.

**Registro e critério de conclusão:** Inventário e casos candidatos, com falsos positivos possíveis. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Porta aberta não prova vulnerabilidade. Não transferir descoberta ativa web automaticamente a OT; o bloco industrial utilizará cenário e técnicas próprias.

**Ponte:** Casos selecionados para verificação manual em A27.

<a id="a27"></a>

### A27 — O controle de acesso resiste a variações que ainda não testamos?

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M5/P5.

**Herança concreta:** A26 — Inventário e casos candidatos, com falsos positivos possíveis.

**Objetivos observáveis:**

- Formular variação nova de autorização.
- Sustentar achado com política e contraprova.
- Verificar correção e regressão legítima.

**Conteúdos, na ordem de construção:**

1. Retomar A05 brevemente como linha de base, sem repetir a aula: escolher variação nova de alteração por objeto, função ou contexto previamente ensaiada.
2. Explicitar sujeito, ação, recurso, contexto e etapa do fluxo; comparar política esperada com decisão observada no servidor.
3. Usar recorte WSTG de autorização e orientação OWASP para verificar controle em cada operação; distinguir autenticação, interface e proteção do recurso.
4. Produzir prova mínima com estado inicial, variação, rastro, consequência sustentada e limite; preservar dados fictícios.
5. Demonstrar correção preparada: política aplicada no ponto adequado, caso negado e operação legítima preservada; registrar primeiro achado P5.

**Investigação e participação conduzidas:** Professor executa um caso legítimo e uma variação de abuso que acrescenta propriedade nova em relação à A05. Compara a aplicação vulnerável e uma variante corrigida preparada, declarando a diferença entre os ambientes.

**Registro e critério de conclusão:** Achado reproduzível com teste legítimo e teste de abuso. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Pseudocódigo ou recomendação não contam como reteste executado. Não presumir que o Juice Shop original foi corrigido ao demonstrar outra implementação.

**Ponte:** Segundo contexto de entrada e limite da defesa em A28.

<a id="a28"></a>

### A28 — Quando o dado passa a ser interpretado como instrução?

**Carga:** 100 min (45 T / 55 P). **Vínculo:** M5/P5.

**Herança concreta:** A27 — Achado reproduzível com teste legítimo e teste de abuso.

**Objetivos observáveis:**

- Explicar quando entrada altera a interpretação de uma instrução.
- Selecionar defesa específica para o contexto.
- Avaliar efeito da correção sem quebrar função.

**Conteúdos, na ordem de construção:**

1. Escolher uma injeção principal, preferencialmente SQL, ensaiada no laboratório: fluxo normal, entrada controlável, interpretação e consequência.
2. Distinguir dado e estrutura de comando/consulta; produzir prova mínima do efeito sem extração ampla nem impacto desnecessário.
3. Comparar validação de entrada, consulta parametrizada e menor privilégio; cada medida resolve uma parte do problema.
4. Usar XSS apenas como contraste conceitual curto: codificação de saída depende do contexto e não é substituída universalmente por parametrização SQL.
5. Reexecutar caso legítimo e variação na versão corrigida preparada; ligar evidência, causa sustentada, controle e segundo achado P5.

**Investigação e participação conduzidas:** Professor percorre entrada normal, variação controlada e contraprova; em seguida mostra correção verificável em ambiente identificado. A turma explica por que um remédio genérico de “sanitização” não basta para qualquer interpretador.

**Registro e critério de conclusão:** Segundo achado e contraprova; sem coleção de flags. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Uma exploração principal e uma correção por encontro. Não atribuir causa interna exata apenas a erro externo; fonte/variante preparada deve sustentar a explicação.

**Ponte:** Caminho adversário curto e telemetria prevista para A29.

<a id="a29"></a>

### A29 — A defesa percebe o caminho que o exercício Red Team percorreu?

**Carga:** 100 min (50 T / 50 P). **Vínculo:** M5/P5.

**Herança concreta:** A28 — Segundo achado e contraprova; sem coleção de flags.

**Objetivos observáveis:**

- Relacionar objetivo adversário a ações delimitadas.
- Comparar execução, registro, alerta e interpretação.
- Identificar melhoria defensiva testável.

**Conteúdos, na ordem de construção:**

1. Reabrir regra e fontes da A24, objetivo A25 e achados A27–A28; confirmar telemetria ativa antes da ação.
2. Planejar emulação curta de duas ou três ações já ensaiadas, com objetivo definido; usar ATT&CK para nomear comportamento pertinente, sem simular campanha completa.
3. Alternar perspectivas: Red prevê condição e resultado; Blue prevê rastro, hipótese, alerta e resposta; explicitar conhecimento fornecido à turma.
4. Construir matriz ação executada/registrada/coletada/alertada/interpretada; distinguir falha da ação, falha de coleta e lacuna de detecção.
5. Selecionar uma melhoria e novo teste com caso positivo e contraprova; preparar transferência metodológica à OT.

**Investigação e participação conduzidas:** Professor executa a sequência no laboratório e congela a evidência após cada ação. Turma compara previsões com eventos e detector; depois acompanha ajuste de uma condição e repetição controlada.

**Registro e critério de conclusão:** Mapa ação→rastro→detecção/ausência→limite. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Não afirmar cobertura global ATT&CK por poucas ações. A sequência TI não comprova caminho de invasão TI→OT; a A30 será transferência para cenário separado.

**Ponte:** Ajuste colaborativo de detecção e validação em A30.

<a id="a30"></a>

### A30 — Como validar defesa OT sem comprometer o processo?

**Carga:** 100 min (55 T / 45 P). **Vínculo:** M5/P5.

**Herança concreta:** A29 — Mapa ação→rastro→detecção/ausência→limite.

**Objetivos observáveis:**

- Validar controle e detecção no processo OT conhecido.
- Relacionar ação digital a funcionamento operacional.
- Verificar restauração com critérios explícitos.

**Conteúdos, na ordem de construção:**

1. Reabrir tanque A11/A13, arquitetura A14 e manutenção/recuperação A15; conferir variável, unidade, relógio, intervalo e condição normal.
2. Definir exercício colaborativo limitado: tentativa de acesso/manutenção autorizada e variação negada; vincular hipótese de rastro ao ponto real de observação.
3. Confrontar alcance de rede, autorização, comando e efeito no processo; observar atualização da HMI, alarmes e continuidade da variável conforme o cenário.
4. Ajustar um controle ou uma detecção, repetir teste e contraprova; explicar diferença entre segmentação eficaz, visibilidade e resposta.
5. Restaurar configuração/estado com validação operacional; registrar restrições, responsável e contribuição OT à decisão final.

**Investigação e participação conduzidas:** Professor conduz rodada Purple no simulador isolado: previsão, ação, leitura conjunta, ajuste e repetição. Se usar replay offline, a turma analisa rastros e plano de validação, registrando que não houve prova de controle implantado.

**Registro e critério de conclusão:** Comparação antes/depois da defesa e do processo. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Não operar controlador real nem induzir condição física perigosa. Parar processo e restaurar serviço não são sinônimos de estado seguro; critério pertence ao cenário fornecido.

**Ponte:** Eficácia demonstrada, incerteza e decisão final na A31.

<a id="a31"></a>

### A31 — O reteste sustenta a decisão da organização?

**Carga:** 100 min (55 T / 45 P). **Vínculo:** M5/P5.

**Herança concreta:** A30 — Comparação antes/depois da defesa e do processo.

**Objetivos observáveis:**

- Classificar resultado de reteste sem exagerar conclusão.
- Priorizar ação com contexto e risco residual.
- Comunicar decisão técnica e executiva sustentada.

**Conteúdos, na ordem de construção:**

1. Reabrir P1–P4 por referência e até dois achados P5: requisito, política, arquitetura, mecanismo e observabilidade relevantes.
2. Reteste: repetir condição original de forma segura, testar operação legítima e registrar estado corrigido, mitigado, não reproduzido ou não retestado.
3. Relatório técnico: escopo, estado inicial, evidência, causa sustentada, impacto, limite, recomendação e verificação; distinguir severidade de prioridade de negócio.
4. Decisão executiva: responsável, prazo a pactuar, dependência, aceitação/novo tratamento e residual; ligar melhoria ao SGSI e à operação.
5. Consolidar comunicação e critérios de acompanhamento; fechar a única submissão P5 sem criar projeto final ou reescrever produtos anteriores.

**Investigação e participação conduzidas:** Professor retoma evidência inicial e retestes selecionados, compara conclusões excessivas com conclusões sustentadas e conduz decisão sobre residual. A turma justifica uma prioridade e explicita evidência ainda faltante.

**Registro e critério de conclusão:** Dossiê final enxuto e decisão revisável. O estudante justifica a decisão com uma evidência ou premissa identificada e explicita uma conclusão que o caso ainda não autoriza. Esse registro alimenta P5, sem entrega separada.

**Limite e cuidado de preparação:** Não repetir exploração insegura para maximizar impacto. A31 tem conteúdo de reteste, priorização e comunicação; não será ocupada integralmente por apresentações de grupos.

**Ponte:** Plano de acompanhamento pós-curso, sem nova entrega.

**Referências oficiais do macrocomponente:** [Avaliação técnica — NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final); [OWASP WSTG — autorização](https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/05-Authorization_Testing/README); [OWASP SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html); [MITRE — emulação adversária](https://attack.mitre.org/resources/adversary-emulation-plans/); [NIST SP 800-82r3 — OT](https://csrc.nist.gov/pubs/sp/800/82/r3/final). As fichas futuras devem registrar edição, seção e, quando aplicável, identificador do requisito/teste realmente utilizado.

## Critérios antes de transformar o planejamento em aulas

1. **M1:** preparar uma ameaça rastreável, dois riscos comparáveis, critérios de avaliação e exemplo completo de requisito/controle/teste; não exigir todo o catálogo ISO ou OWASP.
2. **M2/OT:** documentar o contrato do processo: componentes, variável, unidade, faixa de operação, relógios, ações permitidas, consequência e restauração. Ensaiar permitido, negado e função preservada.
3. **M3:** fornecer ferramentas prontas e arquivos positivos/negativos, chaves descartáveis e referência confiável. Escolher uma implementação de assinatura e uma interface AEAD compatível. Ensaiar resultados antes de escrever instruções operacionais.
4. **M4:** preparar um pacote único com dados fictícios, procedência identificada, eventos positivos/negativos, tempo consistente e detector candidato reutilizável.
5. **M5:** preparar escopo, telemetria, no máximo dois achados e variantes corrigidas verificáveis; distinguir demonstração de mitigação, reteste real e análise offline. Não acumular novas ferramentas para variar a aula.
6. **Avaliação:** critérios comuns de evidência rastreável, interpretação, decisão, validação e contribuição individual dentro do produto da dupla. As estimativas externas somam 12h por dupla; datas e pesos dependem do plano docente/calendário e não estão publicados.
7. **Produção futura:** cada página MkDocs deverá integrar explicação completa, exemplo trabalhado, evidência, decisão, aplicação e referência à atividade do macrocomponente. Este documento define conteúdo e progressão; não substitui o preparo dos insumos e o roteiro de execução.

## Revisão técnica incorporada

O especialista revisou os 24 encontros sem modificar arquivos. Foram incorporados: separação entre requisito, controle e teste; explicitação de gestão de riscos em A09; responsabilidades e escopos normativos distintos; processo OT único; AAD, nonce e limites de replay; confiança na chave e limites de assinatura; versão antiga assinada e prevenção de regressão; detector preparado em A24 para A29; correções verificáveis em A27/A28; uma injeção principal; distinção entre replay de evidência e controle efetivamente validado. O [parecer técnico](parecer-tecnico-detalhamento.md) registra a revisão anterior. A [confrontação histórica posterior](confrontacao-a01-a07-a08-a10.md) corrige a distribuição inicial: governança A08, riscos A09, aplicabilidade e avaliação de controles A10.

**Preservação:** este detalhamento não altera aulas ministradas, slides, PDFs, páginas MkDocs ou configuração de publicação. Não autoriza deploy nem envio ao Classroom. A arquitetura e os índices docentes apontam para esta sequência prospectiva; tabelas antigas permanecem como memória e não definem novos encontros.

**Ajuste A08/A09 — 8 set. 2026:** A08 oferece política de referência PSI-NU-01 com orientação ampla para o SGSI e correspondência aos blocos 4–10, distinguindo política de procedimentos e evidências. A09 avalia uma diretriz, mantendo-a ou adaptando-a com justificativa; não exige cópia integral. Cenário, 100 minutos por encontro e entrega de 3–4 páginas permanecem.
