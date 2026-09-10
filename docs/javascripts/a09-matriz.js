/* Um registro, apresentado após cada explicação. Sem persistência fora da página. */
(function () {
  function init() {
    const views = [...document.querySelectorAll('.risk-matrix[data-matrix-stage]')];
    if (!views.length || views[0].dataset.ready) return;
    const allCells = views.flatMap(view => [...view.querySelectorAll('td[data-row][data-column]')]);
    allCells.forEach(cell => {
      cell.contentEditable = 'plaintext-only';
      cell.setAttribute('role', 'textbox');
      cell.addEventListener('input', () => {
        const row = cell.dataset.row, column = cell.dataset.column, value = cell.textContent;
        allCells.forEach(other => {
          if (other !== cell && other.dataset.row === row && other.dataset.column === column) other.textContent = value;
        });
      });
    });
    views.forEach(view => {
      view.dataset.ready = 'true';
      const stage = Number(view.dataset.matrixStage);
      const controls = view.querySelector('.risk-matrix-controls');
      const focus = controls.querySelector('.matrix-focus');
      const cells = [...view.querySelectorAll('[data-introduced]')];
      focus.addEventListener('change', () => {
        view.dataset.focus = String(focus.checked);
        cells.forEach(cell => cell.hidden = focus.checked && cell.dataset.column !== '0' && Number(cell.dataset.introduced) !== stage);
        view.querySelector('.matrix-status').textContent = 'Após o tema ' + stage + ' — ' + (focus.checked ? 'risco e colunas novas.' : 'todas as colunas construídas até aqui.');
        view.querySelector('.risk-matrix-scroll').scrollLeft = 0;
      });
      controls.querySelector('.matrix-export').addEventListener('click', () => {
        const quote = text => {
          let value = text.replace(/\r?\n/g, ' ').trim();
          if (/^[=+@\-\t\r]/.test(value)) value = "'" + value;
          return '"' + value.replace(/"/g, '""') + '"';
        };
        const lines = [...view.querySelectorAll('tr')].map(row => [...row.cells].map(cell => quote(cell.textContent)).join(','));
        const url = URL.createObjectURL(new Blob(['\ufeff' + lines.join('\r\n')], {type: 'text/csv;charset=utf-8'}));
        const link = document.createElement('a'); link.href = url; link.download = 'A09-matriz-tema-' + stage + '.csv'; link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      });
      controls.hidden = false;
    });
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
