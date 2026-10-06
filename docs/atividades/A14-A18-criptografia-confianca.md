# Criptografia e confiança — registro único do bloco

## Atividade {#atividade}

**Missão:** em dupla, construir um registro de decisões sobre uma cópia de dados fictícia e seu acesso. O registro começa em A14 com cifra autenticada e será ampliado até A18 com hash/senhas, chaves assimétricas, certificados/TLS e ciclo de chaves. A entrega é **única**, após o último encontro do bloco; os preenchimentos presenciais são checkpoints, sem tarefas adicionais no Classroom.

**Insumo comum:** o conteúdo fictício é `ordem=7;estado=aprovado`. Uma cópia precisa ser guardada, conferida e aberta por um serviço autorizado. O rótulo inicial é `tipo=ordem;versao=1`. Não há pessoa, empresa ou incidente real por trás desses dados. Não suponha que a cifra elimina os riscos do endpoint vistos na A13.

Os textos `abc`/`abd` e `pedido=7;valor=10` da A15 são vetores locais para comparar mecanismos; `relatorio=7;resultado=aprovado` da A16 testa assinatura. Eles **não são versões cifradas da ordem**. Os IDs K1/K2 dessas demonstrações valem apenas dentro da respectiva aula. Em A18, `C-01` e `C-02` representam cópias fictícias da ordem e `K-A`/`K-B` são identificadores de chaves em um inventário didático. Não transfira material de chave de um painel para outro.

**Formato e envio:** um PDF legível, `cripto_sobrenome1_sobrenome2.pdf`, com C1–C5 e uma decisão final. Uma pessoa envia pelo Classroom, identificando a dupla. O docente informará o prazo. Use tabelas ou texto, mantendo os identificadores para permitir revisão. Se usar IA, registre pedido, sugestões aceitas/rejeitadas e motivos; não envie dados reais ou segredos.

**Escopo:** use apenas os dados desta página, os resultados da demonstração A14 e os insumos que serão fornecidos nas aulas seguintes. Não experimente chaves pessoais, certificados institucionais, contas externas ou serviços de terceiros. Uma decisão proposta deve ser chamada de proposta; um resultado do painel ou de um pacote de evidências deve ser identificado pela sua fonte.

| Parte | Decisão a registrar no mesmo PDF | Evidência mínima |
|---|---|---|
| C1 — cifra autenticada | Propriedade, campos visíveis/secretos, local da chave, regra de nonce, abertura e rejeição de alteração. | V1 e pelo menos F1/F2 da [A14](../aulas/A14-cifra-simetrica-autenticada.md#demonstracao), coletados ou lidos no quadro alternativo; limite no endpoint. |
| C2 — hash, HMAC e senha | Escolher o mecanismo adequado para verificar bytes, autenticar mensagem e guardar um verificador de senha, distinguindo suas chaves ou sal. | Caso válido/alterado e justificativa que não confunda digest com sigilo. |
| C3 — chaves assimétricas e assinatura | Distinguir cifrar, assinar e acordar segredo; verificar uma assinatura e explicitar o limite da chave pública ainda não vinculada à identidade. | Original aceito, mensagem alterada e chave pública errada recusadas, com motivo. |
| C4 — certificado e canal TLS | Verificar o vínculo entre identidade e chave pública; avaliar proteção do trânsito e separar canal aceito de autorização ao objeto. | Certificado/canal aceito e recusado com motivo; fluxo e limite da autorização. |
| C5 — ciclo de chaves | Definir quem gera, guarda, usa, rotaciona, revoga e recupera os segredos envolvidos. | Responsável, gatilho de revisão, falha a tratar e verificação de retorno. |

### Como manter o registro cumulativo

Crie uma tabela com uma linha por C1–C5 e estas colunas estáveis: `ID → objeto/pergunta → mecanismo e decisão → caso aceito → contraprova → fonte do resultado → limite → próxima ação/responsável`. Acrescente uma nota curta quando a linha precisar de campos próprios, como sal/custo em C2 ou SAN/cadeia em C4. Marque a fonte como **observado no painel**, **fornecido na página** ou **proposta a verificar**. Um resultado previsto que não foi executado não entra como “observado”. Se usou o quadro alternativo, cite o ID da linha fornecida e faça a mesma interpretação; não precisa inventar valores de nonce, digest, certificado ou chave.

Cada encontro acrescenta apenas sua linha ao mesmo arquivo de trabalho. Antes de finalizar, verifique se o caso aceito e a contraprova dizem respeito à mesma propriedade e se a próxima ação responde ao limite identificado. A revisão cruzada deve registrar ao menos uma correção ou divergência resolvida no bloco, sem criar uma nova entrega.

### Comece agora: C1

1. Faça a previsão de V1 e F1 antes da demonstração. Acompanhe os botões ou use o quadro alternativo da A14. Registre a **fonte** (“painel observado” ou “quadro de referência”) e o resultado.
2. Preencha a linha `objeto → propriedade → campos visíveis/secretos → V1 → F1/F2 → limite → próxima decisão` para a cópia fictícia. Explique por que o rótulo `tipo=ordem;versao=1` pode ser AAD; decida o que mudaria se ele contivesse um nome pessoal.
3. Proponha onde ficariam K1, nonce e arquivo cifrado. Indique quem precisa da chave para abrir e o que acontece se ela se perder. Sua proposta não constitui configuração executada.
4. Faça uma revisão cruzada: cada integrante lê uma conclusão do outro e registra uma correção ou divergência resolvida. Pare após C1; os mecanismos C2–C5 serão instrumentados nos encontros seguintes.

**Critério de parada:** se a página não oferecer Web Crypto, use V1–V2/F1–F3 como resultados de referência. Não instale software nem use dados próprios. Encerre fechando a aba; a chave efêmera deixa de estar acessível pela página. Guarde apenas o registro textual sem segredos.

### Continue nos encontros seguintes: C2–C5

1. **C2, na [A15](../aulas/A15-hash-hmac-senhas.md):** separe os três pedidos (pacote público, mensagem com segredo compartilhado, senha). Para digest, registre D1 e a procedência da referência; para HMAC, M1–M3 e quem conhece K2; para senha, use P-A–P-C para corrigir o sal repetido e propor testes de login. Marque esses testes como **pendentes**, pois a página não executa Argon2id.
2. **C3, na [A16](../aulas/A16-chaves-assinaturas.md):** registre V1–V3 para assinatura, mensagem e chave pública. Explique em uma frase por que V1 não atribui identidade institucional; indique de onde deveria vir o vínculo confiável da chave. Aponte separadamente a função de cifra e de acordo de chaves.
3. **C4, na [A17](../aulas/A17-certificados-tls.md):** use a inspeção do certificado do próprio curso somente se disponível em HTTPS; caso contrário, use os cartões fictícios. Registre B, dois casos recusados por motivos diferentes e A (`403`), com fonte, fluxo TLS em três etapas, limite de revogação e decisão de autorização ainda pendente da aplicação.
4. **C5, na [A18](../aulas/A18-ciclo-de-chaves-integracao.md):** compare P1–P3/N1–N4 do simulador de regras ou do quadro fornecido. Complete o mini runbook E-1–E-3, com responsáveis, acesso permitido/negado e teste de retorno proposto. A saída do simulador não prova cifra, autorização ou restauração em serviço real.

Após C5, escreva **uma decisão final** em quatro linhas, uma para repouso, trânsito, backup e endpoint/identidade: `propriedade → mecanismo → evidência favorável → contraprova → limite ou ação pendente`. Releia C1–C5 e confira que nenhuma proposta foi descrita como teste executado. Encerre o PDF com a revisão cruzada da dupla e a decisão que mudaria se uma chave se perdesse ou fosse exposta. Esse é o único arquivo a enviar após convocação e prazo do docente.

### Critérios da entrega única

| Critério | Peso | Evidência de atendimento |
|---|---:|---|
| C1 — propriedades e AEAD | 20% | Campos, chave/nonce, caso válido e rejeição, limite do endpoint. |
| C2 — funções criptográficas | 20% | Escolha coerente entre hash, HMAC e tratamento de senhas, com teste/contraprova. |
| C3 — chave pública e assinatura | 20% | Funções de cifra, assinatura e acordo, verificação válida e contraprovas com limite de identidade. |
| C4 — certificado, canal e autorização | 20% | Decisão de aceitação/recusa de certificado, fluxo protegido e limite de autorização. |
| C5 — operação e integração | 20% | Responsáveis e ciclo de chaves, recuperação e decisão final fundamentada. |

Em cada critério, **completo** apresenta mecanismo, evidência e limite; **parcial** omite um desses elementos; **insuficiente** apenas nomeia ferramenta ou afirma um teste que não ocorreu. A decisão final deve explicar o que a combinação protege e o que ainda depende do endpoint, do acesso e da recuperação.

**Extensão opcional:** considere que dois dispositivos cifram cópias sob a mesma chave. Explique que informação de coordenação falta para garantir unicidade dos nonces. Não reutilize um par chave–nonce no painel para tentar demonstrar a falha.
