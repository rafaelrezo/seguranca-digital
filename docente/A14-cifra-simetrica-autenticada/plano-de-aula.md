# Plano docente — A14 — cifra simétrica, hash e senhas (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar mesma chave, AES e modo; distinguir sigilo/integridade; verificar GCM, hash, HMAC e senha. |
| Herança | A13: conceitos de arquivo, processo e dado, sem atribuir execução não confirmada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL, VS Code ligado ao WSL, Python 3 com biblioteca `cryptography` verificada antes da aula; saídas esperadas na página como alternativa. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | A15: da chave compartilhada ao par público/privado e ao vínculo de identidade. |

## Cadeia de aprendizagem

A13: conceitos de arquivo, processo e dado, sem atribuir execução não confirmada. → definição direta → previsão de resultado → comando ou saída fornecida → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → A15: da chave compartilhada ao par público/privado e ao vínculo de identidade.

## Condução por blocos

0–12 definição simétrica + T1 (6T/6P); 12–28 AES/modos, senha versus chave, PBKDF2/sal e T2 CBC (8T/8P); 28–52 autenticação/GCM, nonce e AAD, depois `aes_gcm_a14.py` e G1–G3 (12T/12P); 52–64 hash + D1 (6T/6P); 64–78 HMAC + M1–M3 (7T/7P); 78–100 senha: problema do login e da base vazada, cadastro/conferência, `verificador_senhas_a14.py`, S1–S4 e C1 (11T/11P). Total 50 T/50 P planejados. Conferir o tempo real e não eliminar a leitura do resultado para cumprir a tabela.

Em cada prática: indicar estado inicial, separar código-fonte do comando de execução, demonstrar comando, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

Na exposição, usar os esquemas no momento em que cada relação entra: mesma chave na abertura, AES/blocos/modo, senha + sal → PBKDF2 → chave/IV, e entradas de GCM → texto cifrado/tag. Ler entradas e saída antes de mostrar parâmetros ou código. A tabela chave/sal/nonce/AAD responde diretamente ao que é secreto e ao ponto em que cada valor atua. Os prompts opcionais de imagem apenas refinam esses esquemas nativos quando o docente fornecer as figuras.

## Respostas e contingência

T1/T2 mostram transformação e abertura, sem integridade. Em T2, a senha não é a chave AES: PBKDF2 usa senha, sal e repetições para derivar chave e IV; o sal é público e fica no arquivo cifrado. O OpenSSL o lê ao abrir; a mesma senha e os mesmos parâmetros refazem a derivação. O sal da cifra é por operação, enquanto o sal de verificador de senha é por conta. Na prática GCM, localizar chave e nonce descartáveis, AAD/texto em hex e em texto, `Sealed = Ciphertext + Tag`; não copiar a chave para C1. G1 recupera o texto com tag original; G2 altera um bit da tag e gera `InvalidTag` sem entregar texto ao código; G3 altera apenas o AAD e também é rejeitado. D1 compara bytes sem origem; HMAC exige segredo comum. Em S1, mesma senha e sais distintos produzem verificadores distintos; S2 aceita a tentativa correta; S3 rejeita a incorreta; S4 repete o sal e passa a produzir verificadores iguais. A prática executa derivação e comparação em memória, sem banco de dados ou login real. PBKDF2 com 100.000 iterações é parâmetro didático; discutir Argon2id e medição de custo para produção.

Antes do encontro, executar `python3 aes_gcm_a14.py` e `python3 verificador_senhas_a14.py` no WSL da demonstração e conferir que os arquivos Python da página coincidem com os downloads. Se `cryptography` faltar, usar a projeção e o quadro G1–G3 sem instalar durante a aula; S1–S4 usam apenas a biblioteca padrão do Python. Se OpenSSL ou Python falhar, usar o resultado fornecido e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
