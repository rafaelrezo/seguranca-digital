.PHONY: install-material-tools templates export-templates a01 export-a01 validate-course build

install-material-tools:
	npm install --prefix tools/materials

templates:
	node tools/materials/generate-templates.mjs

export-templates: templates
	mkdir -p slides/_template/exportados atividades/_template/pdf
	libreoffice --headless --convert-to pdf --outdir slides/_template/exportados slides/_template/fonte/template-seguranca-digital.pptx
	libreoffice --headless --convert-to pdf --outdir atividades/_template/pdf atividades/_template/fonte/template-atividade-pratica.docx

a01:
	node tools/materials/generate-a01.mjs

export-a01: a01
	mkdir -p slides/A01-o-incidente-que-parou-a-linha/exportados atividades/A01-o-incidente-que-parou-a-linha/pdf
	libreoffice -env:UserInstallation=file:///tmp/seguranca-digital-lo-a01-slides --headless --convert-to pdf --outdir slides/A01-o-incidente-que-parou-a-linha/exportados slides/A01-o-incidente-que-parou-a-linha/fonte/A01-o-incidente-que-parou-a-linha.pptx
	mv slides/A01-o-incidente-que-parou-a-linha/exportados/A01-o-incidente-que-parou-a-linha.pdf slides/A01-o-incidente-que-parou-a-linha/exportados/A01-slides.pdf
	libreoffice -env:UserInstallation=file:///tmp/seguranca-digital-lo-a01-doc --headless --convert-to pdf --outdir atividades/A01-o-incidente-que-parou-a-linha/pdf atividades/A01-o-incidente-que-parou-a-linha/fonte/A01-o-incidente-que-parou-a-linha.docx
	mv atividades/A01-o-incidente-que-parou-a-linha/pdf/A01-o-incidente-que-parou-a-linha.pdf atividades/A01-o-incidente-que-parou-a-linha/pdf/A01-pratica.pdf

validate-course:
	python3 scripts/validate_course_packages.py

build:
	./.venv/bin/mkdocs build --clean
