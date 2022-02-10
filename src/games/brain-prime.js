/* eslint-disable no-plusplus */
import generateNum from '../utils/gameUtils.js';
import game from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkIsPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateNum(1, 10000);

  const correctAnswer = checkIsPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber} \nYour answer: `;

  return { question, correctAnswer };
};

export default () => game(generateRound, rules);
