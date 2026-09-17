(() => {
  const root = document.getElementById('laboratorio');
  if (!root) return;
  const $ = id => root.querySelector('#' + id);
  const dados = {
    A: {pedido: '10:05 — Marta, SV-104, impressora da recepção.', cadastro: 'Marta, recepção, 10:00–10:30; Ana acompanha. Contato conhecido confirma.', confirmado: true, pedidoAreas: ['recepção'], aprovadas: ['recepção']},
    B: {pedido: '09:15 — Leo mostra imagem de crachá da ServTec, cita SV-999 e pede a sala de engenharia com urgência.', cadastro: 'SV-999 não existe; contato conhecido não confirma a visita.', confirmado: false, pedidoAreas: ['engenharia'], aprovadas: []},
    C: {pedido: '10:07 — Marta, SV-104, pede a impressora da recepção e também a sala de engenharia.', cadastro: 'SV-104 confirma somente a impressora da recepção; Ana acompanha.', confirmado: true, pedidoAreas: ['recepção', 'engenharia'], aprovadas: ['recepção']}
  };
  function mostrar() {
    const d = dados[$('a10-caso').value];
    $('a10-pedido').textContent = d.pedido;
    $('a10-cadastro').textContent = d.cadastro;
    $('a10-resultado').textContent = 'Aguardando teste.';
  }
  function avaliar(id, confirmar, limitar) {
    const d = dados[id];
    if (confirmar && !d.confirmado) return {decisao: 'SUSPENDER', motivo: 'chamado não confirmado'};
    const areas = limitar ? d.pedidoAreas.filter(a => d.aprovadas.includes(a)) : d.pedidoAreas;
    if (!areas.length) return {decisao: 'SUSPENDER', motivo: 'nenhuma área aprovada'};
    return {decisao: areas.length < d.pedidoAreas.length ? 'LIMITAR' : 'PERMITIR', motivo: 'área: ' + areas.join(' e ')};
  }
  $('a10-caso').addEventListener('change', mostrar);
  $('a10-testar').addEventListener('click', () => {
    const id = $('a10-caso').value, confirmar = $('a10-confirmar').checked, limitar = $('a10-limitar').checked;
    const r = avaliar(id, confirmar, limitar);
    $('a10-resultado').textContent = `${id}: ${r.decisao} — ${r.motivo}.`;
    if ($('a10-trilha').firstElementChild?.textContent === 'Ainda não há teste.') $('a10-trilha').replaceChildren();
    const li = document.createElement('li');
    li.textContent = `${id} | confirmação: ${confirmar ? 'sim' : 'não'} | zona: ${limitar ? 'sim' : 'não'} | ${r.decisao}`;
    $('a10-trilha').appendChild(li);
  });
  $('a10-reiniciar').addEventListener('click', () => {
    $('a10-caso').value = 'A'; $('a10-confirmar').checked = false; $('a10-limitar').checked = false;
    $('a10-trilha').replaceChildren();
    const li = document.createElement('li'); li.textContent = 'Ainda não há teste.'; $('a10-trilha').appendChild(li);
    mostrar();
  });
  mostrar();
})();
