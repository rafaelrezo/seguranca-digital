# A14 (provisória) — Cifra simétrica, hash e senhas

Na **cifra simétrica**, a mesma chave secreta cifra e decifra. A aula parte desse fundamento e avança, em pequenos passos, por AES, modos de operação, hash, HMAC e senhas.

**Tempo:** 100 minutos, com exposição e prática guiada intercaladas.

**Recursos:** terminal Ubuntu no WSL, VS Code, OpenSSL e Python 3 com a biblioteca `cryptography`. Os resultados esperados na página servem de alternativa se o ambiente falhar. Use somente dados de teste e senha descartável.

**Objetivos de aprendizagem**

1. Descrever o percurso do texto legível ao cifrado e de volta com a mesma chave, distinguindo o algoritmo AES do modo de operação.
2. Distinguir sigilo de detecção de alteração em AES-GCM, hash e HMAC.
3. Justificar a necessidade de sal individual e custo no armazenamento de senhas.

Esta aula inicia o [registro único de criptografia e confiança](#atividade), preenchido após cada observação e continuado na A15–A16. O preenchimento de hoje não exige entrega separada.

## Cifra simétrica: a mesma chave nas duas operações {#fundamentos}

**Criptografia** reúne técnicas matemáticas para proteger informações. Na **cifragem**, dados legíveis são transformados em dados cifrados, que não revelam diretamente o conteúdo. **Decifrar** é fazer a operação inversa e recuperar os dados legíveis. Os nomes técnicos **texto claro** e **texto cifrado** se aplicam também aos bytes de um arquivo, mesmo quando ele não contém frases.

Uma **chave criptográfica** é um valor usado pelo algoritmo para controlar o resultado. Ela não é o próprio algoritmo: podemos conhecer todas as regras da operação sem conhecer a chave. Na **cifra simétrica**, quem cifra e quem decifra precisam da **mesma chave secreta**. Chamaremos a chave de teste de **K1**. O nome *simétrica* descreve esse uso da mesma chave nos dois sentidos.

```mermaid
flowchart LR
    P[Dados legíveis] --> E[Cifrar]
    K[Chave secreta K1] --> E
    E --> C[Dados cifrados]
    C --> D[Decifrar]
    K --> D
    D --> R[Dados legíveis recuperados]
```

**Leia o esquema da esquerda para a direita:** K1 entra tanto na cifragem quanto na decifragem. Os dados cifrados podem ser copiados ou transportados, mas K1 deve ficar sob acesso controlado. Sem K1, a operação de decifragem não consegue recuperar o conteúdo nas condições previstas pelo mecanismo.

**Exemplo trabalhado:** o dado de teste é `ordem=7;estado=aprovado`. Um programa cifra esses bytes com K1; outro fornece **a mesma K1** para recuperar o texto.

- **Perda de K1:** a cópia pode ficar irrecuperável.
- **Exposição de K1:** quem obtiver a cópia poderá tentar abri-la.

Registre os dois efeitos antes de avançar.

A propriedade obtida aqui é **confidencialidade**: restringir a leitura da cópia. O programa autorizado ainda precisa acessar K1 e o texto depois de aberto; por isso a cifra não substitui a proteção do dispositivo discutida na [A13](A13-protecao-de-endpoints.md). Ver bytes ilegíveis também não prova que a cópia recebida não foi modificada.


### Prática curta no WSL: observar o percurso da cifra

**Estado inicial:** abra o terminal Ubuntu do WSL. `openssl version` deve informar a versão; `printf` cria um arquivo com bytes fictícios. Os comandos escrevem somente em `~/cripto-a14`. Preveja o conteúdo de cada arquivo antes de executá-los.

```bash
mkdir -p ~/cripto-a14
cd ~/cripto-a14
printf 'ordem=7;estado=aprovado' > claro.txt
cat claro.txt
openssl version
```

**Leia cada linha antes de executar:**

| Comando | O que faz |
|---|---|
| `mkdir -p ~/cripto-a14` | Cria a pasta de teste na área pessoal; `-p` evita erro se ela já existir. |
| `cd ~/cripto-a14` | Entra nessa pasta; os próximos arquivos serão criados nela. |
| `printf ... > claro.txt` | Escreve o texto entre aspas em `claro.txt`; `>` cria ou substitui esse arquivo, sem acrescentar quebra de linha. |
| `cat claro.txt` | Mostra o conteúdo legível do arquivo. |
| `openssl version` | Mostra a versão do OpenSSL disponível no WSL; ainda não cifra nada. |

**Resultado esperado:** `cat` mostra a frase exata; `openssl version` identifica a ferramenta. Registre `T1 → entrada legível → chave ainda não usada`. Se OpenSSL não existir, acompanhe a projeção e registre o resultado como **fornecido**. **Pare** para explicar onde a mesma chave entrará nos dois sentidos.

## AES: algoritmo de blocos e modo de operação {#aes}

**AES** (*Advanced Encryption Standard*) é um algoritmo de cifra simétrica padronizado pelo NIST. Ele transforma um **bloco de 128 bits**, isto é, 16 bytes, usando uma chave de 128, 192 ou 256 bits. Em **AES-256**, o número 256 descreve o tamanho da chave; o bloco continua tendo 128 bits. O algoritmo é público: o segredo necessário para abrir o conteúdo é a chave. Esses tamanhos e funções são definidos na [FIPS 197](https://csrc.nist.gov/pubs/fips/197/final).

Um arquivo pode ter centenas ou milhões de bytes, enquanto AES transforma um bloco de 16 bytes por operação. Uma mensagem de 40 bytes, por exemplo, ultrapassa dois blocos completos e ainda tem uma parte final.

**Modo de operação** é o conjunto de regras que aplica a cifra à mensagem inteira. Ele define como as partes são processadas, como iniciar a operação e quais valores precisam acompanhar o resultado. Por isso, “cifrado com AES” ainda não descreve o procedimento completo.

```text
Mensagem completa → partes processadas segundo um modo → resultado da mensagem
                         ↑
                 AES transforma blocos
```

O modo também determina **quais propriedades são oferecidas**. Alguns modos foram definidos para manter o conteúdo secreto; outros combinam esse sigilo com verificação de alteração. Por isso, antes de escolher um modo, precisamos distinguir as duas perguntas: “quem consegue ler?” e “posso aceitar estes dados como não alterados?”. Não será necessário calcular blocos à mão.

| Camada | O que define | O que ainda falta decidir |
|---|---|---|
| AES | Como transformar um bloco com uma chave. | Como tratar a mensagem completa. |
| Modo de operação | Como usar AES ao longo da mensagem. | Quais propriedades o modo oferece e como gerenciar seus parâmetros. |


### Prática curta no WSL: AES-CBC mostra cifragem e abertura

**CBC** é um modo que encadeia blocos cifrados. O primeiro bloco usa um **IV** (valor de inicialização). Nesta prática, o OpenSSL gera o material de chave e IV a partir de uma senha de teste: a senha digitada **não é** a chave AES pronta.

Antes dos comandos, distinga as duas opções usadas nessa geração:

- **`-pbkdf2`:** seleciona PBKDF2, uma função que deriva material criptográfico da **senha + sal** por várias repetições. Repetir o cálculo torna cada tentativa de adivinhar a senha mais custosa; não transforma uma senha fraca em forte. **`-iter 10000`** fixa a mesma contagem nas duas operações deste ensaio; não é uma recomendação de produção.
- **`-salt`:** gera um **sal**, valor aleatório diferente para cada cifragem. Ele não é secreto. Mesmo usando a mesma senha, outro sal leva a outro material derivado. O OpenSSL grava o sal no início de `copia.cbc` para poder refazer a derivação na abertura.

```text
senha de teste + sal público → PBKDF2 → chave AES e IV → AES-CBC → cópia cifrada
```

Na abertura, o OpenSSL lê o sal da cópia e usa **a mesma senha e os mesmos parâmetros de PBKDF2** para reconstruir chave e IV. A primeira linha abaixo pede uma senha descartável duas vezes; a linha de abertura pede a mesma senha. Os caracteres digitados não aparecem na tela. Esse sal da cifragem é distinto do sal **por conta** usado mais adiante para guardar verificadores de senha. Veja a [RFC 8018, seções 4–5](https://www.rfc-editor.org/rfc/rfc8018.html#section-4) e o [manual do `openssl enc`](https://docs.openssl.org/3.5/man1/openssl-enc/).

```bash
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 10000 -in claro.txt -out copia.cbc
od -An -tx1 -N32 copia.cbc
od -An -tc -N8 copia.cbc
openssl enc -d -aes-256-cbc -pbkdf2 -iter 10000 -in copia.cbc -out aberto.txt
cat aberto.txt
```

**Leia cada linha:**

| Linha | O que faz |
|---|---|
| `openssl enc ... -in claro.txt -out copia.cbc` | Cifra `claro.txt` com AES-256 no modo CBC e grava `copia.cbc`. `-salt` gera o sal; `-pbkdf2` deriva chave e IV da senha digitada; `-iter 10000` define a contagem de repetições. |
| `od -An -tx1 -N32 copia.cbc` | Mostra os primeiros 32 bytes da cópia em hexadecimal: `-N32` limita a leitura e `-An` omite os endereços. **Não decifra.** |
| `od -An -tc -N8 copia.cbc` | Mostra os primeiros 8 bytes como caracteres (`-tc`), para localizar o marcador `Salted__`. **Não revela a senha.** |
| `openssl enc -d ... -in copia.cbc -out aberto.txt` | `-d` pede a decifragem. O programa lê o sal da cópia, solicita a senha, usa as mesmas 10.000 repetições e grava `aberto.txt`. |
| `cat aberto.txt` | Mostra o texto recuperado para comparação com `claro.txt`. |

**Resultado esperado:** o primeiro `od` mostra bytes em hexadecimal, sem a frase legível. O segundo mostra o marcador `Salted__`: no formato produzido por estes comandos, os 8 bytes seguintes guardam o sal; os demais contêm dados cifrados. `cat aberto.txt` recupera `ordem=7;estado=aprovado`. Os bytes do sal variam a cada execução.

**Registre T2:** `senha + sal → PBKDF2 → chave/IV`, a posição do sal na cópia e o texto recuperado. Não anote a senha. Se faltar OpenSSL, use os resultados acima como **dados fornecidos**, sem inventar bytes.

**Pare:** o aspecto ilegível não demonstra integridade. Não altere CBC para tratar um erro eventual como verificação de tag; o [manual do OpenSSL](https://docs.openssl.org/3.5/man1/openssl-enc/) esclarece que `enc` não implementa GCM.

## Integridade e autenticação: verificar antes de aceitar {#propriedades}

**Confidencialidade** restringe a leitura. **Integridade**, aqui, significa detectar mudança nos dados protegidos antes de usá-los. Uma cópia ilegível pode estar cifrada e, ainda assim, ter sido alterada. A aparência dos bytes não responde à pergunta sobre alteração.

**Autenticar uma mensagem** é conferir, com a chave compartilhada, se o conjunto recebido corresponde ao que foi protegido. A cifragem autenticada produz uma **tag**: valor de verificação calculado sobre os dados protegidos. Na abertura, uma tag incompatível causa rejeição, sem entregar texto legível para uso.

Essa autenticação tem um limite: **não é login nem identifica uma pessoa**. Se várias pessoas conhecem a chave, qualquer uma pode produzir um conjunto válido.

**Exemplo:** texto cifrado e tag originais abrem com K1. Troque um bit do texto cifrado e mantenha a tag: a abertura falha. O resultado sustenta a rejeição da cópia alterada neste teste, sem revelar quem a mudou.

Uma **cifra autenticada** reúne duas funções:

- **Sigilo:** restringe a leitura do texto.
- **Verificação:** rejeita alterações detectadas antes do uso.

**GCM** (*Galois/Counter Mode*) é um modo de operação que oferece essas funções. **AES-GCM** significa usar AES no modo GCM. Não se trata de outra cifra independente ([NIST SP 800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final)).

### Nonce: distinguir uma cifragem da seguinte

Imagine duas cópias protegidas com a **mesma chave K1**. Cada cifragem precisa receber um **nonce novo**: N1 para a primeira, N2 para a segunda. *Nonce* significa “número usado uma vez”. No GCM, a regra essencial é **não repetir o par chave–nonce**. Reutilizar K1 com N1 em outra cifragem compromete as garantias de sigilo e integridade ([NIST SP 800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final)).

O nonce não é uma senha nem substitui a chave. Ele pode ser guardado junto do texto cifrado para que a abertura use o mesmo valor. O **sal** da prática CBC tinha outra função: participar da derivação da chave e do IV a partir de uma senha. Aqui, o programa já gera diretamente uma chave AES; `urandom(12)` cria um nonce de 12 bytes para aquela operação.

### AAD: vincular um dado que continua visível

Uma cópia pode trazer um rótulo público, como `tipo=ordem;versao=1`. O sistema pode precisar ler `tipo` e `versao` **antes** de abrir o conteúdo. Esse rótulo é **AAD** (*additional authenticated data*, ou dados adicionais autenticados): permanece legível, mas entra na verificação da tag junto com o texto cifrado ([glossário NIST](https://csrc.nist.gov/glossary/term/AAD)).

Se alguém trocar `versao=1` por `versao=2` sem a chave, a abertura com a tag original falha. Assim, o rótulo não pode ser mudado silenciosamente. AAD oferece **verificação de alteração**, não sigilo: se o rótulo contiver informação confidencial, coloque-o dentro do texto a cifrar.

Agora identifique as entradas de uma operação AES-GCM:

| Entrada | Neste exercício | Função |
|---|---|---|
| Chave | Gerada pelo programa | Segredo usado para cifrar e abrir. |
| Nonce | 12 bytes novos | Distingue esta operação das demais feitas com a chave. |
| Texto legível | `ordem=7;estado=aprovado` | Conteúdo que será ocultado. |
| AAD | `tipo=ordem;versao=1` | Rótulo visível cuja alteração deve ser detectada. |

Saem **texto cifrado e tag**. Para abrir, o programa usa a mesma chave, o mesmo nonce e o mesmo AAD, além do texto cifrado e da tag recebidos. Ele verifica o conjunto **antes de entregar o texto legível**. G1 usa as entradas originais; G3 troca apenas o AAD para testar a regra. A biblioteca `cryptography` executa essa verificação na prática abaixo.

### Prática curta no WSL: conferir a tag de AES-GCM {#gcm-terminal}

Este exercício usa a biblioteca Python [`cryptography`](https://cryptography.io/en/stable/hazmat/primitives/aead/#cryptography.hazmat.primitives.ciphers.aead.AESGCM), que implementa AES-GCM. **Crie um arquivo Python no VS Code** e execute-o no terminal WSL. O código fica separado dos comandos, para que você possa ler e alterar cada parte.

1. No terminal WSL, entre na pasta da A14 com `cd ~/cripto-a14`. Se ela ainda não existir, crie-a com `mkdir -p ~/cripto-a14` e repita o `cd`.
2. Digite `code .` no WSL para abrir essa pasta no VS Code. O ponto significa **pasta atual**. Se `code` não estiver disponível, no VS Code use **Conectar ao WSL** e abra `~/cripto-a14`.
3. Crie `aes_gcm_a14.py` nessa pasta, copie **somente o código Python abaixo** e salve. O [arquivo `.py` pronto para baixar](../assets/a14-a17/aes_gcm_a14.py) contém o mesmo código, se preferir abri-lo no editor.
4. Leia as seções numeradas do arquivo. Antes de executar, preveja o que acontecerá com a tag original, a tag alterada e o AAD alterado.

**Estado inicial:** o programa usa dados fictícios e cria uma chave e um nonce novos em memória. `encrypt` devolve **texto cifrado com a tag nos últimos 16 bytes**. Os valores aleatórios mudam a cada execução; compare os valores **dentro da mesma execução**. A chave será impressa apenas para estudo neste laboratório: ela é secreta em uso real e não deve entrar na entrega.

```python
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
```

**Execute no terminal WSL**, dentro da pasta onde salvou o arquivo:

```bash
python3 aes_gcm_a14.py
```

`python3` executa o arquivo indicado; o nome `aes_gcm_a14.py` deve corresponder ao arquivo salvo no VS Code. **Leia as operações do programa:**

- As linhas `from` carregam AES-GCM, a fonte de bytes aleatórios e o nome do erro de tag.
- `b'...'` representa bytes; `generate_key` cria a chave e `urandom(12)` cria um nonce de 12 bytes. `encrypt` devolve texto cifrado **seguido da tag**.
- `.hex()` mostra bytes em hexadecimal: cada par de caracteres representa um byte. `.decode("utf-8")` mostra como texto legível o AAD e a mensagem de teste. São duas representações dos **mesmos bytes**, não duas mensagens diferentes.
- `Sealed` é o conjunto completo devolvido por `encrypt`. `sealed[:-16]` mostra apenas o **ciphertext**; `sealed[-16:]` mostra a **tag**. Junte essas duas sequências, na mesma ordem, e você obtém os bytes exibidos em `Sealed`.
- Em **G1**, `decrypt` recebe as mesmas entradas usadas na cifragem e `.decode()` mostra o texto recuperado.
- `sealed[:-1]` conserva tudo menos o último byte; `^ 1` inverte um bit desse byte da tag. Em **G2**, `try/except InvalidTag` mostra a rejeição sem usar texto não autenticado. Em **G3**, os bytes cifrados e a tag voltam a ser os originais, mas o AAD muda de `versao=1` para `versao=2`.

| Caso | Saída esperada | O que concluir |
|---|---|---|
| G1 — tag original | `G1 texto: ordem=7;estado=aprovado` | O conjunto original foi aceito e o texto recuperado. |
| G2 — um bit da tag alterado | `G2: rejeitado; texto não entregue` | A tag recebida não corresponde ao conjunto protegido. |
| G3 — somente AAD alterado | `G3: rejeitado; AAD alterado` | O AAD permanece visível, mas sua mudança também é detectada. |

**Registre G1–G3:** localize `Key`, `Nonce`, `AAD`, `Text`, `Ciphertext` e `Tag` na saída. Compare `Sealed` com suas duas partes e as tags de G1/G2 para indicar o byte que mudou. A biblioteca confere a tag internamente: entrega o texto em G1 e lança `InvalidTag`, capturado pelo código, em G2 e G3. A falha demonstra a rejeição **neste teste controlado**, sem identificar quem mudou o arquivo. Não copie `Key` para o registro entregue.

**Pare** após G3, sem reutilizar a chave ou o nonce de teste. Se a saída diferir, registre a mensagem de erro e use o quadro acima como resultado **fornecido**, não observado.

Se aparecer `ModuleNotFoundError: No module named 'cryptography'`, o Python usado no terminal não possui a biblioteca. Confira que o terminal é o do WSL e informe ao professor; acompanhe a execução projetada ou use o quadro G1–G3 como dado fornecido. Se aparecer “can't open file”, confirme a pasta com `pwd` e o nome do arquivo com `ls`. Não trate erro de instalação ou de caminho como falha de autenticação.

**CBC e GCM são modos diferentes para usar AES:**

| Modo | Como participa da cifragem | O que este modo entrega sozinho |
|---|---|---|
| CBC | Encadeia blocos; o primeiro usa um valor inicial chamado **IV**. | Sigilo, sem tag de autenticação própria. |
| GCM | Usa nonce e calcula a tag sobre o conjunto protegido. | Sigilo e rejeição de alteração antes de aceitar o texto. |

Por isso, o exercício com `openssl enc -aes-256-cbc` mostra cifragem e abertura, enquanto G1–G3 testam a verificação da tag e do AAD. A [NIST SP 800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) descreve CBC como modo de confidencialidade.

```mermaid
flowchart LR
    P[Texto legível] --> C[AES-GCM]
    K[Chave secreta] --> C
    N[Nonce único com esta chave] --> C
    A[AAD: rótulo visível] --> C
    C --> O[Texto cifrado + tag]
    O --> V[Verificação antes da abertura]
    K --> V
    N --> V
    A --> V
    V -->|válido| R[Texto legível]
    V -->|alterado ou entrada errada| F[Falha: nenhum texto entregue]
```

**Decida:** o rótulo de tipo e versão do exercício precisa ficar secreto ou apenas vinculado ao conteúdo? Justifique com a propriedade correspondente. A tag não diz quem, entre várias pessoas que conhecem K1, produziu a mensagem.

## Chave e nonce: registrar funções diferentes {#chave-nonce}

| Campo | Função | Onde aparece na prática |
|---|---|---|
| Chave | Segredo usado para cifrar e abrir. | `generate_key` a cria em memória; o código a imprime somente para observação com dados fictícios. |
| Nonce | Valor por operação sob a mesma chave; não é segredo. | `urandom(12)` cria 12 bytes novos a cada execução. |
| Texto cifrado | Bytes que substituem o conteúdo legível fora do limite de confiança. | `sealed` contém esses bytes seguidos da tag. |
| Tag | Valor de verificação da operação. | `sealed[-16:]` seleciona os 16 bytes finais; G2 altera um bit deles. |

Nesta prática, a chave e o nonce são criados de novo a cada execução. No sistema real, geração, reinício e volume de mensagens exigem planejamento para preservar a unicidade do par chave–nonce ([NIST SP 800-38D, seções 8–9](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-38d.pdf)).

## Síntese: guardar a cópia {#aplicacao}

Para `ordem=7;estado=aprovado`, guarde nonce, AAD público e texto cifrado com tag junto da cópia; proteja K1 separadamente. Se o rótulo contiver informação sigilosa, inclua-o no texto cifrado. Uma abertura válida permite usar o conteúdo **somente após a verificação**. A cifra não substitui proteção do endpoint nem recuperação da chave.

## Hash e digest: comparar o conteúdo exato {#digest}

Uma **função hash criptográfica** recebe uma sequência de bytes e produz um valor de tamanho fixo chamado **digest** ou resumo. SHA-256 produz 256 bits (32 bytes). Entradas idênticas produzem o mesmo digest; alterar a entrada quase certamente produz outro. A função é projetada para dificultar encontrar duas entradas diferentes com o mesmo digest, mas igualdade de digests não identifica a origem do arquivo. Hash não cifra: o conteúdo pode continuar legível.

Para conferir uma cópia, calcule seu digest e compare com um valor publicado pelo fornecedor **por um canal confiável**. Se alguém puder substituir tanto a cópia quanto a referência, a igualdade não demonstra legitimidade. Essa distinção entre comparação de bytes e confiança na origem será usada novamente em assinaturas e certificados.

O exemplo `abc` tem um digest SHA-256 conhecido: `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad` ([exemplo NIST](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/examples/sha256.pdf)).

A entrada são exatamente três bytes ASCII, sem aspas, espaço ou quebra de linha. Uma comparação exige os mesmos bytes e a mesma codificação; aparência semelhante não basta.

**Prática curta no WSL:** no mesmo diretório, preveja os dois resumos e execute:

```bash
printf 'abc' > hash-a.txt
printf 'abd' > hash-b.txt
sha256sum hash-a.txt hash-b.txt
```

As duas linhas com `printf` criam arquivos de três bytes, sem quebra de linha; `>` cria ou substitui cada arquivo. `sha256sum` calcula e mostra o digest SHA-256 **de cada arquivo**, seguido do nome. O primeiro deve corresponder ao valor NIST acima; o segundo deve diferir.

Registre bytes exatos e fonte da referência. Se `sha256sum` faltar, use o valor NIST como dado fornecido. **Pare:** a comparação sozinha não atribui autoria.

**Registre D1:** `abc` coincide com o valor de referência; `abd` difere. A conclusão se refere aos bytes comparados, não à autoria. **Pare** antes de aceitar uma referência sem procedência confiável.

## HMAC: verificar mensagem com segredo compartilhado {#hmac}

Um **código de autenticação de mensagem** (*MAC*) é calculado com uma chave secreta compartilhada. **HMAC** é um MAC construído a partir de hash ([RFC 2104](https://www.rfc-editor.org/info/rfc2104/)).

- O emissor calcula o código sobre os bytes da mensagem.
- O receptor calcula ou verifica o código com a **mesma chave**.
- A mensagem continua legível: HMAC detecta alteração, mas não oferece sigilo.

Um código válido demonstra correspondência sob a chave. Se duas partes a conhecem, não distingue qual delas criou a mensagem.

**Prática curta no WSL:** no mesmo diretório, execute:

```bash
printf 'pedido=7;valor=10' > msg-a.txt
printf 'pedido=7;valor=11' > msg-b.txt
openssl dgst -sha256 -hmac 'chave-aula-descartavel' msg-a.txt msg-b.txt
openssl dgst -sha256 -hmac 'chave-aula-descartavel' msg-a.txt
openssl dgst -sha256 -hmac 'outra-chave-aula' msg-a.txt
```

**Leia cada linha:**

| Linha | O que faz |
|---|---|
| `printf ... > msg-a.txt` | Cria a mensagem original com `valor=10`, sem quebra de linha. |
| `printf ... > msg-b.txt` | Cria a mensagem alterada com `valor=11`. |
| Primeiro `openssl dgst` | Calcula um HMAC por arquivo. `-sha256` escolhe SHA-256; `-hmac` usa a chave literal de teste. Os nomes finais indicam os arquivos de entrada. |
| Segundo `openssl dgst` | Recalcula o HMAC de `msg-a.txt` com **a mesma chave**: o código deve coincidir com o primeiro. |
| Terceiro `openssl dgst` | Usa **outra chave** sobre `msg-a.txt`: o código deve diferir. |

A saída traz códigos HMAC, **não mensagens cifradas**. Os dois textos continuam legíveis nos arquivos.

Os códigos devem diferir. A chave literal é pública nesta página e serve apenas para observar a operação; não representa segredo protegido. Registre mensagem, chave e resultado. Se OpenSSL faltar, use M1–M3 abaixo como dados fornecidos. **Pare** antes de afirmar qual pessoa produziu a mensagem.

Registre M1–M3 como **comparação de códigos**; a página não executa um protocolo de verificação. **Pare** sem atribuir autoria individual.

### Quadro de resultados para acompanhar ou substituir o terminal

Estas linhas são **referência de comportamento esperado**. O valor calculado no terminal depende exatamente dos bytes da mensagem e da chave literal de teste.

| ID | Entradas | Resultado esperado | O que ainda não foi provado |
|---|---|---|---|
| D1 | SHA-256 de `abc` contra a referência NIST; depois `abd` | Coincide; depois difere | Autoria e procedência de qualquer arquivo externo. |
| M1 | Mensagem original e mesma chave de teste | Código coincide ao recalcular | Qual detentor da chave produziu a primeira versão. |
| M2 | Mensagem com `valor=11`, mesma chave | Código difere do M1 | Qual campo mudou fora deste teste controlado. |
| M3 | Mensagem original, outra chave | Código difere do M1 | Se a chave real está protegida no sistema. |

Se `sha256sum` ou OpenSSL não funcionar, leia o quadro na ordem D1–M3 e identifique-o como resultado fornecido. Se houver outro erro, anote comando e mensagem sem dados sensíveis. Espaços, acentos, quebras de linha e codificação mudam os bytes; confira a entrada exata antes de atribuir divergência a adulteração. A aceitação e rejeição do HMAC dependem da chave correta, mas não entregam diagnóstico causal de um evento real por si só.

## Senhas: verificar sem guardar o texto secreto {#senhas}

Uma senha é um segredo escolhido ou conhecido pelo usuário. O serviço precisa verificar a senha digitada sem armazená-la em texto legível. Se a base de **verificadores** vazar, um atacante poderá testar palpites fora do serviço. SHA-256 direto é rápido demais para essa finalidade, mesmo quando se acrescenta sal sem um esquema de custo adequado.

Um **esquema de armazenamento de senhas** recebe senha, **sal** e parâmetros de **custo**:

- O **sal**, diferente por conta, separa registros mesmo quando as senhas coincidem; não precisa ser secreto.
- O **custo** torna mais caro cada palpite após vazamento da base.
- O **verificador** é o valor armazenado para conferência no login, junto com esquema, versão, parâmetros e sal.

Argon2id em biblioteca mantida e parametrizada para o ambiente é uma opção recomendada pela [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html). Um *pepper*, se adotado, fica fora da base e não substitui sal ou custo.

O [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b/authenticators/) exige sal e esquema adequado com fator de custo. A [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) detalha Argon2id e alternativas.

O custo precisa ser medido no serviço real para não inviabilizar o login. Aqui, as linhas seguintes são **configurações fictícias**; nenhum verificador será derivado e nenhum login será executado.

**Exemplo trabalhado:** guardar `SHA-256(senha)` permite palpites rápidos após vazamento; contas com a mesma senha têm o mesmo digest.

A proposta revisada usa `Argon2id(senha, sal individual, parâmetros medidos)` e guarda versão, parâmetros, sal e verificador. O serviço deve aceitar a senha correta e rejeitar a incorreta em teste funcional. Isso dificulta o ataque offline, sem corrigir uma senha fraca ou dispensar limite de tentativas online.

### Oficina de configuração: localizar o que falta

**Estado inicial:** estas três linhas são propostas fictícias de armazenamento. Os valores `S-A`, `S-B` e `V-A` são rótulos, não sais nem verificadores reais. Não há login ou derivação de senha executados nesta oficina.

| Proposta | Campos previstos na base | Decisão a investigar |
|---|---|---|
| P-A | `conta=7; esquema=SHA-256; verificador=V-A` | O que facilita palpites após vazamento? |
| P-B | `conta=7; esquema=Argon2id; sal=S-A; custo=medido; verificador=V-A` e `conta=8; esquema=Argon2id; sal=S-A; custo=medido; verificador=V-B` | O que está incorreto mesmo com esquema e custo adequados? |
| P-C | `conta=7; esquema=Argon2id; versão=registrada; sal=S-A; custo=medido; verificador=V-A` e `conta=8; esquema=Argon2id; versão=registrada; sal=S-B; custo=medido; verificador=V-B` | Que teste funcional ainda falta realizar no serviço? |

Em dupla, trabalhe na ordem:

1. Preveja qual proposta rejeitar, corrigir ou aceitar condicionalmente; marque os campos que sustentam a decisão.
2. Reescreva apenas a linha de P-B que precisa de outro sal.
3. Para P-C, proponha `senha correta → aceita` e `senha incorreta → rejeitada`, ambos **pendentes de teste**.

Troque a revisão com outra dupla e confira a resposta. **Pare** quando as três decisões tiverem motivo; não marque login como executado.

<details>
<summary>Conferir a análise após registrar sua decisão</summary>

P-A é inadequada porque SHA-256 direto é rápido para palpites offline. P-B precisa de sal individual: reutilizar `S-A` entre contas elimina a diferenciação esperada. P-C contém os campos necessários para uma proposta, mas os rótulos não demonstram parametrização real, execução do esquema nem aceitação/rejeição no login; esses resultados precisam de teste funcional posterior.

</details>

**Sua decisão C1:** escolha o mecanismo para três finalidades:

- Conferir um pacote público contra o valor publicado pelo fornecedor: indique **de onde vem a referência**.
- Rejeitar alteração de mensagem entre serviços com segredo compartilhado: indique **quem conhece a chave**.
- Guardar verificador de senha: indique **sal individual, custo e campos armazenados**.

Para cada uma, registre entrada, caso válido, contraprova e limite. Não reutilize a chave literal de teste do terminal como segredo de produção.

### Checkpoint: separar evidência de proposta

Preencha C1 no [registro único](../atividades/A14-A18-criptografia-confianca.md#atividade): `finalidade → mecanismo → entrada/segredo/referência → D1 ou M1–M3 → caso negado → limite → decisão`.

Marque **observado** apenas o que o terminal executou; quadro e configuração de senha são referências e propostas. Compare uma linha com outra dupla. A A15 retomará a verificação com um par de chaves.

## Atividade {#atividade}

Preencha **C1** na [atividade única de A14–A16](../atividades/A14-A18-criptografia-confianca.md#atividade) em pequenos passos: T1–T2 após a cifra; G1–G3 após GCM; D1/M1–M3 após hash e HMAC; P-A–P-C após senhas. Marque cada resultado como observado, fornecido ou proposto. A entrega será após A16.

## Revisão rápida

1. Por que AES precisa de um modo e por que CBC não equivale a GCM?
2. Que diferença há entre digest, HMAC e cifra autenticada?
3. Por que um sal individual sem custo adequado não resolve o armazenamento de senhas?

## Ilustração opcional — Imagem 16

O [prompt numerado da Imagem 16](../assets/a14-a17/prompts-ilustrativos.md#imagem-16) está pronto para geração posterior. O conteúdo desta página já pode ser estudado e praticado sem a imagem.

## Referências

- [NIST FIPS 197](https://csrc.nist.gov/pubs/fips/197/final), [SP 800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final), [SP 800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final).
- [OpenSSL `enc`](https://docs.openssl.org/3.5/man1/openssl-enc/) e [`dgst`](https://docs.openssl.org/3.5/man1/openssl-dgst/).
- [RFC 8018 — PBKDF2, sal e contagem de repetições](https://www.rfc-editor.org/info/rfc8018/).
- [Documentação da biblioteca `cryptography` — AESGCM](https://cryptography.io/en/stable/hazmat/primitives/aead/#cryptography.hazmat.primitives.ciphers.aead.AESGCM).
- [NIST FIPS 180-4](https://csrc.nist.gov/pubs/fips/180-4/upd1/final), [RFC 2104](https://www.rfc-editor.org/info/rfc2104/), [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
