import generateNum from '../utils/gameUtils.js';
import game from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const getCorrectAnswer = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a.toString();
};

const generateRound = () => {
  const randomNumber1 = generateNum();
  const randomNumber2 = generateNum();

  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);
  const question = `Question: ${randomNumber1} ${randomNumber2} \nYour answer: `;

  return { question, correctAnswer };
};

export default () => game(generateRound, rules);
