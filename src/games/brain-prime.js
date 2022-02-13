/* eslint-disable no-plusplus */
import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkIsPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateNum(1, 10000);

  const correctAnswer = checkIsPrime(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);

  return [question, correctAnswer];
};

export default () => play(generateRound, rules);
