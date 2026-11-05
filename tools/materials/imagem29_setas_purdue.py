#!/usr/bin/env python3
"""Sobrepõe à base gerada da imagem 29 (A19) as setas de fluxo e a legenda.

Base: imagem do docente sem setas (5 nov. 2026), salva fora do repositório em /tmp/imagem29.png.
Saída: img29-overlay.png, depois reduzida a 256 cores em docs/assets/a19-a20/imagem29.png.
"""
from PIL import Image, ImageDraw, ImageFont
import math, sys
S=2
base=Image.open('/tmp/imagem29.png').convert('RGB')
im=base.resize((base.width*S, base.height*S), Image.LANCZOS)
d=ImageDraw.Draw(im)
G=(30,140,60); R=(205,30,30); W=7*S
F=lambda n: ImageFont.truetype('/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf', n*S)
def P(pts): return [(x*S,y*S) for x,y in pts]
def poly(pts,col,dash=False):
    pts=P(pts)
    for (x1,y1),(x2,y2) in zip(pts,pts[1:]):
        if not dash:
            d.line([(x1,y1),(x2,y2)],fill=col,width=W)
        else:
            L=math.hypot(x2-x1,y2-y1); n=int(L//(18*S))
            for i in range(0,n,2):
                a=i/n; b=min((i+1)/n,1)
                d.line([(x1+(x2-x1)*a,y1+(y2-y1)*a),(x1+(x2-x1)*b,y1+(y2-y1)*b)],fill=col,width=W)
    for (x,y) in pts[1:-1]:
        r=W/2; d.ellipse((x-r,y-r,x+r,y+r),fill=col)
def head(p_from,p_to,col):
    (x1,y1),(x2,y2)=P([p_from,p_to]); ang=math.atan2(y2-y1,x2-x1); L=26*S; w=14*S
    bx,by=x2-L*math.cos(ang),y2-L*math.sin(ang)
    d.polygon([(x2,y2),(bx+w*math.sin(ang),by-w*math.cos(ang)),(bx-w*math.sin(ang),by+w*math.cos(ang))],fill=col)
def badge(x,y,t,col):
    r=19*S; x*=S;y*=S
    d.ellipse((x-r,y-r,x+r,y+r),fill=col,outline=(255,255,255),width=3*S)
    f=F(24); w=d.textlength(t,font=f); d.text((x-w/2,y-17*S),t,font=f,fill=(255,255,255))
# arrow 1: historiador -> réplica through lower firewall icon (x~760)
a1=[(812,452),(758,452),(758,252),(818,252)]
poly(a1[:-1]+[(822,252)],G); head(a1[-2],(846,252),G)
badge(758,420,"1",G)
# arrow 2: réplica -> corporativo through upper firewall icon (x~722)
a2=[(846,214),(722,214),(722,150)]
poly(a2+[(722,140)],G); head((722,160),(722,120),G)
badge(722,240-50,"2",G) if False else None
badge(790,214,"2",G)
# red: corporativo -> CLP direto, stops at conduíte line with X
r=[(932,72),(1090,72),(1090,150)]
poly(r,R,dash=True)
x,y=1090*S,168*S; k=20*S
d.line([(x-k,y-k),(x+k,y+k)],fill=R,width=9*S); d.line([(x-k,y+k),(x+k,y-k)],fill=R,width=9*S)
# legend in DMZ right area
lx,ly=1030,200
box=(lx*S,ly*S,1645*S,322*S)
d.rounded_rectangle(box,radius=14*S,fill=(255,255,255),outline=(120,120,120),width=2*S)
f=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 21*S)
rows=[("1",G,"historiador envia à réplica"),("2",G,"corporativo lê a réplica"),("x",R,"corporativo → CLP direto: negado")]
for i,(t,col,txt) in enumerate(rows):
    cy=ly+24+i*38
    if t=="x":
        cx=lx+30; kk=11
        d.line([((cx-kk)*S,(cy-kk)*S),((cx+kk)*S,(cy+kk)*S)],fill=col,width=6*S); d.line([((cx-kk)*S,(cy+kk)*S),((cx+kk)*S,(cy-kk)*S)],fill=col,width=6*S)
    else:
        rr=15*S; cx=(lx+30)*S
        d.ellipse((cx-rr,cy*S-rr,cx+rr,cy*S+rr),fill=col)
        ff=F(19); w=d.textlength(t,font=ff); d.text((cx-w/2,cy*S-14*S),t,font=ff,fill=(255,255,255))
    d.text(((lx+58)*S,(cy-16)*S),txt,font=f,fill=(25,25,25))
out=im.resize(base.size, Image.LANCZOS)
out.save('img29-overlay.png')
