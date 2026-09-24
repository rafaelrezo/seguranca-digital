#!/usr/bin/env python3
"""Gera a apresentação independente da atividade canônica, sem duplicar o enunciado.

Uso: .venv/bin/python scripts/build_a11_a12_activity_html.py [--check]
O HTML é copiado pelo MkDocs como ativo estático, fora do menu e do índice de busca.
"""
from pathlib import Path
import argparse
import html
import re
import markdown

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'docs/atividades/A11-A12-protecao-integrada.md'
TARGET = ROOT / 'docs/atividades/A11-A12-parecer.html'

CSS = '''
:root{color-scheme:light;--ink:#192b3e;--muted:#475b70;--blue:#164f79;--paper:#fff;--line:#d3dfe8;--wash:#edf3f7}
*{box-sizing:border-box}html{scroll-padding-top:1rem}body{margin:0;background:var(--wash);color:var(--ink);font:1.05rem/1.65 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:var(--blue);text-underline-offset:.18em}a:hover{text-decoration-thickness:2px}a:focus-visible,[tabindex]:focus-visible{outline:3px solid #b75400;outline-offset:4px}p{margin:.8rem 0}strong{font-weight:750}code{font-size:.9em;background:#e9eff4;border-radius:.25rem;padding:.12em .3em;overflow-wrap:anywhere}h1,h2,h3{line-height:1.2;text-wrap:balance}h1{font-size:clamp(2rem,4.5vw,3.2rem);margin:.8rem 0 1rem;max-width:24ch}h2{font-size:clamp(1.45rem,3vw,1.9rem);margin:.25rem 0 1.25rem}h3{font-size:1.2rem}.skip{position:absolute;top:-5rem;left:1rem;padding:.6rem;background:#fff;z-index:2}.skip:focus{top:1rem}.hero{background:#133c5a;color:#fff;padding:3.5rem max(1.25rem,calc((100vw - 1100px)/2)) 3rem}.hero a{color:#fff}.eyebrow{text-transform:uppercase;letter-spacing:.11em;font-size:.8rem;font-weight:750}.lead{max-width:65ch;color:#e3edf5}.badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1.5rem}.badges span{padding:.3rem .8rem;border:1px solid #7694ab;border-radius:2rem;font-size:.9rem}.layout{max-width:1140px;margin:0 auto;padding:1.5rem 1.25rem 3rem;display:grid;grid-template-columns:190px minmax(0,1fr);gap:1.5rem}.index{align-self:start;position:sticky;top:1rem}.index p{font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;font-weight:750;color:var(--muted)}.index a{display:block;padding:.65rem .75rem;margin:.2rem 0;border-radius:.5rem;text-decoration:none;font-size:.95rem}.index a:hover{background:#dce7ef}.index .download{margin-top:1rem;border:1px solid #a9bccb}main{min-width:0}.card{background:var(--paper);border:1px solid var(--line);border-radius:1rem;padding:clamp(1.2rem,3vw,2rem);margin-bottom:1.4rem;box-shadow:0 3px 14px #19344d06}.card .step{color:var(--blue);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;font-weight:750}.safety{border-left:5px solid #9b5c17;background:#fffaf3}blockquote{margin:1.25rem 0;border-left:4px solid var(--blue);padding:.4rem 1rem;background:#eef5fa}blockquote p{margin:.3rem 0}ul,ol{padding-left:1.5rem}li{padding-left:.25rem;margin:.7rem 0}.tasks{list-style:none;counter-reset:task;padding:0;margin:1.25rem 0}.tasks>li{counter-increment:task;border-top:1px solid var(--line);padding:1.2rem 0 1.2rem 2.7rem;position:relative;margin:0}.tasks>li:before{content:counter(task);position:absolute;left:0;top:1.3rem;width:1.7rem;height:1.7rem;border-radius:50%;display:grid;place-items:center;background:var(--blue);color:white;font-size:.85rem;font-weight:700}.table-scroll{overflow-x:auto;margin:1.3rem 0;border:1px solid var(--line);border-radius:.6rem}.table-scroll:focus-visible{outline-offset:1px}table{width:100%;border-collapse:collapse;font-size:.92rem;text-align:left;min-width:520px}th{background:#e7eff5;font-weight:750;color:#183f5c}th,td{padding:.7rem .85rem;border-bottom:1px solid var(--line);vertical-align:top}tbody tr:last-child td{border-bottom:0}tbody tr:nth-child(even){background:#f7f9fb}td code{white-space:normal}footer{max-width:1100px;margin:0 auto;padding:0 1.25rem 2rem;font-size:.9rem;color:var(--muted)}.table-hint{color:var(--muted);font-size:.85rem}.deliverable{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem;margin:1.2rem 0}.deliverable div{border:1px solid var(--line);border-radius:.6rem;padding:.8rem;background:#f3f7fa;font-size:.95rem}.deliverable span{display:block;color:var(--muted);font-size:.8rem}
@media(max-width:800px){.layout{grid-template-columns:1fr;padding:1rem}.index{position:static;display:flex;flex-wrap:wrap;gap:.2rem .5rem}.index p{width:100%;margin:0}.index a{padding:.35rem .55rem;margin:0}.index .download{margin:0}.hero{padding:2rem 1.25rem}.tasks>li{padding-left:2.2rem}}
@media(max-width:420px){body{font-size:1rem}.card{padding:1.1rem}.deliverable{grid-template-columns:1fr}}
@media print{body{background:white;font-size:10pt;line-height:1.45;color:#111}.hero{background:white;color:#111;padding:0 0 1rem}.hero a,.lead{color:#111}h1{font-size:24pt;max-width:none}.badges span{border-color:#777}.layout{display:block;max-width:none;padding:0}.index,.skip,.table-hint{display:none}.card{box-shadow:none;border:0;border-radius:0;padding:0;margin:1rem 0 1.5rem}.safety{border-left:3px solid #777;padding-left:1rem}h2,h3,.step{break-after:avoid}table{min-width:0;font-size:8.5pt}.table-scroll{overflow:visible;border-radius:0}tr{break-inside:avoid}thead{display:table-header-group}th,td{padding:.35rem}.tasks>li:before{background:white;color:#111;border:1px solid #333}.tasks>li{break-inside:auto}a{color:#111}footer{padding:0}@page{margin:16mm}}
'''


def render():
    text = SOURCE.read_text(encoding='utf-8')
    # Os links de Markdown tornam-se os caminhos efetivos do build padrão MkDocs.
    text = re.sub(r'\]\((\.\./aulas/[^)]+)\.md\)', r'](\1/)', text)
    chunks = re.split(r'^### (.+)$', text, flags=re.M)
    intro = chunks[0].split('## Atividade {#atividade}', 1)[1].strip()
    specifications = [
        ('inicio', 'Comece aqui', 'Preparação e entrega', intro),
    ]
    anchors = ['seguranca', 'parte-a', 'parte-b', 'conclusao']
    for index, (title, body) in enumerate(zip(chunks[1::2], chunks[2::2])):
        specifications.append((anchors[index], ['Antes de analisar', 'Conjunto de dados A', 'Conjunto de dados B', 'Antes de enviar'][index], title, body.strip()))
    cards=[]
    for anchor, label, title, body in specifications:
        content=markdown.markdown(body, extensions=['tables','attr_list'])
        content=content.replace('<th>', '<th scope="col">')
        # A tabela interna ao primeiro requisito permanece dentro do seu item.
        count=0
        def wrap(match):
            nonlocal count
            count+=1
            return f'<div class="table-scroll" role="region" aria-label="Tabela {count} — {html.escape(title)}" tabindex="0">{match.group(0)}</div>'
        content=re.sub(r'<table>.*?</table>',wrap,content,flags=re.S)
        if anchor in ('parte-a','parte-b'):
            content=content.replace('<ol>', '<ol class="tasks">')
        if anchor=='conclusao':
            content='''<div class="deliverable" aria-label="Quatro blocos do parecer"><div><span>Bloco 1</span><strong>Exposição e controles</strong></div><div><span>Bloco 2</span><strong>Regra e contraprovas</strong></div><div><span>Bloco 3</span><strong>Recuperação</strong></div><div><span>Bloco 4</span><strong>Triagem e resposta</strong></div></div>'''+content
        cards.append(f'<section class="card{" safety" if anchor=="seguranca" else ""}" id="{anchor}" aria-labelledby="titulo-{anchor}"><p class="step">{label}</p><h2 id="titulo-{anchor}">{html.escape(title)}</h2>\n{content}\n</section>')
    return '''<!doctype html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>A11–A12 — Parecer técnico sobre dados e endpoint</title>
<meta name="description" content="Atividade integrada de Segurança Digital: analise dados e rastros, justifique controles e produza um parecer técnico em dupla.">
<!-- Gerado por scripts/build_a11_a12_activity_html.py a partir do enunciado Markdown canônico. -->
<style>'''+CSS+'''</style></head>
<body>
<a class="skip" href="#atividade">Ir para a atividade</a>
<header class="hero"><div class="eyebrow">Segurança Digital · A11–A12</div><h1>Parecer técnico sobre dados e endpoint</h1><p class="lead">Leia os dois conjuntos de dados, justifique suas decisões e organize um único parecer com quatro blocos.</p><div class="badges" aria-label="Resumo da entrega"><span>Em dupla</span><span>Um PDF</span><span>Sem ferramentas especializadas</span></div></header>
<div class="layout"><nav class="index" aria-label="Etapas da atividade"><p>Nesta atividade</p><a href="#inicio">1. Preparação e entrega</a><a href="#seguranca">2. Escopo e segurança</a><a href="#parte-a">3. Dados e recuperação</a><a href="#parte-b">4. Endpoint e resposta</a><a href="#conclusao">5. Revisão e avaliação</a><a class="download" href="../assets/a11-a12/modelo-parecer.txt" download>Baixar modelo de texto</a></nav>
<main id="atividade" tabindex="-1">'''+ '\n'.join(cards)+'''</main></div>
<footer><a href="../aulas/A11-protecao-de-dados/">Consultar A11</a> · <a href="../aulas/A12-protecao-de-endpoints/">Consultar A12</a> · <a href="#inicio">Voltar ao início</a><p>Prazo e envio: consulte a convocação no Google Classroom.</p></footer>
</body></html>
'''

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check',action='store_true',help='verifica se o HTML corresponde ao Markdown atual')
    args=parser.parse_args()
    result=render()
    if args.check:
        if not TARGET.exists() or TARGET.read_text(encoding='utf-8')!=result:
            raise SystemExit('HTML desatualizado: execute scripts/build_a11_a12_activity_html.py')
        print('HTML da atividade alinhado ao Markdown canônico.')
    else:
        TARGET.write_text(result,encoding='utf-8')
        print(TARGET.relative_to(ROOT))
