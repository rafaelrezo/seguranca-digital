# Registro de publicação no Google Drive

## Usos reais documentados integrados a A14–A16 — 8 out. 2026

Por solicitação docente, os núcleos conceituais receberam contexto de aplicação próximo às definições e às práticas: BitLocker para proteção de volumes; KeePass para CBC/IV e verificação separada; OpenSSL para senha/sal; HTTPS para GCM/nonce/AAD e acordo; SSH para separação e procedência de chaves; APT para assinatura de metadados; certificado do domínio do curso; AWS KMS para cifragem de envelope, rotação e dependência de cópias; imagens Ubuntu para hash; webhooks GitHub para HMAC; Django 5.2 para registro de senhas. As fontes primárias foram consultadas e vinculadas no ponto de uso. O material distingue os formatos reais dos arquivos didáticos, versões internas do KMS de chaves distintas no quadro e proteção criptográfica de autorização e duplicidade. `AGENTS.md`, arquitetura e planos docentes foram alinhados; não há nova instalação, prática obrigatória ou entrega. Códigos, comandos, âncoras e distribuição de hash/HMAC/senhas no final da A16 permanecem.

Commit `92de3ced37667d33a380dc66d4ecee6d8c319370` enviado à `main`. [Validação 37835056497](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37835056497) e [deploy 37835056218](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37835056218) concluíram com sucesso. Validador editorial, build estrito e `git diff --check` passaram; a comparação dos blocos Bash/Python e das âncoras com a versão anterior confirmou sua preservação. Recortes renderizados com os estilos do site foram inspecionados em 390 e 1440 px. As páginas públicas A14, A15 e A16 responderam HTTP 200 com os contextos novos. As cópias locais foram sincronizadas sem alterar o histórico exclusivo da arquitetura no checkout docente. Google Drive e Classroom não foram alterados; publicação não comprova realização das aulas nem seus tempos planejados.

## A14 reconciliada com comunicação e origem da chave; hash no final da A16 — 8 out. 2026

As capturas docentes de 16h05 e 16h09 foram incorporadas à A14 como exemplo de mensagem fictícia de transferência, envelope da aplicação e obtenção da mesma chave pelo receptor. O programa `aes_gcm_a14.py` está dividido em blocos copiáveis e progressivos: derivação por PBKDF2, cifragem, arquivo JSON com campos públicos, reconstrução da chave e abertura G1, contraprovas G2/G3. Mantém a saída completa solicitada de Key/Nonce/AAD/Text/Sealed/Ciphertext/Tag e acrescenta sal. As extensões G4–G6 observam nonce distinto, abertura repetida do envelope e rejeição com senha diferente. A aula explicita segredo previamente compartilhado, limites contra replay e a ponte de acordo autenticado para A15/A16. Os prompts 19–20 complementam os esquemas nativos; as capturas não foram republicadas. A regra editorial no `AGENTS.md` exige que exemplos com receptor expliquem a origem do segredo antes da prática.

Por redistribuição solicitada durante a revisão, o bloco dependente hash/HMAC/verificadores de senha passou ao final da A16, depois de TLS e ciclo das chaves, com pasta `~/cripto-a16` e novo download `verificador_senhas_a16.py`; o arquivo anterior foi preservado. A15 fornece a definição breve de hash necessária à assinatura. Navegação, percurso, roadmap, arquitetura, planos e registro único foram alinhados: C1 trata da cifra/envelope, C3 recebe os testes de hash e senha. A carga permanece 100 minutos e 50 T/50 P **planejados** por encontro, sem comprovar execução.

Commit `fe67641e34acc954e69eaee1ae42347786c3e7e9` enviado à `main`. [Validação 37832337601](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37832337601) e [deploy 37832337594](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37832337594) concluíram com sucesso. Validador editorial, build estrito e `git diff --check` passaram; cada prefixo do programa foi executado conforme a montagem incremental, G1–G6 foram confirmados, e a composição pública coincidiu com o download. O verificador de A16 coincidiu com o código mostrado e produziu S1 False, S2 True e S3 False. Esquemas foram inspecionados em desktop e recortes com o mesmo estilo em 390 px. As páginas públicas [A14](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/), [A15](https://rafaelrezo.github.io/seguranca-digital/aulas/A15-chaves-assinaturas-certificados/), [A16](https://rafaelrezo.github.io/seguranca-digital/aulas/A16-tls-ciclo-de-chaves/), atividade e prompts responderam HTTP 200; os dois downloads públicos são idênticos aos arquivos testados. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## IV explicado na A14 — 8 out. 2026

Acrescentada a seção `#iv` antes da derivação por senha: significado de IV (*Initialization Vector*, vetor de inicialização), pronúncia “i-vê”, função no primeiro bloco do encadeamento CBC, tamanho de 16 bytes no AES-CBC, geração imprevisível e necessidade do mesmo IV na abertura. O esquema vertical e o exemplo mostram seu papel separado da chave; a seção seguinte distingue sal na derivação e IV na cifragem, explicando a reconstrução por PBKDF2 no comando OpenSSL de T2. Plano docente alinhado, com referência à NIST SP 800-38A.

Commit `338a9b692bb76bdf9a43656ad13a275a0738a8ba` enviado à `main`. [Validação 37828640506](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37828640506) e [deploy 37828640535](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37828640535) concluíram com sucesso. Validador editorial, build estrito e `git diff --check` passaram; esquema e texto foram inspecionados em desktop e recorte com o mesmo estilo em 390 px. A [seção IV pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/#iv) retornou HTTP 200 com a definição e a pronúncia. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## A14 com explicação direta e esquemas visuais — 8 out. 2026

A sequência de capturas fornecida pelo docente serviu de referência editorial para a A14. A página agora apresenta definições curtas antes dos parâmetros, esquemas nativos para AES/modo, senha + sal → PBKDF2 → chave/IV, entradas e saídas de AES-GCM, e cadastro/conferência de senha. Uma tabela distingue chave, sal, nonce e AAD; a seção de GCM responde quando há sal e quando não há. As explicações de hash e HMAC foram condensadas sem retirar as práticas no WSL/VS Code. Os prompts opcionais das Imagens 17 e 18 foram numerados e descritos; as capturas de referência não foram republicadas. Plano docente, arquitetura e `AGENTS.md` registram o padrão explicativo.

Commit `44aeccb17ba2c4edd3a2fba3e5df0af4cdfdbdcf` enviado à `main`. [Validação 37827337725](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37827337725) e [deploy 37827337496](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37827337496) concluíram com sucesso. Validador editorial, build estrito, `git diff --check`, execução dos programas AES-GCM e de senha, e inspeção visual em 1440/390 px passaram. A [A14 pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/) e os [prompts numerados](https://rafaelrezo.github.io/seguranca-digital/assets/a14-a17/prompts-ilustrativos/) retornaram HTTP 200 com os novos marcadores. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## Senhas com cadastro e conferência executados na A14 — 8 out. 2026

A seção de senhas passou a explicar por que SHA-256 de arquivo não resolve armazenamento de senha, o que o programa de login precisa guardar e como compara uma tentativa sem recuperar a senha. A oficina P-A–P-C de configurações fictícias foi substituída pelo arquivo Python `verificador_senhas_a14.py`, copiável no VS Code e executável no WSL. A mesma senha com sais distintos produz verificadores diferentes (S1); a tentativa correta é aceita (S2) e a incorreta rejeitada (S3). A extensão S4 repete o sal para mostrar a perda dessa separação. O código usa PBKDF2-HMAC-SHA256 com 100.000 iterações somente como parâmetro didático; a página remete às recomendações atuais para produção. C1 foi reduzida a recortes curtos de resultados e explicações ligadas a eles. Plano, roadmap, arquitetura e `AGENTS.md` foram alinhados.

Commit `9a017183ddc594ebff3bc2926f02305cabb7ebf3` enviado à `main`. [Validação 37825973459](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37825973459) e [deploy 37825973589](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37825973589) concluíram com sucesso. O programa foi testado nas condições normais e com sal repetido; build estrito e validador editorial passaram. A [A14 pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/#senhas) e o [arquivo Python](https://rafaelrezo.github.io/seguranca-digital/assets/a14-a17/verificador_senhas_a14.py) retornaram HTTP 200; o arquivo público é idêntico ao do repositório. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## Saída completa e fundamentação de nonce/AAD na A14 — 8 out. 2026

O programa Python da A14 passou a mostrar chave e nonce descartáveis, AAD e texto em hexadecimal e como texto legível, o conjunto `Sealed`, `Ciphertext` e `Tag`, antes das verificações G1–G3. A página agora explica nonce e AAD antes de apresentá-los como parâmetros: nonce público e novo por operação sob a mesma chave; AAD como rótulo visível vinculado ao conteúdo pela tag. Distingue nonce do sal de PBKDF2 e usa `versao=1`/`versao=2` para explicar G3. A chave exibida serve somente ao laboratório e não deve entrar na entrega. Plano docente, atividade e arquitetura foram alinhados.

Commits `b250da92a7365735e30c72d963cfcbaf6996b1f3` e `0bd49a41cdce7ed97a4329449113b9a00b13dec9` enviados à `main`. A [validação 37824844844](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37824844844), o [deploy 37824844835](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37824844835), a [validação 37825206918](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37825206918) e o [deploy 37825206901](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37825206901) concluíram com sucesso. A execução confirmou `Sealed = Ciphertext + Tag`, G1 válido e rejeição de G2/G3. A [A14 pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/#propriedades) e o [arquivo Python](https://rafaelrezo.github.io/seguranca-digital/assets/a14-a17/aes_gcm_a14.py) retornaram HTTP 200 com os novos marcadores. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## Código AES-GCM copiável no VS Code — 8 out. 2026

Por correção docente, a prática G1–G3 da A14 passou de código embutido em comando Bash para arquivo Python `aes_gcm_a14.py`, mostrado em bloco próprio e oferecido para download. A página orienta abrir `~/cripto-a14` no VS Code via WSL, salvar o arquivo e executá-lo com `python3 aes_gcm_a14.py`; também explica erros de caminho e dependência. O plano docente, a arquitetura e o `AGENTS.md` foram alinhados. A comparação entre tag original, tag alterada e AAD alterado permanece igual.

Commit `18d82b37ec5c7c27354f4b4b0f673e5a02c7b04a` enviado à `main`. [Validação 37823406624](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37823406624) e [deploy 37823406496](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37823406496) concluíram com sucesso. O arquivo foi executado com G1 aceito e G2/G3 rejeitados; build estrito e validador editorial passaram. A [A14 pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/#gcm-terminal) e o [arquivo Python público](https://rafaelrezo.github.io/seguranca-digital/assets/a14-a17/aes_gcm_a14.py) retornaram HTTP 200; o arquivo público é idêntico ao do repositório. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## Práticas de GCM e certificado no terminal — 8 out. 2026

A pedido do docente, o painel de cliques de AES-GCM foi removido da A14. A prática no WSL usa Python `cryptography`: G1 abre o conjunto original, G2 altera um bit da tag e é rejeitado, G3 altera apenas o AAD e também é rejeitado. A A15 passou a inspecionar o certificado real com OpenSSL no terminal. C1, plano da A14, roadmap, arquitetura e diretriz de práticas no `AGENTS.md` foram alinhados. Os quadros de resultados permanecem como alternativa declarada, sem simular execução estudantil.

Commit `f10eac62d33bd734fa354a5d15292df2e43b5035` enviado à `main`. [Validação 37821569275](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37821569275) e [deploy 37821569186](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37821569186) concluíram com sucesso. O código G1–G3 foi executado, a inspeção real com OpenSSL retornou verificação aceita no WSL de teste, e as páginas públicas [A14](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/) e [A15](https://rafaelrezo.github.io/seguranca-digital/aulas/A15-chaves-assinaturas-certificados/) retornaram HTTP 200 com os novos marcadores. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## Explicação de PBKDF2, sal e comandos da A14 — 8 out. 2026

Após correção docente, a prática T2 da A14 passou a definir CBC/IV, senha versus chave AES, PBKDF2, sal público por cifragem e contagem explícita de 10.000 repetições no ensaio antes dos comandos. A saída `Salted__` e a posição do sal no arquivo são interpretadas; cada linha das práticas WSL T1, T2, SHA-256 e HMAC tem sua função explicada. C1 e o plano docente foram alinhados, sem nova entrega. O comando de abertura recuperou o texto original; as linhas de HMAC reproduziram o mesmo código para a mesma mensagem/chave e códigos diferentes quando mensagem ou chave mudaram. As 10.000 repetições são parâmetro didático, não recomendação de produção.

Commit `88edc2bd3b8e6ea76a7c3dc996bf227a9be02285` enviado à `main`. [Validação 37819362436](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37819362436) e [deploy 37819362532](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37819362532) concluíram com sucesso. A [A14 pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/) retornou HTTP 200 com os novos marcadores. Google Drive e Classroom não foram alterados. Publicação não comprova realização da aula.

## A14–A16 reagrupadas e revisão de leitura publicadas — 8 out. 2026

A decisão docente de reunir A14–A15 na A14 e resumir A16–A18 em A15–A16 foi aplicada com práticas curtas ao longo de cada conceito. A14 usa WSL/OpenSSL para observar cifra CBC, SHA-256 e HMAC, e Web Crypto para AES-GCM; A15 usa chaves descartáveis e assinatura no terminal, além de inspeção de certificado; A16 relaciona TLS, autorização e ciclo de chaves. A atividade única agora é C1–C3. A regra definitiva de parágrafos curtos e alternância criteriosa com itens foi acrescentada ao `AGENTS.md`, e as três páginas foram revisadas, em especial a seção de integridade/autenticação mostrada no print do docente. Os prompts opcionais das Imagens 14–16 continuam numerados. As URLs antigas A15–A18 exibem avisos de localização; seus conteúdos anteriores permanecem no histórico Git.

Commit `332025229b822276eb9fe5d022dbd64e5559126c` enviado à `main`. [Validação 37818065239](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37818065239) e [deploy 37818065210](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37818065210) concluíram com sucesso. Build estrito, validador editorial, comandos OpenSSL/`sha256sum` e leitura em 1440/390 px foram verificados. [A14](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/), [A15](https://rafaelrezo.github.io/seguranca-digital/aulas/A15-chaves-assinaturas-certificados/), [A16](https://rafaelrezo.github.io/seguranca-digital/aulas/A16-tls-ciclo-de-chaves/), [atividade](https://rafaelrezo.github.io/seguranca-digital/atividades/A14-A18-criptografia-confianca/#atividade) e [prompts](https://rafaelrezo.github.io/seguranca-digital/assets/a14-a17/prompts-ilustrativos/) retornaram HTTP 200 com conteúdo esperado. Google Drive e Classroom não foram alterados. Publicação não comprova realização dos encontros; a numeração posterior exige conciliação.

## Fundamentação e esquema da cifra simétrica na A14 — 8 out. 2026

Por correção docente, a A14 passou a definir explicitamente a mesma chave secreta na cifragem e na decifragem, com esquema nativo e exemplo trabalhado. A exposição explica AES como cifra de blocos, a necessidade de um modo de operação e a diferença entre CBC e GCM antes de nomear os campos de AES-GCM. C1, plano docente, arquitetura e roadmap foram alinhados; o prompt da Imagem 16 foi preparado para inclusão posterior, sem depender dela para a leitura. Commit `7a76bf3597c98b8029a83b25c13e62957910639e` enviado à `main`. [Validação 37812887001](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37812887001) e [deploy 37812887056](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37812887056) concluíram com sucesso. A página A14 e a página de prompts retornaram HTTP 200; a página pública apresenta `#fundamentos`, `#aes` e `#propriedades` nessa ordem e o prompt `#imagem-16`. Google Drive e Classroom não foram alterados. Publicação não comprova realização do encontro.

## Revisão expositiva A14–A17 publicada no GitHub Pages — 8 out. 2026

As quatro páginas de criptografia foram reorganizadas para apresentar fundamentos e tecnologias diretamente, com termos definidos antes das demonstrações. A abertura da atividade C1–C5, os planos docentes, a arquitetura e o roadmap foram alinhados. Os prompts opcionais das Imagens 14 e 15 ficaram disponíveis sem inserir imagens ainda não fornecidas pelo docente. Commit `3ce862c6b5821e1c48d26fcb61715cd0fefdaa30` enviado à `main` a partir de worktree isolado, preservando as demais alterações locais. [Validação 37811003320](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37811003320) e [deploy 37811003758](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37811003758) concluíram com sucesso. A14, A15, A16, A17, a atividade única e a página de prompts retornaram HTTP 200 com marcadores do conteúdo novo. Google Drive e Classroom não foram alterados. Publicação não comprova realização dos encontros.

## Vídeo removido do GitHub Pages — 6 out. 2026

O vídeo `AWykXE3XbaY` foi removido da página inicial, do índice de Fundamentos e da página de Confidencialidade no commit `a5ffb47ea84f8b6750424cd25720a5849596d331`. A cópia histórica em `docente/reconciliacao-mkdocs-2026-09-08/mkdocs-anterior/` foi preservada. O [deploy 37480926569](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37480926569) e a [validação 37480926735](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37480926735) concluíram com sucesso. As três páginas públicas retornaram HTTP 200 sem o identificador do vídeo. Google Drive e Classroom não foram alterados.

## Bloco A14–A18 publicado no GitHub Pages — 6 out. 2026

O pacote de cinco encontros de criptografia e confiança, seus planos docentes, a atividade única C1–C5 e os painéis locais foram publicados na `main` pelo commit `558fa75fc29f8fe972b556add6ed93f23b2401f0`. A [validação 37474925085](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37474925085) e o [deploy 37474925178](https://github.com/rafaelrezo/seguranca-digital/actions/runs/37474925178) concluíram com sucesso. O build estrito e o validador editorial passaram no worktree isolado; a revisão pedagógica confirmou 45–60 minutos de prática planejada por encontro.

As páginas [A14](https://rafaelrezo.github.io/seguranca-digital/aulas/A14-cifra-simetrica-autenticada/), [A15](https://rafaelrezo.github.io/seguranca-digital/aulas/A15-hash-hmac-senhas/), [A16](https://rafaelrezo.github.io/seguranca-digital/aulas/A16-chaves-assinaturas/), [A17](https://rafaelrezo.github.io/seguranca-digital/aulas/A17-certificados-tls/), [A18](https://rafaelrezo.github.io/seguranca-digital/aulas/A18-ciclo-de-chaves-integracao/) e a [atividade única](https://rafaelrezo.github.io/seguranca-digital/atividades/A14-A18-criptografia-confianca/#atividade) retornaram HTTP 200 e conteúdo esperado. Os quatro scripts publicados coincidem byte a byte com os arquivos do commit. O Google Drive e o Classroom não foram alterados. A publicação não comprova realização da A13 nem fixa o calendário posterior.

## Linguagem do simulador A13 simplificada — 1º out. 2026

O docente apontou que expressões como “componente instalado no modelo” exigiam inferências desnecessárias. Os doze exemplos do simulador passaram a nomear programas, arquivos, dispositivos e mudanças concretas. A interface usa “Quem age → O que faz → O que é afetado”; no Backdoor, o programa “Assistente de suporte” acrescenta uma entrada escondida sem senha à lista de formas de entrar. Vírus e worm deixaram de usar marcadores V/W. Uma explicação inicial esclarece que a tela apenas altera objetos na memória do navegador, e a página contém um exemplo trabalhado de Backdoor. O plano docente registra a correção; a A13 permanece prospectiva.

Commit `0a5b5f3f` enviado à `main`. O [deploy 36927991988](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36927991988) e a [validação 36927991997](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36927991997) concluíram com sucesso. Build estrito, validador editorial, execução dos doze exemplos, verificação de sintaxe e inspeção visual do Backdoor em 390 px passaram. A [página A13](https://rafaelrezo.github.io/seguranca-digital/aulas/A13-protecao-de-endpoints/) e o [JavaScript publicado](https://rafaelrezo.github.io/seguranca-digital/javascripts/a13-simulador.js) foram conferidos após o deploy. Não houve alteração no Google Drive nem envio ao Classroom; publicação não comprova execução em aula.

## A13 em abas com simulador visual publicada — 1º out. 2026

Após duas correções docentes, os procedimentos de observação Windows e Ubuntu aparecem em abas alternativas, com a interpretação comum logo abaixo. O simulador de malware passou a mostrar **origem → ação simulada → alvo** e cartões de cada objeto com estados **Antes/Depois**, além de uma leitura trabalhada que compara o arquivo hospedeiro alterado no vírus ao outro dispositivo alcançado pelo worm. O código permanece limitado a objetos JavaScript em memória; M1–M12 são a alternativa sem JavaScript. O plano docente registra a nova representação; a A13 não foi declarada ministrada.

Commits `43576a13` (abas) e `dab131dc` (simulador visual) enviados à `main`. Os [deploys 36925765087](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36925765087) e [36926277170](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36926277170), com as [validações 36925765192](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36925765192) e [36926277220](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36926277220), concluíram com sucesso. Build estrito, validador editorial, execução dos doze modelos e inspeção visual local de vírus e worm em 390 px passaram. A [página A13](https://rafaelrezo.github.io/seguranca-digital/aulas/A13-protecao-de-endpoints/) e o [JavaScript publicado](https://rafaelrezo.github.io/seguranca-digital/javascripts/a13-simulador.js) foram conferidos após o último deploy. Google Drive e Classroom não foram alterados.

## A13 com roteiros Windows/Ubuntu e simulador publicada — 1º out. 2026

Por correção docente, a observação benigna foi separada em dois procedimentos completos e alternativos: Windows W1/W2 e Ubuntu U1/U2, cada um com estado inicial, ações, saídas, registro, alternativa e encerramento. O antigo CSV L1/L2 permanece como ensaio independente. A demonstração de famílias agora inclui o código JavaScript `docs/javascripts/a13-simulador.js`, com doze modelos executáveis apenas em memória no navegador; a tabela M1–M12 é alternativa sem JavaScript. Arquitetura e plano docente foram alinhados; a A13 continua prospectiva.

Commit `42c94858` enviado à `main`. O [deploy 36924903713](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36924903713) e a [validação 36924903727](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36924903727) concluíram com sucesso. O build estrito, validador editorial, verificação sintática JavaScript, execução dos doze modelos e teste local dos comandos Ubuntu passaram. A [página A13](https://rafaelrezo.github.io/seguranca-digital/aulas/A13-protecao-de-endpoints/) e o [código-fonte do simulador](https://rafaelrezo.github.io/seguranca-digital/javascripts/a13-simulador.js) foram consultados após o deploy. Não houve alteração no Google Drive nem envio ao Classroom; publicação não comprova execução em aula.

## Procedimentos e exemplos seguros da A13 publicados — 1º out. 2026

Após retorno docente, a A13 passou a ter observação benigna guiada no Windows (Bloco de Notas, Explorador e Gerenciador de Tarefas), com W1/W2, resultado esperado, registro e parada; o CSV Linux L1/L2 ficou como comparação opcional. A tabela define as famílias e funções de malware presentes no material, seguida de M1–M12, rastros fictícios para demonstrar seus mecanismos sem executar malware. As leituras de incidentes, controles, E1–E4 e resposta agora dizem explicitamente o que ler, escrever e quando parar. Arquitetura e plano docente foram alinhados; a A13 não foi declarada ministrada.

Commit `51be90f4` enviado à `main`. O [deploy 36923335533](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36923335533) e a [validação 36923335771](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36923335771) concluíram com sucesso. Build estrito, validador editorial e `git diff --check` passaram; a [página A13](https://rafaelrezo.github.io/seguranca-digital/aulas/A13-protecao-de-endpoints/) foi consultada após o deploy e continha as novas seções. Não houve alteração no Google Drive nem envio ao Classroom; publicação não comprova execução em sala.

## A13 expositiva publicada no GitHub Pages — 1º out. 2026

Após solicitação docente para reduzir carga cognitiva, a página A13 foi reorganizada em cinco passos: execução, malware, controles, telemetria e resposta. O texto passou de cerca de 3.990 para 2.050 palavras, mantendo comparação vírus/worm, Stuxnet e Ucrânia 2015, observação benigna L1/L2, exemplo trabalhado E1–E4 e atividade integrada. Referências e limites de inferência permanecem próximos das decisões. O diagnóstico e a condução estão no plano docente A13.

Commit `a7f6df17` enviado à `main`. O [deploy 36921910582](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36921910582) e a [validação 36921910579](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36921910579) concluíram com sucesso. Build estrito, validador editorial, `git diff --check` e inspeção visual local em 1440/390 px passaram. A [página A13](https://rafaelrezo.github.io/seguranca-digital/aulas/A13-protecao-de-endpoints/) retornou HTTP 200 com novo título, comparação vírus/worm e episódios industriais. Não houve alteração no Google Drive nem envio ao Classroom; publicação não comprova realização da aula.

## Revisão A13 publicada no GitHub Pages — 1º out. 2026

Solicitada pelo docente após confirmar A11–A12 como dois encontros de proteção de dados e A13 como endpoint. Commit `09aac769` enviado à `main`. O [deploy 36920111995](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36920111995) e a [validação 36920111899](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36920111899) concluíram com sucesso. O build estrito, o validador editorial, o sincronismo do HTML da atividade e a inspeção visual local em 1440/390 px foram aprovados. As quatro URLs abaixo retornaram HTTP 200 com identificação e conteúdo esperados:

- [A13 — proteção de endpoints](https://rafaelrezo.github.io/seguranca-digital/aulas/A13-protecao-de-endpoints/): incidentes documentados de Stuxnet e rede elétrica ucraniana de 2015, separados dos rastros artificiais da prática.
- [A12 — proteção de dados, continuação](https://rafaelrezo.github.io/seguranca-digital/aulas/A12-protecao-de-dados-continuacao/): registra o segundo encontro sem atribuir tópicos específicos não informados.
- [Atividade integrada A11–A13](https://rafaelrezo.github.io/seguranca-digital/atividades/A11-A12-parecer.html#atividade): título e entrega atualizados; endereço preservado para links anteriores.
- [Endereço anterior de endpoint](https://rafaelrezo.github.io/seguranca-digital/aulas/A12-protecao-de-endpoints/): encaminha à A13.

O plano docente, a arquitetura, o roadmap e o manifesto foram alinhados. Não houve alteração no Google Drive nem envio ao Classroom. A publicação da A13 não comprova a realização do encontro.

## Resumo da LGPD na A11 — 29 set. 2026

Publicada no GitHub Pages a síntese objetiva da Lei nº 13.709/2018 no início da seção LGPD da A11. O commit `e0808163` foi enviado à `main`; a [validação](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36645489502) e o [deploy](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36645489615) concluíram com sucesso. A [página pública](https://rafaelrezo.github.io/seguranca-digital/aulas/A11-protecao-de-dados/#lgpd) contém o resumo e seu HTML coincide com o build local validado. A publicação incluiu somente a página A11; Google Drive e Classroom não foram alterados.

## Publicação A11–A12 confirmada — 24 set. 2026

Solicitada pelo docente e realizada no GitHub Pages. Commits `591832cf` (planejamento e revisões) e `060fc702` (material e atividade) enviados à `main`, preservando a versão remota da A10. [Deploy 36054191697](https://github.com/rafaelrezo/seguranca-digital/actions/runs/36054191697) concluído com sucesso. A11, A12 e HTML da atividade retornaram HTTP 200 com conteúdo idêntico ao build local validado; Chrome conferiu A11 e atividade em 1440/390 px, imagens e links. A atividade está fora do menu geral.

- [A11](https://rafaelrezo.github.io/seguranca-digital/aulas/A11-protecao-de-dados/)
- [A12](https://rafaelrezo.github.io/seguranca-digital/aulas/A12-protecao-de-endpoints/)
- [Atividade independente](https://rafaelrezo.github.io/seguranca-digital/atividades/A11-A12-parecer.html#atividade)

Nenhuma alteração no Google Drive ou envio ao Classroom. Publicação não comprova realização dos encontros. Permanecem as pendências ilustrativas já registradas (Figura 10 e Figuras 6–8). Os registros anteriores de produção local descrevem etapas anteriores a esta publicação.


## Revisão de recuperação, Purview e atividade HTML — 24 set. 2026

A11 com RPO/RTO contextualizados, definições itemizadas, capturas oficiais e acesso público demonstrativo ao Purview. Atividade com HTML independente fora do menu, acessível por links das aulas e do percurso. Fonte Markdown preservada; mesma entrega e rubrica. Build e verificações locais aprovados; nenhuma publicação remota ou alteração no Drive/Classroom.


## Figura 11 incorporada; correção editorial da Figura 10 pendente

Figura 11 validada e inserida com original preservado, alt, legenda e ampliação. Figuras 10 e 12 também incorporadas. A palavra “RODAPÉ:” na Figura 10 foi identificada pelo docente como erro editorial; novo prompt preparado, aguardando imagem corrigida. Pendentes 6–8 na A12. Alterações locais, sem publicação remota.


## Figuras 10 e 12 incorporadas

As duas imagens foram verificadas e inseridas nos lugares dos prompts, com originais preservados, legendas, alt e ampliação. Figura 10 distingue simulação/aplicação; Figura 12 compara pontos independentes de controle e descoberta. A legenda da Figura 12 esclarece o significado das setas. Pendentes 6–8 na A12 e 11 na A11. Alterações locais, sem publicação remota.


## Figura 10 incorporada

Imagem `/tmp/figura10.jpeg` validada: correspondência e registro nos dois estados; simulação sem bloqueio, aplicação com bloqueio no fluxo coberto. Original preservado, prompt arquivado e substituído por figura com legenda, alt e ampliação. Pendentes 6–8 na A12 e 11–12 na A11. Alterações locais, sem publicação remota.


## Figura 13 corrigida e incorporada

Nova versão localizada em `/tmp/figure13.jpeg`, distinta do arquivo anterior. Seta de instruções correta (indústria → prestadora); papéis e ressalvas conferidos. Imagem inserida no lugar do prompt com original preservado, legenda, alt e ampliação. Pendentes 6–8 na A12 e 10–12 na A11. Alteração local, sem publicação remota. Parecer em `A11-A12-protecao-dados-endpoints/figuras/figura-13-revisao.md`.


## Figura 9 incorporada e novo prompt da Figura 13

Figura 9 validada e inserida com legenda esclarecendo a identidade anteriormente autorizada no painel de revogação; original preservado. Figura 13 não incorporada devido à seta invertida; novo prompt reforça origem indústria e ponta na prestadora. Pendentes 6–8 na A12 e 10–13 na A11. Alterações locais, sem publicação remota.


## Figura 13 recebida — correção necessária

Imagem `/tmp/figura13.jpeg` inspecionada. Papéis coerentes, mas seta “Instruções autorizadas” invertida (prestadora → indústria). Não incorporada; prompt precisado para exigir indústria → prestadora. Parecer em `A11-A12-protecao-dados-endpoints/figuras/figura-13-revisao.md`. Sem publicação remota.


## A11 — exemplo CSV condensado e videomonitoramento — 24 set. 2026

Revisão independente aplicada: trecho de CSV reduzido de cerca de mil para duzentas palavras, com comparação, Figura 1 e arquivos para consulta. Responsabilidades e leitura dinâmica ajustadas. Exemplo industrial de videomonitoramento incorporado à tabela LGPD; conferência especializada aprovou as condições de controlador/operador e a posição do técnico. Prompt Figura 13 preparado com personagens por papéis; pendentes 6–8 na A12 e 9–13 na A11. Alterações locais, sem publicação remota, Drive ou Classroom. Ver registros de validação e revisão independente na pasta docente A11–A12.


## A11 — revisão especializada, referências DLP e procedimentos LGPD — 24 set. 2026

Responsabilidades operacionais/legais, controles pragmáticos, LGPD e consequências revisados. Revisão técnica seguida de pedagógica concluídas e aplicadas, inclusive aos acréscimos de pesquisa: sínteses Microsoft/AWS/Fortinet, comparação empresarial/nuvem, exemplo industrial documental e alternativas sem suíte. Não há evidência suficiente para declarar produto mais implantado. Procedimentos LGPD em dois quadros com condições, responsáveis, evidências e links normativos. DOCX artificial do piloto disponível, sem rótulo ou execução real alegada.

Build estrito, verificação editorial e Chrome 1440/390 px aprovados, incluindo rolagem das tabelas por teclado. Novo prompt Figura 12; pendentes 6–8 na A12 e 9–12 na A11. Detalhes e pareceres em `A11-A12-protecao-dados-endpoints/validacao-producao.md`. Duração a reavaliar após leitura docente. **Alterações locais; nenhuma publicação remota, substituição no Drive ou envio ao Classroom.**


## Figura 6 da A12 recebida — revisão pendente de correção

Imagem localizada em `/tmp/figura6.jpeg` após atualização docente. Revisão visual independente e conferência docente técnica: quatro quadros, fusão Execução/Efeito e definição incompleta de Efeito. Não incorporada para preservar a distinção entre as cinco funções. Prompt original mantido; ajustes de regeneração informados ao docente. Parecer em `A11-A12-protecao-dados-endpoints/figuras/figura-6-revisao.md`. Sem alteração pública ou publicação remota.


## A11 ampliada e Figura 5 da A12 — 24 set. 2026

A11 revista com LGPD aplicada, implementação de controles de cópias, permissões/revogação, DLP progressivo, retenção e restauração. Comparação de coluna oculta contextualizada, sem tarefa isolada. Atividade, modelo e planos alinhados; duração a reavaliar após leitura docente. Build estrito, validação editorial, insumos e navegador 1440/390 px aprovados. Figura 5 da A12 recebida, validada e incorporada; original preservado, legenda, alt e ampliação conferidos. Prompts pendentes 6–8 e 9–11. Figura 6 informada pelo docente, mas arquivo ainda não localizado nesta verificação.

Alterações locais; sem publicação remota, Drive ou Classroom. Relatórios em `A11-A12-protecao-dados-endpoints/validacao-producao.md`, `a11-ampliada-browser.json` e `a12-figura5-browser.json`.


## A11 — Figura 4 incorporada localmente — 24 set. 2026

Linha temporal de RPO/RTO validada e inserida no lugar do prompt, com legenda, descrição alternativa e acesso ao original. As quatro figuras da A11 estão incorporadas; prompts 5–8 da A12 pendentes. Build estrito e carregamento em 1440/390 px aprovados. Alteração local, sem publicação remota, Drive ou Classroom.

## A11 — Figura 3 e atualização da Figura 2 — 24 set. 2026

Figura 3 inserida com legenda e descrição alternativa; Figura 2 substituída pela versão reenviada de maior resolução. Originais preservados, ressalvas registradas na área docente. Build estrito e carregamento em 1440/390 px aprovados. Prompts 4–8 pendentes. Alterações locais, sem publicação remota, Drive ou Classroom.

## Figuras 1–2 da A11 incorporadas localmente — 24 set. 2026

Imagens fornecidas pelo docente substituem seus prompts na A11, com legenda, texto alternativo e ampliação. Originais preservados sem edição; ressalvas de textos secundários documentadas na revisão docente. Build estrito e carregamento em 1440/390 px verificados. Prompts 3–8 permanecem pendentes. Publicação remota não executada; Drive e Classroom preservados.

## A11–A12 — conteúdo MkDocs preparado — 24 set. 2026

Páginas de proteção de dados e endpoints, atividade única e insumos produzidos localmente, com sínteses temáticas, textos completos e oito prompts ilustrativos solicitados pelo docente. Build estrito, validação editorial e inspeção em 1440/390 px aprovados. [Registro de validação](A11-A12-protecao-dados-endpoints/validacao-producao.md). Imagens finais serão fornecidas pelo docente. **Publicação remota não executada ou confirmada nesta produção**; Drive e Classroom não alterados.

## A09 — Figura 3 reconciliada com o original — 10 set. 2026

**Publicação verificada:** `3c908e5a92471a1c2d75863df903875c0641149e`; validação `34534496766` e deploy `34534496697` aprovados. SVG, pacote e página públicos conferidos. Esquema inspecionado em tamanho original e na página em 1280/390 px, sem transbordamento.

Print fornecido pelo docente comparado ao esquema; SVG redesenhado em português preservando a cadeia e os qualificadores da Figura 3. Legenda, texto alternativo e pacote sem conexão alinhados. Matriz, atividade e carga preservadas. Publicação no Pages; sem alterações no Drive.

## A09 — resumo aplicado da NIST SP 800-30 Rev. 1 — 10 set. 2026

**Publicação verificada:** commit `1d77d93a930ef8e82a9653069123ace081dca641`; validação `34533111451` e deploy `34533111490` concluídos com sucesso. Página pública, dois esquemas, CSVs, modelos, pacote e CSS conferidos; dez arquivos públicos coincidem com os locais após normalização de finais de linha.

Reconciliação solicitada pelo docente com a edição mais recente: Rev. 1 final de 2012. Oito temas, Figuras 3/5 adaptadas, combinações G-5/I-2, sete vistas de dezessete campos e atividade em novo cenário alinhada. Plano, fontes, modelos e pacote sem conexão atualizados. Validação editorial, build estrito, tabelas e testes de navegador aprovados. Publicação destinada ao Pages; Drive e Classroom preservados. [Registro de reconciliação](A09-decisao-de-riscos/reconciliacao-nist-800-30.md).

## Sínteses e atividade em novo cenário A09 — 10 set. 2026

Publicação `533e21e77bb5f801f0eb10bc50ec4fa4802da5c8`: oito sínteses itemizadas, exemplo de formulação de risco e atividade na central fictícia de equipamentos. Seis riscos levantados pela dupla, matriz de treze campos em branco, controles propostos e verificação planejada. Downloads de estudo e entrega separados; A08, plano e planejamento alinhados. Validação `34525455239` e deploy `34525455213` aprovados. Página, cenário e modelos públicos conferidos por conteúdo/bytes. Registro local posterior ao deploy; detalhes em `docente/A09-decisao-de-riscos/sinteses-e-nova-atividade.md`.

## Matriz junto de cada explicação A09 — 10 set. 2026

Publicação `d39d5cdfd1884a391b5caffe4167899c261fd3c4`: oito visualizações sincronizadas, com campos acrescentados após cada tema (3/5/6/7/10/11/12/13). Critério separado de resultado e tratamento separado de controle. Modelos/pacote/plano alinhados. Validação `34523563434` e deploy `34523563776` aprovados. Ordem pública das etapas e bytes de CSV, pacote, modelo, JS e CSS conferidos. Registro local posterior ao deploy; descrição técnica e validação em `docente/A09-decisao-de-riscos/progressao-da-matriz.md`.

## Ambiente, linha de base e guia da matriz A09 — 10 set. 2026

Figura docente incorporada sem edição; texto do ambiente simplificado e exclusão enfática de CLP/supervisório retirada. Ordem vigente: ambiente ilustrado → linha de base → riscos → guia das colunas → matriz. Pacote sem conexão e plano docente alinhados. Publicação final `4ed8320be594853990582c97957373bfde19bc21`, validação `34522517627` e deploy `34522517470` aprovados; ordem pública, guia, imagem original e pacote conferidos. Registro local posterior ao deploy.

## Contexto autocontido na A09 — 10 set. 2026

Retomada de SGSI, contexto/escopo, diretriz, autoridade, objetivo e acompanhamento adicionada à A09 em `#contexto-a08`; pacote, modelos e plano alinhados. Consulta à A08 e registro prévio são opcionais. Quatro minutos da abertura, sem ampliar os 100 min. Publicação `c5d031713715b8cc110f107cfa5431d843a5857f`; validação `34521657318` e deploy `34521657311` aprovados. Página, âncora e downloads públicos conferidos. Registro local posterior ao deploy.

## Matriz progressiva e revisão editorial A09 — 10 set. 2026

Atualização solicitada: seis riscos, matriz cumulativa editável e exportável, revisão editorial por agente e retirada dos oito fluxos repetidos da página. Alinhados modelo, pacote, plano, diretrizes e planejamento. R01 exemplo, R02 aprofundado, demais comparações breves; 100 min e fechamento na A09 preservados. Registro: `docente/A09-decisao-de-riscos/revisao-editorial-matriz.md`. Validação local aprovada; conferir a publicação no Pages pelo workflow desta revisão.

## Reformulação A09 — 10 set. 2026

Conteúdo preparado para Pages: comprometimento de conta/ransomware; análise, seleção e avaliação de controles encerradas em A09. Alinhados página, pacote, modelo, plano docente, ponte A08 e planejamento; A10 estava pendente naquele momento. Slides e arquivos do Drive preservados. O relatório de planejamento dessa revisão foi retirado do percurso vigente e permanece recuperável no histórico Git; preparação local não comprova publicação ou execução pela turma.

Este registro liga os artefatos versionados no repositório à pasta oficial de distribuição. Ele não substitui as fontes locais nem o histórico Git.


**Publicação verificada:** commit `cb23c39f3e171dd4768e2926cac4f25e8eb1cf52`; validação `34518686762` e deploy `34518686765` concluídos com sucesso. A08/A09 públicas conferidas; pacote, modelo e esquema A09-06 coincidem byte a byte com os arquivos locais. Verificação registrada localmente após o deploy.

## Nome fictício Nuvora — 10 set. 2026

Renomeação solicitada pelo docente em A08/A09, modelos, política e ilustração. Política vigente: PSI-NU-01; procedimento: PR-NU-01. PDF e fonte novos usam `A08-politica-seguranca-nuvora`; a URL antiga do PDF recebe o mesmo conteúdo atualizado para compatibilidade. Originais da política preservados fora do site. Slides e Drive permanecem históricos. Publicado em `d08ca968dbc90fa49601e035485dddcacfdbf2e4`. Validação `34515204060` aprovada; páginas públicas com Nuvora conferidas e PDF/ilustração coincidentes byte a byte com os arquivos locais.

## Revisão temática A08/A09 — 10 set. 2026

Padrão aprovado pelo docente: dez/oito temas, sínteses e esquemas, texto integral de estudo e atividade preservados. O registro de implementação local foi retirado do planejamento vigente e permanece recuperável no histórico Git. Atualização destinada ao Pages; Drive, slides e PDFs históricos preservados. A realização da A08 foi confirmada pelo docente; sua revisão é apoio posterior. Publicação confirmada pelo commit `5af1dbe7c294477fc8e46f0697dc017a08c17801`: validação `34513451775` e deploy `34513451752` concluídos com sucesso; páginas A08/A09, atividade, CSS e esquema conferidos no endereço público.

## Revisão da A08 — 8 set. 2026

`c3e987cc` acrescenta a ilustração ValeVerde após G01–G04, com original preservado e adaptação registrada fora do site. `df58d856` remove metainstruções docentes da página e registra a diretriz no AGENTS.md. Build, validação e deploy 34272556912 aprovados; imagem pública conferida por hash e texto público verificado.

Atualizações posteriores verificadas: `02d5a9ff` amplia a ilustração à largura do conteúdo; `9ef07ea2` explicita a ponte ATT&CK → gestão e apresenta o chamado G02, arquivos e caminhos fictícios antes das perguntas. Validação 34269429532 e deploy 34269429576 aprovados. Página pública, nomes dos documentos, chamado, imagem ampliada e âncoras A08/P1 conferidos.

Publicado o commit `499a44ed` na main: continuidade cenário → regra → consulta Authorization → gestão, com ilustração de abertura fornecida pelo docente, legenda e texto alternativo. Build estrito e deploy 34267892338 aprovados; página pública, âncora de atividade e imagem conferidas, com bytes da imagem idênticos ao arquivo local. Drive e Classroom não foram alterados.

## A08/A09 — publicação integral no Pages verificada

Publicação verificada em 8 de setembro de 2026, commit `8950d7f8`, com build estrito, CI e deploy aprovados. Conteúdo público das duas aulas, P1, âncoras e modelo conferidos.

Após aprovação do confronto histórico, foram preparadas A08 (SGSI) e A09 (decisão de risco), com atividade P1 compartilhada, modelo editável e planos fora de docs/. Novas páginas: `aulas/A08-governanca-sgsi.md` e `aulas/A09-decisao-de-riscos.md`. A publicação está autorizada nesta solicitação; nenhum arquivo do Drive será alterado e nenhuma atividade será enviada ao Classroom. O manifesto do percurso distingue aulas históricas de páginas preparadas. A última aula ministrada confirmada é A07.

## Estado vigente — 8 de setembro de 2026

MkDocs é o material principal para teoria, prática e entrega vinculada ao Classroom. A sincronização normal consiste em revisar a página, validar navegação e `#atividade`, executar o build estrito e conferir a publicação no Pages. Não regenerar apresentações ou PDFs como requisito de uma mudança no site.

Consulta atual: 62 arquivos, sem exclusões ou substituições. A06 tem 37 slides; A07 tem 35 e trata de ATT&CK Enterprise/ICS, com novos IDs incorporados aos links abaixo. A01–A05 são históricos confirmados; realização de A06/A07 a confirmar. A08–A30 permanecem propostas preservadas, fora da sequência pública ativa.

Ver [diagnóstico e matriz de todos os materiais](reconciliacao-mkdocs-2026-09-08/diagnostico.md), [inventário consultado](reconciliacao-mkdocs-2026-09-08/inventario-drive.json) e [condução/links Classroom](reconciliacao-mkdocs-2026-09-08/conducao.md).

## Memória de publicações anteriores

Os registros abaixo documentam operações passadas. Quantidades, títulos e estados antigos não prevalecem sobre o inventário de 8 de setembro.

## Pasta oficial

- [curso-seguranca-digital](https://drive.google.com/drive/folders/1FDegmvF7LGJ-FTDowgvqoSxncldsZWmB)
- Pasta ID: `1FDegmvF7LGJ-FTDowgvqoSxncldsZWmB`
- Última publicação integral: 18 de agosto de 2026
- Última publicação de pacote: A06–A07, em 1º de setembro de 2026
- Estado curricular dos materiais futuros: superados pela reconciliação de 1º de setembro de 2026; preservar até que cada substituto A06–A25 seja importado, verificado e referenciado

## Inventário publicado

| Faixa | Apresentações | Roteiros práticos | Formato no Drive | Estado |
|---|---:|---:|---|---|
| A01–A04 | 4 | 4 | Google Slides e Google Docs | materiais já ministrados preservados; não substituídos nesta publicação |
| A05 | 1 | 1 | Google Slides e Google Docs | pacote contextual Ana/Bruno, integrado com A07, publicado e verificado em 25 ago. 2026 |
| A06–A07 | 2 | 2 | Google Slides e Google Docs | pacotes reconciliados, importados e verificados em 1º set. 2026 |
| A08–A30 | 23 | 23 | Google Slides e Google Docs | rascunhos publicados sob a arquitetura antiga de 30 encontros/104 min; não ministrar como sequência vigente; preservar até a substituição segura |

> **Registro histórico de 1º set. 2026:** à época, planejaram-se A01–A05 ministradas e 20 encontros restantes de 90 minutos. Esse plano foi superado pela [arquitetura](arquitetura-geral-da-experiencia.md) e pelo [roadmap vigente](roadmap-curso.md); sua versão anterior permanece no histórico Git. Nenhum arquivo futuro foi excluído ou substituído naquela etapa.

Os títulos no Drive começam pelo identificador estável `Axx`. Os roteiros terminam com `— prática`. A pasta deve conter somente uma apresentação vigente por identificador.

## Pacotes imediatos

- A04: [slides](https://docs.google.com/presentation/d/13u_GTiFUcrJ94M4TzzhUeKynbRAjPB5qdftzm7FlxxY) · [prática](https://docs.google.com/document/d/1Bo3ZtgUQG-tVKM7e6rL4KE5we4MC_E9AXhvAEu_AMSM)
- A05 integrada: [slides](https://docs.google.com/presentation/d/1Ubk8Y9okEehajiJ52OztcCsjE0pA99RQqJ_GGT7dOes) · [prática](https://docs.google.com/document/d/1aRyIQUjOT8AH2pGi0w_uUo-o0qw9IDhakQiisRY2aE0)
- A06 — Como antecipar o que pode dar errado?: [slides](https://docs.google.com/presentation/d/1VsG_67MbHLXXCY2oWdMA4pTKH8BFJVjR9GqxM39Zbqs) · [prática](https://docs.google.com/document/d/18_14wi-hmlgPZ5-kgzywkZ8jzD8cwfViizEP7rLTUME)
- A07 — Da aplicação web ao processo industrial: [slides](https://docs.google.com/presentation/d/187O4GeB7Xz62l6ij-is0U7La_26eCO4308GKGYArjqk) · [prática](https://docs.google.com/document/d/19KCkRDyMP4FaXPD3ObMdHkHaGyUY4bE06fgVefsNt_E)

> **Publicação de 1º set. 2026:** A06 e A07 foram publicadas como continuidade prospectiva da A05, sem repetir sua prática no DevTools. A06 possui 20 slides e converte ticket e testes herdados em DFD; A07 possui 22 slides e aprofunda uma ameaça até requisito, controle e três testes. Os dois roteiros foram importados como Google Docs, e as quatro cópias nativas foram verificadas por título, tipo, quantidade de slides e leitura estrutural. Os arquivos temporários de importação foram removidos após a conferência.

> **Reconciliação posterior de 1º set. 2026:** após leitura direta das apresentações vigentes A04/A05, foi removida a herança incorreta de ticket corporativo. A06 passou a formalizar brevemente o fluxo do Juice Shop e concentrar-se em ameaças testáveis; A07 passou a receber três ameaças e aprofundar uma até decisão defensável. As quatro versões provisórias anteriores foram substituídas somente após verificação das novas cópias nativas.

> **Revisão didática urgente de A06 em 1º set. 2026:** a apresentação foi ampliada para 37 slides curtos e progressivos, com exemplos trabalhados, três ilustrações didáticas próprias e quatro capturas oficiais do Microsoft Threat Modeling Tool. A abertura retoma os testes de sessão e propriedade, explicita a lacuna, define modelagem de ameaças e só então apresenta DFD por extenso e sua função. A sequência desenvolve escopo, ativo, ameaça, vulnerabilidade, consequência, evidência e STRIDE antes da aplicação. A cópia anterior foi removida somente após conferir título, contagem e conteúdo da substituta.

> **Revisão visual e conceitual posterior de A06:** os slides 9–16 deixaram de usar uma sequência homogênea de cards e passaram a representar o mesmo caso por rastro anotado, fronteira de autoridade, ramificação de hipóteses, progressão do método, mapa de escopo, relações entre ativos e cadeia causal. Os slides 18–20 agora justificam a entrada de STRIDE, apresentam o acrônimo completo em inglês com tradução e demonstram sua aplicação seletiva a um elemento ou fluxo do DFD.

> **Revisão DFD/STRIDE e ferramenta online:** a notação do DFD passou a ser desenhada com os símbolos usados no OWASP Threat Dragon; o caso Ana/Bruno evolui no mesmo diagrama até uma aplicação guiada de Information Disclosure. A sequência posterior demonstra acesso, desenho, seleção de elemento, sugestões por tipo, formulação e evidência no Threat Dragon. O roteiro prático foi substituído junto com os slides e agora orienta o uso online, exportação e alternativa sem rede.

> **Revisão operacional da oficina:** os slides 28, 29 e 34 deixaram de apresentar textos e perguntas soltas. Eles agora declaram a mudança da demonstração para a prática, a ferramenta e os arquivos a abrir, o estado inicial verificável, a alternativa sem rede, o protocolo de troca, o local do registro e o critério de parada. O roteiro prático recebeu os mesmos passos e exige uma correção após revisão cruzada.
- A30: [slides](https://docs.google.com/presentation/d/1QOiQUn-RibEUmnNKKc0dKpRr1fSesdrYtT1lNK7-KMI) · [prática](https://docs.google.com/document/d/1CVZDX2UK790SgbTuxd3QKt3dzkRhOm0zNPoIleGwEZA)

## Procedimento histórico para atualização opcional de slides e PDF

Ao alterar objetivos, comandos, arquitetura, evidências ou critérios de entrega:

1. atualizar as fontes locais do pacote;
2. regenerar e validar PPTX/PDF e DOCX/PDF;
3. importar a nova apresentação como Google Slides e o roteiro como Google Docs;
4. conferir título, conteúdo, quantidade e ordem dos slides e abertura dos links;
5. mover os arquivos para a pasta oficial;
6. somente depois remover a versão publicada anterior;
7. atualizar este registro quando a pasta, o escopo ou os links imediatos mudarem.

Materiais docentes, gabaritos e notas sensíveis permanecem no diretório local `docente/` e não devem ser colocados na pasta de distribuição aos estudantes.


## Verificação da publicação — SGSI e atividade A09, 8 set. 2026

Commit `98ce218fec8165b7d61a2fe2f5794f8bf63847c2`: mapa ISO/IEC 27001:2022 com Emenda 1:2024, oito passos, exemplos institucionais UCL/LNCC e vídeo na A08; enunciado integral ao final da A09, com modelo alinhado e antiga URL P1 preservada como encaminhamento.

Validação editorial e build estrito aprovados localmente. GitHub Actions: validação `34274398096` e deploy `34274398042`, ambos concluídos com sucesso. Páginas públicas A08/A09 verificadas por HTTP após deploy: exemplos, roteiro, vídeo e atividade presentes. Nenhuma alteração no Drive ou envio ao Classroom nesta publicação.


## Revisão integrada A08–A09 — 8 set. 2026

Commit `02c42e917ca22187bddb896225392aadbf9c6e76`: correções aprovadas das revisões técnica e didática, política aplicada ao percurso, escopo do portal mantido em R02, S01 e estados explícitos, objetivo/medição alinhados, atividade de manter/adaptar diretriz, diagramas e planos consolidados. Plano A08 anterior preservado em histórico separado.

Validação local, links, modelos, âncoras e XML SVG aprovados; três esquemas conferidos em captura de navegador. Revisão documental independente sem bloqueios técnicos/didáticos relevantes. Actions: validação `34281346825` e deploy `34281347014`, ambos sucesso. Páginas A08/A09 e modelo público conferidos após deploy. Sem alterações no Drive ou envio ao Classroom.
