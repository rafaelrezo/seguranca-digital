import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pptxgen = require("pptxgenjs");
import {
  AlignmentType,
  Document,
  Footer,
  HeadingLevel,
  Packer,
  PageBreak,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const slideDir = resolve(root, "slides/_template/fonte");
const activityDir = resolve(root, "atividades/_template/fonte");
await mkdir(slideDir, { recursive: true });
await mkdir(activityDir, { recursive: true });

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Curso de Segurança Digital";
pptx.subject = "Template de aula para Engenharia de Controle e Automação";
pptx.title = "Template — Segurança Digital TI/OT";
pptx.company = "IFES";
pptx.lang = "pt-BR";
pptx.theme = {
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  lang: "pt-BR",
};

const C = { navy: "102A43", blue: "1677FF", cyan: "16C1B7", amber: "FFB020", red: "E5484D", paper: "F5F8FC", ink: "172B4D", white: "FFFFFF", grey: "65758B", line: "D7E0EA" };
const addFooter = (s, id = "Axx") => {
  s.addShape(pptx.ShapeType.line, { x: 0.55, y: 7.12, w: 12.2, h: 0, line: { color: C.line, width: 1 } });
  s.addText(`${id}  •  Segurança Digital para Controle e Automação`, { x: 0.6, y: 7.16, w: 8.3, h: 0.2, fontFace: "Arial", fontSize: 10, color: C.grey, margin: 0 });
  s.addText("FONTE: inserir referência curta", { x: 9.1, y: 7.16, w: 3.6, h: 0.2, fontFace: "Arial", fontSize: 9, color: C.grey, align: "right", margin: 0 });
};
const title = (s, kicker, heading, subtitle = "") => {
  s.addText(kicker.toUpperCase(), { x: 0.65, y: 0.5, w: 4.5, h: 0.25, fontSize: 11, bold: true, color: C.cyan, charSpacing: 1.2, margin: 0 });
  s.addText(heading, { x: 0.65, y: 0.87, w: 11.8, h: 0.72, fontSize: 29, bold: true, color: C.navy, breakLine: false, margin: 0.02, fit: "shrink" });
  if (subtitle) s.addText(subtitle, { x: 0.67, y: 1.66, w: 11.4, h: 0.42, fontSize: 15, color: C.grey, margin: 0, fit: "shrink" });
};

{
  const s = pptx.addSlide();
  s.background = { color: C.navy };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.22, h: 7.5, fill: { color: C.cyan }, line: { color: C.cyan } });
  s.addText("Axx  •  UNIDADE", { x: 0.75, y: 0.72, w: 4.8, h: 0.3, fontSize: 12, bold: true, color: C.cyan, charSpacing: 1.5, margin: 0 });
  s.addText("Título orientado ao problema", { x: 0.75, y: 1.38, w: 7.4, h: 1.6, fontSize: 34, bold: true, color: C.white, margin: 0, breakLine: false, fit: "shrink" });
  s.addText("Uma pergunta que conecta evidência, processo e decisão de engenharia.", { x: 0.78, y: 3.25, w: 6.9, h: 0.8, fontSize: 18, color: "DCE7F5", margin: 0, fit: "shrink" });
  s.addShape(pptx.ShapeType.roundRect, { x: 9.05, y: 1.25, w: 3.1, h: 3.1, rectRadius: 0.08, fill: { color: "173F5F", transparency: 5 }, line: { color: C.cyan, width: 2 } });
  s.addText("EVIDÊNCIA\nINICIAL", { x: 9.4, y: 2.05, w: 2.4, h: 0.9, fontSize: 22, bold: true, color: C.white, align: "center", valign: "mid", margin: 0 });
  s.addText("2 × 52 min  •  teoria + prática", { x: 0.78, y: 6.55, w: 4.2, h: 0.3, fontSize: 12, color: "B9CBE0", margin: 0 });
  s.addNotes("Abra com a evidência, não com definições. Pergunte o que os estudantes observam e qual hipótese explicaria o cenário.");
}

{
  const s = pptx.addSlide(); s.background = { color: C.paper }; title(s, "Cenário", "Você está na sala de controle", "Apresente atores, sistema, restrições e consequência operacional.");
  const cards = [["O que aconteceu?", C.red], ["O que está em risco?", C.amber], ["Que decisão é necessária?", C.blue]];
  cards.forEach(([t, color], i) => { const x = 0.7 + i * 4.15; s.addShape(pptx.ShapeType.roundRect, { x, y: 2.45, w: 3.72, h: 2.65, fill: { color: C.white }, line: { color, width: 2 }, radius: 0.06 }); s.addShape(pptx.ShapeType.rect, { x, y: 2.45, w: 3.72, h: 0.12, fill: { color }, line: { color } }); s.addText(t, { x: x + 0.25, y: 2.82, w: 3.2, h: 0.48, fontSize: 20, bold: true, color: C.navy, margin: 0 }); s.addText("Substitua por fatos curtos do cenário. Não antecipe a solução.", { x: x + 0.25, y: 3.55, w: 3.15, h: 0.95, fontSize: 15, color: C.ink, margin: 0.02, fit: "shrink" }); }); addFooter(s);
  s.addNotes("Dê 60 segundos para leitura silenciosa e depois peça uma dúvida por dupla.");
}

{
  const s = pptx.addSlide(); s.background = { color: C.white }; title(s, "Observe", "O que esta evidência permite afirmar?", "Separar observação de inferência antes de apresentar o conceito.");
  s.addShape(pptx.ShapeType.roundRect, { x: 0.75, y: 2.35, w: 7.25, h: 3.65, fill: { color: "EAF1F8" }, line: { color: C.line, width: 1.5 } });
  s.addText("CAPTURA • LOG • DIAGRAMA • PACOTE", { x: 1.4, y: 3.75, w: 5.9, h: 0.5, fontSize: 21, bold: true, color: C.grey, align: "center", margin: 0 });
  s.addText("1", { x: 8.7, y: 2.45, w: 0.45, h: 0.45, fontSize: 20, bold: true, color: C.white, align: "center", valign: "mid", fill: { color: C.blue }, margin: 0 });
  s.addText("Anote duas observações", { x: 9.3, y: 2.45, w: 3.15, h: 0.4, fontSize: 17, bold: true, color: C.navy, margin: 0 });
  s.addText("2", { x: 8.7, y: 3.55, w: 0.45, h: 0.45, fontSize: 20, bold: true, color: C.white, align: "center", valign: "mid", fill: { color: C.cyan }, margin: 0 });
  s.addText("Formule uma hipótese", { x: 9.3, y: 3.55, w: 3.15, h: 0.4, fontSize: 17, bold: true, color: C.navy, margin: 0 });
  s.addText("3", { x: 8.7, y: 4.65, w: 0.45, h: 0.45, fontSize: 20, bold: true, color: C.white, align: "center", valign: "mid", fill: { color: C.amber }, margin: 0 });
  s.addText("Diga o que falta provar", { x: 9.3, y: 4.65, w: 3.15, h: 0.4, fontSize: 17, bold: true, color: C.navy, margin: 0 }); addFooter(s);
  s.addNotes("Não confirme respostas imediatamente. Colete hipóteses concorrentes no quadro.");
}

{
  const s = pptx.addSlide(); s.background = { color: C.paper }; title(s, "Conceito", "Um mecanismo, três consequências", "Explique somente o necessário para interpretar a evidência e agir.");
  const nodes = [["EVIDÊNCIA", 0.75, C.blue], ["CONCEITO", 4.65, C.cyan], ["IMPACTO", 8.55, C.red]];
  nodes.forEach(([t, x, color]) => { s.addShape(pptx.ShapeType.roundRect, { x, y: 2.75, w: 3.05, h: 1.35, fill: { color }, line: { color } }); s.addText(t, { x: x + 0.2, y: 3.15, w: 2.65, h: 0.4, fontSize: 19, bold: true, color: C.white, align: "center", margin: 0 }); });
  s.addShape(pptx.ShapeType.chevron, { x: 3.9, y: 3.08, w: 0.55, h: 0.65, fill: { color: C.grey }, line: { color: C.grey } }); s.addShape(pptx.ShapeType.chevron, { x: 7.8, y: 3.08, w: 0.55, h: 0.65, fill: { color: C.grey }, line: { color: C.grey } });
  s.addText("Insira abaixo uma definição operacional curta e um exemplo conectado ao cenário.", { x: 1.3, y: 4.75, w: 10.7, h: 0.65, fontSize: 17, color: C.ink, align: "center", margin: 0 }); addFooter(s);
}

{
  const s = pptx.addSlide(); s.background = { color: C.white }; title(s, "Compare", "Escolher controle exige contexto", "Use dimensões comuns e termine com uma recomendação condicionada.");
  const rows = [
    [{ text: "OPÇÃO" }, { text: "MELHOR USO" }, { text: "EVIDÊNCIA" }, { text: "LIMITAÇÃO" }],
    [{ text: "Controle A" }, { text: "Cenário adequado" }, { text: "Como validar" }, { text: "Trade-off" }],
    [{ text: "Controle B" }, { text: "Cenário adequado" }, { text: "Como validar" }, { text: "Trade-off" }],
    [{ text: "Controle C" }, { text: "Cenário adequado" }, { text: "Como validar" }, { text: "Trade-off" }],
  ];
  s.addTable(rows, { x: 0.75, y: 2.35, w: 11.85, h: 3.2, border: { type: "solid", color: C.line, width: 1 }, fill: C.white, color: C.ink, fontSize: 14, margin: 0.12, rowH: 0.75, bold: false, valign: "mid", autoFit: false });
  s.addText("Decisão: se ________, prefira ________ porque ________.", { x: 0.92, y: 5.9, w: 11.3, h: 0.45, fontSize: 17, bold: true, color: C.navy, margin: 0 }); addFooter(s);
}

{
  const s = pptx.addSlide(); s.background = { color: C.navy }; s.addText("PARE • PENSE • DECIDA", { x: 0.8, y: 0.7, w: 5.5, h: 0.35, fontSize: 12, bold: true, color: C.cyan, charSpacing: 2, margin: 0 });
  s.addText("Qual ação reduz o risco sem comprometer o processo?", { x: 0.8, y: 1.45, w: 10.9, h: 1.35, fontSize: 32, bold: true, color: C.white, margin: 0, fit: "shrink" });
  ["A", "B", "C"].forEach((label, i) => { const y = 3.2 + i * 0.95; s.addShape(pptx.ShapeType.ellipse, { x: 1.1, y, w: 0.55, h: 0.55, fill: { color: i === 0 ? C.blue : i === 1 ? C.cyan : C.amber }, line: { color: C.white, transparency: 100 } }); s.addText(label, { x: 1.1, y: y + 0.08, w: 0.55, h: 0.25, fontSize: 15, bold: true, color: C.white, align: "center", margin: 0 }); s.addText(`Alternativa ${label}: inclua um trade-off real`, { x: 1.9, y: y + 0.02, w: 8.9, h: 0.45, fontSize: 18, color: C.white, margin: 0 }); });
  s.addText("Converse em dupla por 90 segundos. Prepare uma justificativa, não apenas uma letra.", { x: 0.85, y: 6.55, w: 11.4, h: 0.35, fontSize: 14, color: "B9CBE0", margin: 0 }); s.addNotes("Aceite mais de uma resposta quando as premissas forem explícitas. Registre o critério decisivo.");
}

{
  const s = pptx.addSlide(); s.background = { color: C.paper }; title(s, "Demonstração", "Preveja antes de executar", "A demonstração precisa de objetivo, critério de sucesso e plano alternativo.");
  const steps = [["1", "PREVER", "O que esperamos observar?"], ["2", "EXECUTAR", "Uma mudança por vez"], ["3", "VALIDAR", "Que evidência confirma?"], ["4", "REVERTER", "Como voltar ao estado seguro?"]];
  steps.forEach(([n, h, b], i) => { const x = 0.75 + i * 3.05; s.addShape(pptx.ShapeType.roundRect, { x, y: 2.4, w: 2.65, h: 3.0, fill: { color: C.white }, line: { color: i === 3 ? C.red : C.line, width: i === 3 ? 2 : 1 } }); s.addText(n, { x: x + 0.2, y: 2.65, w: 0.55, h: 0.55, fontSize: 20, bold: true, color: C.white, align: "center", valign: "mid", fill: { color: i === 3 ? C.red : C.blue }, margin: 0 }); s.addText(h, { x: x + 0.22, y: 3.45, w: 2.15, h: 0.35, fontSize: 16, bold: true, color: C.navy, margin: 0 }); s.addText(b, { x: x + 0.22, y: 4.1, w: 2.15, h: 0.75, fontSize: 14, color: C.ink, margin: 0, fit: "shrink" }); }); addFooter(s);
  s.addNotes("Se o ambiente falhar, use capturas ou PCAP previamente validados. Não improvise em alvo externo.");
}

{
  const s = pptx.addSlide(); s.background = { color: C.white }; title(s, "Ponte para a prática", "Sua missão nos próximos 52 minutos", "O PDF contém escopo, etapas, evidências e critérios de entrega.");
  s.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 2.25, w: 7.45, h: 3.7, fill: { color: "EAF7F6" }, line: { color: C.cyan, width: 2 } });
  s.addText("MISSÃO", { x: 1.2, y: 2.7, w: 1.8, h: 0.3, fontSize: 14, bold: true, color: C.cyan, charSpacing: 1.2, margin: 0 }); s.addText("Investigue, decida, intervenha e prove o resultado.", { x: 1.2, y: 3.25, w: 6.25, h: 1.0, fontSize: 25, bold: true, color: C.navy, margin: 0, fit: "shrink" });
  s.addText("ENTREGUE", { x: 9.0, y: 2.55, w: 2.8, h: 0.3, fontSize: 13, bold: true, color: C.blue, margin: 0 }); s.addText("1 hipótese\n2 evidências\n1 decisão justificada", { x: 9.0, y: 3.1, w: 3.1, h: 1.6, fontSize: 20, bold: true, color: C.navy, breakLine: false, margin: 0.02 });
  s.addText("Escopo autorizado • dados fictícios • limpeza obrigatória", { x: 9.0, y: 5.15, w: 3.15, h: 0.55, fontSize: 12, color: C.red, margin: 0 }); addFooter(s);
}

{
  const s = pptx.addSlide(); s.background = { color: C.paper }; title(s, "Síntese", "Da evidência à resiliência", "Retome o percurso e deixe uma pergunta aberta para transferência.");
  const labels = [["OBSERVAR", C.blue], ["EXPLICAR", C.cyan], ["AGIR", C.amber], ["VALIDAR", C.red]];
  labels.forEach(([t, color], i) => { const x = 0.75 + i * 3.05; s.addShape(pptx.ShapeType.roundRect, { x, y: 2.65, w: 2.65, h: 1.15, fill: { color }, line: { color } }); s.addText(t, { x: x + 0.2, y: 3.02, w: 2.25, h: 0.35, fontSize: 18, bold: true, color: C.white, align: "center", margin: 0 }); if (i < 3) s.addShape(pptx.ShapeType.chevron, { x: x + 2.72, y: 2.98, w: 0.25, h: 0.5, fill: { color: C.grey }, line: { color: C.grey } }); });
  s.addText("Em outro processo industrial, o que mudaria na decisão?", { x: 1.15, y: 4.75, w: 10.7, h: 0.75, fontSize: 24, bold: true, color: C.navy, align: "center", margin: 0 }); addFooter(s);
}

{
  const s = pptx.addSlide(); s.background = { color: C.white }; title(s, "Referências", "Continue investigando", "A página MkDocs contém a explicação completa; estas fontes servem para aprofundamento.");
  const refs = ["NIST / CISA — publicação oficial e versão", "OWASP / MITRE — projeto e edição vigente", "Documentação oficial da ferramenta utilizada"];
  refs.forEach((r, i) => { s.addText(String(i + 1).padStart(2, "0"), { x: 0.85, y: 2.25 + i * 1.05, w: 0.55, h: 0.4, fontSize: 15, bold: true, color: C.cyan, margin: 0 }); s.addText(r, { x: 1.6, y: 2.22 + i * 1.05, w: 10.35, h: 0.45, fontSize: 17, color: C.ink, margin: 0 }); });
  s.addShape(pptx.ShapeType.roundRect, { x: 0.85, y: 5.75, w: 11.3, h: 0.65, fill: { color: C.navy }, line: { color: C.navy } }); s.addText("Próximo passo  →  abra o roteiro da prática no Google Classroom", { x: 1.2, y: 5.96, w: 10.5, h: 0.3, fontSize: 16, bold: true, color: C.white, align: "center", margin: 0 }); addFooter(s);
}

await pptx.writeFile({ fileName: resolve(slideDir, "template-seguranca-digital.pptx") });

const heading = (text, level = HeadingLevel.HEADING_1) => new Paragraph({ text, heading: level, spacing: { before: 220, after: 100 }, keepNext: true });
const body = (text, options = {}) => new Paragraph({ children: [new TextRun(text)], spacing: { after: 110, line: 300 }, ...options });
const box = (label, text, color) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [new TableRow({ children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: color }, margins: { top: 140, bottom: 140, left: 180, right: 180 }, children: [new Paragraph({ children: [new TextRun({ text: label.toUpperCase(), bold: true, color: "FFFFFF", size: 20 })], spacing: { after: 70 } }), new Paragraph({ children: [new TextRun({ text, color: "FFFFFF", size: 22 })] })] })] })] });

const doc = new Document({
  creator: "Curso de Segurança Digital",
  title: "Template de atividade prática",
  description: "Roteiro autocontido para atividades de Segurança Digital TI/OT",
  styles: { default: { document: { run: { font: "Arial", size: 24, color: "172B4D" }, paragraph: { spacing: { line: 320 } } } }, paragraphStyles: [
    { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 42, bold: true, color: "102A43" }, paragraph: { spacing: { after: 200 } } },
    { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 31, bold: true, color: "102A43" }, paragraph: { spacing: { before: 260, after: 100 }, outlineLevel: 0 } },
    { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 27, bold: true, color: "0B65C2" }, paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 1 } },
  ] },
  sections: [{
    properties: { page: { margin: { top: 900, right: 900, bottom: 900, left: 900 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Axx • Segurança Digital • roteiro do estudante", color: "65758B", size: 16 })] })] }) },
    children: [
      new Paragraph({ text: "Axx • UNIDADE", style: "Subtitle" }),
      new Paragraph({ text: "Título da missão prática", style: "Title" }),
      body("Uma frase curta apresenta o problema sem antecipar a solução."),
      new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [new TableRow({ children: ["Duração\n52 minutos", "Organização\nduplas", "Entrega\num arquivo por dupla"].map((t) => new TableCell({ shading: { type: ShadingType.CLEAR, fill: "EAF1F8" }, margins: { top: 120, bottom: 120, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: "102A43" })], alignment: AlignmentType.CENTER })] })) })] }),
      heading("Missão"),
      body("Descreva o papel profissional do grupo, o sistema, o evento e a decisão que precisa ser tomada."),
      heading("Objetivos de aprendizagem"),
      ...["Investigar uma evidência e formular hipótese verificável.", "Aplicar o conceito da aula para escolher uma intervenção.", "Validar e comunicar o resultado com evidências."].map((t) => new Paragraph({ text: t, bullet: { level: 0 }, spacing: { after: 70 } })),
      heading("Pré-requisitos e recursos"),
      body("Liste ambiente, arquivos, ferramentas, contas e conhecimento prévio. Inclua alternativa local quando houver AWS."),
      box("Atenção", "Execute somente no ambiente fornecido. Não use credenciais reais, não teste terceiros e interrompa a atividade diante de comportamento inesperado.", "E5484D"),
      heading("Antes de executar"),
      heading("Hipótese inicial", HeadingLevel.HEADING_2),
      body("Registre o que você espera observar, por que isso deveria acontecer e qual evidência confirmaria ou refutaria sua hipótese."),
      heading("Etapa 1 — Preparar e verificar (10 min)", HeadingLevel.HEADING_2),
      body("Confirme o alvo autorizado, registre o estado inicial e execute o teste de prontidão. Não avance se a verificação falhar."),
      box("Evidência", "Registre somente o necessário para demonstrar o estado inicial. Remova tokens, credenciais, IPs públicos e dados pessoais.", "1677FF"),
      heading("Etapa 2 — Investigar (15 min)", HeadingLevel.HEADING_2),
      body("Observe o ambiente, execute uma mudança por vez e relacione cada ação à hipótese. Explique resultados inesperados."),
      box("Pista", "Ofereça uma pista conceitual progressiva sem entregar o comando ou a resposta completa.", "16C1B7"),
      heading("Etapa 3 — Decidir e intervir (15 min)", HeadingLevel.HEADING_2),
      body("Compare alternativas, declare o trade-off e aplique a intervenção escolhida de forma reversível."),
      box("Decisão", "Escolha um controle e justifique por que ele é adequado ao risco, ao processo e às restrições do cenário.", "FFB020"),
      heading("Etapa 4 — Validar e encerrar (12 min)", HeadingLevel.HEADING_2),
      body("Repita a medição, compare antes e depois, restaure o ambiente e confirme que não restaram recursos ou cobranças."),
      new Paragraph({ children: [new PageBreak()] }),
      heading("Entrega"),
      body("Envie no Google Classroom um único arquivo nomeado Axx-grupo.ext contendo hipótese, duas evidências interpretadas, decisão, resultado da validação e reflexão."),
      heading("Critérios de sucesso"),
      new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [
        new TableRow({ tableHeader: true, children: ["Critério", "Atendeu", "Parcial", "Ainda não"].map((t) => new TableCell({ shading: { type: ShadingType.CLEAR, fill: "102A43" }, children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: "FFFFFF" })] })] })) }),
        ...[["Hipótese", "Clara e testável", "Clara, mas incompleta", "Ausente ou genérica"], ["Evidência", "Suficiente e interpretada", "Presente, pouco interpretada", "Ausente ou sem relação"], ["Decisão", "Justificada por risco e contexto", "Justificativa parcial", "Sem justificativa"], ["Validação", "Compara antes/depois", "Validação incompleta", "Não validou"]].map((row) => new TableRow({ children: row.map((t) => new TableCell({ margins: { top: 90, bottom: 90, left: 90, right: 90 }, children: [new Paragraph(t)] })) }))
      ] }),
      heading("Limpeza obrigatória"),
      ...["Encerre containers, VMs e processos usados.", "Remova recursos de nuvem e confirme ausência de cobrança ativa.", "Apague segredos descartáveis e preserve apenas evidências sanitizadas.", "Restaure o processo ao estado seguro documentado."].map((t) => new Paragraph({ text: t, bullet: { level: 0 }, spacing: { after: 70 } })),
      heading("Reflexão e transferência"),
      body("O que mudaria se o mesmo problema ocorresse em uma planta real? Qual controle continuaria válido e qual exigiria adaptação?"),
      heading("Fontes para aprofundamento"),
      body("Inclua somente fontes oficiais. O conteúdo indispensável deve estar na página MkDocs da aula."),
    ],
  }],
});

await writeFile(resolve(activityDir, "template-atividade-pratica.docx"), await Packer.toBuffer(doc));
