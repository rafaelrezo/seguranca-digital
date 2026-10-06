(() => {
  const root = document.getElementById('a18-lab');
  if (!root) return;
  const field = (name) => document.getElementById(`a18-${name}`);
  const output = field('output');
  field('status').textContent = 'Pronto: inventário após E-1. Este painel avalia regras didáticas, sem cifrar ou recuperar chaves.';

  const rules = new Map([
    ['servico|cifrar|nova|kb', ['P1', 'permitido', 'K-B está ativa para nova cifra pelo serviço.']],
    ['servico|cifrar|nova|ka', ['N1', 'negado', 'K-A encerrou uso para nova cifra em E-1.']],
    ['servico|abrir|c01|ka', ['P2', 'permitido', 'C-01 exige K-A e serviço autorizado antes de E-2.']],
    ['servico|abrir|c01|kb', ['N2', 'negado', 'K-B não corresponde à chave de C-01.']],
    ['visitante|abrir|c02|kb', ['N3', 'negado', 'Chave correta não concede autorização ao operador.']],
    ['visitante|recuperar|kb|kb', ['N4', 'negado', 'Recuperação exige aprovação de custodiante e operações.']],
    ['custodiante|recuperar|kb|kb', ['P3', 'permitido condicional', 'Aprovação conjunta autoriza ensaio; ainda falta teste de abertura.']],
  ]);

  field('run').addEventListener('click', () => {
    const selection = ['actor', 'action', 'object', 'key'].map((name) => field(name).value).join('|');
    const result = rules.get(selection);
    output.textContent = result
      ? `${result[0]} | ${result[1]}\n${result[2]}\nFonte: simulador de regras, não teste criptográfico.`
      : 'Fora do pacote | combinação sem operação definida. Confira ator, ação, objeto e chave. Não interprete como falha criptográfica.';
  });
})();
