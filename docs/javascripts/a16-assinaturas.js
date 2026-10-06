(() => {
  const root = document.getElementById('a16-signatures');
  if (!root) return;
  const status = document.getElementById('a16-status');
  const output = document.getElementById('a16-output');
  const buttons = Object.fromEntries(['generate', 'sign', 'valid', 'changed', 'wrong'].map(id => [id, document.getElementById(`a16-${id}`)]));
  const original = 'relatorio=7;resultado=aprovado';
  const modified = 'relatorio=7;resultado=reprovado';
  const bytes = text => new TextEncoder().encode(text);
  const hex = buffer => Array.from(new Uint8Array(buffer), b => b.toString(16).padStart(2, '0')).join('');
  const algorithm = { name: 'ECDSA', namedCurve: 'P-256' };
  const signatureAlgorithm = { name: 'ECDSA', hash: 'SHA-256' };
  let signer, other, signature;

  function setButtons(state) {
    buttons.sign.disabled = state < 1;
    buttons.valid.disabled = state < 2;
    buttons.changed.disabled = state < 2;
    buttons.wrong.disabled = state < 2;
  }
  function show(message, details) {
    status.textContent = message;
    output.textContent = details;
  }
  async function run(action) {
    try {
      await action();
    } catch (error) {
      show('A operação falhou. Use o quadro alternativo da página.', `${error.name}: ${error.message}`);
    }
  }
  if (!globalThis.crypto?.subtle || !globalThis.TextEncoder) {
    show('Web Crypto indisponível neste endereço. Use o quadro alternativo da página.', 'Abra por HTTPS ou localhost em navegador compatível.');
    return;
  }
  buttons.generate.addEventListener('click', () => run(async () => {
    signer = await crypto.subtle.generateKey(algorithm, false, ['sign', 'verify']);
    other = await crypto.subtle.generateKey(algorithm, false, ['sign', 'verify']);
    signature = undefined;
    const k1 = await crypto.subtle.exportKey('jwk', signer.publicKey);
    const k2 = await crypto.subtle.exportKey('jwk', other.publicKey);
    setButtons(1);
    show('Dois pares independentes gerados.', `K1 pública: x=${k1.x}\ny=${k1.y}\nK2 pública: x=${k2.x}\ny=${k2.y}\nChaves privadas permanecem não exportáveis neste exercício.`);
  }));
  buttons.sign.addEventListener('click', () => run(async () => {
    signature = await crypto.subtle.sign(signatureAlgorithm, signer.privateKey, bytes(original));
    setButtons(2);
    show('Mensagem assinada com K1 privada.', `Mensagem: ${original}\nAssinatura (${signature.byteLength} bytes, hexadecimal): ${hex(signature)}\nA mensagem continua legível.`);
  }));
  async function verify(message, key, label) {
    const accepted = await crypto.subtle.verify(signatureAlgorithm, key, signature, bytes(message));
    show(`${label}: ${accepted ? 'VÁLIDA' : 'INVÁLIDA'}.`, `Mensagem verificada: ${message}\nChave usada: ${key === signer.publicKey ? 'K1 pública' : 'K2 pública'}\nResultado da API: ${accepted}`);
  }
  buttons.valid.addEventListener('click', () => run(() => verify(original, signer.publicKey, 'V1 — original + K1')));
  buttons.changed.addEventListener('click', () => run(() => verify(modified, signer.publicKey, 'V2 — alterada + K1')));
  buttons.wrong.addEventListener('click', () => run(() => verify(original, other.publicKey, 'V3 — original + K2')));
  setButtons(0);
  show('Pronto. Gere os dois pares de chaves.', `Mensagem de teste: ${original}`);
})();
