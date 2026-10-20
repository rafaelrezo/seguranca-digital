# TLS com sockets — arquivos da prática

Guia integral: https://rafaelrezo.github.io/seguranca-digital/praticas/tls-sockets/

Abra dois terminais no mesmo Linux/Ubuntu WSL, na pasta destes arquivos.
Requisitos: Python 3 com ssl/TLS 1.3 e OpenSSL; nenhum pacote Python adicional.

1. Prepare uma vez: bash preparar.sh
2. Terminal 1: python3 servidor.py
3. Terminal 2: python3 cliente.py
4. Reinicie o servidor e teste: python3 cliente.py --nome outro.aula.invalid
5. Reinicie o servidor e teste: python3 cliente.py --ca gerados/outra-ca.pem

O servidor atende uma conexão e três mensagens; aguarda conexão por 60 segundos.
Todas as conexões são para 127.0.0.1. Nenhuma CA é instalada no sistema.
Os certificados valem dois dias. A preparação recusa sobrescrever gerados;
para reemitir, use uma cópia nova da pasta sem os materiais anteriores.
Não compartilhe gerados, privadas ou segredos de laboratório.
