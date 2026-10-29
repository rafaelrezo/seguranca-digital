# Validação local — A19–A20, 29 out. 2026

Este registro documenta os checks anteriores à publicação. A etapa posterior está no [registro de publicação e verificação](validacao-pages-2026-10-29.md).

## Resultado e alcance

Preparadas duas páginas integrais de 100 minutos, uma atividade compartilhada, insumos em texto e planos docentes. Arquitetura, roadmap, navegação, percurso e manifesto alinhados à redução de quatro para dois encontros OT. Os identificadores A19/A20 continuam provisórios para o calendário; os demais materiais históricos foram preservados.

Não houve publicação remota, commit, alteração no Drive/Classroom, instalação de simulador, teste contra CLP ou execução do exemplo web. A prática planejada é análise guiada dos dados artificiais fornecidos. Duração presencial e compreensão da turma não foram medidas.

## Verificações executadas

- `./.venv/bin/mkdocs build --strict --clean --site-dir /tmp/seguranca-ot-20261029-site`: aprovado, inclusive após os ajustes de diagramas e tabelas. Diretório `site/` existente preservado.
- `python3 scripts/validate_course_packages.py`: aprovado; manifesto, estrutura, separação de conteúdo e verificações editoriais existentes.
- Links locais e âncoras no HTML das duas aulas e da atividade: conferidos; âncora `atividade` presente e destino compartilhado acessível. Artefato sem árvores `docente/` ou `slides/`.
- Soma dos blocos docentes: A19 65 T/35 P = 100; A20 55 T/45 P = 100; bloco 120 T/80 P = 200 min. São valores de planejamento, sem alegação de execução.
- Espaços em branco: `git diff --check` aprovado no escopo dos arquivos alterados por esta produção. A execução global encontrou espaços de alterações anteriores no `site/`; esses arquivos não foram corrigidos nem reescritos.
- Aberturas renderizadas em Chrome, 1440 e 390 px; recortes do HTML compilado conferidos para malha de controle, comparação de referenciais e ponte web. Diagramas convertidos em fluxo vertical para leitura estreita, sem reduzir fonte.
- Tabelas das duas aulas e da rubrica receberam regiões nomeadas, foco por Tab e rolagem horizontal. A marcação e o foco programático foram conferidos; não houve ensaio manual de navegação por teclado com usuário nem auditoria completa de acessibilidade.

Capturas temporárias em `/tmp/seguranca-ot-a19-desktop.png`, `/tmp/seguranca-ot-a19-mobile2.png`, `/tmp/seguranca-ot-a20-desktop2.png`, `/tmp/seguranca-ot-metodos-desktop.png`, `/tmp/seguranca-ot-metodos-mobile-final.png` e `/tmp/seguranca-ot-processo-mobile-final.png`. Recortes de inspeção ficam somente no diretório temporário, não nas fontes nem no material de distribuição.

## Coerência conceitual e fontes

A referência final adotada é SP 800-82 Rev. 3; a página oficial aponta a Rev. 4 como rascunho em consulta. O mapa de seis funções é identificado como CSF 2.0, distinto das cinco funções do CSF 1.1 referenciado na Rev. 3. SP 800-115 é situada como guia de 2008, sem recomendação de ferramentas antigas.

WSTG 4.2, ASVS 5.0.0 e Top 10 2025 foram conferidos nas páginas oficiais. O caso selecionado é WSTG-v42-ATHZ-04, com leitura de objeto de outra conta. As rotas de ordens são artificiais e explicitamente diferentes do Juice Shop. Os exemplos antes/depois são fornecidos, sem correção ou reteste alegados.

Limites de recuperação das fontes PTES/OSSTMM e uso da página primária TrustedSec estão registrados no planejamento integrado. O incidente CISA usa a edição primária de dezembro de 2024, separado de todas as amostras didáticas.

Não se afirma conformidade 62443/ASVS, segurança funcional validada, eficácia integral de segmentação, restauração ensaiada nem pentest industrial/web executado. O foco futuro OWASP permanece uma recomendação para revisão docente.
