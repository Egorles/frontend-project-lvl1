/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';
import { generateNum } from '../utils/gameUtils.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const roundGenerator = () => {
  const randomNumber = generateNum(10000);

  const correctAnswer = checkIsPrime(randomNumber) ? 'yes' : 'no';

  const answer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export default roundGenerator;
