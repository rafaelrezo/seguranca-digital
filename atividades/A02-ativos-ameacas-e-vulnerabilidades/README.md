# A02 — Ativos, ameaças e vulnerabilidades — prática

- Objetivos: produzir inventário priorizado e registro de vulnerabilidade com evidência, controle e reteste.
- Página MkDocs: `docs/aulas/A02-ativos-ameacas-e-vulnerabilidades.md`
- Fonte versionada: `fonte/A02-ativos-ameacas-e-vulnerabilidades.docx`
- PDF do Google Classroom: `pdf/A02-pratica.pdf`
- Fonte colaborativa no Google Docs: https://docs.google.com/document/d/1puFEfHmQjdaOMBXSSFUvW8apHoR5TJFOBMQEVdYy6G0

## Geração

```bash
node tools/materials/generate-a02.mjs
libreoffice --headless --convert-to pdf --outdir atividades/A02-ativos-ameacas-e-vulnerabilidades/pdf atividades/A02-ativos-ameacas-e-vulnerabilidades/fonte/A02-ativos-ameacas-e-vulnerabilidades.docx
mv atividades/A02-ativos-ameacas-e-vulnerabilidades/pdf/A02-ativos-ameacas-e-vulnerabilidades.pdf atividades/A02-ativos-ameacas-e-vulnerabilidades/pdf/A02-pratica.pdf
```

O roteiro é autocontido. Soluções e respostas permanecem exclusivamente em `docente/A02-ativos-ameacas-e-vulnerabilidades/gabarito/`.
