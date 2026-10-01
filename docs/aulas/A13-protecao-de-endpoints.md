# A13 — Proteger endpoints: execução, malware e resposta

Um arquivo armazenado não está necessariamente em execução. Um processo com acesso comum pode alterar documentos. Um alerta pode apenas registrar uma ação. Nesta aula, você vai usar essas distinções para explicar **o que aconteceu, o que ainda não sabemos e qual resposta cabe**.

**Tempo:** 100 minutos. **Recursos:** esta página e um navegador; editor de texto opcional. Use somente os registros fornecidos. Não é preciso instalar agentes ou executar malware. **Base:** propriedades de segurança e [proteção de dados](A11-protecao-de-dados.md) dos encontros A11–A12.

**Objetivos de aprendizagem**

1. Explicar como a identidade e as permissões de um processo limitam suas ações.
2. Distinguir vírus, worm e outros mecanismos de malware usando exemplos industriais documentados.
3. Interpretar processo, arquivo, rede e alerta para propor contenção e retorno verificáveis.

As respostas curtas nesta página preparam a [única atividade integrada de A11–A13](#atividade); não geram entregas separadas.

## Execução: o que o processo consegue fazer? {#execucao}

**Arquivo** é um objeto armazenado; **processo** é um programa em execução. O processo atua com uma identidade e permissões. Se essa identidade pode editar um documento, o processo também pode alterá-lo, mesmo sem ser administrador. Privilégio administrativo amplia certas ações, mas sua ausência não protege automaticamente os arquivos do usuário.

Para delimitar o alcance de uma execução, procure: **processo e pai**, **usuário**, **recurso acessado**, **ação** e **resultado**. O nome do programa é uma pista; não demonstra sozinho uso legítimo ou malicioso. O identificador do processo, chamado PID, pode ser reutilizado depois que ele termina; associe-o também ao dispositivo e ao horário.

<figure class="didactic-figure didactic-figure-wide" id="figura-5" markdown="1">

[![Processo P0 inicia P1 como usuário comum. P1 pode ler e escrever os documentos permitidos ao usuário; os arquivos protegidos indicados permanecem negados. Sem privilégio administrativo, ainda pode haver dano aos documentos acessíveis.](../assets/a11-a12/A12-figura-5-alcance-processo.jpeg)](../assets/a11-a12/A12-figura-5-alcance-processo.jpeg){ aria-label="Abrir a figura de alcance do processo em tamanho original" }

<figcaption><strong>Alcance do processo.</strong> P1 pode afetar os documentos aos quais sua identidade tem acesso. O UID 1001 é ilustrativo; o número isolado não define os privilégios. Imagem fornecida pelo docente. Selecione para ampliar.</figcaption>
</figure>

### Observação benigna: ler a fonte antes de concluir

Abra o [CSV de observação benigna](../assets/a11-a12/observacao-benigna.csv) no navegador ou em um editor. O arquivo registra um ensaio em Linux: um processo filho P1 escreveu `observacao benigna` em um arquivo temporário. Os identificadores foram substituídos por P0/P1; a [procedência](../assets/a11-a12/procedencia.md) explica o procedimento. As colunas são registro, instante UTC, fonte, processo, pai, objeto e observação. UTC é a referência de horário dos dois registros.

1. Em **L1**, a consulta `ps` mostra P1 presente e P0 como pai **naquele instante**.
2. Em **L2**, a leitura mostra o conteúdo do arquivo. A associação da escrita a P1 vem do procedimento conhecido do ensaio; L2 não é um log de auditoria de escrita.
3. Registre uma afirmação sustentada por L1 ou L2 e uma ação que esses registros **não** permitem afirmar.

**Sem download:** L1 informa “P1 estava presente, com pai P0”; L2 informa “o arquivo continha a linha de teste”. Não há registro de rede, persistência ou intenção maliciosa. Em outra máquina, atribuir a escrita a um processo exigiria uma fonte que ligasse processo, arquivo e operação.

## Malware: distinguir propagação de efeito {#malware}

Malware é software usado para realizar uma ação não autorizada. **Entrega** leva um artefato ao alvo; **execução** põe instruções em funcionamento; **persistência** permite voltar a executar; **propagação** alcança outros objetos ou dispositivos; **efeito** é o que o código faz, como coletar, alterar ou tornar dados indisponíveis. Um malware não precisa apresentar todas essas funções nem seguir essa ordem.

### Vírus e worm: qual é a diferença?

| | Vírus | Worm |
|---|---|---|
| **Replicação** | Infecta um arquivo ou programa hospedeiro; a cópia segue com esse hospedeiro. | Consegue criar cópias e procurar novos alvos sem infectar um arquivo hospedeiro. |
| **Evidência necessária** | Objeto hospedeiro modificado e mecanismo de replicação. | Mecanismo de propagação e efeito observado em outro alvo. |
| **Cuidado** | Abrir um arquivo suspeito não comprova infecção por vírus. | Várias conexões de rede não comprovam autopropagação. |

Um worm pode precisar de uma ação inicial para entrar no ambiente. “Autopropagação” descreve o que ele consegue fazer **depois**. Outras categorias respondem a perguntas diferentes: **trojan** se apresenta como algo desejável ou legítimo; **ransomware** restringe acesso e exige pagamento; **spyware** coleta informações. Uma mesma operação pode combinar características. O nome da família não substitui a descrição da ação observada.

### Dois episódios industriais documentados {#incidentes-industriais}

| Episódio | Mecanismo que interessa aqui | Decisão que ele ajuda a explicar |
|---|---|---|
| [Stuxnet — ICS-CERT/CISA](https://www.cisa.gov/uscert/ics/advisories/ICSA-10-272-01) | O alerta relata propagação por USB, compartilhamentos e arquivos de projeto, além de interação com WinCC/STEP 7. | Restringir USB cobre uma via de entrada, mas não todas. Para afirmar infecção em uma estação específica, é preciso verificar indicadores nela. |
| [Rede elétrica ucraniana, 2015 — CISA](https://www.cisa.gov/news-events/alerts/2022/01/11/understanding-and-mitigating-russian-state-sponsored-cyber-threats-us-critical-infrastructure) | A síntese relaciona BlackEnergy à obtenção de credenciais, KillDisk à inutilização de computadores e interrupções nas distribuidoras atacadas. | Restaurar arquivos pode recuperar função; ainda é preciso examinar credenciais e caminhos de acesso. A interrupção envolveu mais que um único arquivo. |

**Exemplo trabalhado:** a fonte de Stuxnet documenta **caminhos de propagação**. Ela não informa que uma estação específica da sua organização esteja infectada. A conclusão local dependeria de uma observação nessa estação. **Agora compare:** no episódio ucraniano, que problema uma restauração poderia resolver? Qual pergunta sobre acesso permaneceria aberta?

Os episódios acima são reais e documentados. Os registros L1/L2 e E1–E4 desta página são separados deles. Não execute amostras, indicadores ou comandos retirados dos relatos. A análise detalhada das consequências para o processo físico fica para o bloco de OT.

## Controles: associar mecanismo, resultado e limite {#defesas}

Escolha o controle pela ação que deseja limitar ou observar:

| Ação em foco | Controle | Como verificar |
|---|---|---|
| Explorar falha conhecida | Atualização compatível | Conferir versão corrigida e funcionamento da aplicação. |
| Executar código fora da política | Controle de aplicações ou restrição de scripts | Testar execução permitida e negada; conferir exceções. |
| Alterar dados além da tarefa | Menor privilégio e permissão de acesso | Testar leitura/edição necessárias e acesso negado; o processo ainda alcança dados autorizados. |
| Reconhecer e responder a comportamento | Antimalware, telemetria e EDR | Confirmar dispositivo coberto, registro, alerta e ação efetivamente executada. |
| Perder dados ou função | Cópia recuperável | Restaurar em destino de teste e conferir conteúdo e uso; isso não desfaz exposição anterior. |

**Antimalware** pode usar assinatura de detecção, reputação, heurística e comportamento. Uma assinatura de detecção reconhece características de ameaça; é diferente da assinatura digital que ajuda a verificar a origem de software. **EDR** reúne capacidades de investigação e resposta no endpoint, conforme produto e configuração. Um coletor de eventos, como o [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon), registra atividades configuradas; não é, por si, um EDR ou uma decisão automática sobre intenção.

**Aplicação curta:** para um processo que altera documentos acessíveis ao usuário, identifique um controle que **reduz o alcance** e outro que **ajuda a observar a ação**. Explique o que cada verificação ainda deixaria em aberto.

## Telemetria: ler o rastro antes de nomear o incidente {#telemetria}

Leia cada registro nesta ordem: **quando e onde → quem/processo → ação/recurso → resultado/fonte**. Compare horários na mesma referência de fuso. Processo pai e caminho ajudam a relacionar ações, mas um nome conhecido não garante legitimidade. Um evento de rede informa conexão ou tentativa; não revela automaticamente o conteúdo enviado. Um alerta informa que uma regra foi acionada; a ação configurada diz se houve registro, aviso ou bloqueio.

O exemplo a seguir é **artificial**, criado para análise. Todos os registros pertencem ao dispositivo `LAB-01`, em UTC. O operador declarou “exportação de relatório”, mas não forneceu autorização de envio externo. O endereço IP usa uma faixa reservada para documentação.

| Registro | Horário | Observação |
|---|---|---|
| E1 | 09:00:00 | P20 iniciou, pai P10, usuário comum, caminho `/lab/exportador`. |
| E2 | 09:00:02 | P20 criou `/lab/saida.csv`. |
| E3 | 09:00:03 | P20 abriu conexão TCP para `192.0.2.40:443`. |
| E4 | 09:00:04 | Regra “cria arquivo e conecta externamente” gerou alerta; ação: **somente registrar**. |

**Leitura trabalhada:** E1–E3 sustentam que P20 iniciou, criou o arquivo e abriu uma conexão. E4 sustenta que a regra gerou um alerta sem bloquear a ação. **Não há evidência do conteúdo transferido nem autorização de envio.** Portanto, a conclusão útil é: “P20 criou um arquivo e abriu conexão; verificar se houve transferência do conteúdo e se o destino era autorizado”. Os quatro registros não demonstram worm, ransomware ou vazamento.

**Sua vez:** mantenha E1–E3 e troque E4 por “a tentativa de conexão foi bloqueada, com resultado confirmado no registro”. Escreva uma nova conclusão e uma incerteza. O bloqueio vale para aquela tentativa; não prova remoção de P20 nem ausência de comunicação anterior. Use quatro linhas: **observado → hipótese → informação ausente → próxima verificação**. A tabela é a alternativa sem ferramenta; não invente registros adicionais.

## Resposta: conter, tratar a causa e verificar retorno {#resposta}

**Conter** limita o dano em andamento. **Erradicar** trata a causa e os mecanismos que poderiam manter o problema. **Recuperar** restabelece uma função confiável. São objetivos distintos: um alerta não comprova contenção, e uma contenção não comprova erradicação.

| Medida | O que pode interromper | O que permanece possível |
|---|---|---|
| Encerrar P20 | Ação daquela instância do processo. | Outra instância pode iniciar; o mecanismo de retorno não foi examinado. |
| Isolar a rede do dispositivo | Comunicação coberta pelo isolamento. | P20 pode continuar alterando arquivos locais; serviços de suporte podem parar. |
| Revogar sessão ou credencial | Acesso que depende daquela autoridade, conforme o serviço. | Arquivos locais e processos em execução não desaparecem. |

**Decisão guiada com E1–E4:** os registros mostram criação de arquivo e conexão, mas não dizem se houve dano indevido. Registre primeiro o que precisa ser verificado: conteúdo e finalidade do arquivo, autorização do destino, ações posteriores de P20 e funções que uma intervenção afetaria. Se houver alteração indevida em curso, uma ação mais imediata pode ser justificada. Em ambiente industrial, consulte os responsáveis pelo processo antes de interromper uma estação que sustenta uma função operacional. Esta análise não autoriza intervenção em produção.

**Critério de retorno:** confirmar causa tratada, acessos relevantes revistos, dados e função testados e observação disponível para acompanhar recorrência. Se houve restauração, compare também o estado recuperado com as metas RPO/RTO estudadas em proteção de dados. Uma varredura sem alerta não é prova absoluta de ausência de comprometimento.

## Síntese: dado e dispositivo precisam de controles diferentes {#sintese}

Permissões e DLP tratam **quem usa e para onde o dado circula**. Controle de execução e menor privilégio limitam **o que um processo pode fazer**. Telemetria ajuda a **reconstruir ações**; backup e restauração ajudam a **recuperar função e dados**. Para justificar um controle, declare **mecanismo, evidência de verificação e limite**.

No próximo bloco, a criptografia aprofundará confidencialidade e integridade. Leve uma pergunta: **se o endpoint usa uma chave e vê o texto legível, o que acontece quando esse dispositivo está comprometido?**

## Atividade {#atividade}

Conclua o [parecer técnico de A11–A13](../atividades/A11-A12-parecer.html#atividade). A entrega reúne proteção de dados, regra com contraprova, leitura de rastros e resposta. Use somente os insumos fornecidos; os incidentes industriais acima não pertencem aos registros artificiais do parecer. Não é preciso instalar ferramentas ou reproduzir ataque.

## Revisão rápida

1. Qual evidência diferencia a replicação de um vírus da autopropagação de um worm?
2. O que E3 e E4 permitem afirmar sobre conexão, alerta e bloqueio?
3. Por que isolar a rede não garante que P20 parou de alterar arquivos locais?

## Referências e aprofundamento

- [CERT.br — códigos maliciosos](https://cartilha.cert.br/fasciculos/codigos-maliciosos/fasciculo-codigos-maliciosos.pdf): famílias e mecanismos.
- [ICS-CERT/CISA — Stuxnet](https://www.cisa.gov/uscert/ics/advisories/ICSA-10-272-01): propagação e interação com sistemas de engenharia.
- [CISA — Ucrânia 2015](https://www.cisa.gov/news-events/alerts/2022/01/11/understanding-and-mitigating-russian-state-sponsored-cyber-threats-us-critical-infrastructure): BlackEnergy, KillDisk e interrupção.
- [Microsoft Sysinternals — Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) e [Microsoft Learn — EDR](https://learn.microsoft.com/en-us/defender-endpoint/overview-endpoint-detection-response): funções de coleta, investigação e resposta.
- [CERT.br — responder a ransomware](https://www.cert.br/docs/ransomware/responder/): contenção, remoção e recuperação.
- [ICS-CERT — HatMan/TRITON](https://www.cisa.gov/sites/default/files/documents/MAR-17-352-01%20HatMan%E2%80%94Safety%20System%20Targeted%20Malware_S508C.pdf): leitura opcional para o bloco OT.

Fontes dos incidentes industriais conferidas em 1º out. 2026. L1/L2 vêm de um ensaio benigno com [procedência registrada](../assets/a11-a12/procedencia.md). E1–E4 são exemplos artificiais, não evidências de incidente real.
