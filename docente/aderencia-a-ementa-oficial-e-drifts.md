# Aderência à ementa oficial e análise de *drift*

> Documento interno de governança curricular. Registra a comparação entre a ementa oficial informada e a proposta de distribuição dos 30 encontros.

**Data da análise:** 13 de agosto de 2026  
**Ementa fornecida pelo docente:**

> Visão Geral de Segurança da Informação no Contexto Produtivo; Criptografia; Normas e padrões de segurança industrial; Arquiteturas de Comunicação Seguras; Defesa de perímetro; Segurança de sistemas de controle e automação Industrial; Malwares; Técnicas de Autenticação, Autorização e Contabilidade para controle de acesso; Sistemas de logs e auditoria; Noções de técnicas de penetração; Políticas de Segurança e Gestão de riscos; Engenharia social e conscientização de pessoal.

## 1. Critério de aderência

Um item não será considerado completo porque foi mencionado em slides ou em uma página de consulta. Para aderência curricular, ele precisa aparecer em uma situação, produzir uma decisão ou intervenção e deixar evidência verificável. A escala é:

- **demonstrável:** aplicação, validação e produto, com retomada em outro contexto;
- **em desenvolvimento:** aplicação orientada e produto, ainda sem transferência suficiente;
- **apenas coberto:** explicação ou contato sem desempenho verificável;
- **ausente:** não há experiência correspondente.

## 2. Cruzamento da proposta anterior

| Item da ementa | Cobertura anterior | Estado anterior | *Drift* identificado | Correção no replanejamento |
|---|---|---|---|---|
| Visão geral no contexto produtivo | A01–A03, retomadas OT | demonstrável | sem ausência; continuidade se perdeu em A03 | A04 reancora a evidência e a lente produtiva retorna em A15, A28–A30 |
| Criptografia | A17–A20 | em desenvolvimento | ciclo de dados ocupava parte do bloco, mas faltava síntese entre propriedade e comunicação | A16–A19 formam núcleo criptográfico; A20 integra arquitetura de comunicação |
| Normas e padrões de segurança industrial | referências em A29 | apenas coberto | não havia encontro que transformasse requisitos em decisão | A28 passa a comparar e aplicar ISA/IEC 62443, NIST SP 800-82 e orientação CISA por função |
| Arquiteturas de Comunicação Seguras | A04, A17–A18, A24–A25, A29 | em desenvolvimento e fragmentado | faltava síntese arquitetural: identidade, canal, segmentação, confiança, monitoramento e disponibilidade | A20 produz arquitetura segura justificável; A24–A25 e A29 transferem para nuvem e OT |
| Defesa de perímetro | A14, A24–A25, A29 | apenas coberto | perímetro aparecia como segurança física ou grupo de segurança, sem defesa em profundidade | A15 torna-se ciclo próprio de perímetro, segmentação, filtragem e validação; retomadas em nuvem/OT |
| Segurança de controle e automação industrial | A01, A15, A22, A28–A30 | em desenvolvimento | boa espiral proposta, mas normas e protocolo/processo ainda concentrados no final | contatos OT preservados; A28 fundamenta requisitos e A29 pratica arquitetura/telemetria |
| Malwares | A13 | em desenvolvimento | uma triagem comportamental é adequada, mas famílias e prevenção ficavam só como consulta | A13 inclui cadeia inicial, comportamento, persistência, prevenção e resposta sem virar catálogo |
| Autenticação, autorização e contabilidade | A05–A07, A24, A28 | demonstrável para autenticação/autorização; parcial para contabilidade | accounting estava dependente de A22 | A05–A07 exigem evento auditável; A14 consolida logs/auditoria e A24/A28 transferem AAA |
| Logs e auditoria | A01, A13, A21–A23 | em desenvolvimento | logging estava orientado sobretudo a detecção, não a auditabilidade, retenção e revisão | A14 passa a tratar trilha de auditoria; A21–A23 usam a mesma evidência operacionalmente |
| Noções de técnicas de penetração | diluído em A02–A10 | apenas coberto | faltavam regras de engajamento, reconhecimento/coleta controlada, execução metodológica e relatório | A09–A10 tornam explícito o ciclo mínimo de pentest autorizado e remediação |
| Políticas de segurança e gestão de riscos | A01–A03, A26–A28 | demonstrável | governança estava comprimida no fim, mas havia produtos acumulados | A26 prioriza riscos; A27 converte decisão em política, padrão, procedimento, exceção e métrica |
| Engenharia social e conscientização | A11–A12 | demonstrável | sem lacuna central | sequência preservada, incluindo ética, minimização e avaliação de aprendizagem |

## 3. Drifts por prioridade

### Drift obrigatório — conteúdo da ementa insuficientemente demonstrado

1. **Noções de pentest:** exploração web não substitui compreender autorização, escopo, regras de engajamento, coleta, execução, evidência, relatório e reteste.
2. **Normas industriais:** citar ISA/IEC 62443 ou NIST SP 800-82 não demonstra saber usar um requisito para avaliar risco, arquitetura ou operação.
3. **Defesa de perímetro:** firewall isolado não equivale a arquitetura em camadas; o estudante precisa relacionar superfície, zona, regra, fluxo legítimo, telemetria e teste permitido/negado.
4. **Arquiteturas de comunicação seguras:** os mecanismos estavam distribuídos, mas faltava uma decisão integradora sobre canal, identidade, confiança, segmentação, monitoramento, disponibilidade e risco residual.
5. **Accounting e auditoria:** produzir logs para detecção não basta; é necessário discutir atribuição, integridade, sincronização temporal, retenção, acesso e revisão.

### Drift de ênfase — conteúdo válido ocupando espaço antes do núcleo

- STRIDE completo e comparação de metodologias;
- dependências, pipeline e cadeia de software como encontro próprio;
- privacidade/DLP com profundidade de encontro próprio;
- segurança física autônoma;
- dois encontros de nuvem sem ligação explícita com arquitetura/perímetro;
- terceiros e cadeia de suprimentos desconectados das normas e do acesso remoto OT.

Esses temas não são removidos. Eles passam a ser **extrapolações integradas** a uma decisão obrigatória da ementa ou materiais de consulta/extensão.

## 4. Extrapolações profissionais preservadas

| Extrapolação | Por que melhora a formação | Onde permanece sem competir com a ementa |
|---|---|---|
| OWASP Juice Shop e desenvolvimento seguro | torna autenticação, pentest e validação observáveis | A02, A04–A10 |
| Gestão contínua de vulnerabilidades e hardening | conecta descoberta a responsabilidade e acompanhamento | A10, A21, A27 |
| Privacidade e ciclo de vida de dados | impede que criptografia seja tratada como solução universal | A16 e decisões de A19 |
| Nuvem/AWS Academy | transfere AAA, perímetro, logs e responsabilidade compartilhada | A24–A25 |
| Resposta e recuperação | completa o ciclo defesa → validação e é crítica em OT | A20, A23, A29–A30 |
| Segurança física e fornecedores | explicita caminhos sociotécnicos e acesso remoto industrial | integrada a A11–A15 e A28 |
| STRIDE seletivo | amplia cobertura depois que o fluxo já é compreendido | checkpoint de A10 ou extensão, nunca matriz burocrática |
| Comunicação técnica/executiva | aproxima produtos das funções profissionais | marcos A10, A15, A26 e A30 |

## 5. Regra de governança da ementa

Cada ficha-base, a partir da A04, deve indicar:

1. item ou itens da ementa atendidos;
2. desempenho observável que comprova o atendimento;
3. evidência/produto e critério de validação;
4. retomada posterior que leva de contato inicial a competência demonstrável;
5. conteúdo extrapolado e a razão profissional para incluí-lo.

Nenhuma extrapolação pode remover a única experiência prática de um item obrigatório. A cobertura integral será auditada nos marcos A10, A20 e A30.

