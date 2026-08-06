# A01 — O incidente que parou a linha

- Objetivos: separar observação e inferência; relacionar CIA, AAA e safety; decidir uma próxima ação baseada em risco.
- Página MkDocs: `docs/aulas/A01-o-incidente-que-parou-a-linha.md`
- Fonte versionada: `fonte/A01-o-incidente-que-parou-a-linha.pptx`
- PDF de apresentação: `exportados/A01-slides.pdf`
- Fonte colaborativa no Google Apresentações: https://docs.google.com/presentation/d/1zc-hHDZS9wITKi0_2e2gLooJ79KK2270fsYIo-MxMBE/edit
- Pasta do curso no Drive: https://drive.google.com/drive/folders/1FDegmvF7LGJ-FTDowgvqoSxncldsZWmB

## Geração

```bash
node tools/materials/generate-a01.mjs
libreoffice --headless --convert-to pdf --outdir slides/A01-o-incidente-que-parou-a-linha/exportados slides/A01-o-incidente-que-parou-a-linha/fonte/A01-o-incidente-que-parou-a-linha.pptx
```

A apresentação usa formato 16:9, fonte Arial, corpo mínimo de 14 pt e notas do apresentador. A aula começa por evidência, inclui dois checkpoints e termina com a ponte para a prática.
