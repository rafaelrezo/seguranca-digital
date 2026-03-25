# Outros Ataques de Engenharia Social

> **Objetivos de aprendizagem**
> - Reconhecer técnicas de engenharia social que não dependem exclusivamente de e-mail.
> - Relacionar ataques físicos e digitais em um mesmo cenário de exploração.
> - Escolher controles preventivos compatíveis com cada técnica.
>
> **Tempo estimado:** 18 minutos

## Vídeo de contexto

![type:video](https://www.youtube.com/embed/tlpvbXirkoQ)

## 1. Nem toda engenharia social chega por mensagem

Limitar o tema a phishing é um erro comum. Muitos ataques exploram:

- curiosidade,
- descuido físico,
- excesso de confiança em ambientes presenciais,
- descarte inseguro de documentos e dispositivos.

Essas técnicas continuam úteis porque exigem pouca sofisticação técnica e alto conhecimento de rotina humana.

---

## 2. Técnicas frequentes

| Técnica | Como funciona | Melhor uso para o atacante | Controle prioritário |
|---|---|---|---|
| **Baiting** | Isca física ou digital desperta curiosidade | Instalação de malware | Política de mídia removível |
| **Shoulder surfing** | Observação de tela ou teclado | Roubo de PIN e senha | Privacidade visual e atenção ao ambiente |
| **Dumpster diving** | Busca em descarte físico ou digital | Coleta de documentos e dados | Trituração e descarte seguro |
| **Eavesdropping** | Escuta de conversa ou interceptação informal | Captura de informações sensíveis | Canais seguros e cuidado em locais públicos |
| **Tailgating/Piggybacking** | Entrada indevida em área restrita | Acesso físico inicial | Controle de acesso e cultura anti-carona |
| **Hoax/boato malicioso** | Mensagem falsa gera reação indevida | Pânico, clique ou reconfiguração errada | Verificação e canal oficial |

---

## 3. Convergência entre físico e digital

Ataques dessa família costumam servir como ponte entre mundos:

- um pendrive esquecido pode instalar malware;
- uma conversa ouvida pode alimentar spear phishing;
- um crachá seguido sem validação pode levar à sala de rede;
- um documento descartado pode revelar fluxo de pagamento ou topologia.

Por isso, segurança física e segurança digital precisam ser tratadas em conjunto.

---

## 4. Controles com melhor efeito prático

As medidas mais úteis incluem:

- bloquear ou restringir uso de USB desconhecido;
- usar filtro de privacidade em estações expostas;
- adotar política de mesa limpa e descarte seguro;
- treinar recepção e vigilância contra tailgating;
- classificar informação e orientar conversa segura em locais públicos.

Controle simples e consistente costuma funcionar melhor do que regra sofisticada e ignorada.

---

## 5. Mini-caso prático

Durante um evento no campus, um visitante entra logo atrás de um servidor em uma área administrativa e deixa um pendrive rotulado como "listas atualizadas". Horas depois, o dispositivo é conectado a uma estação.

- **Técnicas combinadas:** tailgating e baiting.
- **Impacto possível:** acesso físico inicial e infecção por malware.
- **Tratamento prioritário:** política anti-carona, recepção ativa, bloqueio de USB e reporte imediato de mídias desconhecidas.

---

## 6. Perguntas de revisão rápida

1. Por que baiting continua sendo eficaz mesmo em ambientes com antivírus?
2. Como dumpster diving pode apoiar ataques digitais posteriores?
3. Qual a relação entre tailgating e segurança cibernética?

---

## 7. Fontes de referência

- [CERT.br - Fascículo Boatos](https://cartilha.cert.br/fasciculos/boatos/fasciculo-boatos.pdf)
- [CERT.br - Fascículo Phishing e Outros Golpes](https://cartilha.cert.br/fasciculos/phishing-golpes/fasciculo-phishing-golpes.pdf)
- [CERT.br - Fascículo Códigos Maliciosos](https://cartilha.cert.br/fasciculos/codigos-maliciosos/fasciculo-codigos-maliciosos.pdf)
