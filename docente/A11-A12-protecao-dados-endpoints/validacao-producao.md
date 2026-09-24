# Validação da produção A11–A12 — 24 set. 2026

## Resultado

Páginas A11 e A12, atividade integrada, modelo, observação benigna com procedência e planos por aula produzidos localmente. Navegação, percurso, manifesto, roadmap e arquitetura alinhados. Nenhum envio ao Classroom, alteração no Drive ou publicação remota foi executado.

## Estrutura e conteúdo

- Seis sínteses temáticas por aula, cada uma com quatro ideias centrais, seguidas de explicações e exemplos completos.
- Oito prompts no formato solicitado `PROMPT ILUSTRATIVO FIGURA X = "..."`, quatro por aula, também reunidos em `docs/assets/a11-a12/prompts-ilustrativos.txt`.
- Âncoras de atividade únicas nas duas aulas e na página de entrega. Uma única atividade após A12, com insumos, formato, rubrica, extensão e regra de uso de IA.
- L1/L2: execução benigna coletada; PIDs normalizados e associação de fonte explicitada. E1–E4 e R1–R5: exemplos didáticos, sem alegação de incidente real.
- Demonstrações opcionais de editor/planilha não foram executadas nesta produção; as tabelas e as instruções são alternativas de análise. Não há implantação real de DLP ou EDR.
- RPO/RTO: exemplo trabalhado com 2 h/1 h 30 e atividade com 30 min/45 min; objetivos e resultados distinguíveis.

## Verificação executada

- `./.venv/bin/python -m mkdocs build --clean --strict --site-dir /tmp/seguranca-a11-a12-site`: aprovado.
- `python3 scripts/validate_course_packages.py`: aprovado.
- HTML: links locais, fragmentos, unicidade de IDs e atividade, listas renderizadas e oito prompts conferidos. Resultado em `a11-a12-validacao-html.json`.
- Navegador Chrome com Puppeteer: A11, A12 e atividade em 1440×1000 e 390×844. Largura de documento igual à viewport em todos os casos; tabelas permanecem dentro da página. Resultado em `a11-a12-browser.json`.
- Capturas de sínteses de A11/A12, prompt de A11 e tela estreita inspecionadas visualmente; sem corte de conteúdo. Capturas temporárias em `/tmp/A11-1440-review.png`, `/tmp/A12-1440-review.png`, `/tmp/A11-390-review.png` e `/tmp/A12-390-review.png`.
- As fontes CERT.br de ransomware foram corrigidas para o domínio `www.cert.br`; a referência de códigos maliciosos usa o PDF oficial acessível. Fontes Microsoft/NIST consultadas. CISA foi verificada por resultado oficial indexado; abertura integral indisponível nesta sessão.

## Pendências editoriais

O docente gerará as imagens no Gemini e as enviará para composição. A revisão das figuras deverá conferir fidelidade conceitual, rótulos, contraste e texto alternativo. Não há links de imagens ausentes: texto, tabelas e exemplos sustentam a leitura atual. Estado remoto permanece não verificado; o nome do manifesto não comprova publicação.

## Incorporação das Figuras 1–2 — 24 set. 2026

Imagens fornecidas pelo docente incorporadas sem edição, com ressalvas de rótulos secundários registradas em `figuras/figura-1-revisao.md` e `figuras/figura-2-revisao.md`. Prompts correspondentes arquivados e removidos dos pontos públicos; permanecem seis prompts (3–8). Build estrito aprovado. Chrome: ambas as imagens carregadas e links de ampliação corretos em 1440 e 390 px, sem transbordamento horizontal. Dimensões renderizadas 992 e 342 px; originais com largura de 1024 px. Inspeção visual da Figura 2 em tela larga e Figura 1 em tela estreita concluída. Publicação remota não executada.

## Figura 3 e nova versão da Figura 2 — 24 set. 2026

Figura 3 incorporada no lugar de seu prompt, com ressalva de posição da seta de exceção esclarecida na legenda. Figura 2 substituída pelo original reenviado de 2752×1536; versão anterior arquivada na área docente. Permanecem ressalvas textuais registradas na revisão da Figura 2. Build estrito aprovado. Ambas carregadas em Chrome a 1440/390 px, com largura de página preservada e ampliação apontando para os originais. Figura 3 inspecionada visualmente na página. Prompts 4–8 permanecem pendentes. Sem publicação remota.

## Figura 4 incorporada — 24 set. 2026

Figura de RPO/RTO validada contra o prompt e o exemplo da página, preservada sem edição. Build estrito aprovado; Chrome em 1440 e 390 px confirmou carregamento, descrição alternativa, link ao original e ausência de transbordamento horizontal. Larguras renderizadas: 992 e 342 px. As quatro figuras da A11 estão incorporadas; prompts 5–8 da A12 permanecem pendentes. Publicação remota não executada.

## A11 ampliada: implementação, LGPD e progressão — 24 set. 2026

Página ampliada por solicitação docente, sem comprimir o conteúdo em 100 minutos. Os minutos anteriores ficam como referência histórica até nova análise. Acrescentados registro de tratamento, exportação mínima com insumos, permissões e revogação documentadas, LGPD aplicada, configuração DLP, retenção e recuperação. Atividade e modelo alinhados à proposta de configuração e testes, preservando uma única entrega.

A observação isolada de ocultar coluna foi substituída por comparação do arquivo entregue. DLP foi reordenado: arquivo e envio, reconhecimento, destino, ação, cobertura/exceção, regra e contraprovas, mecanismos e implementação. Figura 3 aparece após a compreensão dos elementos. A análise por skill está em `revisao-carga-cognitiva-A11.md`; auditoria independente não encontrou problema material.

Validações executadas:
- Build MkDocs estrito aprovado; verificador editorial do curso aprovado.
- CSV: quatro registros de origem, três linhas agregadas, soma quatro; campos desnecessários ausentes.
- Ensaio de arquivos por Python em pasta temporária: cópia e restaurado idênticos à versão 1; trabalho preservado em versão 2. Registro em `a11-validacao-arquivos.json`. Isso não testa editor gráfico, backup independente ou serviço de nuvem.
- Chrome em 1440/390 px: A11 e atividade carregadas, links de insumos disponíveis, âncoras sem erro, figuras com texto alternativo, sem transbordamento horizontal. Registro em `a11-ampliada-browser.json`; telas DLP e LGPD inspecionadas.
- Google Drive e Purview: procedimentos confrontados com documentação oficial; não executados em contas reais. Não há bloqueio DLP ou revogação em serviço alegados como observados.
- LGPD: texto compilado do Planalto e orientações ANPD consultados; funções, princípios, hipóteses e direitos diferenciados. Não estabelece base legal ou prazo de retenção para uma organização real.

Figuras 1–4 preservadas. Novos prompts 9–11: revogação, modo DLP e recuperação. Publicação remota não executada.

## Figura 5 da A12 — 24 set. 2026

Conforme ao prompt, com UID ilustrativo e limite de negação esclarecidos na legenda. Bytes do original preservados. Browser 1440/390 px: larguras 992/342 px, alt e link presentes, HTTP 200, sem transbordamento; capturas inspecionadas por agente de validação. Registro em `a12-figura5-browser.json`.

Figura 6: solicitação recebida, arquivo não encontrado em /tmp ou repositório; prompt preservado e caminho solicitado. Não foi incorporada imagem diferente em seu lugar.

## Figura 6 localizada e revisada

O bloqueio anterior de localização foi resolvido com /tmp/figura6.jpeg. Imagem inspecionada por agente e conferida pelo agente principal. Não incorporada: Execução e Efeito fundidos e definição de Efeito truncada; regeneração necessária. Prompt mantido. Apenas registros docentes alterados; build dispensado nesta revisão.

## Revisões técnicas e pedagógicas sequenciais — 24 set. 2026

Por solicitação docente, revisão de proteção de dados seguida por revisão pedagógica utilizando o primeiro relatório. Ambos registrados nesta pasta; correções aplicadas à página e à atividade. Mascaramento dinâmico/estático, correspondência de pseudônimo, comunicação de incidentes e preparação do anexo DLP corrigidos. Piloto inicial explicitamente limitado a D1–D3, com D4 pendente de mecanismo; contraprovas de rótulo e destinatários mistos acrescentadas.

Reordenação por pré-requisitos: exportação antes da taxonomia de formatos; ocultação/transformações junto da exportação; Figura 2 junto de camadas; RPO/RTO antes de parâmetros de backup. Registro passa a preenchimento progressivo, responsabilidades aparecem na síntese, Parte A da atividade organizada em três aspectos do mesmo produto.

DOCX artificial verificado estruturalmente e por reconversão LibreOffice; não tem rótulo aplicado nem teste em tenant. Especialista pedagógico não recomendou nova figura: tabelas e prompts existentes atendem às relações acrescentadas. Nenhum número novo de figura reservado.

## Pesquisa DLP e procedimentos LGPD — 24 set. 2026

Relatórios `pesquisa-mercado-dlp.md` e `procedimentos-lgpd-fontes.md` incorporados à A11. Referências Microsoft/AWS/Fortinet resumidas criticamente; seis exemplos comerciais por cobertura, Macie/Google Sensitive Data Protection como descoberta/transformação, exemplo CAD/PDF e limite de extrapolação para OT. Pesquisa não encontrou evidência comparável para declarar produto mais implantado. Tabela LGPD com condições, responsabilidades, evidências e links específicos; registro de operações, log e registro de incidente diferenciados.

Adendo de revisão técnica aprovado, com precisão aplicada ao início da contagem dos cinco anos de conservação do registro de incidente. Sem teste de produto em tenant ou ambiente industrial. O verificador editorial distingue o DOCX artificial de teste DLP (exceção nominal documentada) de fontes Office editoriais, que continuam vedadas em docs/. Inspeção do anexo em `a11-docx-validacao.json`.

Adendo pedagógico aplicado: procedimentos em dois quadros de seis linhas, exemplo CSV antes da consulta, significado de RIPD e objeto S3 explícitos, prazos contextualizados, comparação de leituras após a explicação operacional, contraprovas de acesso anterior e entrega CAD/PDF. Novo prompt Figura 12 representa pontos independentes de controle; imagem não recebida. Prompts atuais pendentes: 6–8 na A12 e 9–12 na A11.

Verificação final da edição: build MkDocs estrito e verificador editorial aprovados. Chrome em 1440/390 px: A11 e atividade disponíveis, figuras com alt/carregamento, downloads locais acessíveis, sem IDs duplicados, âncoras internas ausentes ou transbordamento da página. As seis regiões de tabelas novas rolam por teclado em 390 px; inspeção visual confirmou títulos visíveis e colunas legíveis. Registro `a11-referencias-browser.json`. Não houve publicação remota, alteração no Drive ou envio ao Classroom.

## Simplificação de CSV e leitura dinâmica — 24 set. 2026

Revisão nova e independente em `revisao-independente-relevancia-A11.md`, sem usar pareceres anteriores como critério de aprovação. Crítica confirmada quanto à repetição e ao tutorial de baixo ganho. Após autorização docente, três subseções (~1.004 palavras, sem URLs/HTML) foram condensadas em comparação (~196 palavras pelo mesmo critério), preservando Figura 1, arquivos e IDs estáveis. Texto de responsabilidades enxugado e extensão das transformações preservada. Não se exige editar CSV para realizar a atividade.

Destaques de decisões/limites e passos de atendimento acrescentados onde favorecem leitura dinâmica, sem repetir listas e prosa. Conferência independente aprovou a condensação e não encontrou contradição ou dependência quebrada. Build estrito e verificação editorial aprovados; a inspeção visual final será registrada junto do exemplo de videomonitoramento solicitado em seguida.

## Videomonitoramento industrial — 24 set. 2026

Exemplo solicitado para alunos de prestadoras de automação incorporado à tabela de responsáveis LGPD, substituindo cadastro genérico. Indústria controla decisões essenciais, prestadora trata imagens sob instruções, técnico atua pela empresa, pessoas filmadas são titulares e encarregado orienta/comunica; ANPD permanece autoridade externa. Instalação puramente física e uso para finalidade própria são variantes condicionais. Fontes e proposta em `exemplo-videomonitoramento-lgpd.md`. Especialista conferiu a integração final e não encontrou erro material. Prompt Figura 13 inclui personagens em blocos organizacionais; imagem ainda não recebida.

Verificação visual final: A11 e atividade em Chrome 1440/390 px, figuras e downloads disponíveis, IDs preservados, sem transbordamento da página; sete regiões de consulta acessíveis por teclado. Inspecionados exemplo condensado e papéis de videomonitoramento. Corrigida quebra de palavra no rótulo Encarregado; build estrito final aprovado. Registro `a11-simplificacao-video-browser.json`. Sem publicação remota.

## Figura 9 e revisão do prompt 13

Figura 9 incorporada com original preservado, legenda sobre leitor anteriormente autorizado, alt e ampliação. Build estrito, verificador editorial e Chrome 1440/390 aprovados; imagens, links e âncoras disponíveis, sem transbordamento. Registro `a11-figura9-browser.json`. Figura 13 recebida com seta central invertida, não incorporada; prompt reescrito a pedido do docente. Pendentes 6–8 na A12 e 10–13 na A11. Sem publicação remota.

## Figura 13 — versão corrigida incorporada

Nova imagem `/tmp/figure13.jpeg` validada visualmente: instruções indústria → prestadora, papéis organizacionais corretos. Imagem original preservada, prompt substituído e arquivado; legenda distingue comunicação de ordens e complementa interlocuções não representadas. Build estrito, verificador editorial e Chrome 1440/390 px aprovados; figura/alt/ampliação, downloads e âncoras disponíveis, sem transbordamento. Registro `a11-figura13-browser.json`. Pendentes 6–8 na A12 e 10–12 na A11. Alterações locais, sem publicação remota.

## Figuras 10–12 incorporadas e verificadas

Originais preservados, prompts arquivados, alt/legendas/ampliação presentes. Figura 10: relação técnica correta, mas palavra “RODAPÉ:” foi indevidamente impressa; detalhe apontado pelo docente após a primeira validação, novo prompt preparado para substituição. Figura 11: origem/backup/teste e verificações corretos. Figura 12: caminhos independentes e descoberta sem prova de bloqueio, esclarecidos na legenda. Build estrito, verificador editorial e Chrome 1440/390 aprovados; imagens, insumos e âncoras carregam, sem transbordamento. Registro `a11-figuras10-12-completas-browser.json`. Sem publicação remota.

## Revisão de leitura, Purview e HTML independente — 24 set. 2026

- Definições de sincronização, versionamento, snapshot e backup itemizadas; RPO/RTO introduzidos por tolerâncias, seguidos de comparação e cálculo comentado. Valores da Figura 4 preservados.
- Relato editorial da pesquisa de adoção retirado da página do aluno; critérios de escolha preservados. Purview com guia público e três capturas oficiais; implantação licenciada em consulta opcional. Procedência em `purview-demo-fontes.md`.
- Atividade independente em `docs/atividades/A11-A12-parecer.html`, fora do menu; links de A11, A12 e percurso alinhados. Markdown preservado e HTML gerado por `scripts/build_a11_a12_activity_html.py`; `--check` confirma sincronismo.
- Build estrito e validador editorial aprovados. Chrome em 1440/390 px confirmou imagens, ausência de transbordamento, IDs/âncoras e downloads da A11; HTML independente com tabelas focáveis, impressão e requisitos preservados. Relatório `a11-atividade-html-rpo-purview-browser.json`.
- Alterações locais; nenhuma publicação remota.
