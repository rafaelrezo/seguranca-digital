# Plano docente — A16 — TLS e ciclo de chaves (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar TLS, inspecionar evidência do canal, separar autorização da aplicação e decidir ciclo das chaves. |
| Herança | A15: certificado e assinatura com chave pública verificada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL e navegador; quadro alternativo fornecido na página. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | OT: proteger acesso remoto e processo físico sem inferir segurança operacional do TLS. |

## Cadeia de aprendizagem

A15: certificado e assinatura com chave pública verificada. → definição direta → previsão de resultado → comando/painel ou pacote fornecido → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → OT: proteger acesso remoto e processo físico sem inferir segurança operacional do TLS.

## Condução por blocos

0–25 fluxo TLS e cartões B/N/A (13T/12P); 25–40 s_client do domínio do curso ou pacote (6T/9P); 40–60 inventário K-A/K-B e C-01/C-02 (12T/8P); 60–80 P1–P3/N1–N3 (8T/12P); 80–100 E-2/E-3, decisão final e revisão C3 (11T/9P).

Em cada prática: indicar estado inicial, demonstrar comando ou clique, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

## Respostas e contingência

TLS protege o canal sob suas premissas; 403 é aplicação; K-B não abre C-01; recuperação condicional exige autorização e teste funcional. Não chamar política simulada de implantação.

Se OpenSSL, Web Crypto ou rede falhar, usar o resultado fornecido na mesma página e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
