# Certificados Digitais (X.509) — Organização dos Principais Tópicos

## 1) Conceito e Finalidade

- **Certificado digital**: documento eletrônico **assinado digitalmente** que associa uma **chave pública** à **identidade** de um sujeito (pessoa, servidor, equipamento).
- **Padrão**: normalmente **X.509** dentro de uma **infraestrutura de chave pública (PKI)**.
- **Objetivos**: autenticação, confidencialidade (combinado a TLS), integridade e não repúdio.

> Exemplo industrial: um **gateway de dados** apresenta seu certificado X.509 ao **servidor SCADA** para comprovar identidade antes de enviar telemetria.

---

## 2) Estrutura de um Certificado X.509 (visão didática)

- **Sujeito (Subject)**: identidade do titular (CN, OU, O, L, C).
- **Chave pública** do titular (e algoritmo).
- **Emissor (Issuer)**: **Autoridade Certificadora (CA)** que assinou o certificado.
- **Validade**: datas de emissão e expiração.
- **Número de série** e **versão**.
- **Extensões** relevantes:
  - **Key Usage / Extended Key Usage** (ex.: TLS Server Auth, Code Signing).
  - **Subject Alternative Name (SAN)**.
  - **CRL Distribution Points** / **OCSP responder**.

> Exemplo industrial: certificados de **dispositivos de campo** incluem SAN com nomes DNS internos (ex.: `clp01.planta.local`) e/ou endereços IP estáticos de rede OT.

---

## 3) Tipos e Cenários de Uso

### 3.1 Wildcard Certificate (`*.dominio.com`)
- **Cobre todos os subdomínios** de um domínio.
- **Prós**: gestão simplificada, menor custo quando há muitos subdomínios.
- **Contras**: comprometimento do certificado **impacta todos** os subdomínios.
- **Uso sugerido**: portais de operação e relatórios sob o mesmo domínio.

> Ex.: `*.planta.empresa.com` atende `scada.planta.empresa.com`, `ihm.planta.empresa.com` e `hist.planta.empresa.com`.

### 3.2 Certificado com **SAN (Subject Alternative Name)**
- **Abrange múltiplos nomes/domínios** distintos no mesmo certificado.
- **Uso sugerido**: quando há **domínios diferentes** (ex.: `planta.empresa.com` e `engenharia.parceiro.net`).

### 3.3 **Single-sided** (autenticação de **uma via**)
- **Somente o servidor** apresenta certificado ao cliente.
- **Uso típico**: acesso HTTPS a dashboards/relatórios.

### 3.4 **Dual-sided / Mutual TLS (mTLS)** (autenticação de **duas vias**)
- **Servidor e cliente** apresentam certificados.
- **Pro**: segurança elevada.
- **Custo**: maior complexidade e processamento.
- **Uso sugerido**: **links críticos** OT ↔ data center, backhauls entre plantas.

### 3.5 **Self-signed**
- Assinados pelo **próprio titular** (sem CA externa).
- **Pro**: útil em **testes** e **ambientes fechados** com confiança pré-estabelecida.
- **Contra**: navegadores/clients exibem **alertas**; evitar em exposição pública.

### 3.6 **Third-party** (emitidos por CA confiável)
- Assinados por **CA reconhecida** (trust stores de SO/navegadores).
- **Preferência**: aplicações públicas e integrações externas.

---

## 4) Cadeia de Confiança (Root of Trust)

- **Raiz (Root CA)** → **CA Intermediária** → **Certificado final**.
- O cliente valida a **cadeia** até uma **Root CA confiável** no trust store.
- Se a **Root** for comprometida, a **cadeia inteira** perde confiança (revogação e reemissão necessárias).

> Exemplo industrial: clientes de manutenção remota confiam na **Root CA corporativa** que assina certificados de gateways e aplicações industriais.

---

## 5) Papéis e Processos na Emissão

### 5.1 **CA (Certificate Authority)**
- Emite/assina certificados; mantém políticas e práticas de certificação.

### 5.2 **RA (Registration Authority)**
- **Valida a identidade** do solicitante e **intermedeia** a requisição para a CA.

### 5.3 **CSR (Certificate Signing Request)**
- **Bloco codificado** enviado à CA/RA contendo dados do solicitante e **chave pública**.
- A **chave privada** permanece com o solicitante (nunca sai do host seguro).

> Exemplo industrial: um **servidor de historiador** gera o CSR localmente; a chave privada fica protegida por **TPM/HSM** do servidor.

---

## 6) Revogação e Status de Certificados

### 6.1 **CRL (Certificate Revocation List)**
- Lista pública de **certificados revogados** pela CA.
- Consultada para **negar confiança** a certificados comprometidos ou inválidos.

### 6.2 **OCSP (Online Certificate Status Protocol)**
- Consulta **pontual** ao status de **um certificado**.
- **Mais ágil** que baixar CRL completa, porém exige disponibilidade do responder.

### 6.3 **OCSP Stapling**
- O **servidor** “anexa” (staple) uma resposta OCSP **recente** durante o **handshake TLS**.
- **Benefícios**: menos latência e menor dependência de consulta externa pelo cliente.

---

## 7) Public Key Pinning (conceito)

- **Pinning** de chaves públicas para **reduzir risco** de certificados fraudulentos.
- Cliente armazena “pins” de chaves confiáveis e compara em conexões futuras.
- **Observação**: requer **gestão cuidadosa** (rotação/errata pode causar indisponibilidade).

> Exemplo industrial: aplicações de engenharia podem realizar **pinning** da CA interna para evitar conexão com serviços falsos em redes remotas.

---

## 8) Key Escrow e Key Recovery

### 8.1 **Key Escrow**
- Cópia segura de **chaves privadas** armazenada sob **controles rigorosos**.
- **Uso**: recuperação em caso de perda/saída de colaborador, exigências legais.
- **Risco**: ataque ao escrow compromete grande volume de dados; aplicar **segregação de funções** (dupla custódia) e **auditoria**.

### 8.2 **Key Recovery Agent**
- Ferramentas/processos para **restaurar** chaves perdidas/corrompidas.
- **Abrangência**: incluem chaves da **CA interna**, essenciais para continuidade do serviço.

> Exemplo industrial: chaves usadas para **assinar firmware** ficam sob escrow com liberação somente mediante **duas aprovações** (segregação de deveres).

---

## 9) Boas Práticas Operacionais (ambiente industrial)

- **Inventário** e ciclo de vida: emitir, renovar **antes da expiração**, revogar quando necessário.
- **Automação**: integração com CMDB/CI/CD para **provisionar e rotacionar** certificados em servidores/CLPs/IHMs.
- **Armazenamento de chaves privadas**: **HSM/TPM/KMS**, permissões mínimas, backup seguro.
- **mTLS** para canais críticos entre **gateways ↔ servidores OT/IT**.
- **SAN/Wildcard**: escolher conforme **arquitetura de nomes**; avaliar i
