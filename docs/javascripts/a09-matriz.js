/* A matriz fica inteira disponível sem JavaScript. Edições permanecem apenas nesta página. */
(function () {
  function init() {
    const root = document.getElementById('a09-matrix');
    if (!root || root.dataset.ready) return;
    root.dataset.ready = 'true';
    const controls = root.querySelector('.risk-matrix-controls');
    const focus = root.querySelector('#matrix-focus');
    const cells = [...root.querySelectorAll('th[data-stage], td[data-stage]')];
    const buttons = [...controls.querySelectorAll('button[data-stage]')];
    let stage = 1;
    root.querySelectorAll('[contenteditable]').forEach(cell => cell.contentEditable = 'plaintext-only');
    function show(value) {
      stage = Math.max(1, Math.min(5, Number(value)));
      cells.forEach(cell => {
        const number = Number(cell.dataset.stage);
        cell.hidden = focus.checked ? (cell.cellIndex !== 0 && number !== stage) : number > stage;
      });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.stage) === stage)));
      root.querySelector('#matrix-status').textContent = 'Etapa ' + stage + ' — ' + (focus.checked ? 'risco e colunas desta etapa.' : 'colunas acumuladas até aqui.') + ' Edite as células e exporte antes de sair.';
      root.querySelector('.risk-matrix-scroll').scrollLeft = 0;
    }
    controls.hidden = false;
    buttons.forEach(button => button.addEventListener('click', () => show(button.dataset.stage)));
    focus.addEventListener('change', () => show(stage));
    document.querySelectorAll('a[data-matrix-stage]').forEach(link => link.addEventListener('click', () => show(link.dataset.matrixStage)));
    root.querySelector('#matrix-export').addEventListener('click', () => {
      const quote = text => {
        let value = text.replace(/\r?\n/g, ' ').trim();
        if (/^[=+@\-\t\r]/.test(value)) value = "'" + value;
        return '"' + value.replace(/"/g, '""') + '"';
      };
      const lines = [...root.querySelectorAll('tr')].map(row => [...row.cells].map(cell => quote(cell.textContent)).join(','));
      const url = URL.createObjectURL(new Blob(['\ufeff' + lines.join('\r\n')], {type: 'text/csv;charset=utf-8'}));
      const link = document.createElement('a'); link.href = url; link.download = 'A09-matriz-preenchida.csv'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    show(1);
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
