# Parecer técnico — segurança da informação e segurança industrial/OT

> Documento interno de governança curricular. Este parecer analisa a arquitetura e a matriz de aderência; não constitui material do estudante nem promessa de preparação para certificação.

**Data:** 13 de agosto de 2026  
**Escopo:** arquitetura A01–A30, matriz de referenciais profissionais e pacotes A01–A05  
**Referenciais usados como lentes:** NIST NICE, CompTIA Security+ SY0-701, ISC2 CISSP, ISA/IEC 62443, NIST SP 800-82 Rev. 3 e trilhas ICS da CISA

## 1. Decisão técnica resumida

A arquitetura possui uma boa espinha dorsal para uma disciplina introdutória: parte de evidência, exige explicação do funcionamento normal, liga condição a consequência e encerra com intervenção, validação e comunicação. Essa cadeia é mais valiosa profissionalmente do que tentar reproduzir o índice de uma certificação.

O percurso, porém, ainda não sustenta todas as classificações `Forte` da matriz. Há competências anunciadas em um encontro ou produto, mas sem prática repetida, retorno posterior ou validação suficiente para caracterizar desempenho. As maiores correções necessárias são:

1. tratar infraestrutura e redes como base diagnosticada e apoiada, não como pré-requisito implícito;
2. transformar gestão de vulnerabilidades, configuração segura e operação contínua em fios recorrentes;
3. distribuir OT ao longo do curso, preservando processo e safety, em vez de reintroduzi-la quase integralmente no encerramento;
4. tornar ciclo de vida de dados, privacidade, backup e recuperação decisões observáveis;
5. reduzir a promessa de amplitude em governança, nuvem, resposta e OT para garantir competência introdutória demonstrável;
6. redesenhar A04 sobre um fluxo familiar do Juice Shop e não usar A05 para ensinar simultaneamente arquitetura, STRIDE, prioridade, controle e teste.

Recomendação: **aprovar a arquitetura como direção, com revisão obrigatória da matriz e da distribuição antes de congelar A04–A30**. A01 e A02 oferecem uma base coerente. A03 produz uma habilidade útil de triagem, mas sua mudança para um cenário corporativo/OT não experimentado enfraquece a continuidade. A04 e A05, como materializados hoje, não devem ser usados sem redesenho.

## 2. Leitura correta dos referenciais

### NIST NICE

O NICE descreve trabalho por tarefas, conhecimentos e habilidades. Ele apoia a escolha de desempenhos observáveis — coletar evidência, analisar, proteger, responder, comunicar — mas não autoriza declarar formação para um papel profissional inteiro. A arquitetura acerta ao privilegiar produtos de trabalho. Para aderência defensável, cada competência deve indicar **o que o estudante realiza, em qual ambiente, com que grau de autonomia e qual evidência comprova o resultado**.

### Security+

Security+ é a melhor lente entre as selecionadas para verificar amplitude de entrada: ameaças e mitigação, arquitetura, operações, identidade, risco e supervisão. Ainda assim, sua cobertura enciclopédica não deve dirigir a ordem didática. O curso cobre boa parte da amplitude, mas tem lacunas práticas em segurança de endpoint e rede, gestão de vulnerabilidades, hardening, continuidade, privacidade e operação do programa.

### CISSP

CISSP é uma lente de integração e julgamento, não uma meta de profundidade para esta disciplina. Seus domínios ajudam a detectar ausências — ciclo de vida do ativo, engenharia, IAM, avaliação, operações e desenvolvimento seguro —, mas a experiência profissional pressuposta pela certificação não cabe em 30 encontros. Aderência deve signific **contato introdutório contextualizado**, nunca equivalência ou preparação integral.

### ISA/IEC 62443, NIST SP 800-82 e CISA ICS

Os três convergem em requisitos que a arquitetura precisa tornar experienciáveis: conhecimento do processo, inventário, consequência e risco, zonas e conduítes, acesso remoto, defesa em profundidade, monitoramento, resposta, recuperação e gestão durante o ciclo de vida. NIST e CISA acrescentam base pública e operacional; ISA/IEC 62443 organiza responsabilidades e ciclo de vida de IACS. Uma aula final de segmentação, mesmo boa, não demonstra essa progressão.

OT não deve ser uma cópia de TI com nomes industriais. O estudante precisa observar ao menos uma vez o processo normal, relacionar telemetria cibernética ao estado físico, decidir sob restrições de disponibilidade/safety e validar recuperação. As retomadas podem ser curtas, mas devem modificar decisões reais do caso.

## 3. Achados sobre a matriz de aderência

### Aderências superdimensionadas

| Família | Classificação atual | Correção recomendada | Justificativa técnica |
|---|---|---|---|
| Ativos, contexto e risco | Forte | **Parcial tendendo a forte** | Há consequência e priorização, mas faltam repetição do ciclo de tratamento, aceitação/exceção, continuidade e acompanhamento do risco residual. Risco quantitativo não é obrigatório no nível introdutório. |
| Identidade e acesso | Forte | **Parcial tendendo a forte** | A06–A08 formam boa sequência proposta, porém ciclo de vida, contas de serviço, privilégio administrativo e revisão de acesso precisam reaparecer em nuvem e OT. |
| Segurança de aplicações | Forte | **Parcial tendendo a forte** | O arco web é central e promissor, mas desenvolvimento seguro, dependências, segredos e evidência de correção ainda não estão suficientemente localizados. |
| Dados e criptografia | Forte | **Parcial** | Quatro mecanismos criptográficos e classificação não equivalem a proteção de dados no ciclo de vida. Faltam minimização, retenção, descarte, backup/restauração e privacidade aplicada. |
| Operações, detecção e resposta | Forte | **Parcial tendendo a forte** | Há alerta, triagem e nuvem, mas baseline, vulnerabilidades, mudanças, contenção, recuperação e lições aprendidas precisam formar um ciclo praticado. |
| Governança e comunicação | Forte | **Parcial** | Três encontros tardios comprimem política, risco, terceiros, conformidade e responsabilidades. Produtos comunicacionais existem, mas ainda não há adaptação consistente por público. |
| Raciocínio baseado em evidência | Forte | **Forte, com ressalva** | É a competência mais bem distribuída. A ressalva é preservar investigação concreta em A03–A05 e voltar a exigir confiança, limites e origem da evidência nos arcos posteriores. |

As classificações `Parcial` de arquitetura/engenharia, nuvem/infraestrutura e segurança industrial estão corretas; OT está próxima de `Fraca` na versão atualmente distribuída, pois a experiência principal aparece apenas em A29–A30.

### Competências ausentes ou pouco observáveis

1. **Fundamentos operacionais de rede e sistemas:** portas, protocolos, serviço, rota, processo, permissões, configuração e logs aparecem como meios de trabalho, mas não há diagnóstico de entrada nem apoio explicitamente governado.
2. **Gestão de vulnerabilidades:** falta o ciclo inventariar → descobrir → contextualizar → priorizar → atribuir → remediar/aceitar → verificar → acompanhar. A02 inicia o ciclo, mas a continuidade não está explícita.
3. **Hardening e gestão de configuração/mudança:** controles aparecem como decisões isoladas. Falta estabelecer estado esperado, detectar desvio, mudar com autorização e comprovar preservação funcional.
4. **Desenvolvimento seguro e cadeia de software:** revisão, dependências, componentes, segredos e pipeline não têm desempenho claramente reservado. Não é preciso ensinar DevSecOps completo; uma evidência de dependência/segredo e um teste de regressão bastam como introdução autêntica.
5. **Privacidade e ciclo de vida de dados:** LGPD não precisa dominar a disciplina, mas finalidade, minimização, retenção e descarte devem alterar uma decisão do caso. Backup e restauração precisam ser testados, não apenas citados.
6. **Continuidade e recuperação:** recuperação aparece no discurso e em A25/A30, mas não está garantida como ação observável. Em OT, retorno a estado seguro e coordenação com operação são essenciais.
7. **OT operacional:** inventário passivo, protocolos e telemetria, acesso remoto, zonas/conduítes, fornecedor, resposta e recuperação precisam de uma progressão mínima.
8. **Avaliação e comunicação por destinatário:** o mesmo achado deveria produzir, em ao menos um marco, versões técnicas e executivas distintas.

### Conteúdos que podem estar superdimensionados

1. **Taxonomias e metodologias de ameaça:** ameaças em A03, arquitetura em A04 e STRIDE em A05 consomem três encontros iniciais antes de autenticação, sessão e autorização. Para iniciantes, isso aumenta abstração sem ampliar proporcionalmente a capacidade de intervir.
2. **Criptografia em quatro encontros consecutivos:** é defensável apenas se cada encontro resolver uma propriedade diferente no mesmo fluxo de dados. Se virar exposição de algoritmos, deve ser comprimida em favor de ciclo de vida, chaves, configuração e validação.
3. **Governança concentrada no final:** política, padrões, procedimentos, compliance, risco e terceiros não podem ser tratados com profundidade de CISSP. Devem ser priorizados pela capacidade de decidir responsabilidade, exceção e evidência.
4. **Frameworks adicionais:** DREAD, PASTA, Zero Trust, blockchain e catálogos extensos não devem ocupar encontros próprios nesta carga. Entram somente quando mudam uma decisão já motivada.

## 4. Progressão TI/OT recomendada

A abertura OT da A01 é tecnicamente forte: evidencia que contenção deve preservar processo e safety. O problema não é começar com OT; é abandonar essa lente por mais de vinte encontros e esperar que A29 reconstrua domínio, arquitetura e restrições ao mesmo tempo.

Uma progressão introdutória realista deve conter quatro tipos de contato, distribuídos:

| Contato | Desempenho mínimo | Evidência esperada |
|---|---|---|
| Processo e consequência | distinguir estado cibernético, estado do processo e condição segura | linha do tempo A01 revisitada ou pequena telemetria de processo |
| Arquitetura e acesso | reconhecer componentes, função, zonas/conduítes e acesso remoto sem varredura ativa | diagrama mínimo com decisão e proprietário |
| Operação defensiva | selecionar telemetria, contenção e mudança compatíveis com disponibilidade/safety | alerta ou runbook com critério de parada e escalonamento operacional |
| Recuperação e governança | coordenar terceiro, exceção, restauração e validação do processo | exercício de mesa e evidência de retorno ao estado esperado |

Esses contatos não precisam transformar metade do curso em OT. Retomadas curtas em marcos de aplicação, pessoas/físico, detecção/resposta e terceiros permitem transferência cumulativa. O laboratório OpenPLC/FUXA deve consolidar uma linguagem já construída, não introduzi-la inteira em A29.

Protocolos industriais devem ser apresentados pelo papel no processo e pelo que sua telemetria permite afirmar. Um curso introdutório não precisa cobrir vários protocolos nem exploração ofensiva. Um único fluxo controlado e observável é suficiente para discutir ausência/presença de autenticação, integridade, disponibilidade, segmentação e detecção.

## 5. Adequação ao nível introdutório e prioridades em 30 encontros

O objetivo realista não é formar simultaneamente analista SOC, pentester, arquiteto, gestor e especialista OT. É formar uma base transferível: investigar, explicar o sistema, decidir proporcionalmente, validar e comunicar. Os papéis profissionais funcionam como perspectivas rotativas.

### Obrigatório para a promessa do curso

- ética, autorização, escopo, sanitização e parada segura em todas as práticas aplicáveis;
- separação entre fato, hipótese, conclusão e limite;
- ativos, função, proprietário, dependência, consequência e risco residual;
- fundamentos mínimos de HTTP, identidade, sessão, autorização, rede, serviço e log necessários aos laboratórios;
- uma sequência completa de segurança de aplicação: observar, reproduzir, explicar, corrigir/detectar e retestar fluxo permitido e negado;
- gestão de vulnerabilidade como fio recorrente;
- proteção de dados orientada a ciclo de vida e finalidade, com criptografia e gestão de segredos/chaves no contexto;
- detecção, triagem, contenção, recuperação e lição aprendida em pelo menos um caso integrado;
- responsabilidade compartilhada, IAM, exposição de rede, logging, custo e limpeza na nuvem;
- governança mínima: responsável, política/regra, exceção, terceiro e comunicação de risco;
- progressão OT com processo/safety, inventário, segmentação/acesso remoto, monitoramento e recuperação;
- adaptação de uma mesma evidência para destinatário técnico e decisor.

### Desejável, se houver tempo e base da turma

- MFA, federação e acesso privilegiado com maior profundidade;
- dependência vulnerável, segredo e verificação simples de pipeline;
- DLP como decisão contextualizada;
- segurança física e engenharia social integradas em um caminho de comprometimento;
- assinatura e PKI além da inspeção TLS básica;
- métricas simples de operação e vulnerabilidades;
- uma segunda tecnologia ou protocolo OT para comparação;
- comparação entre métodos de modelagem depois que o estudante dominar o raciocínio básico.

### Consulta ou extensão, não núcleo obrigatório

- cobertura de todos os objetivos de Security+;
- profundidade dos oito domínios CISSP;
- implementação integral do ciclo ISA/IEC 62443;
- risco quantitativo avançado;
- DREAD, PASTA e STRIDE completo por todos os elementos;
- blockchain, famílias extensas de malware, múltiplos algoritmos/protocolos e exploração OT ofensiva;
- pentest abrangente como processo completo, salvo se a ementa institucional o exigir explicitamente.

## 6. Decisão sobre A04 e A05

### Diagnóstico de A03 herdado

A03 está tecnicamente correta ao impedir atribuição prematura e exigir ameaças verificáveis. Seu problema é de continuidade: abandona a exposição do Juice Shop da A02 e introduz simultaneamente VPN, conta de serviço, servidor de arquivos, estação de engenharia e jump host OT. O estudante precisa inferir domínio, fluxo legítimo e autoridade antes de investigar. A prática descrita no README volta à loja on-line, criando ainda uma divergência interna entre aula e atividade.

A03 já realizada deve ser tratada como experiência de triagem válida. Não é necessário refazê-la. Para recuperar continuidade, A04 deve reancorar explicitamente os conceitos úteis da A03 em evidência familiar do Juice Shop e declarar que o cenário corporativo foi uma transferência, não uma nova arquitetura obrigatória.

### A04

**Decisão: redesenhar integralmente o cenário e preservar apenas a transformação conceitual.**

Usar uma jornada simples e legítima do Juice Shop já observada: pessoa → navegador → rota/API → decisão de acesso → recurso/dado. A turma deve observar o fluxo antes de diagramar. Uma variação pequena — conta, identificador de recurso, estado da sessão ou resposta — cria a pergunta sobre onde ocorre a decisão.

O conceito central deve ser **decisão de confiança/acesso no fluxo**, não notação arquitetural. Fronteira é nomeada somente depois que a turma identifica por que a confiança anterior não basta. O produto deve ser um diagrama mínimo, anotado com:

- função legítima e resultado esperado;
- dado/identidade que atravessa cada relação relevante;
- componente que decide;
- uma lacuna ou hipótese verificável;
- evidência capaz de confirmar a decisão.

Não reutilizar VPN/FILE/ENG/OT como caso principal. Não ensinar STRIDE, risco formal ou catálogo de controles nesta aula. OT pode aparecer apenas como transferência curta: em que ponto a consequência física exigiria outra autoridade ou critério de parada?

### A05

**Decisão: não manter o pacote atual como o encontro seguinte.**

A05 materializada exige STRIDE, formulação, priorização, controle, responsável, caso permitido, caso negado e risco residual em 104 minutos. Cada item é válido, mas o conjunto mede preenchimento e memória de processo mais do que análise. Além disso, a turma ainda não estudou de forma concreta autenticação, sessão e autorização — exatamente as decisões necessárias para formular boas ameaças no fluxo web.

Recomendação principal: usar o encontro A05 para consolidar uma decisão concreta de identidade/acesso no mesmo fluxo da A04 e deslocar STRIDE para depois de autenticação, sessão e autorização. O identificador A05 pode ser preservado, mas seu título, transformação, produto e ponte devem mudar na arquitetura antes da produção. STRIDE retorna como síntese de perguntas que os estudantes já aprenderam a fazer, aplicado seletivamente a duas ou três propriedades e sem matriz de completude.

Alternativa aceitável, se a ementa obrigar modelagem de ameaças imediatamente: reduzir A05 a **uma pergunta livre comparada a duas lentes STRIDE** no diagrama da A04. Prioridade, controle completo, testes e residual ficam para um encontro posterior. Não aplicar as seis categorias a todos os elementos.

### Portão técnico para avançar

A05 só pode introduzir STRIDE se, ao final da A04, a maioria da turma conseguir sem ajuda:

1. narrar o fluxo legítimo;
2. identificar identidade, recurso e componente decisor;
3. distinguir autenticação de autorização no caso;
4. formular uma condição e consequência testáveis;
5. apontar evidência de caso permitido e negado.

Se algum item falhar, o próximo encontro deve consolidar identidade/sessão/autorização, não acrescentar taxonomia.

## 7. Correções propostas à matriz

Na próxima revisão de `referenciais-profissionais-e-matriz-de-aderencia.md`:

1. trocar a escala baseada apenas em existência de encontro por critérios de evidência:
   - `Inicial`: conceito aplicado uma vez com forte orientação;
   - `Em desenvolvimento`: desempenho repetido em outro contexto;
   - `Demonstrável`: produto integrado, validação e comunicação com autonomia compatível com a disciplina;
2. registrar separadamente **cobertura temática** e **competência demonstrada**;
3. reclassificar as famílias conforme a seção 3 deste parecer;
4. remover “risco quantitativo” das lacunas prioritárias, salvo obrigação da ementa;
5. elevar hardening/configuração, gestão de vulnerabilidades, recuperação e fundamentos de infraestrutura a lacunas altas;
6. desdobrar segurança industrial em quatro desempenhos: processo/safety; arquitetura/acesso; detecção/resposta; recuperação/governança;
7. declarar a profundidade esperada: introdutória e assistida, sem equivalência profissional ou certificatória;
8. exigir ao menos duas evidências em momentos diferentes antes de classificar uma família como forte/demonstrável;
9. não usar o número de encontros como única medida: um fio recorrente pode ser mais forte que um bloco concentrado;
10. adicionar uma coluna de pré-requisito/apoio para redes, sistemas, HTTP e leitura de logs.

## 8. Briefing para o especialista em aprendizagem

O próximo trabalho deve distribuir o curso em 30 encontros **sem transformar os referenciais em uma lista de tópicos**. A estrutura deve preservar a cadeia:

```text
evidência → hipótese → funcionamento normal → condição → consequência
          → decisão → intervenção → validação → comunicação
```

### Restrições que devem orientar a distribuição

- A01–A03 já ocorreram. Trate seus produtos como herança; não proponha repetição integral.
- A04 deve reancorar o curso no Juice Shop e tornar visível uma decisão de acesso em fluxo familiar.
- A05 deve consolidar identidade/acesso; STRIDE deve ser adiado ou drasticamente reduzido conforme o portão técnico acima.
- Cada encontro admite uma transformação estrutural principal e deve declarar herança, lacuna, produto e ponte.
- Preserve 52 minutos teóricos e 52 práticos por encontro, mas integre-os em uma única investigação.
- Faça diagnóstico leve de redes/sistemas e ofereça apoio paralelo; não crie um bloco expositivo longo de pré-requisitos.
- Distribua gestão de vulnerabilidades, comunicação e validação como fios recorrentes.
- Crie ao menos quatro contatos OT cumulativos antes do encerramento, cobrindo processo/safety, arquitetura/acesso, operação defensiva e recuperação/governança.
- Use OpenPLC/FUXA no final para consolidar, não para apresentar todo o domínio OT.
- Garanta um ciclo aplicado de dados que inclua finalidade, classificação, proteção, retenção/descarte e recuperação; não organize o arco apenas por primitivas criptográficas.
- Garanta um ciclo operacional completo: detectar, triar, conter, recuperar e aprender.
- Mantenha nuvem suficiente para IAM, rede, logs, custo e limpeza, com laboratório econômico e plano alternativo.
- Limite métodos e taxonomias a instrumentos convocados por uma lacuna real.
- Diferencie núcleo obrigatório, conteúdo desejável e consulta/extensão. Quando houver conflito de carga, corte primeiro catálogos, frameworks adicionais e profundidade certificatória.
- Reserve marcos nos quais um produto anterior é revisado, em vez de criar trinta entregas independentes.

### Critérios para avaliar a proposta pedagógica

A distribuição será tecnicamente aceitável se permitir que um estudante iniciante, ao final, demonstre em ambiente autorizado:

1. análise baseada em evidência com limites explícitos;
2. reconstrução de fluxo legítimo e decisão de confiança;
3. identificação e tratamento verificável de uma condição de aplicação;
4. priorização e acompanhamento básico de vulnerabilidade/risco;
5. proteção contextualizada de identidade e dados;
6. detecção, contenção e recuperação com função preservada;
7. decisão em nuvem com responsabilidade, custo e limpeza;
8. decisão OT compatível com processo, disponibilidade e safety;
9. comunicação distinta para equipe técnica e decisor.

O especialista deve entregar uma distribuição executável, com orçamento cognitivo visível, e indicar explicitamente o que ficou fora do núcleo. Não deve prometer cobertura integral de Security+, CISSP, NICE ou ISA/IEC 62443.

## 9. Conclusão

O diferencial da arquitetura não é a quantidade de domínios citados, mas a disciplina de transformar evidência em decisão validada. A revisão deve proteger esse diferencial. A matriz precisa ficar mais conservadora e verificável; OT precisa deixar de ser uma abertura e um epílogo; e A04/A05 devem recuperar um sistema conhecido antes de acrescentar método. Com essas correções, 30 encontros são suficientes para uma base profissional introdutória coerente, embora não para profundidade certificatória ou especialização OT.
