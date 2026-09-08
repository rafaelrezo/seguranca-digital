# Conteúdo programático por encontro — memória A01 a A30

> **Referência prospectiva vigente:** o [detalhamento temático A08–A31](planejamento-24-encontros/detalhamento-conteudos-por-aula.md), solicitado pelo docente com revisão de especialista IT/OT, define os próximos 24 encontros de 100 minutos e cinco atividades por macrocomponente. Após confronto com A01–A07, M1 passa a ter SGSI em A08, avaliação/decisão de risco em A09 e aplicabilidade/avaliação de controles em A10. Esta matriz anterior permanece como memória; seus estados, cargas e próximos passos abaixo não definem a sequência futura. Não houve alteração do GitHub Pages.

> **Estado em 8 set. 2026:** este documento permanece como referência curricular/proposta. Para formato, sequência reconciliada e heranças confirmadas, prevalecem a decisão vigente na [arquitetura](arquitetura-geral-da-experiencia.md) e o [diagnóstico](reconciliacao-mkdocs-2026-09-08/diagnostico.md). A07 publicada trabalha ATT&CK; a proposta antiga de tratamento não descreve essa aula. A próxima aula e o calendário ainda serão planejados após confirmar o último encontro ministrado.

> **Precedência prospectiva:** para A06–A25 em encontros de 90 minutos, usar [`reconciliacao-curricular-25-encontros.md`](reconciliacao-curricular-25-encontros.md). As fichas A06–A30 deste arquivo registram a distribuição anterior e não devem alimentar novos pacotes até serem reescritas. A01–A05 permanecem históricas.

> Documento docente de especificação curricular. Deriva da arquitetura geral, da ementa oficial e da distribuição dos 30 encontros. Deve orientar as fichas-base e, depois, os slides, a página MkDocs e o roteiro prático de cada pacote.

**Estado:** base programática para produção dos pacotes  
**Carga:** 30 encontros de 104 minutos; em cada encontro, 52 minutos teóricos e 52 minutos práticos integrados  
**Histórico:** A01, A02, A03 e A04 já foram ministradas; seus registros descrevem o que ocorreu e suas lacunas são retomadas adiante  
**Próximo pacote:** A05 integrada, com 100 minutos presenciais de demonstração e conceituação guiadas; a verificação em dupla ocorre em casa

## 1. Como usar este documento

Para cada encontro:

- **vínculo com a ementa** declara a obrigação curricular atendida;
- **objetivos de aprendizagem** descrevem desempenhos observáveis;
- **tópicos e conhecimentos mobilizados** delimitam o conteúdo que pertence ao encontro;
- **conhecimentos necessários** indicam pré-requisitos e apoios que devem estar disponíveis;
- **conhecimentos construídos** registram o que o estudante deverá conseguir explicar;
- **habilidades adquiridas** registram o que deverá conseguir fazer;
- **evidência de conclusão** define a base comum para slides, MkDocs, prática e avaliação.

“Adquirida” significa desempenho introdutório compatível com o apoio previsto, não domínio profissional pleno. Um conhecimento ou habilidade torna-se consolidado apenas quando reaparece em outro contexto e integra um produto posterior.

## 2. Progressão esperada

| Faixa | Nível de apoio | Expectativa |
|---|---|---|
| A01–A05 | fortemente orientado | separar evidência e hipótese, reconstruir fluxo e localizar decisão |
| A06–A10 | aplicação guiada | testar decisões de acesso e executar ciclo introdutório de pentest |
| A11–A15 | análise sociotécnica | integrar pessoa, endpoint, registros, perímetro e operação |
| A16–A20 | decisão de engenharia | selecionar mecanismos criptográficos e compor comunicação segura |
| A21–A25 | transferência assistida | operar configuração, detecção, resposta e nuvem |
| A26–A30 | integração | priorizar, governar, aplicar referências industriais e defender decisão |

## Arco 1 — Evidência, contexto e decisão localizada

### A01 — O incidente que parou a linha — ministrada

**Vínculo com a ementa:** visão geral da segurança da informação no contexto produtivo; introdução a AAA, logs, risco e segurança industrial.

**Objetivos de aprendizagem**

1. Separar observações, hipóteses e conclusões em registros de um incidente.
2. Relacionar CIA, AAA, disponibilidade operacional e safety às consequências do caso.
3. Selecionar uma próxima ação reversível e indicar como validar seu efeito.

**Tópicos e conhecimentos mobilizados**

- evento, incidente, ameaça, vulnerabilidade, consequência e risco;
- confidencialidade, integridade e disponibilidade;
- autenticação, autorização e accounting;
- correlação e causalidade;
- processo produtivo, disponibilidade operacional e estado seguro;
- preservação de evidências, contenção proporcional e validação.

**Conhecimentos necessários:** leitura de horários; noções básicas de rede e sistemas; compreensão cotidiana de falha e consequência. O plano alternativo deve explicar HMI, PLC e telemetria sem pressupor experiência industrial.

**Conhecimentos construídos:** limites de uma sequência temporal; diferença entre evento e incidente; relação entre objetivo de segurança, processo e risco; por que safety condiciona a contenção.

**Habilidades adquiridas:** ordenar evidências; formular hipóteses concorrentes; declarar lacunas; justificar coleta ou contenção; comunicar limite de conclusão.

**Evidência de conclusão:** linha do tempo comentada, duas hipóteses, lacuna discriminante e próxima ação com critério de validação.

### A02 — Ativos, ameaças e vulnerabilidades — ministrada

**Vínculo com a ementa:** visão geral no contexto produtivo; noções iniciais de pentest; políticas e gestão de riscos.

**Objetivos de aprendizagem**

1. Relacionar ativo, função, proprietário e consequência a uma evidência HTTP.
2. Distinguir ameaça, fraqueza, vulnerabilidade, exposição, exploit e controle no mesmo caso.
3. Registrar um achado, selecionar tratamento e propor reteste seguro.

**Tópicos e conhecimentos mobilizados**

- ativos de informação, aplicação, plataforma e processo;
- requisição/resposta HTTP e código de estado;
- superfície de ataque e caminho de acesso;
- CWE, CVE e limites de classificação;
- controle preventivo, detectivo e corretivo;
- escopo autorizado e segurança do laboratório Juice Shop.

**Conhecimentos necessários:** disciplina de evidência da A01; navegador; leitura básica de HTTP; execução local orientada do Juice Shop.

**Conhecimentos construídos:** ativo não é apenas equipamento; vulnerabilidade é uma condição concreta; evidência técnica não determina sozinha impacto; taxonomia não substitui descrição.

**Habilidades adquiridas:** inventariar e priorizar ativos; reproduzir observação autorizada; registrar vulnerabilidade; comparar controles; definir reteste permitido/negado.

**Evidência de conclusão:** inventário priorizado e registro de vulnerabilidade com evidência interpretada, controle e reteste.

### A03 — Triagem: ameaças sem inventar o incidente — ministrada

**Vínculo com a ementa:** visão geral; ameaças no contexto produtivo; logs e auditoria em nível inicial; gestão de riscos.

**Objetivos de aprendizagem**

1. Distinguir ameaça candidata de ataque confirmado.
2. Formular explicações concorrentes com condição, consequência e evidência discriminante.
3. Decidir entre escalar, coletar ou encerrar e declarar o limite da decisão.

**Tópicos e conhecimentos mobilizados**

- fatos, indícios, correlação e atribuição;
- ameaça maliciosa, acidental e indeterminada;
- condição, elemento afetado, consequência e verificação;
- triagem e proporcionalidade da decisão;
- qualidade e ausência de evidência.

**Conhecimentos necessários:** ativo, consequência e registro da A02; distinção observação/hipótese da A01.

**Conhecimentos construídos:** ameaça descreve possibilidade de dano, não prova autoria; explicações concorrentes reduzem confirmação prematura; uma decisão pode ser válida mesmo sob incerteza declarada.

**Habilidades adquiridas:** formular ameaça candidata; comparar explicações; identificar evidência que discrimina hipóteses; justificar encaminhamento.

**Evidência de conclusão:** nota de triagem com fatos, duas ameaças candidatas, decisão, evidência faltante e limite. A ruptura de cenário ocorrida nesta aula será recuperada em A04, A05 e A10.

### A04 — Onde a aplicação decide? — ministrada

**Vínculo com a ementa:** arquiteturas de comunicação seguras; visão geral no contexto produtivo; preparação para AAA e pentest.

**Objetivos de aprendizagem**

1. Representar um fluxo normal com origem, conteúdo, destino e decisão.
2. Identificar fronteira somente quando uma mudança de identidade, autoridade, administração, tecnologia ou consequência exigir nova decisão.
3. Separar o que foi observado do que foi inferido e formular uma pergunta verificável sobre a decisão de acesso.

**Tópicos e conhecimentos mobilizados**

- funcionamento normal antes da hipótese de abuso;
- abertura da cesta no OWASP Juice Shop local;
- ação, método, caminho, contexto de sessão, status e resposta;
- fluxo `pessoa → navegador → serviço → dado`;
- identidade, ação, recurso e decisão;
- fronteira de confiança entre navegador e servidor;
- observado, modelo funcional, lacuna e próxima evidência.

**Conhecimentos necessários:** distinção entre fato e hipótese da A01; ativo, ameaça e vulnerabilidade da A02; raciocínio sobre evidência e hipótese da A03.

**Conhecimentos construídos:** uma captura mostra entrada e saída, mas não todas as decisões internas; arquitetura é explicação seletiva; identidade, ação e recurso formam a pergunta de autorização; valores controlados pelo cliente precisam ser verificados ao cruzar a fronteira navegador–servidor.

**Habilidades adquiridas:** reconstruir o fluxo legítimo; ler método, caminho, contexto, status e resposta; desenhar relações rotuladas; distinguir observação de inferência; localizar fronteira; associar dúvida à próxima evidência.

**Evidência de conclusão:** diagrama de uma página, captura interpretada e sanitizada, identidade–ação–recurso, fronteira e pergunta sobre a verificação interna.

### A05 — Bruno entrou na própria conta: por que ainda precisamos proteger a cesta de Ana? — revisão integrada

**Vínculo com a ementa:** técnicas de autenticação, autorização e contabilidade para controle de acesso; logs e auditoria.

**Objetivos de aprendizagem**

1. Explicar, sobre as ações de Ana e Bruno, a diferença entre estar autenticado, manter uma sessão válida e receber autorização sobre uma cesta.
2. Comparar fluxo legítimo, contexto antigo pós-logout e acesso cruzado, mantendo explícitos sujeito, ação e proprietário do recurso.
3. Recomendar controle no servidor e validar quatro casos permitido/negado com evento de accounting sem segredo.

**Tópicos e conhecimentos mobilizados**

- jornada cotidiana em computador compartilhado e duas contas fictícias;
- contexto de sessão como representação temporária da identidade;
- logout no navegador versus recusa do contexto anterior;
- sujeito, ação, recurso e propriedade da cesta;
- autorização horizontal, decisão no servidor e negação por padrão;
- teste diferencial com uma variável alterada;
- quatro testes de aceitação e evento auditável sem segredo.

**Conhecimentos necessários:** a A04 já ensinou fluxo legítimo, leitura de requisição/resposta, contexto presente/ausente e pergunta sujeito–ação–recurso. O professor entrega a A05 com ambiente aberto, conta autenticada e requisição protegida localizada; não se repete cadastro, login, HTTP básico ou modelagem.

**Conhecimentos construídos:** o contexto de sessão representa temporariamente uma identidade; logout visual não prova que o servidor recusará uma requisição anterior; sessão válida não concede acesso a recurso alheio; propriedade deve ser verificada no servidor em cada solicitação; logging registra a decisão, mas não a implementa.

**Habilidades adquiridas:** narrar uma requisição com pessoa e recurso concretos; preservar linha de base; variar uma condição; separar validade de sessão e autorização; escrever regra no servidor; especificar casos permitido/negado e evento auditável.

**Evidência de conclusão presencial:** ticket integrado com dois achados, regra de propriedade, quatro testes e evento correlacionável.

**Verificação domiciliar em dupla:** repetir ou analisar o caso Ana/Bruno e entregar o ticket com evidências, conclusão limitada, controle e quatro testes.

## Arco 2 — Identidade, aplicação e pentest autorizado

### A06 — Conteúdo incorporado à A05; encontro a redefinir

O conteúdo introdutório de sessão foi incorporado à A05 para ser explicado sobre rastros produzidos no mesmo percurso de login e acesso. Não ministrar nem publicar o pacote A06 anterior como uma segunda introdução. A nova função deste encontro deverá ser definida na arquitetura antes da produção de artefatos substitutos, preservando a carga total da disciplina.

### A07 — Conteúdo incorporado à A05; encontro a redefinir

A autorização horizontal introdutória foi incorporada ao caso Ana/Bruno da A05 para que sessão, identidade e propriedade do recurso sejam explicadas sobre a mesma jornada. Não ministrar nem publicar o pacote A07 anterior. A nova função deste encontro deverá ser definida na arquitetura antes da produção de artefatos substitutos.

### A08 — Quando a entrada vira instrução?

**Vínculo com a ementa:** noções de técnicas de penetração; visão geral de ameaças; arquiteturas seguras.

**Objetivos de aprendizagem**

1. Explicar como contexto de interpretação transforma dado em instrução.
2. Comparar entrada legítima e anômala sem automatizar exploração.
3. Selecionar controle adequado e demonstrar que a função legítima permanece.

**Tópicos e conhecimentos mobilizados:** entrada, validação, normalização, codificação de saída, parametrização, contexto de interpretação, injeção e mensagens de erro.

**Conhecimentos necessários:** requisição HTTP; escopo do Juice Shop; diferença entre observação e conclusão; apoio com exemplo de consulta parametrizada.

**Conhecimentos construídos:** lista de caracteres proibidos não é defesa universal; validação e parametrização cumprem funções diferentes; erro pode revelar comportamento sem provar alcance total.

**Habilidades adquiridas:** formular previsão; executar variação controlada; coletar evidência mínima; relacionar causa, controle e regressão.

**Evidência de conclusão:** caso de teste com entrada legítima/anômala, interpretação, controle proposto e reteste funcional.

### A09 — O que estamos autorizados a testar?

**Vínculo com a ementa:** noções de técnicas de penetração; políticas de segurança e gestão de riscos.

**Objetivos de aprendizagem**

1. Traduzir uma solicitação de avaliação em objetivo, escopo e regras de engajamento.
2. Selecionar coleta e técnica proporcionais ao risco e à autorização.
3. Definir evidências, critérios de parada, comunicação e recuperação antes da execução.

**Tópicos e conhecimentos mobilizados:** autorização explícita, alvo, exclusão, janela, conta de teste, dado fictício, regra de engajamento, reconhecimento/coleta, técnica permitida, critério de parada, evidência e canal de escalonamento.

**Conhecimentos necessários:** técnicas observadas em A02, A07 e A08; arquitetura A04; política de escopo do laboratório.

**Conhecimentos construídos:** ferramenta não define pentest; autorização possui limites técnicos e temporais; coleta e prova de conceito devem ser mínimas; risco operacional existe mesmo em teste legítimo.

**Habilidades adquiridas:** escrever plano de teste; resolver ambiguidade de escopo; selecionar técnica; prever impacto; preparar evidência reproduzível e sanitizada.

**Evidência de conclusão:** plano de uma página com autorização, alvo, exclusões, técnica, parada, evidência, comunicação e encerramento.

### A10 — O teste encontrou o quê e como provamos a correção?

**Vínculo com a ementa:** noções de técnicas de penetração; políticas e gestão de riscos; arquiteturas seguras.

**Objetivos de aprendizagem**

1. Executar manualmente um caso autorizado conforme as regras de engajamento.
2. Diferenciar observação, vulnerabilidade, consequência plausível e falso positivo.
3. Relatar, priorizar e retestar a remediação preservando o fluxo legítimo.

**Tópicos e conhecimentos mobilizados:** execução controlada, prova de conceito mínima, evidência, achado, severidade contextual, falso positivo, relatório, remediação, regressão, exceção e risco residual. STRIDE pode ser usado com até duas lentes para revisar pergunta omitida.

**Conhecimentos necessários:** plano A09; tickets A02/A07/A08; casos permitido e negado; restauração do laboratório.

**Conhecimentos construídos:** pentest é processo autorizado e comunicável; demonstrar condição não mede automaticamente impacto; remediação só se encerra após verificação.

**Habilidades adquiridas:** seguir regras; executar e registrar teste; redigir achado; priorizar por contexto; verificar correção e regressão; comunicar versão técnica e executiva curta.

**Evidência de conclusão:** relatório técnico curto, registro atualizado, reteste permitido/negado e risco residual.

## Arco 3 — Pessoas, malware, auditoria e perímetro

### A11 — Por que esta mensagem parece legítima?

**Vínculo com a ementa:** engenharia social e conscientização de pessoal; controle de acesso.

**Objetivos de aprendizagem**

1. Identificar sinais contextuais que justificam verificar uma solicitação.
2. Separar mensagem suspeita de fraude confirmada.
3. Aplicar verificação por canal independente e encaminhamento seguro.

**Tópicos e conhecimentos mobilizados:** pretexto, urgência, autoridade, reciprocidade, impersonificação, phishing, canal independente, reporte e falso positivo.

**Conhecimentos necessários:** identidade e autorização A05; fato/hipótese A01–A03; canais corporativos fictícios.

**Conhecimentos construídos:** engenharia social explora contexto e processo, não uma suposta fraqueza individual; sinais são indicadores, não provas; verificação precisa preservar trabalho legítimo.

**Habilidades adquiridas:** comparar mensagens; formular pergunta de verificação; usar canal alternativo; reportar sem amplificar conteúdo sensível.

**Evidência de conclusão:** protocolo de verificação e classificação justificada de mensagens fictícias.

### A12 — Como medir aprendizagem sem vigiar pessoas?

**Vínculo com a ementa:** engenharia social e conscientização; políticas de segurança.

**Objetivos de aprendizagem**

1. Projetar conscientização vinculada a comportamento observável e apoio.
2. Definir métricas que avaliem processo sem constranger ou ranquear pessoas.
3. Delimitar autorização, finalidade, minimização e tratamento dos dados da simulação.

**Tópicos e conhecimentos mobilizados:** objetivo de aprendizagem, público, simulação ética, consentimento/autorização, minimização, métrica de processo, viés, feedback, reporte e melhoria.

**Conhecimentos necessários:** protocolo A11; distinção controle/resultado; noções de dado pessoal e finalidade fornecidas no encontro.

**Conhecimentos construídos:** taxa de clique isolada não mede cultura; conscientização combina processo, ambiente e comportamento; métrica pode criar risco se mal utilizada.

**Habilidades adquiridas:** escrever cenário seguro; selecionar métrica; prever efeito adverso; criar feedback e canal de apoio.

**Evidência de conclusão:** plano de simulação sem envio real, com autorização, dados mínimos, métricas e devolutiva.

### A13 — O que mudou no endpoint?

**Vínculo com a ementa:** malwares; logs e auditoria; visão geral de segurança.

**Objetivos de aprendizagem**

1. Diferenciar falha, software legítimo e malware por evidências comportamentais.
2. Reconstruir uma cadeia introdutória de entrada, execução, persistência, comunicação e impacto.
3. Selecionar contenção e coleta que preservem evidência e recuperação.

**Tópicos e conhecimentos mobilizados:** malware e famílias como referência; vetor, processo, serviço, persistência, conexão, hash identificador, antimalware/EDR em nível funcional, telemetria, contenção e validação.

**Conhecimentos necessários:** triagem A03; engenharia social A11; processos, conexões e logs com ficha de apoio.

**Conhecimentos construídos:** nome da família não substitui análise; hash identifica amostra, não intenção; sinais precisam ser correlacionados; contenção pode afetar disponibilidade.

**Habilidades adquiridas:** analisar pacote seguro; construir linha de comportamento; declarar confiança; escolher coleta/contenção; validar estado após ação.

**Evidência de conclusão:** nota de triagem com hipótese, cadeia comportamental, evidências, contenção e validação.

### A14 — Quem fez o quê e podemos confiar no registro?

**Vínculo com a ementa:** técnicas de accounting; sistemas de logs e auditoria.

**Objetivos de aprendizagem**

1. Correlacionar eventos de identidade, aplicação e sistema em uma trilha auditável.
2. Avaliar completude, integridade, sincronização temporal, acesso e retenção dos registros.
3. Especificar evento útil para atribuição e revisão sem registrar segredo ou dado excessivo.

**Tópicos e conhecimentos mobilizados:** accounting, fonte, evento, identidade, ação, resultado, timestamp, sincronização, integridade, retenção, acesso, centralização, trilha e auditoria.

**Conhecimentos necessários:** eventos A05–A07 e A13; leitura de logs A01; apoio para formatos e horários.

**Conhecimentos construídos:** log não é prova infalível; auditabilidade depende de contexto e proteção; detecção e auditoria usam registros com perguntas diferentes; excesso também cria risco.

**Habilidades adquiridas:** correlacionar fontes; encontrar lacuna/conflito; definir esquema mínimo; justificar retenção e revisão; sanitizar evidência.

**Evidência de conclusão:** trilha comentada, lacunas, requisito de logging e consulta de auditoria reproduzível.

### A15 — Onde o perímetro realmente termina?

**Vínculo com a ementa:** defesa de perímetro; arquiteturas de comunicação seguras; segurança industrial.

**Objetivos de aprendizagem**

1. Comparar arquitetura plana e segmentada pelo alcance de um incidente.
2. Definir fluxos necessários e selecionar controles em camadas.
3. Validar tráfego permitido e negado preservando suporte remoto e safety.

**Tópicos e conhecimentos mobilizados:** superfície, perímetro físico e lógico, zona, segmento, rota, porta/serviço, firewall/ACL, DMZ, proxy, VPN, jump host, defesa em profundidade, zona/conduíte introdutórios e monitoramento.

**Conhecimentos necessários:** fluxo A04; AAA A05–A07; logs A14; fundamentos apoiados de endereço, rota, porta e serviço.

**Conhecimentos construídos:** perímetro não é uma única borda; segmentação limita alcance, mas não substitui identidade; regra deve nascer de fluxo legítimo; em OT, operação participa da autoridade.

**Habilidades adquiridas:** desenhar zonas e fluxos; escrever matriz mínima; selecionar controle por função; testar permitido/negado; declarar impacto operacional.

**Evidência de conclusão:** diagrama antes/depois, matriz de fluxos, procedimento de acesso remoto e testes de validação.

## Arco 4 — Criptografia e arquiteturas de comunicação seguras

### A16 — Por que guardamos este dado?

**Vínculo com a ementa:** criptografia; políticas e gestão de riscos; visão geral.

**Objetivos de aprendizagem**

1. Identificar dado, finalidade, proprietário, estado e consequência.
2. Decidir quais propriedades de segurança o dado exige.
3. Evitar selecionar mecanismo criptográfico antes de definir uso e ameaça.

**Tópicos e conhecimentos mobilizados:** ativo de informação, classificação, finalidade, minimização introdutória, proprietário, dado em uso/trânsito/repouso, confidencialidade, integridade, autenticidade, disponibilidade, retenção e descarte.

**Conhecimentos necessários:** ativos A02; CIA A01; fluxos A04/A15; exemplos fictícios de cadastro, pedido, log e manutenção.

**Conhecimentos construídos:** classificação depende de contexto; estados do dado alteram controles; criptografia não resolve disponibilidade, excesso de coleta ou autorização.

**Habilidades adquiridas:** inventariar fluxo de dados; classificar; declarar propriedade desejada; justificar proteção e limitação.

**Evidência de conclusão:** inventário com finalidade, estado, proprietário, propriedade necessária e consequência.

### A17 — O que precisa permanecer secreto e quem controla a chave?

**Vínculo com a ementa:** criptografia; arquiteturas de comunicação seguras.

**Objetivos de aprendizagem**

1. Explicar função de criptografia simétrica em trânsito e repouso.
2. Relacionar algoritmo, modo/configuração, nonce/IV, chave e operação.
3. Definir proprietário, armazenamento, rotação e teste de aceitação da chave.

**Tópicos e conhecimentos mobilizados:** texto claro/cifrado, cifra simétrica, chave, modo em nível conceitual, nonce/IV, aleatoriedade, TLS em uso, armazenamento e rotação.

**Conhecimentos necessários:** propriedades e estados A16; representação simples de bytes/texto; nenhuma matemática criptográfica avançada.

**Conhecimentos construídos:** algoritmo forte com chave/configuração ruim continua inseguro; nonce não é chave; criptografia em trânsito e repouso protege fronteiras diferentes.

**Habilidades adquiridas:** comparar configurações fornecidas; identificar erro conceitual; desenhar ciclo de chave; escrever teste de aceitação.

**Evidência de conclusão:** decisão de proteção com mecanismo, chave, responsável, rotação, validação e limitação.

### A18 — Em quem e em qual conteúdo podemos confiar?

**Vínculo com a ementa:** criptografia; arquiteturas de comunicação seguras; autenticação.

**Objetivos de aprendizagem**

1. Distinguir hash, MAC, assinatura e certificado pelas propriedades oferecidas.
2. Verificar assinatura e elementos essenciais de um certificado de laboratório.
3. Declarar o que a cadeia de confiança permite e não permite concluir.

**Tópicos e conhecimentos mobilizados:** função hash, MAC em contraste, par de chaves, criptografia assimétrica, assinatura, certificado, PKI, autoridade certificadora, cadeia, nome, validade e revogação.

**Conhecimentos necessários:** integridade/autenticidade A16; chave A17; leitura orientada de certificado.

**Conhecimentos construídos:** assinatura não produz sigilo; certificado vincula identidade sob regras específicas; conexão cifrada não prova legitimidade de todo conteúdo ou endpoint.

**Habilidades adquiridas:** verificar assinatura; inspecionar certificado; identificar falha de nome/validade/cadeia; comunicar limites de confiança.

**Evidência de conclusão:** registro de verificação com propriedade comprovada, evidência e limite.

### A19 — Senha, hash e segredo são protegidos da mesma forma?

**Vínculo com a ementa:** criptografia; autenticação; políticas de segurança.

**Objetivos de aprendizagem**

1. Distinguir codificação, criptografia, hash genérico e derivação de senha.
2. Explicar função de salt, custo e pepper no armazenamento de verificadores.
3. Selecionar armazenamento e rotação para senha e segredo de serviço.

**Tópicos e conhecimentos mobilizados:** codificação, hash, colisão em nível funcional, salt, função de derivação, fator de custo, pepper contextual, cofre de segredos, rotação e exposição em código/log.

**Conhecimentos necessários:** autenticação A05; hash A18; segredo/chave A17.

**Conhecimentos construídos:** senha não deve ser recuperável; salt não precisa ser secreto; hash rápido não é adequado para senha; segredo de serviço requer ciclo de vida distinto.

**Habilidades adquiridas:** avaliar amostra fictícia; identificar configuração inadequada; escrever requisito de armazenamento; definir rotação e teste.

**Evidência de conclusão:** especificação de armazenamento de senha/segredo e testes de aceitação sem revelar valor real.

### A20 — O canal é seguro para este fluxo e continua operável?

**Vínculo com a ementa:** arquiteturas de comunicação seguras; criptografia; defesa de perímetro; logs e auditoria.

**Objetivos de aprendizagem**

1. Combinar AAA, criptografia, segmentação e logging em um fluxo justificável.
2. Avaliar endpoint, canal, chave, disponibilidade e risco residual.
3. Validar casos permitido/negado e critério de recuperação.

**Tópicos e conhecimentos mobilizados:** arquitetura de comunicação, endpoint de confiança, TLS, VPN, autenticação mútua em nível introdutório, segmentação, gestão de chaves/certificados, telemetria, disponibilidade, fallback, backup/restauração e risco residual.

**Conhecimentos necessários:** fluxo A04; perímetro A15; mecanismos A17–A19; logs A14.

**Conhecimentos construídos:** canal seguro é composição de decisões; cifrar sem autenticar ou proteger endpoint deixa lacunas; alta disponibilidade e recuperação fazem parte da segurança do fluxo.

**Habilidades adquiridas:** selecionar mecanismo por propriedade; desenhar arquitetura; justificar ponto de confiança; criar teste permitido/negado e recuperação; declarar trade-off.

**Evidência de conclusão:** diagrama arquitetural, decisões justificadas, evidência esperada, testes e risco residual.

## Arco 5 — Configuração, detecção, resposta e nuvem

### A21 — O que mudou em relação ao esperado?

**Vínculo com a ementa:** políticas e gestão de riscos; defesa de perímetro; logs e auditoria.

**Objetivos de aprendizagem**

1. Definir estado esperado para ativo, serviço ou regra de perímetro.
2. Comparar baseline e evidência atual para identificar desvio.
3. Atribuir tratamento, prazo, exceção e critério de verificação.

**Tópicos e conhecimentos mobilizados:** inventário, baseline, hardening contextual, configuração, mudança autorizada, vulnerabilidade, severidade contextual, prazo/SLA local, exceção e verificação.

**Conhecimentos necessários:** registros A02/A10; arquitetura A15/A20; leitura de configuração fornecida.

**Conhecimentos construídos:** hardening depende da função; desvio não é automaticamente incidente; vulnerabilidade possui ciclo de tratamento e responsável.

**Habilidades adquiridas:** comparar estados; priorizar desvio; atualizar registro; definir correção/exceção; verificar remediação.

**Evidência de conclusão:** registro de desvio e painel mínimo com responsável, prazo, estado e evidência de fechamento.

### A22 — Quando um evento deve virar alerta?

**Vínculo com a ementa:** sistemas de logs e auditoria; segurança industrial; defesa de perímetro.

**Objetivos de aprendizagem**

1. Transformar hipótese em condição de alerta ligada a fonte e contexto.
2. Comparar falso positivo, falso negativo e custo operacional.
3. Correlacionar telemetria cibernética e de processo sem assumir causalidade.

**Tópicos e conhecimentos mobilizados:** log, evento, correlação, alerta, limiar, contexto, retenção, falso positivo/negativo, telemetria de rede e processo e ação esperada.

**Conhecimentos necessários:** trilha A14; baseline A21; hipótese/causalidade A01/A03; leitura de telemetria OT apoiada.

**Conhecimentos construídos:** nem todo evento exige alerta; regra útil orienta decisão; rede e processo oferecem evidências complementares; ausência de log não prova ausência de ação.

**Habilidades adquiridas:** especificar regra; selecionar campos/fonte; testar com exemplos; estimar limitações; definir ação segura.

**Evidência de conclusão:** especificação de alerta com lógica, fonte, contexto, exemplos positivos/negativos e ação.

### A23 — Conter, recuperar ou escalar?

**Vínculo com a ementa:** logs e auditoria; políticas e riscos; visão geral no contexto produtivo; segurança industrial.

**Objetivos de aprendizagem**

1. Triar alerta e selecionar contenção proporcional ao impacto.
2. Preservar evidências e coordenar escalonamento técnico e operacional.
3. Recuperar, validar função e registrar melhoria posterior.

**Tópicos e conhecimentos mobilizados:** severidade, triagem, playbook, preservação/cadeia de custódia introdutória, contenção, erradicação em nível conceitual, recuperação, escalonamento e lição aprendida.

**Conhecimentos necessários:** alerta A22; restauração e fallback A20; risco/safety A01.

**Conhecimentos construídos:** resposta é ciclo; contenção pode gerar consequência; recuperação precisa demonstrar estado confiável; revisão posterior muda controle/processo.

**Habilidades adquiridas:** decidir sob evidência progressiva; registrar ação; coordenar papéis; validar recuperação; atualizar runbook.

**Evidência de conclusão:** runbook curto executado em exercício de mesa e revisão pós-incidente.

### A24 — A arquitetura continua segura quando vai para a nuvem?

**Vínculo com a ementa:** arquiteturas de comunicação seguras; AAA; logs e auditoria; extrapolação em nuvem.

**Objetivos de aprendizagem**

1. Distinguir responsabilidades do provedor e do estudante/cliente no laboratório.
2. Aplicar menor privilégio e credencial temporária a uma função fornecida.
3. Verificar trilha de auditoria e canal administrativo sem expor credenciais.

**Tópicos e conhecimentos mobilizados:** responsabilidade compartilhada, IAM, usuário/função/política em nível funcional, credencial temporária, menor privilégio, canal administrativo e logging.

**Conhecimentos necessários:** AAA A05–A07; arquitetura A20; conta AWS Academy; apoio específico e atual do laboratório.

**Conhecimentos construídos:** nuvem desloca responsabilidades, não as elimina; identidade e logging são parte da arquitetura; permissão ampla aumenta alcance.

**Habilidades adquiridas:** ler política fornecida; identificar privilégio excessivo; corrigir e retestar; coletar evidência sanitizada; registrar custo/tempo.

**Evidência de conclusão:** revisão antes/depois de acesso e arquitetura, com teste e evento de auditoria.

### A25 — O perímetro em nuvem permite somente o necessário?

**Vínculo com a ementa:** defesa de perímetro; arquiteturas de comunicação seguras; logs e auditoria; extrapolação em nuvem.

**Objetivos de aprendizagem**

1. Relacionar rota, porta, serviço e grupo de segurança ao fluxo legítimo.
2. Reduzir exposição e validar tráfego permitido e negado.
3. Encerrar recursos e demonstrar ausência de recurso residual previsto para cobrança.

**Tópicos e conhecimentos mobilizados:** VPC em nível funcional, sub-rede/rota em nível introdutório, porta, serviço, security group, segmentação, logging, inventário, custo, limpeza e recuperação.

**Conhecimentos necessários:** perímetro A15; arquitetura A20/A24; apoio AWS com região, serviços, duração, custo e plano alternativo validados.

**Conhecimentos construídos:** perímetro em nuvem é programável e distribuído; regra deve corresponder a fluxo; encerramento e custo fazem parte da operação segura.

**Habilidades adquiridas:** ler caminho de rede; corrigir regra; testar conectividade positiva/negativa; coletar log; inventariar e encerrar recursos.

**Evidência de conclusão:** relatório antes/depois, testes, log e checklist de limpeza/custo.

## Arco 6 — Risco, políticas, normas industriais e integração OT

### A26 — O que tratar primeiro e quem precisa saber?

**Vínculo com a ementa:** políticas de segurança e gestão de riscos.

**Objetivos de aprendizagem**

1. Comparar riscos acumulados por plausibilidade, consequência e incerteza.
2. Selecionar tratamento e declarar risco residual.
3. Adaptar a mesma evidência para público técnico e decisor.

**Tópicos e conhecimentos mobilizados:** cenário, ativo, ameaça, vulnerabilidade, probabilidade qualitativa, impacto, incerteza, apetite/tolerância, tratar, aceitar, transferir, evitar e risco residual.

**Conhecimentos necessários:** registros de A02/A10/A21; consequência A01; controles e arquitetura dos arcos anteriores.

**Conhecimentos construídos:** risco não é pontuação isolada; tratamento depende de contexto e autoridade; residual precisa de proprietário e acompanhamento.

**Habilidades adquiridas:** comparar riscos; justificar prioridade; selecionar estratégia; registrar premissa; comunicar por destinatário.

**Evidência de conclusão:** registro de risco e duas comunicações coerentes da mesma decisão.

### A27 — Qual regra torna o tratamento repetível?

**Vínculo com a ementa:** políticas de segurança e gestão de riscos.

**Objetivos de aprendizagem**

1. Distinguir política, padrão, procedimento e registro.
2. Transformar tratamento de risco em responsabilidade e requisito verificável.
3. Definir exceção, prazo, evidência e métrica de acompanhamento.

**Tópicos e conhecimentos mobilizados:** governança, política, padrão, procedimento, responsável, segregação de funções, exceção, conformidade, indicador, auditoria e melhoria.

**Conhecimentos necessários:** risco A26; ciclo de vulnerabilidade A21; evidência/auditoria A14.

**Conhecimentos construídos:** política orienta decisão, padrão estabelece mínimo e procedimento operacionaliza; exceção não é ausência de controle; conformidade requer evidência.

**Habilidades adquiridas:** corrigir regra ambígua; derivar padrão/procedimento; atribuir responsável; definir exceção e indicador.

**Evidência de conclusão:** política curta, padrão verificável, procedimento mínimo e quadro de acompanhamento.

### A28 — O que as referências industriais exigem desta decisão?

**Vínculo com a ementa:** normas e padrões de segurança industrial; segurança de controle e automação; políticas e riscos.

**Objetivos de aprendizagem**

1. Explicar a função complementar de ISA/IEC 62443, NIST SP 800-82 e orientações CISA no caso.
2. Relacionar requisito, evidência, responsável e lacuna ao acesso remoto de fornecedor.
3. Propor condições de ciclo de vida, segmentação, monitoramento, revogação e resposta.

**Tópicos e conhecimentos mobilizados:** IACS/OT, ativo proprietário, integrador e fornecedor; ciclo de vida; avaliação de risco; defesa em profundidade; zonas/conduítes; requisitos/níveis de segurança em nível introdutório; acesso remoto; manutenção e evidência.

**Conhecimentos necessários:** política A27; perímetro A15; arquitetura A20; risco e safety A01/A26. Trechos permitidos e fontes públicas devem ser fornecidos, sem reproduzir conteúdo licenciado indevidamente.

**Conhecimentos construídos:** norma organiza requisitos e responsabilidades, mas exige contextualização; NIST e CISA oferecem orientação pública operacional; compliance isolado não prova segurança ou safety.

**Habilidades adquiridas:** consultar referência pela pergunta; mapear requisito-evidência; identificar responsável/lacuna; justificar adaptação; distinguir fato normativo de decisão de projeto.

**Evidência de conclusão:** matriz `requisito → evidência → responsável → lacuna` e plano condicionado de acesso remoto.

### A29 — O processo continua seguro depois da intervenção?

**Vínculo com a ementa:** segurança de sistemas de controle e automação industrial; normas industriais; defesa de perímetro; logs e auditoria.

**Objetivos de aprendizagem**

1. Reconstruir processo normal e inventariar componentes OT por função.
2. Analisar um fluxo/protocolo industrial pela evidência que transporta.
3. Propor segmentação e monitoramento e validar função e estado seguro.

**Tópicos e conhecimentos mobilizados:** processo físico simulado, PLC, HMI/supervisório, estação de engenharia, sensor/atuador em nível funcional, protocolo industrial selecionado, inventário passivo, zona, conduíte, telemetria, disponibilidade e safety.

**Conhecimentos necessários:** contatos OT A01/A15/A22/A28; arquitetura A20; laboratório OpenPLC/FUXA isolado ou pacote alternativo validado.

**Conhecimentos construídos:** OT interage com processo físico; protocolo deve ser entendido pela função e limitações; varredura ativa pode ser inadequada; controle precisa preservar operação.

**Habilidades adquiridas:** observar processo; inventariar passivamente; rotular fluxo; selecionar segmentação/alerta; executar teste funcional e critério de parada.

**Evidência de conclusão:** inventário OT, diagrama antes/depois, regra de monitoramento e teste de segurança/função.

### A30 — Conseguimos defender a decisão do início ao fim?

**Vínculo com a ementa:** integração de todos os itens, com ênfase em segurança industrial, políticas, riscos, logs, arquitetura e perímetro.

**Objetivos de aprendizagem**

1. Correlacionar evidências progressivas e priorizar uma intervenção defensável.
2. Coordenar resposta e recuperação preservando processo, safety e evidência.
3. Demonstrar validação e comunicar decisão técnica, executiva e risco residual.

**Tópicos e conhecimentos mobilizados:** integração de evidência, ameaça, vulnerabilidade, AAA, logs, malware, criptografia, arquitetura, perímetro, pentest, política, risco, norma industrial, resposta, recuperação e comunicação.

**Conhecimentos necessários:** portfólio dos seis arcos; modelo OT A29; papéis de SOC, desenvolvimento/infraestrutura, operação industrial e gestão.

**Conhecimentos construídos:** controles formam sistema sociotécnico; decisões têm premissas e responsáveis; validação inclui segurança, função e recuperação; incerteza e residual permanecem comunicáveis.

**Habilidades adquiridas:** investigar; priorizar; negociar autoridade; selecionar intervenção; validar; recuperar; adaptar comunicação; defender decisão e reconhecer limite.

**Evidência de conclusão:** dossiê enxuto, demonstração de validação, briefing técnico/executivo e plano de melhoria.

## 3. Matriz de cobertura da ementa

| Item da ementa | Introdução | Desenvolvimento | Demonstração/transferência |
|---|---|---|---|
| Visão geral no contexto produtivo | A01–A03 | A04–A15 | A26–A30 |
| Criptografia | A16 | A17–A19 | A20, A24, A29–A30 |
| Normas e padrões industriais | A15 | A28 | A29–A30 |
| Arquiteturas de comunicação seguras | A04 | A15, A17–A20 | A24–A25, A29–A30 |
| Defesa de perímetro | A04 | A15 | A20, A25, A28–A30 |
| Segurança de controle e automação industrial | A01 | A15, A22, A28 | A29–A30 |
| Malwares | A13 | A14, A22–A23 | A30 |
| Autenticação, autorização e contabilidade | A01 | A05–A07 | A14, A20, A24, A28–A30 |
| Logs e auditoria | A01 | A05–A07, A13–A14 | A21–A25, A29–A30 |
| Noções de técnicas de penetração | A02 | A07–A10 | A21 e A30 |
| Políticas e gestão de riscos | A01–A03 | A09–A10, A21, A26–A27 | A28–A30 |
| Engenharia social e conscientização | A11 | A12 | A13–A15 e A30 |

## 4. Conteúdos extrapolados e limites

| Extrapolação | Inserção | Limite |
|---|---|---|
| Desenvolvimento seguro | A07–A10 | sem transformar o curso em formação completa de AppSec |
| Privacidade e ciclo de vida | A12 e A16 | decisões contextuais; DLP aprofundado fica como consulta |
| Gestão de vulnerabilidades e hardening | A10, A21, A27 | fio recorrente, não catálogo de ferramentas |
| Resposta e recuperação | A20, A23, A29–A30 | orientadas à continuidade e evidência |
| Nuvem/AWS Academy | A24–A25 | transferência de AAA, arquitetura, perímetro e logs; custo e limpeza obrigatórios |
| Segurança física e fornecedores | A11–A15, A28 | integradas ao caminho de acesso e à operação OT |
| Modelagem de ameaças | A03–A04 e checkpoint A10 | STRIDE completo, DREAD e PASTA ficam como consulta/extensão |

## 5. Portão antes de produzir cada pacote

Antes dos slides, MkDocs e PDF, a ficha-base deverá confirmar:

1. quais objetivos deste documento serão avaliados;
2. qual evidência inicial torna os tópicos necessários;
3. quais conhecimentos prévios precisam de apoio;
4. qual habilidade será praticada, e não apenas explicada;
5. qual evidência comprovará a conclusão;
6. que produto ou pergunta seguirá para o próximo encontro;
7. como o item da ementa reaparecerá para consolidação;
8. qual extrapolação foi incluída e por que ela não desloca o núcleo obrigatório.
