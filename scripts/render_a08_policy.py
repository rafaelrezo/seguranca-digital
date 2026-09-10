"""Prepara HTML de impressão a partir da fonte da política didática da A08.

Uso: python3 scripts/render_a08_policy.py /tmp/A08-politica.html
Imprimir o HTML com Chrome headless, --no-pdf-header-footer e --print-to-pdf.
"""
from pathlib import Path
from html import escape
import re
import sys

root = Path(__file__).resolve().parents[1]
source = root / 'docs/assets/m1/A08-politica-seguranca-nuvora.txt'
paragraphs = source.read_text(encoding='utf-8').strip().split('\n\n')
blocks = []
section_open = False
for index, paragraph in enumerate(paragraphs):
    paragraph = paragraph.strip()
    if not paragraph:
        continue
    if index == 0:
        title, subtitle = paragraph.split('\n', 1)
        blocks.append(f'<header><p class="eyebrow">NUVORA · SEGURANÇA DA INFORMAÇÃO</p><h1>Política de Segurança da Informação</h1><p>{escape(subtitle)}</p></header>')
    elif re.match(r'^\d+\. ', paragraph):
        if section_open:
            blocks.append('</section>')
        blocks.append(f'<section><h2>{escape(paragraph)}</h2>')
        section_open = True
    else:
        css = ' class="metadata"' if not section_open else ''
        blocks.append(f'<p{css}>{escape(paragraph)}</p>')
if section_open:
    blocks.append('</section>')
html = '''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>PSI-NU-01 — Política de Segurança da Informação da Nuvora</title>
<style>
@page { size: A4; margin: 17mm 19mm 18mm;
 @bottom-left { content: "Nuvora · PSI-NU-01 · Proposta didática v0.1"; font: 8pt Arial; color: #526170; }
 @bottom-right { content: counter(page); font: 8pt Arial; color: #526170; }
}
body { margin: 0; color: #1b2935; font: 11pt/1.4 Arial, sans-serif; }
header { border-bottom: 2px solid #17645f; padding-bottom: 8pt; margin-bottom: 12pt; }
h1 { font-size: 23pt; line-height: 1.15; margin: 5pt 0 8pt; color: #17324d; }
.eyebrow { font-size: 8pt; font-weight: bold; letter-spacing: 1px; color: #17645f; }
h2 { font-size: 12pt; color: #17324d; margin: 13pt 0 5pt; break-after: avoid; }
p { margin: 0 0 8pt; orphans: 3; widows: 3; }
.metadata { font-size: 9pt; line-height: 1.35; margin-bottom: 4pt; }
section { break-inside: avoid; }
</style></head><body>'''+''.join(blocks)+'</body></html>'
Path(sys.argv[1]).write_text(html, encoding='utf-8')
print(f'HTML preparado: {sys.argv[1]}')
