# Classificação de Dados

> **Objetivos de aprendizagem**
> - Explicar por que a classificação orienta controles, retenção e compartilhamento.
> - Diferenciar classificações comuns como público, interno, confidencial e crítico.
> - Aplicar classificação para reduzir risco e responder melhor a incidentes e auditorias.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. O que a classificacao resolve

A classificação existe para evitar dois extremos: **proteger pouco** e **proteger tudo da mesma forma**.

Quando tudo é tratado como sensível, a operação fica lenta e cara. Quando nada é rotulado, o risco cresce porque cada usuário decide sozinho como compartilhar o dado.

Na prática, a classificação responde a três perguntas:

1. Qual o impacto se o dado vazar?
2. Quem pode acessar esse dado?
3. Que controles sao obrigatorios para ele?

> Analogia: um almoxarifado sem etiquetas faz o técnico gastar tempo procurando peças e aumenta a chance de entregar o item errado. Dados sem classificação geram o mesmo tipo de confusão, só que com custo de segurança.

---

## 2. Esquemas de classificação mais comuns

| Nível | Uso típico | Exemplo | Controle esperado |
|---|---|---|---|
| Público | Divulgação sem impacto relevante | material de marketing, site institucional | acesso amplo, integridade e disponibilidade |
| Interno | Uso dentro da organização | políticas operacionais, comunicados internos | acesso restrito por função |
| Confidencial | Exposição causa dano relevante | contratos, incidentes, listas internas | criptografia, DLP e logging |
| Restrito/Crítico | Exposição traz risco alto ou imediato | credenciais, chaves, configurações sensíveis | menor privilégio, MFA e monitoramento reforçado |

A nomenclatura varia entre empresas, mas a lógica é a mesma: **quanto maior o impacto, maior o nível de proteção**.

---

## 3. Como decidir a classificação

Uma classificacao util considera:

- valor do dado para o negócio;
- obrigações legais ou regulatórias;
- impacto de vazamento, alteração ou perda;
- tempo de retenção exigido;
- facilidade de recomposição do dado.

Se o dado ajuda a operar, mas não pode ser publicado, ele raramente deveria ser classificado como público.

---

## 4. Classificação e Security+

Em Security+, a melhor resposta costuma unir classificacao com outros controles:

- dado confidencial em notebook perdido -> criptografia e bloqueio de tela;
- planilha com dados pessoais compartilhada fora da empresa -> DLP e rotulagem;
- arquivo de configuração crítico -> restrição de acesso e auditoria;
- log regulado -> retenção e descarte seguro.

A regra prática é simples: **a classificação define o tratamento; o tratamento define o controle**.

---

## 5. Mini-caso prático

Uma empresa publica em um drive compartilhado:

- manual de produto;
- planilhas de clientes;
- extrato financeiro;
- chaves de API de integracao.

Sem classificação, tudo recebe o mesmo nível de acesso. Com classificação, o manual pode ser público, as planilhas ficam internas ou confidenciais, e as chaves de API entram em categoria crítica com acesso altamente restrito.

Isso reduz o risco sem travar o trabalho do time.

---

## 6. Perguntas de revisão rápida

1. Por que tratar todo dado como critico e um erro?
2. Quais criterios ajudam a definir a classificacao correta?
3. Qual a relacao entre classificacao e DLP?

---

## 7. Fontes de referência

- NIST FIPS 199 - Standards for Security Categorization of Federal Information and Information Systems  
  https://csrc.nist.gov/pubs/fips/199/final
- NIST SP 800-60, Volume 1 - Guide for Mapping Types of Information and Information Systems to Security Categories  
  https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final
- NIST SP 800-122 - Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)  
  https://csrc.nist.gov/pubs/sp/800/122/final
- LGPD - Lei 13.709/2018  
  https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- Curso em Video - Lei Geral de Protecao de Dados  
  https://www.youtube.com/watch?v=36Bq7Ejns_o
