# Integridade 

## 1. O que é Integridade?

Integridade é o princípio que garante que **dados e informações permaneçam precisos, consistentes e inalterados** desde sua criação até o fim de seu ciclo de vida, **exceto quando modificados de forma autorizada**.

**Exemplo simples:**  

Entregar uma prova escolar e recebê-la de volta corrigida, mas com a certeza de que ninguém alterou suas respostas sem permissão.


## 2. Por que a Integridade é Importante?

### 2.1 Assegurar a Precisão dos Dados

Se os dados forem alterados sem autorização, as decisões tomadas com base neles podem ser incorretas.  
**Exemplo:** Uma transação financeira com valor adulterado pode levar a perdas significativas.

### 2.2 Manter a Confiança

Usuários e sistemas precisam confiar que as informações não foram manipuladas.  
**Exemplo:** Se o saldo da sua conta bancária for reduzido devido a adulteração de registros, a confiança no banco é perdida.

### 2.3 Garantir a Operabilidade dos Sistemas

Dados corrompidos podem provocar falhas no funcionamento de softwares e sistemas.  
**Exemplo:** Um arquivo de configuração alterado pode fazer um sistema parar de funcionar.

## 3. Métodos para Garantir a Integridade

### 3.1 Hashing

- **O que é:** Processo que transforma os dados em um valor fixo (hash) que funciona como uma "impressão digital".
- **Como ajuda:** Qualquer pequena alteração nos dados gera um hash completamente diferente, indicando possível adulteração.
- **Uso comum:** Verificar a integridade de arquivos baixados.


### 3.2 Assinaturas Digitais

- **O que é:** Combinação de hashing e criptografia para validar **integridade** e **autenticidade**.
- **Como funciona:** O arquivo é transformado em um hash, e esse hash é criptografado com a chave privada do remetente.
- **Benefício:** Se o arquivo for alterado, a assinatura digital se torna inválida.


### 3.3 Checksums

- **O que é:** Código gerado a partir dos dados para verificar se houve alteração durante a transmissão.
- **Como funciona:** O remetente envia o dado junto com o checksum; o destinatário recalcula o checksum e compara.
- **Benefício:** Detecta alterações ou corrupção de dados durante o envio.


### 3.4 Controles de Acesso

- **O que é:** Sistema de permissões para garantir que apenas pessoas autorizadas possam modificar os dados.
- **Benefício:** Reduz o risco de alterações acidentais ou maliciosas, tanto por usuários externos quanto internos.


### 3.5 Auditorias Regulares

- **O que é:** Revisão periódica de logs e operações do sistema.
- **Objetivo:** Detectar mudanças não autorizadas e agir rapidamente.
- **Benefício:** Garante monitoramento contínuo da integridade dos dados.


## 4. Ponto-Chave

- **Integridade** significa proteger a precisão e consistência das informações.
- **Hashing** é uma das principais ferramentas para verificar se dados foram alterados.
- Sem integridade, a **confiança**, a **tomada de decisão correta** e a **continuidade operacional** ficam comprometidas.


