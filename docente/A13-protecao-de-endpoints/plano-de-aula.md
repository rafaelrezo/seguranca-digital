# Plano docente — A13: proteção de endpoints

**Revisão de estratégia e produção — 1º out. 2026.** O docente confirmou dois encontros de proteção de dados: A11 e A12. Endpoint é o próximo encontro, A13. A distribuição abaixo planeja 100 minutos para A13. Incidentes industriais documentados entram como exemplos breves de mecanismo e consequência, por sugestão docente. A página pública foi identificada como A13; o endereço antigo de A12 endpoint encaminha para ela. O endereço da atividade integrada foi preservado, com título e entrega atualizados para A11–A13. Essa produção não comprova uso em sala.

**Revisão expositiva posterior, por solicitação docente.** A página passou de cerca de 3.990 para 2.070 palavras. Diagnóstico de carga cognitiva para estudantes com conhecimento básico de segurança e primeiro contato com telemetria de endpoint: a carga intrínseca é alta na correlação entre processo, arquivo, rede e ação; a carga extrínseca vinha de sínteses repetidas, excesso de nomes de famílias e alternância entre casos reais e registros didáticos. A edição mantém o esforço produtivo em três decisões — alcance, interpretação e resposta — e aproxima definição, exemplo e pergunta. Vírus/worm têm comparação explícita; Stuxnet e Ucrânia 2015 ficam em um quadro curto; HatMan/TRITON passa a leitura opcional para OT. L1/L2 e E1–E4 conservam procedência e função distintas. O recorte mantém conteúdo de estudo, sem comprimir a atividade única nem alegar execução em aula.

**Precisão posterior solicitada pelo docente:** a tabela curta anterior não deixava as definições claras e o CSV Linux pressupunha procedimentos que a turma Windows não havia visto. O percurso principal agora usa Bloco de Notas, Explorador e Gerenciador de Tarefas com passos, resultado e parada explícitos. W1/W2 são observações locais ou valores de referência ilustrativos; L1/L2 continuam como comparação opcional de outro ensaio. A tabela define vírus, worm, trojan, ransomware, spyware, adware malicioso, keylogger, backdoor, RAT malicioso, rootkit, bomba lógica e bot/botnet; M1–M12 demonstram cada mecanismo por rastros fictícios, sem código executável. Bloatware aparece como contraste e não é automaticamente malware. As decisões com casos industriais, controles, E1–E4 e resposta foram convertidas em procedimentos de leitura e registro. O aumento pontual de texto serve às instruções operacionais e evita depender de fala não registrada.

**Correção docente seguinte:** separar Windows e Ubuntu em dois roteiros autocontidos, agora exibidos em **abas alternativas** na página; a interpretação comum fica depois delas. Em Ubuntu, um processo Python benigno cria uma linha em pasta temporária; `ps` fornece PID/PPID (U1) e `cat` lê o arquivo (U2). O processo do ensaio é encerrado pelo próprio PID. W1/W2 e U1/U2 são pares alternativos, sem herança cruzada. O CSV L1/L2 continua como terceiro ensaio, apenas complementar. A demonstração de malware agora inclui doze modelos JavaScript executáveis no navegador, com fonte aberta, mudanças somente em memória e saída antes/depois; M1–M12 são a alternativa textual. Isso substitui a afirmação anterior de que os exemplos não tinham código executável.

**Ajuste da relação visual no simulador:** a primeira saída apenas serializava objetos em texto e não evidenciava a relação entre mecanismo e alvo. O novo painel mostra **origem → ação simulada → alvo**, seguido de cartões por objeto com **Antes/Depois** e indicação textual do que mudou. Conduzir Vírus e Worm comparando o objeto alterado (`B.exe` versus `PC-2`), depois pedir uma terceira família. Os cartões continuam modelos em memória e não rastros reais.

## Ficha-base

| Campo | Definição |
|---|---|
| Página | `docs/aulas/A13-protecao-de-endpoints.md`; endereço anterior de A12 mantido como encaminhamento. |
| Ementa | Contexto de execução, malware, camadas defensivas, telemetria, triagem e resposta. |
| Objetivos | Explicar alcance de execução/privilégios; correlacionar rastros sem extrapolar; justificar contenção e retorno. |
| Carga | 100 minutos: 70 T / 30 P de análise guiada. |
| Formato | Exposição direta, duas comparações curtas com incidentes industriais documentados, observação benigna e triagem guiada. |
| Pré-requisito | Propriedades, autorização e mecanismos de proteção de dados trabalhados em A11–A12; os checkpoints e produtos individuais ainda não foram relatados. |
| Infraestrutura | Página no navegador; Windows 10/11 com Bloco de Notas, Explorador e Gerenciador de Tarefas **ou** Ubuntu com Terminal e Python 3 para observação guiada. W1/W2 e U1/U2 ilustrativos permitem acompanhar sem computador. Simulador JavaScript no navegador, com tabela alternativa. Sem agente ou instalação. |
| Evidência | Observação limitada por fonte, correlação, informação ausente, ação e verificação. |
| Critério | Não equiparar alerta a bloqueio nem bloqueio a erradicação; justificar alcance e impacto da resposta. |
| Fontes | Sysmon/Microsoft Learn e CERT.br, com links na página e procedência dos insumos; alertas ICS-CERT/CISA indicados abaixo para os incidentes. |

## Ganho e cadeia

A11–A12 trataram controles sobre o dado. A13 examina o processo que o utiliza. Ganho novo: sair de “o dado tem permissão, regra e cópia” para “um processo com acesso pode agir sobre esse dado; que evidência delimita seu alcance e a resposta?”. Cadeia: herança conceitual de dado legível e acesso, sem presumir checkpoint individual da A11–A12 → observação benigna W1/W2 no Windows **ou** U1/U2 no Ubuntu, com L1/L2 opcional e procedência separada → diferença entre arquivo, processo e ação → definições, modelos JavaScript seguros e rastros alternativos M1–M12 → incidentes documentados que distinguem propagação, efeito e indisponibilidade → controle associado ao mecanismo → registros didáticos E1–E4 → leitura do resultado e da lacuna → contenção proporcional e critério de retorno → parecer único → pergunta sobre confiança do endpoint ao utilizar chaves no encontro seguinte de criptografia, cuja numeração ainda será conciliada.

## Recorte de incidentes industriais para a exposição

Usar **dois cartões de caso**, com 3 a 4 fatos cada, fonte e pergunta de interpretação. Eles ilustram mecanismos; não constituem os registros E1–E4 ou R1–R5 da atividade. Não usar imagem de ataque nem pedir reprodução técnica.

| Caso e fonte primária | Fato sustentado e função didática | Pergunta e limite |
|---|---|---|
| [Stuxnet — alerta ICS-CERT/CISA](https://www.cisa.gov/uscert/ics/advisories/ICSA-10-272-01) | O alerta documenta propagação por USB, compartilhamentos e arquivos de projeto, além de interação com WinCC/STEP 7. Serve para separar **meio de propagação**, execução no endpoint de engenharia e possível efeito no ambiente de controle. | “Qual observação sustenta propagação, e qual apenas aponta presença?” O alerta não transforma qualquer dispositivo USB ou projeto em prova de infecção. |
| [Rede elétrica ucraniana, 2015 — síntese CISA](https://www.cisa.gov/news-events/alerts/2022/01/11/understanding-and-mitigating-russian-state-sponsored-cyber-threats-us-critical-infrastructure) | A síntese relaciona ataque às distribuidoras, uso de BlackEnergy para obter credenciais e KillDisk para tornar computadores inoperantes. Serve para separar **acesso**, ferramenta maliciosa, indisponibilidade do endpoint e consequência operacional. | “O que uma cópia de segurança recuperaria e o que ela não demonstraria sobre credenciais e causa?” Não atribuir a interrupção somente à execução de um arquivo; foi uma operação com várias etapas. |

Se houver tempo e a turma já dominar as duas distinções, citar [HatMan/TRITON — análise de malware ICS-CERT](https://www.cisa.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf) em **dois minutos** para mostrar que um controlador de segurança pode ser alvo. A análise descreve componentes no PC e no controlador e apresenta capacidades sob hipóteses técnicas; não afirmar que todo efeito possível ocorreu. A avaliação detalhada da função de segurança pertence ao bloco OT.

As doze famílias ou funções da tabela são explicadas com um rastro fictício cada. Em sala, trabalhar M1/M2 para vírus/worm e escolher M3 ou M6 para mostrar que as funções se sobrepõem; as outras linhas ficam disponíveis para leitura e perguntas. Não obrigar uma classificação única de uma amostra real nem executar código.

## Condução

| Minutos | T/P | Conteúdo e participação | Ponto de espera |
|---|---:|---|---|
| 0–10 | 10/0 | Reabrir a pergunta de proteção de dados: o que um processo autorizado pode fazer com um arquivo legível? Explicar arquivo, processo, usuário, privilégio e recurso. | Não exigir relato ou produto específico da A11–A12. |
| 10–25 | 10/5 | Escolher um dos dois roteiros de observação: conduzir W1/W2 no Windows ou U1/U2 no Ubuntu. A turma acompanha o sistema projetado; a outra plataforma tem roteiro completo para estudo. Se não houver computador, usar os resultados ilustrativos da página. | Gerenciador/Explorador e `ps`/`cat` não são logs de escrita vinculados ao PID. L1/L2 são opcionais e pertencem a outro ensaio. |
| 25–45 | 15/5 | Explicar definições da tabela; executar no navegador os modelos de vírus e worm e um terceiro à escolha, confrontando antes/depois com M1–M12. Depois expor Stuxnet e Ucrânia 2015 como dois cartões. | Código apenas altera objetos JavaScript em memória; M1–M12 são ficção didática e não comprovam execução real de malware. |
| 45–60 | 15/0 | Associar atualização, privilégio, controle de execução, antimalware, telemetria e cópia recuperável às ações que podem limitar ou observar. Distinguir AV, coleta, EDR e resposta pelo mecanismo. | Nome da ferramenta não comprova cobertura ou bloqueio. |
| 60–80 | 10/10 | Explicar campos e trabalhar E1–E4: relacionar processo, arquivo, rede e alerta. Mudar E4 de “registrar” para “bloquear” e pedir nova conclusão com limite. | Conexão não prova conteúdo enviado; alerta não é erradicação. |
| 80–95 | 10/5 | Comparar encerrar processo e isolar rede quanto a alvo, impacto, efeito local e verificação; estabelecer condição de retorno. Mostrar R1–R5 como extensão da atividade, sem resolver o parecer. | Bloqueio da tentativa em R3 não interrompe a escrita local em R5. |
| 95–100 | 0/5 | Registrar a síntese “observado → hipótese → informação ausente → próxima verificação”; apontar a atividade única e a pergunta de criptografia sobre chave e texto legível no endpoint. | Cada decisão precisa de evidência, alcance e limite. |
| **Total** | **70/30** | | |

## Procedência e contingência

W1/W2 podem ser observados em Windows ou lidos como resultados ilustrativos na página; U1/U2, em Ubuntu, usam pasta temporária única e processo Python encerrado pelo PID registrado. PIDs ilustrativos não correspondem à máquina da turma. Manter o Bloco de Notas aberto até consultar o processo; mais de uma instância pode impedir associar a janela a um único PID. A demonstração não inclui log de auditoria, EDR nem prova de intenção. L1/L2 foram coletados por execução benigna em Linux, consulta ps e leitura de arquivo temporário. A origem bruta e o coletor estão em `docente/A11-A12-protecao-dados-endpoints/`; a versão pública substitui PIDs por P0/P1. Não transformar leitura de arquivo em evento de auditoria de escrita. Não é preciso executar o coletor em sala.

M1–M12, E1–E4 e R1–R5 são conjuntos didáticos, não incidentes observados. Endereços usam faixa de documentação. Sem computador, usar W1/W2 ou U1/U2 ilustrativos; sem JavaScript, usar M1–M12 e E1–E4. Nenhum comando de malware ou alteração de segurança precisa ser executado pelo estudante.

## Respostas e orientação de avaliação

- W1 sustenta presença de `Notepad.exe` com PID naquele instante; W2 sustenta conteúdo do arquivo. U1 sustenta presença de `python3` com PID/PPID na consulta; U2 sustenta caminho e conteúdo. A autoria da escrita é conhecida pelo procedimento acompanhado, não demonstrada por W1/W2 nem U1/U2 isolados. M3 admite trojan e backdoor; M6 admite keylogger e coleta tipo spyware.
- E1–E4: processo iniciou, criou arquivo e conectou; alerta apenas registrado. Faltam conteúdo transferido e autorização. Não há prova de worm, ransomware ou vazamento.
- E4 alterado para bloqueio: é possível afirmar apenas bloqueio da tentativa correspondente, sem garantir ausência de comunicação anterior ou remoção do processo.
- Persistência/alteração/propagação: distinguir mecanismo de retorno, efeito em arquivo e execução em outro alvo; uma frase isolada precisa de fonte e vínculo.
- Atividade R1–R5: tentativa de rede bloqueada, porém P44 continua escrevendo em R5. R4 está vinculado a R3 e não comprova erradicação. Não afirmar envio do CSV, propagação, persistência ou que todos os dados foram preservados.
- Aceitar encaminhamento para verificar finalidade/conteúdo quando ainda não há dano confirmado. Aceitar contenção mais imediata quando explicitamente condicionada à evidência de alteração indevida em curso. Exigir impacto e autoridade; não premiar isolamento amplo sem justificativa.
- Encerrar processo pode interromper escrita daquela instância, mas não remove mecanismo de retorno. Isolar rede limita comunicação conforme cobertura e não interrompe necessariamente escrita local. Retorno exige verificar causa, funcionamento e observabilidade; varredura sem alerta não é prova absoluta.

Critérios da entrega: 25% exposição/controles; 25% regra/contraprovas; 25% rastros; 25% recuperação/resposta. Respostas esperadas da parte de dados estão no plano produzido para A11, que serviu de base aos dois encontros de dados. Manter gabaritos fora do site.

## Figuras e continuidade

Figura 5 incorporada. Prompts 6–8: funções de comprometimento; evento/conclusão; objetivos da resposta. A nova página A13 removeu os prompts editoriais visíveis, preservando o conteúdo necessário em texto e tabelas. Ao receber as imagens, rejeitar relações falsas como conexão implica vazamento ou isolamento encerra processo. Conferir letra, contraste e texto alternativo antes de incorporá-las.

O encontro de criptografia seguinte retoma confidencialidade e integridade e a pergunta sobre o endpoint que acessa chave e texto legível. Não exigir cenário industrial. Nenhum envio ao Classroom ou realização da A13 é comprovado pela produção.

## Figura 5 incorporada — 24 set. 2026

Original recebido e preservado, com legenda e descrição alternativa. UID 1001 ilustrativo, permissões conforme contexto; negação representa os arquivos indicados. Prompt arquivado. As figuras 6–8 do rascunho de endpoint ainda estão pendentes; a figura 5 não comprova a observação real subsequente.
