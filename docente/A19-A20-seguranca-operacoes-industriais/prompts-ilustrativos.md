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

**Local:** A19, "Leitura guiada: uma tela parada", antes da tabela.

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

**Local:** A19, "Zonas, conduítes e níveis"; complementa a tabela de níveis.

**Prompt:**

> Crie um diagrama de arquitetura de rede industrial em português, baseado no modelo Purdue, em camadas horizontais empilhadas. Fundo claro, alto contraste, 16:9 ou vertical 4:5, texto grande.
>
> De cima para baixo, faixas horizontais com estes rótulos exatos e ícones simples:
> - "Níveis 4–5 — Rede corporativa" (computadores de escritório, servidor de e-mail)
> - "DMZ industrial" (servidor intermediário e réplica de historiador)
> - "Nível 3 — Operações do site" (historiador, estação de engenharia)
> - "Nível 2 — Supervisão" (IHM, servidor SCADA)
> - "Nível 1 — Controle básico" (CLP)
> - "Nível 0 — Processo" (sensor, bomba, tanque)
>
> Entre "Níveis 4–5" e "DMZ" e entre "DMZ" e "Nível 3", desenhe um firewall com o rótulo "conduíte". Agrupe os níveis 0–3 em um contorno com o rótulo "Zona OT" e os níveis 4–5 em outro com "Zona corporativa".
>
> Mostre com uma seta verde contínua o fluxo "dados do historiador → réplica na DMZ → corporativo", e com uma seta vermelha riscada com X o caminho "corporativo → CLP direto".
>
> Não use marcas, endereços IP ou nomes de produtos. Não desenhe nuvem nem IIoT nesta figura.

**Texto alternativo previsto:** modelo Purdue com processo (nível 0), controle (1), supervisão (2), operações (3), DMZ e rede corporativa (4–5). Firewalls funcionam como conduítes entre zonas; dados sobem do historiador para a DMZ, e o acesso direto do corporativo ao CLP é negado.

**Conferência:** a DMZ fica entre o nível 3 e o corporativo; a seta permitida não atravessa diretamente até o nível 1.

---

### Imagem 30 — Percurso remoto limitado e pontos de controle {#imagem-30}

**Local:** A19, "Exemplo de percurso remoto limitado"; substitui o esquema em texto. Reutilizada na A20, em "Proteger: acesso remoto".

**Prompt:**

> Crie um diagrama didático horizontal em português de acesso remoto de manutenção a um ambiente industrial. Fundo claro, alto contraste, 16:9, texto grande.
>
> Da esquerda para a direita, cinco nós ligados por setas distintas:
> "Cliente remoto" (notebook) → "Gateway VPN" → "Intermediário (jump host) — DMZ" → "Estação de engenharia — OT" → "CLP".
>
> Sobre cada seta, um pequeno selo com o controle aplicado naquele trecho:
> - cliente → gateway: "identidade + MFA"
> - gateway → intermediário: "restrição de destino"
> - intermediário → estação: "janela aprovada + registro de sessão"
> - estação → CLP: "autorização de alteração"
>
> Abaixo, uma seta vermelha tracejada saindo do "Cliente remoto" diretamente para o "CLP", com um X grande e o rótulo "caminho direto: negado".
>
> Use um túnel sombreado apenas entre o cliente e o gateway, rotulado "túnel VPN", para mostrar que a VPN protege só esse trecho. Não use marcas, IPs, pessoas ou telas reais.

**Texto alternativo previsto:** acesso remoto em cinco passos: cliente, gateway VPN, intermediário na DMZ, estação de engenharia e CLP. Cada trecho tem um controle próprio: identidade e MFA, restrição de destino, janela e registro de sessão, autorização de alteração. O túnel VPN cobre só o primeiro trecho; o caminho direto do cliente ao CLP é negado.

**Conferência:** o túnel não pode se estender até o CLP; os quatro selos ficam nos trechos corretos.

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
| 26–34 | Prompt entregue ao docente | 29 out. 2026 |
