# Proposta em análise — matriz de riscos TI/OT como fio curricular

**Estado histórico após decisão docente de 17 set. 2026:** esta proposta exploratória foi superada na distribuição imediata. A10 vigente trata engenharia social e segurança física; A11–A31 seguem a direção da [nova edição](confrontacao-nova-edicao-a10-a31.md). Permanecem úteis as cautelas sobre matriz modular e risco não equivaler a tópico. A antiga hipótese de R01–R03 em A10 não prevalece.

## Confronto da ideia

### O que ela melhora

1. **Dá motivo aos conteúdos.** Autorização, recuperação, VPN, certificados, chaves, tokens, engenharia social, malware e defesa entram para tratar riscos identificáveis, em vez de aparecer como catálogo de ferramentas.
2. **Torna a progressão visível.** A mesma linha pode passar de hipótese a evidência, controle proposto, implantação, teste, residual e revisão. O aluno percebe que “controle escolhido” e “controle eficaz” são estados diferentes.
3. **Aproxima TI e OT sem equipará-las.** A organização pode ter portal, arquivos e estações de engenharia, ao lado de um processo físico isolado. Uma decisão de TI pode ser transferida para OT somente depois de estudar função, segurança de pessoas, disponibilidade e responsabilidade operacional.
4. **Ajuda a escolher referenciais pela pergunta.** A avaliação usa a NIST SP 800-30; a gestão organizacional pode usar ISO/IEC 27001; OT pede NIST SP 800-82 e ISA/IEC 62443; mecanismos de chave e testes web requerem fontes próprias. Nenhum referencial substitui os demais.
5. **Facilita revisão final.** O dossiê de A31 pode voltar a riscos e controles específicos, mostrando o que foi demonstrado, o que ficou condicionado e quem revisa.

### Onde pode falhar

1. **Cenário forçado.** Um único incidente não explica toda a criptografia, todos os tipos de engenharia social ou todos os comportamentos de worm. O registro mestre deve ser âncora opcional; exemplos externos continuam válidos quando revelarem melhor o conceito.
2. **Matriz que vira lista de temas.** “VPN”, “ransomware” e “certificado” não são riscos por si. Cada linha precisa conter fonte ou evento, caminho, ativo/função, consequência e incerteza. Um controle pode tratar vários riscos; um risco pode exigir vários controles.
3. **Avaliação prematura.** Antes de apresentar o processo físico, não se pode atribuir consequência OT, classe ou eficácia a uma linha OT. A matriz terá candidatos ainda não avaliados; classes e residual surgem quando houver condições, critérios e evidências.
4. **Sobrecarga e repetição.** Reabrir nove linhas completas em cada encontro tomaria o tempo de aprender o tema. Cada aula trabalhará no máximo duas ou três linhas, com um recorte legível da matriz e uma pergunta nova.
5. **Laboratório grande demais.** Produzir portal, OT, PKI, VPN, logs, malware simulado e resposta como uma única plataforma seria frágil e caro de manter. O cenário é uma arquitetura de referência; laboratórios pequenos e pacotes de evidência podem representar partes dela, com procedência e limites explícitos.
6. **Falsa cadeia IT→OT.** Um evento na rede corporativa não demonstra alcance ao CLP. Fluxos, contas, fronteiras e condições de passagem terão de ser fornecidos ou observados antes de afirmar propagação. Worm é estudado por comportamento e contenção em ambiente isolado, sem executar código malicioso.
7. **Entrega infinita.** A matriz orienta aulas e checkpoints; não cria uma única tarefa domiciliar que cresce até A31. Permanecem as atividades principais por macrocomponente já previstas.

**Juízo:** viável como **registro mestre modular e versionado**, com base comum e evidências liberadas por fase. Não é viável como narrativa única obrigatória nem como matriz completamente classificada desde A10. A estratégia melhora o curso se cada encontro ainda for justificado por sua competência própria no roadmap.

## Arquitetura mínima da indústria fictícia

Uma **indústria didática de envase** recebe pedidos e mantém arquivos de projeto na TI. Uma estação de engenharia prepara configurações. Em laboratório OT isolado, sensor, controlador, bomba e tanque representam uma etapa física; uma HMI mostra o estado. Um fornecedor pode solicitar manutenção remota por canal controlado. A arquitetura **não presume conexão direta entre portal e controlador**. A A11 apresentará a função normal do tanque antes de atribuir impacto físico.

**Condições fixas da base:** pessoas, identidades, serviço de pedidos, arquivos de projeto, cópias, estação de engenharia, fornecedor, fronteira TI/OT e processo virtual. Dados, nomes e credenciais serão fictícios. Para cada simulação futura, declarar separadamente o que é dado fornecido, hipótese, configuração executada, rastro observado e conclusão autorizada.

## Registro mestre proposto

Cada linha terá identificador estável, função/ativo, evento e fonte, condição, consequência, evidência e incerteza, verossimilhança, impacto, classe inicial, resposta, controles, responsável, critério de verificação, resultado, residual e gatilho de revisão. **Nem todos os campos serão preenchidos na abertura.** Guardar versões de linha de base e de decisão para não reescrever retrospectivamente a avaliação.

| ID | Cenário de risco em uma frase | Estado na abertura da A10 | Aulas em que a linha pode avançar |
|---|---|---|---|
| **R01 — acesso indevido a projeto** | Identidade com alcance excessivo lê ou altera arquivo de outra equipe. | Avaliado com dados fictícios completos; controle de autorização pronto para demonstração. | A10; reteste em A27/A31. |
| **R02 — configuração alterada** | Arquivo de configuração aprovado muda sem detecção ou aprovação antes do uso. | Avaliado; distinguir integridade de autoria e de versão autorizada. | A10; hash/HMAC/assinatura e versão em A18–A21; A28/A31 conforme o caso. |
| **R03 — recuperação insuficiente** | Falha ou erro elimina trabalho recente e a cópia não devolve a função no prazo. | Avaliado; cópia existente e restauração ainda não verificada. | A10; continuidade em A15; revisão em A31. |
| **R04 — manutenção além do escopo** | Uma sessão de fornecedor alcança ativo ou ação fora da autorização. | **Candidato**, sem classe OT; fronteira e função ainda não fornecidas. | A11–A15; canal e identidade em A20–A21; reteste A30. |
| **R05 — decisão física com dado ruim** | Leitura ausente, atrasada ou falsa sustenta comando inadequado para bomba/tanque. | **Candidato**, sem classe ou consequência física definida. | A11–A14; observação e validação A30. |
| **R06 — identidade ou segredo exposto** | Token, credencial ou chave mal protegida permite uso indevido de serviço ou canal. | **Candidato**; separar token de sessão, chave criptográfica e certificado. | A16–A21; logs e resposta A24. |
| **R07 — atualização não confiável** | Artefato adulterado ou versão antiga ainda assinada é aceito pela estação. | **Candidato**; não presumir que o canal TLS valida o artefato. | A18–A21; endpoint A23; reteste A31. |
| **R08 — solicitação enganosa** | Mensagem de falso suporte induz uma pessoa a autorizar mudança ou revelar segredo. | **Candidato**; pedido e consequência ainda não observados. | A22–A24; exercício autorizado A29. |
| **R09 — execução e propagação** | Programa malicioso alcança estação de engenharia ou se propaga, se houver caminho e permissões. | **Hipótese condicional**; não afirmar infecção, worm nem passagem IT→OT. | A23–A24; A29–A30, somente em laboratório ou pacote sanitizado. |

R01–R03 são o **recorte completo da A10**. Sua matriz de base deverá trazer avaliação e premissas coerentes com a NIST SP 800-30 Rev. 1 usada na A09, além do critério de negócio e controles existentes. R04–R09 ficam visíveis como mapa do curso, mas sem notas fabricadas. Se uma investigação futura revelar evento causalmente diferente, abrir nova linha em vez de esticar uma linha existente.

## A10: três controles no máximo, escolhidos pela matriz

| Risco ativo | Controle a estudar | Tecnologia aplicada e efeito a observar | Adoção técnica e humana |
|---|---|---|---|
| **R01** | Autorização por identidade, função e objeto no serviço ou repositório de laboratório. | Caso legítimo permitido e caso fora do escopo negado; uso autorizado preservado. | Dono da informação aprova vínculos; TI provisiona/remove; equipe revisa exceções e orienta usuários. |
| **R02** | Publicação versionada com referência de integridade protegida. | Arquivo igual versus alterado, versão aprovada e limite do hash. | Responsável aprova mudança; operador registra versão; diferença aciona conferência por canal confiável. Assinatura e confiança na chave ficam para A18–A21. |
| **R03** | Cópia separada e restauração em destino isolado. | Arquivo/serviço abre, versão, tempo e original preservado; “cópia concluída” não basta. | Responsável define prazo e perda tolerável, operador agenda ensaio, equipe comunica falha e revisa frequência. |

Dois controles podem receber demonstração completa e o terceiro comparação orientada, respeitando 100 minutos. A escolha final entre eles depende do ensaio e da qualidade do rastro, sem exigir que o mesmo software represente os três. A A10 não implementará VPN, PKI, controle de CLP ou emulação de worm: esses mecanismos ganharão contexto e prática nas aulas próprias.

## Avanço por fase, sem antecipar teoria

| Fase | Linhas reabertas | Pergunta nova | Referências com função delimitada |
|---|---|---|---|
| **A10 — implementar controles básicos** | R01–R03 | A medida produz o efeito esperado e conserva a função? | NIST SP 800-30 para preservar avaliação; NIST SP 800-53/53A como consulta de controles e avaliação; OWASP para autorização web, quando aplicável. |
| **A11–A15 — processo e arquitetura OT** | R04–R05; R03 quando continuidade for relevante | O que muda quando tempo, estado e segurança física importam? Por onde a manutenção pode passar? | NIST SP 800-82r3 para OT; ISA/IEC 62443 para papéis, ciclo de vida e zonas/conduítes; NIST CSF 2.0 como mapa de resultados. VPN entra em A14 por necessidade de canal e fronteira, sem equivaler a autorização. |
| **A16–A21 — dados, canal e confiança** | R02, R06–R07 e canal de R04 | Que propriedade protege cada mecanismo, e quem confia em qual chave, certificado, token ou versão? | NIST SP 800-57 para ciclo de chaves; referências de TLS, certificados, assinaturas e OWASP conforme a pergunta. Um certificado válido não decide autorização da ação. |
| **A22–A24 — pessoas, endpoint e detecção** | R08–R09, com ligação condicionada a R04/R06 | Que ação humana e que comportamento técnico aparecem nos rastros? Como detectar e responder? | NIST CSF 2.0 para resultados; ATT&CK para descrever comportamentos observáveis, sem tratar técnica como risco ou prova de ataque. |
| **A25–A31 — avaliação autorizada e revisão** | Subconjunto R01–R09 que tiver laboratório e evidência | O controle resiste ao teste em escopo? A defesa observou? Qual residual pode ser sustentado? | OWASP WSTG para testes web; NIST SP 800-82 e ISA/IEC 62443 na validação OT; demais fontes somente na sua função. |

**Fontes oficiais consultadas:** [NIST SP 800-30r1](https://csrc.nist.gov/pubs/sp/800/30/r1/final), [NIST CSF 2.0](https://www.nist.gov/cyberframework), [NIST SP 800-82r3](https://csrc.nist.gov/pubs/sp/800/82/r3/final), [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards), [NIST SP 800-57 parte 1r5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final), [OWASP WSTG](https://owasp.org/projects/web-security-testing-guide) e [MITRE ATT&CK ICS](https://attack.mitre.org/matrices/ics/). A edição e o trecho exatos de cada referência serão definidos na ficha da aula correspondente. O CSF 2.0 organiza resultados de Govern, Identify, Protect, Detect, Respond e Recover; não é uma lista prescritiva de ferramentas. A SP 800-82r3 aborda requisitos próprios de OT, inclusive confiabilidade e segurança física. Essas relações são orientação curricular, não declaração de conformidade.

## Condições de viabilidade e próximos passos de planejamento

1. **Congelar uma base curta:** desenho IT/OT com fronteiras e funcionamento normal, inventário mínimo, responsáveis e critérios de impacto; não criar incidente contínuo obrigatório.
2. **Produzir a matriz completa de R01–R03:** fatos, premissas, classes coerentes com a escala A09, controles existentes, decisão e incerteza. Manter R04–R09 como candidatos até suas aulas.
3. **Mapear dependências por aula:** cada plano indica IDs que abre, fatos novos fornecidos, conceito, rastro, decisão e o que permanece indeterminado. Atualizar a arquitetura antes de alterar o roadmap de aulas futuras.
4. **Ensaiar pequenos ambientes:** laboratório de acesso para A10, processo OT isolado para A11–A15, artefatos criptográficos preparados para A16–A21, pacotes sanitizados de mensagem/endpoint para A22–A24. Os ambientes podem ser diferentes, desde que suas diferenças sejam explícitas.
5. **Preservar avaliação:** a matriz é mapa e apoio de estudo; cada macrocomponente conserva sua atividade principal. A08/A09 realizadas não recebem fatos novos por retroação. A10 começa o novo cenário prospectivo.

**Ponto de decisão docente:** aprovar ou ajustar a arquitetura da indústria fictícia, o limite de nove linhas candidatas, os três riscos ativos da A10 e o princípio de reabrir apenas poucas linhas por aula. Depois disso, fechar a matriz R01–R03, revisar A10 e preparar os experimentos.
