# Governança de continuidade — A05 a A30

Este documento impede que perguntas sejam apresentadas antes de a aula fornecer meios para produzir os rastros necessários. A A04 ministrada estabelece o contrato de fluxo, fronteira, lacuna e revisão por evidência usado daqui em diante.

## Regra invariável do encontro

Cada aula deve tornar visível a sequência:

`entrada herdada → preparação → ação → rastro → leitura orientada → conceito → decisão → validação → produto → ponte`.

Cada `ação → rastro` deve ocorrer, por padrão, em ferramenta real. Na trilha web, manter o Juice Shop local em Docker e o DevTools como ambiente condutor; acrescentar novas ferramentas somente quando o rastro necessário não puder ser obtido adequadamente com as já conhecidas. Nos blocos de endpoint, rede, nuvem e OT, usar respectivamente ferramentas e ambientes reais coerentes com o domínio, sempre isolados, autorizados e acompanhados por um pacote alternativo de evidências.

Uma pergunta analítica só pode aparecer quando o estudante já souber:

1. qual ação executar ou qual pacote examinar;
2. onde localizar o rastro;
3. o que registrar sem interpretar prematuramente;
4. qual conclusão o rastro autoriza e qual não autoriza.

## Encadeamento obrigatório

| Aula | Entrada concreta | Ação e rastro que precedem o conceito | Conceito introduzido | Produto e ponte |
|---|---|---|---|---|
| A05 | ticket A04 e relação `fornecedor → VPN → FILE-01` | em demonstração docente de 100 minutos, observar no Juice Shop local estado anônimo, login, requisição autenticada, logout e novo acesso; acumular os rastros na mesma tabela; repetir em dupla em casa | identificação, autenticação, sessão, autorização e accounting | mapa integrado presencial e verificação domiciliar; fornece conta e estado controlados à A07 |
| A06 | conteúdo anterior absorvido pela A05 | não repetir a introdução a sessão; aguardar redefinição curricular | decisão pendente | não publicar substituta antes de atualizar a arquitetura |
| A07 | duas identidades e sessões conhecidas | executar casos permitido e negado sobre recurso fornecido; registrar requisição, resposta e identidade | autorização horizontal/vertical e regra no servidor | ticket e reteste; fornece caso técnico à A08/A09 |
| A08 | requisição já compreendida | enviar entrada legítima e variação controlada em alvo autorizado; comparar interpretação e resposta | dado versus instrução, parametrização e validação | caso de teste e reteste; fornece técnica candidata à A09 |
| A09 | casos A07/A08 | preencher autorização, alvo, exclusões, técnica, parada e restauração antes de executar | regras de engajamento e escopo | plano autorizado; governa a execução da A10 |
| A10 | plano A09 | executar um único caso aprovado; registrar antes, ação, resposta, impacto e reteste | achado, falso positivo, remediação e regressão | relatório técnico; fornece evidência para comunicação e operação |
| A11 | identidade e limites de conclusão | comparar mensagens fictícias; localizar remetente, pedido, urgência e canal de confirmação | pretexto, impersonificação e verificação independente | protocolo; fornece comportamento observável à A12 |
| A12 | protocolo A11 | desenhar simulação sem envio; mapear dado coletado, finalidade, acesso e devolutiva | conscientização, minimização e métricas | plano ético; fornece vetor humano à A13 |
| A13 | mensagem/vetor A11 e triagem A03 | ordenar processos, conexões, persistência e logs fornecidos | malware como cadeia comportamental | nota de triagem; fornece eventos correlacionáveis à A14 |
| A14 | eventos A05–A07/A13 | normalizar horários e correlacionar identidade, aplicação e sistema | accounting, integridade, retenção e atribuição limitada | trilha auditável; fornece telemetria à A15/A22 |
| A15 | fluxo A04 e trilha A14 | comparar diagramas plano/segmentado e testar matriz de fluxos fornecida | perímetro, segmentação, DMZ/VPN e defesa em profundidade | arquitetura e testes; fornece estados do dado à A16 |
| A16 | fluxos A04/A15 | seguir cadastro, pedido, log e manutenção; registrar finalidade, estado e proprietário | classificação e propriedades de proteção | inventário de dados; define requisitos da A17 |
| A17 | propriedades A16 | comparar configurações criptográficas fornecidas e localizar algoritmo, nonce, chave e responsável | criptografia simétrica e ciclo de chave | decisão criptográfica; fornece chaves à A18 |
| A18 | chave e integridade A17 | executar verificação orientada de assinatura/certificado e registrar resultado | hash, MAC, assinatura, certificado e cadeia | registro de confiança; fornece hash e segredo à A19 |
| A19 | autenticação A05 e hash A18 | comparar amostras de armazenamento e parâmetros observáveis | salt, derivação, custo, pepper e rotação | especificação; fornece mecanismos à síntese A20 |
| A20 | produtos A14–A19 | integrar fluxo, identidade, canal, segmentação, logs e recuperação; testar permitido/negado | arquitetura de comunicação segura | arquitetura e risco residual; estabelece baseline para A21 |
| A21 | arquitetura A20 | comparar estado esperado e configuração observada campo a campo | baseline, hardening, desvio e exceção | registro de desvio; fornece condição à A22 |
| A22 | trilha A14 e baseline A21 | aplicar lógica candidata a exemplos positivos/negativos e medir falso resultado | evento, alerta, correlação e contexto | especificação de alerta; dispara A23 |
| A23 | alerta A22 | exercício de mesa com evidências liberadas em etapas; registrar ação e efeito | triagem, contenção, recuperação e escalonamento | runbook; transfere responsabilidades à nuvem A24 |
| A24 | arquitetura A20 e runbook A23 | inspecionar identidade/política fornecida, aplicar menor privilégio e localizar evento de auditoria | responsabilidade compartilhada e IAM | revisão de acesso; fornece fluxo à A25 |
| A25 | acesso A24 e perímetro A15 | inspecionar rota/regra, corrigir, testar, remover e verificar inventário/custo | perímetro em nuvem e encerramento | relatório completo; fornece riscos reais à A26 |
| A26 | registros A10/A21/A25 | comparar plausibilidade, consequência, incerteza e controles existentes | tratamento e risco residual | registro e duas comunicações; alimenta governança A27 |
| A27 | tratamento A26 | transformar decisão em regra, requisito, passo operacional, exceção e métrica | política, padrão, procedimento e registro | conjunto governável; enquadra acesso OT A28 |
| A28 | regra A27 e risco/safety | consultar trechos públicos fornecidos e ligar requisito a evidência/responsável/lacuna | função de IEC 62443, NIST 800-82 e CISA | matriz de aderência; especifica laboratório A29 |
| A29 | matriz A28 | observar processo normal, inventariar componentes e tráfego, segmentar e validar estado físico | processo, protocolo, zona, conduíte e safety | arquitetura OT validada; cria cenário A30 |
| A30 | portfólio e arquitetura A29 | correlacionar evidências progressivas, decidir, simular resposta e validar recuperação | integração técnica, operacional e executiva | dossiê e briefing final |

## Portões de revisão por slide

- O título declara a ação, a evidência ou a decisão daquele momento.
- Todo conceito aponta para um rastro já produzido no mesmo caso.
- Toda pergunta informa antes onde e como obter os dados para respondê-la.
- Toda atividade declara ferramenta, entrada, passos mínimos, registro, limite e saída.
- O último slide recupera o objetivo inicial e identifica o artefato que entra na próxima aula.
- A demonstração usa ferramenta real, produz um rastro necessário ao conceito e informa preparação, ação, localização, registro e limite da conclusão.
- Se o Juice Shop deixar de ser usado numa aula da trilha web, o plano docente registra por que outra ferramenta representa melhor o fenômeno.
