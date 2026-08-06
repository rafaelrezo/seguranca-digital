# Gabarito docente — A02

## Cadeia de referência

- Ativo: arquivo e informação nele contida; aplicação e plataforma como ativos de suporte.
- Evidência: resposta HTTP `200` e conteúdo entregue no alvo local.
- Fraqueza provável: recurso indevidamente publicado ou autorização ausente; confirmar no projeto antes de afirmar causa.
- Vulnerabilidade: acesso não autorizado ao recurso concreto.
- Exposição: rota HTTP alcançável.
- Ameaça: usuário não autorizado, erro operacional ou automação que encontre o recurso.
- Consequência: divulgação de informação, apoio a ataques posteriores e perda de confiança.

## Tratamento esperado

Quando o arquivo não tem função pública, remover da área servida, revisar artefatos semelhantes e retestar tanto a rota conhecida quanto o processo de publicação. Se necessário a um papel, autorizar no servidor e validar casos permitido/negado. Registrar acesso como controle complementar.

## Evidência alternativa

Use a resposta HTTP incluída no material do estudante. Não publique caminhos adicionais, soluções de desafios ou credenciais. Aceite hipóteses diferentes quando a dupla explicitar lacunas e teste discriminante.
