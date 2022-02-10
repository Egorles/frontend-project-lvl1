import generateNum from '../utils/gameUtils.js';
import game from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = generateNum();

  const correctAnswer = (randomNumber % 2) ? 'no' : 'yes';
  const question = `Question: ${randomNumber} \nYour answer: `;

  return { question, correctAnswer };
};

export default () => game(generateRound, rules);
