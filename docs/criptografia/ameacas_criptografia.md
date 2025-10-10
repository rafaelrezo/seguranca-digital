# Ameaças à Criptografia lsou Ataques Criptográficos

Os **ataques criptográficos** são técnicas utilizadas por adversários para explorar vulnerabilidades em sistemas de criptografia, com o objetivo de comprometer a **confidencialidade, integridade e autenticidade** das informações.  
Esses ataques podem envolver desde a exploração de falhas em algoritmos e protocolos até o uso de força bruta para adivinhar chaves.

Nesta seção, abordaremos três categorias importantes:  
- **Ataques de downgrade**  
- **Ataques de colisão**  
- **Ameaça da computação quântica**

---

## 1. Ataques de Downgrade

- **Definição**: também conhecidos como *rollback attacks*, têm como objetivo forçar um sistema a usar um protocolo ou algoritmo de criptografia mais fraco ou obsoleto.  
- **Funcionamento**: aproveitam o fato de muitos sistemas manterem compatibilidade retroativa, aceitando versões antigas de protocolos.  
- **Exemplo prático**: um invasor pode manipular a negociação entre dois dispositivos para que utilizem SSL 3.0 em vez de TLS moderno, explorando vulnerabilidades conhecidas como no ataque **POODLE (Padding Oracle On Downgraded Legacy Encryption)**.  
- **Impacto**: comunicações aparentemente seguras acabam ficando expostas, facilitando a interceptação de dados sensíveis em transações ou controles de sistemas industriais.  

---

## 2. Ataques de Colisão

- **Definição**: ocorrem quando dois conteúdos diferentes resultam no mesmo valor de *hash*.  
- **Risco**: como *hashes* são usados para validar integridade de arquivos, um invasor pode criar um arquivo malicioso com o mesmo *hash* de um arquivo legítimo.  
- **Histórico**: o algoritmo **MD5** foi amplamente abandonado após pesquisadores demonstrarem colisões práticas, permitindo falsificação de certificados digitais.  
- **Princípio matemático**: o chamado **Paradoxo do Aniversário** mostra que a probabilidade de colisões é maior do que se imagina (em um grupo de apenas 23 pessoas, já existe mais de 50% de chance de duas terem o mesmo aniversário).  
- **Exemplo prático**: em ambientes corporativos, se uma atualização de software for validada apenas por *hash* em MD5, um atacante poderia distribuir uma versão adulterada sem ser detectado.  

---

## 3. Computação Quântica e Criptografia

- **Definição**: a computação quântica utiliza **qubits**, que podem representar múltiplos estados simultaneamente graças à superposição.  
- **Força**: ao processar muitos cálculos em paralelo, um computador quântico pode resolver problemas matemáticos considerados inviáveis para máquinas clássicas.  
- **Ameaça**: algoritmos assimétricos, como **RSA** e **ECC**, baseiam-se na dificuldade de fatorar grandes números primos. Computadores quânticos poderiam quebrá-los em segundos.  
- **Estado atual**: a tecnologia ainda está em desenvolvimento, com previsão de uso em larga escala apenas em governos e grandes empresas na década de 2030.  
- **Post-Quantum Cryptography (PQC)**: para mitigar riscos futuros, já existem pesquisas em algoritmos resistentes a ataques quânticos, como:  
  - **CRYSTALS-Kyber** (criptografia)  
  - **CRYSTALS-Dilithium, FALCON, SPHINCS+** (assinaturas digitais)  

---

## 4. Conclusão

Os ataques criptográficos destacam a necessidade de constante atualização de protocolos e algoritmos:  

- **Downgrade attacks** → exploram compatibilidade com padrões antigos e inseguros.  
- **Collision attacks** → exploram falhas em funções de *hash*, podendo permitir falsificação de dados e certificados.  
- **Quantum threat** → ameaça futura aos algoritmos atuais, exigindo preparação com **criptografia pós-quântica**.  

Em setores que dependem de alta confiabilidade — como **indústrias, sistemas financeiros e infraestruturas críticas** — a atenção a esses ataques é fundamental.  
Adotar algoritmos modernos, eliminar suporte a padrões obsoletos e acompanhar a evolução da computação quântica são medidas essenciais para manter a segurança no longo prazo.
