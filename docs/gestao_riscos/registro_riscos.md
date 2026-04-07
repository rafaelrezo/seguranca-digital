# Registro de Riscos

> **Objetivos de aprendizagem**
> - Explicar a finalidade de um risk register.
> - Estruturar um registro com campos uteis para decisão.
> - Usar KRIs e owners para manter riscos rastreaveis.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/pJY3zVhtNJw)

---

## 1. O que é o registro de riscos

O registro de riscos e o documento vivo que centraliza os riscos identificados, seu nivel, seu dono e a resposta planejada.

Ele evita que o risco fique espalhado entre planilhas, e-mails e reunioes informais. Para a gestao, ele funciona como um painel unico de prioridades.

> Analogia: e a lista de manutencao preventiva de uma fabrica. Sem ela, cada falha vira surpresa; com ela, a equipe enxerga o que precisa de acao antes da parada.

---

## 2. Campos que realmente importam

| Campo | Para que serve | Exemplo |
|---|---|---|
| ID | Identificacao unica | R-014 |
| Descricao | O que pode acontecer | Vazamento de dados por credenciais expostas |
| Impacto | Gravidade do dano | Alto |
| Probabilidade | Chance de ocorrer | Media |
| Nivel | Prioridade final | Alto |
| Risk owner | Quem responde pelo risco | Gerente de infraestrutura |
| KRI | Indicador de alerta precoce | Aumento de tentativas falhas de login |
| Status | Situacao atual | Em mitigacao |
| Prazo | Quando revisar | 30 dias |

### O que um bom registro evita

- ambiguidade;
- duplicidade de trabalho;
- perda de contexto;
- tomada de decisao sem evidência.

---

## 3. Impacto, probabilidade e risco residual

O risco registrado nao termina na primeira classificacao.

- **Impacto** mostra o tamanho do dano.
- **Probabilidade** mostra a chance de ocorrer.
- **Risco residual** mostra o que sobra depois dos controles.

Se o risco caiu, mas nao sumiu, ele continua no registro ate a organizacao aceitar o remanescente.

---

## 4. KRIs: sinais de alerta

KRIs funcionam como sensores de risco.

Exemplos:

- aumento de incidentes de phishing;
- crescimento de contas sem MFA;
- aumento de patch atrasado;
- fornecedores fora do SLA;
- desvios recorrentes de backup.

> Se o risco e o fogo, o KRI e a fumaça. Ele nao prova incendio sozinho, mas sinaliza que algo saiu do normal.

---

## 5. Modelo simples de registro

| ID | Descricao | Impacto | Probabilidade | Nivel | KRI | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Credenciais admin sem MFA | Alto | Alta | Critico | Logins fora do padrao | SecOps | Em acao |
| R-002 | Backup sem teste de restauração | Alto | Media | Alto | Falhas em restore | Infra | Em analise |
| R-003 | Fornecedor com acesso excessivo | Alto | Media | Alto | Contas sem revisao | GRC | Em mitigacao |

---

## 6. Mini-caso prático

Uma empresa faz migração para cloud e registra tres riscos principais: permissao excessiva, backup nao testado e dependencia de um MSP.

O registro permite:

- atribuir owner por risco;
- definir prazo de revisão;
- monitorar KRI;
- registrar risco residual depois das correcoes.

---

## 7. Perguntas de revisão rápida

1. O que o registro de riscos resolve que uma lista solta de problemas nao resolve?
2. Qual a diferenca entre impact, probability e risk level?
3. Por que KRIs precisam ser acompanhados ao longo do tempo?

---

## 8. Fontes de referência

- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
- NIST SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
- NIST CSF 2.0  
  https://www.nist.gov/cyberframework
