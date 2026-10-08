# Plano docente — A14 — cifra simétrica, hash e senhas (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar mesma chave, AES e modo; distinguir sigilo/integridade; verificar GCM, hash, HMAC e senha. |
| Herança | A13: conceitos de arquivo, processo e dado, sem atribuir execução não confirmada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL e navegador; quadro alternativo fornecido na página. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | A15: da chave compartilhada ao par público/privado e ao vínculo de identidade. |

## Cadeia de aprendizagem

A13: conceitos de arquivo, processo e dado, sem atribuir execução não confirmada. → definição direta → previsão de resultado → comando/painel ou pacote fornecido → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → A15: da chave compartilhada ao par público/privado e ao vínculo de identidade.

## Condução por blocos

0–15 definição simétrica + T1 (8T/7P); 15–32 AES/modos + T2 CBC (8T/9P); 32–60 autenticação/GCM + V1/F1/F2 (13T/15P); 60–76 hash + D1 (8T/8P); 76–90 HMAC + M1–M3 (7T/7P); 90–100 senhas + P-A–P-C e C1 (6T/4P).

Em cada prática: indicar estado inicial, demonstrar comando ou clique, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

## Respostas e contingência

T1/T2 mostram transformação e abertura, sem integridade; V1 aceita e F1/F2 rejeitam; D1 compara bytes sem origem; HMAC exige segredo comum; senha exige sal individual e custo.

Se OpenSSL, Web Crypto ou rede falhar, usar o resultado fornecido na mesma página e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
