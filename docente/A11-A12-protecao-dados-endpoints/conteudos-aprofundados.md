# A11–A12 — Programa técnico aprofundado

**Simplificação após revisão independente — 24 set. 2026:** CSV reduzido a exemplo comparativo, com Figura 1 e arquivos prontos. Removido tutorial de criação/edição; preservados minimização, fronteira da cópia e diferença entre ocultar e remover. Destaques e passos pontuais favorecem leitura dinâmica. O procedimento de editor não é exigência da atividade documental.

**Complementação de referências — 24 set. 2026:** A11 inclui sínteses das referências DLP Microsoft/AWS/Fortinet, comparação empresarial por canal, descoberta/transformação em nuvem e exemplo industrial documental. Pesquisa não comprova produto mais implantado. Tabela LGPD reúne procedimentos, aplicação, responsáveis, evidências e fontes específicas da ANPD/normas. Mantidos objetivos, atividade única e duração a reavaliar; ver relatórios de pesquisa e validação nesta pasta.

**Responsabilidades — revisão docente de 24 set. 2026:** distinguir usuário, gestor da informação, TI/custódia, segurança e privacidade nas operações. Página inclui divisão funcional, passos do usuário comum e indicação local de executores. LGPD é enriquecida com caracterização de responsáveis e resumo de consequências administrativas/civis/penais, sem tratar incidente como crime automático. Modelo e atividade passam a exigir aprovação, execução e encaminhamento identificáveis.


**Atualização operacional — 24 set. 2026:** a pedido do docente, a A11 foi ampliada com LGPD aplicada, exportação mínima, permissões/revogação documentadas no Google Drive, configuração DLP comentada, retenção e restauração. O recorte temporal anterior abaixo é histórico de planejamento; a duração desta edição será avaliada após revisão docente. A seção de ocultação foi substituída por comparação vinculada ao arquivo entregue, sem atividade isolada. Ver o plano A11 e o registro de validação. Figuras 1–4 preservadas; prompts novos 9–11, sem renumerar 5–8 da A12.



**Estado de produção — 24 set. 2026:** páginas A11/A12, atividade, modelo e insumos produzidos localmente a partir deste planejamento. Consulte os planos por aula e `validacao-producao.md` para o estado de verificação. Os trechos prospectivos abaixo registram o planejamento de origem; publicação remota e realização não confirmadas.

**Revisão docente de 24 set. 2026.** Complementa e aprofunda o [planejamento integrado](planejamento-integrado.md). Planejamento, sem publicação ou execução de demonstrações nesta revisão. Mantém dois encontros de 100 minutos, cada um com 70 T/30 P, e exposição direta com exemplos concretos.

## Nível de formação pretendido

O estudante deve sair capaz de justificar uma decisão técnica e reconhecer quando a evidência não permite concluí-la. Saber definir DLP, listar malware ou recomendar backup é insuficiente. O ganho está em explicar **mecanismo, ponto de aplicação, dependência, evidência de funcionamento e falha remanescente**.

A relevância profissional aparece em tarefas reconhecíveis: disponibilizar dados para uma equipe sem expor o conjunto completo; revisar compartilhamentos; interpretar uma regra de segurança; distinguir backup de recuperação; avaliar um alerta; comunicar uma contenção com alcance e impacto claros. São tarefas úteis a desenvolvimento, suporte, infraestrutura e segurança.

O núcleo está nos seis blocos de cada encontro. Termos de consulta são mencionados para orientar aprofundamento, sem acrescentar demonstrações nem exigir memorização. Não retomar conceitos de A01–A10 em longas introduções. Permissões entram como mecanismo sobre dados e processos, não como repetição completa da aula de autorização.

## A11 — Arquitetura de proteção dos dados

Pergunta organizadora: **como permitir o uso necessário de um dado, controlar sua circulação e verificar se ele pode ser recuperado?**

### 1. Localização, cópias e classificação por impacto — 15 min

**Núcleo:** dado estruturado, semiestruturado e não estruturado; conteúdo e metadados; fonte principal e cópias derivadas; classificação por impacto, finalidade e contexto. Um dado pode estar simultaneamente no banco, em exportações CSV, logs, anexos, cache e backup. Sua proteção não termina na aplicação de origem.

Separar tipo do dado, nível de classificação e criticidade operacional. “Pessoal”, “confidencial” e “essencial ao funcionamento” respondem a perguntas diferentes. Um manual público pode exigir integridade elevada; uma configuração de equipamento pode ser pequena e crítica. Classificação define tratamento e não apenas uma etiqueta.

O inventário mínimo relaciona **conteúdo → localização/cópia → quem acessa → uso necessário → responsável → retenção**. O responsável decide tratamento; quem administra o armazenamento implementa controles. Não transformar essa distinção em aula extensa de papéis jurídicos.

**Exemplo concreto:** exportação de três colunas de uma tabela de teste para CSV. Comparar o controle aplicado na origem com o arquivo exportado e seus destinatários. Nenhuma organização fictícia é necessária.

**Decisão profissional:** o compartilhamento precisa do conjunto inteiro ou de uma projeção com menos campos? Que cópias ficam fora do controle original?

**Evidência de aprendizagem:** localizar duas cópias e justificar uma classificação com base no dano, não na extensão do arquivo.

### 2. Estado do dado e fronteira efetiva do controle — 20 min

**Núcleo:** repouso, trânsito e uso relacionados a disco, canal e processo; permissões de leitura/escrita, herança e acesso efetivo; diferença entre autenticar pessoa e limitar o que um processo executado por ela consegue fazer.

Explicar o limite de cada camada: cifragem de disco ajuda a proteger o suporte fora de uso, mas o sistema desbloqueado disponibiliza dados aos processos autorizados; TLS protege o transporte entre seus pontos de terminação, não decide se o destinatário pode guardar ou redistribuir o conteúdo; permissão de leitura pode permitir copiar. Não apresentar “desabilitar download” como garantia contra toda reprodução.

Uma restrição de interface não equivale a proteção dos dados subjacentes. Ocultar coluna, aba ou campo visual pode deixar o valor no arquivo entregue. Analogamente, compartilhar por link pode ampliar o conjunto de leitores além de destinatários nominados, conforme configuração.

**Exemplo concreto:** comparar uma cópia com coluna oculta e uma exportação que efetivamente exclui a coluna. Depois, ler uma captura de acesso efetivo de um arquivo de teste. O objetivo é explicar a fronteira, não ensinar vários sistemas de permissões.

**Decisão profissional:** escolher o ponto de aplicação do controle e indicar quem continua capaz de ler o dado.

**Evidência de aprendizagem:** explicar por que “está cifrado” ou “exige login” não basta para avaliar exposição.

### 3. Redução de exposição e transformação dos dados — 15 min

**Núcleo:** minimização, mascaramento, pseudonimização, anonimização e cifragem comparadas por finalidade, reversibilidade e dependências. Mascarar a visualização pode preservar o original acessível; substituir identificadores exige proteger a tabela de correspondência; remover nomes não garante impossibilidade de associação por outros atributos.

Discutir anonimização como propriedade a avaliar conforme dados e contexto, sem prometer que uma transformação isolada a produz. Criptografia será aprofundada em A13–A18; aqui interessa quem pode recuperar a informação e de que segredo ou autorização isso depende. Tokenização entra apenas como consulta complementar, comparada à substituição por referências.

**Exemplo concreto:** quatro vistas de uma tabela pequena de teste: completa; com menos colunas; com identificação parcialmente mascarada; com identificador substituto. Anotar o que cada vista ainda permite inferir e onde ficou o original.

**Decisão profissional:** preparar dados para suporte, demonstração ou desenvolvimento sem distribuir informações desnecessárias.

**Evidência de aprendizagem:** escolher uma transformação e apontar o risco que ela não elimina.

### 4. Como DLP identifica e controla circulação — 25 min

**Núcleo:** detecção de conteúdo e decisão de política são etapas diferentes. Explicar reconhecimento por padrão e contexto, rótulos e correspondência com dados conhecidos; mostrar que um padrão numérico sozinho pode confundir informações distintas. Correspondência exata e fingerprint de documentos ficam como comparações de mecanismo, sem configuração de produto.

Uma regra relaciona **conteúdo/rótulo + usuário/ação + destino/canal + condição → ação + registro + exceção**. Comparar DLP de endpoint, serviço e rede pelo local de observação. A capacidade de inspecionar conteúdo depende de integração, formato, permissões e acesso ao texto legível. Arquivo cifrado não é automaticamente inspecionável por toda solução.

Diferenciar auditoria, aviso, bloqueio e exceção autorizada. O registro deve permitir entender o que foi observado e qual ação ocorreu. Exceção precisa de escopo, responsável, motivo e validade; não é liberação permanente genérica.

Falso positivo bloqueia uso legítimo; falso negativo deixa passar o evento que a política deveria controlar. Validar exige exemplos de ambos os lados da decisão, não apenas mostrar um bloqueio. Aumentar sensibilidade pode ampliar alertas indevidos; a qualidade depende também dos dados de teste e do contexto.

**Exemplo concreto:** regra didática que impede compartilhar conteúdo rotulado como restrito com destino externo não aprovado. Usar quatro amostras: restrito para externo; restrito para interno autorizado; público para externo; restrito para exceção válida. Alterar rótulo ou cobertura do canal e discutir o resultado esperado. A avaliação manual valida a lógica, não a implantação do produto.

**Decisão profissional:** avaliar se a regra protege o fluxo relevante e se impede trabalho legítimo. Demonstrações de produto precisam registrar o resultado real, quando forem produzidas.

**Evidência de aprendizagem:** justificar uma contraprova e um caso que o controle não consegue observar. Base técnica: [DLP](https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp) e [classificação e falsos positivos](https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-reduce-false-positives).

### 5. Retenção, backup e recuperabilidade — 15 min

**Núcleo:** retenção e descarte como redução de acúmulo; sincronização, versionamento, snapshot e backup comparados pelo domínio de falha. Uma cópia acessível pelas mesmas credenciais pode compartilhar o comprometimento da origem. Redundância de armazenamento não resolve toda exclusão, alteração ou perda de acesso.

Introduzir cópia offline ou imutável, separação de credenciais e ensaio de restauração. Imutabilidade depende da política configurada e não comprova, sozinha, que a cópia contém dados íntegros e utilizáveis.

Apresentar RPO como objetivo de perda aceitável de dados medido no tempo e RTO como objetivo de tempo para retomada. Um backup diário pode ser incompatível com tolerância de perda de uma hora; a frequência nominal não prova RPO atingido. Restauração exige testar dados, aplicação e acessos pertinentes, não apenas obter mensagem de sucesso.

**Exemplo concreto:** linha temporal de edições e cópias já fornecida. Identificar o ponto recuperável e comparar com o objetivo. Mostrar posteriormente uma restauração de arquivo descartável ou sua sequência capturada, se preparada e testada.

**Decisão profissional:** pedir evidência de recuperação antes de aceitar a afirmação “temos backup”. Base: [CISA — StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide).

### 6. Síntese: escolher controles que se complementam — 10 min

Comparar exportação indevida, cópia perdida e alteração por processo autorizado. Pedir objetivo, mecanismo, lugar de aplicação, verificação e limite. O quadro final deve permitir reconhecer por que DLP não recupera arquivo e backup não impede exposição.

**Saída da A11:** justificativa técnica de proteção e recuperação, com regra verificável. A pergunta para A12 é: que alcance tem um programa executado com acesso legítimo aos dados?

## A12 — Comprometimento e defesa do endpoint

Pergunta organizadora: **como um programa obtém alcance sobre dados e sistema, que rastros deixa e como decidir uma resposta?**

### 1. Contexto de execução e privilégio — 15 min

**Núcleo:** arquivo executável/script, processo, processo pai, usuário, permissões e recurso acessado. Usar “contexto de segurança do processo” antes de introduzir nomes específicos de objetos de um sistema operacional.

Programa malicioso nem sempre precisa de privilégio administrativo: acesso do usuário pode bastar para ler ou alterar seus documentos. Privilégio elevado amplia outras ações possíveis. Arquivo no disco não comprova execução; processo observado não comprova sozinho intenção maliciosa.

**Exemplo concreto:** árvore de processos de aplicação benigna com usuário e caminho visíveis. Localizar criação de processo e acesso a arquivo de teste. Demonstrar que o nome da aplicação é apenas um atributo.

**Decisão profissional:** delimitar o que pode ter sido afetado a partir da identidade e permissões do processo, sem concluir comprometimento de toda a rede.

### 2. Mecanismos de comprometimento e propagação — 20 min

**Núcleo:** distinguir vetor de entrega, execução, persistência, propagação, comunicação externa e efeito. Nem todo malware possui todas essas características; uma ação sobre credenciais pode ocorrer sem instalar malware no endpoint.

Comparar vírus e worm pelo mecanismo de replicação; trojan pelo engano na apresentação; ransomware e spyware pelo efeito. Um mesmo artefato pode combinar características. Persistência representa possibilidade de voltar a executar; serviço e tarefa agendada também têm usos legítimos. Mostrar configuração ou diagrama, sem criar mecanismo de persistência.

Apresentar abuso de ferramentas legítimas: interpretadores e utilitários administrativos podem participar de atividades maliciosas. A presença de ferramenta conhecida não torna a ação confiável. Introduzir “fileless” apenas para corrigir a ideia de que toda execução suspeita exige um novo executável no disco; não prometer ausência de arquivos ou rastros.

Autopropagação de worm difere de acesso a vários destinos por aplicação legítima e de movimento lateral conduzido por atacante. A evidência necessária inclui ação e efeito nos alvos, não apenas quantidade de conexões.

Ransomware permite integrar perda de disponibilidade e possível exposição: recuperar uma cópia não desfaz roubo de dados. O panorama brasileiro de referência está no [CERT.br — entender ransomware](https://www.cartilha.cert.br/docs/ransomware/entender/).

**Exemplo concreto:** comparação de comportamentos em cartões curtos, classificados por função. Sem narrativa de empresa ou cadeia fictícia de invasão.

**Decisão profissional:** escolher a medida pela ação observada e pelo recurso afetado, em vez de depender do nome da família.

### 3. Arquitetura defensiva e limites das ferramentas — 15 min

**Núcleo:** relacionar atualização à falha corrigida, menor privilégio ao alcance, controle de aplicações à execução admitida e restrição de macros/scripts à redução de caminhos de execução. Cada controle possui dependências e pode afetar função legítima.

Antivírus pode combinar assinaturas, reputação, heurísticas e comportamento. EDR agrega telemetria e recursos de investigação/resposta conforme produto e configuração; não estabelece oposição simplista entre “antivírus só conhece arquivos” e “EDR detecta tudo”. Ausência de alerta pode refletir falta de cobertura.

Distinguir funções: painel de processos mostra estado; coletor de eventos registra atividade; mecanismo de detecção avalia sinais; console pode apoiar resposta. Sysmon é fonte de telemetria, não um EDR completo nem análise automática de cada evento. SIEM aparece somente para situar agregação; regras e operação de SOC ficam para A29.

**Exemplo concreto:** diagrama de quatro funções — coleta, correlação, alerta, ação — identificando o que existe em uma captura e o que depende de outro componente.

**Decisão profissional:** especificar o que precisa ser monitorado e como verificar cobertura, em vez de recomendar genericamente “instalar antivírus”.

### 4. Telemetria e triagem fundamentada — 25 min

**Núcleo:** ler tempo, dispositivo, usuário, imagem/caminho, processo pai, identificador de processo, destino de rede e ação sobre arquivo. Explicar os campos antes de interpretar. No exemplo Windows, usar recortes de criação de processo, criação de arquivo e conexão de rede. IDs de evento são referência local; não são objetivo de memorização.

Na [documentação do Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon), criação de processo, conexão e criação de arquivo são registros distintos. Conexões dependem da configuração de coleta; ausência do evento não prova ausência da ação. Correlacionar dispositivo, identificador e tempo; PID pode ser reutilizado.

Depois de reconhecer os campos, comparar hipótese suspeita e explicação legítima. Processo pai incomum, caminho gravável e conexão externa ganham significado em conjunto e no contexto; isoladamente não constituem diagnóstico. Hash pode identificar uma amostra, mas não é classificação de malignidade. Seu mecanismo será estudado em A14.

Separar **evento registrado → regra acionada → alerta → ação de proteção → conclusão da análise**. “Detectado”, “bloqueado”, “em quarentena” e “resolvido” não são sinônimos. Bloquear uma ação não comprova que outras não ocorreram.

**Exemplo concreto:** três a cinco registros fornecidos e um alerta anotado, com origem documentada. Estudantes devem localizar o vínculo entre os registros, a ação realmente registrada e uma pergunta ainda sem resposta. Se os registros forem didáticos, indicar isso expressamente.

**Decisão profissional:** produzir uma triagem que outra pessoa consiga revisar: observação, hipótese, alcance conhecido, informação ausente e próxima verificação.

### 5. Contenção, erradicação e recuperação — 15 min

**Núcleo:** comparar quarentena de arquivo, encerramento de processo, isolamento de rede, revogação de sessão/credencial e reconstrução do dispositivo pelo alcance e pelo impacto. Não são passos obrigatórios para todo alerta. Isolar rede não interrompe necessariamente alteração local; encerrar processo não remove necessariamente persistência; remover arquivo não encerra acesso remoto já estabelecido.

Conter limita o dano; erradicar remove causa e mecanismos remanescentes; recuperar restabelece função confiável. Preservar registros e comunicar decisão faz parte do trabalho. Ações que afetam processo industrial exigem análise própria, tratada em A19–A22.

O retorno deve considerar causa tratada, credenciais afetadas, funcionamento, telemetria e restauração testada. Não ensinar “reiniciar”, “formatar” ou “restaurar backup” como resposta universal. Explicar o critério de cada escolha sem executar ações sobre máquina de produção.

**Exemplo concreto:** tabela com alvo, efeito esperado, impacto, reversibilidade e forma de verificar três ações possíveis. Escolher a menor intervenção capaz de conter o efeito observado; caso não haja evidência suficiente, explicitar o que coletar e quando escalar.

**Decisão profissional:** comunicar o que será interrompido, por quê, quem autoriza e como avaliar o retorno.

### 6. Integração e limites da proteção — 10 min

Comparar três falhas independentes: usuário envia dado ao destino errado; processo autorizado lê e altera documentos; dispositivo fica indisponível. Reutilizar o quadro de A11 para justificar DLP, controles de execução, detecção e recuperação, deixando claro o limite de cada um.

**Saída da A12:** triagem fundamentada e decisão proporcional de resposta. A ponte para A13 é distinguir propriedades que mecanismos criptográficos oferecem das condições de confiança do dispositivo que usa a chave.

## Recorte para evitar superficialidade e excesso

| Prioridade | Tratamento |
|---|---|
| Profundidade presencial A11 | Fronteira real do controle; regra DLP com contraprova; recuperação verificável. As definições dão suporte a essas decisões. |
| Profundidade presencial A12 | Contexto de execução; correlação de poucos registros; alcance de contenção. Categorias de malware apoiam a explicação. |
| Consulta A11 | Configuração de classificadores avançados, tokenização, técnicas formais de anonimização, arquitetura completa de backup e obrigações jurídicas específicas. |
| Consulta A12 | Análise de memória, engenharia reversa, configuração extensiva de Sysmon, regras SIEM, cadeias completas de exploração e taxonomias detalhadas. |
| Critério de redução se o tempo apertar | Reduzir quantidade de exemplos e termos acessórios; preservar mecanismo, contraprova e limite das três decisões prioritárias por encontro. Não transferir uma operação essencial inédita para casa. |

A demonstração ao vivo é opcional; o insumo concreto legível é obrigatório na produção. As capturas e os recortes ainda precisam ser selecionados e verificados. Documentação do produto fundamenta capacidades, não comprova execução no ambiente da disciplina.

## Verificação da relevância na atividade única

A atividade deve exigir duas decisões técnicas curtas com materiais fornecidos. Na parte de dados: identificar uma cópia exposta, justificar controles, prever regra e contraprova e definir evidência de recuperação. Na parte de endpoint: correlacionar rastros, apontar informação ausente, propor contenção e critério de retorno. Respostas que apenas nomeiem DLP, antivírus ou backup não atendem ao critério.

Antes da produção, alinhar os exemplos, a alternativa estática e a rubrica a esse nível de exigência. O aprofundamento não autoriza criar duas novas entregas ou material público nesta etapa.

## Fontes e procedência

Referências consultadas em 24 set. 2026: Microsoft Learn para mecanismos DLP e telemetria; CERT.br para panorama de ransomware; CISA para proteção e recuperação. Os links aparecem junto dos conteúdos pertinentes. As páginas CERT.br/CISA foram localizadas em resultados oficiais; a abertura integral não ficou disponível nesta consulta e deverá ser revalidada ao selecionar trechos ou imagens para a aula. Exemplos autorais neste plano são propostas didáticas, não resultados observados.
