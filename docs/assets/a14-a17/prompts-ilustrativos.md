# Prompts de ilustrações — A14–A16

Estas imagens são opcionais. As explicações, tabelas e demonstrações das aulas são completas sem elas. A numeração continua a série de imagens já solicitadas para A11–A12. Gerar cada imagem separadamente, sem dados reais, logotipos ou capturas de interfaces. Após receber os arquivos, inserir cada figura no ponto indicado com texto alternativo que descreva as relações essenciais.

## Imagem 14 — Funções de um par de chaves (A15) {#imagem-14}

**Local:** após a seção “Par de chaves: segredo privado e informação pública”.

**Prompt:** “Crie um diagrama didático horizontal, limpo e legível em projeção, em português. Mostre um par de chaves com duas partes relacionadas: chave privada, mantida pelo titular, e chave pública, distribuída aos verificadores. Abaixo, mostre a sequência ‘mensagem + chave privada → assinatura’ e ‘mensagem + assinatura + chave pública correspondente → verificação válida’. Ao lado, mostre ‘mensagem alterada’ e ‘outra chave pública’ levando a ‘verificação inválida’. Não desenhe assinatura como cifragem nem sugira que a mensagem fica secreta. Use ícones simples, setas e rótulos curtos; não inclua nomes de pessoas, empresas ou marcas. Formato 16:9, alto contraste, fundo claro, texto grande.”

**Texto alternativo previsto:** a chave privada produz a assinatura; a chave pública correspondente verifica a mensagem original; mensagem alterada ou chave pública diferente falham.

## Imagem 15 — Validação do certificado e proteção TLS (A16) {#imagem-15}

**Local:** na A16, antes de “TLS 1.3: autenticação, chaves e tráfego”.

**Prompt:** “Crie um diagrama didático em português, fundo claro, alto contraste e rótulos grandes. Divida em dois blocos ligados por uma seta. Bloco 1, ‘Aceitar o servidor’: endereço solicitado comparado ao nome SAN do certificado; validade e finalidade; cadeia de assinaturas chegando a uma raiz que o navegador já confia; prova de posse da chave privada pelo servidor. Bloco 2, ‘Proteger o canal’: acordo de chaves, derivação de chaves de tráfego e requisições/respostas protegidas por cifra autenticada. Coloque uma caixa separada ao final: ‘A aplicação ainda decide acesso a cada recurso’. Evite reproduzir tela de navegador, cadeado como prova universal de segurança, marcas, pessoas e serviços reais. Formato 16:9.”

**Texto alternativo previsto:** nome, validade, finalidade, cadeia e prova da chave privada sustentam a autenticação do servidor; chaves de tráfego protegem o canal; autorização de recursos permanece na aplicação.

## Imagem 16 — A mesma chave na cifra simétrica (A14) {#imagem-16}

**Estado:** imagem recebida, validada e incorporada em 8 out. 2026. [Arquivo publicado](imagem16.png); [local na A14](../../aulas/A14-cifra-simetrica-autenticada.md#figura-16). A figura substitui o esquema equivalente; os bytes são ilustrativos. O prompt abaixo permanece como referência de produção.

**Prompt:** “Crie uma ilustração didática horizontal, em português, para estudantes que nunca estudaram criptografia. Mostre à esquerda um pequeno arquivo com os dados fictícios ‘ordem=7;estado=aprovado’ e o rótulo ‘dados legíveis’. Uma seta chega à operação ‘cifrar’, que recebe também a ‘chave secreta K1’. No centro, mostre um arquivo com bytes ilegíveis, rotulado ‘dados cifrados’. Outra seta chega à operação ‘decifrar’, que recebe a **mesma chave secreta K1**, e produz à direita os dados legíveis originais. Desenhe K1 uma vez em posição central, com duas setas claras para as duas operações, enfatizando que é a mesma chave. Acrescente duas notas visuais curtas: ‘perdeu K1 → não consegue recuperar’ e ‘K1 exposta → sigilo comprometido’. Não mostre uma senha como se fosse a chave, não sugira que cifrar prova ausência de alteração e não inclua AES-GCM, nonce ou tag nesta figura introdutória. Fundo claro, alto contraste, texto grande, formato 16:9, sem marcas ou personagens.”

**Texto alternativo previsto:** a mesma chave secreta K1 é usada para transformar dados legíveis em dados cifrados e para recuperar os dados legíveis; perda de K1 impede a recuperação e exposição de K1 compromete o sigilo.

## Imagem 17 — Da senha à chave e ao IV por PBKDF2 (A14) {#imagem-17}

**Estado:** imagem recebida, validada e incorporada em 8 out. 2026. [Arquivo publicado](imagem17.png); [local na A14](../../aulas/A14-cifra-simetrica-autenticada.md#figura-17). A relação chave + IV foi validada para a derivação dos comandos OpenSSL apresentados, sem generalização a todas as KDFs. O prompt abaixo permanece como referência de produção.

**Prompt:** “Crie um diagrama didático vertical em português, para estudantes iniciantes, com poucos rótulos e texto grande. Na primeira linha, duas caixas separadas: ‘senha descartável — segredo digitado’ e ‘sal aleatório — público, guardado com a cópia’. Ambas apontam para ‘PBKDF2 — função de derivação; repetições configuradas’. A saída aponta para ‘chave AES + IV derivados’ e depois para ‘AES-CBC cifra o arquivo’. Ao lado, inclua uma comparação pequena: ‘mesma senha + outro sal → outro material derivado’. Não desenhe o sal como chave, não mostre uma senha real e não sugira que o sal autentica a cópia. Alto contraste, fundo claro, leitura em celular e projeção, sem marcas.”

**Texto alternativo previsto:** senha e sal público entram em PBKDF2, com repetições configuradas; o resultado fornece chave AES e IV para cifrar com CBC. Mudar o sal muda o material derivado mesmo com a mesma senha.

## Imagem 18 — Entradas e saídas de AES-GCM (A14) {#imagem-18}

**Estado:** primeira imagem recebida em 8 out. 2026 e não incorporada. A etapa de abertura não nomeia o texto cifrado recebido e usa “mesmas entradas”, podendo sugerir entrada do texto legível. O prompt foi corrigido para distinguir as entradas de cifragem das de abertura.

**Local previsto:** antes da prática G1–G3, depois de explicar o segredo do receptor, nonce e AAD.

**Prompt corrigido:** “Crie um diagrama didático de AES-GCM em português, com fundo claro e texto grande. Divida em dois painéis. Painel 1, “Cifrar”: quatro entradas explicitamente rotuladas — chave secreta, nonce novo para essa chave, texto legível com contas e valor fictícios, AAD visível “tipo=transferencia;versao=1”. Duas saídas: texto cifrado e tag. Painel 2, “Verificar e decifrar”: cinco entradas explicitamente rotuladas — mesma chave secreta, nonce original recebido, texto cifrado recebido, AAD recebido e tag recebida. Não desenhe o texto legível como entrada dessa etapa nem use rótulos como “mesmas entradas” ou “usado internamente”. Com o conjunto original, mostrar saída “texto legível recuperado”. Ao lado, manter chave, nonce, texto cifrado e tag originais, alterar somente o AAD para “tipo=transferencia;versao=2” e mostrar “rejeição — nenhum texto entregue”. Ligar o texto cifrado e a tag produzidos no primeiro painel às entradas do segundo. O nonce é novo na cifragem e o original na abertura. AAD não é cifrado; a chave não acompanha a mensagem. Não incluir sal, login ou identidade individual. Formato horizontal, alto contraste, sem marcas. Hexadecimais, se usados, devem ser identificados como ilustrativos.”

**Texto alternativo previsto:** a cifragem recebe chave, nonce novo, texto legível e AAD e produz texto cifrado e tag. A abertura usa a chave, o nonce original, o texto cifrado, o AAD e a tag recebidos; o conjunto original recupera o texto e a mudança do AAD causa rejeição sem entrega de texto.

## Imagem 19 — O que acompanha a mensagem AES-GCM (A14) {#imagem-19}

**Estado:** primeira imagem recebida em 8 out. 2026 e não incorporada. Os dois extremos rotulam K1 “para derivação e cifragem”, contrariando o programa: senha + sal + parâmetros entram no PBKDF2, e K1 é a chave derivada usada no AES-GCM. O prompt foi corrigido.

**Local previsto:** após explicar nonce, AAD e o segredo prévio do receptor, antes da montagem do envelope no programa.

**Prompt corrigido:** “Crie uma ilustração didática em português do envelope AES-GCM do exercício, com texto grande, fundo claro e alto contraste. Mostre “Emissor: cifra” e “Receptor: verifica e decifra”, unidos por “Envelope da aplicação”. O envelope contém somente cinco campos: sal público de 16 bytes neste ensaio; nonce público de 12 bytes; AAD visível “tipo=transferencia;versao=1”; texto cifrado com contas e valor ocultos; tag de 16 bytes. Fora do envelope, em cada extremo, mostre “senha previamente conhecida — segredo local” apontando para “PBKDF2 + sal + parâmetros” e depois para “chave K1 derivada — segredo local”. A chave K1 aponta somente para AES-GCM: cifrar no emissor, verificar e decifrar no receptor. Não escrever “K1 para derivação”: K1 é a saída do PBKDF2, não a senha de entrada. O receptor obtém o sal do envelope e já possui a senha; nenhuma senha nem chave cruza o envelope. Mostrar contas fictícias conta123/conta456 e valor fictício 5000 nos dois extremos. Legenda curta: “Sal: derivação. Nonce: cifragem. K1: uso em AES-GCM”. Não incluir cabeçalhos IP nem apresentar o ensaio como protocolo padronizado. Se não houver espaço para a derivação, mostrar apenas K1 local em cada extremo, rotulada “para AES-GCM”, sem atribuir a ela a função de derivar.”

**Texto alternativo previsto:** senha previamente conhecida e sal permitem derivar K1 em cada extremo; a chave permanece local e é usada no AES-GCM. O envelope contém sal, nonce, AAD, texto cifrado e tag, sem senha nem chave.

## Imagem 20 — Estabelecer o segredo antes de usar AES-GCM (A14) {#imagem-20}

**Local:** após “Acordo de chaves: uma ponte para A15 e A16”. Os esquemas de derivação e acordo da página já permitem compreender as relações.

**Prompt:** “Crie dois esquemas didáticos em português, com texto grande e alto contraste. Primeiro: ‘senha já conhecida nos dois lados’ alimenta duas operações PBKDF2, uma no emissor e uma no receptor; o mesmo sal público e os mesmos parâmetros entram em ambas; saem duas caixas com ‘mesma chave K1’. A senha não deve ser desenhada atravessando o envelope da mensagem. Segundo: ‘acordo ECDHE’ mostra cliente com privada C local e servidor com privada S local; somente informação pública C e pública S cruza o espaço entre eles. Cada lado calcula localmente o mesmo segredo, depois uma KDF deriva as chaves. Acrescente ‘Acordo exige autenticação dos participantes; no TLS com certificados, certificado e assinatura sustentam essa verificação’. Não desenhe segredo nem chaves privadas atravessando a rede; não mostre o segredo de ECDHE como chave AES pronta e não sugira que HKDF é função para endurecer senha. Sem marcas, personagens ou dados reais.”

**Texto alternativo previsto:** uma senha previamente compartilhada e entradas iguais permitem derivar a mesma chave por PBKDF2; ECDHE estabelece um segredo com trocas públicas e chaves privadas locais, exigindo autenticação e derivação posterior.
