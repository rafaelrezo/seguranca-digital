# A18 (provisória) — Ciclo de chaves: manter acesso e recuperar a cópia

Uma cópia cifrada pode estar intacta e, ainda assim, tornar-se inutilizável: a única chave foi perdida. Pode ocorrer o inverso: o backup funciona, mas qualquer operador consegue recuperar a chave. **Que sequência permite continuar o serviço sem ampliar o acesso?**

**Tempo:** 100 minutos (40 de conceitos e 60 de prática guiada). **Base:** mecanismos de A14–A17, sem exigir resultados pessoais dessas aulas. **Recursos:** esta página, navegador com JavaScript opcional, papel ou editor de texto. O pacote abaixo é fictício e sanitizado; não insira chaves, contas ou dados reais. A atividade única do bloco é [C1–C5](../atividades/A14-A18-criptografia-confianca.md#atividade).

**Objetivos de aprendizagem**

1. Distinguir geração, guarda, acesso, troca, suspensão, recuperação e descarte de uma chave, atribuindo responsáveis e rastros.
2. Testar no inventário didático uma operação permitida e contraprovas de chave errada, uso antigo e acesso indevido, separando saída simulada de teste criptográfico.
3. Formular uma decisão de retorno que preserve a leitura das cópias necessárias, bloqueie novos usos inseguros e registre o limite do endpoint e da identidade.

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

**Síntese:** uma chave deve ter propósito, dono, estado e período de uso registrados. A troca de K-A por K-B impede cifrar **novas** cópias com K-A; não converte automaticamente C-01 para K-B. O identificador da chave junto ao objeto ajuda a escolher a chave correta, mas não é segredo nem autoriza acesso. O backup da chave tem de ficar separado e protegido, com recuperação testável. A [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final) distingue períodos de aplicar proteção e de processar dados protegidos e orienta backup, recuperação e resposta a comprometimento.

### Exemplo trabalhado: a troca que preserva leitura

Depois de E-1, o serviço cifra C-02 com K-B. C-01 continua identificado como objeto de K-A. Um serviço **autorizado** ainda pode precisar de K-A para abrir C-01 enquanto se planeja migrá-la. A regra correta para novas cifras é `K-B`; a regra para leitura de C-01, antes de E-2, é `K-A + autorização`. Tentar abrir C-01 com K-B deve falhar. **Trocar a chave ativa não reescreve cópias anteriores.** Registre `C-01 → K-A` e `C-02 → K-B` antes de avançar.

## Geração e acesso: testar casos permitidos e negados {#testes}

O laboratório abaixo é um **simulador local de regras**: ele consulta o inventário fixo, não executa AES, TLS ou armazenamento de chaves. Selecionar ator, operação, objeto e chave produz um rastro de política com ID. A saída `permitido` significa apenas que a combinação atende às regras didáticas; uma implantação exigiria autorização real e teste funcional. O código é aberto em [a18-ciclo-chaves.js](../javascripts/a18-ciclo-chaves.js).

**Estado inicial do painel:** E-1 já ocorreu; K-B é a chave ativa de novas cifras, K-A está restrita à leitura legada. E-2 e E-3 são analisados depois, sem mudar silenciosamente as regras iniciais. P3 consulta a regra de autorização para uma eventual recuperação em E-3; não restaura uma chave. Preveja o resultado antes de clicar. Pare em cada linha e compare a previsão com o rastro.

<div id="a18-lab" aria-label="Simulador local de regras de chaves">
  <p id="a18-status" role="status">Preparando simulador. Se não carregar, use a tabela de rastros fornecidos abaixo.</p>
  <p><label for="a18-actor">Ator</label> <select id="a18-actor"><option value="servico">Serviço autorizado</option><option value="visitante">Operador sem permissão</option><option value="custodiante">Custodiante + operações</option></select>
  <label for="a18-action">Operação</label> <select id="a18-action"><option value="cifrar">Cifrar nova cópia</option><option value="abrir">Abrir cópia existente</option><option value="recuperar">Recuperar chave selada</option></select></p>
  <p><label for="a18-object">Objeto</label> <select id="a18-object"><option value="nova">Nova cópia</option><option value="c01">C-01</option><option value="c02">C-02</option><option value="kb">K-B selada</option></select>
  <label for="a18-key">Chave proposta</label> <select id="a18-key"><option value="kb">K-B</option><option value="ka">K-A</option></select>
  <button type="button" id="a18-run">Avaliar regra</button></p>
  <pre id="a18-output" tabindex="0" aria-label="Rastro textual da regra">Aguardando seleção.</pre>
</div>

Execute, em ordem, as combinações abaixo. Ajuste os quatro campos, clique em **Avaliar regra**, copie o ID e o motivo do rastro, e só então passe à seguinte. Se um campo não fizer sentido para a operação, o simulador deve recusar a combinação; isso também é evidência de validação de entrada, não de cifra.

| ID | Ator → operação → objeto → chave | Previsão | Resultado e motivo a registrar |
|---|---|---|---|
| P1 | Serviço → cifrar → nova → K-B |  |  |
| N1 | Serviço → cifrar → nova → K-A |  |  |
| P2 | Serviço → abrir → C-01 → K-A |  |  |
| N2 | Serviço → abrir → C-01 → K-B |  |  |
| N3 | Operador sem permissão → abrir → C-02 → K-B |  |  |
| N4 | Operador sem permissão → recuperar → K-B selada → K-B |  |  |
| P3 | Custodiante + operações → recuperar → K-B selada → K-B |  |  |

**Alternativa completa:** use este quadro se o painel falhar ou se acompanhar a projeção. As saídas são **fornecidas pelo modelo**, não observações de seu navegador. A decisão cognitiva é idêntica: preveja, compare, explique e registre uma correção.

| ID | Saída fornecida | Motivo do modelo |
|---|---|---|
| P1 | `permitido` | K-B está ativa para cifra nova pelo serviço. |
| N1 | `negado` | K-A encerrou uso para cifra nova em E-1. |
| P2 | `permitido` | C-01 exige K-A e serviço autorizado antes da suspeita E-2. |
| N2 | `negado` | K-B não corresponde à chave de C-01. |
| N3 | `negado` | Chave correta não concede autorização ao operador. |
| N4 | `negado` | Recuperação requer aprovação conjunta. |
| P3 | `permitido condicional` | Dupla aprovação autoriza ensaio de restauração; ainda falta teste de abertura. |

**Diagnóstico:** se o painel não iniciar, JavaScript pode estar bloqueado; use o quadro. Se sair “combinação fora do pacote”, confira objeto e operação, em vez de interpretar como falha criptográfica. Não registre `permitido` como prova de que um servidor real autorizou alguém. Ao terminar, deixe a página; o simulador não grava dados.

## Suspeita e perda: decidir o retorno {#retorno}

**E-2, suspeita de exposição de K-A.** Suspenda o acesso de K-A e novas operações que dependam dela; investigue quem a acessou e quais objetos ainda dependem dela. Uma lista de objetos por chave é necessária para dimensionar a migração. Uma cópia de K-A exposta **não se torna segura por revogar um certificado ou apagar K-A do serviço**: alguém que já a obteve pode tentar abrir C-01 antigo. A decisão defensiva inclui gerar chave de substituição sob controle, recifrar C-01 a partir de fonte confiável quando possível, atualizar backups e verificar a nova abertura e a rejeição de acesso indevido. Se não houver cópia confiável ou se a exposição já ocorreu, registre a incerteza e o impacto; não afirme confidencialidade restaurada retroativamente.

**E-3, perda da instância de K-B.** Não gere uma chave nova com o mesmo nome esperando abrir C-02: o identificador não substitui os bytes. Acione custodiante e operações, confira autorização e integridade da cópia selada, restaure em ambiente controlado e teste a abertura de uma cópia representativa. Registre solicitante, aprovadores, hora, objeto, resultado e limpeza da cópia temporária. Caso a chave esteja comprometida ou suspeita, não a reative para **novas** cifras; use o acesso estritamente necessário para migração, se a análise de risco permitir. A política deve diferenciar perda de disponibilidade e suspeita de exposição.

### Checkpoint integrado: complete C5

Em dupla, faça um **mini runbook de quatro linhas** para E-1, E-2 e E-3, mantendo os IDs do inventário:

| Estado/gatilho | Responsável e ação | Caso permitido/negado para verificar | Evidência, limite e próximo estado |
|---|---|---|---|
| E-1 troca planejada |  |  |  |
| E-2 suspeita de K-A |  |  |  |
| E-3 perda de K-B |  |  |  |
| Retorno funcional |  |  |  |

**Extensão decisória:** C-01 também existe em um backup offline antigo sob K-A. A equipe quer destruir imediatamente todas as cópias de K-A após E-2. Que teste e que alternativa de migração você exigiria antes? Indique quem aprova, qual dado pode ficar inacessível e por que “apagar a chave” não prova que uma cópia exposta desapareceu.

Finalize a [atividade única de criptografia e confiança](../atividades/A14-A18-criptografia-confianca.md#atividade) com C5 e uma decisão final: para **repouso**, **trânsito**, **backup** e **endpoint/identidade**, nomeie propriedade, mecanismo, evidência positiva, contraprova e limite. O TLS da A17 protege o canal sob suas premissas; não substitui autorização ao objeto nem guarda de chave em repouso. A cifra da A14 protege a cópia, mas o processo autorizado e seu endpoint veem dados legíveis. Um backup cifrado só ajuda a recuperar o serviço se a chave necessária também puder ser recuperada por pessoas autorizadas. Faça revisão cruzada e marque cada evidência como **observada no painel**, **fornecida pelo pacote** ou **proposta**. Há uma entrega C1–C5, no prazo informado no Classroom; este checkpoint não cria outra tarefa.

## Revisão rápida

1. Por que K-B ativa não abre automaticamente C-01?
2. Qual diferença há entre impedir novo uso de K-A e preservar a confidencialidade de C-01 após possível exposição?
3. Que três evidências permitem aceitar o retorno de E-3 sem conceder recuperação a qualquer operador?

## Referências

- [NIST SP 800-57 Part 1 Rev. 5 — Recommendation for Key Management](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final): ciclo, períodos de uso, backup, recuperação e comprometimento.
- [NIST SP 800-38D — Galois/Counter Mode](https://csrc.nist.gov/pubs/sp/800/38/d/final): modo autenticado usado como referência da cópia em A14.
- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/info/rfc8446/): proteção do canal discutida em A17.

<script src="../../javascripts/a18-ciclo-chaves.js" defer></script>
