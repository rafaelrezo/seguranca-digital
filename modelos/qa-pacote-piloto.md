# Validação do pacote piloto estrutural

## Escopo validado

- template de página MkDocs autocontida;
- apresentação com dez arquétipos narrativos;
- roteiro prático A4 com missão, hipótese, decisões, evidências, rubrica e limpeza;
- plano docente, notas de facilitação e área de gabarito;
- fontes editáveis, PDFs e templates nativos no Google Workspace;
- separação entre conteúdo publicável e materiais externos ao MkDocs.

## Revisão visual

### Slides

- proporção 16:9 confirmada;
- dez páginas exportadas;
- contraste e hierarquia legíveis em projeção simulada;
- uma ideia principal por layout;
- ausência de texto ou formas cortadas na exportação local;
- notas do apresentador presentes nos layouts que exigem facilitação.

### Atividade

- formato A4 e três páginas confirmados;
- títulos, tabelas, caixas e rodapé preservados na exportação;
- primeira página comunica missão, objetivos, recursos, segurança e início do roteiro;
- rubrica e limpeza aparecem antes do encerramento;
- nenhuma resposta, credencial ou dado real foi incluído.

## Revisão técnica e de segurança

- os templates não executam comandos nem dependem de alvo externo;
- guardrails globais aparecem no roteiro e nas instruções de autoria;
- o validador impede pastas não publicáveis dentro de `docs/` e procura padrões comuns de segredos;
- a automação não requer credenciais do Google no CI;
- os links colaborativos ficam nos READMEs, e snapshots portáveis permanecem versionados.

## Limitação conhecida

A exportação única do Google Slides não foi materializada pelo conector no diretório local. A estrutura nativa foi lida integralmente após a importação — 10 slides, 10 exemplares e tamanho 16:9 — e a inspeção visual foi realizada sobre o PDF gerado da mesma fonte PPTX antes da importação. O roteiro Google Docs foi confirmado por leitura estrutural nativa após a conversão.
