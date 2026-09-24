# Purview — demonstração pública e procedência das capturas

Verificação em 24 de setembro de 2026. Apoio visual da A11, sem implantação ou execução atribuída à turma. Arquitetura e roadmap consultados: preservado o bloco predominantemente expositivo, com análise guiada.

## Acesso e limites

A [Microsoft Adoption](https://adoption.microsoft.com/en-gb/microsoft-security/purview/) oferece “DLP Interactive Guides”, separados dos “Data Security Clickthrough Demos (Partners only)”. O guia público, seu JSON e seus assets responderam HTTP 200 a requisições anônimas, sem conta, cookies de autenticação ou ativação de trial. A navegação é predefinida; não constitui tenant de laboratório. O roteiro no JSON confirma passagem por classificação, tipos de informação sensível, políticas, locais e editor de regra.

As capturas originais mostram a interface anterior em compliance.microsoft.com. Não representam garantia dos menus vigentes em 2026. A regra do guia usa tipos de informação sensível; o piloto opcional da A11 usa rótulo, logo não são a mesma política. Endpoint DLP não foi usado como evidência de bloqueio de email.

## Arquivos originais

### A11-purview-locais.png

- [Guia público](https://mslearn.cloudguides.com/guides/Create%20a%20DLP%20policy%20for%20Microsoft%20365%20online%20services).
- [JSON original](https://cgembed-bvbtdgdmasgbe9hz.z01.azurefd.net/demostorage/demos/8069b1fd-ccad-4c8b-911d-5a6124f8e156/document.json), passo 40 (índice começando em 1).
- [Imagem original](https://cgembed-bvbtdgdmasgbe9hz.z01.azurefd.net/demostorage/demos/8069b1fd-ccad-4c8b-911d-5a6124f8e156/assets/db789662-80c8-444b-84ac-43ce5bc71d66/Image_3.Png).
- SHA-256: `7e7f52e1301c74bf521c45bfb34fbccf5c8f3e5fe46a41386e9d041a3229f325`.
- Cópia binária sem recorte, composição, anotação ou alteração de conteúdo.

### A11-purview-acoes.png

- [Guia público](https://mslearn.cloudguides.com/guides/Create%20a%20DLP%20policy%20for%20Microsoft%20365%20online%20services).
- [JSON original](https://cgembed-bvbtdgdmasgbe9hz.z01.azurefd.net/demostorage/demos/8069b1fd-ccad-4c8b-911d-5a6124f8e156/document.json), passo 93 (índice começando em 1).
- [Imagem original](https://cgembed-bvbtdgdmasgbe9hz.z01.azurefd.net/demostorage/demos/8069b1fd-ccad-4c8b-911d-5a6124f8e156/assets/50432db7-f7db-40ff-a467-322fc731f2f3/Image_199.Png).
- SHA-256: `0ba263271453aff4d5078374b2ef8e438c580155542b6facc374bcb901dbee1c`.
- Cópia binária sem recorte, composição, anotação ou alteração de conteúdo.

### A11-purview-simulacao.png

- [Documentação oficial](https://learn.microsoft.com/en-us/purview/dlp-simulation-mode-learn).
- SHA-256: `cf4e76d9fecefd9fba9929a1b0b602e3fc3681bbcbf4ca83753781ec12097bb1`.
- [Imagem original](https://learn.microsoft.com/en-us/purview/media/dlp-sim-mode-sim-overview.png).
- Imagem copiada sem alteração de `/tmp/dlp-sim-mode-sim-overview.png`, obtida da documentação pela revisão principal. Captura documental independente do guia: números não representam resultados da turma.

## Funções que não se confundem

- [Simulation mode](https://learn.microsoft.com/en-us/purview/dlp-simulation-mode-learn): avaliação de política sobre o ambiente real sem enforcement; exige [permissões e licenciamento aplicáveis](https://learn.microsoft.com/en-us/purview/dlp-simulation-mode-get-started). Não oferece sandbox público.
- [Trial](https://learn.microsoft.com/en-us/purview/purview-trial): até 90 dias, 25 licenças; elegibilidade documentada Microsoft 365 E3 ou Office 365 E3 + Enterprise Mobility and Security E3, com função administrativa para ativação. Não presumir elegibilidade por email acadêmico. Nenhuma conta criada ou avaliação ativada.
- Guia público: observação das telas e cliques fornecidos; as capturas locais preservam a análise caso o player externo não carregue.

## Verificação do player em navegador

Chrome headless em sessão nova, sem login, janela 1440 × 1000: o player carregou após espera de 15 segundos. Seleção do Play central, seguida de quatro avanços Next Step, exibiu o portal e a instrução de selecionar Data classification. URL permaneceu no guia público, sem autenticação. Evidências locais: `/tmp/purview-guia-browser.png` (abertura) e `/tmp/purview-guia-browser-next.png` (portal e roteiro). Script de verificação: `/tmp/verificar-purview-guia-play.cjs`. Confirmados carregamento e avanço inicial; não afirmamos execução manual de todos os 160 passos. O percurso restante foi lido no JSON público.

As três figuras usam originais clicáveis e texto alternativo. A legenda distingue a captura documental dos resultados do curso; Completed e o banner de ativação em 14 dias são interpretados no texto, sem ativar política.
