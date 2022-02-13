import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = generateNum();

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);

  return [question, correctAnswer];
};

export default () => play(generateRound, rules);
