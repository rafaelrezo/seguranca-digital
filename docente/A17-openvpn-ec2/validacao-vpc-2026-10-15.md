# A17 — acesso roteado à máquina interna, 15 out. 2026

## Escopo da revisão

A pedido docente, serviço de teste saiu da interface TUN do gateway e passou à segunda EC2, sem Internet, na mesma VPC. Rede pública/privada, encaminhamento Linux, rota enviada ao cliente e retorno para ENI foram documentados. SG interno permite TCP22/8080 do pool VPN e não inicia saídas. Source/destination check desativado apenas no gateway. Sem SNAT/MASQUERADE: origem VPN preservada. User data da interna não instala pacotes nem baixa arquivos.

Arquitetura atualizada antes da página; roadmap, plano, percurso, navegação, manifesto e C4 alinhados. A preparação adicional demonstrada é estimada em30–45min; os100min do encontro precisam de revalidação com a nova topologia. Carga global/calendário não foram fechados por inferência. Há uma única entrega após A17.

## Arquivos publicados

Repositório [seguranca-digital-praticas](https://github.com/rafaelrezo/seguranca-digital-praticas), main, commit `579ff633ccb7b7784357a4a1a5c3fbf5362ea4b4`, agora36 arquivos-fonte. Acrescentados `roteamento.sh` e `interna-user-data.sh`; configuração, verificadores, instalação de pacotes e READMEs atualizados. `servico.sh` preservado como aviso, sem iniciar o serviço antigo. Download MkDocs de server.conf idêntico à fonte publicada.

Push confirmado e blob remoto de roteamento.sh `fb4f27eee05ca7a5d0bbb6e7ed724ee1484e00fd` igual ao arquivo local. Nenhuma chave de teste ou perfil foi versionado. A edição do curso continua local; o push foi somente do repositório de práticas, não do site. Drive e Classroom preservados.

## Teste funcional Linux executado

Ambiente descartável Docker Ubuntu24.04, sem rede externa, com namespaces próprios de cliente, gateway, roteador representando a VPC e interna. Sem host networking no teste, sem alteração das rotas/interfaces do host. Scripts de aluno montados somente para leitura. Privilégios de rede limitados ao container; processos e namespaces removidos ao encerrar. A construção da imagem usou rede do host para instalar ferramentas, sem configurar essa rede.

1. **Roteamento isolado:** script real aplicado duas vezes, com uma única associação da cadeia. HTTP alcançou a interna e registrou10.8.0.2. Porta9090 com serviço em execução foi bloqueada. Remover rota de ida, rota de retorno ou forwarding quebrou função; restaurar recuperou. Tabela NAT permaneceu sem regra de tradução. Tentativa de saída interna falhou no ambiente sem rota externa.
2. **User data:** executado como root no namespace interno; criou conteúdo, usuário dedicado e unit. `systemd-analyze verify` aprovou a unit; o processo HTTP foi iniciado manualmente sob esse usuário para validar arquivos/permissões. As chamadas a systemctl foram substituídas no teste, pois não havia systemd como PID1. Não foi testado cloud-init/boot EC2 real.
3. **OpenVPN real2.6.19:** uso do server.conf integral, dispositivo TUN, redução de privilégios e perfil gerado pelo programa da aula. V0 falhou sem túnel; V1 negociou TLS1.3/X25519 e AES-256-GCM, recebeu push10.77.2.0/24, criou rota via10.8.0.1 e alcançou HTTP10.77.2.10 com origem10.8.0.2 preservada.
4. **V2/V3:** perfil com nome errado recusado; servidor reiniciado com CRL atualizada recusou cliente revogado em nova conexão. A nova topologia não eliminou as contraprovas criptográficas.

Os ensaios usaram PKI/frase descartáveis somente em diretório temporário; esse material e as imagens Docker próprias do teste foram descartados após a conferência. Logs e scripts de revisão em `/tmp/a17-vpc-test`, sem publicação de segredos. Os resultados de roteamento e OpenVPN estão em `routing.log` e `openvpn.log`.

## Conferência editorial e visual

Bash syntax, validador editorial e build MkDocs estrito aprovados em diretório temporário, preservando site/ preexistente. A17 renderizada em1440/390px, com diagrama, âncora única de atividade, sem imagens quebradas ou transbordamento da página. Topologia, retorno e isolamento inspecionados visualmente. Artefatos em `/tmp/seguranca-a17-vpc-review`.

## Limites

Não foram criados recursos AWS pelo agente. **Pendente:** comportamento real de SG/ENI/source check e tabela VPC no AWS Academy, permissões da sessão, boot cloud-init/systemd da AMI selecionada, SSH com a chave EC2 na interna, instalador/rotas/SSH do Windows e UDP na rede da sala. O roteador Linux do teste representa a função de retorno; não implementa nem certifica o plano de dados AWS.

Conferir AMI/Python, IPs, ausência de sobreposição, custos, tempo e encerramento das duas EC2/EBS no ensaio docente. Os testes locais não confirmam realização em sala nem implantação na conta. A validação anterior de instância única permanece como histórico e foi substituída quanto à topologia e ao custo.
