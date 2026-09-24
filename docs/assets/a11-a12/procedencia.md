# Procedência da observação benigna de A12

O arquivo [observacao-benigna.csv](observacao-benigna.csv) contém duas observações coletadas em 24 set. 2026, em Linux, para um exemplo de leitura de processo e arquivo. Consulte o instante exato em UTC no CSV.

## Procedimento

Um coletor Python iniciou um processo filho Python que escreveu o texto artificial `observacao benigna` em um arquivo temporário e aguardou dois segundos. O coletor consultou `ps` com os campos PID, PPID e nome do processo e leu o arquivo. O processo terminou normalmente e o diretório temporário foi removido pelo procedimento de encerramento.

## Transformações para distribuição

- PID do processo filho substituído por `P1` e PID do pai por `P0`, preservando a relação observada.
- Caminho temporário omitido; objeto descrito como `arquivo de teste`.
- Conteúdo de teste, contagem de bytes e instante da observação preservados.
- Os nomes das observações foram redigidos em português para a leitura; o CSV não é uma exportação nativa de Sysmon ou EDR.

## Limites

L1 é consulta pontual de processo. L2 é leitura de conteúdo; a associação ao processo vem do ensaio controlado, não de auditoria de escrita. Não foi coletada telemetria de rede, persistência ou outros processos. As duas linhas não sustentam diagnóstico de malware.

O conjunto E1–E4 da aula e o conjunto R1–R5 da atividade são exemplos artificiais distintos, explicitamente identificados. Não são derivados desta coleta.

[Voltar à A12](../../aulas/A12-protecao-de-endpoints.md#execucao).
