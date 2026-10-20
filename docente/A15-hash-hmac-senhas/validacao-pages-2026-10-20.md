# Prática TLS com sockets — validação para Pages, 20 out. 2026

A publicação da página estudantil e seus arquivos foi solicitada explicitamente pelo docente. O protótipo interno permanece como histórico de exploração; a edição pública é `docs/praticas/tls-sockets.md`, ligada a A15/A16 e à C3 da entrega única.

- ZIP extraído em pasta temporária; os três programas usados vieram desse pacote.
- Python 3.14.4 / OpenSSL 3.5.5 em Linux: preparação, recusa de sobrescrita, TLS 1.3, três respostas na mesma conexão e fingerprint recebido conferidos.
- Nome incompatível e CA independente recusados antes das mensagens de aplicação; arquivo de CA ausente identificado como erro operacional.
- Fontes individuais idênticos aos originais validados; ZIP sem PEM ou materiais gerados.
- Validador editorial e build estrito do MkDocs aprovados em cópia isolada da main remota.
- Âncoras de atividade/fontes, links de downloads e fontes completos renderizados conferidos. Sem árvore docente ou privadas no site.
- Página inspecionada em Chrome headless em 1440 e 390 px; abertura e blocos de chaves/conexão legíveis, tabelas e código com rolagem local.

A15 aponta para a aplicação; A16 oferece T1–T3 como alternativa à execução L1–L3. Conceitos do handshake, demais registros e entrega única permanecem. O recorte do módulo deve substituir tempo de prática, sem soma automática aos 100 minutos. Não foi reaberta simétrica.

Limites: não houve teste no WSL/Windows, aferição de tempo presencial, observação de aprendizagem, captura de rede, revogação, mTLS ou implantação de VPN. O ensaio de TLS não comprova execução desses itens. Os programas não exportam chaves de sessão. Drive e Classroom não foram alterados.

O resultado remoto do deploy e a conferência HTTP/downloads serão registrados em `docente/publicacao-google-drive.md` após a publicação.
