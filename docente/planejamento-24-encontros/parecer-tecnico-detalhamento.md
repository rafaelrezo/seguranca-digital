# Parecer técnico incorporado — detalhamento A08–A31

**Data:** 8 de setembro de 2026. Revisão independente solicitada pelo docente e realizada por agente especialista em segurança IT/OT. O revisor leu a macroorganização e a matriz dos encontros, consultou referências oficiais e devolveu recomendações para os 24 encontros, sem editar arquivos. A implementação curricular foi consolidada no [detalhamento temático](detalhamento-conteudos-por-aula.md).

**Revisão posterior:** o [confronto com A01–A07](confrontacao-a01-a07-a08-a10.md) corrigiu a distribuição inicial registrada abaixo: A08 inicia SGSI após ponte de 15 minutos, A09 concentra avaliação/decisão de risco e A10 aprofunda aplicabilidade/avaliação de controles. O parecer original não havia discriminado suficientemente a repetição com A02/A05.

**Conclusão original:** distribuição 5 + 3 + 6 + 3 + 7 tecnicamente viável para o recorte introdutório/aplicado, com demonstrações preparadas, cinco entregas e limites de escopo. A revisão não certifica laboratórios, materiais publicados nem desempenho dos estudantes.

| Aulas | Recomendação do especialista | Incorporação |
|---|---|---|
| A08 | Separar requisito, mecanismo e teste; contraprova legítima e de abuso | Conteúdos e critério de passagem à governança |
| A09–A10 | Separar papéis; avaliar risco com incerteza; política→procedimento→evidência | Gestão de riscos e seleção de controles explicitadas em M1/A10 |
| A11 | Processo normal antes da consequência; tela pode estar congelada | Processo fornecido de tanque/bomba, sem herança industrial fictícia |
| A12 | Distinguir NIST e ISA/IEC, papéis e partes da série | Referências complementares; decisão de manutenção como recorte |
| A13–A15 | Mesmo processo, fluxos por função, acesso temporário e restauração verificável | Matriz de comunicação e critérios de operação; nuvem como transferência curta |
| A16–A18 | Propriedades e adversário; AEAD/AAD/nonce; hash/HMAC/senha diferentes | Casos contrastantes e limites contra replay e falsa autenticidade |
| A19–A21 | Uma família operacional de assinatura, confiança na chave, validações distintas | Assinatura/certificado/canal/versão; acordo de chaves introduzido por função |
| A22–A24 | Verificação independente, comportamento contextual, relógios e contraprovas | Pacote único e detector preparado para A29; sem malware real ou campanha enviada |
| A25–A26 | Objetivos e escopo; ferramenta gera candidato, não prova | Critérios independentes de exploração e defesa; DevTools como entrada |
| A27 | Avançar além da troca de cesta já conhecida | Variação nova, contraprova legítima e variante corrigida identificada |
| A28 | Uma injeção principal; correção específica | SQL como preferência a ensaiar, XSS somente contraste conceitual curto |
| A29 | Telemetria antes da ação e reutilização do detector A24 | Matriz executada→registrada→coletada→alertada→interpretada |
| A30 | Purple OT com função preservada e recuperação | Mesmo processo; análise offline não recebe rótulo de controle validado |
| A31 | Reteste com estados explícitos e decisão contextual | Corrigido/mitigado/não reproduzido/não retestado; sem sexto projeto |

## Referências oficiais consultadas pelo revisor

- [ISO/IEC 27001](https://www.iso.org/standard/27001): estrutura do SGSI.
- [NIST SP 800-82r3](https://csrc.nist.gov/pubs/sp/800/82/r3/final): referência final solicitada para OT. A existência de revisão posterior em draft não altera a edição adotada neste recorte.
- [ISA/IEC 62443](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards): papéis, ciclo de vida e organização da série.
- [OWASP Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html), [ASVS](https://owasp.org/www-project-application-security-verification-standard/) e [WSTG](https://owasp.org/www-project-web-security-testing-guide/): orientação, requisitos e testes.
- [AEAD — RFC 5116](https://www.rfc-editor.org/rfc/rfc5116.html), [TLS 1.3 — RFC 8446](https://www.rfc-editor.org/rfc/rfc8446.html), [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final): propriedades e limites criptográficos.
- [OpenSSL enc](https://docs.openssl.org/master/man1/openssl-enc/): não planejar esse comando como suporte a modos autenticados GCM/CCM; selecionar interface apropriada.
- [OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html), [Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) e [SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html): mecanismos específicos por finalidade.
- [NIST SP 800-61r3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) e [SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final): resposta e avaliação técnica.

## Pendências de produção, sem bloquear o planejamento

Preparar e ensaiar contrato do processo OT, insumos versionados positivos/negativos, interface criptográfica adequada, variantes corrigidas, detector e recuperação. Nenhum desses itens foi considerado pronto apenas por aparecer na matriz curricular. A autoria de páginas e roteiros operacionais será etapa posterior; GitHub Pages e Classroom permanecem sem atualização nesta etapa.
