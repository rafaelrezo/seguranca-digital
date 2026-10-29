# Pacote de evidências didáticas — A19–A20

## Procedência e uso

Dados artificiais produzidos para análise em aula em 29 out. 2026. Não há coleta em planta, controlador, VPN ou Juice Shop. Não são resultados de execução pela turma nem reprodução de um incidente documentado.

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

Não foram fornecidos captura de tráfego, lista completa de regras, conteúdo do programa, medição independente nem ensaio das proteções. As tabelas não cobrem todo o período de manutenção.

## Condição adicional — contenção

Tentativa não aprovada de alteração na estação de engenharia; sem confirmação de mudança no CLP. Por premissa, a operação confirma que o controle local está ativo e que pode suspender a sessão remota. Não há registro de uma contenção ou restauração executada.

## Exemplo web — respostas ilustrativas

Aplicação fictícia de ordens de manutenção. Regra: cada conta só pode ler suas próprias ordens. Conta A possui 17; B possui 18. Não é um endpoint do Juice Shop e não há servidor para consultar.

| Fase/caso | Conta | Ação | Resposta fornecida |
|---|---|---|---|
| Linha de base | A | GET /api/ordens/17 | 200, ordem 17 de A |
| Antes da correção | A | GET /api/ordens/18 | 200, ordem 18 de B |
| Depois da correção | A | GET /api/ordens/18 | 403, sem conteúdo da ordem |
| Regressão funcional | A | GET /api/ordens/17 | 200, ordem 17 de A |

O método de referência é WSTG 4.2, teste de referências diretas a objetos (WSTG-v42-ATHZ-04). Os estados antes/depois são ilustrações preparadas, não implantação ou reteste observados. A extensão da dupla é um plano sem execução.
