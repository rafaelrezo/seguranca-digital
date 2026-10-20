# Plano docente — A16 — hash, HMAC, senhas e TLS

**Integração de 20 out.:** A [prática TLS com sockets](../../docs/praticas/tls-sockets.md) substitui a execução de transporte L1–L3 por T1–T3, se esse for o percurso escolhido. Preparar ZIP/identidades antes da aula; selecionar o núcleo de 40 minutos no bloco 50–90, mantendo 22T/18P planejados com explicação do mapa/handshake e observação das três condições. Comparação de fingerprint e leitura integral dos fontes são consulta/extensão. Se a condução exceder o bloco, registrar o tempo real; não somar 50 minutos ao plano. C3 continua exigindo distinguir CertificateVerify de Finished pela referência da A16. O protótipo usa CA própria, não substitui os certificados destinados às demais práticas.

**Estado:** edição consolidada em 15 out. 2026, aprovada para produção local. Não confirma realização, versão usada pela turma nem publicação remota. A numeração posterior/calendário e carga global continuam pendentes.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa/ganho | Comparar digest/HMAC/verificador de senha antes de observar TLS; distinguir assinatura de CertificateVerify e HMAC de Finished. |
| Herança confirmável | A15: papéis das chaves, assinatura e certificados locais. Confirmar os arquivos, sem atribuir execução pela mera publicação. |
| Carga | 100 minutos, 45 T/55 P planejados; confirmar tempo realizado. |
| Infraestrutura | Linux/WSL, OpenSSL, Python padrão, VS Code e certificados A15 válidos; duas janelas de terminal no mesmo sistema. |
| Evidência | Parte correspondente C1–C4 da atividade única A14–A17; uma entrega após A17. |
| Critério | Mecanismo, previsão, execução ou dado fornecido, resultado, contraprova e limite. |
| Página e fontes | [Página integral](../../docs/aulas/A16-tls-ciclo-de-chaves.md); fontes primárias no ponto de uso. |

## Cadeia de aprendizagem

A15: papéis das chaves, assinatura e certificados locais. Confirmar os arquivos, sem atribuir execução pela mera publicação. → conferir ambiente → prever → executar comando/programa ou ler alternativa identificada → localizar rastro → explicar propriedade → decidir → confrontar caso negativo → registrar C correspondente → A17 reabre CA confiável, identidade esperada e canal autenticado em servidor EC2 e cliente local Windows/Linux; C3 não encerra a entrega.

## Condução e tempo

0–10 hash/D1 (4T/6P); 10–25 HMAC/M1–M3 (6T/9P); 25–50 senhas/S1–S4 (10T/15P); 50–90 TLS, s_server/s_client e L1–L3 (22T/18P); 90–100 C3/ponte (3T/7P). Total 100, 45T/55P. Contar interpretação/contraprova como prática, exposição como teoria. Não repetir todos os contextos de uso em voz alta. VPN e gestão operacional passam à A17.

Demonstrar ferramenta e explicar parâmetro antes da interpretação. Em cada parada, pedir previsão curta; esperar estado correto; localizar saída e pedir uma justificativa. Reprodução é permitida e guiada, sem condicionar participação ao funcionamento individual. Manter fonte e comando separados, diagnóstico e alternativa da página disponíveis.

## Respostas e limites

D1 distingue bytes e confiança na referência; M1 repete, M2/M3 diferem, sem sigilo/autoria individual. S1False/S2True/S3False; S4True quando sal se repete. Custo100000 é didático. L1 valida CA e nome; L2 muda só o nome esperado e recusa; L3 envia HTTP e recebe diagnóstico. ECDHE não autentica sozinho. CA assina certificado; servidor assina negociação; Finished confirma histórico sob segredo. Chaves de aplicação/direção distintas. -msg mostra interpretação local, não captura em claro. Parar s_server com Ctrl+C.

Não apresentar erro de caminho, dependência ou rede como falha de autenticação. Preservar teoria completa para estudo; não eliminar explicações para caber no tempo. Para estudantes já fluentes no terminal, reduzir repetição de navegação e manter decisões/contraprovas. Para iniciantes, usar o exemplo trabalhado antes da mudança de uma condição.

## Preparação, contingência e verificação

Ensaiar o percurso mínimo antes da aula e conferir downloads/código/saídas. Registrar separadamente verificação local, implantação em conta AWS, teste Windows e realização em sala; nenhum comprova os outros. Se a ferramenta falhar, registrar erro e usar quadros como dados fornecidos. Não enviar privadas, frases ou perfis para a entrega ou IA.

## Ponte

A17 reabre CA confiável, identidade esperada e canal autenticado em servidor EC2 e cliente local Windows/Linux; C3 não encerra a entrega.

## Distribuição por repositório — 15 out. 2026

Fonte operacional: https://github.com/rafaelrezo/seguranca-digital-praticas, com README simples e pastas a14–a17. Preparação Python única na raiz; reativar ambiente em cada terminal. Clone HTTPS ou ZIP, sem conta estudantil/fork. Arquivos e entradas vêm prontos; trechos no MkDocs são leitura, não montagem. Usar comandos por etapa e preservar pausas de previsão/interpretação. Dados de saída, chaves e perfis são gerados localmente e ignorados pelo Git. Na A17, enviar scripts ao servidor por SCP; continuam console EC2 e cliente nativo Windows/Linux, sem provisionamento pelo agente. Download histórico da página é compatível. Testar as interfaces dos scripts em cópia temporária, sem publicar segredos ou supor ensaio EC2/Windows.
