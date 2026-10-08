# Prompts de ilustrações — A14–A17

Estas imagens são opcionais. As explicações, tabelas e demonstrações das aulas são completas sem elas. A numeração continua a série de imagens já solicitadas para A11–A12. Gerar cada imagem separadamente, sem dados reais, logotipos ou capturas de interfaces. Após receber os arquivos, inserir cada figura no ponto indicado com texto alternativo que descreva as relações essenciais.

## Imagem 14 — Funções de um par de chaves (A16) {#imagem-14}

**Local:** após a seção “Par de chaves: segredo privado e informação pública”.

**Prompt:** “Crie um diagrama didático horizontal, limpo e legível em projeção, em português. Mostre um par de chaves com duas partes relacionadas: chave privada, mantida pelo titular, e chave pública, distribuída aos verificadores. Abaixo, mostre a sequência ‘mensagem + chave privada → assinatura’ e ‘mensagem + assinatura + chave pública correspondente → verificação válida’. Ao lado, mostre ‘mensagem alterada’ e ‘outra chave pública’ levando a ‘verificação inválida’. Não desenhe assinatura como cifragem nem sugira que a mensagem fica secreta. Use ícones simples, setas e rótulos curtos; não inclua nomes de pessoas, empresas ou marcas. Formato 16:9, alto contraste, fundo claro, texto grande.”

**Texto alternativo previsto:** a chave privada produz a assinatura; a chave pública correspondente verifica a mensagem original; mensagem alterada ou chave pública diferente falham.

## Imagem 15 — Validação do certificado e proteção TLS (A17) {#imagem-15}

**Local:** entre “Certificado: vincular nome, chave e emissor” e “TLS 1.3: autenticação, chaves e tráfego”.

**Prompt:** “Crie um diagrama didático em português, fundo claro, alto contraste e rótulos grandes. Divida em dois blocos ligados por uma seta. Bloco 1, ‘Aceitar o servidor’: endereço solicitado comparado ao nome SAN do certificado; validade e finalidade; cadeia de assinaturas chegando a uma raiz que o navegador já confia; prova de posse da chave privada pelo servidor. Bloco 2, ‘Proteger o canal’: acordo de chaves, derivação de chaves de tráfego e requisições/respostas protegidas por cifra autenticada. Coloque uma caixa separada ao final: ‘A aplicação ainda decide acesso a cada recurso’. Evite reproduzir tela de navegador, cadeado como prova universal de segurança, marcas, pessoas e serviços reais. Formato 16:9.”

**Texto alternativo previsto:** nome, validade, finalidade, cadeia e prova da chave privada sustentam a autenticação do servidor; chaves de tráfego protegem o canal; autorização de recursos permanece na aplicação.
