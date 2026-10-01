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

  const select = root.querySelector("select");
  const button = root.querySelector("button");
  const output = root.querySelector("pre");
  button.addEventListener("click", () => {
    const model = models[select.value];
    if (!model) return;
    const [before, after, clue] = model();
    output.textContent = `Antes: ${before}\nDepois: ${after}\nPista: ${clue}`;
  });
})();
