# Publicação e verificação — A19–A20, 29 out. 2026

## Publicação confirmada

Publicação para avaliação solicitada expressamente pelo docente após a produção local. Commit `5c7874eadac344a1573a2e38140155c97a627eef` enviado à main a partir de uma cópia limpa de `a0954a34`, preservando a branch e as demais alterações locais. Foram publicados somente o pacote OT, seus planos/insumos e os ajustes correspondentes de navegação, estilo, percurso e arquitetura/roadmap. Não se transportaram revisões locais anteriores da A15 nem se substituiu o histórico remoto.

- [A19 — Segurança das operações industriais](https://rafaelrezo.github.io/seguranca-digital/aulas/A19-seguranca-operacoes-industriais/).
- [A20 — Validar controles OT e preparar pentest](https://rafaelrezo.github.io/seguranca-digital/aulas/A20-validacao-ot-pentest/).
- [Atividade única](https://rafaelrezo.github.io/seguranca-digital/atividades/A19-A20-protecao-validacao-ot/#atividade).
- [Pacote de evidências](https://rafaelrezo.github.io/seguranca-digital/assets/a19-a20/pacote-evidencias-ot/) e [modelo](https://rafaelrezo.github.io/seguranca-digital/assets/a19-a20/modelo-registro-ot/).

## Evidências da conferência

[Validação editorial 40945550859](https://github.com/rafaelrezo/seguranca-digital/actions/runs/40945550859) e [deploy 40945551093](https://github.com/rafaelrezo/seguranca-digital/actions/runs/40945551093) concluídos com sucesso para o mesmo commit. Build estrito e validador também aprovados na cópia isolada antes do envio.

As duas aulas, atividade, pacote, modelo e percurso responderam HTTP 200. O conteúdo integral de cada artigo HTML público coincide com o build isolado validado, e o CSS público coincide byte a byte. As âncoras de atividade estão presentes. Resultado e hashes no [relatório de verificação pública](verificacao-publica-2026-10-29.json).

A inspeção local em desktop e tela estreita foi registrada na [validação anterior à publicação](validacao-local.md); não se declara uma nova auditoria de acessibilidade. O artefato do site não inclui árvores docentes ou de slides. Material histórico foi preservado.

## Limites

Publicação para avaliação não confirma realização das aulas, execução de testes industriais/web, restauração, domínio individual ou ajuste final do calendário. A19/A20 continuam identificadores provisórios para o calendário. Não houve alteração no Drive/Classroom nem criação de infraestrutura industrial/nuvem. O foco futuro OWASP permanece recomendação editorial, como registrado no planejamento.

## Republicação — revisão com cards (29 out. 2026, tarde)

Publicação solicitada pelo docente. Commit `9c24b395` enviado à main a partir de cópia limpa de `393cbea4`, levando somente a revisão A19–A20 (páginas, atividade, pacote, modelo, percurso, navegação, CSS dos cards e registros docentes correspondentes). Build estrito e validador aprovados na cópia isolada; validação editorial 40952572050 e deploy 40952572173 concluídos com sucesso. As duas aulas, atividade, pacote, modelo e percurso responderam HTTP 200 com os novos títulos e os cards; o caso web foi removido das páginas públicas e preservado em reserva docente. Não confirma realização nem altera Drive/Classroom.

## Republicação — A20 com zero trust, captura Modbus e mercado (5 nov. 2026)

Publicação autorizada pelo docente ("atualiza a arquitetura, reescreve a A20 e publique"). Commit `ac71fe23` enviado à main a partir de cópia limpa de `285ced78`, levando somente A20, quadro de aprofundamento na A19, atividade (item 5 da Etapa 4 e critério 5), pacote (seção C-01), captura `a20-modbus-c01.pcap`, script gerador e registros docentes. Build estrito e validador aprovados na cópia isolada; leitura renderizada conferida em 1366 px e 390 px (tabela decodificada da C-01 rola horizontalmente na tela estreita). [Validação 42104828989](https://github.com/rafaelrezo/seguranca-digital/actions/runs/42104828989) e [deploy 42104828961](https://github.com/rafaelrezo/seguranca-digital/actions/runs/42104828961) com sucesso. A20, A19, atividade, pacote e captura responderam HTTP 200; o SHA-256 da captura pública coincide com o local (`eacb5ccd…43e7`). Não confirma realização da A20 nem altera Drive/Classroom.
