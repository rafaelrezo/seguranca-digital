# Prompts de ilustrações — A19–A20 (segurança OT)

Catálogo docente, fora do site. A numeração continua a série do curso (imagens 14–20 e figuras SVG 21–25 em A14–A17). As páginas são completas sem as imagens; cada figura substitui ou complementa um esquema indicado em **Local**.

**Orientações para gerar:**

- Gerar uma imagem por vez. Formato PNG, pelo menos 1600 px de largura, 16:9, salvo indicação diferente.
- Geradores de imagem costumam errar texto. Os rótulos entre aspas devem aparecer **exatamente** como escritos. Se um rótulo sair errado, peça para regenerar só aquele rótulo, ou gere sem texto e me envie: posso sobrepor os rótulos em SVG.
- Estilo comum, para manter a série coerente: ilustração técnica plana, fundo claro, alto contraste, linhas finas, ícones simples, texto grande legível em projeção e celular, sem marcas, logotipos, pessoas reconhecíveis, telas de produtos reais ou endereços IP.
- Nome sugerido do arquivo: `imagemNN.png`. Antes de incorporar, confiro precisão, rótulos, setas e legibilidade. Se houver erro conceitual, devolvo um prompt corrigido com a mesma numeração.

Prioridade sugerida: **26, 29, 30, 31** (maior ganho didático), depois 27, 28, 32, 33, 34.

---

## A19

### Imagem 26 — Malha de controle do tanque didático {#imagem-26}

**Estado:** imagem recebida, validada e incorporada em 29 out. 2026 (`docs/assets/a19-a20/imagem26.png`, otimizada para 256 cores; `#figura-26` na A19). Substitui o esquema em texto. Critérios de conferência atendidos. Observação: o nível da água desenhado fica perto de 70%, acima da faixa de operação do exemplo; a página declara o nível como ilustrativo. Se uma nova versão for gerada, acrescentar ao prompt: "nível da água em cerca de 50%, entre as marcas de 40% e 60%".

**Local:** A19, "Exemplo: controle de nível"; substitui o esquema em texto.

**Prompt:**

> Crie um diagrama técnico didático, em português, de uma malha de controle de nível de um tanque de água, no estilo de um P&ID simplificado e amigável para estudantes de engenharia de controle e automação. Fundo claro, alto contraste, 16:9, texto grande.
>
> Elementos, da esquerda para a direita:
> 1. Um tanque vertical parcialmente cheio de água, com marcações laterais "40%", "60%" e "80% alto-alto".
> 2. No tanque, um transmissor de nível com o rótulo "Sensor de nível".
> 3. Uma tubulação de entrada no topo do tanque, com uma bomba rotulada "Bomba de entrada" e uma seta de fluxo de água.
> 4. Um armário de controle com o rótulo "CLP".
> 5. Acima do CLP, um monitor rotulado "IHM / supervisório".
> 6. Afastada, em área separada por linha tracejada, uma estação de trabalho rotulada "Estação de engenharia".
>
> Ligações, cada uma com rótulo curto:
> - Sensor → CLP, linha contínua: "medição (valor + qualidade + instante)".
> - CLP → Bomba, linha contínua: "comando".
> - Bomba → Tanque, seta de água azul: "água".
> - CLP ↔ IHM, linha tracejada: "supervisão".
> - Estação de engenharia → CLP, linha pontilhada de outra cor: "programa e parâmetros".
>
> Destaque com um contorno verde o laço Sensor → CLP → Bomba → Tanque, com a legenda "malha local: continua funcionando sem a IHM".
>
> Não desenhe pessoas, chamas, explosões, marcas ou números de série. Não acrescente válvulas, sensores ou equipamentos extras. Não escreva valores de nível além das três marcações indicadas.

**Texto alternativo previsto:** malha de controle do tanque: o sensor de nível envia medição ao CLP, o CLP comanda a bomba de entrada, e a água altera o nível. A IHM troca informações de supervisão com o CLP; a estação de engenharia altera programa e parâmetros. O laço sensor–CLP–bomba–tanque continua funcionando sem a IHM.

**Conferência:** a IHM não pode aparecer no caminho do comando; a estação de engenharia não pode parecer parte do laço de controle; a seta de água vai da bomba para o tanque.

---

### Imagem 27 — Tela parada: dois relógios na mesma IHM {#imagem-27}

**Estado:** imagem recebida (enviada como `imagem28.png` e renomeada), validada e incorporada em 29 out. 2026 (`docs/assets/a19-a20/imagem27.png`, 256 cores; `#figura-27` na A19). **Local alterado:** depois da Conferência, não antes da tabela, porque a faixa "Idade da amostra = 10 s" antecipa a resposta do passo 2 da leitura guiada. Título "Tanque de Processo" acrescentado pelo gerador; inofensivo.

**Local:** A19, "Leitura guiada: uma tela parada", após a Conferência (ver Estado).

**Prompt:**

> Crie uma ilustração em português de uma tela de IHM industrial genérica e simples, sem marca, em 16:9, fundo claro, alto contraste.
>
> Na tela: um tanque estilizado com nível em "47%"; abaixo, dois campos lado a lado, bem destacados: "Hora atual: 09:00:12" e "Última aquisição: 09:00:02". Ao lado do valor 47%, um selo âmbar com o texto "Sem atualização".
>
> Fora da tela, à direita, duas anotações com setas apontando para os dois horários: "o que o relógio mostra agora" e "quando o valor foi medido". Abaixo, uma faixa com o texto: "Idade da amostra = 10 s. A tela não mostra o nível físico atual."
>
> Não use vermelho, alarmes piscando, caveiras, hackers ou símbolos de ataque. Não acrescente outros valores, gráficos ou botões além do essencial.

**Texto alternativo previsto:** tela de IHM com nível de 47%, hora atual 09:00:12 e última aquisição 09:00:02, marcada como sem atualização; a amostra tem dez segundos e não informa o nível físico atual.

**Conferência:** horários exatos; nenhuma sugestão de ataque ou de transbordamento.

---

### Imagem 28 — Defesa em profundidade: cinco camadas da SP 800-82 {#imagem-28}

**Estado (29 out. 2026):** primeira versão recebida (`imagem28-real.png`) e **não incorporada**. Rótulos e ordem corretos, mas o ícone de firewall ficou no anel 2 (física) e a engrenagem do software dentro do círculo "Processo"; associação incorreta camada–ícone. Retoque por pixel tentado e descartado por deixar emendas. Usar o prompt corrigido abaixo.

**Prompt corrigido:**

> Crie um diagrama didático em português com cinco anéis concêntricos ao redor de um círculo central rotulado "Processo", com um pequeno tanque e um CLP. Ilustração técnica semi-realista com ícones limpos, rótulos em negrito escuro, fundo claro, alto contraste, formato quadrado 1:1, texto grande.
>
> Do anel mais externo para o mais interno, com estes rótulos exatos escritos dentro do próprio anel: 1. "1 — Gestão de segurança", azul-claro; 2. "2 — Segurança física", verde-claro; 3. "3 — Segurança de rede", amarelo-claro; 4. "4 — Segurança de hardware", lilás; 5. "5 — Segurança de software", rosa-claro.
>
> Cada anel tem exatamente um ícone, desenhado inteiramente dentro da faixa colorida daquele anel, ao lado do seu rótulo, sem tocar as bordas: anel 1, folha de documento com três silhuetas simples sem rosto; anel 2, porta fechada com fechadura; anel 3, pequena parede de tijolos vermelhos (firewall); anel 4, chave seletora RUN/STOP em um CLP; anel 5, engrenagem com escudo.
>
> Uma seta grossa vem de fora pela esquerda e atravessa os anéis em direção ao centro, ficando mais fina e mais clara a cada anel, e termina antes do círculo "Processo", sem tocá-lo. Ao lado da seta, a caixa: "cada camada tem função diferente; uma não prova que a outra funciona". Junto ao anel 1, caixa pequena: "concluir primeiro: orienta as demais".
>
> Não desenhe ícones fora do seu anel nem ícones extras. Sem marcas, pessoas reconhecíveis ou hackers.

**Conferência adicional:** cada ícone inteiramente dentro do seu anel; seta não toca o processo.

**Prompt original (histórico):**

**Local:** A19, "Arquitetura: defesa em profundidade em cinco camadas", após os cards.

**Prompt:**

> Crie um diagrama didático em português com cinco anéis concêntricos ao redor de um pequeno ícone central de tanque com CLP, rotulado "Processo". Fundo claro, alto contraste, 1:1 ou 4:3, texto grande.
>
> Do anel mais externo para o mais interno, com estes rótulos exatos:
> 1. "1 — Gestão de segurança" (ícone de documento e pessoas em reunião, sem rostos)
> 2. "2 — Segurança física" (ícone de porta com fechadura e armário)
> 3. "3 — Segurança de rede" (ícone de firewall entre dois segmentos)
> 4. "4 — Segurança de hardware" (ícone de chave seletora de modo em um CLP)
> 5. "5 — Segurança de software" (ícone de engrenagem com escudo)
>
> Uma seta grossa, vinda de fora, atravessa os anéis e perde força a cada um, com a legenda "cada camada tem função diferente; uma não prova que a outra funciona". Uma pequena nota junto ao anel 1: "concluir primeiro: orienta as demais".
>
> Use cores suaves e distintas para cada anel, sem depender só da cor: os números devem estar visíveis. Não desenhe hackers, cadeados gigantes ou marcas.

**Texto alternativo previsto:** cinco camadas concêntricas protegem o processo: gestão de segurança, física, rede, hardware e software; a gestão orienta as demais e nenhuma camada comprova as outras.

**Conferência:** ordem e numeração exatas; o anel 1 é o mais externo.

---

### Imagem 29 — Modelo Purdue com zonas, conduítes e DMZ {#imagem-29}

**Estado (29 out. 2026):** primeira versão recebida e **não incorporada**. Faixas, DMZ e zonas corretas, mas (1) a seta verde sobe direto do historiador ao corporativo, passando ao lado da réplica — desenha o fluxo atravessando a DMZ, padrão que a DMZ deve impedir; (2) a seta vermelha continua cheia após o X até o CLP, cruzando a fronteira da Zona OT sem conduíte. Corrigir com o bloco de setas abaixo, mantendo o restante do prompt revisto.

**Bloco de setas corrigido (substitui os dois parágrafos de fluxo do prompt):**

> Fluxo permitido, em DUAS setas verdes separadas, que terminam na DMZ: seta 1, do "historiador" (Nível 3) sobe, atravessa o firewall inferior e termina na "réplica do historiador", com a ponta tocando esse servidor; rótulo "1 — historiador envia à réplica". Seta 2, começa na "réplica do historiador", sobe, atravessa o firewall superior e termina nos computadores corporativos; rótulo "2 — corporativo lê a réplica". Nenhuma seta verde vai diretamente do Nível 3 ao corporativo.
>
> Fluxo negado: uma seta vermelha tracejada curta desce dos computadores corporativos e termina no firewall superior, com um X vermelho grande sobre o firewall. Abaixo do firewall não existe linha vermelha. Rótulo: "corporativo → CLP direto: negado".
>
> Não acrescente faixas, setas ou rótulos além dos indicados. Sem marcas, IPs, nomes de produtos ou pessoas.

**Conferência adicional:** duas setas verdes, cada uma terminando em um servidor; nenhuma linha vermelha abaixo do firewall superior.


**Local:** A19, "Zonas, conduítes e níveis"; complementa a tabela de níveis.

**Prompt (revisto em 29 out. 2026 após a imagem 26: estilo da série e trajetos das setas explícitos):**

> Crie um diagrama didático de arquitetura de rede industrial em português, baseado no modelo Purdue. Use o mesmo estilo de uma ilustração técnica semi-realista com ícones limpos, rótulos em negrito escuro, fundo claro, alto contraste e texto grande legível em projeção. Formato 16:9.
>
> Organize seis faixas horizontais empilhadas, ocupando toda a largura, com o rótulo à esquerda de cada faixa exatamente como escrito:
> - topo: "Níveis 4–5 — Rede corporativa" (dois computadores de escritório e um servidor)
> - "DMZ industrial" (um servidor rotulado "intermediário" e outro rotulado "réplica do historiador")
> - "Nível 3 — Operações do site" (um servidor rotulado "historiador" e uma estação de trabalho rotulada "engenharia")
> - "Nível 2 — Supervisão" (um monitor rotulado "IHM / SCADA")
> - "Nível 1 — Controle básico" (um armário de CLP rotulado "CLP")
> - base: "Nível 0 — Processo" (tanque de água, sensor de nível e bomba)
>
> Desenhe duas barreiras horizontais com ícone de firewall, ambas com o rótulo "conduíte": uma entre a faixa corporativa e a DMZ, outra entre a DMZ e o Nível 3. Contorne os níveis 0 a 3 com uma linha tracejada azul rotulada "Zona OT" e a faixa corporativa com outra linha tracejada cinza rotulada "Zona corporativa".
>
> Fluxo permitido: uma seta verde contínua sobe do "historiador" no Nível 3, atravessa o firewall inferior até a "réplica do historiador" na DMZ, e depois atravessa o firewall superior até os computadores corporativos. Rótulo da seta: "dados sobem pela DMZ".
>
> Fluxo negado: uma seta vermelha tracejada desce dos computadores corporativos em direção ao CLP e para no firewall superior, com um X vermelho grande sobre o firewall. Rótulo: "corporativo → CLP direto: negado".
>
> Não use marcas, logotipos, endereços IP, nomes de produtos ou pessoas. Não desenhe nuvem, IIoT ou Internet. Não acrescente faixas, níveis ou rótulos além dos indicados.

**Texto alternativo previsto:** modelo Purdue com processo (nível 0), controle (1), supervisão (2), operações (3), DMZ e rede corporativa (4–5). Firewalls funcionam como conduítes entre zonas; dados do historiador sobem pela réplica na DMZ até o corporativo, e o acesso direto do corporativo ao CLP é negado no primeiro firewall.

**Conferência:** a DMZ fica entre o nível 3 e o corporativo; a seta verde passa pelos firewalls e não alcança o CLP; a seta vermelha para no firewall superior; os seis rótulos de faixa estão exatos.

---

### Imagem 30 — Percurso remoto limitado com trechos numerados {#imagem-30}

**Local:** A19, "Exemplo de percurso remoto limitado"; substitui o esquema em texto. Reutilizada na A20, em "Proteger: acesso remoto".

**Estado:** imagem recebida, validada e incorporada em 29 out. 2026 (`docs/assets/a19-a20/imagem30.png`, margens recortadas e 256 cores; `#figura-30` na A19 e na A20). Na A19, substitui o esquema e a Aplicação cita os trechos ①–④; na A20, abre a seção de acesso remoto com a tabela trecho → pergunta → controle, e a análise de M-01 pede o trecho de cada evento. Observação: a seta vermelha tem ponta também junto ao cliente e um prolongamento esmaecido até o CLP; a página explica o esmaecido como o alcance caso a fronteira não bloqueasse.

**Revisão de 29 out. 2026:** o prompt anterior colocava selos com os controles de cada trecho, o que entregaria a resposta da Aplicação da A19 ("marque onde devem existir identidade, restrição de destino, registro de sessão e autorização de alteração"). A nova versão numera os trechos ①–④ para o estudante associar os controles. Ao incorporar, ajustar a Aplicação para citar os números.

**Prompt:**

> Crie um diagrama didático horizontal em português de um acesso remoto de manutenção a um ambiente industrial. Use o mesmo estilo de uma ilustração técnica semi-realista com ícones limpos, rótulos em negrito escuro, fundo claro, alto contraste e texto grande legível em projeção. Formato 16:9.
>
> O fundo é dividido em três áreas verticais com cores suaves e rótulos no topo, exatamente como escrito: à esquerda "Fora da empresa", no centro "DMZ", à direita "Rede OT". Separe as áreas com linhas verticais com ícone de firewall.
>
> Da esquerda para a direita, cinco nós alinhados em uma linha horizontal, com estes rótulos exatos:
> 1. "Cliente remoto" (notebook), na área "Fora da empresa"
> 2. "Gateway VPN" (equipamento de rede em rack), sobre a fronteira entre "Fora da empresa" e "DMZ"
> 3. "Intermediário" (servidor), na "DMZ"
> 4. "Estação de engenharia" (estação de trabalho com monitor), na "Rede OT"
> 5. "CLP" (armário de CLP), na "Rede OT"
>
> Ligue os nós por quatro setas separadas, cada uma com um círculo numerado e um rótulo curto:
> - Cliente remoto → Gateway VPN: "① túnel"
> - Gateway VPN → Intermediário: "② acesso limitado"
> - Intermediário → Estação de engenharia: "③ sessão autorizada"
> - Estação de engenharia → CLP: "④ operação autorizada"
>
> Desenhe um tubo sombreado envolvendo somente a seta ①, rotulado "túnel VPN: protege só este trecho". O tubo começa no cliente e termina no gateway; não o estenda além.
>
> Abaixo da linha principal, uma seta vermelha tracejada sai do "Cliente remoto" em direção ao "CLP" e para na primeira linha de firewall, com um X vermelho grande e o rótulo "caminho direto: negado".
>
> Não acrescente cadeados, escudos, selos ou textos sobre MFA, senha, registro ou autorização além dos indicados. Não use marcas, logotipos, endereços IP, pessoas ou telas de produtos reais.

**Texto alternativo previsto:** acesso remoto em quatro trechos numerados: ① túnel do cliente remoto ao gateway VPN, ② acesso limitado do gateway ao intermediário na DMZ, ③ sessão autorizada do intermediário à estação de engenharia na rede OT e ④ operação autorizada da estação ao CLP. O túnel VPN protege apenas o trecho ①; o caminho direto do cliente ao CLP é negado no primeiro firewall.

**Conferência:** túnel apenas no trecho ①; nós nas áreas corretas, com o gateway na fronteira; quatro setas distintas e numeradas; seta vermelha parando no primeiro firewall; nenhum selo de controle que antecipe a resposta.

---

## A20

### Imagem 31 — Linha do tempo M-01: acesso e processo no mesmo relógio {#imagem-31}

**Local:** A20, depois da tabela da "Função preservada: uma segunda evidência" (une as duas tabelas da aula).

**Prompt:**

> Crie uma linha do tempo didática horizontal em português, com duas raias paralelas e um eixo de tempo comum de 09:59:30 a 10:00:12. Fundo claro, alto contraste, 16:9, texto grande.
>
> Faixa sombreada no fundo, a partir de 10:00:00, com o rótulo "Janela M-01 (10:00–10:15)".
>
> Raia superior "Acesso", marcadores nos horários exatos:
> - 09:59:30 círculo verde "VPN: autenticação aceita"
> - 09:59:35 círculo vermelho com X "Engenharia fora da janela: negado"
> - 10:00:02 círculo vermelho com X "Direto ao CLP: negado"
> - 10:00:04 círculo verde "Estação autorizada: aceito"
> - 10:00:06 círculo verde "Diagnóstico: aceito"
>
> Raia inferior "Processo (nível do tanque)": três pontos ligados por uma linha, em 10:00:00 "50%", 10:00:05 "51%" e 10:00:10 "52%", com uma faixa clara de fundo rotulada "faixa de operação 40–60%".
>
> À direita, depois de 10:00:10, uma área cinza com o rótulo "sem dados: conclusão não se estende". Na base, uma nota pequena: "correlação válida somente com relógios sincronizados".
>
> Use forma (círculo e X) além da cor para aceito e negado. Não acrescente eventos nem valores.

**Texto alternativo previsto:** linha do tempo de 09:59:30 a 10:00:12. Na raia de acesso: autenticação VPN aceita, acesso fora da janela negado, caminho direto negado, estação autorizada e diagnóstico aceitos. Na raia de processo: nível de 50%, 51% e 52%, dentro da faixa de 40–60%. Após 10:00:10 não há dados, e a correlação depende de relógios sincronizados.

**Conferência:** horários e posições proporcionais; a janela começa em 10:00:00; o evento de 09:59:35 fica fora da janela.

---

### Imagem 32 — Onde conter: cortar a sessão, não o processo {#imagem-32}

**Local:** A20, "Exemplo: escolher o primeiro limite".

**Prompt:**

> Crie uma comparação lado a lado em português, com dois painéis de mesmo layout. Fundo claro, alto contraste, 16:9, texto grande.
>
> Em ambos os painéis: "Sessão remota" → "Intermediário" → "Estação de engenharia" → "CLP" → "Bomba / tanque", e a IHM ligada ao CLP.
>
> Painel esquerdo, título "Contenção proporcional": uma tesoura ou interruptor aberto entre "Sessão remota" e "Intermediário", com o rótulo "sessão suspensa". O laço CLP → bomba → tanque permanece verde com o rótulo "controle local ativo". Uma etiqueta: "autorizado pela operação".
>
> Painel direito, título "Medida desproporcional": um corte entre "CLP" e "Bomba / tanque" e outro entre "CLP" e "IHM", com o laço em cinza e o rótulo "controle e supervisão perdidos". Uma etiqueta: "nova falha criada pela resposta".
>
> Sem fogo, sem pessoas, sem marcas. Use forma e texto, não só cor, para indicar ativo e interrompido.

**Texto alternativo previsto:** dois cenários de contenção. À esquerda, suspender a sessão remota no intermediário mantém o controle local do tanque. À direita, desconectar o CLP interrompe controle e supervisão e cria nova falha.

**Conferência:** o painel esquerdo não pode mostrar o CLP desligado; o painel direito não deve sugerir que é a recomendação.

---

### Imagem 33 — Quando a verificação vira incidente {#imagem-33}

**Local:** A20, "Apêndice C: quando a verificação virou incidente", antes dos cards.

**Prompt:**

> Crie uma ilustração didática em português, fundo claro, 16:9, texto grande. À esquerda, uma área "Rede corporativa" com um notebook rotulado "varredura / teste". Uma linha de pacotes (pequenos pontos) sai do notebook, atravessa uma fronteira mal fechada, desenhada como portão entreaberto e rotulada "fronteira sem controle", e entra na área "Rede OT".
>
> Na área OT, três consequências com ícones simples e rótulos curtos:
> - um braço robótico em movimento: "movimento inesperado"
> - uma tela de SCADA cinza com ampulheta: "supervisão travada"
> - uma bandeja de wafers riscada: "produção perdida"
>
> Na parte inferior, uma faixa com o texto: "Sem atacante: a prática de TI ignorou tempo, disponibilidade e efeito físico".
>
> Não desenhe hackers, caveiras, fogo ou pessoas feridas. Sem marcas.

**Texto alternativo previsto:** uma varredura iniciada na rede corporativa atravessa uma fronteira sem controle e chega à rede OT, causando movimento inesperado de braço robótico, supervisão travada e perda de produção, sem atacante envolvido.

**Conferência:** a origem é a rede corporativa; nenhuma figura de atacante.

---

### Imagem 34 — Escada de interferência da avaliação técnica {#imagem-34}

**Local:** A20, "Avaliação técnica: evidência proporcional à pergunta", antes da tabela.

**Prompt:**

> Crie um diagrama em escada ascendente, da esquerda para a direita, em português, com quatro degraus. Fundo claro, alto contraste, 16:9, texto grande.
>
> Degraus, com estes rótulos exatos:
> 1. "Revisão de documentos e configuração" (ícone de documento)
> 2. "Observação passiva" (ícone de lupa sobre tráfego)
> 3. "Varredura de vulnerabilidades" (ícone de radar)
> 4. "Teste de invasão" (ícone de chave inglesa sobre alvo)
>
> Uma seta paralela à escada, do verde ao âmbar, rotulada "interferência no processo". Do degrau 3 e do degrau 4 sai uma seta curva para uma caixa à parte, rotulada "réplica ou simulador, janela planejada, parada definida".
>
> Na base, a frase: "comece pelo degrau mais baixo que responda à pergunta". Sem marcas, pessoas ou telas reais.

**Texto alternativo previsto:** quatro abordagens em ordem crescente de interferência no processo: revisão de documentos e configuração, observação passiva, varredura de vulnerabilidades e teste de invasão. As duas últimas devem ser levadas a réplica ou simulador, com janela e critério de parada; comece pela menor que responda à pergunta.

**Conferência:** a ordem dos degraus não pode ser invertida; a observação passiva fica abaixo da varredura.

---

## Esquemas resolvidos sem imagem gerada

- A19, ciclo de risco (enquadrar → avaliar → responder → monitorar) e cadeia do registro OT: convertidos em Mermaid em 29 out. 2026.
- Mapa do guia, considerações OT × TI, programa, funções do CSF e regras de engajamento: cards e tabelas cumprem a função; figura não acrescentaria relação nova.
- Comparação OT × TI não recebeu figura: duplicaria os cards.

## Registro de incorporação

| Imagem | Estado | Data |
|---|---|---|
| 26 | Incorporada na A19 | 29 out. 2026 |
| 27 | Incorporada na A19 | 29 out. 2026 |
| 30 | Incorporada na A19 e na A20 | 29 out. 2026 |
| 28–29 | Primeira versão recusada; prompt corrigido entregue | 29 out. 2026 |
| 31–34 | Prompt entregue ao docente | 29 out. 2026 |
