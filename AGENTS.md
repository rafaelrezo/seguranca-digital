# Diretrizes Editoriais para Revisão de Conteúdo (MkDocs)

Estas diretrizes definem o padrão esperado para revisão e criação de páginas em `docs/`, com foco em consistência didática, atualização técnica e enriquecimento com vídeos.

## 1) Estrutura padrão de página

Toda página nova ou revisada deve seguir, preferencialmente, esta ordem:

1. `# Título da Página`
2. Bloco de objetivos:
   - `Objetivos de aprendizagem` (3 bullets)
   - `Tempo estimado`
3. Seção de vídeo no topo:
   - `## Vídeo de contexto` ou `## Vídeo da aula`
   - Embed com `mkdocs-video`: `![type:video](https://www.youtube.com/embed/VIDEO_ID)`
4. Conteúdo principal em seções numeradas (`## 1.`, `## 2.`, ...)
5. Exemplo aplicado:
   - `Mini-caso prático` (ou equivalente)
6. Fixação:
   - `Perguntas de revisão rápida` (3 perguntas)
7. Referências:
   - `Fontes de referência` com links oficiais

## 2) Estilo de escrita

- Português claro, objetivo e técnico.
- Tom de professor especialista, com foco em compreensão prática.
- Explicar conceito -> impacto -> ação recomendada.
- Evitar excesso de jargão sem contexto.
- Usar listas e tabelas para facilitar leitura.
- Incluir separadores `---` entre blocos maiores.

## 3) Qualidade técnica e atualização

- Validar coerência conceitual com o restante da trilha.
- Priorizar fontes primárias e institucionais para fatos atuais:
  - ENISA, CISA, NIST, MITRE, OWASP, Microsoft Learn, Verizon DBIR, etc.
- Quando citar tendências/estatísticas, usar fontes recentes e estáveis.
- Evitar afirmações sem referência em temas sujeitos a mudança.
- Traduzir achados técnicos para impacto prático na organização.

## 4) Diretrizes para vídeos de enriquecimento

- Inserir vídeo no topo de cada página (1 vídeo principal).
- Preferência por conteúdo em português (pt-BR/pt-PT).
- Preferência por vídeos curtos/moderados (idealmente até ~20 min).
- O vídeo pode ser:
  - explicação direta do tema da página, ou
  - case correlato que enriqueça entendimento.
- Evitar vídeos muito longos, sensacionalistas ou sem credibilidade técnica.

## 5) Referências e rastreabilidade

- Toda página revisada deve ter uma seção `Fontes de referência` quando houver dados, tendências ou frameworks.
- Links devem ser diretos para fonte original (não depender só de blog secundário).
- Para metodologias/frameworks, priorizar documentação oficial.

## 6) Padrão de comparação entre metodologias/técnicas

Quando a página for comparativa:

- Incluir tabela com, no mínimo:
  - `Metodologia/Técnica`
  - `Melhor uso`
  - `Esforço`
  - `Entregável`
  - `Limitação`
- Finalizar com recomendação prática de combinação por cenário.

## 7) Checklist de revisão antes de publicar

- [ ] Estrutura da página segue o padrão definido neste arquivo.
- [ ] Há vídeo de contexto em português no topo.
- [ ] Conteúdo está tecnicamente coerente e atualizado.
- [ ] Há mini-caso prático contextualizado.
- [ ] Há perguntas de revisão rápida.
- [ ] Há referências confiáveis quando aplicável.
- [ ] Navegação do `mkdocs.yml` foi ajustada (se necessário).
- [ ] Build local validado com `./.venv/bin/mkdocs build --clean`.

## 8) Escopo inicial de aplicação

Estas diretrizes valem para toda a documentação em `docs/`, com prioridade para módulos:

- `ameacas/`
- `fundamentos_de_seguranca_digital/`
- demais trilhas quando forem revisadas.
