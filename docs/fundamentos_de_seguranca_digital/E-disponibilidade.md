# Disponibilidade 
## 1. O que é Disponibilidade?

Disponibilidade é o princípio que garante que **informações, sistemas e recursos estejam acessíveis e operacionais** para usuários autorizados sempre que necessário.

**Exemplo simples:**  

Você tem uma reunião online marcada para as 10h, mas minutos antes a internet cai.  
Assim como você espera que sua internet funcione nesse momento crítico, empresas precisam que seus sistemas e serviços estejam sempre disponíveis para atender clientes e manter suas operações.



## 2. Por que a Disponibilidade é Importante?

### 2.1 Continuidade de Negócios

Cada minuto de inatividade pode gerar prejuízos significativos:

- E-commerce: perda direta de vendas.
- Hospital: risco à vida se sistemas críticos ficarem indisponíveis.
- Telecomunicações: até **US$ 33 mil de prejuízo por minuto** de indisponibilidade.

### 2.2 Manutenção da Confiança do Cliente

Se clientes não conseguem acessar contas, comprar produtos ou usar serviços, a confiança na empresa cai.  
Indisponibilidades prolongadas podem levá-los a buscar concorrentes.

### 2.3 Reputação Organizacional

Falhas frequentes prejudicam a imagem da organização e dificultam a reconquista da confiança de clientes que migraram para outras empresas.



## 3. Níveis de Disponibilidade e "Números de Nove"

A disponibilidade de um sistema é muitas vezes expressa pelo percentual de **uptime** (tempo em funcionamento), medido em "números de nove":

| Nível de Disponibilidade | Percentual  | Tempo Máx. de Inatividade por Ano |
|--------------------------|-------------|------------------------------------|
| **99%**                  | Dois noves  | ~3,65 dias                         |
| **99,9%**                | Três noves  | ~8,76 horas                        |
| **99,999%**              | Cinco noves (padrão ouro) | ~5,26 minutos |

Quanto mais “noves”, maior o investimento necessário em infraestrutura, monitoramento e recuperação.



## 4. Estratégia Central: Redundância

**Redundância** é a duplicação de componentes ou funções críticas para garantir que, se um falhar, outro assuma imediatamente, mantendo o serviço ativo.

**Exemplo:**  

Ter internet de três provedores diferentes — se um falhar, outro assume automaticamente.


## 5. Tipos de Redundância

### 5.1 Servidor

Uso de múltiplos servidores em **balanceamento de carga** ou **failover**, garantindo que, se um falhar ou ficar sobrecarregado, outro continue atendendo.

### 5.2 Dados

Armazenamento de informações em múltiplos locais.  
Pode ser local (ex.: RAID) ou combinado com **backup na nuvem**, garantindo acesso mesmo se um sistema falhar.

### 5.3 Rede

Múltiplos caminhos ou provedores para tráfego de dados.  
**Exemplo:**

 Internet via fibra, link de rádio e conexão 4G como backup.

### 5.4 Energia

Fontes alternativas como **geradores** e **no-breaks (UPS)** para manter equipamentos funcionando durante quedas de energia.



## 6. Ponto-Chave

- **Disponibilidade** e **redundância** andam juntas.  
- Garantir alta disponibilidade exige planejamento, investimento e monitoramento constantes.  
- No mundo digital, **tempo é dinheiro**: cada segundo de indisponibilidade pode gerar prejuízos financeiros e perda de confiança.
