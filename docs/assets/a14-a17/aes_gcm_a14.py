from os import urandom
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.exceptions import InvalidTag

# 1. Preparar entradas e cifrar
key = AESGCM.generate_key(bit_length=256)       # chave descartável de 256 bits
nonce = urandom(12)                               # nonce novo de 12 bytes
aad = b'tipo=ordem;versao=1'                     # rótulo visível, mas autenticado
text = b'ordem=7;estado=aprovado'                 # conteúdo a cifrar
sealed = AESGCM(key).encrypt(nonce, text, aad)   # texto cifrado + tag

# 2. Mostrar entradas e separar as partes da saída
print("Key:   ", key.hex())
print("Nonce: ", nonce.hex())
print("AAD:   ", aad.hex())
print("Text:  ", text.hex())
print("Sealed:", sealed.hex())

print("\nRepresentação textual:")
print("AAD:   ", aad.decode("utf-8"))
print("Text:  ", text.decode("utf-8"))

print("\nComponentes AES-GCM:")
print("Ciphertext:", sealed[:-16].hex())
print("Tag:       ", sealed[-16:].hex())

# 3. Abrir o conjunto original
print('G1 tag:', sealed[-16:].hex())              # mostra a tag original
print('G1 texto:', AESGCM(key).decrypt(nonce, sealed, aad).decode())

# 4. Alterar um bit da tag e tentar abrir
tampered = sealed[:-1] + bytes([sealed[-1] ^ 1]) # muda um bit da tag
print('G2 tag:', tampered[-16:].hex())            # mostra a tag alterada
try:
    AESGCM(key).decrypt(nonce, tampered, aad)    # tenta abrir o conjunto alterado
    print('G2: aceito (inesperado)')
except InvalidTag:
    print('G2: rejeitado; texto não entregue')

# 5. Manter a tag original e alterar somente o AAD
altered_aad = b'tipo=ordem;versao=2'           # muda só AAD
try:
    AESGCM(key).decrypt(nonce, sealed, altered_aad)
    print('G3: aceito (inesperado)')
except InvalidTag:
    print('G3: rejeitado; AAD alterado')
