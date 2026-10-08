# Plano docente — A16 — TLS, gestão de chaves, hash e senhas (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar TLS, separar canal/autorização, decidir ciclo das chaves e comparar hash, HMAC e verificador de senha por operação direta. |
| Herança | A15: certificado e assinatura com chave pública verificada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL, VS Code, Python 3 com biblioteca padrão e navegador; quadros alternativos fornecidos na página. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | OT: proteger acesso remoto e processo físico sem inferir segurança operacional do TLS. |

## Cadeia de aprendizagem

A15: certificado e assinatura com chave pública verificada. → definição direta → previsão de resultado → comando/painel ou pacote fornecido → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → OT: proteger acesso remoto e processo físico sem inferir segurança operacional do TLS.

## Condução por blocos

0–20 fluxo TLS, cartões selecionados B/N/A e `s_client` (10T/10P); 20–40 inventário/ciclo, exemplo E-1 e decisões P/N selecionadas (10T/10P); 40–55 hash/SHA-256 e D1 (7T/8P); 55–70 HMAC e M1–M3 (8T/7P); 70–92 cadastro/conferência de senha, `verificador_senhas_a16.py` e S1–S4 (11T/11P); 92–100 C3, integração e revisão (4T/4P). Total 50 T/50 P planejados. Os quadros completos ficam como referência; conduzir B, uma recusa e A, depois um caso permitido, um negado e a recuperação condicional, sem transformar toda linha em nova tarefa. Confirmar a duração real.

Em cada prática: indicar estado inicial, demonstrar comando ou clique, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

## Respostas e contingência

TLS protege o canal sob suas premissas; 403 é aplicação; K-B não abre C-01; recuperação condicional exige autorização e teste funcional. Não chamar política simulada de implantação.

Em D1, os bytes `abc` devem coincidir com o digest NIST e `abd` deve diferir; isso não atribui autoria. M1 repete mensagem/chave, M2 muda mensagem e M3 muda chave; o conteúdo continua legível. S1 usa mesma senha e sais distintos (False), S2 aceita a tentativa correta (True), S3 rejeita a incorreta (False); S4 repete o sal e produz verificadores iguais. Restaurar sal próprio ao final. O registro guarda esquema, custo, sal e verificador, nunca senha legível. PBKDF2-HMAC-SHA256 com 100.000 iterações é didático, não configuração de produção.

Antes da aula, executar `python3 verificador_senhas_a16.py` e conferir o código da página com o download. Não reutilizar os segredos do exemplo GCM nem tratar cadastro local como login de produção. Se OpenSSL, Python ou rede falhar, usar o resultado fornecido na mesma página e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
