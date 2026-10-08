# A17 (provisória) — Certificados e TLS

**Revisão de 8 out. 2026:** expor certificado, emissor, cadeia, âncora e critérios de validação antes da inspeção. Explicar handshake, autenticação e chaves de tráfego antes dos cartões de decisão. Os cartões são dados de teste curtos, não um cenário a reconstruir. A Imagem 15 é opcional. Preservar C4 e 50 T/50 P planejados.

**Estado:** material prospectivo; a existência de A14–A16 não comprova sua realização. A numeração posterior a A13 é provisória. **Carga:** 100 minutos efetivos, **50 teóricos e 50 práticos guiados**. **Atividade:** checkpoint C4 do registro único A14–A18; sem tarefa adicional no Classroom.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa | Certificado X.509 para servidor: SAN, validade, cadeia/âncora, EKU e estado de revogação; autenticação por certificado, estabelecimento de chaves e proteção AEAD no TLS 1.3; limite de autorização da aplicação. |
| Ganho em relação à A16 | A16 mostrou que assinatura válida com uma chave pública não atribui identidade à chave. A17 decide quando o navegador pode aceitar o vínculo nome–chave e o canal, sem confundir essa aceitação com autorização a um objeto. Não pressupor que C3 ocorreu. |
| Objetivos | Interpretar campos e limite da validação; classificar canal aceito/recusado com contraprovas; explicar três funções do TLS e o limite da aplicação. |
| Pergunta central | O que permite confiar na identidade do servidor e o que essa confiança não permite concluir sobre `/ordens/8`? |
| Pré-requisitos | Chave pública e assinatura; relação funcional do acordo de chaves. Retomar brevemente se necessário. |
| Infraestrutura | MkDocs e navegador/projeção. Inspeção do próprio curso **somente se** servido em HTTPS; pacote fictício completo na página para qualquer ambiente. Nenhuma instalação ou mudança de confiança do navegador. |
| Evidência e critério | Registro da inspeção com campos observados ou “não exibido”; classificação B e dois casos recusados; A como TLS aceito e HTTP `403`; C4 com fonte, fluxo e limite de revogação/autorização. |
| Fontes | [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280), [RFC 9525](https://www.rfc-editor.org/rfc/rfc9525), [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446), [RFC 6960](https://www.rfc-editor.org/rfc/rfc6960), [Mozilla Support](https://support.mozilla.org/en-US/kb/secure-website-certificate). |

**Cadeia:** herança conceitual da pergunta de A16 sobre origem da chave → preparar critérios de confiança no nome e na cadeia → inspecionar o certificado do próprio curso se disponível e classificar cartões fictícios → registrar campo/estado/código HTTP → ler validade, finalidade, cadeia e limite de revogação → decidir aceitação do canal e recusa de acesso → comparar B/N/V/C/F/R/A com contraprova sem SAN → C4 → reabrir em A18 os responsáveis por geração, guarda, rotação e recuperação das chaves.

## Condução e contabilização

“Prática” significa operação ou análise guiada com previsão, registro e verificação de evidência. O professor demonstra o primeiro passo e espera a turma chegar ao mesmo estado. Estudantes operam o navegador quando disponível; duplas decidem os cartões em qualquer ambiente. Não contabilizar exposição do professor como prática.

| Minutos | T/P | Ação e ponto de espera |
|---|---:|---|
| 0–10 | 8/2 | Retomar C3: assinatura de K1 é válida, mas de quem é K1? Resposta curta individual e comparação. |
| 10–27 | 12/5 | Explicar X.509: SAN, prazo, cadeia, finalidade, revogação. Mostrar exemplo do nome errado. Duplas marcam campo que motiva recusa; esperar todos justificarem. |
| 27–45 | 3/15 | Conduzir inspeção no navegador em HTTPS, se houver. 3 min de demonstração; 15 min para localizar e registrar campos, comparar com domínio e distinguir exibido/validado. Em HTTP/local, duplas sublinham DNS e circulam SAN, prazo, âncora e EKU do cartão B; registram revogação “não fornecida”, canal e resposta HTTP em campos separados, com fonte “pacote fictício”. |
| 45–59 | 11/3 | Explicar fluxo TLS 1.3: certificado/prova, material efêmero/derivação, AEAD do tráfego. Duplas completam setas; pausa para corrigir “chave do certificado cifra todo o HTTP”. |
| 59–80 | 3/18 | Oficina: duplas classificam B/N/V/C/F/R/A, alternando navegador/revisor após V. Professor revela respostas somente após previsões; cada dupla corrige uma linha. |
| 80–94 | 9/5 | Distinguir `403` após TLS de falha do canal. Cada dupla redige C4 e extensão `conta → ação → objeto`, com revisão cruzada. |
| 94–100 | 4/2 | Revisão oral breve e ponte ao ciclo das chaves em A18; conferir que C4 marca fonte e limite. |
| **Total** | **50/50** | **100 minutos; 50 minutos de prática guiada verificável.** |

## Respostas e critérios de mediação

- **B** é aceitável sob as condições fornecidas e navegador que aceitou, mas a revogação do certificado não foi comprovada pelo pacote. Não inferir um estado de revogação universal a partir de ausência de alerta. **N** falha SAN; **V**, prazo; **C**, âncora; **F**, finalidade; **R**, evidência positiva de revogação.
- **A** tem certificado e TLS aceitos; HTTP `403` é decisão da aplicação. Não sabemos só pelo código se a política foi aplicada corretamente. Pedir conta, ação e objeto para investigar autorização.
- **B sem SAN** não tem evidência suficiente de correspondência de nome. Não permitir que `Subject/CN` ou aparência do endereço substituam a avaliação de SAN.
- Inspeção real: não há valores fixos a antecipar. O professor registra data, URL do curso e navegador usados **no plano de execução da turma**, se realizada; não transcrever dados da execução para esta página prospectiva. Certificado exibido não prova que TLS 1.3 foi negociado. Se a versão aparecer numa ferramenta do navegador, tratá-la como observação própria dessa conexão, nunca como propriedade do certificado.
- A RFC 8446 também prevê retomada/PSK. A aula usa o fluxo típico de certificado de servidor, assinatura do handshake, estabelecimento de chaves de tráfego e AEAD; não afirmar que toda conexão TLS 1.3 exibe certificado novo em toda retomada.
- Se a página estiver em HTTP/arquivo, o visualizador não aparecer, ou houver aviso: parar a inspeção, não contornar aviso; executar o pacote fictício, preservar previsões, decisão e marcação da fonte. Não chamar o pacote de teste real nem instalar extensão. Se houver dificuldade de interface, projeção da demonstração e registro da dupla mantêm a participação.
- C4 suficiente contém B, dois recusados por motivos distintos, A, fluxo de TLS, limite de revogação e limite de autorização. Uma frase “cadeado = seguro” é insuficiente; solicitar evidência específica.

**Ponte concreta:** C4 abre a pergunta **quem mantém confiáveis e disponíveis as chaves privadas do servidor e as chaves que protegem dados/backup?** A18 retoma esse campo para geração, acesso, rotação, revogação e recuperação, sem atribuir realização aos encontros prospectivos.
