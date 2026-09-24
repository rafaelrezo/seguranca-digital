# Videomonitoramento industrial — aplicação dos papéis LGPD

Proposta para A11, seção `#responsaveis-lgpd`. Fontes oficiais consultadas em 24/09/2026. Aplicação didática das definições legais; não descreve instalação real nem base legal universal. A página pública não foi editada.

## Orientação de integração

Substituir o exemplo genérico de cadastro de clientes. Preferir incorporar a coluna de aplicação industrial à tabela atual de papéis, preservando suas definições jurídicas e a linha ANPD, em vez de apresentar duas tabelas equivalentes. O técnico empregado pode ser explicado logo abaixo da tabela: é função operacional, não sexto papel legal da LGPD.

## Trecho pronto para incorporação

### Exemplo: quem responde pelas imagens das câmeras industriais?

Uma câmera voltada ao acesso da fábrica pode registrar empregados, visitantes e terceirizados identificáveis. Essas imagens são dados pessoais. Instalar o equipamento, decidir por que filmar e consultar uma gravação são ações diferentes: o papel depende do que cada participante decide e executa. [LGPD, art. 5º][lgpd].

| Participante | Papel neste exemplo | O que faz na prática |
|---|---|---|
| **Indústria contratante** | Controladora, quando define finalidade e decisões essenciais | Aprova o objetivo do monitoramento, a retenção e quem pode consultar ou exportar imagens |
| **Prestadora de automação** | Operadora, se trata imagens em nome da indústria e sob suas instruções | Executa suporte com acesso autorizado às gravações, respeitando finalidade e limites definidos |
| **Técnico empregado da prestadora** | Profissional atuando pela prestadora; não operador individual só por acessar o sistema | Usa a conta autorizada, cumpre a ordem de serviço e registra intervenções |
| **Pessoas filmadas identificáveis** | Titulares | Podem exercer os direitos aplicáveis sobre seus dados |
| **Encarregado indicado** | Canal de comunicação, orientação e assessoramento | Recebe demandas e orienta providências; não concentra a responsabilidade pela conformidade |

As condições da tabela são essenciais: a contratação, sozinha, não determina o papel. [ANPD — agentes de tratamento][guia]; [Resolução 18/2024, arts. 11 e 17][r18].

**No atendimento técnico:** se uma falha exigir examinar gravações, confirme a autorização, o intervalo necessário e o destino permitido de eventual exportação. Registre o diagnóstico sem levar vídeos ao celular pessoal. Um pedido de aumentar a retenção exige decisão do responsável, não apenas disponibilidade de disco.

**Duas variações mudam o enquadramento.** A instalação puramente física de equipamentos e cabos, sem tratamento de imagens ou de outros dados pessoais no serviço, não torna a instaladora operadora automaticamente. Se a prestadora passa a decidir usar imagens para divulgar seu próprio serviço, deve-se avaliar sua posição de controladora nesse outro uso e sua licitude: a autorização para manutenção não autoriza publicidade. Estas são aplicações das definições, não classificações automáticas de qualquer contrato. [LGPD, arts. 5º, 6º e 39][lgpd].

## Prompt de apoio visual

!!! note "Figura 13 — Quem decide e quem executa no videomonitoramento"
    PROMPT ILUSTRATIVO FIGURA 13 = "Crie um diagrama didático em português, horizontal 16:9, fundo claro, alto contraste e texto grande. Título: Papéis no videomonitoramento industrial. Use cinco blocos e ícones discretos, sem nomes próprios, marcas, rostos reconhecíveis ou enredo. Bloco superior esquerdo: INDÚSTRIA — CONTROLADORA; subtítulo: Define finalidade, retenção e acesso. Bloco superior direito: PRESTADORA — OPERADORA NESTE EXEMPLO; subtítulo: Trata imagens sob instruções. Ligue indústria à prestadora por seta rotulada Instruções autorizadas. Dentro do bloco da prestadora, inclua um pequeno bloco TÉCNICO EMPREGADO; subtítulo: Executa e registra o serviço. No centro inferior, câmera ligada a uma tela com silhuetas genéricas e rótulo IMAGENS DE PESSOAS IDENTIFICÁVEIS. Ao lado da câmera, bloco PESSOAS FILMADAS — TITULARES. À esquerda inferior, bloco ENCARREGADO; subtítulo: Comunicação e orientação. Ligue esse bloco aos titulares e à indústria por linhas pontilhadas com legenda Comunicação, distintas da seta de instruções. Na base, escreva: O papel depende da atuação; instalar equipamentos não torna a empresa operadora automaticamente. Evite sugerir que toda prestadora trata imagens ou que o técnico é o operador legal. Não inclua biometria, reconhecimento facial, consentimento obrigatório nem prazo de retenção inventado. Mantenha organização espaçada e poucos elementos."

## Evidência normativa e limites para revisão

- O guia ANPD, itens 35–38, explica decisões essenciais e admite delegação de elementos técnicos não essenciais. Itens 51–60 distinguem a pessoa jurídica operadora de empregados subordinados. Exercer escolha técnica não torna a prestadora automaticamente controladora.
- O exemplo de instalação sem tratamento e o uso para publicidade são inferências didáticas das definições; não foram apresentados como casos julgados ou exemplos textuais da ANPD.
- Não usar “sem acesso visual” como sinônimo de “sem tratamento”: armazenamento, transmissão ou processamento podem constituir tratamento mesmo sem uma pessoa assistir às imagens. A hipótese da instaladora limita-se à instalação física sem operação com imagens ou outros dados pessoais, como contas e logs identificáveis.
- O encarregado não substitui a responsabilidade do agente pela conformidade (Resolução 18, arts. 11 e 17). Não é necessário acrescentar outra explicação jurídica extensa após a tabela.
- Não definir prazo-padrão de retenção, consentimento obrigatório, reconhecimento facial ou câmera como dado sensível automaticamente. O exemplo delimita imagens de pessoas identificáveis e deixa a decisão de hipótese legal no procedimento já explicado na A11.
- Os direitos sobre imagens não significam entrega automática da gravação integral contendo terceiros: o atendimento precisa observar os requisitos e direitos envolvidos.

## Fontes verificadas

[lgpd]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm
[guia]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_agentes_de_tratamento_e_encarregado___defeso_eleitoral.pdf/@@display-file/file
[r18]: https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/processo_integra_-resolucao_cd_anpd_no_18_2024.pdf

O arquivo do guia foi aberto como PDF de 26 páginas a partir do link da [página oficial do guia](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-para-definicoes-dos-agentes-de-tratamento-de-dados-pessoais-e-do-encarregado). O sufixo `@@display-file/file` funcionou, enquanto a rota simples havia mostrado somente a página de arquivo em leitura anterior.
