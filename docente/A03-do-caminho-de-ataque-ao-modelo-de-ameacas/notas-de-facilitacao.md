# Notas de facilitação — A03

## Fio narrativo a preservar

Retomar o inventário da A02 e manter a tensão entre correlação e caminho demonstrável. Os slides devem recordar a sequência: separar fato de hipótese, reconstruir o fluxo normal, localizar mudanças de confiança, formular uma ameaça testável, ampliar perguntas com taxonomias, escolher um ponto de interrupção com trade-offs e revisar a decisão diante dos cartões do tabletop.

## Respostas esperadas

- A sequência de logs não comprova ransomware ou acesso OT; sustenta modelagem e coleta.
- Fronteira de confiança é mudança de identidade, autoridade, administração ou consequência, não apenas firewall.
- STRIDE gera perguntas; CAPEC descreve padrões; ATT&CK organiza comportamentos observados; Kill Chain comunica progressão.
- Um bom caminho explicita pré-condições, evidências, suposições, consequência e ponto de interrupção.
- Em OT, containment deve preservar visão, controle, disponibilidade e safety.

## Pistas progressivas

1. Comece pelos ativos e fluxos normais, antes do atacante.
2. Circule no desenho onde a confiança muda.
3. Complete: agente + condição + elemento + consequência + evidência.

## Erros produtivos

- diagrama de rede sem dados ou direção dos fluxos;
- uma técnica ATT&CK tratada como vulnerabilidade;
- todas as categorias STRIDE aplicadas sem contexto;
- risco priorizado apenas pela quantidade de etapas;
- segmentação proposta sem validar operação e acesso emergencial.

## Fechamento

Solicitar: “Interrompemos o caminho em ___ com ___; a evidência de eficácia será ___ e o risco residual é ___.”
