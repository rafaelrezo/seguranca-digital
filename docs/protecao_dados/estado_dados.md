# Estados dos Dados

Compreender os diferentes **estados dos dados** é essencial para garantir a proteção da informação ao longo de todo o seu ciclo de vida.  
Cada estado exige medidas de segurança específicas para mitigar riscos de acesso não autorizado, vazamento ou manipulação indevida.

Os três estados principais são:
- **Dados em Repouso (Data at Rest)**  
- **Dados em Trânsito (Data in Transit)**  
- **Dados em Uso (Data in Use)**  

---

## 1. Dados em Repouso
São os dados armazenados em **bancos de dados, sistemas de arquivos ou outros repositórios**.  
Por estarem estáticos, são alvos atrativos para agentes maliciosos.

### Técnicas de Proteção
- **Criptografia de Disco Completo (Full Disk Encryption)** – protege todo o dispositivo de armazenamento.  
- **Criptografia de Partição** – protege apenas uma partição, permitindo segmentar informações.  
- **Criptografia de Arquivo** – aplicada a documentos específicos que contêm dados sensíveis.  
- **Criptografia de Volume/Pasta** – aplicada a grupos de arquivos e diretórios.  
- **Criptografia de Banco de Dados** – em nível de coluna, linha ou tabela.  
- **Criptografia de Registro** – aplicada a campos individuais dentro de uma tabela.  

*Exemplo implícito*: relatórios de calibração de máquinas em um banco de dados podem ser criptografados em nível de registro, garantindo que apenas engenheiros autorizados acessem determinados parâmetros.

---

## 2. Dados em Trânsito
São os dados que estão **em movimento** entre sistemas, redes ou dispositivos.  
Por estarem expostos a interceptações durante o transporte, exigem canais seguros de comunicação.

### Técnicas de Proteção
- **SSL/TLS** – protocolos para comunicação segura em navegação web, e-mails e integrações de sistemas.  
- **VPN (Virtual Private Network)** – cria um túnel criptografado em redes inseguras, como a Internet.  
- **IPSec** – autentica e criptografa pacotes IP, garantindo integridade e confidencialidade.  

*Exemplo implícito*: quando dados de sensores de uma linha de produção são transmitidos para o sistema supervisório em outro setor, é fundamental usar protocolos seguros como TLS ou VPN para evitar espionagem industrial.

---

## 3. Dados em Uso
São os dados que estão sendo **processados ativamente** (criando, lendo, atualizando ou excluindo).  
Apesar de muitas vezes negligenciados, são vulneráveis porque precisam estar descriptografados para processamento.

### Técnicas de Proteção
- **Criptografia em nível de aplicação** – protege dados durante operações críticas.  
- **Controles de Acesso** – garantem que apenas usuários autorizados executem operações.  
- **Ambientes Isolados (Secure Enclaves)** – permitem processar dados de forma protegida na memória.  
- **Tecnologias de hardware** – como o **Intel SGX (Software Guard Extensions)**, que protege dados em memória contra processos não confiáveis.  

*Exemplo implícito*: algoritmos de controle que ajustam parâmetros em tempo real precisam processar dados em uso. A utilização de enclaves ou ambientes isolados ajuda a proteger essas informações enquanto são manipuladas.

---

## 4. Resumo das Estratégias por Estado

| Estado do Dado      | Principais Riscos                 | Medidas de Proteção                          | Exemplo Industrial |
|---------------------|-----------------------------------|----------------------------------------------|--------------------|
| **Em Repouso**      | Acesso indevido a repositórios    | Criptografia de disco, partição, banco/registro | Histórico de manutenção armazenado |
| **Em Trânsito**     | Interceptação ou espionagem       | TLS, VPN, IPSec                              | Transmissão de dados de sensores |
| **Em Uso**          | Exposição em memória/processamento | Criptografia em aplicação, enclaves, ACLs    | Ajuste de parâmetros em controladores |

