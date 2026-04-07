# Monitoramento e Relatório de Riscos

> **Objetivos de aprendizagem**
> - Explicar o papel do monitoramento continuo.
> - Diferenciar risco residual, KRI e risco de controle.
> - Estruturar um relatorio de risco claro para decisores.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/du4ocukIUhQ)

---

## 1. Monitorar não e revisitar por formalidade

Monitorar e acompanhar se o risco mudou, se os controles continuam validos e se novos sinais de alerta surgiram.

Sem monitoramento, a organizacao fica presa a uma fotografia antiga do ambiente.

> Analogia: e como dirigir olhando apenas o retrovisor. A gestao de riscos precisa olhar o painel, o trafego e o comportamento do motor ao mesmo tempo.

---

## 2. O que monitorar

- riscos existentes;
- riscos residuais;
- eficacia dos controles;
- mudancas de negocio;
- incidentes e quase-incidentes;
- KRIs.

### Risco residual e risco de controle

- **Risco residual**: risco que continua depois dos controles.
- **Risco de controle**: risco de um controle falhar, degradar ou ficar obsoleto.

---

## 3. Indicadores úteis

| Indicador | O que mostra | Exemplo |
|---|---|---|
| KRI | Tendencia de aumento de risco | Falhas de login fora do horario |
| KPI | Desempenho do processo | Tempo medio de atendimento |
| Alerta | Desvio operacional | Backup sem validacao |
| Evidencia | Comprovacao de controle | Log de auditoria, relatorio de restore |

O ponto central e simples: se o indicador sobe, a resposta nao pode esperar o fechamento do ano.

---

## 4. Relatório de risco

O relatorio traduz o estado da gestao para executivos, auditores e equipes tecnicas.

Um relatorio util tem:

- riscos prioritarios;
- tendencia de cada risco;
- status dos planos de acao;
- riscos aceitos e justificativa;
- riscos residuais relevantes;
- recomendacoes objetivas.

### Formato prático

| ID | Risco | Nivel | Tendencia | Ação | Dono | Prazo |
|---|---|---|---|---|---|---|
| R-01 | Credenciais expostas | Critico | Subindo | MFA e reset | SecOps | 7 dias |
| R-02 | Backup nao testado | Alto | Estavel | Simulacao de restore | Infra | 30 dias |
| R-03 | Fornecedor sem revisao | Alto | Subindo | Reevaluacao contratual | GRC | 15 dias |

---

## 5. Como fazer o ciclo funcionar

1. Medir.
2. Comparar com o baseline.
3. Detectar desvio.
4. Acionar owner.
5. Atualizar o registro.
6. Reportar para decisores.

Esse ciclo combina bem com NIST RMF e com monitoramento continuo de controles.

---

## 6. Mini-caso prático

Uma empresa troca o provedor de backup e percebe que as restauracoes falharam em dois testes consecutivos.

- KRI dispara.
- Risco residual aumenta.
- O owner recebe prazo para correcao.
- O relatorio passa a destacar o risco como alto, mesmo sem incidente real ainda.

---

## 7. Perguntas de revisão rápida

1. Qual a diferenca entre risco residual e risco de controle?
2. Por que o relatorio precisa falar a linguagem do decisor?
3. O que um KRI faz melhor do que uma revisao anual isolada?

---

## 8. Fontes de referência

- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
- NIST SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
- NIST SP 800-137, Information Security Continuous Monitoring (ISCM)  
  https://csrc.nist.gov/pubs/sp/800/137/final
- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
