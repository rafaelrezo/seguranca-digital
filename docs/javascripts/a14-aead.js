// Demonstração didática: todas as chaves e mensagens ficam apenas na memória desta página.
(() => {
  const root = document.getElementById('a14-aead');
  if (!root) return;

  const status = document.getElementById('a14-status');
  const output = document.getElementById('a14-output');
  const buttons = {
    encrypt: document.getElementById('a14-encrypt'),
    open: document.getElementById('a14-open'),
    tamper: document.getElementById('a14-tamper'),
    aad: document.getElementById('a14-aad'),
    wrongKey: document.getElementById('a14-wrong-key'),
  };
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const message = 'ordem=7;estado=aprovado';
  const label = 'tipo=ordem;versao=1';
  const hex = bytes => [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
  let key;
  let sample;
  let count = 0;

  function show(lines) {
    output.textContent = lines.join('\n');
  }

  function params(iv, aad) {
    return { name: 'AES-GCM', iv, additionalData: aad, tagLength: 128 };
  }

  async function encrypt() {
    try {
      if (!key) key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const aad = enc.encode(label);
      const combined = new Uint8Array(await crypto.subtle.encrypt(params(iv, aad), key, enc.encode(message)));
      sample = { iv, aad, combined };
      count += 1;
      Object.values(buttons).forEach(button => { button.disabled = false; });
      status.textContent = `Operação ${count} pronta. Chave K1 gerada nesta aba; nonce novo nesta operação.`;
      show([
        `Operação ${count} — valores artificiais; a chave K1 não é exibida`,
        `Texto de entrada: ${message}`,
        `AAD visível: ${label}`,
        `Nonce (${iv.length * 8} bits): ${hex(iv)}`,
        `Texto cifrado: ${hex(combined.slice(0, -16))}`,
        `Tag (${16 * 8} bits): ${hex(combined.slice(-16))}`,
        'Escolha uma abertura para verificar o resultado.'
      ]);
    } catch (error) {
      status.textContent = 'A operação falhou. Use o quadro V1–V2/F1–F3 na página.';
      show([`Erro do navegador: ${error.name || 'indisponível'}`]);
    }
  }

  async function attempt(kind) {
    if (!sample || !key) return;
    const { iv, aad, combined } = sample;
    let trialKey = key;
    let trialAad = aad;
    let trialBytes = combined;
    let description = 'V1 — entradas originais';
    if (kind === 'tamper') {
      trialBytes = combined.slice();
      trialBytes[0] ^= 1;
      description = 'F1 — um bit do texto cifrado alterado';
    } else if (kind === 'aad') {
      trialAad = enc.encode('tipo=ordem;versao=2');
      description = 'F2 — AAD alterado';
    } else if (kind === 'wrongKey') {
      trialKey = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      description = 'F3 — outra chave descartável';
    }
    try {
      const plain = await crypto.subtle.decrypt(params(iv, trialAad), trialKey, trialBytes);
      show([description, `Resultado: texto entregue = ${dec.decode(plain)}`, 'Limite: a abertura não prova a identidade de uma pessoa nem a integridade do endpoint.']);
    } catch (error) {
      show([description, 'Resultado: falha de autenticação; nenhum texto entregue.', 'A falha, isoladamente, não identifica qual entrada estava errada.']);
    }
  }

  if (!globalThis.isSecureContext || !globalThis.crypto?.subtle) {
    status.textContent = 'Web Crypto indisponível aqui. Use o quadro V1–V2/F1–F3 na página.';
    buttons.encrypt.disabled = true;
    return;
  }
  status.textContent = 'Painel pronto. Preveja o resultado e clique em “Cifrar”.';
  buttons.encrypt.addEventListener('click', encrypt);
  buttons.open.addEventListener('click', () => attempt('open'));
  buttons.tamper.addEventListener('click', () => attempt('tamper'));
  buttons.aad.addEventListener('click', () => attempt('aad'));
  buttons.wrongKey.addEventListener('click', () => attempt('wrongKey'));
})();
