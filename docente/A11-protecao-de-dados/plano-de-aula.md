# Plano docente — A11: proteção de dados

## Ficha-base

| Campo | Definição |
|---|---|
| Página | `docs/aulas/A11-protecao-de-dados.md` |
| Ementa | Localização e cópias; LGPD aplicada; exportação mínima, permissões/revogação, estados, transformações, implementação DLP, retenção e recuperação. |
| Objetivos | Mapear dados/cópias e fundamentos de tratamento; justificar minimização e especificar/verificar controles de acesso; traduzir regra DLP e recuperação em configuração e contraprovas. |
| Carga | A reavaliar após revisão do material ampliado, conforme solicitação docente; 100 min (70/30) é a referência anterior. |
| Formato | Exposição direta, sínteses temáticas e exemplos de apoio; sem cenário condutor. |
| Pré-requisito | Conceitos de acesso e propriedades de segurança; não exigir produtos da A10. |
| Infraestrutura | MkDocs, CSVs e editor/gerenciador; contas de teste Google Drive opcionais; DLP documentado depende de licença, com alternativa em tabelas. |
| Evidência | Comparação de conteúdo mínimo, registro de configuração/testes, fundamento e lacuna LGPD, decisão DLP, retenção e restauração proposta/observada devidamente distinguidas. |
| Critério | Explicar mecanismo e limite, identificar quem decide/executa/verifica e a quem encaminhar dúvidas, preservar função legítima e separar exemplo de resultado executado. |
| Fontes | Referências oficiais vinculadas na página; programa técnico no planejamento integrado. |

## Ganho e cadeia

A10 foi confirmada como ministrada, sem comprovação de cada checkpoint. A11 retoma apenas acesso e proteção: o tratamento acompanha dado e cópias. Cadeia: conceito de acesso → objetos e campos visíveis → comparação trabalhada → estrutura/resultado → propriedade e limite → decisão de controle → contraprova → parecer integrado → processo que manipula os dados na A12.

## Condução da edição ampliada — sem fechamento de tempo

A decisão docente prioriza completude antes da estimativa de duração. O plano anterior de 100 minutos está em `../A11-A12-protecao-dados-endpoints/conducao-A11-anterior-100min.md`. Não apresentar a nova edição como cabendo nos mesmos minutos sem análise posterior.

| Bloco | Conteúdo e demonstração | Ponto de espera |
|---|---|---|
| Responsabilidades | Usuário, gestor, TI, segurança e privacidade; solicitação e delegação | Não confundir permissão técnica, atribuição funcional e categoria legal |
| Cópias e exportação | Figura 1 e comparação breve: base completa, coluna oculta e contagem pronta; uma linha de inventário | Turma identifica campos removidos e função preservada |
| Transformações | Exportação → ocultação → mascaramento dinâmico/estático → pseudônimo com correspondência separada | Aparência, conteúdo entregue e associação são dimensões distintas |
| LGPD aplicada | Dado pessoal/sensível, agentes aplicados ao videomonitoramento industrial e limites de responsabilidade; finalidade/base legal, direitos, infrações e consequências; tabela de procedimentos, responsáveis, evidências e links ANPD | Não confundir rótulo, base legal e permissão técnica |
| Estados, permissões e compartilhamento | Camadas e Figura 2; Google Drive com pasta nova e identidades de teste; conceder e retirar acesso | Distinguir negação no serviço de download anterior |
| DLP | Arquivo e tentativa de envio → reconhecimento → ação → cobertura/exceção → D1–D5 → mecanismos → configuração com DOCX de teste; piloto sem D4 enquanto não houver mecanismo | Distinguir simulação, aplicação, exceção e lacuna de cobertura |
| Soluções e alternativas DLP | Comparar pontos de controle e soluções empresariais; distinguir Macie/Google Sensitive Data Protection de bloqueio; exemplo CAD/PDF, limites de evidência de adoção e controles sem suíte | Não confundir marca/licença ou alternativa parcial com cobertura comprovada |
| Retenção | Marco inicial, responsável, execução e cópias em destinos diferentes | Não presumir prazo legal ou exclusão universal |
| Recuperação | Perguntas sobre perda tolerável e prazo de retorno; objetivos RPO/RTO, cálculo e Figura 4 antes dos parâmetros de backup; ensaio em três pastas | Conferir conteúdo e origem; não confundir ensaio local com backup independente |
| Parecer integrado | Proposta de configuração, contraprovas e evidência necessária | Uma entrega após A12, sem execução de serviço exigida em casa |

A página fornece alternativas documentais completas. Preparar contas de laboratório próprias somente se disponíveis e autorizadas; sem elas usar matriz de permissões e configuração comentada. Não alterar contas institucionais de produção. DLP depende de licença e permissões não confirmadas; não prometer implantação real. Exemplos Google Drive e Microsoft Purview são independentes.

A familiaridade operacional não é presumida. A comparação de exportações usa arquivos prontos, sem tutorial de editor. No ensaio de restauração, demonstrar os passos do editor/gerenciador antes de qualquer reprodução opcional. Interromper quando o estado divergir do previsto; manter o diagnóstico na mesma página. Não atribuir à turma execução que ainda não ocorreu.

## Respostas de referência e mediação

- Exportação: contagem por setor/situação não necessita contato. Origem protegida não governa automaticamente o CSV copiado.
- Responsabilidades: avaliar quem decide, executa e verifica; usuário segue o padrão e encaminha exceções, não implanta DLP/backup corporativo por iniciativa própria. Papéis exemplificam funções, não organograma obrigatório.
- LGPD: não assumir que consentimento é obrigatório em todo tratamento, nem que rótulo restrito significa dado sensível. Não definir base legal com os dados incompletos da atividade.
- Permissões: acesso geral restrito não dispensa revisão de grupos e herança; teste como proprietário não é contraprova; revogação não apaga download.
- Transformações: campo oculto permanece; mascaramento dinâmico altera consulta e estático substitui valores na cópia; pseudônimo exige correspondência separada e não elimina associação; cifragem não garante proteção após acesso ao texto legível.
- Incidente: usuário reporta suspeita internamente; operador informa controlador; controlador avalia e comunica formalmente quando cabível. Não transferir a obrigação integral ao encarregado nem pedir classificação penal ao usuário.
- Piloto Purview: usar DOCX artificial sem rótulo distribuído; preparar/aplicar rótulo em ambiente autorizado. D4 é requisito não implementado no piloto inicial; não executar como se estivesse.
- Regra trabalhada: D1 bloqueia; D2/D3 não bloqueiam por essa regra; D4 aplica exceção; D5 não é avaliado pelo mecanismo. Exceção expirada retira a condição de liberação de D4.
- Recuperação da página: janela de 2 h excede RPO de 1 h; recuperação de 1 h 30 atende RTO de 2 h no exercício. Conferir conteúdo e função além da abertura do arquivo.
- Na atividade: exportação completa amplia acesso sem necessidade; aceitar agregação por setor/situação, com revisão antes de alterar rótulo. A bloqueia, B/C não bloqueiam por essa regra, D bloqueia por exceção expirada, E fica fora da avaliação. Janela de perda de 30 min excede RPO de 15 min; recuperação de 45 min atende RTO de 60 min.
- Consulta LGPD: o quadro não impõe todos os procedimentos a todo agente. Distinguir condição legal, responsável e instrumento de evidência; não confundir registro de operações com log ou registro de incidente.
- Mercado DLP: não há evidência suficiente de produto mais implantado por setor. Reconhecimento como líder e mindshare não equivalem a instalações; escolha didática Purview não é recomendação universal. Macie/SDP exemplificam descoberta/transformação; achado não comprova bloqueio.
- Rubrica compartilhada na atividade; não aceitar nome de produto sem mecanismo, verificação e limite.

## Figuras e encerramento

As Figuras 1–4 e 9–13 foram recebidas e incorporadas, com legendas, textos alternativos e acesso aos originais; os prompts foram arquivados na área docente. Fronteiras de proteção, fluxo DLP e intervalos de RPO/RTO foram revisados; ressalvas estão registradas nas revisões das figuras. O texto e as tabelas preservam o conteúdo necessário à leitura sem imagens. Permanecem pendentes os prompts 6–8 da A12; a Figura 10 incorporada aguarda correção editorial da palavra “RODAPÉ:”.

Não publicar gabarito. Prazo fica no Classroom. A página apenas encaminha para a entrega integrada; nenhuma atividade foi enviada ao Classroom nesta produção.

## Acesso visual e atividade independente — 24 set. 2026

A leitura do Purview usa guia público e capturas oficiais; não depende de licença discente. Operação real é opcional, em ambiente autorizado. A atividade conserva requisitos e rubrica, com acesso direto a `docs/atividades/A11-A12-parecer.html`, fora do menu. Fonte Markdown preservada para manutenção e links anteriores. Definições de sincronização, versionamento, snapshot e backup separadas em itens; RPO/RTO introduzidos pelas tolerâncias do processo antes das siglas.
