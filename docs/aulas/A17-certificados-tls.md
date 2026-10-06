# A17 (provisória) — Certificados e TLS: aceitar o servidor e delimitar o canal

Na A16, uma assinatura válida com K1 não bastou para saber a quem K1 pertence. Agora um navegador recebe uma chave pública em um certificado ao abrir uma página HTTPS. **Que evidências permitem aceitar o servidor, e o que continua sendo decisão da aplicação?**

**Tempo:** 100 minutos (50 de conceitos e 50 de prática guiada). **Base:** assinatura, chave pública e acordo de chaves da [A16](A16-chaves-assinaturas.md). **Recursos:** esta página, navegador e, se o material do curso estiver em HTTPS, o visualizador de certificado do próprio navegador. O pacote fictício abaixo permite realizar todas as decisões sem rede. Não instale software, não modifique a configuração de confiança, não ignore avisos do navegador e não digite dados reais. O registro de hoje é **C4 da [atividade única de criptografia e confiança](../atividades/A14-A18-criptografia-confianca.md#atividade)**, sem entrega separada.

**Objetivos de aprendizagem**

1. Localizar e interpretar nome DNS, período de validade, caminho até uma âncora de confiança e finalidade de um certificado de servidor, distinguindo campos exibidos de validação efetiva.
2. Classificar um canal aceito e casos recusados a partir de evidências de certificado e TLS, registrando qual condição falhou e o limite da informação sobre revogação.
3. Explicar como a autenticação do servidor, o estabelecimento de chaves e a proteção do tráfego se relacionam no TLS 1.3, sem confundir canal autenticado com autorização para um objeto.

## Certificado: vincular nome e chave pública {#certificado}

Um certificado X.509 inclui uma chave pública e dados assinados pelo emissor. A assinatura do emissor permite verificar o vínculo **se** o caminho de certificados terminar numa âncora que o cliente já confia e se as demais verificações passarem. O certificado não carrega sua própria prova final de confiança: importar uma raiz desconhecida apenas porque ela veio junto com o servidor anularia a pergunta da A16. A validação de caminho da [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280) trata assinatura, validade, restrições e âncora de confiança; a [RFC 9525](https://www.rfc-editor.org/rfc/rfc9525) descreve a correspondência da identidade do serviço com o nome apresentado no certificado.

| Evidência | Pergunta de decisão | Interpretação cuidadosa |
|---|---|---|
| Nome DNS em **Subject Alternative Name** (SAN) | O endereço acessado corresponde a um nome coberto? | O nome do site, e não uma aparência parecida, é a referência. O campo `Subject/CN` isolado não substitui essa conferência. |
| `Not Before` / `Not After` | A data atual está dentro do intervalo? | Estar no prazo não prova que a chave privada continua sob controle do titular. |
| Emissor e cadeia | As assinaturas e restrições levam a uma âncora confiável para este cliente? | “Emitido por X” escrito no certificado não equivale a cadeia validada. |
| `Extended Key Usage` e restrições de uso | O certificado serve para autenticação de servidor TLS? | Um certificado limitado a autenticação de cliente não serve para esse papel. |
| Estado de revogação | Há evidência de revogação ou de consulta válida? | A ausência de aviso não é prova universal de “não revogado”; políticas e mecanismos do cliente variam. |

O visualizador ajuda a **ler campos**, mas a aceitação da conexão depende das verificações implementadas pelo navegador. Se um caso exigir confirmação de revogação e a evidência não a fornecer, registre **indeterminado quanto à revogação**, sem inventar uma consulta. Certificados podem ser revogados antes do fim da validade; CRL e OCSP são mecanismos descritos na [RFC 5280, seção 3.3 e seção 5](https://www.rfc-editor.org/rfc/rfc5280) e na [RFC 6960](https://www.rfc-editor.org/rfc/rfc6960). O comportamento de falha e o uso de respostas em cache dependem do cliente e da configuração. Nesta aula, uma **resposta confiável de revogação** é evidência para recusar; ausência de resposta no pacote não vira aprovação de revogação.

### Inspeção no navegador: colher evidência real {#inspecao}

Use **somente a página do próprio curso que já está aberta**. Confira primeiro a barra de endereços: se começar com `https://`, há uma conexão candidata à inspeção. Se começar com `http://`, `file://` ou `localhost`, ou se o navegador não mostrar o certificado, passe diretamente ao pacote fictício. Não force HTTPS, não abra outro serviço e não contorne um aviso.

No **Firefox**, abra o ícone de informações da conexão ao lado do endereço → **Conexão segura** → **Mais informações** → **Ver certificado**. A interface pode variar entre versões; a [ajuda oficial do Firefox](https://support.mozilla.org/en-US/kb/secure-website-certificate) descreve esse percurso e os campos. Em outro navegador, use o menu de informações da conexão ou o visualizador de certificado disponível; se não o encontrar, use o pacote abaixo. Não altere as opções de segurança.

1. **Estado inicial:** copie apenas o **nome DNS** da página, sem caminho, parâmetros ou capturas de contas. Preveja se o certificado precisa conter exatamente esse nome ou um nome que o cubra validamente.
2. **Ação:** abra o certificado do servidor. Localize SAN, início/fim de validade, emissor, caminho e finalidade, quando esses campos aparecerem. Registre `domínio observado → SAN relevante → intervalo → emissor/caminho mostrado → finalidade mostrada → estado da conexão`. **Resultado esperado:** campos legíveis e indicação do navegador para a conexão; os valores reais variam conforme a publicação. Não copie números de série nem impressões digitais completos.
3. **Pausa de leitura:** distinga “vi o emissor/cadeia” de “o navegador aceitou a conexão”. Se um campo não aparecer, escreva **não exibido**. O certificado não mostra, por si, qual versão TLS foi negociada. Não marque revogação como “boa” somente porque a página abriu.
4. **Critério de parada:** registre uma conclusão condicionada aos dados visíveis, sem declarar que o site é seguro em todos os sentidos. Se surgir alerta, pare, registre apenas a classe do aviso e retorne ao pacote fictício; não avance para o site.

### Exemplo trabalhado: o nome errado

Você abriu `https://curso.exemplo.invalid`, mas o SAN apresentado cobre apenas `portal.exemplo.invalid`. Mesmo que o certificado esteja no prazo e tenha uma cadeia confiável, **recuse**: a chave foi vinculada a outro nome. Uma aparência semelhante na tela não modifica o endereço que o navegador pediu. Os domínios `.invalid` desta página são **fictícios e não devem ser acessados**.

## TLS 1.3: autenticar, estabelecer chaves, proteger registros {#tls}

No uso comum de HTTPS com certificado de servidor, três relações importam:

```text
nome solicitado + certificado/cadeia + prova da chave privada
                       ↓ autenticação do servidor
troca de material efêmero + derivação de chaves de tráfego
                       ↓
requisições e respostas HTTP protegidas por AEAD no canal TLS
                       ↓
aplicação decide se esta conta pode acessar este objeto
```

No [TLS 1.3, RFC 8446](https://www.rfc-editor.org/rfc/rfc8446), as partes negociam parâmetros e estabelecem material de chave; no fluxo típico com certificado, o servidor apresenta o certificado e assina o contexto do handshake com a chave privada correspondente. A validação do certificado e essa prova vinculam o handshake ao servidor esperado. Chaves de tráfego derivadas protegem os registros com cifra autenticada. A chave pública do certificado **não cifra cada resposta HTTP**, e a conexão não reutiliza diretamente a chave AES-GCM do arquivo da A14. Há modos TLS com chave previamente compartilhada e retomada; o diagrama descreve o fluxo didático com autenticação por certificado, não todos os modos do protocolo.

**Limite:** TLS protege dados em trânsito entre os pontos finais da conexão sob suas premissas; dados podem estar legíveis nos endpoints autorizados. Uma resposta `403` recebida por HTTPS indica que o canal foi estabelecido e a **aplicação recusou acesso**. Um `200` não prova, por si, que a aplicação autorizou corretamente cada objeto. Retome a pergunta de A04–A05: `identidade → ação → recurso` continua exigindo decisão do servidor de aplicação.

## Oficina de decisão: sete cartões e uma contraprova {#oficina}

**Estado comum do pacote:** em 6 out. 2026, um navegador solicita `https://curso.exemplo.invalid/ordens/7`. Os dados a seguir são **insumos fictícios de análise**, não certificados reais, capturas de execução nem resultados do navegador. Em cada cartão, considere corretos apenas os campos explicitamente declarados; “demais condições iguais a B” significa SAN `curso.exemplo.invalid`, validade 1 jan. 2026–1 jan. 2027, cadeia assinada até raiz confiável, uso `serverAuth`, prova da chave privada no handshake TLS 1.3 e proteção AEAD do tráfego. A informação de revogação de B **não foi fornecida**. Não tente acessar os endereços fictícios.

| Cartão | Diferença em relação a B | Decisão inicial e motivo a preencher |
|---|---|---|
| B — base | Condições comuns; navegador aceitou a conexão. Resposta HTTP `200` para `/ordens/7`. |  |
| N — nome | SAN cobre apenas `portal.exemplo.invalid`. |  |
| V — validade | `Not After` foi 1 set. 2026. |  |
| C — cadeia | A última raiz não está entre as âncoras confiáveis do cliente. |  |
| F — finalidade | EKU contém apenas `clientAuth`, não `serverAuth`. |  |
| R — revogação | Resposta de status válida informa **revogado** antes da data da análise. |  |
| A — autorização | Certificado e TLS iguais a B; resposta HTTP `403` para `/ordens/8` da mesma conta. |  |

**Faça em dupla:** uma pessoa representa o navegador e anuncia **aceitar, recusar ou não concluir** para cada cartão; a outra aponta o campo que sustenta ou limita a decisão. Troquem os papéis após V. Para cada cartão, registrem `ID → evidência → decisão sobre certificado/canal → resultado da aplicação, se houver → limite`. Prevejam antes de conferir as respostas de referência abaixo. Em B, anotem explicitamente que a revogação não foi comprovada pelo pacote; em A, separem a aceitação do canal da recusa da aplicação.

Se a inspeção real não estiver disponível, use B como **ensaio de localização de campos** antes da classificação: sublinhe o DNS solicitado; circule SAN, intervalo, âncora e `serverAuth` nas condições comuns; anote “revogação: não fornecida”; só então marque o estado do canal e o `200` da aplicação em colunas distintas. A saída desse ensaio é a ficha de campos fornecidos, não uma inspeção de certificado real. Pare quando a dupla conseguir apontar a origem de cada campo sem inferir um valor ausente.

**Checkpoint:** todos devem conseguir justificar B, ao menos dois motivos distintos de recusa entre N/V/C/F/R e a diferença de A. Se uma condição não tiver evidência, não a preencham por suposição. Para testar a decisão, retirem mentalmente o SAN de B: o que deixa de ser possível concluir? Depois comparem o resultado com outra dupla e revisem uma linha.

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
