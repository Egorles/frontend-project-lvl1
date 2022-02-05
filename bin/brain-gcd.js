#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game from '../src/index.js';
import { generateNum } from '../utils/gameUtils.js';

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

const roundGenerator = () => {
  const randomNumber1 = generateNum();
  const randomNumber2 = generateNum();
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);

  const answer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2} \nYour answer: `);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

game(roundGenerator, rules);
