#!/usr/bin/env bash
# Preparação local, anterior à execução de cliente/servidor.
set -euo pipefail
cd -- "$(dirname -- "$0")"
if [[ -e gerados ]]; then
    echo 'A pasta gerados já existe. Use uma cópia nova do protótipo para reemitir.' >&2
    exit 1
fi
umask 077
mkdir gerados
cd gerados

# A CA é a emissora local. Sua privada NÃO é carregada pelo servidor TLS.
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out ca-chave.pem
openssl req -new -x509 -key ca-chave.pem -out ca.pem -days 2 \
    -subj '/CN=CA da aula TLS' \
    -addext 'basicConstraints=critical,CA:TRUE' \
    -addext 'keyUsage=critical,keyCertSign,cRLSign'

# Outro par, pertencente ao servidor. O pedido contém sua pública.
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out servidor-chave.pem
openssl req -new -key servidor-chave.pem -out servidor.csr \
    -subj '/CN=servidor.aula.invalid'
printf '%s\n' \
    'basicConstraints=critical,CA:FALSE' \
    'keyUsage=critical,digitalSignature' \
    'extendedKeyUsage=serverAuth' \
    'subjectAltName=DNS:servidor.aula.invalid' > servidor.ext
openssl x509 -req -in servidor.csr -CA ca.pem -CAkey ca-chave.pem \
    -CAcreateserial -out servidor.pem -days 2 -sha256 -extfile servidor.ext

# Uma CA independente para a contraprova, com arquivo válido e existente.
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out outra-ca-chave.pem
openssl req -new -x509 -key outra-ca-chave.pem -out outra-ca.pem -days 2 \
    -subj '/CN=Outra CA da aula' \
    -addext 'basicConstraints=critical,CA:TRUE' \
    -addext 'keyUsage=critical,keyCertSign,cRLSign'
echo 'Materiais locais emitidos; prazo de dois dias. Nenhuma CA instalada no sistema.'
