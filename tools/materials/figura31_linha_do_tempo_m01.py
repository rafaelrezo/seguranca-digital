"""Gera a figura 31 (A20): linha do tempo de M-01 com acesso e processo no mesmo relógio.

Os horários e valores são os dados artificiais da A20 (pacote de evidências A19–A20).
A escala é calculada: 36 px por segundo nos dois trechos, com quebra explícita
entre 09:59:38 e 09:59:58, intervalo sem eventos.

Uso: python3 tools/materials/figura31_linha_do_tempo_m01.py
"""
from pathlib import Path

OUT = Path(__file__).resolve().parents[2] / "docs/assets/a19-a20/figura31-linha-do-tempo-m01.svg"

W, H = 1200, 600
PX_S = 36
A0, A1 = (59 * 60 + 27), (59 * 60 + 38)          # 09:59:27–09:59:38
B0, B1 = (60 * 60 - 2), (60 * 60 + 14)            # 09:59:58–10:00:14
XA0 = 165
XA1 = XA0 + (A1 - A0) * PX_S                      # 561
XB0 = XA1 + 50                                    # quebra de 50 px
XB1 = XB0 + (B1 - B0) * PX_S                      # 1187

INK, MUTED, GRID = "#1f2933", "#5b6670", "#c5ccd3"
OK, NO = "#1a7f37", "#c62828"
WINDOW, BAND, NODATA = "#fff3d1", "#e3f2e6", "#eceff1"


def sec(hms):
    h, m, s = (int(p) for p in hms.split(":"))
    return (h - 9) * 3600 + m * 60 + s


def x(hms):
    t = sec(hms)
    if A0 <= t <= A1:
        return XA0 + (t - A0) * PX_S
    if B0 <= t <= B1:
        return XB0 + (t - B0) * PX_S
    raise ValueError(f"{hms} está na quebra do eixo")


ACC_Y = 200
LEVEL_Y = lambda pct: 470 - (pct - 40) * 5     # 40% → 470, 60% → 370
AXIS_Y = 515

events = [  # hora, aceito?, linhas, acima?, deslocamento horizontal da caixa
    ("09:59:30", True, ["VPN: autenticação", "aceita"], True, 0),
    ("09:59:35", False, ["Engenharia fora", "da janela: negado"], False, 0),
    ("10:00:02", False, ["Direto ao CLP:", "negado"], True, -40),
    ("10:00:04", True, ["Estação autorizada:", "aceito"], False, 0),
    ("10:00:06", True, ["Diagnóstico:", "aceito"], True, 40),
]
samples = [("10:00:00", 50), ("10:00:05", 51), ("10:00:10", 52)]

s = []
a = s.append
a(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" '
  f'font-family="Roboto, \'Helvetica Neue\', Arial, sans-serif" role="img" '
  f'aria-labelledby="t31 d31">')
a('<title id="t31">Imagem 31 — Linha do tempo M-01: acesso e processo no mesmo relógio</title>')
a('<desc id="d31">Raia de acesso: 09:59:30 autenticação VPN aceita; 09:59:35 engenharia fora da '
  'janela negado; 10:00:02 caminho direto ao CLP negado; 10:00:04 estação autorizada aceito; '
  '10:00:06 diagnóstico aceito. Raia de processo: nível 50% às 10:00:00, 51% às 10:00:05 e 52% às '
  '10:00:10, dentro da faixa de 40 a 60%. Janela M-01 a partir de 10:00. Sem dados após 10:00:10. '
  'Eixo interrompido entre 09:59:38 e 09:59:58, intervalo sem eventos.</desc>')
a(f'<rect width="{W}" height="{H}" fill="#ffffff"/>')

# janela M-01 (atravessa as duas raias)
xw = x("10:00:00")
a(f'<rect x="{xw}" y="70" width="{XB1 - xw}" height="{AXIS_Y - 70}" fill="{WINDOW}"/>')
a(f'<text x="{xw + 10}" y="92" font-size="17" font-weight="700" fill="{INK}">'
  f'Janela M-01 (10:00–10:15) →</text>')

# rótulos das raias
a(f'<text x="20" y="{ACC_Y + 6}" font-size="18" font-weight="700" fill="{INK}">Acesso</text>')
a(f'<text x="20" y="{LEVEL_Y(50) - 4}" font-size="18" font-weight="700" fill="{INK}">Processo</text>')
a(f'<text x="20" y="{LEVEL_Y(50) + 16}" font-size="13" fill="{MUTED}">nível do tanque</text>')

# faixa de operação 40–60% e marcas de escala
for (x0, x1) in ((XA0, XA1), (XB0, XB1)):
    a(f'<rect x="{x0}" y="{LEVEL_Y(60)}" width="{x1 - x0}" height="{LEVEL_Y(40) - LEVEL_Y(60)}" fill="{BAND}" opacity="0.85"/>')
for pct in (40, 60):
    a(f'<text x="{XA0 - 8}" y="{LEVEL_Y(pct) + 4}" font-size="12" text-anchor="end" fill="{MUTED}">{pct}%</text>')
a(f'<text x="{XA0 + 12}" y="{LEVEL_Y(50) + 5}" font-size="14" fill="{OK}" font-weight="600">faixa de operação 40–60%</text>')

# sem dados após 10:00:10
xn = x("10:00:10")
a('<defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
  f'<rect width="8" height="8" fill="{NODATA}"/><line x1="0" y1="0" x2="0" y2="8" stroke="#b0bec5" stroke-width="2"/></pattern></defs>')
a(f'<rect x="{xn + 8}" y="{LEVEL_Y(60) - 40}" width="{XB1 - xn - 8}" height="{LEVEL_Y(40) - LEVEL_Y(60) + 40}" fill="url(#hatch)"/>')
a(f'<rect x="{(xn + XB1) / 2 - 48}" y="{LEVEL_Y(60) - 38}" width="104" height="52" rx="4" fill="#ffffff" opacity="0.9"/>')
a(f'<text x="{(xn + XB1) / 2 + 4}" y="{LEVEL_Y(60) - 22}" font-size="13" text-anchor="middle" fill="{INK}" font-weight="600">sem dados</text>')
a(f'<text x="{(xn + XB1) / 2 + 4}" y="{LEVEL_Y(60) - 7}" font-size="12" text-anchor="middle" fill="{INK}">conclusão</text>')
a(f'<text x="{(xn + XB1) / 2 + 4}" y="{LEVEL_Y(60) + 8}" font-size="12" text-anchor="middle" fill="{INK}">não se estende</text>')

# linhas-base das raias
for (x0, x1) in ((XA0, XA1), (XB0, XB1)):
    a(f'<line x1="{x0}" y1="{ACC_Y}" x2="{x1}" y2="{ACC_Y}" stroke="{INK}" stroke-width="2"/>')
    a(f'<line x1="{x0}" y1="{AXIS_Y}" x2="{x1}" y2="{AXIS_Y}" stroke="{INK}" stroke-width="2"/>')

# quebra do eixo
xm = (XA1 + XB0) / 2
for yy in (ACC_Y, AXIS_Y):
    for dx in (-7, 3):
        a(f'<line x1="{xm + dx}" y1="{yy + 9}" x2="{xm + dx + 6}" y2="{yy - 9}" stroke="{INK}" stroke-width="2"/>')
a(f'<text x="{xm}" y="{AXIS_Y + 44}" font-size="12" text-anchor="middle" fill="{MUTED}">20 s sem eventos</text>')

# ticks do eixo
for hms in ("09:59:30", "09:59:35", "10:00:00", "10:00:05", "10:00:10"):
    xx = x(hms)
    a(f'<line x1="{xx}" y1="{AXIS_Y}" x2="{xx}" y2="{AXIS_Y + 7}" stroke="{INK}" stroke-width="2"/>')
    a(f'<line x1="{xx}" y1="110" x2="{xx}" y2="{AXIS_Y}" stroke="{GRID}" stroke-width="1" stroke-dasharray="3 4"/>')
    a(f'<text x="{xx}" y="{AXIS_Y + 26}" font-size="14" text-anchor="middle" fill="{INK}">{hms}</text>')
a(f'<text x="{(XA0 + XB1) / 2}" y="{AXIS_Y + 70}" font-size="15" text-anchor="middle" font-weight="700" fill="{INK}">'
  f'Horário — o mesmo relógio para acesso e processo</text>')

# eventos de acesso
for hms, ok, lines, above, dx in events:
    xx = x(hms)
    cxb = xx + dx
    color = OK if ok else NO
    bw, bh = 150, 62
    by = ACC_Y - 26 - bh if above else ACC_Y + 26
    ly0, ly1 = (by + bh, ACC_Y - 11) if above else (ACC_Y + 11, by)
    lx0 = cxb if above else xx
    a(f'<polyline points="{lx0},{ly0} {lx0},{ly0 + 8 if above else ly0} {xx},{ly1 - 0}" fill="none" stroke="{color}" stroke-width="2"/>' if above else
      f'<line x1="{xx}" y1="{ly0}" x2="{xx}" y2="{ly1}" stroke="{color}" stroke-width="2"/>')
    a(f'<rect x="{cxb - bw / 2}" y="{by}" width="{bw}" height="{bh}" rx="6" fill="#ffffff" stroke="{color}" stroke-width="2"/>')
    a(f'<text x="{cxb}" y="{by + 19}" font-size="13" font-weight="700" text-anchor="middle" fill="{INK}">{hms}</text>')
    for i, ln in enumerate(lines):
        a(f'<text x="{cxb}" y="{by + 37 + i * 16}" font-size="13" text-anchor="middle" fill="{INK}">{ln}</text>')
    a(f'<circle cx="{xx}" cy="{ACC_Y}" r="11" fill="{color}" stroke="#ffffff" stroke-width="2"/>')
    if ok:
        a(f'<path d="M{xx - 5} {ACC_Y} l3.5 4 l6.5 -8" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>')
    else:
        a(f'<path d="M{xx - 4.5} {ACC_Y - 4.5} l9 9 M{xx + 4.5} {ACC_Y - 4.5} l-9 9" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"/>')

# amostras do processo
pts = [(x(h), LEVEL_Y(v), v) for h, v in samples]
a('<polyline points="' + " ".join(f"{px},{py}" for px, py, _ in pts) + f'" fill="none" stroke="#1565c0" stroke-width="2"/>')
for px, py, v in pts:
    a(f'<circle cx="{px}" cy="{py}" r="7" fill="#1565c0" stroke="#ffffff" stroke-width="2"/>')
    a(f'<text x="{px}" y="{py - 14}" font-size="14" font-weight="700" text-anchor="middle" fill="{INK}">{v}%</text>')

# legenda
lx, ly = 20, 30
a(f'<circle cx="{lx + 9}" cy="{ly}" r="9" fill="{OK}"/><path d="M{lx + 5} {ly} l3 3.5 l5.5 -7" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>')
a(f'<text x="{lx + 24}" y="{ly + 5}" font-size="14" fill="{INK}">aceito</text>')
a(f'<circle cx="{lx + 99}" cy="{ly}" r="9" fill="{NO}"/><path d="M{lx + 95} {ly - 4} l8 8 M{lx + 103} {ly - 4} l-8 8" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>')
a(f'<text x="{lx + 114}" y="{ly + 5}" font-size="14" fill="{INK}">negado</text>')
a(f'<circle cx="{lx + 199}" cy="{ly}" r="7" fill="#1565c0"/>')
a(f'<text x="{lx + 212}" y="{ly + 5}" font-size="14" fill="{INK}">amostra de nível</text>')
a(f'<text x="{W - 20}" y="{ly + 5}" font-size="13" text-anchor="end" fill="{MUTED}">Dados artificiais do exemplo M-01</text>')

a("</svg>")
OUT.write_text("\n".join(s) + "\n", encoding="utf-8")
print(OUT)
