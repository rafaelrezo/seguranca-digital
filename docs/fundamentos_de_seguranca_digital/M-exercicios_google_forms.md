# Exercícios de Fixação (Google Forms)

Esta página reúne um quiz pronto para aplicação em turma.

## Arquivos disponíveis

- [Banco de questões em CSV](recursos/google_forms_quiz.csv)
- [Banco de questões em JSON](recursos/google_forms_quiz.json)
- [Script para criar formulário automaticamente](recursos/criar_form_quiz.gs)

## Opção 1: Criar o quiz automaticamente (recomendado)

1. Faça upload do arquivo `google_forms_quiz.csv` no seu Google Drive.
2. Abra <https://script.google.com> e crie um projeto.
3. Copie o conteúdo de `criar_form_quiz.gs` para o editor.
4. No script, substitua `CSV_FILE_ID` pelo ID do arquivo CSV no Drive.
5. Execute `createFundamentosQuizFromCsv`.
6. Autorize as permissões na primeira execução.
7. Use as URLs exibidas no `Logger` para editar/publicar o formulário.

## Opção 2: Montagem manual rápida

Use o JSON/CSV como roteiro e monte no Google Forms em modo quiz:

- Tipo de questão: múltipla escolha, caixa de seleção e resposta curta.
- Pontuação: já definida no banco (`points`).
- Gabarito: já definido em `correct_answers`.

## Estrutura do quiz

- 10 questões
- Temas: CIA, AAA, controles de segurança, risco e Zero Trust
- Pontuação sugerida: 10 pontos

## Gabarito resumido

1. B  
2. C  
3. B  
4. C  
5. C  
6. A  
7. A, B, D  
8. B  
9. C  
10. Resposta curta (correção manual)
