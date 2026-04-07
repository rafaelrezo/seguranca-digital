# Prevenção de Perda de Dados (DLP)

> **Objetivos de aprendizagem**
> - Explicar como DLP detecta e reduz exfiltração de dados.
> - Diferenciar DLP de endpoint, rede, armazenamento e nuvem.
> - Relacionar DLP a classificação, contexto e resposta operacional.
>
> **Tempo estimado:** 20 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/36Bq7Ejns_o)

## 1. O que DLP realmente faz

DLP é o conjunto de políticas e mecanismos que monitoram, alertam ou bloqueiam o uso inadequado de dados sensíveis.

Ele não substitui classificação, criptografia ou controle de acesso. Ele atua como camada adicional para responder a perguntas como:

- este arquivo pode sair por e-mail?
- esta planilha pode ser copiada para um pendrive?
- este conteúdo pode ser compartilhado com conta pessoal?

---

## 2. Tipos de DLP

| Tipo | Onde atua | Melhor uso |
|---|---|---|
| **Endpoint DLP** | estação de trabalho e notebook | cópia, impressão, captura, USB |
| **Network DLP** | tráfego de rede | e-mail, web, saída de dados |
| **Storage DLP** | repositório e arquivos em repouso | descoberta e revisão de exposição |
| **Cloud DLP** | SaaS e serviços em nuvem | compartilhamento externo e regras por serviço |

O ponto central é que DLP observa comportamento sobre o dado, e não só o ativo em que ele está.

---

## 3. Modos de ação

As soluções de DLP normalmente operam em dois modos:

- **detecção**: registra e alerta;
- **prevenção**: bloqueia, quarentena ou exige justificativa.

A maturidade costuma começar com monitoramento para reduzir falso positivo e depois avançar para bloqueio nos casos mais críticos.

---

## 4. O que faz DLP funcionar bem

- classificação e rotulagem minimamente consistentes;
- políticas claras sobre canais permitidos;
- ajuste por contexto e exceção controlada;
- revisão periódica de alertas;
- integração com treinamento e resposta a incidentes.

> Analogia: DLP é como detector de saída em biblioteca ou laboratório. Ele não define sozinho o valor do item, mas ajuda a impedir que algo classificado como sensível saia sem controle.

---

## 5. Mini-caso prático

Um professor envia por engano planilha com dados de alunos para um e-mail pessoal para "terminar o trabalho em casa".

Com DLP bem ajustado, a organização pode:

- detectar padrão de dado pessoal;
- bloquear o envio ou exigir justificativa;
- registrar a tentativa;
- orientar o usuário sobre canal correto.

Sem DLP, o incidente pode virar vazamento silencioso.

---

## 6. Perguntas de revisão rápida

1. Por que DLP não substitui classificação de dados?
2. Qual tipo de DLP ajuda mais a bloquear cópia para USB?
3. Quando o modo de detecção deve vir antes do bloqueio?

---

## 7. Fontes de referência

- Microsoft Purview Data Loss Prevention  
  https://learn.microsoft.com/purview/dlp-learn-about-dlp
- Google Workspace Data Loss Prevention  
  https://support.google.com/a/topic/7557701
- NIST SP 800-122  
  https://csrc.nist.gov/pubs/sp/800/122/final
