# Engenharia Social

> **Objetivos de aprendizagem**
> - Entender por que ataques de engenharia social exploram pessoas antes de explorar tecnologia.
> - Relacionar técnicas comuns de manipulação com impactos reais em organizações e ambientes de automação.
> - Identificar controles práticos para reduzir fraude, vazamento de dados e acesso indevido.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/R9RcENv-jo4)

## 1. O que é engenharia social?

Engenharia social é o uso intencional de **manipulação psicológica, contexto e confiança** para induzir alguém a revelar dados, executar ações ou permitir acessos que não concederia em condições normais.

Na prática, o atacante não começa pela senha ou pela porta. Ele começa pela **pessoa**:

- cria urgência,
- finge legitimidade,
- usa linguagem familiar,
- escolhe o canal com menor resistência.

---

## 2. Por que ela funciona tão bem?

Ataques desse tipo funcionam porque pessoas tomam decisões rápidas com base em atalhos mentais.

Os atalhos mais explorados são:

- **autoridade:** "sou do suporte", "sou do financeiro", "sou do fornecedor";
- **urgência:** "precisa resolver agora";
- **rotina:** pedidos parecem compatíveis com o dia a dia;
- **confiança transferida:** a vítima confia na marca, no colega ou no processo;
- **baixa fricção:** clicar em um link ou abrir uma porta parece mais fácil do que verificar.

Em outras palavras, o ataque reduz a sensação de risco antes da vítima perceber o custo da ação.

---

## 3. Principais famílias de ataque

| Técnica | Como funciona | Melhor alvo | Impacto comum |
|---|---|---|---|
| **Phishing** | Mensagens falsas por e-mail, SMS, voz ou redes sociais | Usuários em geral | Roubo de credenciais, malware, fraude |
| **Pretexting** | História falsa usada para obter dados ou acesso | Recepção, help desk, RH, financeiro | Exposição de informação interna |
| **Impersonificação** | Atacante se passa por pessoa, marca ou autoridade | Funcionários e clientes | Transferência indevida, acesso físico ou lógico |
| **Baiting** | Isca física ou digital desperta curiosidade | Usuários finais | Execução de malware |
| **Fraudes e golpes** | Engano com foco financeiro | Financeiro, compras, clientes | Pagamentos indevidos e perda de dinheiro |
| **Tailgating/Piggybacking** | Entrada atrás de alguém autorizado | Portarias e áreas restritas | Acesso físico indevido |

Essas técnicas raramente aparecem isoladas. Um e-mail de phishing pode usar impersonificação, urgência e pretexting ao mesmo tempo.

---

## 4. Ciclo típico de um ataque de engenharia social

Um ataque comum costuma seguir esta sequência:

1. **Reconhecimento:** coleta de nomes, cargos, rotinas, fornecedores e linguagem interna.
2. **Construção do contexto:** criação de uma história crível para o alvo.
3. **Contato:** e-mail, ligação, mensagem, visita presencial ou rede social.
4. **Exploração:** pedido de senha, clique, pagamento, abertura de porta ou instalação de arquivo.
5. **Expansão:** uso do acesso obtido para fraude, movimentação lateral ou exfiltração.

Quanto melhor o atacante entende o processo interno, menor a chance de a vítima estranhar o pedido.

---

## 5. Impacto prático na organização

O dano não se limita a "um usuário caiu em um golpe". Em ambiente real, engenharia social pode gerar:

- vazamento de credenciais e dados pessoais;
- instalação inicial de malware ou ransomware;
- fraude financeira por boleto, PIX ou alteração de conta bancária;
- acesso físico a salas técnicas, racks, laboratórios e estações privilegiadas;
- interrupção operacional por uso indevido de contas ou equipamentos.

Em laboratórios, plantas e ambientes de automação, isso é especialmente relevante porque uma ação aparentemente simples, como liberar um visitante ou conectar um pendrive, pode afetar **HMIs, estações de engenharia, PLCs e dados de processo**.

---

## 6. Defesa em camadas

Reduzir engenharia social exige combinar pessoas, processo e tecnologia:

- **conscientização recorrente:** treinamento curto, frequente e contextualizado;
- **verificação fora da banda:** confirmar pedidos críticos por canal diferente;
- **princípio do menor privilégio:** limitar o dano quando alguém erra;
- **controles técnicos:** MFA, filtros de e-mail, proteção de domínio, EDR e bloqueio de macros;
- **controles físicos:** crachá, recepção, regra anti-tailgating e descarte seguro;
- **cultura de reporte:** reportar cedo deve ser visto como comportamento correto, não como culpa.

O objetivo não é criar paranoia. É criar um hábito profissional: **verificar antes de confiar**.

---

## 7. Mini-caso prático

Uma instituição de ensino recebe um e-mail que parece vir do setor de TI pedindo "reativação urgente" da conta institucional antes do fechamento do semestre.

- **Técnica usada:** phishing com impersonificação de marca e gatilho de urgência.
- **Erro provável:** usuário clica no link e informa a senha.
- **Impacto possível:** acesso ao e-mail, redefinição de outras contas e envio de novas mensagens maliciosas a partir de conta legítima.
- **Tratamento recomendado:** MFA, validação do domínio, botão de reporte de phishing e campanha curta de conscientização antes dos períodos críticos.

---

## 8. Perguntas de revisão rápida

1. Por que engenharia social costuma ser eficaz mesmo em organizações com boa tecnologia?
2. Qual a diferença entre explorar uma vulnerabilidade técnica e explorar uma rotina operacional?
3. Que controle reduz mais rápido o impacto de credenciais roubadas: senha mais forte ou MFA?

---

## 9. Fontes de referência

- [CERT.br - Fascículo Phishing e Outros Golpes](https://cartilha.cert.br/fasciculos/phishing-golpes/fasciculo-phishing-golpes.pdf)
- [CISA - Recognize and Report Phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing)
- [NIST - Training for Social Engineering and Phishing Awareness](https://www.nist.gov/itl/smallbusinesscyber/training)

