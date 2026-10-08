# A16 (provisória) — TLS e ciclo de chaves

O TLS usa as funções estudadas nas aulas anteriores para proteger uma conexão. A mesma proteção só permanece útil se as chaves puderem ser guardadas, trocadas e recuperadas com controle. Esta aula conclui o bloco com duas perguntas: **o que o canal protege?** e **como manter as chaves utilizáveis sem ampliar o acesso?**

**Tempo:** 100 minutos, com exposição e prática guiada intercaladas.

**Recursos:** página HTTPS do curso e WSL/Ubuntu com OpenSSL. Os dados fornecidos substituem a conexão quando necessário. Não informe credenciais nem contorne avisos de certificado.

**Objetivos de aprendizagem**

1. Relacionar certificado, acordo de chaves e cifra autenticada no TLS.
2. Diferenciar aceitação do canal de autorização da aplicação.
3. Justificar troca, restrição e recuperação de chaves usando casos permitidos e negados.

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

No [TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446), as partes negociam parâmetros e estabelecem material de chave. No fluxo com certificado, o servidor apresenta o certificado e prova o controle da chave privada ao assinar o contexto da negociação.

Após validar o certificado e o nome, o cliente pode associar essa prova ao servidor solicitado. As partes derivam **chaves de tráfego**, usadas para proteger os registros da conexão com cifra autenticada. A chave pública do certificado não cifra cada resposta HTTP. Este é o fluxo didático com certificado de servidor.

**Limite:** TLS protege dados em trânsito entre os pontos finais da conexão sob suas premissas; dados podem estar legíveis nos endpoints autorizados. Uma resposta `403` recebida por HTTPS indica que o canal foi estabelecido e a **aplicação recusou acesso**. Um `200` não prova, por si, que a aplicação autorizou corretamente cada objeto. Retome a pergunta de A04–A05: `identidade → ação → recurso` continua exigindo decisão do servidor de aplicação.

## Aplicação: aceitar ou recusar um certificado {#oficina}

**Pacote de teste:** nome solicitado `curso.exemplo.invalid`; data de análise: 6 out. 2026. O cartão B contém:

- SAN `curso.exemplo.invalid`, validade de 1 jan. 2026 a 1 jan. 2027 e uso `serverAuth`.
- Cadeia até raiz confiável, prova da chave privada no handshake TLS 1.3 e tráfego protegido.
- **Nenhuma informação de revogação fornecida.**

Cada cartão abaixo muda só uma condição de B. São dados didáticos, não certificados observados. Não acesse endereços `.invalid`.

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

### C3: aceitar condicionalmente e declarar o limite

No [registro único](../atividades/A14-A18-criptografia-confianca.md#atividade), registre C3 em partes:

1. Fonte: inspeção real, se ocorreu, ou pacote fictício.
2. Cartão B e duas recusas, cada qual com campo e motivo.
3. Cartão A: canal aceito e acesso ao objeto recusado.
4. Fluxo `certificado e prova → chaves de tráfego → registros protegidos`.

Declare a lacuna de revogação de B e a decisão que ainda cabe à aplicação. Cartões fornecidos não são “teste executado”.

**Extensão decisória:** uma equipe propõe liberar `/ordens/8` porque o certificado de `curso.exemplo.invalid` foi aceito. Qual evidência de autorização você exigiria no servidor? Especifique **conta, ação e objeto**; o certificado do servidor não responde a essa pergunta. A seção seguinte retoma as chaves que sustentam esses mecanismos: quem as gera, guarda, rotaciona e recupera?

### Prática curta no terminal: ler uma conexão do próprio curso {#terminal-tls}

`openssl s_client` abre uma conexão TLS e mostra informações técnicas. `-connect` escolhe o servidor e porta; `-servername` envia o nome ao servidor, e `-verify_hostname` confere o nome do certificado; `-brief` reduz a saída. Use somente o domínio público do próprio curso. A saída pode variar conforme OpenSSL e a rede; o comando não altera o servidor.

```bash
openssl s_client -connect rafaelrezo.github.io:443 -servername rafaelrezo.github.io -verify_hostname rafaelrezo.github.io -verify_return_error -brief </dev/null
```

**Resultado esperado com rede e cadeia local adequada:** linhas como `Protocol version: TLSv1.3` (ou outra versão aceita), `Ciphersuite: ...`, `Peer certificate: ...` e `Verification: OK`.

Registre a **saída real**, inclusive erro. `Verification: OK` não demonstra autorização a `/ordens/8`. Se faltar rede ou ferramenta, use o fluxo e os cartões B/N/A como **dados fornecidos**. **Pare:** não acesse os domínios `.invalid`.

## Gestão das chaves: manter leitura e reduzir exposição {#ciclo}

Uma chave precisa ter **finalidade, responsável, local, período de uso e estado**. Trocar a chave usada para **novas** cifras não recifra automaticamente cópias antigas. Recuperar uma chave perdida é diferente de continuar usando uma chave suspeita de exposição ([NIST SP 800-57](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final)).

## Inventário: localizar dependências antes da troca {#inventario}

O pacote tem identificadores estáveis. `K-A` e `K-B` são **rótulos**, nunca material secreto. “Selada” descreve a política proposta de guarda da cópia da chave, não uma operação executada nesta página. `C-01` e `C-02` são cópias fictícias da ordem `ordem=7;estado=aprovado`; os metadados `tipo=ordem;versao=1` são públicos neste exercício. O quadro mostra a situação **antes de E-1**; o painel começa **depois de E-1**. O painel não cifra nem decifra bytes.

| ID | Estado inicial do pacote | Responsável e propósito |
|---|---|---|
| K-A | Ativa para **novas cifras** e para abrir C-01; cópia de recuperação selada em repositório separado. | Serviço de ordens usa; custodiante autoriza recuperação. |
| C-01 | Cifrada sob K-A, com rótulo público e identificador da chave. | Serviço autorizado precisa abrir para manter a função. |
| K-B | Ainda não existe; proposta de geração para troca planejada. | Equipe de segurança aprova geração; serviço passa a usar. |
| C-02 | Será cifrada depois da troca, sob K-B. | Serve para comprovar novo uso. |
| E-1 | Troca planejada: K-A encerra uso para **novas** cifras; K-B entra em uso. | Operações registra momento, versão e teste. |
| E-2 | Suspeita de exposição de K-A **após** E-1. | Resposta a incidentes suspende seu uso e investiga cópias antigas. |
| E-3 | Perda da instância de K-B no serviço; cópia selada permanece disponível. | Custodiante e operações aprovam recuperação controlada. |

**Síntese:** registre propósito, responsável, estado e período de uso de cada chave. A troca de K-A por K-B impede novas cifras com K-A, mas não altera automaticamente C-01, que continua sob K-A.

O identificador da chave ajuda a localizar a correta; não é segredo nem autorização. A cópia de recuperação precisa ficar separada, protegida e testável. A [NIST SP 800-57](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final) distingue o período de aplicar proteção do período de processar dados antigos.

### Exemplo trabalhado: a troca que preserva leitura

Depois de E-1, o serviço cifra C-02 com K-B. C-01 continua identificado como objeto de K-A. Um serviço **autorizado** ainda pode precisar de K-A para abrir C-01 enquanto se planeja migrá-la. A regra correta para novas cifras é `K-B`; a regra para leitura de C-01, antes de E-2, é `K-A + autorização`. Tentar abrir C-01 com K-B deve falhar. **Trocar a chave ativa não reescreve cópias anteriores.** Registre `C-01 → K-A` e `C-02 → K-B` antes de avançar.

### Prática curta: três decisões no inventário

A partir de E-1 (troca planejada), preveja e confira estas relações **fornecidas**, sem fingir que um sistema real foi configurado:

| ID | Operação | Resultado esperado | Motivo |
|---|---|---|---|
| P1 | Serviço autorizado cifra nova cópia com K-B | Permitir | K-B está ativa para novas cifras. |
| N1 | Mesmo serviço cifra nova cópia com K-A | Negar | K-A saiu do período de nova proteção. |
| P2 | Serviço autorizado abre C-01 com K-A antes de E-2 | Permitir | A cópia antiga ainda depende de K-A. |
| N2 | Serviço tenta abrir C-01 com K-B | Negar | Trocar chave ativa não muda C-01. |
| N3 | Operador sem permissão tenta abrir C-02 com K-B | Negar | Possuir o identificador correto não concede acesso. |
| P3 | Custodiante e operações aprovam recuperar K-B selada | Permitir condicionalmente | Falta restaurar e testar abertura real. |

**Registre:** um caso permitido, dois negados e o teste funcional ainda pendente. Em E-2, suspeita de exposição de K-A, interrompa seu uso novo, investigue dependências e planeje recifrar C-01 a partir de fonte confiável. Em E-3, perda da instância de K-B, restaure a cópia selada sob dupla autorização e teste uma abertura representativa; gerar outra chave chamada “K-B” não recupera os mesmos bytes. **Pare:** essa análise é de política, não execução de restauração.

## Atividade {#atividade}

Conclua **C3** na [atividade única de A14–A16](../atividades/A14-A18-criptografia-confianca.md#atividade) à medida que analisar os cartões, o terminal TLS e P1–P3/N1–N3. Faça uma decisão final para **repouso, trânsito, backup e endpoint**: `mecanismo → evidência → contraprova → limite → responsável`. Revise com a dupla e entregue um único PDF no prazo definido pelo docente.

## Revisão rápida

1. Por que a chave pública do certificado não cifra cada resposta HTTP?
2. Uma resposta `403` em HTTPS representa falha de TLS ou decisão da aplicação?
3. Por que K-B ativa não abre C-01 e qual teste confirma a recuperação de K-B?

## Ilustração opcional — Imagem 15

O [prompt numerado da Imagem 15](../assets/a14-a17/prompts-ilustrativos.md#imagem-15) está pronto para geração posterior. O conteúdo desta página já pode ser estudado e praticado sem a imagem.

## Referências

- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/info/rfc8446/), [RFC 5280](https://www.rfc-editor.org/info/rfc5280/), [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).
- [OpenSSL `s_client`](https://docs.openssl.org/3.5/man1/openssl-s_client/).
