# Validação do protótipo TLS — 20 out. 2026

Ambiente executado: Linux; Python 3.14.4; OpenSSL 3.5.5 27 Jan 2026.

- Emissão local de CA, certificado de servidor e CA independente: passou.
- Preparação repetida recusou sobrescrita e preservou a privada: passou.
- TLS 1.3 negociado, três respostas na mesma conexão e fingerprint do certificado conferido: passou.
- Recusa por nome errado, sem envio/recepção de mensagem da aplicação: passou.
- Recusa por CA errada, sem envio/recepção de mensagem da aplicação: passou.
- CA inexistente distinguida de recusa criptográfica: passou.

Ensaiado em cópia temporária, com materiais gerados e descartados localmente. Somente loopback e porta efêmera no teste; porta didática padrão 8443. Nenhum segredo exportado no relatório.

Não validados: WSL/Windows, duração de aula, compreensão/engajamento dos estudantes, captura de tráfego, revogação, mTLS ou VPN. Não houve alteração/publicação do site, implantação em nuvem ou envio ao Classroom.
