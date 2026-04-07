# Ameaças à Criptografia

> **Objetivos de aprendizagem**
> - Identificar falhas comuns em protocolos, algoritmos e gestão de chaves.
> - Diferenciar downgrade, colisão, uso de algoritmo obsoleto e risco pós-quântico.
> - Relacionar ameaças criptográficas com decisões práticas de mitigação.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

## 1. Onde a criptografia falha na prática

Ataques criptográficos nem sempre "quebram a matemática". Muitas vezes eles exploram:

- protocolo antigo;
- algoritmo obsoleto;
- má implementação;
- chave mal protegida;
- validação incompleta de certificado;
- compatibilidade legada mantida além do aceitável.

Ou seja: o sistema falha mais por decisão ruim de arquitetura e operação do que por teoria pura.

---

## 2. Downgrade e legado inseguro

Ataque de downgrade tenta forçar uso de versão ou parâmetro mais fraco.

Exemplos típicos:

- aceitar protocolo legado por compatibilidade;
- manter cifra obsoleta;
- permitir fallback inseguro.

Mitigação prática:

- desabilitar protocolos e cifras antigas;
- revisar configuração de TLS;
- acompanhar baseline atualizado.

---

## 3. Colisões e integridade fraca

Colisão ocorre quando duas entradas diferentes produzem o mesmo hash.

Isso se torna problema quando a organização ainda depende de algoritmos fracos para:

- verificar integridade;
- assinar artefatos;
- validar software.

Na prova, o raciocínio costuma ser direto: `MD5` e `SHA-1` não são escolha moderna para cenários críticos.

---

## 4. Gestão de chaves ruim também é ameaça

Mesmo com algoritmo forte, o risco aumenta quando:

- a chave é compartilhada por muitas pessoas;
- não há rotação;
- a chave privada fica exposta no servidor;
- backups de segredo não são protegidos;
- certificados vencem sem renovação planejada.

> Analogia: fechadura forte com chave largada na recepção continua sendo falha de segurança.

---

## 5. Criptografia pós-quântica

O risco pós-quântico importa porque algoritmos assimétricos tradicionais podem perder robustez no futuro diante de capacidade quântica relevante.

O ponto prático hoje não é pânico, e sim preparação:

- inventariar onde RSA e ECC são críticos;
- acompanhar recomendações do NIST;
- evitar dependência desnecessária de legado difícil de trocar.

---

## 6. Mini-caso prático

Uma organização valida atualização de software apenas por hash fraco e ainda mantém compatibilidade com protocolo legado em serviço exposto.

Consequências:

- risco de adulteração passar despercebida;
- chance de negociação criptográfica insegura;
- dificuldade de justificar postura madura em auditoria.

Resposta correta: retirar legado, reforçar verificação de integridade e revisar gestão de chaves e certificados.

---

## 7. Perguntas de revisão rápida

1. O que um ataque de downgrade tenta explorar?
2. Por que colisão importa para integridade?
3. Qual é o primeiro passo prático de preparação para criptografia pós-quântica?

---

## 8. Fontes de referência

- NIST SP 800-131A Rev. 2, Transitioning the Use of Cryptographic Algorithms and Key Lengths  
  https://csrc.nist.gov/pubs/sp/800/131/a/r2/final
- NIST Post-Quantum Cryptography  
  https://csrc.nist.gov/projects/post-quantum-cryptography
- NIST SP 800-52 Rev. 2  
  https://csrc.nist.gov/pubs/sp/800/52/r2/final
