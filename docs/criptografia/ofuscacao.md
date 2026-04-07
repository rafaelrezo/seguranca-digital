# Ofuscação, Tokenização e Mascaramento

> **Objetivos de aprendizagem**
> - Diferenciar ofuscação, tokenização, mascaramento e esteganografia.
> - Entender por que essas técnicas complementam, mas não substituem, criptografia.
> - Escolher a técnica mais adequada para reduzir exposição de dados.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/FXle5aD7dXU)

## 1. O que essas técnicas fazem

Essas técnicas existem para reduzir exposição de informação sensível em situações em que o dado precisa ser exibido, testado, compartilhado ou processado parcialmente.

Elas não têm todas o mesmo objetivo:

- algumas escondem o valor;
- outras substituem o valor;
- outras apenas dificultam leitura ou engenharia reversa.

---

## 2. Comparativo rápido

| Técnica | Melhor uso | Resultado | Limitação |
|---|---|---|---|
| **Mascaramento** | exibição parcial e ambientes de teste | parte do valor fica ocultada | dado real continua existindo na origem |
| **Tokenização** | reduzir exposição operacional | valor sensível vira referência | depende de cofre e mapeamento seguro |
| **Ofuscação** | dificultar compreensão de código ou dado | leitura mais difícil | não garante confidencialidade forte |
| **Esteganografia** | ocultar existência de mensagem | dado fica embutido em outro meio | não substitui proteção criptográfica |

---

## 3. Quando usar

- **Mascaramento**: relatórios, telas, demonstrações e logs.
- **Tokenização**: pagamentos, identificadores sensíveis e integrações.
- **Ofuscação**: distribuição de código e redução de exposição casual.
- **Esteganografia**: cenário específico e menos comum em defesa corporativa.

O erro clássico é tratar qualquer uma dessas técnicas como substituta universal de criptografia.

---

## 4. O que a Security+ costuma explorar

Questões costumam cobrar:

- qual técnica preserva formato sem revelar o valor;
- qual reduz exposição em sistemas que não precisam do dado real;
- qual método é melhor para desenvolvimento e homologação;
- por que ofuscação não equivale a criptografia.

> Analogia: mascaramento é como cobrir parte de um crachá; tokenização é trocar o crachá real por um identificador temporário; criptografia é guardar o crachá em cofre e só abrir com a chave certa.

---

## 5. Mini-caso prático

Uma equipe de desenvolvimento precisa testar integração com base de alunos, mas não deve receber CPFs reais.

Solução mais coerente:

- tokenizar ou mascarar os dados, conforme a necessidade do teste;
- manter o dado real fora do ambiente de desenvolvimento;
- registrar quem acessa o cofre ou o mapeamento.

---

## 6. Perguntas de revisão rápida

1. Qual a diferença entre tokenização e mascaramento?
2. Por que ofuscação não substitui criptografia?
3. Em que cenário o dado real pode deixar de circular graças à tokenização?

---

## 7. Fontes de referência

- PCI Security Standards Council  
  https://www.pcisecuritystandards.org/
- Microsoft Learn, Dynamic Data Masking  
  https://learn.microsoft.com/sql/relational-databases/security/dynamic-data-masking
- NIST SP 800-122  
  https://csrc.nist.gov/pubs/sp/800/122/final
