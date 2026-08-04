# Sistema de produção dos materiais

Este diretório contém as fontes dos templates usados nos pacotes de aula. Os materiais destinados aos estudantes permanecem separados do site MkDocs:

```text
docs/aulas/                 # referência teórica publicável
slides/Axx-tema/            # apresentação e exportações
atividades/Axx-tema/        # roteiro e PDF do Classroom
docente/Axx-tema/           # plano, facilitação e gabarito
```

## Identificadores e nomes

- Use `A01`, `A02`, ..., `A30` na ordem dos encontros.
- Use o mesmo identificador e slug nas quatro árvores.
- PDFs publicados: `Axx-slides.pdf` e `Axx-pratica.pdf`.
- Evite `final`, `novo`, `corrigido` ou números de versão no nome. O histórico pertence ao Git.

## Produção de uma aula

1. Copie as pastas `_template` para o identificador e slug da aula.
2. Copie os templates nativos do Google registrados nos READMEs.
3. Preencha a ficha-base antes de redigir os três artefatos.
4. Exporte a apresentação como PPTX e PDF.
5. Exporte a atividade como DOCX e PDF.
6. Rode `make validate-course` e `make build`.

Os links do Google são fontes de colaboração; os snapshots PPTX e DOCX no repositório são fontes portáveis e auditáveis.

## Guardrails

- O alvo deve ser fornecido e explicitamente autorizado.
- Não exponha aplicações vulneráveis diretamente à Internet.
- Use apenas dados fictícios e segredos descartáveis.
- Não distribua malware; ransomware é sempre simulado.
- Não execute DoS nem mudanças OT capazes de produzir consequência perigosa.
- Toda prática em AWS deve incluir estimativa, alternativa local e teardown verificável.
- Nunca inclua gabarito, token, credencial, IP ou nota interna em `docs/`, `slides/` ou `atividades/`.
