# Propriedade de Dados

> **Objetivos de aprendizagem**
> - Diferenciar owner, controller, processor, steward, custodian e encarregado.
> - Entender por que propriedade de dados e um tema de responsabilidade e governanca.
> - Aplicar esse modelo para decidir quem aprova, executa e audita controles.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. O que significa propriedade de dados

Propriedade de dados não é "quem criou o arquivo". É o conjunto de responsabilidades que define **quem decide sobre o uso do dado, quem o protege e quem responde por incidentes**.

Esse tema é central para Security+ porque evita uma confusão comum: o time de TI opera os sistemas, mas nem sempre é o dono do dado do negócio.

> Analogia: o proprietário de uma loja decide o que pode ficar exposto na vitrine; o gerente organiza o estoque; o segurança controla a entrada. Com dados, a separação é parecida.

---

## 2. Papéis principais

| Papel | Responsabilidade principal | Observacao pratica |
|---|---|---|
| Data Owner | Define valor, classificação e regras de uso | normalmente está no negócio |
| Data Controller | Decide finalidades e meios do tratamento | termo comum em LGPD/GDPR |
| Data Processor | Executa o tratamento sob instrucao | fornecedor, SaaS, BPO ou integrador |
| Data Steward | Cuida de qualidade, consistência e catalogação | ajuda a manter a classificação correta |
| Data Custodian | Opera controles técnicos, backup e acesso | equipe de infraestrutura ou segurança |
| Encarregado/DPO | Faz a ponte com titulares e conformidade | responde por privacidade e governança |

Em provas e em ambientes reais, o ponto mais importante é este: **quem decide finalidade não é necessariamente quem administra o servidor**.

---

## 3. Responsabilidade e prestação de contas

Uma estrutura boa de propriedade de dados precisa deixar claro:

1. quem aprova o uso;
2. quem aplica o controle;
3. quem monitora o risco;
4. quem responde a auditorias e incidentes.

Sem isso, o problema clássico aparece: a TI fica com o trabalho operacional, mas o negócio não assume a decisão.

---

## 4. Relação com LGPD e GDPR

Na LGPD, os conceitos de **controlador** e **operador** ajudam a separar decisão e execução.

- controlador: decide a finalidade do tratamento;
- operador: trata dados em nome do controlador;
- encarregado: atua como canal de comunicação e apoio à conformidade.

Na prática, a propriedade de dados precisa sustentar essa divisão. Isso é importante para provar diligência, limitar acesso e reduzir impacto de terceirizações.

---

## 5. Mini-caso prático

Uma faculdade contrata um fornecedor de nuvem para armazenar dados de alunos e historico academico.

- o coordenador acadêmico deve definir quem pode ver cada classe de dado;
- o fornecedor e o processor, nao o owner;
- a equipe de TI protege a infraestrutura;
- o encarregado acompanha pedidos de titulares e incidentes.

Se todos acharem que o "outro lado" e o responsavel, a resposta a vazamentos e lenta e incompleta.

---

## 6. Perguntas de revisão rápida

1. Por que o dono do dado normalmente pertence ao negocio?
2. Qual a diferenca entre controller e processor?
3. Qual papel garante que a classificacao e o uso continuem consistentes?

---

## 7. Fontes de referência

- LGPD - Lei 13.709/2018  
  https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- GDPR - Data protection roles: controller and processor  
  https://eur-lex.europa.eu/eli/reg/2016/679/oj
- NIST Privacy Framework  
  https://www.nist.gov/privacy-framework
- NIST SP 800-122 - Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)  
  https://csrc.nist.gov/pubs/sp/800/122/final
- Curso em Video - Lei Geral de Protecao de Dados  
  https://www.youtube.com/watch?v=36Bq7Ejns_o
