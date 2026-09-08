# Validação da reconciliação — 8 de setembro de 2026

- Validador do percurso: aprovado no workspace e na cópia isolada da versão remota.
- Build MkDocs com `--clean --strict`: aprovado nas duas cópias; saída em `/tmp`, sem regenerar a árvore histórica `site/` do workspace.
- HTML: nove páginas de entrada/percurso/aulas e 1.124 links internos conferidos, incluindo destinos e âncoras; zero erros.
- Build ativo: sete páginas de aula; variantes e propostas futuras excluídas; nenhum diretório docente no site.
- Preservação: SHA-256 comparado ao estado inicial para 336 arquivos de slides, atividades, roteiros e planos históricos; zero alterações ou remoções.
- `git diff --check` aprovado com exceção para espaços finais intencionais de quebra de linha Markdown (`core.whitespace=-blank-at-eol`).
- Consulta Drive: 62 arquivos recuperados; nenhuma mutação remota. A análise foi de conteúdo textual/estrutural.
- Procedimentos sensíveis à ferramenta conferidos em documentação oficial do Firefox, Threat Dragon e MITRE ATT&CK. Os exemplos alternativos não são resultados de laboratório medidos.

Não foi realizado ensaio ao vivo de Juice Shop, Threat Dragon ou Navigator nesta reconciliação. A revisão valida material, estrutura e referências, sem comprovar execução pelos estudantes. A publicação usa uma cópia isolada da branch remota para não incluir alterações pendentes de outros trabalhos.

## Publicação verificada

A revisão `2ef21b0ec5cad2b16096c7b46436ac5c196b132a` foi enviada à branch `main`. O [validador no GitHub](https://github.com/rafaelrezo/seguranca-digital/actions/runs/34242768304) passou. A publicação é acompanhada no [workflow de deploy](https://github.com/rafaelrezo/seguranca-digital/actions/runs/34242768208).

O [percurso público](https://rafaelrezo.github.io/seguranca-digital/percurso/) e as sete páginas A01–A07 retornaram HTTP 200; todas as páginas de aula contêm exatamente uma âncora `atividade`. Os links preparados para Classroom abrem as seções publicadas. Nenhuma atividade foi enviada à turma.

A branch do workspace original não foi movimentada: a publicação ocorreu em cópia isolada da versão remota, preservando os trabalhos locais pendentes.
