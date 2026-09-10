# Revisão temática A08/A09 — 10 de setembro de 2026

Padrão aprovado pelo docente e incorporado ao AGENTS.md: título temático, síntese de 3–5 ideias, esquema relacional, aplicação curta e explicação completa aberta. Continuidade reutiliza dados e decisões sem exigir enredo. A08 realizada conforme relato docente; revisão posterior não comprova execução ou entregas.

## Implementação

- A08: dez temas; abertura condensada; política integral e documentos G01–G04 em consulta na mesma página; medição junto do objetivo; oito passos como checklist final.
- A09: oito temas; estratégias, viabilidade, residual e mudança de premissa em blocos próprios. R01 permanece trabalhado; R02 e V1 exigem decisão justificada.
- Dezoito SVGs editáveis em `docs/assets/m1/sinteses/`, com rótulos, texto alternativo e ampliação. Figuras anteriores, imagens, PDF e fonte da política preservados.
- Navegação por temas e âncoras anteriores preservadas. Explicações abertas; nenhuma instrução necessária depende de recolher/expandir conteúdo.
- Planos alinhados; plano A08 anterior preservado em `docente/A08-governanca-sgsi/plano-preservado-2026-09-08.md`.
- Objetivos, 100 minutos, A08 50T/50P, A09 60T/40P e atividade única de 3–4 páginas mantidos.

## Verificação local executada

- Build MkDocs estrito e validador `validate_course_packages.py`: aprovados.
- Comparação HTML antes/depois: nenhuma âncora antiga perdida, nenhum ID duplicado e nenhum link local ou fragmento quebrado nas duas páginas.
- Texto da política PSI-VV-01 e enunciado integral de A09#atividade: idênticos aos anteriores.
- XML dos 18 SVGs válido; imagens carregadas no navegador.
- Chrome/Playwright: 18 sínteses conferidas em 1280×800; títulos, itens e figuras legíveis. Altura máxima do bloco de síntese próxima de 565 px.
- Tela de 390×844: sem transbordamento horizontal da página; figuras e tabelas possuem rolagem própria e esquemas podem ser ampliados por link.
- Emulação de impressão: os dez/oito blocos explicativos permanecem visíveis.
- Capturas inicialmente em branco foram descartadas; a inspeção válida usou Playwright com recursos externos bloqueados, verificando também o funcionamento com fontes locais de fallback. O conteúdo técnico não recebeu nova auditoria normativa nesta revisão editorial.

## Publicação

Preparada sobre a versão remota `eed7ee0ff98dba5bebafb8d1e954d57e968a60a3`. As duas páginas de origem coincidem exatamente com essa versão. Somente os arquivos desta revisão entram na atualização; o diretório de trabalho principal contém alterações anteriores que não devem ser publicadas em lote.

A confirmação do deploy é posterior a este registro de preparação. Não houve alteração no Drive nem envio ao Classroom.
