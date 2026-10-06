# Plano docente — hash, HMAC e senhas (A15 provisória)

**Estado:** produção prospectiva em 6 out. 2026; a realização da A13 não foi confirmada documentalmente. A15 só deve ser numerada e distribuída após conciliar calendário e sequência. Página: `docs/aulas/A15-hash-hmac-senhas.md`. Atividade única: `docs/atividades/A14-A18-criptografia-confianca.md`, seção C2. Nenhuma execução ou entrega estudantil é presumida.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa | Digest SHA-256 e procedência da referência; HMAC com segredo compartilhado; verificador de senha com sal, custo e esquema adequado; limites de inferência. |
| Objetivos | Calcular e interpretar digest; verificar HMAC nos casos original, mensagem alterada e chave errada; escolher solução distinta para armazenamento de senhas. |
| Carga | **100 minutos, 55 T / 45 P** planejados. Prática guiada distribuída pelo encontro, com participação em dupla e operação direta opcional no navegador. |
| Ganho em relação à A14 | Sair de uma cópia cifrada e autenticada para três decisões sem sigilo obrigatório do conteúdo: comparação de bytes, autenticação por segredo compartilhado e verificação de senha resistente a ataque offline. |
| Pré-requisito | Funções de chave e integridade da A14 como conteúdo de página; não exigir C1 efetivamente entregue. |
| Ferramenta | Painel local Web Crypto em HTTPS ou `localhost`; quadro de resultados completo como alternativa. Nenhuma instalação, conta, upload ou segredo real. |
| Evidência | D1: digest de `abc` contra vetor NIST e mudança para `abd`; M1/M2/M3: `true/false/false`; C2 com escolhas, contraprovas, procedência e limites. |
| Critérios | Distinguir referência confiável de valor calculado; explicar quem conhece K2 e seu limite; rejeitar SHA-256 direto para senha e indicar sal individual + custo + esquema de senha. |
| Fontes | NIST FIPS 180-4 e exemplo SHA-256; RFC 2104; W3C Web Crypto; NIST SP 800-63B-4; OWASP Password Storage Cheat Sheet. |

## Cadeia e ponte

Herança conceitual da A14 (chave, integridade e limite do endpoint), sem alegar execução → três pedidos de verificação → preparar entrada `abc`, referência NIST e mensagem fictícia → prever e operar `digest`, `sign` e `verify` → D1 e M1–M3 → ler concordância e rejeição com premissas de referência e chave → conceituar hash, HMAC, sal e KDF de senha → selecionar mecanismo para três finalidades → validar com caso aceito, contraprova e limite → C2 do registro único → reabrir na A16 o campo **quem possui qual chave** para assinatura e acordo quando não há segredo compartilhado.

O vetor `abc` serve apenas à comparação de bytes. O HMAC usa chave gerada localmente; não demonstra autoria individual nem proteção de chave em produção. A seção de senha avalia uma configuração sanitizada e uma decisão técnica; **não** afirma execução de Argon2id na aula.

## Condução e alocação de minutos

| Minutos | T/P | Ação conduzida e participação | Evidência/parada |
|---|---:|---|---|
| 0–10 | 8/2 | Reabrir a função da chave na A14 e apresentar os três pedidos. Cada dupla antecipa se precisa de segredo, referência ou sal. | Registrar hipótese, sem atribuir checkpoints anteriores à turma. |
| 10–28 | 15/3 | Explicar bytes, digest e procedência. Mostrar `abc` e referência NIST antes do clique; duplas preveem `abd`. | A referência precisa vir de canal confiável. |
| 28–42 | 4/10 | Demonstrar botão 1; estudantes executam se disponível e registram D1. Comparar com quadro quando necessário. | Não confundir igualdade de digest com autoria. Parar após registrar entrada exata. |
| 42–57 | 14/1 | Explicar segredo compartilhado, mensagem legível, HMAC e limite de autoria. Prever M1–M3. | Quem conhece K2 pode produzir código válido. |
| 57–77 | 3/17 | Demonstrar botões 2–5 com pausas. Duplas operam ou leem o quadro e completam M1–M3. | Mesmo código: original aceita; mensagem/chave mudadas rejeitam. Não usar segredos reais. |
| 77–91 | 8/6 | Explicar ataque offline, sal, custo, Argon2id e pepper opcional. Duplas analisam P-A–P-C, corrigem o sal repetido e especificam testes de login ainda não executados; comparar com a resposta da página depois da previsão. | Proposta de configuração não é teste de Argon2id. Não pedir senha real. |
| 91–100 | 3/6 | Duplas escolhem mecanismos para (a) pacote, (b) mensagem, (c) senha; revisão cruzada de um limite e preenchimento inicial C2. | Checkpoint presencial; sem atividade adicional no Classroom. |
| **Total** | **55/45** | | |

**Prática mínima efetiva:** 45 minutos de ação cognitiva verificável: 27 minutos de operação e leitura dos resultados D1/M1–M3, 6 minutos de inspeção e correção da configuração P-A–P-C e 12 minutos de previsão, escolha de mecanismo, revisão e registro C2. A operação direta do estudante é oferecida, mas não condiciona a participação quando houver projeção ou indisponibilidade de Web Crypto. Nenhum bloco transfere descoberta de ferramenta para casa.

## Respostas e mediação

- **D1:** SHA-256(`abc`) = `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`, conforme [exemplo NIST](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/examples/sha256.pdf). `abd` produz outro digest. O painel mostra um vetor conhecido; um pacote real exige valor de referência com procedência verificada, idealmente em canal separado e autenticado.
- **M1/M2/M3:** `true/false/false`. A chave K2 é criada localmente e não exportável. Falha não localiza uma causa num incidente real; os testes controlados mostram qual entrada foi mudada. Validade sob K2 não prova qual detentor a usou.
- **C2(a):** digest com referência confiável; arquivo e referência obtidos do mesmo local comprometido podem concordar fraudulentamente. **C2(b):** HMAC com chave compartilhada protegida e gestão de acesso; mensagem visível. **C2(c):** Argon2id com sal individual e parâmetros medidos, registro de esquema/parâmetros/sal/verificador; opcional pepper fora da base. SHA-256 direto, mesmo salgado de modo ingênuo, é rápido para palpites offline.
- **P-A–P-C:** P-A rejeitada por hash rápido direto; P-B corrigida com `S-B` individual para conta 8; P-C aceitável apenas como proposta estrutural, pendente de parâmetros reais medidos e testes de login aceito/negado. A tabela é insumo didático, não saída de serviço.
- **Diagnóstico:** divergência em `abc` sugere espaço, quebra de linha, codificação ou execução incorreta; não inferir adulteração automaticamente. Se Web Crypto não iniciar, usar o quadro D1/M1–M3 identificado como referência. Se um botão retornar inesperadamente, registrar botão e saída, suspender inferência e não pedir credenciais ou dados reais.
- **Extensão:** quando a dupla sugerir que HMAC permite identidade individual, perguntar quantos serviços possuem K2. A16 introduz chaves distintas e assinatura; preservar essa pergunta no campo “limite” de C2.

## Verificação editorial antes do encontro

Conferir HTTPS ou `localhost`, carregamento do arquivo `a15-hash-hmac.js`, foco por teclado dos botões e saída textual. Executar D1 e M1–M3 e comparar com os resultados esperados; conferir o link da atividade única e o estado real da A13 antes de distribuir. A publicação de página ou código não comprova que a aula ocorreu.
