import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
import {
  AlignmentType, BorderStyle, Document, Footer, HeadingLevel, Packer,
  PageBreak, Paragraph, ShadingType, Table, TableCell, TableRow,
  TextRun, WidthType,
} from "docx";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const out = resolve(root, "roteiros", "A02-ativos-ameacas-e-vulnerabilidades");
await Promise.all([mkdir(resolve(out, "fonte"), { recursive: true }), mkdir(resolve(out, "pdf"), { recursive: true })]);

const C = { navy:"12304A", blue:"0B65C2", cyan:"087F7A", amber:"B75D00", red:"B42318", green:"26734D", paper:"EEF3F7", ink:"172B4D", grey:"4B5E71", white:"FFFFFF", line:"C9D4DF" };
const H = (text, level=HeadingLevel.HEADING_1) => new Paragraph({ text, heading:level, keepNext:true });
const P = (text, opts={}) => new Paragraph({ children:[new TextRun({ text, size:23, color:C.ink })], spacing:{ after:110, line:315 }, ...opts });
const bullet = (text, level=0) => new Paragraph({ children:[new TextRun({ text, size:23, color:C.ink })], bullet:{ level }, spacing:{ after:75, line:305 } });
const Cell = (text, fill="FFFFFF", bold=false, color=C.ink, width) => new TableCell({
  width: width ? { size:width, type:WidthType.DXA } : undefined,
  shading:{ type:ShadingType.CLEAR, fill },
  margins:{ top:110, bottom:110, left:140, right:140 },
  borders:{ top:{style:BorderStyle.SINGLE,size:4,color:C.line}, bottom:{style:BorderStyle.SINGLE,size:4,color:C.line}, left:{style:BorderStyle.SINGLE,size:4,color:C.line}, right:{style:BorderStyle.SINGLE,size:4,color:C.line} },
  children:[new Paragraph({ children:[new TextRun({ text, bold, color, size:21 })], spacing:{ after:0, line:285 } })],
});
const table = (headers, rows, widths) => new Table({ width:{size:10300,type:WidthType.DXA}, columnWidths:widths, rows:[
  new TableRow({ tableHeader:true, children:headers.map((h,i)=>Cell(h,C.navy,true,C.white,widths[i])) }),
  ...rows.map(r=>new TableRow({ children:r.map((v,i)=>Cell(v,"FFFFFF",false,C.ink,widths[i])) })),
]});
const box = (label, text, color) => new Table({ width:{size:100,type:WidthType.PERCENTAGE}, rows:[new TableRow({ children:[new TableCell({
  shading:{type:ShadingType.CLEAR,fill:color}, margins:{top:140,bottom:140,left:180,right:180},
  children:[new Paragraph({children:[new TextRun({text:label.toUpperCase(),bold:true,color:C.white,size:22})],spacing:{after:65}}),new Paragraph({children:[new TextRun({text,color:C.white,size:23})],spacing:{line:310}})]
})]})]});
const page = () => new Paragraph({ children:[new PageBreak()] });

const children = [
  new Paragraph({ children:[new TextRun({text:"ROTEIRO DOCENTE • A02",bold:true,color:C.cyan,size:23})], spacing:{after:130} }),
  new Paragraph({text:"O que realmente está exposto?",style:"Title"}),
  new Paragraph({children:[new TextRun({text:"Ativos, ameaças e vulnerabilidades",bold:true,color:C.blue,size:28})],spacing:{after:180}}),
  P("Guia de condução para um encontro de 104 minutos que parte de uma resposta HTTP observável, constrói vocabulário técnico somente quando necessário e termina com um registro de vulnerabilidade defensável."),
  table(["Carga","Turma","Cenário","Produto"],[["52 min conceituais + 52 min práticos","duplas com papéis rotativos","OWASP Juice Shop local e autorizado","inventário + ticket + reteste"]],[2200,2500,2800,2800]),
  H("Visão do encontro"),
  P("A equipe de uma empresa fictícia acaba de disponibilizar uma loja de testes. O catálogo funciona, mas uma requisição retorna um arquivo que deveria permanecer interno. A turma não recebe imediatamente o diagnóstico. Ela precisa estabelecer o que foi observado, identificar os ativos envolvidos, formular hipóteses de fraqueza e justificar qual consequência merece prioridade."),
  P("A aula desloca o foco da obtenção de uma flag para uma tarefa profissional: produzir evidência que outra equipe consiga revisar e retestar. O Juice Shop dá concretude à situação, mas não é o objetivo final. O resultado é a capacidade de conectar evidência, conceito, impacto, ação e validação."),
  box("Pergunta mobilizadora","O servidor entregou um recurso com HTTP 200. O que podemos afirmar, o que ainda é hipótese e qual consequência justifica agir primeiro?",C.blue),
  H("Resultados observáveis"),
  bullet("Inventariar ativos de TI e OT relacionando função, responsável, dependências e consequência."),
  bullet("Distinguir ameaça, fraqueza, vulnerabilidade, exposição, exploit, CWE e CVE no mesmo caso."),
  bullet("Produzir um registro com evidência interpretada, prioridade, controle condicionado e reteste verificável."),

  page(), H("1. Preparação do professor"),
  H("Ambiente e materiais",HeadingLevel.HEADING_2),
  bullet("Abrir a apresentação A02 e testar a legibilidade no projetor."),
  bullet("Disponibilizar o PDF prático no Classroom, mas pedir que a turma não avance antes da transição do slide 8."),
  bullet("Executar o Juice Shop somente no laboratório local. Anotar no quadro o protocolo, host e porta autorizados."),
  bullet("Confirmar que DevTools permite observar a requisição. Burp Community é opcional e não deve ser pré-requisito."),
  bullet("Validar a rota escolhida na versão instalada. Não assumir que telas e desafios permanecem iguais entre versões."),
  bullet("Manter a evidência alternativa do roteiro pronta: requisição fictícia, resposta 200 e tipo de conteúdo."),
  H("Checklist cinco minutos antes",HeadingLevel.HEADING_2),
  table(["Verificação","Pronto quando...","Se falhar..."],[
    ["Alvo","URL local abre e não está exposta à Internet","usar evidência alternativa"],
    ["Estado","container reiniciado com dados fictícios","restaurar snapshot ou seguir offline"],
    ["Projetor","texto e rodapés são legíveis","usar PDF local"],
    ["Entrega","roteiro está acessível à turma","distribuir cópia local"],
    ["Segurança","critério de parada e canal de aviso definidos","não iniciar a exploração"],
  ],[2300,4000,4000]),
  box("Critério de parada","Interromper diante de destino divergente, dados reais, efeito fora do container, comportamento instável ou qualquer tentativa contra sistema público, institucional ou de terceiro.",C.red),
  H("Organização da sala",HeadingLevel.HEADING_2),
  P("Forme duplas. O investigador opera o navegador; o revisor confere o alvo, registra evidências e questiona inferências. Após a primeira observação, os papéis são trocados. Essa divisão evita que apenas quem usa a ferramenta participe e torna a contribuição individual observável."),

  page(), H("2. Narrativa e conceitos essenciais"),
  H("Contexto profissional ampliado",HeadingLevel.HEADING_2),
  P("A empresa fictícia prepara uma demonstração comercial. Durante a revisão, alguém percebe que uma URL entrega um documento usado no processo de aquisição. Não se sabe ainda se houve publicação indevida, autorização ausente, erro de empacotamento ou apenas interpretação incorreta da finalidade do arquivo. Também não se sabe quem acessou, com que intenção ou por quanto tempo o recurso esteve disponível."),
  P("A equipe precisa decidir se interrompe a demonstração, remove o recurso, restringe o acesso ou apenas aumenta o monitoramento. Uma decisão apressada pode quebrar uma função legítima; uma decisão tardia pode prolongar a exposição. Por isso, o inventário e a consequência precedem a escolha do controle."),
  H("Modelo de resposta que o professor deve construir",HeadingLevel.HEADING_2),
  table(["Elemento","Pergunta","Exemplo no cenário"],[
    ["Evidência","o que ocorreu diretamente?","o servidor entregou o recurso naquela requisição"],
    ["Ativo","o que possui valor ou sustenta a missão?","arquivo, dados, aplicação, rota e plataforma"],
    ["Fraqueza","que condição pode originar falhas?","publicação indevida ou autorização insuficiente — ainda hipótese"],
    ["Vulnerabilidade","qual instância concreta pode ser explorada?","recurso interno acessível fora da política esperada"],
    ["Exposição","por qual caminho é alcançável?","rota HTTP servida pela aplicação"],
    ["Ameaça","quem ou o que pode causar dano?","usuário não autorizado, erro operacional ou automação"],
    ["Exploit","qual técnica usa a vulnerabilidade?","requisição construída; nem sempre exige código"],
    ["Controle","como prevenir, limitar, detectar ou corrigir?","remover, autorizar, minimizar e monitorar"],
  ],[1900,3500,4900]),
  box("Distinção crítica","CWE descreve classes de fraqueza. CVE identifica vulnerabilidades específicas publicadas. Não atribua um CVE ao desafio didático sem uma fonte que sustente a correspondência.",C.amber),
  H("Transferência para OT",HeadingLevel.HEADING_2),
  P("Ao comparar com uma HMI ou controlador, acrescente disponibilidade do processo, qualidade, ambiente e safety. A remoção imediata de um recurso ou isolamento de um componente pode reduzir risco cibernético e simultaneamente retirar visibilidade necessária ao estado seguro. A resposta deve envolver autoridade operacional e janela de manutenção."),

  H("3. Condução dos slides — 0 a 52 minutos"),
  table(["Tempo/slide","Ação do professor","Participação e evidência"],[
    ["0–5 • Slide 1","mostrar HTTP 200 sem diagnosticar; pedir o que a tela mostra e não mostra","duas observações; professor separa fato e interpretação no quadro"],
    ["5–10 • Slide 2","apresentar papel profissional, alvo, restrições e entrega","turma repete o escopo e indica um critério de parada"],
    ["10–17 • Slide 3","solicitar previsão individual antes da explicação","duas observações, um ativo, uma hipótese e uma lacuna"],
    ["17–28 • Slide 4","construir inventário por função e consequência, incluindo OT","uma linha priorizada com justificativa"],
    ["28–40 • Slide 5","classificar os termos usando sempre a mesma evidência","cadeia ativo–fraqueza–vulnerabilidade–exposição–ameaça"],
    ["40–47 • Slide 6","votação argumentada: remover, autorizar ou monitorar","decisão com premissa e evidência de reteste"],
    ["47–50 • Slide 7","demonstrar o ciclo confirmar–prever–observar–registrar–validar","previsão do resultado antes da requisição"],
    ["50–52 • Slides 8–9","explicar produto, transição e síntese","duplas assumem papéis e abrem o roteiro"],
  ],[1800,4850,3650]),
  H("Falas e perguntas úteis",HeadingLevel.HEADING_2),
  bullet("Slide 1: “Leiam como analistas. Qual palavra da resposta é fato e qual conclusão vocês ainda não podem escrever?”"),
  bullet("Slide 3: “Que nova evidência faria você abandonar sua hipótese?”"),
  bullet("Slide 4: “Se retirarmos esse ativo, qual processo deixa de funcionar e quem percebe primeiro?”"),
  bullet("Slide 5: “A frase descreve uma classe de erro ou uma instância concreta em um produto?”"),
  bullet("Slide 6: “Complete: se a função do recurso for ___, escolhemos ___ e comprovamos por ___.”"),
  H("O que não antecipar",HeadingLevel.HEADING_2),
  bullet("Não declarar a causa do acesso antes da observação da arquitetura."),
  bullet("Não revelar caminhos adicionais, respostas de desafios ou uma sequência de cliques."),
  bullet("Não aceitar “é vulnerável porque deu 200” como explicação completa."),
  bullet("Não transformar a taxonomia em lista para memorização; cada termo deve responder a uma pergunta do caso."),

  page(), H("4. Mediação da prática — 52 a 104 minutos"),
  table(["Tempo","Missão da dupla","Intervenção do professor","Evidência"],[
    ["52–60","confirmar alvo, papéis e hipótese","verificar endereço antes de qualquer acesso","checklist e previsão"],
    ["60–72","observar uma requisição sem enumerar","perguntar o que cada campo demonstra","registro sanitizado"],
    ["72–84","inventariar quatro ativos, incluindo transferência OT","cobrar função, responsável e consequência","inventário priorizado"],
    ["84–94","produzir registro da vulnerabilidade","perguntar “observado ou inferido?” em cada afirmação","ticket preliminar"],
    ["94–101","comparar tratamento e definir reteste","exigir premissa, trade-off e resultado esperado","decisão verificável"],
    ["101–104","revisão cruzada, limpeza e frase final","selecionar uma dúvida para a A03","PDF e ambiente encerrado"],
  ],[1500,3250,3650,1900]),
  H("Pistas progressivas",HeadingLevel.HEADING_2),
  table(["Nível","Quando oferecer","Pista"],[
    ["1 • conceitual","dupla começa pela técnica","comece pelo substantivo que tem valor e pela função que ele sustenta"],
    ["2 • observação","dupla mistura hipótese e fato","compare comportamento esperado e observado da mesma rota"],
    ["3 • técnica","dupla não localiza a evidência","use a aba Network; observe método, caminho, status e tipo de conteúdo"],
    ["alternativa","ambiente indisponível","use a resposta HTTP fictícia e não presuma conteúdo não mostrado"],
  ],[1800,3400,5100]),
  H("Como circular entre as duplas",HeadingLevel.HEADING_2),
  P("Evite assumir o teclado. Leia uma frase do registro e pergunte qual evidência a sustenta. Se a dupla estiver bloqueada por infraestrutura, migre imediatamente para o pacote alternativo e avalie o raciocínio. Se estiver rápida demais, peça uma hipótese concorrente ou um teste que poderia produzir falso senso de correção."),
  box("Regra de evidência","Captura de tela sem interpretação não comprova aprendizagem. Exija uma frase que diga o que a imagem demonstra, o que não demonstra e como se relaciona à decisão.",C.blue),

  page(), H("5. Respostas esperadas e erros produtivos"),
  table(["Situação","Resposta aceitável","Intervenção docente"],[
    ["“200 prova invasão”","200 prova entrega naquela requisição","pedir evidência de intenção, autoria e política esperada"],
    ["“o ativo é o servidor”","servidor é um ativo, mas arquivo, dados, aplicação e serviço também são","perguntar o que tem valor e qual função seria perdida"],
    ["“a ameaça é a vulnerabilidade”","ameaça pode causar dano; vulnerabilidade é a instância explorável","pedir uma frase com sujeito, condição e consequência"],
    ["“tem algum CVE”","não há base para atribuir CVE sem fonte específica","retomar diferença entre CVE e CWE"],
    ["“basta retornar 404”","404 é uma evidência, mas o recurso pode só ter mudado de nome","pedir validação do processo de publicação e busca por equivalentes"],
    ["“monitorar resolve”","monitoramento detecta, mas pode manter a exposição","perguntar que controle reduz a causa e qual risco residual permanece"],
  ],[3000,3900,3400]),
  H("Critérios de boa entrega",HeadingLevel.HEADING_2),
  bullet("Inventário associa ativos a função, responsável e consequência."),
  bullet("Registro separa evidência, hipótese de fraqueza e conclusão."),
  bullet("Prioridade é justificada por impacto, não pela flag ou facilidade técnica."),
  bullet("Controle é condicionado à função do recurso e declara limitações."),
  bullet("Reteste informa ação, resultado esperado e o que ainda pode produzir falso negativo."),
  bullet("Entrega está sanitizada e respeita o escopo autorizado."),
  H("Extensão para grupos adiantados",HeadingLevel.HEADING_2),
  P("Solicite uma consulta de inventário que encontre exposições semelhantes sem varrer redes: fonte de dados, responsável pela atualização, periodicidade e evidência de completude. Outra opção é pedir um teste negativo e um positivo para a autorização proposta."),

  page(), H("6. Encerramento, avaliação e continuidade"),
  H("Fechamento em três minutos",HeadingLevel.HEADING_2),
  P("Escolha duas duplas e peça a frase: “Priorizamos o ativo ___ porque a consequência é ___. Recomendamos ___ e validaremos por ___.” A turma deve identificar se a justificativa contém evidência, premissa e reteste."),
  H("Registro formativo do professor",HeadingLevel.HEADING_2),
  table(["Observe","Registre para a próxima aula"],[
    ["mistura entre ameaça, fraqueza e vulnerabilidade","exemplo que precisa ser retomado na A03"],
    ["dificuldade em declarar lacunas","pergunta de abertura sobre hipótese concorrente"],
    ["prioridade sem consequência","ativo que será reutilizado no modelo de ameaças"],
    ["controle sem validação","teste de aceitação a ser incorporado ao próximo caso"],
  ],[4800,5500]),
  H("Ponte para a A03",HeadingLevel.HEADING_2),
  P("A A02 identifica ativos, exposições e consequências. A A03 pode reutilizar esse inventário para desenhar fronteiras de confiança, caminhos de ataque e registros de risco. Preserve apenas exemplos sanitizados e dúvidas conceituais; não leve respostas individuais para o material público."),
  H("Plano alternativo completo",HeadingLevel.HEADING_2),
  P("Se o laboratório não funcionar, entregue a resposta fictícia do roteiro, o conjunto de ativos e a matriz de controles. As duplas ainda realizam previsão, inventário, classificação terminológica, registro, priorização e reteste proposto. Não penalize falha de infraestrutura: avalie a qualidade da evidência e do raciocínio."),
  H("Referências essenciais",HeadingLevel.HEADING_2),
  bullet("NIST Cybersecurity Framework 2.0 — categoria Asset Management (ID.AM)."),
  bullet("CWE — linguagem comum para fraquezas de software e hardware."),
  bullet("CVE Program — identificação pública de vulnerabilidades específicas."),
  bullet("OWASP Juice Shop — aplicação vulnerável intencionalmente criada para treinamento."),
];

const doc = new Document({
  creator:"Curso de Segurança Digital", title:"A02 — Roteiro docente — O que realmente está exposto?",
  styles:{ default:{document:{run:{font:"Arial",size:23,color:C.ink},paragraph:{spacing:{line:315}}}}, paragraphStyles:[
    {id:"Title",name:"Title",basedOn:"Normal",next:"Normal",quickFormat:true,run:{font:"Arial",size:42,bold:true,color:C.navy},paragraph:{spacing:{after:160}}},
    {id:"Heading1",name:"Heading 1",basedOn:"Normal",next:"Normal",quickFormat:true,run:{font:"Arial",size:31,bold:true,color:C.navy},paragraph:{spacing:{before:220,after:90},outlineLevel:0}},
    {id:"Heading2",name:"Heading 2",basedOn:"Normal",next:"Normal",quickFormat:true,run:{font:"Arial",size:26,bold:true,color:C.blue},paragraph:{spacing:{before:170,after:70},outlineLevel:1}},
  ]},
  sections:[{ properties:{page:{margin:{top:760,right:760,bottom:760,left:760}}}, footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:"A02 • Roteiro docente • Segurança Digital",size:17,color:C.grey})]})]})}, children }],
});

await writeFile(resolve(out,"fonte","A02-roteiro-docente.docx"), await Packer.toBuffer(doc));
