#!/usr/bin/env python3
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = []

# A apresentação e o PDF são complementares; o manifesto define o percurso ativo.
manifest_path = ROOT / "docente/percurso-publicado.json"
manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
nav_text = (ROOT / "mkdocs.yml").read_text(encoding="utf-8")
active_pages = set()
seen_ids = set()
for lesson in manifest["lessons"]:
    code, rel = lesson["id"], lesson["page"]
    if code in seen_ids:
        errors.append(f"identificador duplicado no percurso: {code}")
    seen_ids.add(code)
    page = ROOT / "docs" / rel
    active_pages.add(page)
    if not page.is_file():
        errors.append(f"página vigente ausente: {rel}")
        continue
    body = page.read_text(encoding="utf-8")
    if body.count("{#" + lesson["activity"] + "}") != 1:
        errors.append(f"âncora de atividade ausente ou ambígua: {rel}")
    if not re.search(r":\s*" + re.escape(rel) + r"\s*$", nav_text, re.M):
        errors.append(f"página vigente fora da navegação: {rel}")
if not (ROOT / manifest["conducao"]).is_file():
    errors.append("adendo de condução ausente")
for base in ("slides", "docente"):
    if (ROOT / "docs" / base).exists():
        errors.append(f"árvore não publicável dentro de docs/: {base}")
for path in (ROOT / "docs").rglob("*"):
    if path.suffix.lower() in {".pptx", ".docx"}:
        errors.append(f"fonte Office dentro do site: {path.relative_to(ROOT)}")

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
