/* A13: modelos em memória. Este arquivo não acessa rede, arquivos, teclado ou armazenamento. */
(() => {
  const root = document.getElementById("simulador-a13");
  if (!root) return;

  const models = {
    virus() {
      const files = { "A.exe": "programa + marcador V", "B.exe": "programa limpo" };
      const before = JSON.stringify(files);
      files["B.exe"] = "programa + marcador V";
      return [before, JSON.stringify(files), "O hospedeiro B.exe mudou; a cópia segue com o arquivo."];
    },
    worm() {
      const devices = { "PC-1": "cópia W", "PC-2": "sem cópia" };
      const before = JSON.stringify(devices);
      devices["PC-2"] = "cópia W";
      return [before, JSON.stringify(devices), "A cópia aparece em outro dispositivo sem alterar arquivo hospedeiro."];
    },
    trojan() {
      const app = { anuncio: "visualizador", acao: "abrir relatório" };
      const before = JSON.stringify(app);
      app.acao = "abrir relatório + acesso oculto";
      return [before, JSON.stringify(app), "A apresentação ao usuário omite a ação indevida."];
    },
    ransomware() {
      const data = { arquivo: "legível", pedido: "nenhum" };
      const before = JSON.stringify(data);
      data.arquivo = "inacessível";
      data.pedido = "resgate";
      return [before, JSON.stringify(data), "O acesso foi restringido e surgiu uma cobrança fictícia."];
    },
    spyware() {
      const collection = { dados: "histórico fictício", enviados: false };
      const before = JSON.stringify(collection);
      collection.enviados = true;
      return [before, JSON.stringify(collection), "O modelo marca coleta e envio indevidos; nenhuma rede é usada."];
    },
    adware() {
      const browser = { busca: "destino escolhido pelo usuário" };
      const before = JSON.stringify(browser);
      browser.busca = "página de anúncios fictícia";
      return [before, JSON.stringify(browser), "A busca foi redirecionada sem consentimento no modelo."];
    },
    keylogger() {
      const keys = { digitado: "TESTE", registro: [] };
      const before = JSON.stringify(keys);
      keys.registro.push(...keys.digitado);
      return [before, JSON.stringify(keys), "Somente a palavra fictícia TESTE foi copiada em memória; nenhuma tecla real é capturada."];
    },
    backdoor() {
      const access = { caminhos: ["entrada autorizada"] };
      const before = JSON.stringify(access);
      access.caminhos.push("atalho oculto fictício");
      return [before, JSON.stringify(access), "Foi acrescentado um caminho que contorna o fluxo normal no modelo."];
    },
    rat() {
      const remote = { autorizado: false, comandos: [] };
      const before = JSON.stringify(remote);
      remote.comandos.push("abrir documento fictício");
      return [before, JSON.stringify(remote), "O modelo recebeu uma ordem remota não autorizada; nenhuma conexão é aberta."];
    },
    rootkit() {
      const system = { processosReais: ["editor", "componente X"], processosVisiveis: ["editor", "componente X"] };
      const before = JSON.stringify(system);
      system.processosVisiveis = ["editor"];
      return [before, JSON.stringify(system), "A visão omite X, embora X continue na lista real do modelo."];
    },
    logicbomb() {
      const state = { dataDeTeste: "2030-01-01", gatilho: "2030-01-01", arquivo: "presente" };
      const before = JSON.stringify(state);
      if (state.dataDeTeste === state.gatilho) state.arquivo = "apagado no modelo";
      return [before, JSON.stringify(state), "Uma condição fictícia disparou a mudança em memória; nenhum arquivo foi apagado."];
    },
    botnet() {
      const devices = { "PC-1": [], "PC-2": [] };
      const before = JSON.stringify(devices);
      for (const commands of Object.values(devices)) commands.push("ordem fictícia");
      return [before, JSON.stringify(devices), "Dois dispositivos do modelo receberam a mesma ordem; não há rede real."];
    }
  };

  const scenes = {
    virus: ["Arquivo A.exe com marcador V", "Copia o marcador para outro arquivo hospedeiro", "Arquivo B.exe"],
    worm: ["Dispositivo PC-1 com cópia W", "Cria uma cópia em outro dispositivo", "Dispositivo PC-2"],
    trojan: ["Aplicativo anunciado como visualizador", "Acrescenta uma ação que o anúncio não informa", "Ação real do aplicativo"],
    ransomware: ["Código no dispositivo fictício", "Restringe acesso e apresenta cobrança", "Arquivo e pedido de resgate"],
    spyware: ["Processo sem autorização", "Marca coleta de dados fictícios", "Histórico do usuário no modelo"],
    adware: ["Programa de anúncios fictício", "Redireciona uma busca sem consentimento", "Destino da busca no modelo"],
    keylogger: ["Componente fictício", "Copia a palavra TESTE para um registro", "Registro de teclas no modelo"],
    backdoor: ["Componente instalado no modelo", "Acrescenta um caminho oculto", "Caminhos de acesso"],
    rat: ["Ordem remota fictícia", "Insere a ordem em uma lista", "Comandos do programa no modelo"],
    rootkit: ["Componente X do modelo", "Omite X da lista visível", "Visão dos processos"],
    logicbomb: ["Data de teste fictícia", "Ativa a condição programada", "Estado de um arquivo no modelo"],
    botnet: ["Ordem fictícia única", "Distribui a ordem a dois dispositivos", "PC-1 e PC-2 do modelo"]
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
      line("Origem", origin),
      line("Ação simulada", action),
      line("Alvo", target),
      objects,
      line("Relação com a família", clue)
    );
  });
})();
