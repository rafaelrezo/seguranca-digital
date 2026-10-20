# Plano docente — A15 — chaves públicas, assinaturas e certificados

**Integração de 20 out.:** A aplicação [TLS com sockets](../../docs/praticas/tls-sockets.md) foi autorizada para publicação. Usar o mapa de arquivos como ponte após P1–P3; a execução completa pertence à escolha de transporte de C3, sem acréscimo automático aos 100 minutos da A15.

**Estado:** edição consolidada em 15 out. 2026, aprovada para produção local. Não confirma realização, versão usada pela turma nem publicação remota. A numeração posterior/calendário e carga global continuam pendentes.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa/ganho | Explicar funções assimétricas, executar limite OAEP/envelope híbrido e assinatura e verificar certificado emitido localmente. |
| Herança confirmável | A14: cifra, requisito do segredo prévio e limite do acordo sem autenticação; não presumir execução individual. |
| Carga | 100 minutos, 40 T/60 P planejados; confirmar tempo realizado. |
| Infraestrutura | Linux/WSL, VS Code, OpenSSL e Python com cryptography da A14; não precisa de Internet para a PKI local. |
| Evidência | Parte correspondente C1–C4 da atividade única A14–A17; uma entrega após A17. |
| Critério | Mecanismo, previsão, execução ou dado fornecido, resultado, contraprova e limite. |
| Página e fontes | [Página integral](../../docs/aulas/A15-chaves-assinaturas-certificados.md); fontes primárias no ponto de uso. |

## Cadeia de aprendizagem

A14: cifra, requisito do segredo prévio e limite do acordo sem autenticação; não presumir execução individual. → conferir ambiente → prever → executar comando/programa ou ler alternativa identificada → localizar rastro → explicar propriedade → decidir → confrontar caso negativo → registrar C correspondente → A16 reabre ca-a15.pem, servidor-a15.pem e servidor-chave-a15.pem em TLS local. Prazo de dois dias exige reemissão se necessário.

## Condução e tempo

0–10 papéis do par/T3 (4T/6P); 10–35 RSA, representação, OAEP e híbrida (12T/13P); 35–55 assinatura V1–V3 (7T/13P); 55–65 origem da pública (6T/4P); 65–95 emissão e P1–P3 (10T/20P); 95–100 C2/revisão (1T/4P). Total 100, 40T/60P. Preservar a matemática completa como estudo; extensões M=4/M=55 e H3 são seletivas. A prática de certificado local substitui a dependência presencial de inspeção externa; a inspeção do site permanece consulta.

Demonstrar ferramenta e explicar parâmetro antes da interpretação. Em cada parada, pedir previsão curta; esperar estado correto; localizar saída e pedir uma justificativa. Reprodução é permitida e guiada, sem condicionar participação ao funcionamento individual. Manter fonte e comando separados, diagnóstico e alternativa da página disponíveis.

## Respostas e limites

R0: n55/phi40/e3/d27, M7 → C13 → M7; representação OLA=5196865 não cabe em 55. OAEP/SHA256/RSA2048 aceita190, recusa191; AES protege4800 bytes e RSA só a chave32. Original verifica; mensagem/chave erradas falham, sem diagnosticar autoria. P1 aceita CA explícita/finalidade/nome; P2 recusa nome; P3 recusa cadeia sem âncora. Erro de arquivo não é recusa criptográfica. CA local não vai ao sistema; não publicar privadas.

Não apresentar erro de caminho, dependência ou rede como falha de autenticação. Preservar teoria completa para estudo; não eliminar explicações para caber no tempo. Para estudantes já fluentes no terminal, reduzir repetição de navegação e manter decisões/contraprovas. Para iniciantes, usar o exemplo trabalhado antes da mudança de uma condição.

## Preparação, contingência e verificação

Ensaiar o percurso mínimo antes da aula e conferir downloads/código/saídas. Registrar separadamente verificação local, implantação em conta AWS, teste Windows e realização em sala; nenhum comprova os outros. Se a ferramenta falhar, registrar erro e usar quadros como dados fornecidos. Não enviar privadas, frases ou perfis para a entrega ou IA.

## Ponte

A16 reabre ca-a15.pem, servidor-a15.pem e servidor-chave-a15.pem em TLS local. Prazo de dois dias exige reemissão se necessário.

## Distribuição por repositório — 15 out. 2026

Fonte operacional: https://github.com/rafaelrezo/seguranca-digital-praticas, com README simples e pastas a14–a17. Preparação Python única na raiz; reativar ambiente em cada terminal. Clone HTTPS ou ZIP, sem conta estudantil/fork. Arquivos e entradas vêm prontos; trechos no MkDocs são leitura, não montagem. Usar comandos por etapa e preservar pausas de previsão/interpretação. Dados de saída, chaves e perfis são gerados localmente e ignorados pelo Git. Na A17, enviar scripts ao servidor por SCP; continuam console EC2 e cliente nativo Windows/Linux, sem provisionamento pelo agente. Download histórico da página é compatível. Testar as interfaces dos scripts em cópia temporária, sem publicar segredos ou supor ensaio EC2/Windows.

## Comparativo matemático RSA/ECDSA — 15 out. 2026

Docente relatou explicação matemática de RSA aos alunos; versão usada e demais tópicos/entregas não foram informados. Acrescentar #rsa-ecdsa à página: distinguir OAEP/PSS/ECDSA/ECDHE; comparar potência modular e soma/multiplicação de pontos; curva didática y²=x³+2x+2 mod17, G(5,1), ordem19, d7/Q(0,6), k3/z11 e assinatura(10,8). Verificação w12/u1=18/u2=6/X(10,6); z12 muda X para(3,16) e recusa. As contas numéricas são aprofundamento de estudo/seleção na exposição, sem alongar automaticamente o encontro de100min. No bloco35–55, usar a tabela e selecionar uma etapa do arquivo pronto; demais demonstrações são extensão. P1–P3 e assinatura V1–V3 continuam no percurso mínimo. Não exigir outro produto ou inferir que nova prática foi ministrada.

Arquivo comparar_rsa_ecdsa_a15.py no repositório de práticas, etapa1 didática e etapa2 real. RSA-PSS/3072 e ECDSA/P256 são referências clássicas128bits; RSA2048 referência112. Medir assinatura384bytes RSA e DER variável ECDSA, distinguindo par r/s64bytes e codificação. Não medir desempenho nem afirmar equivalência por bit de chave. Privadas reais não são impressas/salvas; k visível é somente do modelo pequeno. Fonte e validação NIST/RFC/biblioteca na página.
