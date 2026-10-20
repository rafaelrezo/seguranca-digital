"""Servidor de eco TLS: uma conexão, mensagens por linha, somente loopback."""
import argparse
from pathlib import Path
import socket
import ssl


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--porta', type=int, default=8443)
    args = parser.parse_args()
    pasta = Path(__file__).resolve().parent / 'gerados'

    # A biblioteca executa o protocolo; o programa escolhe identidade e política.
    contexto = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    contexto.minimum_version = ssl.TLSVersion.TLSv1_3
    contexto.maximum_version = ssl.TLSVersion.TLSv1_3
    contexto.load_cert_chain(pasta / 'servidor.pem', pasta / 'servidor-chave.pem')

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as escuta:
        escuta.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        escuta.bind(('127.0.0.1', args.porta))
        escuta.listen(1)
        escuta.settimeout(60)
        print('CERTIFICADO: gerados/servidor.pem', flush=True)
        print('PRIVADA LOCAL: gerados/servidor-chave.pem', flush=True)
        print(f'ESCUTANDO 127.0.0.1:{escuta.getsockname()[1]}', flush=True)

        bruto, _ = escuta.accept()
        with bruto:
            bruto.settimeout(30)
            # Aqui ocorre o handshake, antes de receber texto da aplicação.
            with contexto.wrap_socket(bruto, server_side=True) as canal:
                print(f'TLS: {canal.version()}; cifra: {canal.cipher()[0]}', flush=True)
                print('Sem certificado de cliente: nenhuma pessoa autenticada.', flush=True)
                # Nova linha delimita mensagens; readline lida com leituras parciais.
                with canal.makefile('rb') as entrada:
                    for _ in range(3):
                        linha = entrada.readline(4097)
                        if not linha or len(linha) > 4096 or not linha.endswith(b'\n'):
                            raise ValueError('Mensagem ausente, longa ou sem delimitador.')
                        print('RECEBIDO:', linha.decode('utf-8').rstrip(), flush=True)
                        canal.sendall(b'eco: ' + linha)
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except ssl.SSLError as erro:
        print(f'CONEXAO TLS INTERROMPIDA: {erro}', flush=True)
        raise SystemExit(2)
    except (OSError, ValueError) as erro:
        print(f'ERRO OPERACIONAL: {erro}', flush=True)
        raise SystemExit(3)
