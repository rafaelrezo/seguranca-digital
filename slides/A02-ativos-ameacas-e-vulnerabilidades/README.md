# A02 — Ativos, ameaças e vulnerabilidades

- Objetivos: inventariar ativos por consequência; distinguir ameaça, fraqueza, vulnerabilidade, exposição e exploit; selecionar controle e reteste.
- Página MkDocs: `docs/aulas/A02-ativos-ameacas-e-vulnerabilidades.md`
- Fonte versionada: `fonte/A02-ativos-ameacas-e-vulnerabilidades.pptx`
- PDF de apresentação: `exportados/A02-slides.pdf`
- Fonte colaborativa no Google Apresentações: https://docs.google.com/presentation/d/1rlbUynky8B8NqHwwV3p6ZssN4xXlIOvhxiSy7nFKMSA/edit
- Pasta do curso no Drive: https://drive.google.com/drive/folders/1FDegmvF7LGJ-FTDowgvqoSxncldsZWmB

## Geração

```bash
node tools/materials/generate-a02.mjs
libreoffice --headless --convert-to pdf --outdir slides/A02-ativos-ameacas-e-vulnerabilidades/exportados slides/A02-ativos-ameacas-e-vulnerabilidades/fonte/A02-ativos-ameacas-e-vulnerabilidades.pptx
mv slides/A02-ativos-ameacas-e-vulnerabilidades/exportados/A02-ativos-ameacas-e-vulnerabilidades.pdf slides/A02-ativos-ameacas-e-vulnerabilidades/exportados/A02-slides.pdf
```

A apresentação usa formato 16:9, texto narrativo com pelo menos 14 pt, notas do apresentador, dois checkpoints ativos e alternativa à demonstração ao vivo.
