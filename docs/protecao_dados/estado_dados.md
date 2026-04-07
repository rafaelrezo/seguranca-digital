# Estados dos Dados

> **Objetivos de aprendizagem**
> - Diferenciar dados em repouso, em trânsito e em uso.
> - Relacionar cada estado aos controles mais adequados.
> - Aplicar o conceito de estado do dado em cenários cobrados em Security+.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. Por que o estado do dado importa

O mesmo dado exige controles diferentes conforme o contexto em que está sendo tratado.

Pense em um prontuário digital:

- no disco do servidor, ele está **em repouso**;
- na rede, ele está **em trânsito**;
- aberto na tela para consulta, ele está **em uso**.

O erro comum é aplicar um único controle e assumir que ele cobre todo o ciclo de vida.

---

## 2. Dados em repouso

São dados armazenados em disco, banco, backup, fita, pendrive ou nuvem.

Controles comuns:

- criptografia de disco e de banco;
- gestão de chaves;
- controle de acesso;
- retenção e descarte;
- backup testado.

Exemplo prático: notebook perdido com dados de alunos. Se o disco estiver cifrado e protegido por credencial forte, o risco cai muito.

---

## 3. Dados em trânsito

São dados trafegando entre sistemas, usuários, APIs ou dispositivos.

Controles comuns:

- TLS moderno;
- VPN ou túnel seguro quando aplicável;
- validação de certificados;
- integridade do canal;
- segmentação e inspeção quando necessário.

Exemplo prático: envio de notas e documentos entre campus e sistema central. O risco maior aqui é interceptação, alteração ou redirecionamento do tráfego.

---

## 4. Dados em uso

São dados sendo processados por aplicações, serviços ou usuários.

Controles comuns:

- menor privilégio;
- controle de sessão;
- isolamento de processo;
- DLP de endpoint;
- redução de cópia e exportação;
- proteção de memória e ambientes confiáveis quando aplicável.

Esse estado é crítico porque o dado já está descriptografado para alguém ou para algum processo.

---

## 5. Resumo rápido por estado

| Estado | Risco principal | Controle mais lembrado |
|---|---|---|
| **Em repouso** | perda física ou acesso indevido ao armazenamento | criptografia e retenção |
| **Em trânsito** | interceptação ou adulteração do tráfego | TLS, VPN e certificados |
| **Em uso** | abuso de acesso, cópia, captura ou exfiltração | menor privilégio, DLP e sessão controlada |

---

## 6. Mini-caso prático

Uma instituição usa disco cifrado nos notebooks, mas envia planilhas sensíveis por e-mail sem proteção adicional e permite exportação irrestrita em estações compartilhadas.

- Em repouso: o controle está razoável.
- Em trânsito: a proteção é insuficiente.
- Em uso: o risco de cópia e exfiltração continua alto.

Conclusão: proteger apenas um estado do dado não resolve o problema inteiro.

---

## 7. Perguntas de revisão rápida

1. Qual a diferença entre dado em repouso e dado em uso?
2. Por que TLS não resolve sozinho o risco de exfiltração?
3. Em qual estado o DLP de endpoint costuma ser mais relevante?

---

## 8. Fontes de referência

- NIST SP 800-111, Guide to Storage Encryption Technologies for End User Devices  
  https://csrc.nist.gov/pubs/sp/800/111/final
- NIST SP 800-52 Rev. 2, Guidelines for the Selection, Configuration, and Use of TLS Implementations  
  https://csrc.nist.gov/pubs/sp/800/52/r2/final
- Microsoft Learn, Confidential Computing  
  https://learn.microsoft.com/azure/confidential-computing/
