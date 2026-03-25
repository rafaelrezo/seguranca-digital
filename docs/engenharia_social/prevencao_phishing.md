# Prevenção de Phishing em Organizações

> **Objetivos de aprendizagem**
> - Organizar a prevenção de phishing em camadas técnicas, humanas e processuais.
> - Relacionar controles como MFA, autenticação de e-mail e reporte rápido com redução de impacto.
> - Definir uma resposta mínima quando uma mensagem suspeita chega ao usuário.
>
> **Tempo estimado:** 16 minutos

## Vídeo da aula

![type:video](https://www.youtube.com/embed/Q1uOhtm6aSo)

## 1. Prevenção eficaz não depende de um único controle

Phishing não é bloqueado apenas com antivírus nem apenas com treinamento.

Organizações maduras tratam o problema em três camadas:

- **usuário:** reconhecer sinais e reportar cedo;
- **processo:** validar pagamentos, credenciais e mudanças cadastrais;
- **tecnologia:** filtrar, autenticar, monitorar e conter.

---

## 2. Comportamentos que precisam virar rotina

Os hábitos mais úteis para o usuário são:

- desconfiar de pedidos urgentes fora do fluxo;
- nunca informar senha ou código MFA;
- conferir domínio antes de clicar;
- acessar portais digitando a URL ou usando favoritos confiáveis;
- confirmar pedidos críticos por outro canal.

A meta do treinamento não é decorar golpes. É desenvolver **comportamento de verificação**.

---

## 3. Controles técnicos mais importantes

| Controle | Função | Limitação prática |
|---|---|---|
| **SPF, DKIM e DMARC** | Reduzir spoofing de domínio | Não impede todo tipo de phishing |
| **Secure Email Gateway** | Filtrar links, anexos e reputação | Pode falhar em campanhas muito novas |
| **MFA** | Reduzir impacto de senha roubada | OTP por SMS ainda pode ser capturado |
| **Proteção de navegador/URL** | Bloquear páginas maliciosas conhecidas | Depende de atualização e cobertura |
| **EDR/antimalware** | Conter execução de payloads | Age depois do clique, não antes |

Controle bom não elimina a tentativa. Ele reduz a chance de sucesso e o tamanho do dano.

---

## 4. Processo de resposta ao e-mail suspeito

Uma resposta mínima bem definida costuma seguir este fluxo:

1. usuário reporta sem interagir;
2. time de segurança analisa remetente, link, cabeçalhos e anexo;
3. se confirmado, a mensagem é removida de outras caixas;
4. usuários potencialmente expostos são orientados;
5. se houve clique, inicia-se contenção e troca de credenciais.

Sem fluxo claro, o phishing vira um problema repetido e mal documentado.

---

## 5. Métricas úteis para melhoria contínua

Métricas mais úteis do que "quem errou" são:

- taxa de reporte antes do clique;
- tempo entre recebimento e notificação;
- setores mais expostos;
- volume de campanhas bloqueadas por domínio ou tema;
- reincidência por tipo de isca.

O valor da métrica está em ajustar processo e treinamento, não em constranger usuário.

---

## 6. Mini-caso prático

A instituição percebe aumento de mensagens falsas imitando o portal acadêmico durante o período de rematrícula.

- **Risco principal:** roubo de credenciais institucionais.
- **Ações imediatas:** reforço de MFA, aviso institucional, ajuste em DMARC e campanha curta de alerta.
- **Ação estrutural:** criar botão de reporte no e-mail e rotina de remoção centralizada.

---

## 7. Perguntas de revisão rápida

1. Por que MFA é importante, mas não suficiente sozinho, contra phishing?
2. Qual a função conjunta de SPF, DKIM e DMARC?
3. Que métrica mostra maturidade melhor: número de cliques ou velocidade de reporte?

---

## 8. Fontes de referência

- [CERT.br - Fascículo Phishing e Outros Golpes](https://cartilha.cert.br/fasciculos/phishing-golpes/fasciculo-phishing-golpes.pdf)
- [CISA - Recognize and Report Phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing)
- [NIST - Training for Social Engineering and Phishing Awareness](https://www.nist.gov/itl/smallbusinesscyber/training)
