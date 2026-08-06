#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = []

required_template_paths = [
    "slides/_template/README.md",
    "slides/_template/fonte/template-seguranca-digital.pptx",
    "slides/_template/exportados/template-seguranca-digital.pdf",
    "atividades/_template/README.md",
    "atividades/_template/fonte/template-atividade-pratica.docx",
    "atividades/_template/pdf/template-atividade-pratica.pdf",
    "docente/_template/plano-de-aula.md",
    "docente/_template/notas-de-facilitacao.md",
    "docente/_template/gabarito/README.md",
]

for rel in required_template_paths:
    if not (ROOT / rel).is_file():
        errors.append(f"arquivo obrigatório ausente: {rel}")

for base in ("slides", "atividades", "docente"):
    if (ROOT / "docs" / base).exists():
        errors.append(f"árvore não publicável encontrada dentro de docs/: docs/{base}")

secret_patterns = [
    re.compile(r"AKIA[0-9A-Z]{16}"),
    re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    re.compile(r"(?i)(?:password|senha|token)\s*[:=]\s*[^<\s]{8,}"),
]
forbidden_external_hosts = [
    re.compile(r"(?i)(?:https?:)?//(?:[^/]+\.)?polyfill\.io(?:/|$)"),
]
for public_root in (ROOT / "docs", ROOT / "slides", ROOT / "atividades", ROOT / "mkdocs.yml"):
    if not public_root.exists():
        continue
    paths = [public_root] if public_root.is_file() else public_root.rglob("*")
    for path in paths:
        if not path.is_file() or path.suffix.lower() not in {".md", ".txt", ".yml", ".yaml", ".json", ".html"}:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for pattern in secret_patterns:
            if pattern.search(text):
                errors.append(f"possível segredo em {path.relative_to(ROOT)}")
        for pattern in forbidden_external_hosts:
            if pattern.search(text):
                errors.append(f"host externo proibido em {path.relative_to(ROOT)}: polyfill.io")

for folder in list((ROOT / "slides").glob("A[0-9][0-9]-*")) + list((ROOT / "atividades").glob("A[0-9][0-9]-*")):
    if not (folder / "README.md").is_file():
        errors.append(f"README ausente: {folder.relative_to(ROOT)}")

if errors:
    print("Validação dos pacotes falhou:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Estrutura editorial, separação do MkDocs, hosts externos e verificações de segredos: OK")
