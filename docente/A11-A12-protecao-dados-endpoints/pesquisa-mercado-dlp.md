# Pesquisa complementar — DLP: fundamentos, soluções e adoção

Consulta: **24 de setembro de 2026**. Relatório de apoio docente; não altera a A11 nem comprova implantação ou teste em conta real. Arquitetura curricular consultada. Fontes de capacidades são oficiais; evidências de mercado são identificadas separadamente. As sínteses são breves, autorais e não reproduzem extensamente os textos consultados.

## Resultado para a revisão

Ensinar primeiro uma tentativa de compartilhar um arquivo, depois conteúdo/contexto/regra/ação, e só então comparar implantação e produtos. A seleção do exemplo Purview é pedagogicamente justificável por sua integração documentada com os serviços usados no exemplo; **não há evidência pública suficiente nesta pesquisa para declarar que ele, Symantec ou Forcepoint é a solução mais implantada nas empresas ou nas indústrias brasileiras**.

É necessário distinguir três coisas: um programa organizacional de prevenção de exposição; mecanismos de inspeção e aplicação de políticas; e um produto comercial que implementa somente os canais e recursos contratados/configurados. Não chamar toda proteção de dados de recurso de uma suíte DLP.

## Leitura crítica das três fontes indicadas pelo docente

### Microsoft — Segurança 101

A página apresenta DLP como práticas e tecnologias para identificar informações relevantes, acompanhar seu uso e aplicar políticas. Diferencia saída por engano e extração intencional; organiza locais de atuação em rede, endpoint e nuvem. Reúne descoberta, proteção e investigação, e reconhece falsos positivos, complexidade de manutenção e custos de integração/operação. A contribuição mais útil para a A11 é mostrar que o trabalho continua após a criação da regra: ocorrências precisam de análise e políticas precisam de ajuste. Usar “apoia a conformidade”, evitando transformar controle técnico em certificado de conformidade jurídica. A página informa publicação em 29/05/2026.

Fonte: [O que é DLP — Microsoft](https://www.microsoft.com/pt-br/security/business/security-101/what-is-data-loss-prevention-dlp).

### AWS — O que é prevenção de perda de dados

O texto aproxima DLP de um programa amplo de proteção: políticas, identificação, controle de acesso, criptografia, resposta e responsabilidades. Ajuda especialmente a corrigir a ideia de que a iniciativa pertence apenas à segurança/TI: papéis e apoio organizacional precisam ser definidos. Para a A11, aproveitar a ligação entre classificação e regra, e entre responsabilidade e permissão. A página inclui backups no tratamento de dados em repouso; isso descreve a estratégia ampla, não comprova que um detector de conteúdo restaure arquivos. Expressões sobre conformidade integral ou dados seguros em toda a configuração devem ser substituídas por afirmações limitadas ao controle e à evidência disponíveis.

Fonte: [O que é DLP — AWS](https://aws.amazon.com/pt/what-is/data-loss-prevention/).

### Fortinet — Cyberglossary

O texto conecta definição do conteúdo protegido, locais de aplicação e condições/ações. Explica inspeção por palavras, padrões e indicadores próximos, útil para introduzir gradualmente por que um número isolado pode gerar erro. Também destaca propriedade intelectual, ampliando a aula além de dados pessoais. Não importar como regra universal a afirmação de que dados em repouso são menos vulneráveis: a exposição depende da configuração e das ameaças. Não tomar as passagens amplas sobre recuperação de arquivos como capacidade inerente de qualquer DLP. SIEM e IPS citados como apoio não são substitutos automaticamente equivalentes à inspeção e ao controle da circulação por conteúdo.

Fonte: [O que é DLP — Fortinet](https://www.fortinet.com/br/resources/cyberglossary/dlp).

## Conteúdo a incorporar progressivamente

Recomendação editorial própria, apoiada nas leituras acima e nos manuais abaixo:

1. **O objeto:** mostrar arquivo sintético, destinatário e ação pretendida. Separar autorização para abrir de autorização para enviar.
2. **A regra humana:** escrever “este relatório restrito não deve ser enviado para fora”; indicar quem decide a finalidade, quem configura e quem recebe o aviso.
3. **A tradução técnica:** explicitar conteúdo ou rótulo detectado, usuário/grupo, destinatário/canal, ação e exceção. Um rótulo é um critério possível; não pressupor que todo documento foi rotulado corretamente.
4. **O resultado:** distinguir auditoria, aviso, bloqueio e quarentena. Uma ocorrência não demonstra que o envio foi impedido.
5. **Os erros:** arquivo legítimo detectado e arquivo protegido não detectado; mostrar que ajustar a regra exige conservar a operação legítima.
6. **A cobertura:** repetir a intenção por outro canal e identificar onde a política deixa de atuar. Não fornecer passos de evasão; usar canais previamente declarados fora do piloto.
7. **A operação contínua:** definir responsável pela triagem, evidência mínima, prazo de tratamento e revisão das exceções. Reduzir acesso dos revisores ao conteúdo sensível.
8. **A escolha tecnológica:** comparar o local em que cada solução pode observar/aplicar a regra. Ferramentas entram para responder a um problema já compreendido.

Exemplos adicionais úteis: uma ficha de fornecedor sem dados pessoais que contém segredo comercial; dois arquivos com mesmo número aparente, dos quais um contém apenas código de peça; uma mensagem interna com um destinatário externo adicionado. Os exemplos são artificiais e devem ser identificados como tais. Não usar PII como tradução jurídica exata de dado pessoal sensível na LGPD.

## Produtos empresariais e serviços de nuvem

Esta comparação é de funções documentadas, não ranking, cotação ou recomendação universal. Edição, sistema suportado e integração precisam ser confirmados no projeto. Não há comparação de preços sustentada por condições uniformes.

| Exemplo | Função útil para ensinar | Dependência ou limite decisivo |
|---|---|---|
| Microsoft Purview DLP | Políticas para Exchange Online, SharePoint/OneDrive; recursos próprios para endpoint e outros locais | Licenciamento varia por recurso/local. DLP em e-mail/arquivos não demonstra licença nem implantação de Endpoint DLP. [Descrição de serviço](https://learn.microsoft.com/en-gb/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) |
| Google Workspace DLP | Drive: conteúdo e compartilhamento; Gmail: bloquear, avisar, quarentena ou auditoria | Confirmar edição de cada serviço e papel administrativo. Não inferir proteção de USB. [Drive](https://knowledge.workspace.google.com/admin/security/about-dlp?hl=en), [Gmail](https://support.google.com/a/answer/14767988?hl=pt-BR) |
| Forcepoint DLP | Componentes de rede, endpoint e descoberta; exemplo de arquitetura com mais de um ponto de controle | Agentes e integrações variam por canal. Contratar um componente não implica todos. [Guia de implantação](https://help.forcepoint.com/dlp/10/dlp_deploy/815E9A2A-38A3-4F92-BAEF-29B3E43619F4.html) |
| Symantec DLP, Broadcom | Proteção e descoberta em endpoint, armazenamento, rede/e-mail e integrações de nuvem | Distinguir módulos e pontos de imposição; a página comercial não basta para afirmar suporte a qualquer protocolo/formato. [DLP Core](https://www.broadcom.com/products/cybersecurity/information-protection/data-loss-prevention-core) |
| Netskope Endpoint DLP | Inspeção de conteúdo e controle de USB/impressão no dispositivo | É capacidade adicional do Netskope Client; precisa de habilitação e requisitos suportados. Não atribuir a esse recurso isolado tudo que a plataforma oferece. [Manual](https://docs.netskope.com/en/endpoint-data-loss-prevention) |
| FortiDLP | Exemplo de agente que acompanha origem de arquivos baixados de aplicações web definidas e pode bloquear transferências cobertas | O exemplo depende do FortiDLP Agent e de políticas; “nativo de nuvem” não significa dispensar agente no dispositivo. [Manual de aplicações SaaS](https://docs.fortinet.com/document/fortidlp/latest/fortidlp-administration-guide/103995/saas-apps) |
| Amazon Macie | Descobrir dados sensíveis em objetos S3 e produzir achados/resultados para análise | A descoberta automatizada usa amostragem; permissões e elegibilidade afetam cobertura. Não apresentar um achado como bloqueio inline de download nem análise de todos os bytes. [Funcionamento da descoberta](https://docs.aws.amazon.com/macie/latest/user/discovery-asdd-how-it-works.html) |
| Google Cloud Sensitive Data Protection | Inspeção, classificação e desidentificação para dados e aplicações | Plataforma/API para integrar ao tratamento de dados; não equivale a habilitar Workspace DLP. Transformação escolhida não comprova anonimização jurídica. [Documentação](https://docs.cloud.google.com/sensitive-data-protection/docs), [desidentificação](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data) |

Para não transformar a página em catálogo, usar quatro exemplos principais e uma subseção curta “Nuvem: descoberta não é bloqueio”, com Macie e Sensitive Data Protection. Symantec e FortiDLP podem compor leitura comparativa ou substituir exemplos conforme objetivo; não exigir memorização de oito marcas.

## Qual é mais comum nas empresas e indústrias?

**Resultado inconclusivo quanto à liderança de implantação.** Foram procurados dados independentes de uso instalado, participação de receita e recorte industrial. Não foi encontrada uma base pública contemporânea, comparável entre fornecedores, com método e recorte suficientes para responder qual produto tem mais instalações em empresas ou indústria brasileira.

| Evidência encontrada | O que autoriza afirmar | O que não autoriza |
|---|---|---|
| [Radicati, Market Quadrant 2024 — publicação da consultoria](https://www.radicati.com/wp/wp-content/uploads/2024/03/Data-Loss-Prevention-Market-Quadrant-2024-Brochure-2.pdf) | Microsoft, Forcepoint, Symantec e outros integram avaliação competitiva independente daquele período | A relação de fornecedores e avaliação de capacidades não é contagem de clientes nem ranking de instalações industriais |
| [PeerSpot — metodologia expressa na página de Symantec](https://www.peerspot.com/products/symantec-data-loss-prevention-reviews) | A plataforma calcula mindshare a partir de engajamento de seus usuários | Interesse, busca e avaliações não medem participação no parque instalado; não extrapolar os percentuais para mercado |
| [Enlyft — categoria Data Security](https://enlyft.com/tech/data-security) | Identifica indícios de tecnologias em empresas por metodologia própria | A categoria inclui produtos heterogêneos, inclusive consentimento/cookies; comparar Forcepoint genérico, Information Protection e DLP específico produziria denominadores incompatíveis |
| [IDC MarketScape 2025 — anúncio do fornecedor sobre a avaliação](https://www.forcepoint.com/newsroom/2025/forcepoint-named-leader-idc-marketscape-worldwide-data-loss-prevention-2025-vendor) | Registra reconhecimento do fornecedor em avaliação de capacidades/estratégia | Anúncio patrocinado pelo próprio fornecedor não é evidência independente de que tenha mais clientes; “líder” não é sinônimo de maior adoção |

Não usar percentuais de páginas comerciais de pesquisa sem método público suficientemente verificável, nem votos anedóticos em fóruns. Mesmo uma participação de receita confiável não equivale necessariamente à quantidade de instalações. Estudos de caso comprovam a existência de uma implantação específica, não predominância setorial.

Formulação pública recomendada: “Há soluções empresariais dedicadas e controles integrados às plataformas de trabalho. Nesta aula, Purview exemplifica a configuração em Microsoft 365; outros produtos ajudam a comparar cobertura. A escolha precisa considerar canais, formatos, integrações, operação e custo, e não uma suposta liderança universal.”

Para contexto industrial, usar desenhos, listas técnicas, receitas de fabricação e documentação de engenharia como **tipos de informação a proteger**, sem afirmar implantação real em uma indústria não documentada. Não estender automaticamente agente/bloqueio de endpoint administrativo a CLP, supervisório ou processo operacional. O curso reserva requisitos e avaliação OT para o bloco próprio.

O [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final), especialmente as orientações de monitoramento de sistemas na seção 6.3.2 e detecção de código malicioso na 6.3.2.3, exige atenção a desempenho, compatibilidade e teste prévio de agentes e controles em OT. Aplicação editorial dessa orientação geral: situar o exemplo DLP em repositório documental, estação de trabalho ou transferência autorizada; qualquer extensão para sistemas que operam o processo exige avaliação própria. A orientação de antivírus não é uma homologação de produto DLP para SCADA.

### Exemplo industrial curto e matriz por categoria

**Exemplo artificial:** uma estação de engenharia guarda um desenho CAD restrito. O responsável autoriza enviar ao fornecedor apenas uma versão PDF aprovada. TI fornece o repositório e o compartilhamento nominal; segurança configura o controle para a operação coberta. Antes de usar, verificar se a ferramenta reconhece o formato CAD, o PDF e eventual rótulo depois da conversão. Um envio bloqueado de DOCX não comprova inspeção de CAD. A autorização do fornecedor para receber uma versão não autoriza divulgar todo o projeto. Não instalar nada no controlador para realizar esse exemplo.

| Categoria | Operação concreta a demonstrar | Limite que a demonstração deve revelar |
|---|---|---|
| DLP no serviço de colaboração | Tentar compartilhar a versão restrita com destinatário externo | A política atua naquele serviço e escopo; não recolhe cópia preexistente |
| DLP de endpoint | Tentar transferir o arquivo sintético para mídia removível em estação de teste gerenciada | Depende de agente, formato e ação suportados; não implica adequação ao controlador industrial |
| DLP no caminho de rede | Submeter um envio de teste pelo canal de saída inspecionado | O tráfego precisa passar pelo ponto de controle e ser inspecionável |
| Descoberta em armazenamento de nuvem | Localizar conteúdo sintético em objeto S3 e analisar o achado do Macie | Achado é evidência de detecção, não prova de bloqueio prévio do download |
| Transformação integrada à aplicação | Remover campos desnecessários antes de produzir a cópia externa | A transformação precisa preservar a finalidade e não comprova anonimização automaticamente |

As categorias são uma síntese didática dos manuais de produto citados, não uma afirmação de que cada produto da tabela possui todos esses modos. Dados de funcionários/clientes e propriedade intelectual podem coexistir em uma indústria; a decisão sobre cada um não é intercambiável.

## Alternativas e complementos sem suíte dedicada

Reutilizar as medidas já ensinadas: redução da exportação; compartilhamento nominal; revisão de acesso; retenção; administração de dispositivos/canais; orientação de usuários; auditoria com responsável. A escolha deve declarar qual risco cada medida reduz e qual permanece.

IRM/rótulos com criptografia podem restringir uso em formatos e aplicações suportados: [documentação Office](https://learn.microsoft.com/en-us/purview/sensitivity-labels-office-apps). Rótulo apenas visual não é criptografia. Restrições de compartilhamento estão disponíveis no [Google Drive](https://support.google.com/drive/answer/2494893?hl=en-GB), mas retirar acesso ao original não recolhe automaticamente cópias anteriores. Backup sustenta recuperação; não resolve envio indevido. SIEM ajuda a correlacionar/registar eventos; não transforma sozinho uma política de alerta em controle de bloqueio.

## Ilustração e revisão final sugeridas

Uma figura adicional só se justifica se a atual Figura 3 não tornar visível **onde** ocorre a observação. Proposta editorial: três percursos independentes para o mesmo arquivo — serviço de e-mail, dispositivo com agente e repositório com varredura — com destaque para ação antes do envio versus achado após armazenamento. Nunca desenhar um único escudo central que sugira cobertura universal. Usar o próximo número livre confirmado pelo editor e o padrão de prompt solicitado pelo docente.

Antes da incorporação, conferir: siglas definidas na primeira ocorrência; fato observado separado de exemplo; detecção separada de prevenção; licença separada de implantação; direito de ler separado de direito de divulgar; dado confidencial empresarial separado de dado pessoal sensível; capacidade de fabricante separada de popularidade. Não há teste real executado de nenhum desses produtos nesta pesquisa.
