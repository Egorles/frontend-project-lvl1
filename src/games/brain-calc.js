import readlineSync from 'readline-sync';
import { generateNum } from '../utils/gameUtils.js';

export const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const getCorrectAnswer = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const roundGenerator = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  const operator = operators[Math.floor(Math.random() * 2)];
  const correctAnswer = getCorrectAnswer(num1, num2, operator).toString();

  const answer = readlineSync.question(`Question: ${num1} ${operator} ${num2} \nYour answer: `);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export default roundGenerator;
