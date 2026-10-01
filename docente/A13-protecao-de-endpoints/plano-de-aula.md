# Plano docente — A13: proteção de endpoints

**Revisão de estratégia e produção — 1º out. 2026.** O docente confirmou dois encontros de proteção de dados: A11 e A12. Endpoint é o próximo encontro, A13. A distribuição abaixo planeja 100 minutos para A13. Incidentes industriais documentados entram como exemplos breves de mecanismo e consequência, por sugestão docente. A página pública foi identificada como A13; o endereço antigo de A12 endpoint encaminha para ela. O endereço da atividade integrada foi preservado, com título e entrega atualizados para A11–A13. Essa produção não comprova uso em sala.

## Ficha-base

| Campo | Definição |
|---|---|
| Página | `docs/aulas/A13-protecao-de-endpoints.md`; endereço anterior de A12 mantido como encaminhamento. |
| Ementa | Contexto de execução, malware, camadas defensivas, telemetria, triagem e resposta. |
| Objetivos | Explicar alcance de execução/privilégios; correlacionar rastros sem extrapolar; justificar contenção e retorno. |
| Carga | 100 minutos: 70 T / 30 P de análise guiada. |
| Formato | Exposição direta, duas comparações curtas com incidentes industriais documentados, observação benigna e triagem guiada. |
| Pré-requisito | Propriedades, autorização e mecanismos de proteção de dados trabalhados em A11–A12; os checkpoints e produtos individuais ainda não foram relatados. |
| Infraestrutura | Navegador, CSV e tabelas incorporadas; sem agente ou instalação pelo estudante. |
| Evidência | Observação limitada por fonte, correlação, informação ausente, ação e verificação. |
| Critério | Não equiparar alerta a bloqueio nem bloqueio a erradicação; justificar alcance e impacto da resposta. |
| Fontes | Sysmon/Microsoft Learn e CERT.br, com links na página e procedência dos insumos; alertas ICS-CERT/CISA indicados abaixo para os incidentes. |

## Ganho e cadeia

A11–A12 trataram controles sobre o dado. A13 examina o processo que o utiliza. Ganho novo: sair de “o dado tem permissão, regra e cópia” para “um processo com acesso pode agir sobre esse dado; que evidência delimita seu alcance e a resposta?”. Cadeia: herança conceitual de dado legível e acesso, sem presumir checkpoint individual da A11–A12 → CSV benigno L1/L2 e campos explicados → diferença entre arquivo, processo e ação → incidentes documentados que distinguem propagação, efeito e indisponibilidade → controle associado ao mecanismo → registros didáticos E1–E4 → leitura do resultado e da lacuna → contenção proporcional e critério de retorno → parecer único → pergunta sobre confiança do endpoint ao utilizar chaves no encontro seguinte de criptografia, cuja numeração ainda será conciliada.

## Recorte de incidentes industriais para a exposição

Usar **dois cartões de caso**, com 3 a 4 fatos cada, fonte e pergunta de interpretação. Eles ilustram mecanismos; não constituem os registros E1–E4 ou R1–R5 da atividade. Não usar imagem de ataque nem pedir reprodução técnica.

| Caso e fonte primária | Fato sustentado e função didática | Pergunta e limite |
|---|---|---|
| [Stuxnet — alerta ICS-CERT/CISA](https://www.cisa.gov/uscert/ics/advisories/ICSA-10-272-01) | O alerta documenta propagação por USB, compartilhamentos e arquivos de projeto, além de interação com WinCC/STEP 7. Serve para separar **meio de propagação**, execução no endpoint de engenharia e possível efeito no ambiente de controle. | “Qual observação sustenta propagação, e qual apenas aponta presença?” O alerta não transforma qualquer dispositivo USB ou projeto em prova de infecção. |
| [Rede elétrica ucraniana, 2015 — síntese CISA](https://www.cisa.gov/news-events/alerts/2022/01/11/understanding-and-mitigating-russian-state-sponsored-cyber-threats-us-critical-infrastructure) | A síntese relaciona ataque às distribuidoras, uso de BlackEnergy para obter credenciais e KillDisk para tornar computadores inoperantes. Serve para separar **acesso**, ferramenta maliciosa, indisponibilidade do endpoint e consequência operacional. | “O que uma cópia de segurança recuperaria e o que ela não demonstraria sobre credenciais e causa?” Não atribuir a interrupção somente à execução de um arquivo; foi uma operação com várias etapas. |

Se houver tempo e a turma já dominar as duas distinções, citar [HatMan/TRITON — análise de malware ICS-CERT](https://www.cisa.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf) em **dois minutos** para mostrar que um controlador de segurança pode ser alvo. A análise descreve componentes no PC e no controlador e apresenta capacidades sob hipóteses técnicas; não afirmar que todo efeito possível ocorreu. A avaliação detalhada da função de segurança pertence ao bloco OT.

As categorias vírus, worm, trojan, ransomware e spyware continuam definidas na página para consulta. Em sala, distinguir propagação, apresentação enganosa, persistência e efeito quando cada caso exigir. Uma amostra pode combinar características; não obrigar uma classificação única nem consumir o encontro em nomes de famílias.

## Condução

| Minutos | T/P | Conteúdo e participação | Ponto de espera |
|---|---:|---|---|
| 0–10 | 10/0 | Reabrir a pergunta de proteção de dados: o que um processo autorizado pode fazer com um arquivo legível? Explicar arquivo, processo, usuário, privilégio e recurso. | Não exigir relato ou produto específico da A11–A12. |
| 10–25 | 10/5 | Ler L1/L2 do ensaio benigno, explicar fonte e limite; a turma formula uma afirmação sustentada e uma ausente. | Consulta `ps` não é evento de escrita nem demonstração de EDR. |
| 25–45 | 15/5 | Expor Stuxnet e Ucrânia 2015 em dois cartões; comparar propagação, credenciais, efeito no endpoint e consequência operacional. | Não transformar família de malware em causa suficiente da interrupção. |
| 45–60 | 15/0 | Associar atualização, privilégio, controle de execução, antimalware, telemetria e cópia recuperável às ações que podem limitar ou observar. Distinguir AV, coleta, EDR e resposta pelo mecanismo. | Nome da ferramenta não comprova cobertura ou bloqueio. |
| 60–80 | 10/10 | Explicar campos e trabalhar E1–E4: relacionar processo, arquivo, rede e alerta. Mudar E4 de “registrar” para “bloquear” e pedir nova conclusão com limite. | Conexão não prova conteúdo enviado; alerta não é erradicação. |
| 80–95 | 10/5 | Comparar encerrar processo e isolar rede quanto a alvo, impacto, efeito local e verificação; estabelecer condição de retorno. Mostrar R1–R5 como extensão da atividade, sem resolver o parecer. | Bloqueio da tentativa em R3 não interrompe a escrita local em R5. |
| 95–100 | 0/5 | Registrar a síntese “observado → hipótese → informação ausente → próxima verificação”; apontar a atividade única e a pergunta de criptografia sobre chave e texto legível no endpoint. | Cada decisão precisa de evidência, alcance e limite. |
| **Total** | **70/30** | | |

## Procedência e contingência

L1/L2 foram coletados por execução benigna em Linux, consulta ps e leitura de arquivo temporário. A origem bruta e o coletor estão em `docente/A11-A12-protecao-dados-endpoints/`; a versão pública substitui PIDs por P0/P1. Não transformar leitura de arquivo em evento de auditoria de escrita. A coleta não constitui uma demonstração de EDR. Não é preciso executar o coletor em sala.

E1–E4 e R1–R5 são conjuntos didáticos, não incidentes observados. Endereços usam faixa de documentação. Sem download, usar a descrição de L1/L2 e as tabelas da página. Nenhum comando precisa ser executado pelo estudante.

## Respostas e orientação de avaliação

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
