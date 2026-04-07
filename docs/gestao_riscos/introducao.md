# Gestão de Riscos em Segurança Digital

> **Objetivos de aprendizagem**
> - Explicar o que diferencia ameaça, vulnerabilidade e risco.
> - Descrever o ciclo de gestão de riscos e seus artefatos principais.
> - Relacionar gestão de riscos com continuidade, governança e Security+.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/nnZVWbmVmG0)

---

## 1. O que é gestão de riscos

Gestao de riscos e o processo de identificar, analisar, tratar, monitorar e comunicar riscos que possam afetar ativos, processos e objetivos de negocio.

Na pratica, ela responde a quatro perguntas:

- O que pode dar errado?
- Qual e o impacto?
- O que vamos fazer a respeito?
- Como vamos provar que o controle funciona?

> Analogia: e como operar um painel industrial. Nao basta ver o alarme aceso; e preciso entender a causa, agir e acompanhar se a correcao realmente estabilizou o sistema.

### Conceitos que o Security+ cobra

| Conceito | Pergunta curta | Exemplo |
|---|---|---|
| Ameaça | Quem ou o que pode causar dano? | Phishing, ransomware, fornecedor comprometido |
| Vulnerabilidade | Onde existe fragilidade? | Senha fraca, sistema desatualizado, acesso excessivo |
| Risco | Qual a chance e o impacto do evento? | Vazamento de dados por credencial comprometida |
| Controle | O que reduz ou limita o risco? | MFA, backup, segmentacao, DLP |

---

## 2. Ciclo de gestao de riscos

O ciclo mais usado em cursos e em ambientes corporativos segue cinco passos:

1. Identificar riscos.
2. Analisar probabilidade e impacto.
3. Tratar o risco.
4. Monitorar a eficacia dos controles.
5. Comunicar o resultado a gestores e partes interessadas.

Esse fluxo aparece em guias do NIST e em praticas de GRC. Para a prova, o ponto principal e entender que risco nao e um evento isolado, mas um processo continuo.

### Onde entra a continuidade

- **BIA** define o que e critico para o negocio.
- **RTO** define em quanto tempo o servico precisa voltar.
- **RPO** define quanto dado pode ser perdido.
- **Risco residual** e o que sobra depois dos controles.

---

## 3. Governanca, risco e conformidade

Gestao de riscos nao vive sozinha. Ela se conecta com:

- **Governanca**: quem decide, prioriza e aprova.
- **Conformidade**: quais leis, normas e politicas precisam ser seguidas.
- **Controles**: barreiras tecnicas e administrativas que reduzem exposicao.

Quando a organizacao nao tem governanca clara, o risco vira opiniao. Quando a governanca e madura, a decisao passa a ser rastreavel e defensavel.

---

## 4. Como isso aparece na Security+

Para a certificacao, pense em tres usos práticos:

- escolher controles proporcionais ao risco;
- justificar backup, MFA, segmentacao e monitoramento;
- reconhecer que alguns riscos sao aceitos, outros mitigados e outros evitados.

> Exemplo: se uma plataforma de exames precisa ficar disponivel 24x7, a organizacao nao trata backup como luxo; trata como requisito de continuidade.

---

## 5. Mini-caso prático

Uma faculdade migra parte dos sistemas para a nuvem. O portal academico passa a expor dados de alunos, e um fornecedor terceirizado administra a infraestrutura.

- Ameaça: acesso indevido por credencial vazada.
- Vulnerabilidade: permissao excessiva no ambiente.
- Impacto: indisponibilidade e vazamento de dados pessoais.
- Resposta: MFA, revisao de acessos, backup e monitoramento.

---

## 6. Perguntas de revisão rápida

1. Qual a diferenca entre ameaca, vulnerabilidade e risco?
2. Por que a gestao de riscos precisa ser continua e nao pontual?
3. Como BIA, RTO e RPO se conectam a uma decisao de seguranca?

---

## 7. Fontes de referência

- NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments  
  https://csrc.nist.gov/pubs/sp/800/30/r1/final
- NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations  
  https://csrc.nist.gov/pubs/sp/800/37/r2/final
- NIST Cybersecurity Framework 2.0  
  https://www.nist.gov/cyberframework
- NIST SP 800-39, Managing Information Security Risk  
  https://csrc.nist.gov/pubs/sp/800/39/final
