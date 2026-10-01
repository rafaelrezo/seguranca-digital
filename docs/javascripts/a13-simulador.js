/* A13: modelos em memória. Este arquivo não acessa rede, arquivos, teclado ou armazenamento. */
(() => {
  const root = document.getElementById("simulador-a13");
  if (!root) return;

  const models = {
    virus() {
      const files = { "A.exe": "contém uma cópia do vírus", "B.exe": "sem cópia do vírus" };
      const before = JSON.stringify(files);
      files["B.exe"] = "contém uma cópia do vírus";
      return [before, JSON.stringify(files), "B.exe passa a carregar uma cópia do vírus dentro do arquivo."];
    },
    worm() {
      const devices = { "PC-1": "tem uma cópia do programa", "PC-2": "sem cópia" };
      const before = JSON.stringify(devices);
      devices["PC-2"] = "tem uma cópia do programa";
      return [before, JSON.stringify(devices), "A cópia aparece em outro dispositivo sem alterar arquivo hospedeiro."];
    },
    trojan() {
      const app = { "Nome mostrado": "Leitor de relatórios", "O que faz": "abrir relatório" };
      const before = JSON.stringify(app);
      app["O que faz"] = "abrir relatório + criar entrada secreta";
      return [before, JSON.stringify(app), "O programa parece ser um leitor, mas também cria uma entrada secreta." ];
    },
    ransomware() {
      const data = { "relatorio.txt": "pode ser aberto", "Mensagem de cobrança": "não existe" };
      const before = JSON.stringify(data);
      data["relatorio.txt"] = "não pode ser aberto";
      data["Mensagem de cobrança"] = "pague para recuperar o acesso";
      return [before, JSON.stringify(data), "O arquivo fica inacessível e aparece uma cobrança." ];
    },
    spyware() {
      const collection = { "Histórico de navegação": "só no computador", "Cópia para terceiros": "não" };
      const before = JSON.stringify(collection);
      collection["Cópia para terceiros"] = "sim, na simulação";
      return [before, JSON.stringify(collection), "O programa obtém informações sem autorização. Nenhum dado real é lido ou enviado." ];
    },
    adware() {
      const browser = { "Destino da busca": "página escolhida pelo usuário" };
      const before = JSON.stringify(browser);
      browser["Destino da busca"] = "página de anúncios";
      return [before, JSON.stringify(browser), "A busca passa a abrir anúncios sem escolha do usuário." ];
    },
    keylogger() {
      const keys = { "Texto de exemplo": "TESTE", "Registro de letras": [] };
      const before = JSON.stringify(keys);
      keys["Registro de letras"].push(...keys["Texto de exemplo"]);
      return [before, JSON.stringify(keys), "As letras de TESTE aparecem em outro registro. O teclado real não é observado." ];
    },
    backdoor() {
      const access = { "Formas de entrar": ["login com senha"] };
      const before = JSON.stringify(access);
      access["Formas de entrar"].push("entrada secreta sem pedir senha");
      return [before, JSON.stringify(access), "Surge uma segunda forma de entrar, escondida e sem o login normal." ];
    },
    rat() {
      const remote = { "Permissão do dono": "não concedida", "Ordens recebidas": [] };
      const before = JSON.stringify(remote);
      remote["Ordens recebidas"].push("abrir relatorio.txt");
      return [before, JSON.stringify(remote), "Uma pessoa distante controla o programa sem autorização do dono. Não há conexão real." ];
    },
    rootkit() {
      const system = { "Programas em execução": ["Editor", "Programa X"], "Programas mostrados na lista": ["Editor", "Programa X"] };
      const before = JSON.stringify(system);
      system["Programas mostrados na lista"] = ["Editor"];
      return [before, JSON.stringify(system), "O Programa X continua em execução, mas desaparece da lista mostrada." ];
    },
    logicbomb() {
      const state = { "Data do exemplo": "01/01/2030", "Data programada": "01/01/2030", "relatorio.txt": "presente" };
      const before = JSON.stringify(state);
      if (state["Data do exemplo"] === state["Data programada"]) state["relatorio.txt"] = "marcado como apagado na tela";
      return [before, JSON.stringify(state), "A data programada dispara a ação. Nenhum arquivo real é apagado." ];
    },
    botnet() {
      const devices = { "PC-1": [], "PC-2": [] };
      const before = JSON.stringify(devices);
      for (const commands of Object.values(devices)) commands.push("abrir página de teste");
      return [before, JSON.stringify(devices), "PC-1 e PC-2 recebem a mesma ordem de um controlador. Nenhuma rede é usada." ];
    }
  };

  const scenes = {
    virus: ["Arquivo A.exe com uma cópia do vírus", "Coloca uma cópia dentro de B.exe", "Arquivo B.exe"],
    worm: ["PC-1 com uma cópia do programa", "Cria uma cópia em outro computador", "PC-2"],
    trojan: ["Programa 'Leitor de relatórios'", "Abre o relatório e cria uma entrada secreta", "O que o programa faz"],
    ransomware: ["Programa aberto no PC de exemplo", "Impede abrir o arquivo e mostra uma cobrança", "relatorio.txt e mensagem"],
    spyware: ["Programa sem autorização", "Copia o histórico de navegação", "Informações do usuário"],
    adware: ["Extensão do navegador", "Troca o destino de uma busca", "Página aberta pela busca"],
    keylogger: ["Programa que registra letras", "Copia as letras de TESTE", "Registro de letras"],
    backdoor: ["Programa 'Assistente de suporte'", "Acrescenta uma entrada escondida que não pede senha", "Formas de entrar no PC de exemplo"],
    rat: ["Pessoa distante sem autorização", "Envia a ordem 'abrir relatorio.txt'", "Programa de controle remoto"],
    rootkit: ["Programa X", "Esconde seu nome da lista exibida", "Lista de programas em execução"],
    logicbomb: ["Regra com data marcada", "Age quando chega 01/01/2030", "relatorio.txt na tela"],
    botnet: ["Controlador remoto", "Dá a mesma ordem a dois PCs", "PC-1 e PC-2"]
  };

  function line(label, value) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    p.append(strong, document.createTextNode(value));
    return p;
  }

  function show(value) {
    if (Array.isArray(value)) return value.length ? value.join(", ") : "nenhum";
    if (typeof value === "boolean") return value ? "sim" : "não";
    return String(value);
  }

  const select = root.querySelector("select");
  const button = root.querySelector("button");
  const output = root.querySelector(".a13-result");
  button.addEventListener("click", () => {
    const model = models[select.value];
    if (!model) return;
    const [before, after, clue] = model();
    const [origin, action, target] = scenes[select.value];
    const prior = JSON.parse(before);
    const next = JSON.parse(after);
    const objects = document.createElement("div");
    objects.className = "a13-objects";
    for (const name of Object.keys(prior)) {
      const card = document.createElement("div");
      const oldValue = show(prior[name]);
      const newValue = show(next[name]);
      card.className = `a13-object${oldValue !== newValue ? " a13-object-changed" : ""}`;
      card.append(line("Objeto", name), line("Antes", oldValue), line("Depois", newValue));
      if (oldValue !== newValue) card.append(line("Mudança", "este objeto mudou"));
      objects.append(card);
    }
    output.replaceChildren(
      line("Quem age", origin),
      line("O que faz", action),
      line("O que é afetado", target),
      objects,
      line("O que isso mostra", clue)
    );
  });
})();
