# Proteção e validação de uma operação industrial

Uma recomendação de segurança precisa indicar a função que protege, a consequência que procura reduzir e como sua eficácia seria avaliada. Produza um registro curto que relacione essas decisões, sem confundir evidência fornecida com teste executado.

## Atividade {#atividade}

**Missão:** elaborar, em dupla, um registro de proteção e validação OT com base nos exemplos de [A19](../aulas/A19-seguranca-operacoes-industriais.md) e [A20](../aulas/A20-validacao-ot-pentest.md). O trabalho é cumulativo: comece na A19 e conclua após a A20. Há **uma única entrega**, conforme convocação e prazo definidos pelo professor no Classroom.

**Escopo:** análise do tanque didático, da autorização M-01 e dos registros fornecidos. Não realize varreduras, consultas a equipamentos, tentativas contra sistemas públicos ou testes em redes industriais. O plano de avaliação solicitado é uma proposta, sem execução.

### Preparação e insumos

- Leia as duas páginas e acompanhe os exemplos trabalhados antes de finalizar a análise.
- Abra o [pacote completo de evidências didáticas](../assets/a19-a20/pacote-evidencias-ot.md). As tabelas essenciais também estão nas aulas.
- Use o [modelo em branco](../assets/a19-a20/modelo-registro-ot.md) ou crie um documento com os mesmos campos. Não é necessário instalar ferramenta.
- Identifique na entrega os dados artificiais fornecidos, as interpretações da dupla, as hipóteses e os testes somente propostos.

Os exemplos não representam uma planta real nem um ensaio de CLP. A comparação com um incidente documentado serve à análise de limites e controles; não transforma os dados do exercício em evidências desse incidente.

### Etapa 1 — Explicar a operação e a perda de visibilidade

1. Descreva o fluxo medir → decidir → atuar → supervisionar.
2. Registre três ativos com função, dependência, alteração sensível, responsável e evidência necessária.
3. Calcule a idade da última amostra da A19 e explique o que ela permite afirmar.
4. Formule duas hipóteses para a falta de atualização e indique uma coleta que ajude a diferenciá-las.

**Evidência:** uma tabela de inventário e uma análise de quatro a oito linhas, citando os horários usados. Se um responsável ou uma dependência não foi informado, registre a lacuna.

### Etapa 2 — Escolher proteção e verificar seus limites

Escolha **uma** condição para desenvolver: alteração não autorizada de parâmetro ou perda de atualização da supervisão.

Preencha: função, condição, evento considerado, consequência possível, controle, responsável proposto, caso permitido, caso negado, função preservada, evidência disponível e lacuna. Explique a ligação entre falha digital e consequência física, sem declarar que essa consequência ocorreu.

Compare M-01 com os eventos da A20. Identifique um caso permitido e dois negados; depois associe as amostras de processo à análise da função preservada. Declare o intervalo efetivamente coberto pelos registros fornecidos.

**Evidência:** uma decisão de proteção e uma conclusão limitada sobre acesso e funcionamento. Não atribua probabilidade, classe de risco ou eficácia integral sem dados que sustentem a afirmação.

### Etapa 3 — Condicionar contenção e retorno

Para a tentativa de alteração não aprovada descrita na A20:

- proponha uma primeira contenção e a condição operacional necessária para aplicá-la;
- indique quem deve autorizar e acompanhar a ação;
- defina três critérios de retorno, incluindo lógica/parâmetros, acesso e função operacional;
- explique por que a existência de uma cópia não comprova recuperabilidade.

**Evidência:** ação, premissa, responsável e verificação. Identifique que não houve restauração nem ensaio de função de segurança no exercício.

### Etapa 4 — Planejar a avaliação técnica do controle

Retome o controle proposto na Etapa 2 e o critério verificável que você escreveu na A19.

1. Escolha a abordagem de **menor interferência** que responda à pergunta: revisão de configuração, observação passiva, varredura ou teste ativo. Justifique a escolha e diga o que ela não demonstra.
2. Preencha as regras de engajamento: objetivo, alvo (planta, réplica ou simulador), ação permitida, exclusões, acompanhamento, critério de parada, recuperação e comunicação.
3. Descreva um caso que deve ser negado e um caso legítimo que deve continuar funcionando, com a evidência a coletar em cada um.
4. Relacione o plano à discussão OT do controle CA-8 (apêndice F) e a pelo menos um incidente do apêndice C.
5. Explique por que um teste bem-sucedido apenas na interface web de uma IHM não validaria o controlador nem a função de segurança do processo.

**Evidência:** plano marcado como **"proposto, não executado"**. Não inclua endereços, credenciais nem capturas de sistemas reais.

### Formato, envio e revisão

Entregue um único PDF de **três a cinco páginas**, nomeado `OT-validacao-Nome1-Nome2.pdf`. O documento deve conter identificação da dupla, as quatro etapas, fontes utilizadas e limites da conclusão. Não é necessário entregar código, vídeo ou apresentação.

O Classroom recebe este endereço com a âncora `#atividade`, o arquivo e o prazo definido pelo professor. Enquanto não houver convocação, preserve o registro para revisão.

Antes do envio, cada integrante revisa uma decisão escrita pelo outro e registra uma frase sobre o ajuste realizado. A dupla deve conseguir explicar as relações entre evidência, hipótese, controle e limite.

Se usar IA como apoio, registre o pedido, as decisões aceitas e rejeitadas e sua justificativa. Não envie dados sensíveis. A dupla continua responsável por compreender e verificar o resultado.

### Rubrica — 10 pontos

<div class="didactic-scroll ot-table" role="region" tabindex="0" aria-label="Rubrica — 10 pontos — tabela" markdown="1">

| Critério | Pontos | Evidência de atendimento |
|---|---:|---|
| Processo e atualidade da informação | 2 | Funções corretas, unidade/horários e limite da amostra antiga |
| Risco e proteção | 2 | Consequência condicionada, controle pertinente e responsabilidade |
| Avaliação de acesso e função | 2 | Casos permitido/negados, amostras e intervalo/limites explícitos |
| Contenção e recuperação | 2 | Premissa operacional, coordenação e critérios verificáveis de retorno |
| Plano de avaliação e qualidade da evidência | 2 | Abordagem proporcional justificada, regras de engajamento com parada e recuperação, caso negado/legítimo e distinção entre proposta e execução |

</div>

Em cada critério, uma resposta parcialmente fundamentada recebe pontuação parcial. Listar nomes de controles sem relacioná-los ao dado ou ao processo não atende integralmente ao critério.

### Alternativa e encerramento

Todo o percurso pode ser feito no navegador e em um editor de texto. Se um download falhar, use as tabelas nas aulas e os campos descritos no enunciado. Não há instalação ou descoberta operacional para realizar fora da aula.

Ao terminar, salve o registro, confira que os exemplos estão identificados e feche os arquivos. Não há recursos de nuvem ou serviços para remover.

**Extensão opcional, sem nova entrega:** acrescente uma evidência que faltaria para avaliar a recuperação do programa do CLP. Defina quem a produziria e em que ambiente (planta, réplica ou simulador) ela seria obtida. Não execute o teste.
