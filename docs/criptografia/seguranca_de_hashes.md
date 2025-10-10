# Aumentando a Segurança de Hashes

Organização dos principais tópicos da aula sobre **segurança de hashes**: ataques mais comuns, por que acontecem e como **endurecer** (hardening) o armazenamento/uso de hashes. Os exemplos são discretamente alinhados a cenários industriais (CLPs, SCADA, gateways, telemetria, manutenção remota).

---

## 1) Ataques que exploram hashes

### 1.1 Pass-the-Hash (PtH)
- **Ideia**: o atacante **não precisa** descobrir a senha em texto-claro; basta **roubar o hash** de autenticação e reutilizá-lo para se autenticar como a vítima.
- **Superfície**: coleta de credenciais/LSA, serviços mal configurados, estações sem patch, ferramentas de colheita de credenciais.
- **Impacto**: **movimentação lateral** e escalonamento de privilégios.

> Exemplo implícito: uma estação de engenharia usada para manutenção de CLPs mantém credenciais em cache; se comprometida, o invasor reutiliza o hash para acessar o servidor SCADA.

### 1.2 Birthday Attack (Colisão)
- **Ideia**: explorar probabilidade de **duas entradas diferentes** gerarem o **mesmo digest** (colisão), enfraquecendo verificações baseadas apenas no hash.
- **Por que funciona**: hashes **curtos** (ex.: 128 bits em MD5) oferecem um espaço menor de saídas, aumentando chances de colisão.
- **Mitigação de alto nível**: usar **hashes mais longos/atuais** (ex.: SHA-256/512, SHA-3).

---

## 2) Estratégias para aumentar a segurança

### 2.1 Key Stretching
- **O que é**: aplicar funções deliberadamente **custosas** para derivar a chave do usuário a partir da senha, tornando ataque de força bruta muito **mais caro**.
- **Mecanismos**: **PBKDF2**, **bcrypt**, **scrypt**, **Argon2** (memória-hard).  
- **Boas práticas**:
  - Ajustar **iteração/custo** periodicamente (acompanhar evolução de hardware).
  - Usar **parâmetros por usuário** (ex.: fator de custo, salt).
  - Padronizar **Argon2id** quando possível (resistente a GPU/ASIC).

> Exemplo implícito: repositório de credenciais de técnicos de campo usa **Argon2id**; um atacante que vaze o banco enfrentará custo alto por tentativa.

### 2.2 Salting
- **O que é**: adicionar **valor aleatório único por senha** antes de hashear.  
- **Por que**:
  - Mesma senha → **hashes diferentes** (por usuário/registro).
  - **Inutiliza rainbow tables** genéricas.
- **Prática**:
  - Salt **alto-entropia** (≥16 bytes) gerado por CSPRNG.
  - **Armazenar o salt** em claro junto do hash (é esperado).
  - Nunca **reutilizar** salt entre usuários/registros.

> Exemplo implícito: o servidor de autenticação de uma célula de manufatura armazena `salt + hash` para operadores de turno; dois operadores com senha “temporária” não terão o mesmo digest.

### 2.3 Nonce (Number used once)
- **O que é**: valor **único/efêmero** por transação para impedir **replay**.  
- **Uso típico**: desafios em autenticação, protocolos de mensagem (incluído no cálculo HMAC/assinatura).
- **Resultado**: mesmo conteúdo → **saída diferente** a cada operação.

> Exemplo implícito: gateway de telemetria inclui **nonce + timestamp** em cada pacote e calcula **HMAC-SHA256**; pacotes repetidos são rejeitados.

### 2.4 Limite de tentativas e rate limiting
- **Conta**: bloquear após **poucas falhas** (ex.: 3–5), com backoff/tempo de espera.
- **Serviço/API**: **rate limiting** por IP/chave, CAPTCHA adaptativo onde couber.
- **Objetivo**: desincentivar **brute force** e **credential stuffing**.

---

## 3) Endurecimento complementar (reduz risco de PtH)

- **Atualizações e correções**: manter **SO e aplicações** sempre em dia.
- **Privilégio mínimo**: contas separadas para **admin** e **uso diário**; evitar admins locais idênticos em múltiplos hosts.
- **MFA**: combinar algo que você **tem/é** com a senha; mesmo com hash vazado, acesso é barrado.
- **Segmentação de rede**: isolar **estações de engenharia**, SCADA e ativos críticos; reduzir “saltos” laterais.
- **Sessões/credenciais**: minimizar cache de credenciais; encerrar sessões remotas; políticas para **senha única por sistema**.
- **Auditoria e detecção**: alertas para **logons anômalos**, falhas repetidas, uso de **hashes/NTLM** incomuns; trilhas em servidor de logs.
- **Protocolos**: preferir **Kerberos** a NTLM onde possível; exigir **assinatura**/selagem em SMB; TLS 1.2+ com **suites modernas**.

> Exemplo implícito: acesso remoto de manutenção exige **MFA**, salto via **bastião** segmentado e contas **just-in-time** para tarefas elevadas.

---

## 4) Escolhas práticas (resumo rápido)

| Objetivo                          | Recomende                       | Observações |
|----------------------------------|---------------------------------|-------------|
| Armazenar senhas                 | **Argon2id** (ou bcrypt/scrypt) | Parametrize custo e memória; salt único por registro |
| Integridade + autenticidade msg. | **HMAC-SHA256**                 | Inclua **nonce + timestamp** para anti-replay |
| Verificação de arquivo/firmware  | **SHA-256 / SHA-3-256**         | Publique `.sha256`; valide antes de promover/instalar |
| Proteger contra PtH              | **MFA + patching + segmentação**| Privilégio mínimo; monitoramento e logs consistentes |
| Reduzir colisões                 | **SHA-256/512, SHA-3**          | Evitar MD5/SHA-1 em novos sistemas |

---

## 5) Checklist de implementação

- [ ] Senhas derivadas com **Argon2id/bcrypt/scrypt (com salt único)**  
- [ ] Parâmetros de **custo/iteração** revisados regularmente  
- [ ] **Nonce + timestamp** em mensagens críticas; rejeição de replay  
- [ ] **HMAC-SHA256** para integridade/autenticidade de telemetria  
- [ ] **MFA** em acessos administrativos e manutenção remota  
- [ ] **Rate limiting** e **lockout** progressivo em tentativas de login  
- [ ] Hosts críticos **atualizados** e com **least privilege**  
- [ ] **Segmentação** entre estações de engenharia, SCADA e TI corporativo  
- [ ] Auditoria e **alertas** para padrões de logon anômalos

---

## 6) Exercícios de fixação (curtos)

1. Por que **salting** torna **rainbow tables** ineficazes?  
2. Ao migrar um repositório de senhas legado em MD5, quais **duas ações** você prioriza?  
3. Em um protocolo de telemetria, como **nonce + HMAC** mitigam **replay**?  
4. Cite **três** medidas que reduzem o risco de **Pass-the-Hash** em estações de engenharia.

**Gabarito resumido:**  
1. O salt **único** por registro força uma tabela por salt, tornando inviável pré-computação generalista.  
2. (a) Migrar para **Argon2id/bcrypt** com sal e custo adequado; (b) **redefinir senhas** e invalidar hashes antigos.  
3. O nonce muda a entrada a cada mensagem; o HMAC garante integridade/autenticidade — mensagens repetidas **não validam**.  
4. **MFA**, **patching** consistente, **privilégio mínimo**, **segmentação de rede**, reduzir **cache** de credenciais e monitorar logons.

---

## 7) Conclusões chave

- **PtH** reutiliza hashes; mitigue com **MFA**, higiene de credenciais e arquitetura segmentada.  
- **Birthday attacks** exploram colisões; prefira **SHA-256/512 ou SHA-3**.  
- **Key stretching + salting + nonce + controle de tentativas** elevam o custo do atacante e protegem fluxos e armazenamento.  
- Em ambientes industriais, aplicar essas medidas mantém **confiabilidade operacional** e **segurança** em links e ativos críticos.

---
