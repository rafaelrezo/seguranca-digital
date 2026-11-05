# Pacote de evidências didáticas — A19–A20

## Procedência e uso

Dados artificiais produzidos para análise em aula em 29 out. 2026. Não há coleta em planta, controlador ou VPN. Não são resultados de execução pela turma nem reprodução de um incidente documentado.

Os horários não têm data civil associada e usam o mesmo relógio por premissa. As janelas A19 e M-01 são exemplos separados. Os valores em % representam nível relativo ao volume útil do tanque didático. Nenhum endereço de equipamento real é necessário.

## Funções e premissas do modelo

| Componente | Função |
|---|---|
| Tanque de água | Processo cujo nível é observado |
| Sensor de nível | Mede preenchimento em % |
| CLP | Executa a lógica de comando da bomba |
| Bomba de entrada | Acrescenta água ao tanque |
| IHM | Mostra nível, qualidade e estado informado |
| Estação de engenharia | Permite diagnóstico e, conforme autorização, alterações |

Faixa operacional de referência: 40–60%. Proteção de nível alto-alto em 80%, com interrupção de entrada, é uma premissa não ensaiada. Não foram fornecidos programa, desenho elétrico, saída do tanque, especificação de segurança funcional, calibração ou dependências de alimentação.

## Janela A19 — leitura sem atualização

| Observação | Aquisição | Nível | Qualidade |
|---|---|---:|---|
| 09:00:00 | 09:00:00 | 45% | Atual |
| 09:00:01 | 09:00:01 | 46% | Atual |
| 09:00:02 | 09:00:02 | 47% | Atual |
| 09:00:12 | 09:00:02 | 47% | Sem atualização |

## Janela A20 — autorização M-01

- Conta: `prestador_teste`.
- Janela para acesso à engenharia: 10:00–10:15.
- Caminho: cliente → VPN → intermediário → estação de engenharia.
- Ação: consulta de diagnóstico.
- Exclusões: alteração de lógica e acesso direto do cliente ao CLP.
- Autoridade: autorização operacional M-01 fornecida como premissa do exercício; não autoriza testes reais.

### Eventos fornecidos

| Hora | Fonte | Evento | Resultado |
|---|---|---|---|
| 09:59:30 | Gateway VPN | Autenticação de prestador_teste | Aceita |
| 09:59:35 | Intermediário | Acesso à engenharia fora da janela | Negado |
| 10:00:02 | Firewall | Cliente remoto tenta caminho direto ao CLP | Negado |
| 10:00:04 | Intermediário | Acesso de prestador_teste à estação autorizada | Aceito |
| 10:00:06 | Aplicação de engenharia | Consulta de diagnóstico da sessão M-01 | Aceita |

### Amostras de processo fornecidas

| Aquisição | Nível | Qualidade | Modo informado pelo CLP |
|---|---:|---|---|
| 10:00:00 | 50% | Atual | Automático |
| 10:00:05 | 51% | Atual | Automático |
| 10:00:10 | 52% | Atual | Automático |

Para M-01, não foram fornecidos captura de tráfego, lista completa de regras, conteúdo do programa, medição independente nem ensaio das proteções. As tabelas não cobrem todo o período de manutenção.

## Captura C-01 — leitura e escrita Modbus/TCP

Arquivo: [a20-modbus-c01.pcap](a20-modbus-c01.pcap), 45 pacotes, cerca de 10 s. **Dados sintéticos** gerados em 5 nov. 2026 por script da disciplina; nenhum pacote foi coletado em planta, CLP ou rede real. Exemplo separado de M-01: usa tempo relativo ao início da captura, sem relação com os horários da janela.

| Endereço | Papel |
|---|---|
| `10.10.1.10` | CLP do tanque (nível 1), servidor Modbus na porta TCP 502 |
| `10.10.2.20` | IHM (nível 2), lê os registradores 0 e 1 a cada segundo |
| `10.10.3.30` | Estação de engenharia (nível 3) |

| Registrador | Significado | Unidade |
|---:|---|---|
| 0 | Nível medido do tanque | % |
| 1 | Limite de desligamento da bomba de entrada | % |

Não foram fornecidos ordem de serviço, registro de sessão da estação, programa do CLP nem amostras de processo posteriores ao fim da captura.

## Condição adicional — contenção

Tentativa não aprovada de alteração na estação de engenharia; sem confirmação de mudança no CLP. Por premissa, a operação confirma que o controle local está ativo e que pode suspender a sessão remota. Não há registro de uma contenção ou restauração executada.
