# Plano docente — A15 — chaves, assinaturas e certificados (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar RSA, inverso/totiente e limite OAEP; combinar RSA/AES-GCM, distinguir assinatura e acordo, verificar assinatura e vincular a pública a nome/cadeia. |
| Herança | A14: mesma chave nos dois extremos, autenticação da mensagem e limite do acordo sem identidade verificada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL, VS Code, Python 3 com `cryptography` no ambiente já preparado para A14 e navegador; quadro alternativo fornecido na página. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | A16: certificado e par de chaves entram na autenticação TLS. |

## Cadeia de aprendizagem

A14: mesma chave nos dois extremos, autenticação da mensagem e limite do acordo sem identidade verificada. → definição direta → previsão de resultado → comando/programa ou pacote fornecido → leitura da saída → explicação do mecanismo → decisão → contraprova → registro C1–C3 → A16: certificado e par de chaves entram na autenticação TLS.

## Condução por blocos

0–10 papéis do par + T3 (4T/6P); 10–40 RSA, exemplo numérico, representação, limite OAEP e envelope híbrido R0–R2/H1–H3 (16T/14P); 40–65 assinatura ECDSA e V1–V3/T4, reutilizando a definição de hash de OAEP (12T/13P); 65–75 origem da pública e exemplo trabalhado (6T/4P); 75–95 certificado + inspeção ou pacote (10T/10P); 95–100 C2 e revisão (2T/3P). Total 100 minutos, 50 T/50 P planejados. A seção extensa apoia estudo; na condução, trabalhar p=5/q=11/M=7, a contagem breve do totiente e o resto 1, depois comparar R1/R2 e H1/H2. A extensão M=4/M=55 e H3 podem ser selecionadas pelo tempo, preservando as evidências centrais. Não acrescentar outra entrega; conferir a duração real.

Em cada prática: indicar estado inicial, separar código copiável do comando e demonstrar a execução, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

## Contextos de uso integrados à exposição

RSA/híbrida: AWS Encryption SDK com RSA protegendo a chave de dados; a prática local não reproduz o formato do SDK nem oferece distribuição de identidade. Par de chaves e procedência: autenticação SSH e chaves de servidor em `known_hosts`. Assinatura e confiança: metadados assinados do APT e seus vínculos de hash até os pacotes, sem alegar assinatura individual de cada pacote nem ausência de vulnerabilidades. Certificado: domínio HTTPS do curso e operação de renovação/revogação. A assinatura local isola a propriedade; não instala pacotes nem configura acesso remoto. Explicar os contextos nos blocos expositivos existentes; preservar os resultados e a entrega C2.

## Respostas e contingência

RSA: φ(10)=4; p=5/q=11 dão n=55, φ=40, e=3, d=27 porque 81 mod 40=1; M=7 vira C=13 e volta a 7. Distinguir módulo 40 na inversão e 55 na cifragem. A condição por φ adotada no exemplo é suficiente; a RFC também formula a relação usando λ(n), sem exigir sua introdução na aula. OLA é 0x4F4C41=5196865, fora do intervalo do exemplo; representação não é cifra. RSA-2048/OAEP-SHA256 aceita 190 e recusa 191 bytes; o resultado RSA tem 256 bytes. H1 cifra apenas K de 32 bytes por RSA; H2 abre 4.800 bytes por AES-GCM; H3 rejeita a tag alterada. A geração real usa e=65537 e biblioteca, nunca o programa numérico. Qualquer portador da pública pode criar um novo envelope; isso não identifica o emissor. TLS 1.3 não usa transporte de chave RSA.

Assinatura não oculta bytes; original verifica, alterado/chave errada falham; chave pública sem origem não prova titular; certificado requer nome, validade, finalidade e cadeia.

Antes da condução, executar os dois programas completos e seus primeiros blocos separadamente; conferir sua correspondência aos downloads. Distinguir o ensaio local com os dois papéis de um protocolo de rede. A privada RSA não é impressa nem gravada; a chave AES descartável impressa não entra na entrega. Os valores aleatórios não são referências fixas.

Se OpenSSL, Python, biblioteca ou rede falhar, usar o resultado fornecido na mesma página e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
