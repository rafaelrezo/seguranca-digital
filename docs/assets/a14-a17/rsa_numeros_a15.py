from math import gcd

# 1. RSA matemático com números pequenos: não usar para proteger dados.
p = 5
q = 11
n = p * q
phi = (p - 1) * (q - 1)
e = 3
d = pow(e, -1, phi)

M = 7
if not 0 <= M < n:
    raise ValueError('M precisa estar entre 0 e n - 1 neste exemplo')

C = pow(M, e, n)
recuperado = pow(C, d, n)

print('n:', n, '| phi:', phi)
print('MDC(e, phi):', gcd(e, phi))
print('e:', e, '| d:', d, '| resto de e*d:', (e * d) % phi)
print('M:', M, '| C:', C, '| recuperado:', recuperado)
print('R0 — número recuperado?', recuperado == M)

# 2. Representar um texto em bytes e inteiro: ainda não é cifragem.
texto = 'OLA'
dados = texto.encode('utf-8')
numero = int.from_bytes(dados, 'big')
volta = numero.to_bytes(len(dados), 'big')

print('\nTexto:', texto)
print('Bytes:', list(dados), '| hexadecimal:', dados.hex())
print('Inteiro:', numero, '| cabe em n=55?', numero < n)
print('Texto recuperado da representação:', volta.decode('utf-8'))
