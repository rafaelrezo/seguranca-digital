# Zero Trust
## 1) O que é Zero Trust?
**Zero Trust** é um modelo de segurança em que **ninguém é confiável por padrão** — nem usuários, nem dispositivos, nem aplicações, estejam **dentro** ou **fora** da rede.  
A regra prática é: **“não confie em nada, verifique tudo, o tempo todo”**.

Imagine armários de encomendas inteligentes: mesmo que a encomenda esteja “no seu prédio”, o compartimento **só abre** quando você informa **o código válido naquele momento**. Estar no prédio não garante acesso; **a verificação acontece a cada abertura**.

## 2) Origem do conceito
O termo **Zero Trust** foi popularizado por **John Kindervag** na **Forrester Research** por volta de **2010**. Ele percebeu que o modelo “castelo e fosso” (perímetro forte, confiança interna) não acompanhava a **nuvem, o trabalho remoto, dispositivos móveis e serviços terceirizados**. De lá para cá, o conceito foi adotado e refinado por grandes empresas e órgãos governamentais.

## 3) Por que o perímetro tradicional não basta?
Antes, proteger “o muro” (firewalls, IPS) parecia suficiente. Hoje:
- colaboradores trabalham **de qualquer lugar**;
- dados e sistemas estão **espalhados em nuvens**;
- dispositivos **pessoais** se conectam ao ambiente corporativo;
- integrações com **fornecedores** são constantes.

Estar “dentro” da rede já não significa **estar seguro**. É como um evento com várias entradas: só a catraca principal não impede que alguém circule por áreas restritas sem **checar credenciais a cada sala**.

## 4) Princípios fundamentais do Zero Trust
1. **Verificação contínua**  
   Não basta verificar no login; revalide **identidade, dispositivo e contexto** ao longo da sessão.  
   *Exemplo:* se o usuário troca de rede Wi-Fi no meio do acesso, o sistema pode exigir uma nova confirmação.

2. **Menor privilégio possível (Least Privilege)**  
   Conceda **só o necessário** para a tarefa.  
   *Exemplo:* um colaborador do suporte vê registros de atendimento, mas não consegue exportar a base inteira.

3. **Suposição de violação (Assume Breach)**  
   Planeje como se as credenciais pudessem vazar e **contenha o dano** por segmentação e controles adicionais.  
   *Exemplo:* mesmo que um token seja roubado, o invasor **não alcança** o banco de produção por falta de rota e política.

## 5) Como o Zero Trust se organiza: dois “planos”

### 5.1 Plano de **Controle** (define regras)
- **Identidade adaptativa**: políticas que mudam conforme **comportamento, localização, risco e postura do dispositivo**.  
- **Redução do escopo de ameaça**: **segmentação** e **microsegmentação** para limitar o “raio de explosão”.  
- **Acesso orientado por políticas (Policy-Driven)**: decisões baseadas em **papéis, atributos, horário, sensibilidade do dado**.  
- **Zonas protegidas**: dados críticos isolados, com regras mais rígidas.

Pense em um **estúdio de gravação**: cada sala (mixagem, master, instrumentos) tem regras próprias; mesmo tendo crachá, o músico precisa **passar por checagens específicas** para cada sala.

### 5.2 Plano de **Dados** (faz cumprir as regras)
- **Sujeito/Sistema**: quem pede acesso (pessoa, app, serviço).  
- **Ponto de Aplicação de Políticas (PEP)**: “porteiro” que **permite ou nega** o acesso segundo as regras decididas no plano de controle.

É como um **elevador inteligente** onde o cartão libera apenas os andares previstos na sua reserva, e pode pedir confirmação extra se detectar algo diferente do padrão (horário, dispositivo).

## 6) Tecnologias e práticas comuns (exemplos)
- **IdP e IAM**: Okta, Azure AD, Google Cloud IAM (identidade, SSO, MFA, políticas de acesso condicional).  
- **Postura do dispositivo (EPP/EDR/XDR)**: Microsoft Defender for Endpoint, CrowdStrike (verifica se a “máquina está saudável”).  
- **Acesso à rede/recursos (ZTNA/SDP)**: Cloudflare Access, Zscaler/ZPA, Netskope (substituem VPN ampla por **acesso específico por app**).  
- **Microsegmentação**: Illumio, VMware NSX (limita movimento lateral).  
- **Proxy/Gateways e CASB**: filtra e inspecciona tráfego para apps SaaS e dados sensíveis.  
- **Gestão de segredos**: HashiCorp Vault, AWS Secrets Manager (chaves e segredos por política, com rotação).

Dica: Zero Trust funciona melhor quando essas peças **conversam entre si** (telemetria de risco alimentando políticas de acesso).

## 7) Exemplos práticos 
- **Coworking por sala**: você não recebe uma chave mestra do prédio; ganha **QR codes temporários** para cada sala reservada, e o app pode pedir nova validação se você mudar de celular.  
- **Aplicativo de banco**: mesmo logado, transferências acima de um valor exigem **reautenticação** (biometria), e podem bloquear se o aparelho estiver **sem proteção** (raiz/jailbreak).  
- **Centro de distribuição**: cada baia libera **apenas o conjunto de pacotes** daquele turno; mudar de baia precisa de **nova autorização**.

## 8) Como começar (roteiro de adoção em 4 passos)

1. **Mapeie identidades, dados e aplicações críticos** (quem acessa o quê, de onde e por quê).  
2. **Implemente MFA e acesso condicional** (comece pelos sistemas mais sensíveis).  
3. **Aplique segmentação** (separe ambientes: produção, homologação, terceiros).  
4. **Aumente a verificação contextual** (postura do dispositivo, localização, comportamento) e **automatize respostas** (bloqueio/quarentena).

## 9) Erros comuns (e como evitar)

- **Recriar a “VPN gigante”** com outro nome → use **ZTNA por aplicação**.  
- **Confiar só no login inicial** → habilite **revalidação** por risco e eventos.  
- **Ignorar dispositivos** → sem postura mínima (criptografia, antivírus, patch), **nega** acesso a dados críticos.  
- **Políticas estáticas** → revise periodicamente acessos e **remova privilégios** não usados.

## 10) Ponto-chave

Zero Trust **não é um produto**, é um **modo de operar**: verificar continuamente **quem** pede acesso, **em que condições**, **a quê**, e **por quanto tempo** — reduzindo privilégios, segmentando caminhos e reagindo a risco em tempo real.  

Assim, mesmo que algo falhe, o impacto fica **contido** e a organização continua **resiliente**.
