# A18 (provisória) — Ciclo de chaves e integração

**Estado:** produção prospectiva. A existência de páginas A14–A17 não confirma realização, checkpoints, versão usada ou entrega. A13 ainda depende de confirmação documental na arquitetura. **Carga:** 100 minutos efetivos, **40 de teoria e 60 de prática guiada**. **Atividade:** C5 e decisão final do registro único A14–A18, uma entrega no Classroom, sem tarefa adicional por encontro.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa | Inventário e estados de chaves; geração, guarda, acesso, períodos de uso, troca, suspeita de exposição, recuperação, descarte e evidência de retorno; integração repouso, trânsito, backup e endpoint. |
| Ganho em relação à A17 | A17 verifica vínculo da chave pública e canal TLS. A18 decide como manter, trocar e recuperar as chaves das cópias e do serviço ao longo do tempo. Não pressupor que C4 foi executado; retomar a distinção canal/autorização com uma pergunta. |
| Três objetivos | Atribuir estados/responsáveis/rastros; testar regra permitida e contraprovas no pacote; justificar retorno funcional com limites. |
| Pergunta central | Depois de trocar ou perder uma chave, quais cópias continuam legíveis, por quem, e com qual evidência? |
| Pré-requisitos | Funções de cifra, assinatura e TLS em nível funcional; inventário da página é completo e permite recuperação sem histórico individual. |
| Infraestrutura | Página MkDocs, projeção, navegador com JavaScript opcional, papel ou editor. Simulador local de regras, sem instalações, rede externa, segredos ou serviço de produção. Quadro alternativo integral na página. |
| Evidências e critério | Previsão/resultado/motivo P1–P3 e N1–N4; mini runbook E-1–E-3; decisão final C1–C5 com fonte, caso positivo, negativo, limite e retorno. “Permitido” é só saída simulada. |
| Fontes | [NIST SP 800-57 Part 1 Rev. 5](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final), [NIST SP 800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final), [RFC 8446](https://www.rfc-editor.org/info/rfc8446/). |

**Cadeia didática:** herança conceitual de A14–A17 (cópia cifrada, verificação, chave pública, canal) → preparar inventário K-A/C-01 e evento E-1 → selecionar ator/ação/objeto/chave → rastro P1–P3/N1–N4 do simulador ou quadro → ler dependência da chave e limite da regra → conceituar período de uso, autorização, backup e recuperação → decidir resposta a E-2/E-3 → validar novo uso, leitura legada, negativa de operador e teste de retorno → C5 + decisão final da atividade única → ponte ao bloco OT: requisito de disponibilidade e processo físico que pode limitar janela de troca/recuperação. Não atribuir aos estudantes execução de cifra, TLS, restauração ou revogação reais.

## Condução e tempo verificável

| Minutos | T/P | Ação, rastro e ponto de espera |
|---|---:|---|
| 0–10 | 6/4 | Abrir com cópia íntegra mas chave perdida. Duplas preveem se uma nova chave com o mesmo nome abre a cópia; colher justificativas. |
| 10–22 | 10/2 | Ler inventário e responsabilidades. Comparar propósito/estado de K-A e K-B. Parar quando todos tiverem `C-01 → K-A` e `C-02 → K-B`. |
| 22–36 | 5/9 | Demonstrar primeiro P1/N1: selecionar os quatro campos, prever, clicar, copiar ID/motivo. Estudantes operam quando possível; alternativa com quadro. Esperar registro de ambos antes de avançar. |
| 36–51 | 4/11 | Executar P2/N2 e explicar por que troca não reescreve cópia. Cada dupla corrige uma previsão. Parar quando chave correta e autorização forem campos distintos. |
| 51–66 | 3/12 | Executar N3/N4/P3. Exigir distinção entre “regra permitiu ensaio” e “restauração funcionou”. Pausa para rastro de aprovação e teste funcional faltante. |
| 66–81 | 6/9 | Entregar E-2/E-3: duplas preenchem ações, responsáveis, contraprovas e limite. Discutir exposição versus perda sem sugerir que suspensão apaga dados já expostos. |
| 81–100 | 6/13 | Duplas concluem o mini runbook e as quatro linhas da decisão final (repouso, trânsito, backup, endpoint/identidade); revisão cruzada identifica uma cópia sem chave, acesso indevido ou retorno sem teste. Três perguntas rápidas e ponte ao bloco OT pelo funcionamento do processo e janela segura de recuperação. |
| **Total** | **40/60** | **100 minutos.** |

Os 60 minutos práticos são previsão, operação guiada, leitura de rastro, construção e revisão de runbook. O professor mantém a turma no mesmo estado entre testes; reprodução individual não é requisito. Se o painel não abrir, o quadro de saídas permite a mesma comparação e a fonte será “fornecida pelo pacote”.

## Respostas e critérios de mediação

- **Exemplo trabalhado:** depois de E-1, P1 permite nova cifra sob K-B e N1 nega K-A. P2 permite ao serviço abrir C-01 sob K-A antes de E-2; N2 nega K-B por incompatibilidade. Não dizer que C-01 foi recifrada por ativar K-B.
- **P1/P2:** `permitido` pela regra didática, não prova criptográfica nem autorização num serviço real. **N1/N2:** `negado` por período de uso e chave errada, respectivamente. **N3:** `negado` porque chave correta não confere permissão. **N4:** `negado` sem dupla aprovação. **P3:** `permitido condicional`; requer verificação de integridade da cópia, acesso temporário controlado e abertura de objeto de teste para comprovar retorno.
- **E-2:** suspender K-A, preservar registro, investigar exposição e dependências; planejar migração de C-01 e backup antigo sob chave nova a partir de fonte confiável. Não prometer confidencialidade retroativa. Revogação/retirada de uso são decisões distintas de destruição do material; manter acesso excepcional de leitura somente se autorizado e justificado para migração.
- **E-3:** tratar como perda de disponibilidade até haver evidência de exposição. Autorizar recuperação por papéis separados, verificar cópia selada, restaurar de modo controlado, testar abertura e registrar auditoria/limpeza. Chave nova com o rótulo K-B não tem os mesmos bytes e não abre C-02.
- **Extensão:** antes de destruir K-A, inventariar C-01 e backup offline, provar abertura e migração para chave substituta, confirmar backup novo e teste de recuperação. Definir aprovadores e impacto caso não haja fonte íntegra. Apagar K-A local não apaga cópia que adversário possivelmente já possui.
- **Decisão final aceitável:** repouso usa AEAD com chave controlada e contraprova de alteração; trânsito usa TLS com validação do certificado, mas autorização ao objeto permanece própria; backup exige cópia e chave recuperáveis com acesso controlado e ensaio de retorno; endpoint autorizado ainda vê texto, e identidade/permissão precisa ser verificada. Exigir fonte de cada rastro e distinguir resultados observados, fornecidos e propostas.
- **Erros comuns:** “revogar chave conserta vazamento passado”, “backup cifrado basta sem chave”, “mesmo nome de chave recupera bytes”, “TLS autoriza acesso a C-01”, “P3 prova recuperação real”. Pedir a linha do inventário e o teste que contradizem cada frase.

**Ponte concreta:** levar ao bloco OT os campos `objeto dependente → função que deve continuar → janela de mudança → teste de retorno → responsável`. No processo físico, a disponibilidade e a segurança de pessoas podem mudar a ordem e o momento de uma troca ou recuperação. A ponte é conceitual; não criar uma empresa ou incidente herdado.
