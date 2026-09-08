# A03 — Do registro à ameaça candidata

Quatro registros aparecem em sequência: autenticação na VPN, acesso ao servidor de arquivos, renomeação em massa e abertura de uma sessão entre a estação de engenharia e o ambiente OT. Há um incidente? A sequência chama atenção, mas ainda não demonstra autoria, causalidade ou intenção.

## Objetivos de aprendizagem

- separar observação, hipótese e conclusão;
- formular uma ameaça candidata com condição, ativo, consequência e evidência;
- decidir entre escalar, coletar mais dados ou encerrar, deixando claro o limite da análise.

**Tempo:** 104 minutos (52 min de discussão e conceituação; 52 min de prática).  
**Pré-requisito:** ativos e consequências discutidos na A02.  
**Produto:** nota de triagem de uma página.

## O que os registros realmente dizem?

```text
08:42  VPN         login_success   svc_support
08:51  FILE-01     auth_success    svc_support
09:03  FILE-01     bulk_rename     287 arquivos
09:07  ENG-WS-01   session_open    OT-JUMP-01
```

Eles demonstram eventos, horários, conta e componentes. Não demonstram que a mesma pessoa manteve uma sessão contínua, que houve malware, que o renomeio foi indevido ou que ocorreu impacto no processo OT.

## Ameaça não é ataque confirmado

Neste curso, uma **ameaça** é um evento indesejável potencial ou real, malicioso ou incidental, capaz de prejudicar algo de valor. Ela se distingue de:

- **evidência:** dado observado;
- **vulnerabilidade:** condição que facilita o evento;
- **ataque confirmado:** conclusão sustentada por evidências suficientes.

Uma formulação útil contém:

> evento ou agente + condição necessária + ativo afetado + consequência + evidência para verificar

Exemplo: uma pessoa usando `svc_support`, se a conta não permitir atribuição individual, pode alterar projetos no `FILE-01`, causando perda de integridade ou disponibilidade; a hipótese exige verificar dono da conta, sessão, política e autoria.

## Explicações concorrentes

O mesmo `bulk_rename` pode resultar de ação maliciosa, erro operacional, falha de sincronização ou manutenção autorizada. Uma boa triagem preserva alternativas plausíveis e procura dados que as diferenciem.

### Como construir hipóteses que podem ser refutadas

Uma hipótese útil não é apenas plausível: ela prevê rastros diferentes das hipóteses concorrentes. Para o `bulk_rename`, por exemplo:

| Hipótese | O que esperaríamos encontrar | O que a enfraqueceria |
|---|---|---|
| manutenção autorizada | chamado, janela, responsável e ferramenta compatíveis | ausência de autorização e execução fora da janela |
| erro de sincronização | processo conhecido, padrão repetível e logs do cliente | comando interativo associado a uma pessoa |
| uso indevido da conta | sessão correlacionável, ação incompatível com a função e ausência de aprovação | atribuição forte a procedimento autorizado |
| software malicioso | processo desconhecido, execução anômala e outros indicadores coerentes | ferramenta aprovada e comportamento reproduzível |

O analista não escolhe a narrativa mais dramática. Ele procura a coleta de maior **valor discriminante**: o dado que mais altera a preferência entre explicações.

### Tempo, identidade e atribuição

Horários próximos permitem correlação inicial, mas não estabelecem causalidade. Relógios podem estar dessincronizados; uma conta pode ser compartilhada; um serviço pode executar uma ação em nome de outra pessoa; e um log pode registrar apenas o componente que recebeu a solicitação. Atribuição exige combinar, quando disponíveis:

- identidade individual e método de autenticação;
- identificador de sessão ou requisição;
- origem, destino e caminho de rede;
- processo, comando ou aplicação responsável;
- política, chamado e janela autorizada;
- integridade, retenção e sincronização temporal dos registros.

Ausência de um desses elementos não prova inocência nem comprometimento. Ela reduz a força da conclusão e precisa aparecer no encaminhamento.

### Qualidade da evidência

Antes de usar um registro para decidir, pergunte sobre sua proveniência: quem o produziu, em qual relógio, com qual nível de detalhe, por quanto tempo foi retido e se poderia ter sido alterado. Um log é uma representação do evento segundo a instrumentação daquele componente; não é o evento completo.

## Decisão profissional

| Encaminhamento | Quando faz sentido | O que registrar |
|---|---|---|
| Escalar | consequência plausível e indícios suficientes | responsável, urgência e evidências |
| Coletar | explicações continuam concorrentes | dado solicitado e decisão que ele altera |
| Encerrar | explicação legítima foi sustentada | justificativa e condições para reabrir |

## Evidência de conclusão

A nota deve conter observações literais, duas ameaças candidatas de naturezas diferentes, encaminhamento justificado e uma frase sobre o que ainda não pode ser concluído.

## Revisão rápida

1. Por que proximidade temporal não prova causalidade?
2. Que campos tornam uma ameaça verificável?
3. Quando “coletar” é melhor que “escalar”?

## Fontes

- [OWASP Threat Modeling Project](https://owasp.org/www-project-threat-modeling/) — ponto de entrada mantido pela OWASP e abordagem das quatro perguntas.
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) — escopo, decomposição, identificação e tratamento.
- [NIST Cybersecurity Framework 2.0](https://doi.org/10.6028/NIST.CSWP.29) — resultados para identificar, detectar, responder e governar risco.
- [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) — fundamentos de tratamento de incidentes e análise de evidências; consultar também o histórico de revisões do NIST.
- [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) — gestão e análise de logs de segurança.
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) — investigação e segurança em ambientes OT, com restrições de disponibilidade e safety.
