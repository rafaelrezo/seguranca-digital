# Repositório das práticas A14–A17 — 15 out. 2026

## Distribuição publicada

Por solicitação explícita do docente, criado e publicado o repositório público [rafaelrezo/seguranca-digital-praticas](https://github.com/rafaelrezo/seguranca-digital-praticas), branch `main`, commit inicial `c54d2657c39cf4deba062182df07579e4a5fb590`. Conta autenticada e proprietário conferidos. São 33 arquivos-fonte, com README geral de preparação e READMEs curtos por aula. Não foram enviados arquivos de chave, certificados emitidos, perfis ou resultados de laboratório.

Clone HTTPS e ZIP dispensam conta estudantil/fork. `requirements.txt` fixa cryptography 46.0.5; ambiente Python criado uma vez na raiz e reativado em cada terminal. Cada pasta conserva os insumos e comandos da aula. A14 usa `--etapa 1–4`; RSA numérico/híbrido usa seleção 1–2; S4 usa `--repetir-sal`. Scripts Bash separam operações e mantêm as contraprovas. A17 inclui scripts para o servidor, perfil com nome incorreto e verificadores Windows/Linux; o lançamento continua manual no console EC2.

## Alinhamento local do curso

Páginas A14–A17 apontam para as pastas e comandos prontos; trechos Python são leitura expansível, sem montagem por copiar/colar. Na A17, a fonte completa fica acessível pelo repositório e pelo download compatível. Os downloads existentes do MkDocs receberam os mesmos programas e conservam os nomes/URLs. Práticas continuam com previsão, operação, leitura, contraprova e limite; C1–C4, entrega única e objetivos preservados.

Arquitetura, roadmap, planos e atividade foram alinhados. Esta distribuição no GitHub não publica automaticamente a edição local do MkDocs, não altera o Drive/Classroom e não comprova execução da turma.

## Verificação executada

- Repositório clonado por HTTPS depois da publicação; 33 blobs comparados à árvore remota, com identidade de commit/arquivos.
- Ambiente virtual limpo criado e dependências instaladas pelo requirements; testes repetidos com esse interpretador usando o clone público.
- Todos os scripts Bash passaram por verificação de sintaxe.
- A14: CBC cifrou/abriu com senha descartável e recuperou bytes iguais; etapas GCM 1–4 respeitaram os limites e executaram rejeições de tag, AAD e segredo diferente.
- A15: geração de chaves preserva par existente; RSA numérico e limite 190/191, envelope longo, assinaturas original/alterada/chave diferente e certificados com nome/CA foram verificados.
- A16: entradas hash/HMAC conferidas, senha com sais próprios e repetidos, servidor/cliente TLS reais por scripts em loopback; nome incorreto recusado e resposta HTTP recebida. Processos de teste encerrados.
- A17: geração de PKI, perfil e perfil incorreto conferidos; este último altera apenas o nome esperado e mantém permissão restrita. CRL assinada validada e cliente revogado recusado pelo OpenSSL. Não foi executada instalação em EC2 ou cliente Windows nesta revisão.
- `.gitignore` comprovadamente exclui privadas, perfis, envelopes e saídas. Insumos de entrada continuam versionados. Downloads MkDocs comparados ao clone publicado: idênticos.
- Validador editorial e build estrito MkDocs em pasta temporária aprovados; o `site/` preexistente foi preservado. Revisão visual A14–A17 em desktop e tela estreita registrada nos artefatos temporários de verificação.

## Limites

Scripts de administração EC2 e verificador `.cmd` foram revisados e têm sintaxe/arquivos conferidos, mas não substituem ensaio AWS Academy/Windows. Permanecem os limites de TUN, conectividade UDP, conta, instalação e encerramento já registrados na validação A17. Nenhum recurso AWS foi lançado pelo agente. Chaves de teste foram geradas somente em diretório temporário, sem envio ao GitHub.

## Complemento CBC e RSA/ECDSA — 15 out. 2026

Acrescentado `a15/comparar_rsa_ecdsa_a15.py` e atualizados os READMEs da raiz e A15 no commit `6b79f456de86bb3c2c5e9a83bd453c87b409d8f4`, publicado na main. O repositório passa a 34 arquivos-fonte; o blob remoto do novo programa é `f8a51d7f1b3c4ea2d3907508c5175a77ce65d547`. Sem novas dependências ou chaves publicadas.

A etapa 1 conferiu a curva módulo 17, G de ordem 19, Q=(0,6), assinatura (10,8), aceitação para z=11 e recusa para z=12. A etapa 2 executou assinaturas RSA-PSS/3072 e ECDSA/P-256 com SHA-256: originais aceitos e alterados recusados, RSA com 384 bytes, ECDSA DER variável e par r/s em largura fixa de 64 bytes. Não foi medido desempenho.

Na A14, o ensaio OpenSSL com remoção automática de padding desativada confirmou 23 bytes → 32 bytes, com nove bytes finais 09; a abertura normal recuperou 23 bytes. PKCS#7 também foi conferido para entradas de 20 e 16 bytes; UTF-8 confirmou A=1 byte e á=2 bytes. Páginas e planos alinhados, sem mudar a atividade ou alegar realização dessas práticas.

Build MkDocs estrito e validador editorial aprovados. Páginas A14/A15 renderizadas em 1440 e 390 px, com fórmulas e imagens carregadas, sem erros matemáticos ou transbordamento da página; tabelas conservam rolagem própria em tela estreita. Recortes de padding, comparação, assinatura e verificação foram inspecionados visualmente. Artefatos temporários em `/tmp/seguranca-a14-a15-matematica-review`. O site não foi publicado nesta revisão.
