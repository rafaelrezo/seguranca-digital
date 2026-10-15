# Plano docente — A17 — OpenVPN e máquina interna na VPC

**Estado:** edição ampliada em 15 out. 2026 por solicitação docente, substituindo o teste HTTP no próprio gateway. Produção local autorizada; não confirma implantação AWS, execução Windows ou realização pela turma. Calendário e carga global continuam pendentes.

## Ficha-base

| Campo | Definição |
|---|---|
| Ementa/ganho | Integrar criptografia e confiança em acesso remoto roteado a outra máquina sem Internet; configurar ida, forwarding, retorno e filtros, distinguir rota/autenticação/autorização e aplicar CRL. |
| Herança | A14 cifra e distribuição, A15 assinatura/PKI e A16 hash/HMAC/senha/TLS como material disponível; sem presumir checkpoints. Docente confirmou exposição matemática RSA, sem versão ou distribuição de outros conteúdos. |
| Carga | Referência de 100 min, 25 T/75 P planejados. A nova rede requer preparação demonstrada adicional estimada em 30–45 min; ensaiar para revalidar tempo, sem declarar ajuste institucional de carga aprovado. |
| Infraestrutura | Duas EC2 por dupla no console AWS Academy, mesma VPC exclusiva; us-east-1 se permitido, Ubuntu24.04 Canonical x86_64, t3.micro, dois gp3 mínimos de referência8GiB e somente um IPv4 público automático. Sem NAT, Elastic IP ou role extra. Gateway10.77.1.10 e interna10.77.2.10, poolVPN10.8.0.0/24. Cliente Windows GUI nativo ou Linux2.6+. SSH/SCP e PKI local Linux/WSL; Windows nativo para teste/SSH da interna. |
| Evidência | C4 da atividade única A14–A17: topologia, rotas e filtros, acesso V0/V1, isolamento, V2/V3, limites e encerramento. Uma entrega após A17. |
| Critério | Mecanismo, previsão, execução ou dado fornecido, rastro, contraprova e limite; diferenciar tabela Linux da tabela VPC. |
| Página | [Página integral](../../docs/aulas/A17-openvpn-ec2.md), com fontes oficiais no ponto de uso. |

## Decisão arquitetural

VPC10.77.0.0/16; sub-redes pública10.77.1.0/24 e privada10.77.2.0/24, mesma AZ. Gateway com IPv4 público; interna sem IPv4 público/IPv6 e sem saída Internet. Internet Gateway só aparece na tabela pública. Tabela privada tem local e **10.8.0.0/24 → ENI do gateway**. Source/destination check desativado apenas no gateway.

OpenVPN envia rota10.77.2.0/24 ao cliente. Linux no gateway encaminha com filtro próprio: somente origemVPN → internaTCP22/8080 e retorno estabelecido, sem SNAT/MASQUERADE. Interna recebe origem10.8.0.x; seu SG deve usar esse CIDR, não referência ao SG do gateway. SG interno sem regras de saída iniciada; respostas são stateful. Serviços locais AWS DNS/DHCP/metadados continuam tendo exceções próprias.

User data `interna-user-data.sh` prepara HTTP por Python já existente na AMI e systemd, sem apt/download. Não dar Internet temporária à interna. CA e privada cliente permanecem locais; SSH EC2 é outro par. Túnel termina no gateway: HTTP no trecho VPC fica em claro; SSH protege até a interna.

## Cadeia de aprendizagem

Herança conceitual A14–A16 → prever acesso remoto → preparar VPC/cliente → executar configuração e rotas → observar V0/V1, contadores e origem HTTP → explicar encapsulamento e ida/volta → decidir destinos/portas permitidos → confrontar saída bloqueada, nome errado e revogação → registrar C4 e terminar recursos → OT reabre autorização de operação, janela, processo e disponibilidade. Não transformar a demonstração em acesso a equipamento industrial real.

## Preparação demonstrada

Antes do encontro: mostrar instalação do cliente, console Academy, VPC/sub-redes/tabelas/IGW, SGs e lançamento separado. Estimativa adicional30–45min, a validar; reprodução é opcional e acompanhada, nunca descoberta obrigatória em casa. Conferir ausência de conflitos das faixas, permissão de alterar rotas e source/destination check, client Windows, origem/32 e UDP1194 na sala. Não exigir conta pessoal para contornar Academy.

Se toda a preparação precisar ocorrer nos100min, ainda não há estimativa validada: selecionar demonstração em ambiente preparado e preservar a mesma leitura/decisão no pacote alternativo. Não comprimir a teoria nem consumir o encerramento. Material adicional de estudo não é comprovação de execução.

## Condução de referência — 100 minutos

| Bloco | Condução | T/P |
|---|---|---|
| 0–10 | Conferir topologia/rede preparada; prever ida e retorno e V0. | 6/4 |
| 10–25 | Conferir duas EC2, ENI/source check, rota privada, SG e user data. | 3/12 |
| 25–40 | SSH gateway, pacotes/TUN e PKI/transferências. | 4/11 |
| 40–55 | Ler server.conf, aplicar filtro/forwarding e conectar cliente. | 4/11 |
| 55–70 | V1 HTTP, SSH interna, origem preservada, tentativa externa e confronto com configuração. | 3/12 |
| 70–85 | V2/V3: prever, executar, correlacionar logs e CRL. | 3/12 |
| 85–100 | Ciclo/limites, C4 e terminação das duas EC2/EBS/rede. | 2/13 |

Total100,25T/75P como hipótese condicionada à preparação. Ensaiar a nova edição antes de afirmar viabilidade em sala. Alternar operador/leitor. Demonstração explica parâmetros antes da interpretação; parar para previsão curta e exigir estado confirmado antes de avançar.

## Respostas e limites

- **V0/V1:** sem VPN não há resposta da interna; com VPN, rota específica, forwarding e retorno permitem HTTP/SSH. Inicialização OpenVPN sozinha não prova acesso. Journal interno mostra10.8.0.x; contadores do gateway apoiam ida/volta. Não usar ping como único critério: ICMP não está liberado.
- **Isolamento:** ausência de IP público/IPv6, tabela privada sem0/0/NAT e SG sem saída iniciada sustentam a decisão; tentativa TCP externa falha auxilia, sem provar causa isoladamente. Rota padrão no Ubuntu para o roteador local não equivale a rota0/0 da tabela AWS para Internet.
- **V2:** nome CN esperado incorreto, não validação SAN do navegador. Restaurar perfil e repetir V1 antes de V3.
- **V3:** fechar SSH interno antes, desconectar cliente, instalar CRL nova e reiniciar o gateway OpenVPN descartável. Olhar log servidor e recusar nova admissão. Não prometer expulsão instantânea de sessão existente. HTTP da segunda EC2 é independente e não precisa reinício.
- **Criptografia:** ta.key é segredo prévio; authSHA256 acrescenta HMAC ao controle, sem HMAC adicional aos dadosGCM. TLS1.3 usa acordo e não transporteRSA de chave. Frase protege privada local, sem login/verificador de senha no servidor. Renovação120s é parâmetro didático, afirmar ocorrência apenas com log.
- **Filtros:** roteamento.sh só no gateway descartável, não no notebook. Forwarding e regras em memória, reaplicar após reboot; se falhar pode permanecer0. Não limpa INPUT/OUTPUT; a cadeia própria descarta outros pacotes encaminhados. Não altera a rede AWS.

Não apresentar erro operacional como recusa criptográfica. Se implantação falhar, usar dados fornecidos identificados e exigir a mesma decisão sem inventar logs/IDs. Não reenviar segredos à IA ou à entrega.

## Custo, encerramento e limites operacionais

Até duas horas com duas EC2 pequenas: margem didática2×US$0,02/h, umIPv4US$0,005/h e doisgp3 de8GiB por2h~US$0,004; base~US$0,094, reservaUS$0,15 antes de variações. Conferir tarifas reais e saldoUS$50/estudante; preparação ligada também consome. Não lançar recursos pelo agente.

VPC/gateway de laboratório descartável, uma AZ, sem alta disponibilidade; reconstrução e pacote alternativo são a contingência pedagógica. Não é arquitetura de produção. Não aplicar exigências de redundância ou IaC da skill a esse caso contra a solicitação docente de console e laboratório pequeno.

Terminar as duas EC2 pelos IDs, conferir ambos EBS/ENIs, remover somente rede/SG/tabelas/IGW exclusivos e ausência de NAT/EIP/snapshots cobrando. Não confiar em Stop/End Lab. Depois de V3, usar console para terminar: não reautorizar cliente revogado para administrar. Descartar perfis/segredos locais e preservar somente recortes sanitizados.

## Distribuição e validação

Repositório público https://github.com/rafaelrezo/seguranca-digital-praticas, pasta a17, comandos por etapa. Arquivos novos: roteamento.sh e interna-user-data.sh; server.conf e verificadores apontam à rede/destino interno. servico.sh preservado como aviso de compatibilidade, sem iniciar HTTP no gateway. Atualizar clone com git pull --ff-only somente sem edições próprias; para ZIP, cópia nova sem sobrescrever segredos.

Separar testes locais Linux da execução AWS e Windows, sem atribuir à turma testes publicados. Ensaio Academy completo e cliente Windows continuam exigindo validação no ambiente autorizado. A página mantém alternativa V0/V1/isolamento/V2/V3; cada dupla que lançar recursos precisa encerrar mesmo se usar alternativa.
