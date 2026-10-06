# Plano docente — cifra simétrica autenticada (A14 provisória)

**Estado:** produção prospectiva em 6 out. 2026. A realização da A13, a versão usada e a entrega A11–A13 ainda aguardam confirmação. Não atribuir à turma os checkpoints da A13. A numeração após A13 depende de conciliação com o calendário. Página: `docs/aulas/A14-cifra-simetrica-autenticada.md`.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa | Confidencialidade e integridade de cópia; cifra simétrica autenticada; AES-GCM, chave, nonce, AAD, tag, abertura e falha; limites do endpoint e gestão operacional. |
| Objetivos | Distinguir propriedades e limites; identificar entradas/saídas; interpretar teste válido e contraprovas, propondo armazenamento. |
| Carga | 100 minutos planejados: 55 T / 45 P guiados. Prática inclui previsão, operação opcional pela dupla, leitura, diagnóstico, decisão e revisão. Sem assumir que esse valor foi ministrado. |
| Ganho novo | Os conceitos de arquivo, processo e acesso associados à A13 servem de base, sem presumir sua realização; este encontro verifica proteção e alteração de uma cópia fora do dispositivo. |
| Pré-requisito | Confidencialidade/integridade de A11–A12 e limite de processo/arquivo de A13 como conceitos; nenhum produto individual é exigido. |
| Ferramenta | Página HTTPS com Web Crypto; exemplos fixos na página como alternativa integral. Sem instalação, rede externa de teste, dado real ou chave persistida. |
| Produto | C1 do registro único de criptografia e confiança, ainda sem entrega no Classroom. |
| Critério | Explicar função de K1/N1/AAD/tag, rejeitar alteração sem tratar erro genérico como diagnóstico causal, localizar limite do endpoint. |
| Fontes | NIST SP 800-38D e W3C Web Cryptography API, vinculadas na página. |

## Cadeia e ponte

Herança conceitual de arquivo e processo planejada na A13, sem afirmar sua execução → pergunta sobre leitura e alteração da cópia → previsão de campos e resultados → operação em memória AES-GCM, conduzida e opcionalmente reproduzida pela dupla → V1/F1/F2/F3/V2 → leitura de aceitação/rejeição e de campos visíveis → conceitos de AEAD, nonce e chave → decisão de armazenamento e posicionamento do rótulo → validação com abertura válida e alteração de um bit → C1 do registro único → pergunta para o encontro seguinte sobre hash, HMAC e senha sem sigilo do conteúdo.

O caso é um texto artificial curto, independente de empresa ou incidente. Não há exigência de continuidade de matriz industrial. A demonstração não representa implantação, recuperação de chave, assinatura digital, identidade de autor ou proteção do endpoint que já acessa a chave.

## Condução planejada

| Minutos | T/P | Ação e participação | Parada/critério |
|---|---:|---|---|
| 0–12 | 10/2 | Apresentar a cópia fictícia; cada dupla escolhe confidencialidade, detecção de alteração e limite do processo. Se A13 não ocorreu, explicar arquivo versus processo em duas frases. | Não afirmar que A13 foi ministrada ou que houve entrega. |
| 12–27 | 12/3 | Explicar cifra simétrica e AEAD pelo fluxo; duplas posicionam rótulo legível e texto protegido. | AAD autenticado não é oculto. |
| 27–42 | 12/3 | Explicar K1, N1, tag e unicidade por chave; duplas preveem V1/F1. | Não reutilizar nonce; distinguir sorteio didático e desenho de produção. |
| 42–70 | 4/24 | Conduzir botões 1–5 e novo 1→2 para V2. Abrir pausas após V1, F1 e F2/F3. Cada dupla pode clicar no próprio navegador; quem só acompanha projeção ou quadro registra previsão, fonte, resultado, interpretação e limite. Encerrar com diagnóstico em duplas trocando funções. | Antes de avançar, toda dupla localiza a entrada alterada e o resultado. Nenhum erro genérico identifica sozinho a causa; nenhuma falha entrega texto. |
| 70–88 | 12/6 | Trabalhar armazenamento da cópia e extensão com rótulo `Pessoa A`. Duplas preenchem C1 e confrontam requisito de visibilidade com outra dupla. | Distinguir resultado observado, referência e proposta; chave separada; nonce junto da cópia. |
| 88–100 | 5/7 | Comparar duas propostas, corrigir uma inferência excessiva, fechar C1 e enunciar pergunta hash/HMAC/senha. | Checkpoint presencial; sem nova tarefa no Classroom. |
| **Total** | **55/45** | | |

## Respostas, contingência e avaliação

- V1 aceita o conjunto original; F1 muda texto cifrado, F2 muda AAD e F3 muda a chave. Todos os F devem falhar sem texto. V2 mantém a frase e K1, mas tem nonce novo. Saídas exatas variam e não são necessárias à resposta.
- Um AAD com nome pessoal expõe o nome. Para ocultá-lo, incluí-lo no texto cifrado; metadados ainda necessários à interpretação podem permanecer como AAD se sua visibilidade for aceitável.
- Chave não exportável no painel simplifica o ensaio, mas ao recarregar a página o texto cifrado antigo não pode ser aberto. Sistema real precisa prever guarda e recuperação, além de autoridade, rotação e acesso.
- GCM verifica autenticidade sob a chave compartilhada; não identifica qual detentor da chave criou os dados. Uma abertura válida não atesta que o endpoint está íntegro. Uma falha pode vir de qualquer entrada incorreta ou alterada.
- Se JavaScript ou contexto seguro falhar, usar V1–V2/F1–F3 da página, identificados como referência. Manter previsão, diagnóstico, decisão e revisão entre duplas; o quadro informa relações esperadas e não simula uma coleta observada. Não pedir instalação, conta nem envio de segredo a site externo. Se o painel reportar resultado inesperado, suspender a inferência e registrar navegador/ação/saída sem dados sensíveis.
- Na correção de C1, exigir objeto, propriedade, campos, resultado válido, contraprova, limite e decisão. Não confundir comparação de bytes com prova de unicidade operacional de nonce.

## Estado editorial

O rascunho antigo `docs/aulas/A14-quem-fez-o-que.md` pertence a uma sequência superada e permanece preservado fora da navegação. Este plano não fixa número definitivo para os encontros posteriores nem declara publicação ou realização da aula. Confirmar o calendário e o estado da A13 antes de distribuir o endereço no Classroom.
