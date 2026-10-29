# Planejamento integrado — segurança das operações industriais e ponte para pentest

**Direção:** solicitação docente de 29 out. 2026: visão geral de segurança industrial pelo NIST, em até dois encontros, com ponte para validação por pentest e apresentação de referenciais, possivelmente com foco OWASP.

**Estado:** produção local de duas páginas integrais e atividade única. Não comprova publicação remota, realização, entrega estudantil, laboratório industrial ou teste web. Identificadores A19/A20 mantidos provisoriamente, sem conciliação do calendário. A preferência de formato foi perguntada durante a produção; sem resposta recebida, adotou-se exposição com análise de evidências como opção de menor preparação para o limite de dois encontros.

## Diagnóstico curricular antes da escolha dos exemplos

A arquitetura e o roadmap vigentes reservavam quatro encontros prospectivos a OT: processo/risco, fundamentos, defesa/acesso e observação/resposta. Condensar por decisões, mantendo os seis eixos essenciais: função física, risco, proteção em camadas, acesso, detecção/resposta e recuperação. A ponte pentest deve nascer do critério de validação, evitando uma terceira aula disfarçada de instalação ou oficina.

Não foi informado novo estado de realização de A13–A17. O material publicado de criptografia/VPN oferece conceitos de canal, identidade e alcance; não autoriza presumir execução, instalação ou produto da turma. Por isso, as páginas reintroduzem as definições mínimas e não exigem recuperar uma VPC, certificado, matriz ou diagrama anterior. Não há reconciliação histórica de aulas ministradas nesta produção; não se atribui nova herança aos slides antigos, nem é necessário usar seu conteúdo para sustentar o recorte.

As fontes antigas A28/A29 descrevem um caso industrial e dependências não confirmadas. Foram consultadas como diagnóstico de material existente; não se incorporou sua alegação de fluxo herdado da A04. Permanecem intactas e fora da navegação ativa. A nova base é um exemplo técnico mínimo, explicitamente artificial e sem empresa/personagens.

## Fichas-base

| Campo | A19 | A20 |
|---|---|---|
| Título | Segurança das operações industriais: o que precisa continuar funcionando? | Validar controles OT e preparar um pentest autorizado |
| Ementa | Função de controle, componentes, restrições, risco, inventário, arquitetura e camadas | Acesso, monitoração, resposta, recuperabilidade, avaliação e referenciais de pentest |
| Ganho novo | Relacionar informação/ação à consequência física e justificar proteção compatível | Passar de recomendação a critério, evidência e plano de teste delimitado |
| Objetivos | Reconstruir a malha; explicar consequências condicionadas; justificar controle e evidência | Avaliar acesso/função; condicionar contenção/retorno; diferenciar métodos e formular caso web |
| Tempo | 100 min: 65 T/35 P | 100 min: 55 T/45 P |
| Pergunta | A tela parada representa processo estável ou perda de visibilidade? | O bloqueio demonstra proteção e preservação da função? |
| Pré-requisitos | Noções de CIA e acesso; definições retomadas na página | Funções de CLP/IHM e registro da A19, também recuperáveis pelo texto |
| Infraestrutura | MkDocs, navegador, editor; planilha opcional | Mesma infraestrutura; sem VPN, simulador ou Juice Shop obrigatório |
| Evidência | Inventário, análise de amostra e decisão de proteção | Casos permitido/negados, função, contenção/retorno e caso web proposto |
| Critério | Função/consequência/controle conectados e limite explícito | Evidência compatível com conclusão e distinção entre fornecido/proposto/executado |
| Avaliação | Início da única atividade OT | Conclusão da mesma atividade, sem entrega nova de pentest |

**Fontes principais:** SP 800-82 Rev. 3 (seções 2–5, controles da seção 6 e apêndice E), CSF 2.0 (mapa complementar), SP 800-115 (seções 5–8/apêndice B), WSTG 4.2 e ASVS 5.0.0. Fontes primárias e versões conferidas em 29 out. 2026. A Rev. 4 da SP 800-82 está em rascunho; Top 10 vigente consultado é 2025. Não atribuir Govern à organização CSF 1.1 da Rev. 3.

## Cadeias de aprendizagem

**A19:** herança concreta = material disponível de proteção e confiança, sem prática presumida → preparação = esquema funcional e definições → ação = comparar aquisição/observação e funções → rastro = dados fornecidos com unidade/horário → leitura = perda de atualização, sem afirmar parada física → conceito = integridade/disponibilidade, consequência e camadas → decisão = escolher proteção compatível → validação = definir permitido/negado e função → produto = registro OT → ponte = reabrir esses campos na A20.

**A20:** herança concreta = registro ou exemplo completo da A19 → preparação = autorização M-01 e tabelas completas → ação = comparar eventos, janela e amostras → rastro = casos fornecidos e lacunas → leitura = conclusão limitada ao intervalo e às operações → conceito = acesso, detecção, resposta, recuperação e avaliação → decisão = contenção condicionada e método apropriado → validação = critério, contraprova e limite → produto = registro concluído e plano web não executado → ponte = A23 reabre autorização/alvo/evidência antes de requisições reais.

## A19 — condução de 100 minutos

| Intervalo | Núcleo e ação | T | P |
|---|---|---:|---:|
| 0–10 | Tela parada: previsão; comparar os dois horários e registrar uma conclusão limitada | 5 | 5 |
| 10–30 | Malha de controle, componentes e diferença entre mostrar/decidir/atuar; completar três ativos | 15 | 5 |
| 30–45 | Propriedades, restrições e estado seguro; justificar por que reinício exige análise | 10 | 5 |
| 45–55 | Base NIST e mapa CSF 2.0, com distinção entre guia OT, gestão e avaliação | 10 | 0 |
| 55–70 | Inventário/risco e exemplo de parâmetro; propor evidência discriminante | 10 | 5 |
| 70–90 | Arquitetura, VPN/DMZ e camadas; marcar um fluxo permitido/negado e seu limite | 10 | 10 |
| 90–100 | Transformar controle em critério; salvar registro, revisão rápida e ponte | 5 | 5 |
| **Total** | | **65** | **35** |

P é análise guiada com produção de registro, previsão, comparação e decisão; não representa configuração ou teste operacional. Não contabilizar a explicação conceitual ou a leitura de respostas pelo professor como prática. Se o tempo de participação não ocorrer, registrar o desvio da alocação.

**Esperas:** antes de nomear a falha, todos distinguem aquisição e observação; antes de escolher controle, todos identificam sensor/controlador/atuador; antes do fechamento, cada registro contém um caso legítimo e uma lacuna.

**Respostas esperadas:** a amostra final tem dez segundos; a tela perdeu atualização, mas o CLP pode continuar em automático. Sensoriamento, comunicação e apresentação são hipóteses diferentes. Estado seguro depende da função; desligar tudo não é regra. VPN não autoriza alteração; VLAN não comprova filtro; um controle não prova independência das proteções físicas.

## A20 — condução de 100 minutos

| Intervalo | Núcleo e ação | T | P |
|---|---|---:|---:|
| 0–15 | Autenticação/autorização; comparar M-01 com eventos e separar uma permissão de dois bloqueios | 8 | 7 |
| 15–30 | Monitoramento e função; correlacionar amostras e registrar limite de dez segundos | 7 | 8 |
| 30–50 | Resposta/recuperação; decidir contenção sob premissa e formular critérios de retorno | 12 | 8 |
| 50–65 | Avaliação proporcional e regras de engajamento; distinguir revisão, observação, scanner e pentest | 10 | 5 |
| 65–80 | Comparar NIST/PTES/OSSTMM/WSTG; separar WSTG, ASVS e Top 10 | 12 | 3 |
| 80–95 | Exemplo WSTG e extensão: formular par de leitura, contraprova e limite | 4 | 11 |
| 95–100 | Revisão cruzada da entrega única; indicar autorização pendente para execução futura | 2 | 3 |
| **Total** | | **55** | **45** |

**Esperas:** conferir a regra M-01 antes dos eventos; obter a conclusão da dupla antes de apresentar seu limite; não avançar a metodologia sem distinguir resultado fornecido e teste; exigir “proposto, não executado” na extensão.

**Respostas esperadas:** autenticação VPN pode ocorrer antes da janela para acesso à engenharia; isso não viola a regra específica M-01. Bloqueios: 09:59:35 e 10:00:02. Casos permitidos: acesso de 10:00:04 e diagnóstico de 10:00:06. Amostras 10:00:00–10:00:10 são compatíveis com operação em faixa, sem comprovar integridade do sensor ou ensaio de proteção. Não inferir que o firewall controla a função interna da aplicação.

Na contenção, a suspensão do caminho remoto depende da premissa expressa de autonomia local e autorização operacional. Retorno requer estado conhecido, permissões revisadas, qualidade/atualidade e função verificadas, além das proteções pertinentes. Não declarar cópia restaurada.

No caso web, extensão possível: B lendo 18 (permitido) e B lendo 17 (negado). Esperar sessão, conteúdo, resultado e parada, sem revelar esse par antes da decisão da dupla. O caso trabalhado demonstra a lógica de um reteste ilustrativo; não representa uma correção implantada.

## Seleção e limites metodológicos

O foco OWASP é **recomendação para a continuação**, pois a solicitação expressa “talvez”. Produziu-se a apresentação solicitada sem reescrever todo o bloco A23–A31 ou presumir decisão sobre seus laboratórios. WSTG 4.2 fornece o procedimento de referência direta a objeto; o ASVS oferece requisitos e o Top 10 categorias de risco. Não atribuir cobertura completa a qualquer seleção.

PTES e OSSTMM entram como comparação breve de função. O site oficial PTES não pôde ser recuperado na consulta; não se declaram versão vigente nem fases detalhadas verificadas. A página primária da TrustedSec confirma a organização de ferramentas segundo PTES. O Read the Docs encontrado declara ser fork não oficial e não foi usado como autoridade. A apresentação oficial do ISECOM foi acessada; o PDF OSSTMM 3 não pôde ser recuperado. Não se declara edição mais recente, aplicação de métricas ou conformidade com OSSTMM.

ISA/IEC 62443 é complemento, sem reprodução do texto pago nem promessa de conformidade. O alerta CISA AA23-335A usado é o PDF atualizado em dezembro de 2024; o portal HTML retornou 403, mas o PDF primário foi recuperado. Não atribuir os números didáticos ao incidente.

## Preparação, contingência e limites

Abrir ambas as páginas e a atividade no navegador; verificar acesso ao modelo e ao pacote. A infraestrutura mínima já é suficiente para toda decisão exigida. Todos os registros essenciais estão nas páginas, sem download ou aplicativo indispensável. Orientar por projeção; reprodução individual é opcional. Não criar contas, serviços AWS, redes ou endpoints industriais.

Se houver proposta posterior de usar OpenPLC/FUXA, Wireshark ou aplicação real, preparar e ensaiar o ambiente antes, com versão/procedência, estado inicial, ação, saída, parada e limpeza. Essa inclusão substituirá tempo e exigirá alinhamento da atividade. O material atual não deve ser anunciado como laboratório implementado.

**Limites:** overview não ensina projeto completo de automação, segurança funcional, conformidade 62443, restauração industrial nem pentest de protocolos. A leitura de HTTP não valida processo. Duração é previsão de planejamento, não medição em turma. A carga global permanece pendente de calendário e T/P realizados.

## Artefatos e distribuição

- [Página A19](../../docs/aulas/A19-seguranca-operacoes-industriais.md) e [plano A19](../A19-seguranca-operacoes-industriais/plano-de-aula.md).
- [Página A20](../../docs/aulas/A20-validacao-ot-pentest.md) e [plano A20](../A20-validacao-ot-pentest/plano-de-aula.md).
- [Atividade única](../../docs/atividades/A19-A20-protecao-validacao-ot.md#atividade), [pacote](../../docs/assets/a19-a20/pacote-evidencias-ot.md) e [modelo](../../docs/assets/a19-a20/modelo-registro-ot.md).

Endereço a distribuir após eventual publicação: `atividades/A19-A20-protecao-validacao-ot/#atividade`. Não houve envio ao Classroom. Navegação/percurso incluem somente os dois novos encontros. Arquitetura/roadmap mantêm explicação dos identificadores e encontros liberados. O manifesto registra material local, sem alterar o comprovante da publicação anterior.

Ver a [validação local](validacao-local.md) para checks efetivamente executados e seus limites.
