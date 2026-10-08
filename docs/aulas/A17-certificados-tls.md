# A17 (provisória) — Certificados digitais e TLS

Um **certificado digital** associa uma chave pública a uma identidade declarada. O navegador avalia esse vínculo antes de aceitar a conexão HTTPS. **TLS** é o protocolo que autentica o servidor no fluxo estudado aqui, estabelece chaves para a conexão e protege os dados transmitidos. Esta aula explica as verificações necessárias e o alcance dessa proteção.

**Tempo:** 100 minutos (50 de conceitos e 50 de prática guiada). **Base:** chave pública, assinatura e acordo de chaves da [A16](A16-chaves-assinaturas.md); as funções são retomadas abaixo. **Recursos:** navegador e, se o curso estiver em HTTPS, seu visualizador de certificados. Os dados fornecidos nesta página bastam para a análise sem conexão externa. Não altere a configuração de confiança nem ignore avisos do navegador. C4 integra a [atividade única](../atividades/A14-A18-criptografia-confianca.md#atividade).

**Objetivos de aprendizagem**

1. Localizar o nome do serviço, o prazo, a cadeia de confiança e a finalidade de um certificado de servidor.
2. Decidir quando aceitar ou recusar um canal e indicar a condição que sustenta a decisão.
3. Explicar como a autenticação do servidor, o estabelecimento de chaves e a proteção do tráfego se relacionam no TLS 1.3, sem confundir canal autenticado com autorização para um objeto.

## Certificado: vincular nome, chave e emissor {#certificado}

Um certificado no formato **X.509** contém uma chave pública, nomes e outros campos assinados por uma **autoridade certificadora** (*emissor*). O cliente verifica uma **cadeia** de certificados: cada emissor valida o seguinte até chegar a uma **âncora de confiança**, raiz já aceita pelo cliente. Uma raiz enviada pelo próprio servidor não se torna confiável apenas por ter sido recebida. Além da cadeia, o cliente confere o nome do serviço, o período de validade e a finalidade permitida. A [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280) define a validação de caminho; a [RFC 9525](https://www.rfc-editor.org/rfc/rfc9525) trata da identidade do serviço.

**Síntese:** o certificado apresenta a chave; a cadeia e a âncora sustentam o vínculo; o nome precisa corresponder ao endereço solicitado; o período e a finalidade precisam permitir o uso. Uma verificação de assinatura isolada não substitui essas condições.

| Evidência | Pergunta de decisão | Interpretação cuidadosa |
|---|---|---|
| Nome DNS em **Subject Alternative Name** (SAN) | O endereço acessado corresponde a um nome coberto? | O nome do site, e não uma aparência parecida, é a referência. O campo `Subject/CN` isolado não substitui essa conferência. |
| `Not Before` / `Not After` | A data atual está dentro do intervalo? | Estar no prazo não prova que a chave privada continua sob controle do titular. |
| Emissor e cadeia | As assinaturas e restrições levam a uma âncora confiável para este cliente? | “Emitido por X” escrito no certificado não equivale a cadeia validada. |
| `Extended Key Usage` e restrições de uso | O certificado serve para autenticação de servidor TLS? | Um certificado limitado a autenticação de cliente não serve para esse papel. |
| Estado de revogação | Há evidência de revogação ou de consulta válida? | A ausência de aviso não é prova universal de “não revogado”; políticas e mecanismos do cliente variam. |

O visualizador mostra **campos**; a aceitação da conexão depende do navegador e de sua política. **Revogação** é a invalidação de um certificado antes do fim do prazo, por exemplo após comprometimento da chave. CRL e OCSP são meios de publicar ou consultar esse estado ([RFC 5280](https://www.rfc-editor.org/rfc/rfc5280), [RFC 6960](https://www.rfc-editor.org/rfc/rfc6960)). Uma resposta confiável que indique revogação exige recusa. Sem informação de estado no material, registre **revogação não comprovada**; o comportamento do navegador pode variar conforme a configuração.

### Inspeção no navegador: colher evidência real {#inspecao}

Use **somente a página do próprio curso que já está aberta**. Confira primeiro a barra de endereços: se começar com `https://`, há uma conexão candidata à inspeção. Se começar com `http://`, `file://` ou `localhost`, ou se o navegador não mostrar o certificado, passe diretamente ao pacote fictício. Não force HTTPS, não abra outro serviço e não contorne um aviso.

No **Firefox**, abra o ícone de informações da conexão ao lado do endereço → **Conexão segura** → **Mais informações** → **Ver certificado**. A interface pode variar entre versões; a [ajuda oficial do Firefox](https://support.mozilla.org/en-US/kb/secure-website-certificate) descreve esse percurso e os campos. Em outro navegador, use o menu de informações da conexão ou o visualizador de certificado disponível; se não o encontrar, use o pacote abaixo. Não altere as opções de segurança.

1. **Estado inicial:** copie apenas o **nome DNS** da página, sem caminho, parâmetros ou capturas de contas. Preveja se o certificado precisa conter exatamente esse nome ou um nome que o cubra validamente.
2. **Ação:** abra o certificado do servidor. Localize SAN, início/fim de validade, emissor, caminho e finalidade, quando esses campos aparecerem. Registre `domínio observado → SAN relevante → intervalo → emissor/caminho mostrado → finalidade mostrada → estado da conexão`. **Resultado esperado:** campos legíveis e indicação do navegador para a conexão; os valores reais variam conforme a publicação. Não copie números de série nem impressões digitais completos.
3. **Pausa de leitura:** distinga “vi o emissor/cadeia” de “o navegador aceitou a conexão”. Se um campo não aparecer, escreva **não exibido**. O certificado não mostra, por si, qual versão TLS foi negociada. Não marque revogação como “boa” somente porque a página abriu.
4. **Critério de parada:** registre uma conclusão condicionada aos dados visíveis, sem declarar que o site é seguro em todos os sentidos. Se surgir alerta, pare, registre apenas a classe do aviso e retorne ao pacote fictício; não avance para o site.

### Exemplo trabalhado: o nome errado

Você abriu `https://curso.exemplo.invalid`, mas o SAN apresentado cobre apenas `portal.exemplo.invalid`. Mesmo que o certificado esteja no prazo e tenha uma cadeia confiável, **recuse**: a chave foi vinculada a outro nome. Uma aparência semelhante na tela não modifica o endereço que o navegador pediu. Os domínios `.invalid` desta página são **fictícios e não devem ser acessados**.

## TLS 1.3: autenticação, chaves e tráfego {#tls}

**HTTPS** é HTTP transportado sobre TLS. Antes de transmitir os dados da aplicação, cliente e servidor realizam uma negociação inicial chamada **handshake**. No fluxo usual com certificado de servidor, três etapas explicam sua função:

```text
nome solicitado + certificado/cadeia + prova da chave privada
                       ↓ autenticação do servidor
troca de material efêmero + derivação de chaves de tráfego
                       ↓
requisições e respostas HTTP protegidas por AEAD no canal TLS
                       ↓
aplicação decide se esta conta pode acessar este objeto
```

No [TLS 1.3, RFC 8446](https://www.rfc-editor.org/rfc/rfc8446), as partes negociam parâmetros e estabelecem material de chave. No fluxo com certificado, o servidor apresenta o certificado e usa a chave privada correspondente para assinar o contexto do handshake. Com o certificado validado, o cliente associa essa prova ao nome solicitado. As partes derivam **chaves de tráfego** para proteger os registros da conexão com cifra autenticada. A chave pública do certificado não cifra cada resposta HTTP. Retomada de conexão e outros modos existem; este é o fluxo de ensino com certificado de servidor.

**Limite:** TLS protege dados em trânsito entre os pontos finais da conexão sob suas premissas; dados podem estar legíveis nos endpoints autorizados. Uma resposta `403` recebida por HTTPS indica que o canal foi estabelecido e a **aplicação recusou acesso**. Um `200` não prova, por si, que a aplicação autorizou corretamente cada objeto. Retome a pergunta de A04–A05: `identidade → ação → recurso` continua exigindo decisão do servidor de aplicação.

## Aplicação: aceitar ou recusar um certificado {#oficina}

**Dados de teste:** nome solicitado `curso.exemplo.invalid`, data de análise 6 out. 2026. O registro B contém SAN `curso.exemplo.invalid`, validade 1 jan. 2026–1 jan. 2027, cadeia assinada até raiz confiável, uso `serverAuth`, prova da chave privada no handshake TLS 1.3 e proteção autenticada do tráfego. A informação de revogação **não foi fornecida**. Cada linha abaixo muda apenas a condição indicada; as demais são iguais às de B. São dados fornecidos para análise, não certificados reais nem resultados observados. Não acesse os endereços `.invalid`.

| Cartão | Diferença em relação a B | Decisão inicial e motivo a preencher |
|---|---|---|
| B — base | Condições comuns; navegador aceitou a conexão. Resposta HTTP `200` para `/ordens/7`. |  |
| N — nome | SAN cobre apenas `portal.exemplo.invalid`. |  |
| V — validade | `Not After` foi 1 set. 2026. |  |
| C — cadeia | A última raiz não está entre as âncoras confiáveis do cliente. |  |
| F — finalidade | EKU contém apenas `clientAuth`, não `serverAuth`. |  |
| R — revogação | Resposta de status válida informa **revogado** antes da data da análise. |  |
| A — autorização | Certificado e TLS iguais a B; resposta HTTP `403` para `/ordens/8` da mesma conta. |  |

Para cada linha, registre `ID → campo relevante → aceitar, recusar ou não concluir → motivo → limite`. Depois confira as respostas de referência. Em B, explicite que o pacote não comprova o estado de revogação; em A, separe a aceitação do canal da recusa da aplicação.

Se a inspeção real não estiver disponível, localize os campos de B nesta página: nome solicitado, SAN, prazo, âncora e finalidade. Anote “revogação: não fornecida”. Essa leitura substitui a navegação no visualizador, mas sua fonte é **dado fornecido**, não observação de uma conexão.

**Verificação:** justifique B, dois motivos diferentes de recusa entre N/V/C/F/R e a decisão de A. Se o SAN for retirado de B, a correspondência do nome deixa de estar demonstrada. Não preencha campos ausentes por suposição.

<details>
<summary>Conferir decisões de referência após preencher os cartões</summary>

- **B:** canal aceito nas condições fornecidas; `200` é apenas a resposta da aplicação. O pacote não afirma consulta de revogação bem-sucedida.
- **N:** recusar pelo nome; **V:** recusar pelo prazo; **C:** recusar pela âncora; **F:** recusar pela finalidade; **R:** recusar pela evidência positiva de revogação.
- **A:** canal aceito como em B, objeto `/ordens/8` recusado pela aplicação (`403`). O motivo da política de autorização não é demonstrado apenas pelo código HTTP.
- **B sem SAN:** não concluir correspondência do nome com a evidência disponível; não preencher a lacuna usando o nome aparente da página.

</details>

### C4: aceitar condicionalmente e declarar o limite

No [registro único](../atividades/A14-A18-criptografia-confianca.md#atividade), escreva **C4** com: (a) a fonte da inspeção real, se ocorreu, ou “pacote fictício”; (b) B e dois cartões recusados com campo e motivo; (c) A como canal aceito e acesso recusado; (d) um fluxo em três setas `certificado e prova → chaves de tráfego → registros protegidos`; (e) a ressalva de revogação de B e a decisão que ainda depende da aplicação. Não escreva “teste executado” para cartões fornecidos.

**Extensão decisória:** uma equipe propõe liberar `/ordens/8` porque o certificado de `curso.exemplo.invalid` foi aceito. Qual evidência de autorização você exigiria no servidor? Especifique **conta, ação e objeto**; o certificado do servidor não responde a essa pergunta. A18 retomará as chaves que sustentam esses mecanismos: quem as gera, guarda, rotaciona e recupera?

## Atividade {#atividade}

Continue a [atividade única de criptografia e confiança](../atividades/A14-A18-criptografia-confianca.md#atividade), seção **C4 — certificado e canal TLS**. O preenchimento de hoje é checkpoint presencial; a entrega única e o prazo serão informados pelo docente no Classroom.

## Revisão rápida

1. Uma cadeia assinada até uma raiz desconhecida para seu cliente é suficiente para aceitar o servidor? Por quê?
2. Por que um certificado válido para `clientAuth` não resolve automaticamente a autenticação de servidor HTTPS?
3. Um `403` em HTTPS indica falha do TLS ou uma decisão posterior da aplicação? O que ainda falta saber?

## Referências

- [RFC 5280 — Internet X.509 PKI Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280): estrutura, caminho, finalidade e revogação.
- [RFC 9525 — Service Identity in TLS](https://www.rfc-editor.org/rfc/rfc9525): correspondência de nome em SAN.
- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446): autenticação, estabelecimento de chaves e proteção de registros.
- [RFC 6960 — OCSP](https://www.rfc-editor.org/rfc/rfc6960): respostas de estado de certificado.
- [Mozilla Support — Secure website certificate](https://support.mozilla.org/en-US/kb/secure-website-certificate): campos e visualizador do Firefox.
