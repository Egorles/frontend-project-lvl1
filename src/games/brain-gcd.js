import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

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
  return a;
};

const generateRound = () => {
  const randomNumber1 = generateNum();
  const randomNumber2 = generateNum();

  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${randomNumber2}`;

  return { question, correctAnswer };
};

export default () => play(generateRound, rules);
