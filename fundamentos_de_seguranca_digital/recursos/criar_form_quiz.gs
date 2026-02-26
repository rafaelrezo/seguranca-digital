/**
 * Gera um Google Forms (modo quiz) a partir de um CSV no Drive.
 *
 * Formato do CSV (linha de cabeçalho obrigatória):
 * type,question,option_1,option_2,option_3,option_4,option_5,option_6,correct_answers,points,required
 *
 * type:
 * - multiple_choice
 * - checkbox
 * - short_answer
 *
 * correct_answers:
 * - multiple_choice: indice (1 baseado), ex.: 2
 * - checkbox: indices separados por pipe, ex.: 1|2|4
 * - short_answer: palavras-chave separadas por pipe (correcao manual sugerida)
 */
function createFundamentosQuizFromCsv() {
  const CSV_FILE_ID = 'COLE_AQUI_O_ID_DO_ARQUIVO_CSV_NO_DRIVE';
  if (!CSV_FILE_ID || CSV_FILE_ID.includes('COLE_AQUI')) {
    throw new Error('Defina o CSV_FILE_ID antes de executar.');
  }

  const csvContent = DriveApp.getFileById(CSV_FILE_ID).getBlob().getDataAsString('UTF-8');
  const rows = Utilities.parseCsv(csvContent);

  if (rows.length < 2) {
    throw new Error('CSV sem dados de questoes.');
  }

  const header = rows[0];
  const index = buildColumnIndex_(header);

  const form = FormApp.create('Fundamentos de Segurança Digital - Quiz de Fixação');
  form.setDescription('Quiz gerado automaticamente a partir de CSV.');
  form.setIsQuiz(true);
  form.setCollectEmail(true);

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[index.question]) continue;

    const type = value_(row, index.type).trim();
    const question = value_(row, index.question).trim();
    const points = Number(value_(row, index.points) || 1);
    const required = String(value_(row, index.required)).toLowerCase() === 'true';

    const options = [];
    for (let c = 1; c <= 6; c++) {
      const key = `option_${c}`;
      const col = index[key];
      if (col === undefined) continue;
      const opt = value_(row, col).trim();
      if (opt) options.push(opt);
    }

    const correctRaw = value_(row, index.correct_answers).trim();

    if (type === 'multiple_choice') {
      const item = form.addMultipleChoiceItem();
      item.setTitle(question).setRequired(required);
      const correct = parseIndexList_(correctRaw);
      const choices = options.map((opt, idx) => item.createChoice(opt, correct.includes(idx + 1)));
      item.setChoices(choices);
      item.setPoints(points);
    } else if (type === 'checkbox') {
      const item = form.addCheckboxItem();
      item.setTitle(question).setRequired(required);
      const correct = parseIndexList_(correctRaw);
      const choices = options.map((opt, idx) => item.createChoice(opt, correct.includes(idx + 1)));
      item.setChoices(choices);
      item.setPoints(points);
    } else if (type === 'short_answer') {
      // Resposta curta: criada para correcao manual.
      const item = form.addTextItem();
      item.setTitle(question).setRequired(required);
    } else {
      throw new Error(`Tipo de questao invalido na linha ${i + 1}: ${type}`);
    }
  }

  Logger.log('Form criado com sucesso.');
  Logger.log(`Edicao: ${form.getEditUrl()}`);
  Logger.log(`Publicacao: ${form.getPublishedUrl()}`);
}

function buildColumnIndex_(header) {
  const index = {};
  for (let i = 0; i < header.length; i++) {
    index[header[i].trim()] = i;
  }
  return index;
}

function parseIndexList_(raw) {
  if (!raw) return [];
  return raw
    .split('|')
    .map(v => Number(v.trim()))
    .filter(v => !Number.isNaN(v));
}

function value_(row, col) {
  if (col === undefined || col < 0 || col >= row.length) return '';
  return row[col] || '';
}
