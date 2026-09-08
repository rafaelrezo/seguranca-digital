# A05 — Quem é você e pode fazer isto?

## O problema que organiza a aula

Ana e Bruno são colegas e usam o mesmo computador do laboratório para montar pedidos no Juice Shop. Ana adiciona dois sucos à cesta A e sai. Bruno entra na própria conta e abre a cesta B.

As regras são simples:

- quando Ana sai, uma solicitação antiga em nome dela deve deixar de funcionar;
- Bruno pode usar a cesta B, mas não pode consultar ou alterar a cesta A.

!!! question "Pergunta mobilizadora"
    A tela agora mostra Bruno. Isso prova que o acesso de Ana terminou e que a cesta dela está protegida?

## Objetivos de aprendizagem

- Explicar autenticação, sessão e autorização usando as ações de Ana e Bruno.
- Comparar contexto antigo pós-logout e sessão válida pedindo recurso alheio.
- Recomendar controle no servidor e validar quatro casos permitido/negado.

**Tempo presencial:** 100 minutos de prática sincronizada em dupla.  
**Atividade posterior:** consolidação do mesmo caso, sem ferramenta nova.  
**Produto:** ticket integrado de sessão e autorização.

## O elo que chegou da aula anterior

A04 ensinou a acompanhar `ação → requisição → decisão → resposta`. A05 reutiliza essa habilidade em um caso novo; nenhuma conta ou captura Web é atribuída à A04.

## Primeiro compreenda o funcionamento normal

Ana entra, adiciona dois sucos e abre a própria cesta. A aplicação recebe uma solicitação equivalente a:

```text
contexto que representa Ana → GET /rest/basket/A → cesta de Ana
```

Aqui existem duas informações diferentes:

1. o contexto de sessão representa temporariamente Ana sem reenviar a senha a cada ação;
2. o identificador `A` informa qual recurso foi pedido.

Quando falamos em uma “solicitação antiga de Ana”, falamos dessa requisição preservada com o contexto anterior — nunca de copiar ou mostrar sua senha.

## Preparação, ação e rastro

- **Ferramenta:** Juice Shop local e Firefox DevTools, usados pela dupla após cada demonstração do professor.
- **Estado:** contas Ana/Bruno e cestas A/B previamente validadas.
- **Ação:** comparar quatro solicitações usando somente os dois recursos criados pela dupla.
- **Rastro:** pessoa representada, cesta pedida, status e resposta, com segredo oculto.
- **Parada:** somente `127.0.0.1`; não enumerar cestas, não copiar contexto e não editar cabeçalhos.

## Preparação no Firefox

1. Inicie o laboratório com o comando único fornecido pelo professor e abra `http://127.0.0.1:3000`.
2. Pressione `Ctrl+Shift+E` (`Cmd+Opt+E` no macOS) para abrir **Network**.
3. Clique na engrenagem do Network e marque **Persistir registros** (*Enable persistent logs*).
4. No filtro de Network, escreva `basket`.
5. Mantenha o DevTools aberto até terminar os dois testes.
6. Pare e confirme: persistência marcada, filtro visível e painel Network aberto.

Guardar uma requisição não cria um arquivo e não exige um botão **Salvar**. Significa deixar a linha da requisição na lista do Network com **Persistir registros** ativado.

O Firefox permite editar e reenviar uma requisição diretamente no painel Network. Assim, Postman não é necessário e a dupla não precisa transportar token ou cabeçalho entre ferramentas.

## Prepare Ana e preserve a primeira solicitação

1. Cadastre `anaNN@a05.invalid`, substituindo `NN` pelo número da dupla.
2. Entre como Ana e adicione **2 Apple Juice**.
3. Abra a cesta.
4. Em Network, selecione `GET .../rest/basket/N` com status `200`.
5. Anote somente o último número como **cesta A**.
6. Em **Response**, confirme os dois itens. Não copie cabeçalhos.

## Duas perguntas diferentes

1. Depois que Ana sai, a solicitação antiga que ainda leva seu contexto continua aceita?
2. Com sua própria sessão válida, Bruno consegue pedir a cesta identificada como sendo de Ana?

A primeira pergunta avalia **sessão**. A segunda avalia **autorização**. Uma pode falhar mesmo quando a outra funciona.

## Quatro casos para não confundir as decisões

| Contexto | Cesta pedida | Resultado esperado | Propriedade avaliada |
|---|---|---|---|
| Ana, sessão ativa | A | permitir | fluxo legítimo de Ana |
| Ana, contexto antigo pós-logout | A | negar | término da sessão |
| Bruno, sessão ativa | B | permitir | fluxo legítimo de Bruno |
| Bruno, sessão ativa | A | negar | propriedade/autorização |

Os casos positivos são necessários: uma negação isolada pode ser apenas aplicação indisponível.

## Caso 1 — Ana acessa a própria cesta

O professor registra a resposta permitida. Isso comprova que a função legítima opera, mas ainda não prova logout ou isolamento entre pessoas.

## Caso 2 — o contexto antigo de Ana

Depois que Ana sai e Bruno entra, a dupla repete a requisição preservada de Ana:

1. faça logout de Ana sem fechar DevTools;
2. cadastre `brunoNN@a05.invalid`, entre e adicione **1 Banana Juice**;
3. abra a cesta e anote seu identificador como **B**;
4. selecione a linha antiga `/rest/basket/A`;
5. abra **Headers** e escolha **Resend → Resend**;
6. localize a nova linha `/rest/basket/A` criada no Network;
7. abra a nova linha e registre status e resposta.

- se for aceita, aquele contexto continuou aceito após o logout observado;
- se for recusada, o servidor recusou aquele contexto naquele momento;
- se não for possível testar, o término permanece não comprovado.

O desaparecimento do nome de Ana na tela prova uma mudança de interface, não necessariamente a invalidação no servidor.

## Caso 3 — Bruno acessa a própria cesta

Bruno pede a cesta B e recebe a resposta esperada. Agora existem duas linhas de base legítimas: `Ana → A` e `Bruno → B`.

## Caso 4 — Bruno pede a cesta de Ana

Na solicitação legítima de Bruno, a dupla mantém sua sessão e altera somente o identificador da cesta:

1. selecione a linha `/rest/basket/B` que mostrou o Banana Juice;
2. use **Resend → Edit and Resend**;
3. na URL, troque apenas o último número: `B` por `A`;
4. não altere método, cabeçalhos ou corpo;
5. clique **Send** e abra status e resposta;
6. registre o conteúdo observado e o limite da conclusão.

Pare se A ou B não forem exatamente os números anotados pela sua dupla.

```text
Bruno → GET /rest/basket/B → permitir
Bruno → GET /rest/basket/A → negar esperado
```

Se a segunda for aceita, a sessão de Bruno é válida, mas a aplicação não aplicou corretamente a regra de propriedade naquele caso. Essa é uma falha de **autorização horizontal**: uma pessoa alcança recurso de outra pessoa com o mesmo nível de privilégio.

## A correção pertence ao servidor

A interface não é uma fronteira de autorização. Para cada solicitação, o componente que controla a cesta deve comparar a identidade reconhecida com o proprietário real:

```text
identidade autenticada = proprietário da cesta?
    sim → permitir a ação
    não → negar por padrão e registrar o evento
```

Buscar a cesta a partir da identidade autenticada, em vez de confiar apenas no identificador recebido, reduz a confiança no cliente.

## Validação e accounting

A correção deve preservar os quatro resultados da tabela. Para a tentativa `Bruno → cesta A`, um evento mínimo contém:

```text
time • subject_id=bruno • action=view • basket_id=A
decision=deny • reason=owner_mismatch • request_id
```

Não registrar senha, Cookie, Authorization ou token. Logging explica a decisão; não implementa o controle.

## Modelo conceitual: identidade, sessão e autorização

Esses mecanismos cooperam, mas possuem estados e falhas diferentes:

| Mecanismo | Pergunta | Entrada típica | Saída | Falha que o teste procura |
|---|---|---|---|---|
| autenticação | quem é o sujeito? | credencial ou fator | identidade reconhecida | representar pessoa errada |
| sessão | este contexto continua válido? | identificador/token e estado | contexto aceito ou recusado | contexto antigo continuar utilizável |
| autorização | pode fazer isto sobre este recurso? | sujeito, ação, objeto e contexto | permitir ou negar | acesso horizontal à cesta alheia |
| accounting | o que precisa permanecer demonstrável? | decisão e contexto sanitizado | evento correlacionável | ausência de trilha ou exposição de segredo |

Uma sessão válida é apenas uma entrada para a autorização. A regra de negócio ainda precisa comparar a identidade reconhecida ao proprietário efetivo do recurso. Alterar um identificador previsível não deveria ampliar autoridade.

### Autenticação não é sessão; sessão não é autorização

Autenticar estabelece uma identidade no início de uma interação. A sessão mantém um contexto associado a essa identidade entre requisições. A autorização usa esse contexto, a ação solicitada, o recurso e as regras de negócio para decidir se a operação deve ser permitida. Por isso, Bruno pode estar corretamente autenticado e ainda assim não possuir autorização sobre a cesta de Ana.

O servidor precisa repetir essa decisão em cada operação relevante. Esconder um botão, omitir um identificador ou confiar que o navegador enviará apenas valores legítimos não implementa autorização.

### Logout e término efetivo

Trocar o nome visível ou apagar dados no navegador não comprova invalidação no servidor. O término seguro exige que o contexto anterior deixe de ser aceito. Dependendo da arquitetura, isso pode envolver destruir estado no servidor, revogar ou bloquear um token, expirar cookies no cliente e limitar duração absoluta e por inatividade.

O teste da aula é deliberadamente limitado: reenvia uma solicitação preservada e observa se aquele contexto é aceito naquele momento. Ele não demonstra que todos os dispositivos, tokens ou sessões da conta foram encerrados.

### Autorização horizontal e identificadores

Quando Bruno possui permissão geral para usar cestas, mas acessa a cesta de Ana, a tentativa cruza recursos no mesmo nível de privilégio. Isso é uma falha de autorização horizontal. Tornar o identificador menos previsível reduz descoberta casual, mas não substitui a verificação no servidor.

Uma implementação robusta tende a carregar o recurso já limitado pelo sujeito reconhecido, ou compara explicitamente sujeito e proprietário antes de devolver ou modificar dados. A decisão deve ocorrer em toda solicitação relevante e falhar de modo seguro.

### Testes positivos e negativos

Os casos permitidos demonstram preservação da função; os negados demonstram a regra de segurança. Por isso, a validação não termina quando `Bruno → A` é bloqueado. Também é necessário confirmar que `Ana → A` e `Bruno → B` continuam disponíveis e que o contexto antigo de Ana é recusado.

## Atividade domiciliar em dupla

Repita os quatro casos ou use o pacote de evidências. Entregue:

1. regra de negócio em uma frase;
2. tabela com resultado, evidência e limite;
3. diagnóstico separado para sessão e autorização;
4. correção no servidor;
5. quatro testes de aceitação;
6. evento auditável para uma negação.

## Critérios de conclusão

- Ana, Bruno, contexto e cesta permanecem explícitos em toda conclusão;
- contexto antigo e sessão atual não são confundidos;
- sessão válida não é tratada como autorização universal;
- o controle atua no servidor e possui testes positivos e negativos;
- nenhum segredo aparece.

## Ponte para a próxima aula

Os quatro casos respondem duas perguntas conhecidas, mas não enumeram todos os modos possíveis de falha. A A06 reutiliza o mesmo fluxo e pergunta: **o que mais pode dar errado e que evidência permitiria testar cada hipótese?** O produto reaberto será a tabela dos quatro testes, transformada em entrada para um DFD e três ameaças candidatas.

## Revisão rápida

1. O que exatamente é repetido no caso 2?
2. Por que o caso `Bruno → B` é necessário antes de `Bruno → A`?
3. Por que esconder a cesta A na interface não implementa autorização?

## Fontes oficiais

- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html). Acesso em 25 ago. 2026.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html). Acesso em 25 ago. 2026.
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html). Acesso em 25 ago. 2026.
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html). Acesso em 25 ago. 2026.
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/). Acesso em 25 ago. 2026.
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html). Acesso em 25 ago. 2026.
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) — requisitos verificáveis de autenticação, sessão, controle de acesso e logging.
- [OWASP API Security Top 10 — Broken Object Property Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/) — referência complementar sobre autorização em APIs.
