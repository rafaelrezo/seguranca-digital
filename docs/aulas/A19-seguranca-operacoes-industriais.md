# A19 — Segurança das operações industriais: o que precisa continuar funcionando?

Um supervisório continua mostrando **47% de nível**, mas o horário da última medição parou de mudar. O processo está estável ou a tela perdeu contato com ele? Antes de bloquear uma conexão ou reiniciar um equipamento, é preciso saber quem mede, quem decide e quem atua.

Esta aula apresenta a segurança de **tecnologia operacional**, ou **OT** (*Operational Technology*), pela relação entre informação e processo físico. A referência principal é a [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final), guia específico para esse domínio.

Em tela estreita, deslize as tabelas para ler todas as colunas. Pelo teclado, use Tab para selecionar a região da tabela e as setas para percorrê-la.

## Objetivos de aprendizagem

1. Reconstruir um processo de controle, identificando medição, decisão, atuação e supervisão.
2. Explicar como uma falha digital pode afetar produção, ambiente e pessoas, distinguindo fato e hipótese.
3. Justificar controles em camadas e definir que evidência permitiria avaliar sua eficácia sem perder a função legítima.

**Tempo:** 100 minutos. **Recursos:** navegador e editor de texto; planilha é opcional. **Preparação:** reconhecer confidencialidade, integridade, disponibilidade e controle de acesso. As definições necessárias estão nesta página; não é preciso ter instalado um simulador ou realizado a prática de VPN.

**Produto:** primeira parte do registro de proteção e validação OT. Ele será concluído na [A20](A20-validacao-ot-pentest.md), com uma única entrega para os dois encontros.

## Processo: ligar o dado à consequência física

- **Sensor** mede uma grandeza; o número precisa de unidade e instante de aquisição.
- **Controlador** executa a lógica que decide uma ação.
- **Atuador** modifica o processo físico.
- **Supervisório** apresenta estados, alarmes e comandos autorizados; sua tela pode estar desatualizada.

Um **sistema de controle industrial**, ou **ICS** (*Industrial Control System*), integra esses elementos para operar uma instalação. OT é um conjunto mais amplo: inclui também, por exemplo, automação predial e sistemas de transporte. A característica decisiva é monitorar ou modificar o mundo físico.

No tratamento de água, um controlador pode comandar uma bomba com base no nível medido. Um erro na leitura, na lógica ou no comando tem consequências diferentes de um erro em uma cópia de relatório. A seção 2 da [NIST SP 800-82 Rev. 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf) apresenta componentes e topologias de OT.

### Exemplo: controle de nível

O esquema representa um **modelo didático de tanque de água**, sem planta, equipamento ou incidente real associado. Ele serve para separar funções; não é um projeto de segurança de máquinas.

```text
Tanque
   ↓ medição
Sensor de nível
   ↓ valor e qualidade
Controlador ↔ supervisório
   ↓ comando
Bomba de entrada
   ↓ água
Tanque
```

A primeira seta representa a medição. A segunda transporta o valor medido. A terceira leva a decisão de ligar ou desligar a bomba. A última representa a entrada de água que altera o nível. O supervisório troca informações com o controlador; a malha local pode continuar funcionando sem sua tela.

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Exemplo: controle de nível — tabela" markdown="1">

| Elemento | Função no exemplo | O que deve ser protegido |
|---|---|---|
| Sensor de nível | Mede o preenchimento em % | Exatidão, disponibilidade e atualidade da leitura |
| CLP | Executa a lógica de controle | Programa, parâmetros, modo de execução e entradas |
| Bomba de entrada | Acrescenta água | Comando e confirmação do estado físico |
| IHM | Permite supervisão local | Informação atual e permissões para comandos |
| Estação de engenharia | Configura programa e parâmetros | Identidade, ferramentas, alterações e cópias |

</div>

**CLP** significa controlador lógico programável; a sigla inglesa é **PLC**. **IHM** é a interface homem–máquina, também chamada de **HMI**. Um **SCADA**, sistema de supervisão e aquisição de dados, agrega supervisão de equipamentos e locais; um **historiador** armazena séries temporais para consulta. Esses papéis podem estar distribuídos ou reunidos em um produto.

Não atribua uma propriedade somente ao nome do equipamento. Um CLP com IHM integrada ainda tem funções de controle e de apresentação que precisam ser analisadas separadamente.

### Leitura guiada: uma tela parada

Todos os valores abaixo são **dados artificiais fornecidos para análise**, sem coleta em planta ou simulador. O instante de observação e o de aquisição usam o mesmo relógio neste exemplo.

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Leitura guiada: uma tela parada — tabela" markdown="1">

| Observação | Horário da aquisição | Nível na IHM | Qualidade informada |
|---|---|---:|---|
| 09:00:00 | 09:00:00 | 45% | Atual |
| 09:00:01 | 09:00:01 | 46% | Atual |
| 09:00:02 | 09:00:02 | 47% | Atual |
| 09:00:12 | 09:00:02 | 47% | Sem atualização |

</div>

1. Leia as duas primeiras colunas antes de comparar os níveis.
2. Calcule a idade da última amostra às 09:00:12.
3. Registre o que a tabela comprova sobre a **visibilidade** do processo.
4. Separe duas hipóteses para a falha e indique que evidência ajudaria a distingui-las.

**Conferência:** a última amostra tem dez segundos. A tabela sustenta perda de atualização na IHM; não informa o nível físico atual nem comprova que o CLP parou. Uma consulta ao estado local e ao caminho de aquisição seria diferente de simplesmente atualizar a página.

**Pare a interpretação** antes de declarar “nível estável”, “transbordamento” ou “ataque confirmado”. Essas conclusões exigem outras evidências. Reabra esse limite ao estudar detecção e resposta na A20.

## Prioridades: preservar controle, informação e segurança de pessoas

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Prioridades: preservar controle, informação e segurança de pessoas — tabela" markdown="1">

| Propriedade | Pergunta no processo | Exemplo de falha |
|---|---|---|
| Disponibilidade | A função necessária está acessível no tempo necessário? | Operador perde visibilidade durante uma manobra |
| Integridade | Medição, lógica e comando correspondem ao estado autorizado? | Parâmetro é alterado sem autorização |
| Confidencialidade | Quem pode conhecer informações sensíveis? | Cópia do programa e credenciais ficam expostas |
| Segurança de pessoas e ambiente | A operação evita consequências físicas inaceitáveis? | Uma atuação inadequada expõe pessoas ou provoca vazamento |

</div>

**Segurança cibernética** protege sistemas e informações contra condições que comprometam suas propriedades. **Segurança funcional** trata funções de proteção destinadas a reduzir riscos de falhas perigosas. Os temas se relacionam, mas instalar firewall ou VPN não demonstra que uma função de proteção física é adequada.

Não existe uma regra universal segundo a qual disponibilidade sempre vence integridade ou confidencialidade. Uma informação falsa disponível pode induzir uma ação perigosa. A prioridade depende da função, da fase de operação e das consequências de cada falha.

Em OT, **tempo de resposta**, **confiabilidade**, **compatibilidade com equipamentos** e **possibilidade de manutenção** influenciam a escolha do controle. Um agente de proteção que consome recursos, uma atualização que exige reinício ou uma autenticação que atrasa um comando precisam ser avaliados nesse contexto.

### Estado seguro: uma decisão de engenharia

No modelo do tanque, considere como premissa uma proteção de nível alto-alto em 80%, com interrupção da entrada de água. A faixa de operação e o limiar são escolhas do exemplo, não recomendações para instalações reais.

Desligar a bomba de entrada pode reduzir a alimentação de um transbordamento. Isso não determina o que fazer com saída, pressão, alimentação de outros equipamentos ou produtos perigosos. O **estado seguro** precisa ser definido pela análise do processo e pelos responsáveis pela operação.

Um **intertravamento** impede ou interrompe uma ação diante de determinada condição. Se ele usa o mesmo sensor, lógica e alimentação do controle que pode falhar, não presuma independência. Sistemas instrumentados de segurança exigem análise e requisitos próprios, fora do alcance deste exemplo.

**Decisão curta:** diante da tela sem atualização, explique por que “reiniciar imediatamente o CLP” não pode ser a primeira recomendação sem conhecer seu papel e o procedimento operacional.

## Referência NIST: organizar a visão geral sem confundir documentos

**A SP 800-82 orienta a adaptação da segurança ao domínio OT.** O **Cybersecurity Framework**, ou **CSF**, ajuda a organizar resultados de gestão. Já a **SP 800-115** orienta avaliações técnicas de segurança e será retomada na A20.

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Referência NIST: organizar a visão geral sem confundir documentos — tabela" markdown="1">

| Referência | Pergunta que ajuda a responder | Limite |
|---|---|---|
| NIST SP 800-82 Rev. 3 | Como proteger OT considerando seu funcionamento e suas restrições? | Não substitui análise de engenharia nem projeto específico |
| NIST CSF 2.0 | Que resultados de segurança precisam ser governados e acompanhados? | Não é roteiro de pentest nem catálogo de comandos |
| NIST SP 800-115 | Como planejar, executar e comunicar uma avaliação técnica? | Precisa de escopo, autorização e adaptação ao ambiente |
| ISA/IEC 62443 | Como situar responsabilidades e requisitos de sistemas industriais? | Uma visão geral não demonstra conformidade com a série |

</div>

Na data de consulta, **29 out. 2026**, a Rev. 3 é a edição final adotada aqui; a [Rev. 4 está em rascunho público](https://csrc.nist.gov/pubs/sp/800/82/r4/ipd). Uma proposta em consulta não é tratada como norma final.

O [CSF 2.0](https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final) organiza seis funções que se relacionam continuamente:

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Referência NIST: organizar a visão geral sem confundir documentos — tabela" markdown="1">

| Função | Decisão aplicada à operação |
|---|---|
| Governar — Govern | Quem aceita o risco, autoriza manutenção e responde pela operação? |
| Identificar — Identify | Que ativos, dependências e consequências precisam ser conhecidos? |
| Proteger — Protect | Como limitar acesso e alteração, mantendo os fluxos necessários? |
| Detectar — Detect | Que mudança, perda de atualização ou acesso precisa ser percebido? |
| Responder — Respond | Quem age, com qual limite e qual coordenação operacional? |
| Recuperar — Recover | Como restaurar e comprovar o retorno da função? |

</div>

A SP 800-82 Rev. 3 foi publicada antes do CSF 2.0 e utiliza a organização do **CSF 1.1**, com cinco funções. A coluna Governar acima é uma atualização de leitura pelo CSF 2.0; não é uma sexta função atribuída ao texto de 2023. As funções também não são uma fila em que detectar começa somente depois de proteger.

## Inventário e risco: registrar função antes de escolher controle

- Inventário útil registra **função, dependência e responsável**, além de endereço e versão.
- A consequência física deve ser explicada pelo funcionamento do processo.
- A exposição cria uma possibilidade; um incidente exige evidência adicional.
- A avaliação precisa registrar o que ainda se desconhece.

Um endereço IP não informa se o ativo pode ser reiniciado. A estação de engenharia pode parecer um computador comum, mas ter ferramentas e permissões capazes de alterar o programa do controlador. Um servidor de histórico pode depender de comunicação com a supervisão sem precisar enviar comandos ao CLP.

No uso de protocolos industriais, como **Modbus TCP**, é preciso conhecer quais operações transportam medições e quais alteram valores. Não deduza permissão de comando apenas porque um equipamento pode estabelecer uma conexão. Tampouco suponha que todo protocolo ou produto OT tenha as mesmas proteções.

O inventário pode começar por documentação, configurações e tráfego já existente. **Observação passiva** examina comunicações disponíveis; **descoberta ativa** envia consultas. A observação pode perder equipamentos silenciosos; a consulta pode afetar dispositivos sensíveis. A escolha precisa considerar autorização, compatibilidade e impacto, como discute o apêndice E da SP 800-82 Rev. 3.

### Exemplo trabalhado: alteração de parâmetro

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Exemplo trabalhado: alteração de parâmetro — tabela" markdown="1">

| Campo | Registro de exemplo |
|---|---|
| Função | Manter o nível do tanque dentro da faixa definida para operação |
| Condição | Estação de engenharia com permissão de alterar o parâmetro de controle |
| Evento considerado | Conta da estação é usada para uma alteração não autorizada |
| Consequência possível | Entrada de água inadequada; transbordamento se as demais barreiras falharem |
| Evidência necessária | Identidade, alteração, instante, versão do programa e resposta do processo |
| Controle proposto | Restringir identidade, destino, janela e alteração; revisar a proteção independente |
| Responsáveis | Operação autoriza a intervenção; automação verifica a lógica; segurança verifica os acessos |
| Limite | Não foram fornecidos programa, permissões reais nem testes de intertravamento |

</div>

Não atribua uma probabilidade ou uma classe de risco a esse exemplo sem premissas. A consequência depende da lógica, das proteções e das condições físicas. A [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) oferece apoio para explicitar essas incertezas na avaliação.

### Aplicação: completar o inventário mínimo

Registre três ativos do esquema de controle. Para cada um, indique função, dependência, alteração sensível, responsável e uma evidência que ajudaria a conhecê-lo. Use “não informado” quando faltar um dado.

Se usar uma planilha, crie uma coluna para cada campo e mantenha uma linha por ativo. Não procure equipamentos na rede da instituição. A atividade se limita ao esquema e aos registros desta página.

**Checkpoint:** diferencie a falha do sensor, a perda de comunicação com a IHM e a alteração do programa. Para cada condição, diga qual função pode ser afetada e o que ainda precisaria ser observado.

## Arquitetura: reduzir caminhos e limitar consequências

**Defesa em profundidade** combina barreiras com funções diferentes. Segmentação limita caminhos; controle de acesso limita ações; monitoramento revela condições; recuperação permite recompor a operação. Uma camada não prova que as outras funcionam.

Uma **zona** reúne ativos com necessidades de proteção relacionadas. Um **conduíte** organiza e protege comunicações entre zonas. A segmentação pode utilizar redes e firewalls, mas a fronteira depende também de regras, caminhos alternativos e permissões. A [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards) é referência complementar para sistemas de automação industrial.

### Exemplo de percurso remoto limitado

```text
Cliente remoto
   ↓ túnel
Gateway VPN
   ↓ acesso limitado
Intermediário na DMZ
   ↓ sessão autorizada
Estação de engenharia na OT
   ↓ operação autorizada
CLP
```

**DMZ** é uma zona intermediária usada para separar serviços e mediar comunicações entre redes. Uma **estação intermediária**, ou *jump host*, concentra o acesso autorizado ao destino seguinte. As setas representam conexões distintas; não são uma liberação automática de trânsito até o CLP.

O desenho é um exemplo simplificado de arquitetura. Não representa toda uma planta nem determina o posicionamento universal de seus componentes. A seção 5 da [SP 800-82 Rev. 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf) apresenta alternativas de arquitetura e defesa em profundidade.

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Exemplo de percurso remoto limitado — tabela" markdown="1">

| Camada | O que procura reduzir | O que ainda pode ocorrer |
|---|---|---|
| VPN com autenticação | Interceptação do trecho e entrada de cliente não autorizado | Cliente autenticado pode estar comprometido |
| Regras entre zonas | Caminhos diretos e alcance excessivo | Um fluxo permitido pode transportar uma ação indevida |
| Permissão de manutenção | Alterações por identidade ou janela inadequada | Conta autorizada pode cometer erro |
| Proteção do processo | Consequência de uma condição perigosa | Dependências comuns podem comprometer barreiras |
| Monitoramento e cópias | Falha silenciosa e dificuldade de recomposição | Alerta sem resposta ou cópia não restaurável |

</div>

Uma **VLAN** separa domínios de rede, mas não demonstra filtragem entre eles. Uma **VPN** protege seu trecho e autentica conforme a configuração; não concede, por si, autoridade para alterar o controlador. Um firewall permitir a porta necessária também não demonstra autorização dentro da aplicação.

O mesmo raciocínio vale para **zero trust**: localização na rede e conexão VPN não bastam para confiar em toda ação. Aplicar esse princípio exige considerar dispositivos legados, latência e operação de emergência, evitando interromper funções por uma política incompatível.

### Caso documentado: exposição de controladores

O alerta conjunto [AA23-335A, atualizado em dezembro de 2024](https://www.cisa.gov/sites/default/files/2024-12/aa23-335a-irgc-affiliated-cyber-actors-exploit-plcs-in-multiple-sectors.pdf), relata comprometimentos de dispositivos Unitronics, incluindo instalações de água, associados a equipamentos acessíveis pela Internet e credenciais padrão ou ausentes.

O caso ajuda a perguntar **por que o caminho externo existia e quem podia utilizá-lo**. Não se deve atribuir a todos os equipamentos do fabricante a mesma exposição, nem inferir um efeito físico específico a partir de uma tela alterada. Os dados do tanque desta aula não são evidências desse incidente.

**Aplicação:** no desenho remoto, marque onde devem existir identidade, restrição de destino, registro de sessão e autorização de alteração. Escolha um caminho que precisa ser negado e um fluxo legítimo que deve permanecer disponível.

## Validação: transformar uma recomendação em pergunta verificável

“Usar segmentação” é uma recomendação ampla. Um critério verificável seria: **o cliente remoto não estabelece conexão direta com o CLP; a manutenção autorizada alcança somente a estação prevista, durante a janela aprovada**.

Para avaliar esse critério, será preciso conhecer origem, destino, ação, janela e resultado. Também será necessário verificar que a restrição não eliminou supervisão ou controle legítimos. Revisão de configuração, evidência de tráfego e teste controlado oferecem tipos diferentes de evidência.

Preencha um registro com: **função → consequência → controle → responsável → caso permitido → caso negado → função preservada → evidência disponível → lacuna**. Identifique o que é proposta e o que foi fornecido ou observado; nenhum teste de rede é solicitado nesta aula.

## Atividade {#atividade}

Inicie o **registro de proteção e validação OT**, atividade única dos dois encontros. Use o [modelo em branco](../assets/a19-a20/modelo-registro-ot.md) ou um documento com os mesmos campos.

Nesta etapa, registre os três ativos, analise a amostra sem atualização e desenvolva uma decisão de proteção. Na A20, acrescente acesso, resposta, recuperação e o plano de avaliação. O [enunciado completo e a rubrica](../atividades/A19-A20-protecao-validacao-ot.md#atividade) definem a entrega, sem tarefa adicional por checkpoint.

## Diagnóstico e alternativa

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Diagnóstico e alternativa — tabela" markdown="1">

| Dificuldade | Como prosseguir |
|---|---|
| Não conheço automação | Refaça o esquema com os verbos medir, decidir, atuar e mostrar; use a tabela de componentes |
| Não consigo abrir a planilha | Registre os mesmos campos em texto; todos os dados necessários estão na página |
| Não há laboratório industrial | Analise o esquema e os registros fornecidos; identifique a análise como documental |
| Falta evidência para concluir | Registre a lacuna e a próxima coleta; não preencha com uma suposição |

</div>

Ao encerrar, salve o registro. Não há instalação, serviço de rede ou recurso de nuvem para remover. Não use dados ou endereços de plantas reais.

## Revisão rápida e continuidade

1. Por que uma leitura de 47% sem atualização não comprova estabilidade física?
2. Que diferença existe entre restringir uma conexão e autorizar uma alteração?
3. Qual caso legítimo precisa ser preservado para avaliar seu controle?

Leve para a [A20](A20-validacao-ot-pentest.md) os campos **caso permitido, caso negado, função preservada e lacuna**. Eles serão usados para distinguir controle proposto, evidência disponível e teste autorizado.

## Fontes de referência

- [NIST SP 800-82 Rev. 3 — Guide to OT Security](https://csrc.nist.gov/pubs/sp/800/82/r3/final): base principal; seções 2–5 e apêndice E para consulta seletiva.
- [NIST SP 800-82 Rev. 4 — rascunho público](https://csrc.nist.gov/pubs/sp/800/82/r4/ipd): estado de revisão, não base final desta aula.
- [NIST CSF 2.0](https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final): resultados de gestão e seis funções.
- [NIST SP 800-30 Rev. 1](https://csrc.nist.gov/pubs/sp/800/30/r1/final): avaliação de riscos e incertezas.
- [ISA/IEC 62443 — apresentação oficial da série](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards): referência complementar; não exige acesso ao texto pago.
- [CISA e parceiros — AA23-335A, edição atualizada em 2024](https://www.cisa.gov/sites/default/files/2024-12/aa23-335a-irgc-affiliated-cyber-actors-exploit-plcs-in-multiple-sectors.pdf): exemplo documentado de exposição de controladores.

Referências consultadas em **29 out. 2026**.
