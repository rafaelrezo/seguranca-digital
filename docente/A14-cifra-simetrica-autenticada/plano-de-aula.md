# Plano docente — A14 — cifra simétrica e compartilhamento de chaves (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar mesma chave, AES e modos; verificar sigilo/integridade, envelope GCM e reconstrução da chave; distinguir proteção da mensagem, distribuição do segredo e replay. |
| Herança | A13: conceitos de arquivo, processo e dado, sem atribuir execução não confirmada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL, VS Code ligado ao WSL, Python 3 com biblioteca `cryptography` verificada antes da aula; saídas esperadas na página como alternativa. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | A15: da chave compartilhada ao par público/privado e ao vínculo de identidade. |

## Cadeia de aprendizagem

A13: conceitos de arquivo, processo e dado, sem atribuir execução não confirmada. → definição direta → previsão de resultado → comando ou saída fornecida → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → A15: da chave compartilhada ao par público/privado e ao vínculo de identidade.

## Condução por blocos

0–15 definição simétrica + T1 (7T/8P); 15–40 AES/modos, CBC/IV, senha versus chave, PBKDF2/sal e T2 (12T/13P); 40–80 autenticação/GCM, exemplo de transferência, nonce/AAD, programa em etapas e G1–G3 (20T/20P); 80–95 formas de estabelecer a chave, ponte para acordo autenticado e extensão seletiva G4–G6 (10T/5P); 95–100 C1 e revisão (1T/4P). Total 50 T/50 P planejados. As extensões são opcionais; selecionar pelo tempo real sem eliminar a leitura dos resultados principais. Hash, HMAC e verificadores de senha estão no final da A16.

Em cada prática: indicar estado inicial, separar código-fonte do comando de execução, demonstrar comando, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

Na exposição, usar os esquemas no momento em que cada relação entra: mesma chave na abertura, AES/blocos/modo, IV como ponto de partida do encadeamento CBC, senha + sal → PBKDF2 → chave/IV, e entradas de GCM → texto cifrado/tag. Expandir IV como vetor de inicialização, pronúncia “i-vê”, e distinguir seus 16 bytes públicos e imprevisíveis do segredo da chave e do sal usado na derivação. A abertura precisa do mesmo IV; no comando de T2, ele é reconstruído pela derivação. Ler entradas e saída antes de mostrar parâmetros ou código. A tabela chave/sal/nonce/AAD responde diretamente ao que é secreto e ao ponto em que cada valor atua. Os prompts opcionais de imagem apenas refinam esses esquemas nativos quando o docente fornecer as figuras.

## Respostas e contingência

T1/T2 mostram transformação e abertura, sem integridade. IV é o ponto de partida do CBC; no AES tem 16 bytes. A senha não é a chave AES: PBKDF2 usa senha, sal e custo para derivar chave e IV em T2. No exemplo GCM, deriva somente a chave de 32 bytes; nonce de 12 bytes continua separado. Sal público não torna a senha forte.

G1 grava e lê `mensagem_gcm.json`: o receptor já conhece a mesma senha e usa sal recebido e parâmetros iguais para reconstruir K1. A chave do emissor não é copiada para `decrypt` nem gravada no envelope. O aluno deve localizar o segredo prévio antes de analisar os parâmetros; não apresentar este arquivo como protocolo de rede seguro. Os 100.000 passos são parâmetro didático. O cabeçalho da aplicação permanece visível, mas só é autenticado após a verificação.

G1 mostra chaves iguais e texto recuperado; G2 altera um bit da tag; G3 muda apenas a versão do AAD. Ambos rejeitam sem entregar texto. G4 cifra o mesmo conteúdo com a mesma chave e outro nonce; G5 abre novamente o envelope original, demonstrando ausência de controle de replay; G6 deriva outra chave com senha diferente e rejeita. Nova leitura não é nova cifragem. Não pedir repetição de nonce em `encrypt`. Para controlar replay, exigir estado/identificador protegido e histórico de processamento; para compartilhar chaves em rede, usar protocolo autenticado. Acordo ECDHE e HKDF entram apenas como visão funcional, depois de definir par público/privado; A15 reabre a procedência da chave pública e A16 o handshake TLS.

Antes do encontro, executar `python3 aes_gcm_a14.py` em uma pasta temporária do WSL e conferir que a concatenação dos quatro blocos da página coincide com o download. O percurso mínimo termina em G3; G4–G6 podem ser conduzidos seletivamente. A cada bloco, salvar, executar, comparar e pausar; os valores aleatórios devem ser comparados dentro da mesma execução. A chave e a senha de teste não entram na entrega. Se `cryptography` faltar, usar a projeção e os quadros como dados fornecidos; erro de instalação/caminho não é falha de autenticação. Se G1 falhar, verificar senha, sal e parâmetros antes das contraprovas. Verificar o tempo real antes de registrar a carga como realizada.
