import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const generateRound = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  const operator = operators[generateNum(0, operators.length - 1)];

  const correctAnswer = getCorrectAnswer(num1, num2, operator).toString();
  const question = `${num1} ${operator} ${num2}`;

  return [question, correctAnswer];
};

export default () => play(generateRound, rules);
