import readlineSync from 'readline-sync';
import { generateNum } from '../utils/gameUtils.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const correctAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const roundGenerator = () => {
  const randomNumber = generateNum();
  const answer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);

  if (answer === correctAnswer(randomNumber)) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer(randomNumber)}".`);
  return false;
};

export default roundGenerator;
