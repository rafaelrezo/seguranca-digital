# Registro de publicação no Google Drive

Este registro liga os artefatos versionados no repositório à pasta oficial de distribuição. Ele não substitui as fontes locais nem o histórico Git.

## A08/A09 — publicação integral no Pages autorizada

Após aprovação do confronto histórico, foram preparadas A08 (SGSI) e A09 (decisão de risco), com atividade P1 compartilhada, modelo editável e planos fora de docs/. Novas páginas: `aulas/A08-governanca-sgsi.md` e `aulas/A09-decisao-de-riscos.md`. A publicação está autorizada nesta solicitação; nenhum arquivo do Drive será alterado e nenhuma atividade será enviada ao Classroom. O manifesto do percurso distingue aulas históricas de páginas preparadas. A última aula ministrada confirmada é A07.

## Estado vigente — 8 de setembro de 2026

MkDocs é o material principal para teoria, prática e entrega vinculada ao Classroom. A sincronização normal consiste em revisar a página, validar navegação e `#atividade`, executar o build estrito e conferir a publicação no Pages. Não regenerar apresentações ou PDFs como requisito de uma mudança no site.

Consulta atual: 62 arquivos, sem exclusões ou substituições. A06 tem 37 slides; A07 tem 35 e trata de ATT&CK Enterprise/ICS, com novos IDs incorporados aos links abaixo. A01–A05 são históricos confirmados; realização de A06/A07 a confirmar. A08–A30 permanecem propostas preservadas, fora da sequência pública ativa.

Ver [diagnóstico e matriz de todos os materiais](reconciliacao-mkdocs-2026-09-08/diagnostico.md), [inventário consultado](reconciliacao-mkdocs-2026-09-08/inventario-drive.json) e [condução/links Classroom](reconciliacao-mkdocs-2026-09-08/conducao.md).

## Memória de publicações anteriores

Os registros abaixo documentam operações passadas. Quantidades, títulos e estados antigos não prevalecem sobre o inventário de 8 de setembro.

## Pasta oficial

- [curso-seguranca-digital](https://drive.google.com/drive/folders/1FDegmvF7LGJ-FTDowgvqoSxncldsZWmB)
- Pasta ID: `1FDegmvF7LGJ-FTDowgvqoSxncldsZWmB`
- Última publicação integral: 18 de agosto de 2026
- Última publicação de pacote: A06–A07, em 1º de setembro de 2026
- Estado curricular dos materiais futuros: superados pela reconciliação de 1º de setembro de 2026; preservar até que cada substituto A06–A25 seja importado, verificado e referenciado

## Inventário publicado

| Faixa | Apresentações | Roteiros práticos | Formato no Drive | Estado |
|---|---:|---:|---|---|
| A01–A04 | 4 | 4 | Google Slides e Google Docs | materiais já ministrados preservados; não substituídos nesta publicação |
| A05 | 1 | 1 | Google Slides e Google Docs | pacote contextual Ana/Bruno, integrado com A07, publicado e verificado em 25 ago. 2026 |
| A06–A07 | 2 | 2 | Google Slides e Google Docs | pacotes reconciliados, importados e verificados em 1º set. 2026 |
| A08–A30 | 23 | 23 | Google Slides e Google Docs | rascunhos publicados sob a arquitetura antiga de 30 encontros/104 min; não ministrar como sequência vigente; preservar até a substituição segura |

> **Reconciliação de 1º set. 2026:** a realidade passou a ser A01–A05 ministradas e 20 encontros restantes de 90 minutos. Após revisão técnica, cognitivo-didática e reconciliação histórica, o planejamento vigente está em [`reconciliacao-curricular-25-encontros.md`](reconciliacao-curricular-25-encontros.md). Pentest foi deslocado para A23–A24, depois de modelagem, criptografia, SGSI e OT. Nenhum arquivo futuro foi excluído ou substituído nesta etapa.

Os títulos no Drive começam pelo identificador estável `Axx`. Os roteiros terminam com `— prática`. A pasta deve conter somente uma apresentação vigente por identificador.

## Pacotes imediatos

- A04: [slides](https://docs.google.com/presentation/d/13u_GTiFUcrJ94M4TzzhUeKynbRAjPB5qdftzm7FlxxY) · [prática](https://docs.google.com/document/d/1Bo3ZtgUQG-tVKM7e6rL4KE5we4MC_E9AXhvAEu_AMSM)
- A05 integrada: [slides](https://docs.google.com/presentation/d/1Ubk8Y9okEehajiJ52OztcCsjE0pA99RQqJ_GGT7dOes) · [prática](https://docs.google.com/document/d/1aRyIQUjOT8AH2pGi0w_uUo-o0qw9IDhakQiisRY2aE0)
- A06 — Como antecipar o que pode dar errado?: [slides](https://docs.google.com/presentation/d/1VsG_67MbHLXXCY2oWdMA4pTKH8BFJVjR9GqxM39Zbqs) · [prática](https://docs.google.com/document/d/18_14wi-hmlgPZ5-kgzywkZ8jzD8cwfViizEP7rLTUME)
- A07 — Da aplicação web ao processo industrial: [slides](https://docs.google.com/presentation/d/187O4GeB7Xz62l6ij-is0U7La_26eCO4308GKGYArjqk) · [prática](https://docs.google.com/document/d/19KCkRDyMP4FaXPD3ObMdHkHaGyUY4bE06fgVefsNt_E)

> **Publicação de 1º set. 2026:** A06 e A07 foram publicadas como continuidade prospectiva da A05, sem repetir sua prática no DevTools. A06 possui 20 slides e converte ticket e testes herdados em DFD; A07 possui 22 slides e aprofunda uma ameaça até requisito, controle e três testes. Os dois roteiros foram importados como Google Docs, e as quatro cópias nativas foram verificadas por título, tipo, quantidade de slides e leitura estrutural. Os arquivos temporários de importação foram removidos após a conferência.

> **Reconciliação posterior de 1º set. 2026:** após leitura direta das apresentações vigentes A04/A05, foi removida a herança incorreta de ticket corporativo. A06 passou a formalizar brevemente o fluxo do Juice Shop e concentrar-se em ameaças testáveis; A07 passou a receber três ameaças e aprofundar uma até decisão defensável. As quatro versões provisórias anteriores foram substituídas somente após verificação das novas cópias nativas.

> **Revisão didática urgente de A06 em 1º set. 2026:** a apresentação foi ampliada para 37 slides curtos e progressivos, com exemplos trabalhados, três ilustrações didáticas próprias e quatro capturas oficiais do Microsoft Threat Modeling Tool. A abertura retoma os testes de sessão e propriedade, explicita a lacuna, define modelagem de ameaças e só então apresenta DFD por extenso e sua função. A sequência desenvolve escopo, ativo, ameaça, vulnerabilidade, consequência, evidência e STRIDE antes da aplicação. A cópia anterior foi removida somente após conferir título, contagem e conteúdo da substituta.

> **Revisão visual e conceitual posterior de A06:** os slides 9–16 deixaram de usar uma sequência homogênea de cards e passaram a representar o mesmo caso por rastro anotado, fronteira de autoridade, ramificação de hipóteses, progressão do método, mapa de escopo, relações entre ativos e cadeia causal. Os slides 18–20 agora justificam a entrada de STRIDE, apresentam o acrônimo completo em inglês com tradução e demonstram sua aplicação seletiva a um elemento ou fluxo do DFD.

> **Revisão DFD/STRIDE e ferramenta online:** a notação do DFD passou a ser desenhada com os símbolos usados no OWASP Threat Dragon; o caso Ana/Bruno evolui no mesmo diagrama até uma aplicação guiada de Information Disclosure. A sequência posterior demonstra acesso, desenho, seleção de elemento, sugestões por tipo, formulação e evidência no Threat Dragon. O roteiro prático foi substituído junto com os slides e agora orienta o uso online, exportação e alternativa sem rede.

> **Revisão operacional da oficina:** os slides 28, 29 e 34 deixaram de apresentar textos e perguntas soltas. Eles agora declaram a mudança da demonstração para a prática, a ferramenta e os arquivos a abrir, o estado inicial verificável, a alternativa sem rede, o protocolo de troca, o local do registro e o critério de parada. O roteiro prático recebeu os mesmos passos e exige uma correção após revisão cruzada.
- A30: [slides](https://docs.google.com/presentation/d/1QOiQUn-RibEUmnNKKc0dKpRr1fSesdrYtT1lNK7-KMI) · [prática](https://docs.google.com/document/d/1CVZDX2UK790SgbTuxd3QKt3dzkRhOm0zNPoIleGwEZA)

## Procedimento histórico para atualização opcional de slides e PDF

Ao alterar objetivos, comandos, arquitetura, evidências ou critérios de entrega:

1. atualizar as fontes locais do pacote;
2. regenerar e validar PPTX/PDF e DOCX/PDF;
3. importar a nova apresentação como Google Slides e o roteiro como Google Docs;
4. conferir título, conteúdo, quantidade e ordem dos slides e abertura dos links;
5. mover os arquivos para a pasta oficial;
6. somente depois remover a versão publicada anterior;
7. atualizar este registro quando a pasta, o escopo ou os links imediatos mudarem.

Materiais docentes, gabaritos e notas sensíveis permanecem no diretório local `docente/` e não devem ser colocados na pasta de distribuição aos estudantes.
