import generateNum from '../utils/gameUtils.js';
import game from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const generateRound = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const correctAnswer = getCorrectAnswer(num1, num2, operator).toString();
  const question = `Question: ${num1} ${operator} ${num2} \nYour answer: `;

  return { question, correctAnswer };
};

export default () => game(generateRound, rules);
