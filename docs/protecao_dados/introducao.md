# Proteção de Dados

> **Objetivos de aprendizagem**
> - Explicar por que a proteção de dados depende de classificação, propriedade e estado da informação.
> - Diferenciar controles para dados em repouso, em trânsito e em uso.
> - Relacionar proteção de dados com DLP, privacidade, governança e Security+.
>
> **Tempo estimado:** 25 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. Por que proteger dados

Proteção de dados não é apenas criptografar arquivos. O objetivo real é reduzir a chance de **exposição indevida, alteração não autorizada, indisponibilidade e uso fora de propósito**.

Em Security+, isso aparece sempre que o exame pergunta qual controle é mais adequado para:

- proteger dados sensíveis em um notebook perdido;
- impedir que informações saiam da organização por e-mail ou nuvem pessoal;
- limitar o acesso de pessoas e sistemas apenas ao necessário.

Uma boa regra prática é pensar em dados como um **cofre com etiqueta**: primeiro você precisa saber o que está guardando, depois quem pode abrir, em que situação e com quais ferramentas.

---

## 2. Os quatro pilares da proteção

| Pilar | Pergunta principal | Exemplos de controle |
|---|---|---|
| Classificação | O dado é público, interno, confidencial ou crítico? | Rótulos, políticas e tratamento diferenciado |
| Propriedade | Quem decide o uso e responde pelo dado? | Data owner, controller, processor, custodian |
| Estado | O dado está parado, trafegando ou sendo processado? | FDE, TLS, IPsec, enclaves, acesso mínimo |
| Exposição | Como impedir perda, vazamento ou abuso? | DLP, MFA, segmentação, logs, retenção |

Essa visão ajuda a sair de uma segurança baseada só em tecnologia e passar para uma segurança **orientada ao risco do dado**.

---

## 3. Ciclo de vida da informação

A proteção precisa acompanhar o dado do nascimento ao descarte.

1. **Criação/coleta**: o dado entra no ambiente.
2. **Classificação**: define o nível de proteção.
3. **Armazenamento**: aplica criptografia, controle de acesso e retenção.
4. **Uso/compartilhamento**: controla cópias, exportações e integrações.
5. **Arquivamento ou descarte**: aplica retenção legal e destruição segura.

> Analogia: é como a gestão de prontuários de um laboratório. O material não pode circular livremente porque muda de valor ao longo do tempo e pode continuar sensível mesmo após a operação terminar.

---

## 4. Onde a Security+ cobra este tema

Os pontos mais recorrentes na certificação são:

- proteção de dados pessoais e dados regulados;
- diferença entre `data at rest`, `data in transit` e `data in use`;
- criptografia, hashing, tokenização e mascaramento;
- DLP e prevenção de exfiltração;
- governança e responsabilidade sobre dados.

Quando o enunciado falar em impacto regulatório, privacidade ou retenção, normalmente a resposta correta envolve **processo e política**, não só ferramenta.

---

## 5. Mini-caso prático

Uma escola técnica usa um drive corporativo para compartilhar planilhas com dados de alunos, notas e contatos pessoais.

- sem classificação, todo mundo trata os arquivos como iguais;
- sem propriedade definida, ninguém responde por vazamentos;
- sem DLP, uma cópia pode ir para uma conta pessoal sem alerta;
- sem criptografia e retenção, a exposição aumenta durante todo o ciclo de vida.

A correção não depende de um único produto. O cenário melhora quando a organização combina **classificação, papéis claros, criptografia, DLP e revisão periódica de acesso**.

---

## 6. Perguntas de revisão rápida

1. Por que proteção de dados começa na classificação?
2. Qual a diferença prática entre proteger dado em repouso e em trânsito?
3. Por que DLP é um controle de processo, não só de ferramenta?

---

## 7. Fontes de referência

- NIST FIPS 199 - Standards for Security Categorization of Federal Information and Information Systems  
  https://csrc.nist.gov/pubs/fips/199/final
- NIST SP 800-60, Volume 1 - Guide for Mapping Types of Information and Information Systems to Security Categories  
  https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final
- NIST SP 800-122 - Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)  
  https://csrc.nist.gov/pubs/sp/800/122/final
- Lei Geral de Proteção de Dados - Lei 13.709/2018  
  https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- Curso em Video - Lei Geral de Proteção de Dados  
  https://www.youtube.com/watch?v=36Bq7Ejns_o
