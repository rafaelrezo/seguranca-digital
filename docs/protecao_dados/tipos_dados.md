# Tipos de Dados

> **Objetivos de aprendizagem**
> - Diferenciar tipos de dados que exigem proteção específica.
> - Relacionar cada tipo a obrigação legal, impacto de negócio e controle recomendado.
> - Aplicar essa classificação em cenários típicos de Security+.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. Por que "tipo de dado" importa

Nem todo dado sensível é igual. O controle certo depende do que está sendo protegido e do impacto da exposição.

Em termos práticos, alguns grupos aparecem com frequência:

- dados pessoais;
- dados de saúde;
- dados financeiros e de pagamento;
- propriedade intelectual;
- segredos comerciais;
- dados legais e contratuais;
- dados operacionais gerados por máquinas.

---

## 2. Tipos mais cobrados

| Tipo de dado | Exemplo | Risco principal | Controle esperado |
|---|---|---|---|
| **Pessoal (PII)** | nome, CPF, endereço, matrícula | privacidade e fraude | minimização, acesso restrito, DLP |
| **Saúde (PHI)** | exames, laudos ocupacionais, prontuário | exposição sensível | criptografia e controle rigoroso |
| **Financeiro** | balanço, conta bancária, folha | fraude e impacto regulatório | segregação, logs e retenção |
| **Pagamento** | cartão e dados correlatos | fraude e não conformidade | PCI DSS e proteção reforçada |
| **Propriedade intelectual** | projeto, código, patente | perda de vantagem competitiva | menor privilégio e controle de cópia |
| **Segredo comercial** | receita, algoritmo, calibração | espionagem e vazamento | classificação alta e monitoramento |
| **Dados operacionais** | logs de sensores, firmware, arquivos de configuração | sabotagem e indisponibilidade | integridade, versionamento e acesso controlado |

---

## 3. Dados legíveis e não legíveis por humanos

Do ponto de vista da segurança, tanto um PDF quanto um arquivo de firmware podem ser críticos.

- **Legíveis por humanos**: contratos, planilhas, e-mails, relatórios.
- **Não legíveis por humanos**: binários, telemetria, dumps, configurações e logs brutos.

O erro comum é proteger muito o que "parece documento" e ignorar o que a máquina consome.

---

## 4. Relação com legislação e prova

Algumas referências frequentes:

- `LGPD` e `GDPR` para dados pessoais;
- `HIPAA` para dados de saúde nos EUA;
- `PCI DSS` para dados de pagamento;
- requisitos contratuais e de auditoria para dados legais e financeiros.

Na Security+, a melhor resposta costuma combinar **tipo de dado + obrigação + controle apropriado**.

---

## 5. Mini-caso prático

Uma empresa guarda no mesmo compartilhamento:

- folha de pagamento;
- contrato com fornecedor;
- código-fonte de integração;
- firmware de equipamento;
- laudo médico ocupacional.

Todos exigem proteção, mas por motivos diferentes. Se a organização tratar tudo como "arquivo comum", perde contexto regulatório e de negócio.

---

## 6. Perguntas de revisão rápida

1. Por que dados pessoais e segredos comerciais não devem ser tratados do mesmo jeito?
2. O que muda quando o dado é não legível por humanos?
3. Qual tipo de dado remete imediatamente a PCI DSS?

---

## 7. Fontes de referência

- LGPD - Lei 13.709/2018  
  https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- GDPR  
  https://eur-lex.europa.eu/eli/reg/2016/679/oj
- HHS, HIPAA for Professionals  
  https://www.hhs.gov/hipaa/for-professionals/index.html
- PCI Security Standards Council  
  https://www.pcisecuritystandards.org/
