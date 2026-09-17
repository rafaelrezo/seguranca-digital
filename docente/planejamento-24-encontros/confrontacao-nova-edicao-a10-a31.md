# Confrontação da nova edição proposta — A10–A31

**Estado:** análise curricular iniciada em 17 set. 2026 e direção geral posteriormente aceita pelo docente para produzir a A10. A08 e A09 foram realizadas conforme relato; a versão usada e os produtos individuais não foram auditados. A nova edição pode reorganizar materiais prospectivos e, depois, criar apoio de estudo para o início do curso sem alterar o que foi efetivamente ministrado. Após o confronto inicial, o docente autorizou ampliar o tempo de criptografia se necessário; esta revisão recomenda seis encontros. O detalhamento A11–A31 permanece em elaboração.

**Decisão posterior do docente:** direção geral aceita; avançar com A10 hoje. A trilha OT A19–A22 deve cobrir fundamentos da NIST SP 800-82r3, defesa em profundidade e avaliar recomendações de zero trust com as restrições de disponibilidade, confiabilidade e segurança física. Zero trust não equivale a retirar segmentação nem a impor reautenticação que interrompa o processo; a aplicação deve preservar a função operacional e ser demonstrada por casos permitidos/negados. O detalhamento completo A11–A31 continua pendente; A10 pode ser produzida com sua própria ficha e matriz curta.

## Proposta docente examinada

- A10: mitigar risco que combine engenharia social e segurança física; usar A11 se necessário.
- A12: proteção e classificação de dados, prevenção de perda e malwares.
- A13–A14: acesso remoto, dados em trânsito e em repouso, fundamentos aprofundados de criptografia, algoritmos, hash, acordo de chaves Diffie–Hellman, certificados, chaves, tokens e VPN.
- A15–A17: nova matriz industrial, NIST OT e ISA/IEC 62443.
- Depois: fundamentos e prática de pentest.

Restam **22 encontros de 100 minutos, A10–A31**. A sequência anterior reservava seis encontros para criptografia, cinco para OT/arquitetura distribuída e sete para ofensiva/defensiva. A proposta desloca a abertura para pessoas, ambiente físico e dados, e amplia o tempo posterior potencialmente disponível para pentest. O problema não é a ordem em si, mas a densidade de algumas faixas.

## Competências ainda necessárias

A ementa oficial exige, além de risco e governança já trabalhados, desempenho verificável em:

| Família | O estudante precisa conseguir fazer | Evidência mínima |
|---|---|---|
| Pessoas e ambiente físico | Reconhecer pretexto, autoridade indevida e falha de entrada; verificar pedido por canal independente; manter acesso legítimo e registrar visitante/exceção. | Decisão diante de pedido de manutenção e trilha de autorização/acesso. |
| Dados | Inventariar, classificar por uso e consequência, definir proprietário, circulação, retenção e descarte; decidir prevenção de perda proporcional. | Fluxo de dados e regra de manuseio/DLP com caso legítimo e bloqueado. |
| Malware e endpoint | Distinguir ferramenta legítima, erro e comportamento malicioso; ler processo, persistência, arquivo, rede e alerta; escolher contenção reversível. | Linha de tempo e hipótese com evidência e limite; worm tratado por propagação possível, sem execução real. |
| Criptografia e confiança | Relacionar mecanismo a propriedade: cifra simétrica autenticada, hash, HMAC, derivação de senha, acordo de chaves, assinatura, certificado, TLS, gestão e rotação de chaves. | Testes positivo/negativo de conteúdo, identidade, chave, versão e canal. |
| Arquitetura e acesso remoto | Distinguir autenticar canal, autorizar ação, segmentar fluxo, observar evento e preservar função; situar VPN, jump host e confiança da estação. | Diagrama com permitido/negado, identidade e recuperação. |
| OT | Reconstruir processo normal, variável, unidade, estado seguro, consequências físicas, zonas/conduítes e responsabilidades; adaptar controle a janela e confiabilidade. | Risco OT justificado e intervenção com efeito operacional observado ou premissa explícita. |
| Pentest e defesa | Definir autorização, escopo, parada e recuperação; reconhecer superfície; executar teste mínimo em laboratório; comunicar achado, correção e reteste; verificar telemetria e resposta. | Plano de engajamento, dois achados rastreáveis, contraprova, resposta e relatório. |
| Logs, auditoria e resposta | Correlacionar sujeito, ação, objeto, tempo e resultado; diferenciar evento, alerta e incidente; conter, recuperar e revisar. | Trilha auditável e detector testado com casos positivo/negativo. |

AAA, segurança de aplicação, política e avaliação de risco já apareceram em A01–A09, mas precisam de **transferência e validação** nos novos contextos. Nuvem pode ser transferência curta; não é item autônomo da ementa oficial. A classificação acima traduz a ementa e as lacunas registradas em [aderência](../aderencia-a-ementa-oficial-e-drifts.md) e [referenciais profissionais](../referenciais-profissionais-e-matriz-de-aderencia.md); não afirma domínio individual da turma.

## Pontos fortes da nova ordem

1. **A10 pode abrir com ação humana observável.** Um falso técnico que pede entrada física e mudança de acesso liga engenharia social, autorização e controle físico sem exigir um novo catálogo de ameaças.
2. **Dados antes de cifra melhora a escolha.** Classificação, estado, finalidade, retenção e perda definem que propriedade precisa ser protegida. Criptografia não corrige coleta excessiva, divulgação autorizada em excesso ou backup ausente.
3. **Criptografia antes de OT remoto facilita interpretar canais.** O aluno pode chegar à VPN, TLS e identidade do fornecedor com noção de chave, certificado e limite do canal. A transferência para OT ainda exige considerar processo e segurança física.
4. **Pentest depois de fundamentos reduz testes mecânicos.** Escopo, controle, logs, canal e recuperação já terão significado; Red/Blue/Purple podem comparar ataque, rastro e defesa.
5. **Matriz industrial pode dar continuidade.** Riscos de TI e OT podem ser reabertos por fase, com novos fatos, sem recontar uma história em cada aula.

## Tensões e correções necessárias

| Trecho da proposta | Confronto | Ajuste recomendado |
|---|---|
| Engenharia social + segurança física em A10 | **Cabe**, se for um fluxo integrado de visitante/manutenção com poucos controles. Uma revisão ampla de barreiras, vigilância, campanhas e comportamento humano não cabe com prática em 100 min. | A10: verificação independente, credenciamento, acompanhamento e registro. Retomar barreiras físicas e efeito no processo nas aulas OT. |
| Classificação, DLP e malware em A12 | São duas cadeias diferentes: uso e saída do dado; execução/persistência e dano no endpoint. Juntas, tenderiam a virar exposição rápida. | A11: classificação, ciclo e DLP. A12: malware, worm como hipótese de propagação, telemetria, contenção e efeito sobre dados. |
| Criptografia profunda em A13–A14 | Duas aulas de 100 min não comportam ensaio e explicação consistente de simétrica/AEAD, hash/HMAC/senha, Diffie–Hellman, assinaturas, certificados, TLS, VPN, tokens e ciclo de chaves. | Com autorização docente para ampliar, reservar **seis** encontros (A13–A18). Cada encontro precisa de uma propriedade, experimento positivo/negativo e decisão. Profundidade aplicada não exige implementar primitivas matemáticas. |
| VPN e tokens dentro de “tipos de criptografia” | VPN é arquitetura de canal; token representa credencial/estado de autorização e pode ser protegido criptograficamente. Diffie–Hellman é acordo de chaves, não cifra de dados. | Ensinar cada objeto por sua função e pelo rastro que permite observar. Unir na análise do fluxo remoto depois de estudar as partes. |
| OT em A15–A17 | Três aulas podem oferecer introdução e uma decisão, mas comprimem processo normal, risco físico, NIST 800-82, ISA/IEC 62443, arquitetura, manutenção, monitoramento e recuperação. | Reservar **quatro** encontros (A19–A22), com transferência posterior no bloco final. |
| “Depois, pentest” | A ementa exige noções de pentest; defesa, logs, auditoria, resposta e recuperação não podem desaparecer. | A23–A31: nove encontros de segurança ofensiva **e defensiva**, incluindo regras, testes, telemetria, correção, reteste e validação OT. |
| Nova edição do começo do curso | Reescrever páginas pode melhorar estudo, mas não muda o histórico da turma. | Preservar materiais ministrados; registrar versão publicada e relato docente; publicar nova edição com indicação de apoio/reorganização, sem alegar execução passada. |

## Distribuição recomendada para discussão

| Encontros | Competência central | Ganho observável e ponte |
|---|---|---|
| **A10** | Engenharia social e segurança física no acesso de manutenção | Verificação por canal conhecido, autorização, visitante acompanhado, registro e função legítima. Se o encontro exceder 100 min, aprofundar transferência física em OT, sem ocupar A11 inteira. |
| **A11** | Dados: tipos, classificação, ciclo de vida e DLP | Fluxo/classificação, regra de saída e exceção; a pergunta sobre alteração ou perda alimenta A12. |
| **A12** | Malware, worm, endpoint e perda de dados | Rastro de execução, persistência e conexão; hipótese de propagação condicionada; contenção e evidência. |
| **A13** | Propriedades e cifra simétrica autenticada | Estados do dado, algoritmo/AEAD, chave, nonce e alteração rejeitada; não confundir codificação com cifra. |
| **A14** | Hash, HMAC, senha e segredos | Referência confiável, autenticação de mensagem, sal/KDF, custo de verificação e limite de cada mecanismo. |
| **A15** | Assimétrica, acordo de chaves e assinatura | Par de chaves, Diffie–Hellman/ECDH como acordo, assinatura e verificação com chave correta/incorreta. |
| **A16** | Certificados, PKI e confiança | Cadeia, nome, validade, finalidade, revogação e vínculo entre identidade e chave; assinatura válida com chave não confiável. |
| **A17** | TLS, VPN, canal e tokens | Canal em trânsito, autenticação do endpoint, mTLS quando pertinente, token de sessão versus chave; canal seguro não autoriza ação. |
| **A18** | Ciclo de chaves e integração | Geração, armazenamento, distribuição, rotação, revogação, comprometimento e recuperação; artefato antigo ainda assinado e decisão de versão. |
| **A19** | Função normal e risco OT | Tanque/bomba ou outro processo virtual: variável, unidade, segurança de pessoas, efeito e responsável. |
| **A20** | NIST OT e ISA/IEC 62443 por finalidade | Risco e requisito, papéis, zonas/conduítes e limite de cada referência. |
| **A21** | Arquitetura OT, segmentação e manutenção remota | Fluxo necessário, regra, identidade, janela, negação e função preservada. |
| **A22** | Monitoramento, resposta e recuperação OT | Telemetria, estado seguro, retorno e revisão do risco, sem teste destrutivo. |
| **A23–A31** | Pentest, defesa e validação integrada | Regras de engajamento; reconhecimento; dois testes web; logs/detecção; Red/Blue/Purple; resposta; reteste; validação OT segura; relatório e decisão residual. O detalhamento por aula ainda precisa ser construído. |

Essa distribuição usa **3 encontros iniciais + 6 de criptografia + 4 de OT + 9 de ofensiva/defensiva = 22 encontros**. Nove encontros ainda permitem um ciclo de pentest e defesa introdutório, desde que o bloco final não vire apenas exploração: logs, resposta, correção e reteste são obrigatórios. Não fixa ainda minutos T/P ou atividades principais; isso requer somatório revisado e compatibilidade com a carga institucional de 30h/30h, considerando o histórico real A01–A09.

## Como a matriz de riscos pode atravessar a nova edição

O [registro mestre TI/OT proposto](proposta-estrutura-a10-controles.md) continua útil, mas seus IDs e fatos devem ser **reformulados depois de aprovar a sequência**. A10 reabriria uma linha de acesso humano/físico; A11–A12 adicionariam linhas de dado e endpoint; A13–A18 especificariam confiança e proteção; A19–A22 criariam avaliação OT com fatos próprios; A23–A31 testariam um subconjunto. A matriz é versionada por fase e não é exigida inteira em todas as aulas. Um risco novo é aberto quando mudar evento ou consequência; não se cria linha apenas para encaixar o nome de uma ferramenta.

**Referenciais por função, a confirmar na ficha de cada aula:** [NIST SP 800-30r1](https://csrc.nist.gov/pubs/sp/800/30/r1/final) para avaliação; [NIST CSF 2.0](https://www.nist.gov/cyberframework) para resultados de gestão; [NIST SP 800-57 parte 1r5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final) para gestão de chaves; [TLS 1.3, RFC 8446](https://www.rfc-editor.org/info/rfc8446/) para o canal; [NIST SP 800-82r3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) para características e segurança OT; [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards) para requisitos e processos de automação industrial; [OWASP WSTG](https://owasp.org/projects/web-security-testing-guide) para testes web autorizados. O uso de uma fonte não comprova conformidade nem validação de controle.

## Decisões de detalhamento para A11–A31

1. Detalhar os **seis** encontros reservados para criptografia e os **quatro** de OT, com início da trilha de pentest/defesa em A23 e nove encontros até A31.
2. Definir quais competências da antiga A10 e de A13–A31 serão preservadas, deslocadas, integradas ou retiradas, com checagem item a item da ementa.
3. Reavaliar, após A10, quais riscos industriais precisam entrar nas aulas seguintes; evitar criar toda a matriz com classes antes da evidência das fases futuras.
4. Recalcular T/P, atividades por macrocomponente e dependências A11–A31. Atualizar primeiro arquitetura e planejamento; depois criar as páginas e os experimentos seguintes.
