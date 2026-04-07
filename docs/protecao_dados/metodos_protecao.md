# Métodos de Proteção de Dados

> **Objetivos de aprendizagem**
> - Comparar métodos de proteção aplicados a diferentes tipos e estados de dados.
> - Entender quando usar criptografia, hashing, tokenização, mascaramento e segmentação.
> - Escolher combinações de controles coerentes com o risco, como pede a Security+.
>
> **Tempo estimado:** 22 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. Não existe um único método suficiente

Proteger dados exige combinação de técnicas. Cada método resolve um problema específico:

- confidencialidade;
- integridade;
- redução de exposição;
- limitação de acesso;
- contenção de impacto.

Quando a pergunta é "qual controle aplicar?", a melhor resposta depende do contexto do dado.

---

## 2. Comparativo rápido

| Método | Melhor uso | Entregável | Limitação |
|---|---|---|---|
| **Criptografia** | proteger confidencialidade | dado ilegível sem chave | não controla quem exporta dado já aberto |
| **Hashing** | verificar integridade e proteger segredos específicos | digest ou verificação | não substitui criptografia |
| **Mascaramento** | ocultar parte do valor em visualização | exposição reduzida | não protege o dado original na origem |
| **Tokenização** | substituir dado sensível por referência | menor exposição operacional | depende de cofre ou mapeamento seguro |
| **Segmentação** | limitar alcance e movimentação | contenção lateral | não substitui proteção do dado |
| **Permissões** | definir quem pode acessar ou alterar | controle de acesso | falha se privilégio estiver excessivo |
| **Geofencing/localização** | restringir uso por região | limitação contextual | não resolve vazamento por credencial válida |

---

## 3. Combinações úteis

- dado pessoal em SaaS: classificação + DLP + tokenização + revisão de acesso;
- backup crítico: criptografia + retenção + imutabilidade + teste de restauração;
- firmware ou configuração: hash para integridade + assinatura + acesso restrito;
- base de teste: mascaramento ou tokenização para reduzir exposição.

> Analogia: proteger dados é como proteger um laboratório. Tranca, câmera, identificação e registro resolvem problemas diferentes; usar só um deles é insuficiente.

---

## 4. Como isso aparece na Security+

Na prova, algumas diferenças são recorrentes:

- criptografia protege confidencialidade;
- hashing protege integridade e verificação;
- tokenização reduz exposição operacional;
- mascaramento ajuda visualização segura;
- segmentação e permissões limitam o dano.

---

## 5. Mini-caso prático

Uma equipe compartilha base real de clientes com desenvolvedores para testar uma nova integração.

Melhor abordagem:

- evitar o dado real quando possível;
- aplicar mascaramento ou tokenização;
- restringir acesso por função;
- registrar exportações e compartilhamentos.

O erro mais comum é usar apenas senha ou compartilhamento restrito e chamar isso de proteção de dados.

---

## 6. Perguntas de revisão rápida

1. Qual a diferença entre hashing e criptografia?
2. Quando tokenização costuma ser melhor que mascaramento?
3. Por que permissões não substituem criptografia?

---

## 7. Fontes de referência

- NIST SP 800-122  
  https://csrc.nist.gov/pubs/sp/800/122/final
- CISA Cybersecurity Performance Goals  
  https://www.cisa.gov/cybersecurity-performance-goals
- PCI Security Standards Council  
  https://www.pcisecuritystandards.org/
