# Plano docente — A16 — TLS, gestão de chaves, hash e senhas (provisória)

**Estado:** revisão prospectiva de 8 out. 2026. A13 não tem realização documental confirmada. O plano anterior permanece no histórico Git; a numeração posterior exige conciliação do calendário.

## Ficha-base

| Campo | Decisão |
|---|---|
| Ementa e ganho | Explicar a sequência TLS 1.3 com rastro real e o estabelecimento/manutenção do OpenVPN; separar controle/dados/rotas/autorização, decidir ciclo de chaves e comparar hash, HMAC e verificador de senha. |
| Herança | A15: certificado e assinatura com chave pública verificada. |
| Carga | 100 minutos, 50 T/50 P planejados; prática guiada intercalada, não bloco final. |
| Infraestrutura | WSL/Ubuntu, OpenSSL, VS Code, Python 3 com biblioteca padrão e navegador; quadros alternativos fornecidos na página. Dados artificiais e chaves descartáveis. |
| Evidência/produto | Uma parte de C1–C3 na atividade única; sem entrega separada por encontro. |
| Critério | Mecanismo, resultado válido, contraprova, limite e fonte da evidência. |
| Ponte | OT: proteger acesso remoto e processo físico sem inferir segurança operacional do TLS. |

## Cadeia de aprendizagem

A14: GCM e acordo; A15: certificado e assinatura com chave pública verificada → mensagens e cálculos no diagrama → previsão → `s_client` e consulta de rotas ou dados fornecidos → leitura da saída → identificação da fase e da chave → recusa por nome → distinção controle/dados e limite do gateway → C3 → acesso remoto OT sem inferir autorização sobre o processo.

## Condução por blocos

0–25 sequência TLS, mensagens reais e recusa por nome (12T/13P); 25–35 OpenVPN: percurso, dois canais, manutenção e consulta de rota (6T/4P); 35–45 inventário/ciclo, exemplo E-1 e uma decisão P/N (5T/5P); 45–57 hash/SHA-256 e D1 (5T/7P); 57–69 HMAC e M1–M3 (5T/7P); 69–92 cadastro/conferência de senha, `verificador_senhas_a16.py` e S1–S4 (13T/10P); 92–100 C3, integração e revisão (4T/4P). Total 50 T/50 P planejados. O tempo de TLS cresce para permitir explicar cada mensagem antes da leitura real. A VPN é aplicação funcional, sem implantação de servidor. Os cartões completos, pormenores e recuperação E-3 ficam como referência de estudo; retomar B/N/A apenas para esclarecer uma dúvida concreta, sem repetir a validação já observada. Não ler integralmente a página em voz alta; confirmar a duração real.

Em cada prática: indicar estado inicial, demonstrar comando, esperar a previsão, localizar saída, pedir interpretação e limite, e parar antes do próximo conceito. O aluno pode reproduzir no WSL; acompanhar a projeção com o quadro alternativo preserva a decisão. Não exigir descoberta independente de ferramenta.

### Pontos de verificação dos protocolos

1. Após `ServerHello`, pedir a distinção entre segredo já calculável e servidor ainda não autenticado. ECDHE sozinho não prova identidade.
2. Separar assinatura da autoridade no certificado, assinatura do servidor em `CertificateVerify` e HMAC de `Finished`. Definir o histórico e HMAC brevemente, sem antecipar todo o bloco final.
3. Antes de `-msg`, prever a ordem e os sentidos. O OpenSSL mostra mensagens que abre localmente; não é captura de todo o handshake em texto aberto na rede. Conferir versão no resumo, não no cabeçalho legado.
4. Executar a contraprova alterando somente `-verify_hostname`, sem mudar conexão/SNI e sem consultar `.invalid`. Esperar recusa por nome, não uma falha de DNS.
5. Na VPN, percorrer TUN → proteção → Internet → gateway → serviço; pedir onde termina a proteção e qual rota envia o pacote ao túnel.
6. Distinguir controle TLS e dados AEAD, ping interno e ICMP, renovação de chaves e validade de certificado. A manutenção não garante disponibilidade.
7. Consultar a rota real no Linux e identificar `dev`/`via`. Isso não implanta OpenVPN; uma VPN no Windows pode ter outra representação no WSL. Comparação com túnel depende de perfil de laboratório já autorizado e disponível.

## Contextos de uso integrados à exposição

TLS: conexão real ao site do curso e transporte de senha até o ponto que termina HTTPS, separado de armazenamento e autorização. OpenVPN: acesso remoto à rede interna com certificados, canais e rotas; prepara OT sem liberar operação de equipamentos. Certificados: erros de nome/prazo na operação de sites. Ciclo e inventário: rotação AWS KMS e dependência de cópias antigas, distinguindo versões internas sob o mesmo ID lógico de K-A/K-B como chaves diferentes no quadro. Hash: conferência de imagens Ubuntu com referência autenticada. HMAC: webhook GitHub e cabeçalho `X-Hub-Signature-256`, definindo webhook antes do exemplo. Senhas: registro de algoritmo/custo/sal/derivado no Django 5.2. Não instalar serviços nem reenviar eventos reais; os programas locais isolam as propriedades. Integrar os contextos à exposição prevista, sem aumentar a entrega C3.

## Respostas e contingência

TLS protege o canal sob suas premissas; 403 é aplicação; K-B não abre C-01; recuperação condicional exige autorização e teste funcional. Não chamar política simulada de implantação.

Em D1, os bytes `abc` devem coincidir com o digest NIST e `abd` deve diferir; isso não atribui autoria. M1 repete mensagem/chave, M2 muda mensagem e M3 muda chave; o conteúdo continua legível. S1 usa mesma senha e sais distintos (False), S2 aceita a tentativa correta (True), S3 rejeita a incorreta (False); S4 repete o sal e produz verificadores iguais. Restaurar sal próprio ao final. O registro guarda esquema, custo, sal e verificador, nunca senha legível. PBKDF2-HMAC-SHA256 com 100.000 iterações é didático, não configuração de produção.

Antes da aula, executar `python3 verificador_senhas_a16.py` e conferir o código da página com o download. Não reutilizar os segredos do exemplo GCM nem tratar cadastro local como login de produção. Se OpenSSL, Python ou rede falhar, usar o resultado fornecido na mesma página e marcar a fonte. Comando falho não vira evidência positiva. Não transmitir segredos, usar certificados institucionais nem publicar a chave privada descartável. Verificar o tempo real em aula antes de considerar o 50/50 efetivamente cumprido.
