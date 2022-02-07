#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game from '../src/index.js';
import { generateNum } from '../utils/gameUtils.js';

const rules = 'What number is missing in the progression?';
const getRandomProgression = () => {
  const randomNumber = generateNum();
  const progression = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => num * randomNumber);
  return progression;
};

const roundGenerator = () => {
  const progression = getRandomProgression();
  const randomIndex = generateNum(9, 1);
  const question = progression.reduce((prev, current, index) => {
    if (index === randomIndex) {
      return `${prev} ..`;
    }
    return `${prev} ${current}`;
  });
  const correctAnswer = progression[randomIndex].toString();

  const answer = readlineSync.question(`Question: ${question} \nYour answer: `);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

game(roundGenerator, rules);
