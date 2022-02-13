import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGCD(num2, num1 % num2);
};

const generateRound = () => {
  const randomNumber1 = generateNum();
  const randomNumber2 = generateNum();

  const correctAnswer = findGCD(randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, correctAnswer];
};

export default () => play(generateRound, rules);
