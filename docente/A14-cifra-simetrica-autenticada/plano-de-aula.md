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

0–15 definição simétrica + T1 (8T/7P); 15–32 AES/modos, senha versus chave, PBKDF2/sal e T2 CBC (8T/9P); 32–60 autenticação/GCM + arquivo `aes_gcm_a14.py` editado no VS Code e G1–G3 no terminal (13T/15P); 60–76 hash + D1 (8T/8P); 76–90 HMAC + M1–M3 (7T/7P); 90–100 senhas + P-A–P-C e C1 (6T/4P). Conferir o tempo real e não eliminar a leitura do resultado para cumprir a tabela.

Em cada prática: indicar estado inicial, separar código-fonte do comando de execução, demonstrar comando, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

## Respostas e contingência

T1/T2 mostram transformação e abertura, sem integridade. Em T2, a senha não é a chave AES: PBKDF2 usa senha, sal e repetições para derivar chave e IV; o sal é público e fica no arquivo cifrado. O OpenSSL o lê ao abrir; a mesma senha e os mesmos parâmetros refazem a derivação. O sal da cifra é por operação, enquanto o sal de verificador de senha é por conta. Na prática GCM, localizar chave e nonce descartáveis, AAD/texto em hex e em texto, `Sealed = Ciphertext + Tag`; não copiar a chave para C1. G1 recupera o texto com tag original; G2 altera um bit da tag e gera `InvalidTag` sem entregar texto ao código; G3 altera apenas o AAD e também é rejeitado. D1 compara bytes sem origem; HMAC exige segredo comum; senha exige sal individual e custo.

Antes do encontro, executar `python3 aes_gcm_a14.py` no WSL da demonstração e conferir que o arquivo Python da página coincide com o download. Se a biblioteca faltar, acompanhar o terminal do professor e usar o quadro G1–G3 da página sem instalar durante a aula; marcar a fonte do resultado. Se OpenSSL ou Python falhar, usar o resultado fornecido. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
