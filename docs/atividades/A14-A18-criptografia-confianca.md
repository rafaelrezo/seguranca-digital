# Criptografia e confiança — registro único de A14–A17

## Atividade {#atividade}

**Missão:** em dupla, construir um registro que explique a propriedade de cada mecanismo, a evidência, a contraprova e seu limite. Preencha C1–C4 durante as práticas. Há **uma única entrega após A17**, no prazo definido pelo docente no Classroom; checkpoints não criam novas tarefas.

**Arquivos:** baixe uma vez o [repositório de práticas A14–A17](https://github.com/rafaelrezo/seguranca-digital-praticas) e prepare o ambiente pelo README. Use as pastas a14–a17 e os scripts por etapa; não é necessário montar arquivos por copiar e colar, fazer fork ou entregar código.

**Escopo:** arquivos e chaves descartáveis das aulas, as duas EC2 e a VPC dedicadas da dupla no AWS Academy e cliente local Windows/Linux. Prepare os ambientes conforme cada página antes da etapa correspondente. A operação necessária será demonstrada; se não executar, use a alternativa na mesma página e marque a fonte **fornecida**. Previsão, proposta e dado fornecido não são execução.

**Formato:** um PDF `cripto_sobrenome1_sobrenome2.pdf`, enviado por uma pessoa, identificando integrantes. Inclua C1–C4 e decisão final, com recortes curtos legíveis e explicação. Não anexe perfis `.ovpn`, privadas, frases, chave SSH, IP público, dados pessoais ou logs brutos.

| Registro | Quando preencher | Evidência e decisão mínima |
|---|---|---|
| **C1 — A14** | T2 e G1–G3. G4–G6 são extensões. | Recorte G1/G2 sem segredo; explique a rejeição, os campos públicos e o segredo prévio do receptor. Distinga CBC de GCM e sal de nonce. |
| **C2 — A15** | RSA/híbrida, assinatura V1–V3 e certificados P1–P3. | Relacione R1/R2 ao limite da entrada RSA e H1/H2 à chave curta/conteúdo longo. Compare assinatura válida/alterada e certificado aceito/recusado por nome ou CA ausente. Explique a origem da pública. |
| **C3 — A16** | D1, M1–M3, S1–S4 e TLS L1–L3. | Compare finalidade de hash/HMAC; registre valores lógicos do verificador de senha e campos necessários ao cadastro. Compare TLS aceito/recusado e explique CertificateVerify versus Finished, sem deduzir autorização do HTTP. |
| **C4 — A17** | Topologia, V0/V1, isolamento, V2/V3 e encerramento. | Topologia e ida/retorno, acesso sem/com túnel, ausência de Internet e recusas por nome/revogação. Justifique a configuração e o limite do túnel no gateway. Inclua estado final das duas EC2/EBS, conforme o detalhamento abaixo. |

### C4: acesso roteado e isolamento

- Desenhe **cliente → gateway → interna**; indique rota enviada, forwarding, filtros e retorno para o pool VPN, sem NAT.
- Compare V0/V1 e a origem `10.8.0.x` no serviço interno. Relacione ausência de Internet à tabela VPC, SG e IP, além da tentativa externa.
- Comente identidade/CA, controle TLS, cifra de dados e CRL. Explique V2/V3, diferencie chave SSH, privadas, segredo adicional e chaves de sessão e indique onde a proteção do túnel termina.
- Registre terminação das **duas EC2**, remoção dos EBS exclusivos e horários, sem identificadores sensíveis.

**Como registrar:** para cada comparação use `fonte → ação ou entrada → resultado → interpretação → limite`. Se usar a alternativa, mantenha a mesma decisão, declare a falha operacional e não invente IDs ou logs AWS. Se chegou a lançar recurso antes da falha, encerre-o e registre o encerramento real.

**Decisão final:** em até um parágrafo, relacione proteção em repouso, transporte, guarda/recuperação de chaves e endpoint. Explique por que TLS/VPN não autorizam qualquer operação e por que trocar uma chave não recifra automaticamente cópias antigas. Nomeie o responsável por uma ação de ciclo de vida e a evidência que você exigiria para validá-la.

**Revisão cruzada:** cada integrante comenta uma interpretação do outro; registre uma correção ou divergência resolvida. Se usar IA, registre o pedido, decisões aceitas/rejeitadas e sua justificativa. Não envie segredos à IA e explique o resultado com suas palavras.

### Critérios da entrega única

| Critério | Peso | Evidência de atendimento |
|---|---:|---|
| C1 — cifra e obtenção do segredo | 25% | G1/G2 interpretados; campos públicos separados da chave/senha; limites de CBC e GCM. |
| C2 — chaves, assinatura e confiança | 25% | Funções RSA/AES distintas; assinatura não confundida com sigilo/identidade; P1–P3 explicados. |
| C3 — verificações e TLS | 25% | Hash/HMAC/senha separados; sal/custo e S1–S4 interpretados; L1/L2 e provas do handshake explicados. |
| C4 — integração e operação | 25% | Configuração justificada; Acesso roteado/isolamento e V2/V3 com fontes e limites; ciclo e encerramento das duas EC2 verificáveis. |

**Completo:** mecanismo, evidência, contraprova e limite. **Parcial:** omite um desses elementos. **Insuficiente:** só nomeia ferramenta ou afirma teste que não ocorreu. A alternativa identificada permite demonstrar a análise; não é execução autônoma.

**Encerramento:** siga o [procedimento EC2/EBS da A17](../aulas/A17-openvpn-ec2.md#encerramento), desconecte o cliente e descarte os segredos de teste sem reutilizá-los. Não apague arquivos/recursos de terceiros. A dupla entrega somente o PDF sanitizado.

**Extensão:** compare outra condição mantendo as demais constantes e declare sua nova pergunta. Só execute após o percurso mínimo e com tempo para encerrar; não gera outra entrega.
