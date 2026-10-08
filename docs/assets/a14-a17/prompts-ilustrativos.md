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

**Local:** após a definição de cifra simétrica, antes da seção “AES: algoritmo de blocos e modo de operação”. O esquema Mermaid já presente na página cumpre essa função enquanto a imagem não for fornecida.

**Prompt:** “Crie uma ilustração didática horizontal, em português, para estudantes que nunca estudaram criptografia. Mostre à esquerda um pequeno arquivo com os dados fictícios ‘ordem=7;estado=aprovado’ e o rótulo ‘dados legíveis’. Uma seta chega à operação ‘cifrar’, que recebe também a ‘chave secreta K1’. No centro, mostre um arquivo com bytes ilegíveis, rotulado ‘dados cifrados’. Outra seta chega à operação ‘decifrar’, que recebe a **mesma chave secreta K1**, e produz à direita os dados legíveis originais. Desenhe K1 uma vez em posição central, com duas setas claras para as duas operações, enfatizando que é a mesma chave. Acrescente duas notas visuais curtas: ‘perdeu K1 → não consegue recuperar’ e ‘K1 exposta → sigilo comprometido’. Não mostre uma senha como se fosse a chave, não sugira que cifrar prova ausência de alteração e não inclua AES-GCM, nonce ou tag nesta figura introdutória. Fundo claro, alto contraste, texto grande, formato 16:9, sem marcas ou personagens.”

**Texto alternativo previsto:** a mesma chave secreta K1 é usada para transformar dados legíveis em dados cifrados e para recuperar os dados legíveis; perda de K1 impede a recuperação e exposição de K1 compromete o sigilo.

## Imagem 17 — Da senha à chave e ao IV por PBKDF2 (A14) {#imagem-17}

**Local:** após “Senha e sal: obter material para AES-CBC”. O esquema nativo da página já mostra a relação enquanto a imagem não for fornecida.

**Prompt:** “Crie um diagrama didático vertical em português, para estudantes iniciantes, com poucos rótulos e texto grande. Na primeira linha, duas caixas separadas: ‘senha descartável — segredo digitado’ e ‘sal aleatório — público, guardado com a cópia’. Ambas apontam para ‘PBKDF2 — função de derivação; repetições configuradas’. A saída aponta para ‘chave AES + IV derivados’ e depois para ‘AES-CBC cifra o arquivo’. Ao lado, inclua uma comparação pequena: ‘mesma senha + outro sal → outro material derivado’. Não desenhe o sal como chave, não mostre uma senha real e não sugira que o sal autentica a cópia. Alto contraste, fundo claro, leitura em celular e projeção, sem marcas.”

**Texto alternativo previsto:** senha e sal público entram em PBKDF2, com repetições configuradas; o resultado fornece chave AES e IV para cifrar com CBC. Mudar o sal muda o material derivado mesmo com a mesma senha.

## Imagem 18 — Entradas e saídas de AES-GCM (A14) {#imagem-18}

**Local:** antes da prática G1–G3. O esquema nativo da página já mostra a relação enquanto a imagem não for fornecida.

**Prompt:** “Crie um diagrama didático em português, fundo claro, alto contraste, texto grande. Mostre quatro entradas distintas para AES-GCM: ‘chave secreta’, ‘nonce novo para esta chave’, ‘texto legível: ordem=7;estado=aprovado’ e ‘AAD visível: tipo=ordem;versao=1’. Mostre duas saídas: ‘texto cifrado’ e ‘tag’. Em um segundo passo curto, mostre as mesmas entradas e a tag original abrindo o texto; depois ‘AAD alterado para versao=2, tag original’ levando a ‘rejeição, sem texto entregue’. Não represente o AAD como cifrado, nem o nonce como sal ou segredo. Formato horizontal responsivo, sem marcas ou pessoas.”

**Texto alternativo previsto:** AES-GCM cifra o texto e produz uma tag usando chave, nonce e AAD; alterar apenas o AAD faz a abertura com a tag original falhar.
