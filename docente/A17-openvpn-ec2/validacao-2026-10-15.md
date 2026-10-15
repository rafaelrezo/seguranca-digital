# Validação local — consolidação A15–A17, 15 out. 2026

**Histórico da primeira topologia:** a A17 foi ampliada depois para acesso a uma segunda máquina privada. Consulte a [validação da VPC](validacao-vpc-2026-10-15.md), que substitui este registro quanto à topologia, custo e novo ensaio TUN.

## Escopo e estado

Produção autorizada após aprovação da análise pedagógica e definição docente de EC2 lançada no console e cliente instalado na máquina local Windows ou Linux. A15/A16 consolidadas editorialmente; A17 e C4 acrescentados. Arquitetura, roadmap, planos, manifesto, navegação e URLs de encaminhamento alinhados. Sem publicação remota, alteração do Drive/Classroom ou lançamento de recursos na AWS.

## Verificações executadas

- Validador editorial do repositório: aprovado, incluindo manifesto A14–A17, âncoras e verificações de segredos.
- Build MkDocs estrito em diretório temporário: aprovado. Artefato `site/` preexistente preservado.
- A15: comandos de emissão local executados a partir dos blocos da página; CA explícita/nome correto aceitos, nome incorreto e CA ausente recusados. RSA numérico, RSA-OAEP/híbrida e verificador de senha executados a partir dos downloads existentes.
- A16: servidor e cliente TLS reais em loopback, TLS1.3; handshake válido, nome errado recusado e resposta HTTP obtida por conexão validada. Processos encerrados ao final.
- A17: programa fornecido executado em pasta temporária, com frase descartável de teste não impressa. Certificados de servidor/cliente validados por finalidade; finalidade incorreta recusada; CRL vazia aceita e CRL com serial revogado recusada pelo OpenSSL. Perfil inline e permissões conferidos.
- OpenVPN local **2.7.0 / OpenSSL 3.5.5**: negociou controle TLS1.3 e cifra de dados AES-256-GCM, recusou nome esperado incorreto e certificado revogado após reinício com CRL atualizada. Ensaio usou `dev null`, sem pool/rotas nem redução de usuário, porque este host não dispõe de `/dev/net/tun`. Não equivale a execução integral do `server.conf` em TUN.
- Chrome: A15/A16/A17 abertas em 1440 e 390 px, uma âncora de atividade em cada página, sem imagens quebradas nem transbordamento horizontal da página. Inspecionados os recortes de prática, EC2 e cliente Windows; código-fonte público da PKI igual ao download. Blocos de comando usam rolagem horizontal própria.

## Correções decorrentes da validação

O redirecionamento literal de `/dev/null` na célula de uma tabela da A16 interferia no processamento HTML/Markdown e ocultava o restante da página; a célula foi reescrita e a âncora de atividade renderizada foi conferida. A validação do Markdown-fonte, isoladamente, não detectava esse problema.

No ensaio OpenVPN sem TUN, a primeira tentativa após alterar a CRL ainda utilizou estado anterior; a prática agora reinicia explicitamente o servidor descartável após instalar a lista e antes da nova conexão. O procedimento informa a interrupção das sessões e não o apresenta como operação de produção. A lista assinada revoga a admissão; não se atribui expulsão imediata de sessão existente à simples edição do arquivo.

Foram fixados X25519/prime256v1 no recorte do ensaio para comparar ECDHE com A16, pois bibliotecas recentes podem negociar grupos híbridos por padrão. A configuração não é recomendação universal de política criptográfica.

## Limites e preparação antes da aula

**Não executados:** lançamento no console EC2, restrições reais da sessão AWS Academy, configuração completa com TUN, acesso ao HTTP pelo túnel real, instalação/importação do cliente Windows e conectividade UDP da rede da sala. Exigem ensaio no ambiente autorizado; material publicado não confirma realização em sala.

Conferir região, AMI oficial/ID, tipo permitido, tamanho mínimo de disco, preço/saldo, IP de saída, fingerprints SSH, privilégios de instalação e núcleo OpenVPN. Referência de infraestrutura: Ubuntu24.04/x86_64, t3.micro e us-east-1 quando permitidos; não há AMI ID inventado. Distribuições mantêm patches próprios: registrar a versão exata do pacote e do instalador no ensaio docente. A página oficial de downloads é a fonte do Windows; não presumir que a versão testada neste Linux seja a versão Windows.

Previsão de 100 min depende de cliente instalado e conta previamente verificada em preparação demonstrada. Os minutos reservados ao encerramento não podem ser consumidos por diagnóstico. Se a sessão falhar, usar V1–V3 fornecidos, sem inventar implantação e sem deixar recurso lançado ativo. Crédito de US$50 é limite do laboratório; a reserva US$0,10 para duas horas é planejamento com premissas, não orçamento garantido.

Fontes primárias e preços estão referenciados na página. Arquitetura/roadmap continuam sem declarar fechados o calendário e o somatório institucional T/P.
