# Plano docente — A12: proteção de endpoints

## Ficha-base

| Campo | Definição |
|---|---|
| Página | `docs/aulas/A12-protecao-de-endpoints.md` |
| Ementa | Contexto de execução, malware, camadas defensivas, telemetria, triagem e resposta. |
| Objetivos | Explicar alcance de execução/privilégios; correlacionar rastros sem extrapolar; justificar contenção e retorno. |
| Carga | 100 minutos: 70 T / 30 P de análise guiada. |
| Formato | Exposição direta, exemplos independentes e comparação de controles. |
| Pré-requisito | Propriedades, autorização e mecanismos de proteção de dados da A11; não presumir realização de A11 pela existência da página. |
| Infraestrutura | Navegador, CSV e tabelas incorporadas; sem agente ou instalação pelo estudante. |
| Evidência | Observação limitada por fonte, correlação, informação ausente, ação e verificação. |
| Critério | Não equiparar alerta a bloqueio nem bloqueio a erradicação; justificar alcance e impacto da resposta. |
| Fontes | Sysmon/Microsoft Learn e CERT.br, com links na página e procedência dos insumos. |

## Ganho e cadeia

A11 trata controles sobre o dado. A12 examina o processo que o utiliza. Cadeia: dado legível e acesso → contexto de execução → observação real benigna → leitura de fonte e limite → comparação de comportamento → registros didáticos correlacionados → triagem → contenção proporcional → parecer único → confiança do endpoint ao utilizar chaves na A13.

## Condução

| Minutos | T/P | Conteúdo e participação | Ponto de espera |
|---|---:|---|---|
| 0–15 | 10/5 | Arquivo/processo/privilégio; ler L1 e L2 do CSV. | Diferenciar consulta ps e leitura de arquivo. |
| 15–35 | 15/5 | Funções e categorias de malware; classificar três comportamentos. | Não afirmar worm por quantidade de conexões. |
| 35–50 | 15/0 | Camadas defensivas, antivírus, EDR e telemetria. | Distinguir coletor, detecção e resposta. |
| 50–75 | 15/10 | Campos, E1–E4 e alteração da ação registrada; formular conclusão limitada. | Identificar conteúdo/autorizações ausentes. |
| 75–90 | 10/5 | Comparar contenção, erradicação e retorno. | Explicitar efeito local que isolamento não interrompe. |
| 90–100 | 5/5 | Síntese, atividade integrada e ponte para criptografia. | Cada decisão precisa de limite e critério verificável. |
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

Critérios da entrega: 25% exposição/controles; 25% regra/contraprovas; 25% rastros; 25% recuperação/resposta. Respostas esperadas da parte de dados estão no plano A11. Manter gabaritos fora do site.

## Figuras e continuidade

Prompts 5–8: alcance de processo; funções de comprometimento; evento/conclusão; objetivos da resposta. Ao receber as imagens, rejeitar relações falsas como conexão implica vazamento ou isolamento encerra processo. Conferir letra, contraste e texto alternativo.

A13 retoma confidencialidade e integridade e a pergunta sobre o endpoint que acessa chave e texto legível. Não exigir cenário industrial. Nenhum envio ao Classroom ou realização da aula é comprovado pela produção.

## Figura 5 incorporada — 24 set. 2026

Original recebido e preservado, com legenda e descrição alternativa. UID 1001 ilustrativo, permissões conforme contexto; negação representa os arquivos indicados. Prompt arquivado. Pendentes 6–8 da A12; a figura não comprova a observação real subsequente.
