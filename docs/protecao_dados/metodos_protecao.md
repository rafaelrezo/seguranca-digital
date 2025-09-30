# Métodos de Proteção de Dados

Na era digital, a **segurança da informação** é uma prioridade global.  
Com a evolução constante das ameaças, as organizações precisam adotar estratégias diversificadas para proteger seus dados.  
Nesta aula, exploramos as principais técnicas utilizadas, cada uma aplicada de acordo com o contexto e a criticidade da informação.

---

## 1. Restrições Geográficas (Geofencing)
- Definem **limites virtuais** para restringir acessos de acordo com a localização geográfica.  
- Auxiliam na conformidade com **leis de soberania de dados** e reduzem riscos de acessos indevidos.  

*Exemplo implícito*: restringir acessos aos sistemas de supervisão de uma planta industrial apenas para conexões vindas do território nacional.

---

## 2. Criptografia
- Converte dados legíveis (plaintext) em dados ilegíveis (ciphertext).  
- Apenas quem possui a **chave de decriptação** pode restaurar o conteúdo.  
- Aplicável a **dados em repouso** (bancos de dados, discos) e **dados em trânsito** (redes, VPNs).  

*Exemplo implícito*: relatórios de manutenção armazenados em servidores de chão de fábrica criptografados em disco completo.

---

## 3. Hashing
- Converte dados em **valores fixos (hashes)**, impossíveis de serem revertidos.  
- Usado para proteger **senhas** e validar a **integridade de arquivos**.  

*Exemplo implícito*: verificação de firmware de controladores industriais antes da atualização.

---

## 4. Mascaramento
- Substitui total ou parcialmente dados originais por caracteres fictícios, mantendo o **formato**.  
- É um método de **desidentificação** irreversível.  

*Exemplo implícito*: exibir apenas parte do número de registro de funcionários em relatórios de auditoria.

---

## 5. Tokenização
- Substitui dados sensíveis por **tokens não sensíveis**.  
- O dado real fica armazenado em repositório seguro e separado.  
- Muito usado em **sistemas de pagamento**.  

*Exemplo implícito*: substituição de identificadores de cartões de acesso de operadores por tokens em sistemas de autenticação.

---

## 6. Ofuscação
- Torna dados ou código **difíceis de compreender** para usuários não autorizados.  
- Pode incluir criptografia, pseudonimização e técnicas de embaralhamento.  

*Exemplo implícito*: ofuscar parâmetros de programação de CLPs exportados para arquivos externos.

---

## 7. Segmentação
- Divide a rede em **múltiplos segmentos**, cada um com controles próprios.  
- Impede movimentação lateral de atacantes em caso de invasão.  

*Exemplo implícito*: separar a rede administrativa (TI) da rede de automação (OT) em uma planta industrial.

---

## 8. Restrições de Permissão
- Definem **quem pode acessar** e **o que pode fazer** com os dados.  
- Usam modelos como **ACL (Access Control List)** ou **RBAC (Role-Based Access Control)**.  

*Exemplo implícito*: permitir que apenas engenheiros de manutenção autorizados alterem parâmetros de equipamentos críticos.

---

## 9. Conclusão
A proteção de dados exige um **conjunto de técnicas complementares**, ajustadas ao perfil da organização e ao tipo de dado tratado.  
No contexto da **engenharia de controle e automação**, o uso combinado de **geofencing, criptografia, hashing, mascaramento, tokenização, ofuscação, segmentação e controle de permissões** garante a resiliência contra ameaças internas e externas, preservando tanto os ativos digitais quanto a continuidade operacional.

