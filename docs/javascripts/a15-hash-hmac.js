// Operações didáticas locais: nenhuma entrada é enviada ou armazenada.
(() => {
  const root = document.getElementById('a15-checks');
  if (!root) return;

  const status = document.getElementById('a15-status');
  const output = document.getElementById('a15-output');
  const buttons = {
    digest: document.getElementById('a15-digest'),
    hmac: document.getElementById('a15-hmac'),
    valid: document.getElementById('a15-valid'),
    altered: document.getElementById('a15-altered'),
    wrongKey: document.getElementById('a15-wrong-key'),
  };
  const enc = new TextEncoder();
  const hex = bytes => [...new Uint8Array(bytes)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  const expected = 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad';
  const original = 'pedido=7;valor=10';
  const changed = 'pedido=7;valor=11';
  let key;
  let tag;
  let busy = false;

  function show(lines) { output.textContent = lines.join('\n'); }
  function enableHmac() { buttons.hmac.disabled = false; }
  function enableVerify() {
    buttons.valid.disabled = false;
    buttons.altered.disabled = false;
    buttons.wrongKey.disabled = false;
  }
  async function guarded(action) {
    if (busy) return;
    busy = true;
    Object.values(buttons).forEach(button => { button.disabled = true; });
    try { await action(); }
    catch (error) {
      status.textContent = 'Operação indisponível. Use o quadro D1/M1–M3 da página.';
      show([`Erro do navegador: ${error.name || 'indisponível'}`]);
    } finally {
      busy = false;
      buttons.digest.disabled = false;
      enableHmac();
      if (key && tag) enableVerify();
    }
  }

  async function digest() {
    const a = hex(await crypto.subtle.digest('SHA-256', enc.encode('abc')));
    const b = hex(await crypto.subtle.digest('SHA-256', enc.encode('abd')));
    status.textContent = 'D1 calculado localmente. Registre a entrada exata e a procedência da referência.';
    show([
      'D1 — SHA-256; entradas ASCII sem espaço ou quebra de linha',
      `abc: ${a}`,
      `referência NIST: ${expected}`,
      `coincide com referência: ${a === expected}`,
      `abd: ${b}`,
      `abd difere de abc: ${b !== a}`,
      'Limite: esta página não atesta a procedência de um arquivo externo.'
    ]);
  }

  async function produce() {
    key = await crypto.subtle.generateKey({ name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
    tag = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(original)));
    status.textContent = 'HMAC de teste criado. K2 é secreta e descartável nesta aba.';
    show([
      'K2: chave gerada no navegador, não exportável e não exibida',
      `mensagem: ${original}`,
      `HMAC-SHA-256: ${hex(tag)}`,
      'Preveja e execute M1, M2 e M3.'
    ]);
  }

  async function verify(kind) {
    if (!key || !tag) return;
    const message = kind === 'altered' ? changed : original;
    const trialKey = kind === 'wrongKey'
      ? await crypto.subtle.generateKey({ name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
      : key;
    const accepted = await crypto.subtle.verify('HMAC', trialKey, tag, enc.encode(message));
    const label = kind === 'valid' ? 'M1 — mensagem e K2 originais'
      : kind === 'altered' ? 'M2 — mensagem alterada, K2 original'
        : 'M3 — mensagem original, outra chave';
    status.textContent = `${label}: ${accepted ? 'aceito' : 'rejeitado'}.`;
    show([
      label,
      `mensagem testada: ${message}`,
      `verify(): ${accepted}`,
      'Limite: o resultado não identifica qual detentor da chave produziu o HMAC.'
    ]);
  }

  if (!globalThis.isSecureContext || !globalThis.crypto?.subtle) {
    status.textContent = 'Web Crypto indisponível. Use o quadro D1/M1–M3 da página.';
    buttons.digest.disabled = true;
    return;
  }
  status.textContent = 'Painel pronto. Preveja e clique em “Comparar digest”.';
  buttons.digest.addEventListener('click', () => guarded(digest));
  buttons.hmac.addEventListener('click', () => guarded(produce));
  buttons.valid.addEventListener('click', () => guarded(() => verify('valid')));
  buttons.altered.addEventListener('click', () => guarded(() => verify('altered')));
  buttons.wrongKey.addEventListener('click', () => guarded(() => verify('wrongKey')));
})();
