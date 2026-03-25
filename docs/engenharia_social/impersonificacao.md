# Impersonificação e Falsificação de Identidade

> **Objetivos de aprendizagem**
> - Diferenciar impersonificação de pessoa, de marca e de domínio.
> - Relacionar sites falsos, perfis falsos e watering hole com abuso de confiança.
> - Definir controles para validar identidade antes de conceder acesso ou executar pedidos.
>
> **Tempo estimado:** 15 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/tlpvbXirkoQ)

## 1. O que é impersonificação?

Impersonificação é o ato de **assumir uma identidade falsa ou indevidamente emprestada** para obter confiança, acesso ou informação.

O atacante tenta parecer legítimo o suficiente para vencer a etapa mais importante do ataque: a validação humana.

---

## 2. Impersonificação direta de pessoa

Nesse caso, o invasor se passa por alguém específico:

- colaborador do suporte;
- gestor ou diretor;
- fornecedor;
- auditor;
- técnico de campo;
- visitante "já autorizado".

Esse tipo de ataque aparece em:

- ligações pedindo redefinição de senha;
- mensagens solicitando documentos;
- visitas presenciais para entrar em área restrita;
- conversas em redes sociais profissionais.

---

## 3. Impersonificação de marca

Aqui o alvo não é a relação pessoal, mas a **confiança na instituição**.

Exemplos comuns:

- e-mail com identidade visual de banco, universidade ou marketplace;
- perfil falso em rede social respondendo clientes;
- página de login com logo e layout quase idênticos ao original;
- falso suporte técnico com nome de fabricante conhecido.

O ponto crítico é que a vítima transfere a confiança da marca para o atacante.

---

## 4. Domínios parecidos e typosquatting

Typosquatting usa domínios muito semelhantes ao verdadeiro para capturar erros de leitura ou digitação.

Exemplos:

- troca de letras visualmente parecidas;
- inclusão de hífen ou termo extra;
- subdomínio enganoso;
- domínio internacionalizado que parece legítimo à primeira vista.

Na prática, esse recurso fortalece phishing, páginas de pagamento falsas e roubo de credenciais.

---

## 5. Watering hole e abuso de confiança em canais legítimos

Watering hole não é impersonificação clássica, mas explora o mesmo princípio: **confiança em um ambiente conhecido**.

Em vez de abordar diretamente a vítima, o atacante compromete um site, portal ou recurso frequentemente acessado por aquele público.

Resultado:

- o usuário entra voluntariamente,
- reduz a desconfiança,
- executa conteúdo malicioso ou entrega informações em um contexto aparentemente seguro.

É uma técnica útil para atingir grupos específicos, como equipes técnicas, fornecedores ou parceiros.

---

## 6. Controles que funcionam melhor

As defesas mais eficazes contra impersonificação combinam:

- validação fora da banda para pedidos críticos;
- revisão cuidadosa de domínio, remetente e URL;
- políticas de visitantes e terceirizados;
- proteção de domínio, SPF, DKIM e DMARC;
- monitoramento de marca e denúncia rápida de páginas falsas.

O ponto central é simples: **identidade declarada não equivale a identidade comprovada**.

---

## 7. Mini-caso prático

Um atacante registra um domínio parecido com o da instituição e envia ao RH um formulário de "atualização cadastral obrigatória" usando a marca oficial.

- **Técnica principal:** impersonificação de marca com domínio lookalike.
- **Dano provável:** coleta de CPF, senha e dados bancários.
- **Controles prioritários:** conferência de domínio, canal oficial para formulários internos e reporte rápido ao time de segurança.

---

## 8. Perguntas de revisão rápida

1. Qual a diferença entre impersonificação de pessoa e impersonificação de marca?
2. Por que typosquatting aumenta a eficácia de páginas falsas?
3. Como watering hole aproveita a confiança da vítima sem contato direto?

---

## 9. Fontes de referência

- [CERT.br - Fascículo Phishing e Outros Golpes](https://cartilha.cert.br/fasciculos/phishing-golpes/fasciculo-phishing-golpes.pdf)
- [CISA - Enhance Email and Web Security](https://www.cisa.gov/resources-tools/resources/enhance-email-web-security)
- [CISA - Recognize and Report Phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing)
