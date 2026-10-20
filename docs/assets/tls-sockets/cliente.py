"""Cliente TLS: verifica CA e nome antes de enviar três mensagens artificiais."""
import argparse
import hashlib
from pathlib import Path
import socket
import ssl


def main():
    pasta = Path(__file__).resolve().parent / 'gerados'
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--porta', type=int, default=8443)
    parser.add_argument('--nome', default='servidor.aula.invalid')
    parser.add_argument('--ca', type=Path, default=pasta / 'ca.pem')
    args = parser.parse_args()

    # PROTOCOL_TLS_CLIENT exige certificado válido e verificação do nome.
    contexto = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
    contexto.minimum_version = ssl.TLSVersion.TLSv1_3
    contexto.maximum_version = ssl.TLSVersion.TLSv1_3
    contexto.load_verify_locations(cafile=args.ca)
    print(f'CA ACEITA LOCALMENTE: {args.ca.name}', flush=True)
    print(f'NOME ESPERADO: {args.nome}', flush=True)

    # O endereço é local. O nome abaixo é verificado, sem consulta DNS.
    with socket.create_connection(('127.0.0.1', args.porta), timeout=10) as bruto:
        with contexto.wrap_socket(bruto, server_hostname=args.nome) as canal:
            certificado = canal.getpeercert()
            print('CERTIFICADO RECEBIDO, SAN:', certificado.get('subjectAltName'), flush=True)
            print('EMISSOR:', certificado.get('issuer'), flush=True)
            der = canal.getpeercert(binary_form=True)
            print('SHA256 DO CERTIFICADO:', hashlib.sha256(der).hexdigest(), flush=True)
            print(f'TLS: {canal.version()}; cifra: {canal.cipher()[0]}', flush=True)
            print('CA E NOME VERIFICADOS; enviando dados da aplicacao.', flush=True)
            with canal.makefile('rb') as entrada:
                for texto in ('Documento de teste: valor=1000', 'Parametros de teste: limite=60', 'fim'):
                    canal.sendall((texto + '\n').encode('utf-8'))
                    resposta = entrada.readline(4097)
                    if not resposta or len(resposta) > 4096 or not resposta.endswith(b'\n'):
                        raise ValueError('Resposta ausente, longa ou sem delimitador.')
                    print('RESPOSTA:', resposta.decode('utf-8').rstrip(), flush=True)
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except ssl.SSLCertVerificationError as erro:
        print(f'CERTIFICADO RECUSADO: {erro.verify_message}', flush=True)
        raise SystemExit(2)
    except ssl.SSLError as erro:
        print(f'CONEXAO TLS INTERROMPIDA: {erro}', flush=True)
        raise SystemExit(2)
    except (OSError, ValueError) as erro:
        print(f'ERRO OPERACIONAL: {erro}', flush=True)
        raise SystemExit(3)
