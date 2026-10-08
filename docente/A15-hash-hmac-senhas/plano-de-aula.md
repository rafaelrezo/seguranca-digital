# Plano docente — A15 — chaves, assinaturas e certificados (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Distinguir papéis do par de chaves; verificar assinatura; vincular a chave pública a nome e cadeia. |
| Herança | A14: mesma chave nos dois extremos, autenticação da mensagem e limite do acordo sem identidade verificada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL e navegador; quadro alternativo fornecido na página. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | A16: certificado e par de chaves entram na autenticação TLS. |

## Cadeia de aprendizagem

A14: mesma chave nos dois extremos, autenticação da mensagem e limite do acordo sem identidade verificada. → definição direta → previsão de resultado → comando/painel ou pacote fornecido → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → A16: certificado e par de chaves entram na autenticação TLS.

## Condução por blocos

0–20 funções do par + T3 (10T/10P); 20–50 assinatura, definição breve de hash/digest junto a SHA-256 e V1–V3/T4 (15T/15P); 50–65 limite de identidade e exemplo trabalhado (10T/5P); 65–90 certificado + inspeção ou pacote (12T/13P); 90–100 C2 e revisão (3T/7P).

Em cada prática: indicar estado inicial, demonstrar comando ou clique, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

## Respostas e contingência

Assinatura não oculta bytes; original verifica, alterado/chave errada falham; chave pública sem origem não prova titular; certificado requer nome, validade, finalidade e cadeia.

Se OpenSSL, Web Crypto ou rede falhar, usar o resultado fornecido na mesma página e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
