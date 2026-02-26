# Controles de Segurança

> **Objetivos de aprendizagem**
> - Classificar controles por categoria e por objetivo.
> - Combinar controles em camadas complementares.
> - Selecionar evidências para auditoria de controles.
>
> **Tempo estimado:** 18 minutos

## Vídeo da aula

![type:video](https://www.youtube.com/embed/iSpglxHTJVM)

## 1. O que são Controles de Segurança?

São medidas implementadas para proteger sistemas, dados e recursos contra ameaças, reduzir riscos e manter operações seguras.  
Podem ser **preventivos** (evitam incidentes), **detectivos** (identificam eventos) ou **corretivos** (reagem e mitigam impactos).
  
Pense em um shopping center:
- **Câmeras de segurança** monitoram (controle técnico).
- **Políticas de acesso de lojistas** (controle gerencial).
- **Rondas de seguranças em horários fixos** (controle operacional).
- **Portas trancadas e alarmes físicos** (controle físico).

---

## 2. Tipos de Controles

### 2.1 Controles Técnicos

- **Definição:** Ferramentas e tecnologias (hardware/software) que protegem automaticamente sistemas e dados.

Como um cofre digital que tranca arquivos e só abre com a chave correta.

- **Exemplos:**

  - Antivírus e anti-malware.
  - Firewalls e sistemas de detecção/prevenção de intrusão (IDS/IPS).
  - Criptografia de dados em repouso e em trânsito.
  - Autenticação multifator (MFA).
 
- **Benefício:** 

Reduz a necessidade de intervenção manual e responde rapidamente a ameaças.

### 2.2 Controles Gerenciais (Administrativos)

- **Definição:** Estratégias, políticas e decisões de alto nível para alinhar segurança e objetivos do negócio.

Como o “planejamento de voo” de um avião — define rotas, procedimentos e protocolos para que a viagem seja segura.

- **Exemplos:**
  - Políticas de segurança da informação.
  - Planos de resposta a incidentes.
  - Avaliações de risco antes de novas implementações.
  - Programas de treinamento e conscientização.

- **Benefício:**

Garante que todas as ações de segurança estejam integradas à estratégia organizacional.


### 2.3 Controles Operacionais

- **Definição:** Procedimentos e práticas executadas no dia a dia por pessoas, seguindo processos internos.

Como a checagem diária de um veículo antes de sair da garagem — garante que ele esteja em condições de uso seguro.

- **Exemplos:**
  - Troca periódica de senhas.
  - Revisão de contas e permissões de usuários.
  - Execução regular de backups.
  - Testes de recuperação de desastres.
 
- **Benefício:** 

Mantém a segurança ativa e adaptada às operações contínuas.


### 2.4 Controles Físicos

- **Definição:** Medidas tangíveis para proteger ativos físicos e impedir acesso não autorizado.

Como o muro e o portão de uma casa — limitam quem pode entrar e oferecem proteção adicional.

- **Exemplos:**
  - Portas trancadas e controle de chaves.
  - Crachás com acesso restrito.
  - Cercas, portões e barreiras físicas.
  - Sistemas de alarme e câmeras de vigilância.


- **Benefício:** Protege contra ameaças físicas e complementa a segurança digital.


## 3. Importância da Combinação de Controles
Nenhuma categoria isolada é suficiente para proteger a organização.  
Um bom programa de segurança combina:

- **Técnico:** Bloqueia ameaças automaticamente.
- **Gerencial:** Define a direção e prioridades.
- **Operacional:** Garante a execução consistente das práticas.
- **Físico:** Impede acessos indevidos no mundo real.


Assim como um estádio de futebol precisa de grades, câmeras, seguranças e regras para manter a ordem, uma empresa precisa de todos esses tipos de controles para manter seus ativos e dados seguros.

## 4. Matriz de aplicação rápida

| Categoria | Tipo | Exemplo | Evidência esperada |
|---|---|---|---|
| Técnico | Preventivo | MFA no portal institucional | Política ativa + teste de login |
| Técnico | Detectivo | IDS/alertas de anomalia | Alertas e registros no SIEM |
| Operacional | Corretivo | Restauração de backup | Relatório de recuperação |
| Gerencial | Diretivo | Política de uso aceitável | Documento aprovado e comunicado |
| Físico | Dissuassório | Placas de área monitorada | Inspeção local e registros de acesso |

## 5. Tipos de Controles por Objetivo

### 5.1 Introdução
Em segurança da informação, diferentes ameaças exigem diferentes respostas.  
Assim como um médico escolhe o tratamento adequado para cada estágio de uma doença, o profissional de segurança seleciona controles específicos para cada cenário.

Os principais tipos são:
- **Preventivos**
- **Dissuassórios (Deterrentes)**
- **Detetivos**
- **Corretivos**
- **Compensatórios**
- **Diretivos**

---

### 5.2 Preventivos
- **Objetivo:** Evitar que um incidente aconteça.
- **Exemplos:**
  - Firewalls filtrando tráfego.
  - Antivírus bloqueando arquivos maliciosos antes da execução.
  - Autenticação multifator (MFA).
- **Contexto prático:** É como trancar as portas e fechar janelas antes de sair de casa para impedir que alguém entre.
- **Benefício:** Reduz drasticamente a probabilidade de ataque bem-sucedido.

---

### 5.3 Dissuassórios (Deterrentes)
- **Objetivo:** Desencorajar ataques, tornando-os menos atraentes ou mais arriscados.
- **Exemplos:**
  - Avisos de “Ambiente Monitorado”.
  - Mensagens de login informando sobre registro de atividades.
  - Presença visível de guardas ou câmeras.
- **Contexto prático:** Colocar um adesivo no carro avisando que há rastreador GPS — mesmo que o ladrão nunca o veja, ele pensa duas vezes.
- **Benefício:** Reduz a motivação de atacantes antes mesmo de tentarem agir.

---

### 5.4 Detetivos
- **Objetivo:** Identificar e alertar sobre atividades suspeitas ou incidentes.
- **Exemplos:**
  - Sistemas de detecção de intrusão (IDS).
  - Câmeras de vigilância.
  - Logs e monitoramento em tempo real.
- **Contexto prático:** É como um alarme residencial que não impede a invasão, mas avisa você e a polícia quando algo acontece.
- **Benefício:** Permite reação rápida e investigação de eventos.

---

### 5.5 Corretivos
- **Objetivo:** Conter e restaurar o ambiente após um incidente.
- **Exemplos:**
  - Ferramentas de remoção de malware.
  - Restauração de backups.
  - Reconfiguração de sistemas comprometidos.
- **Contexto prático:** Chamar o encanador para consertar um cano estourado e limpar a água — resolve o problema e devolve a situação ao normal.
- **Benefício:** Minimiza danos e acelera recuperação.

---

### 5.6 Compensatórios
- **Objetivo:** Oferecer proteção alternativa quando o controle ideal não é viável.
- **Exemplos:**
  - Uso de VPN para reforçar segurança em redes Wi-Fi antigas.
  - Monitoramento extra quando não é possível implementar controle físico.
- **Contexto prático:** Usar um cadeado reforçado porque a porta não suporta fechadura eletrônica — não é perfeito, mas compensa a limitação.
- **Benefício:** Mantém nível de segurança aceitável em cenários restritivos.

---

### 5.7 Diretivos
- **Objetivo:** Orientar e definir regras de uso e conduta.
- **Exemplos:**
  - Políticas de uso aceitável (AUP).
  - Procedimentos de resposta a incidentes.
  - Normas de classificação de informações.
- **Contexto prático:** Manual de conduta em uma empresa que define como agir em diferentes situações.
- **Benefício:** Garante consistência e clareza no comportamento esperado.

---

## 6. Conclusão
Cada tipo de controle tem um papel único:
- **Preventivo:** impede.
- **Dissuassório:** desmotiva.
- **Detetivo:** identifica.
- **Corretivo:** repara.
- **Compensatório:** substitui.
- **Diretivo:** orienta.

Uma defesa eficaz combina todos eles, criando múltiplas camadas de segurança que se complementam para proteger a organização.

---

## 7. Mini-caso prático

Um laboratório sofre tentativa de intrusão física e lógica no mesmo dia.

- **Físico dissuassório:** sinalização e catraca com vigilância.
- **Técnico preventivo:** MFA + segmentação de rede.
- **Detectivo:** IDS + câmera com gravação.
- **Corretivo:** playbook de resposta e restauração de estação comprometida.

---

## 8. Perguntas de revisão rápida

1. Qual diferença entre controle preventivo e detectivo?
2. Quando um controle compensatório é aceitável?
3. Quais evidências provam que um controle está realmente funcionando?
