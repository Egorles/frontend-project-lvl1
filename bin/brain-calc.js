#!/usr/bin/env node

import readlineSync from 'readline-sync';
import game from '../src/index.js';

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

const roundGenerator = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
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

game(roundGenerator, rules);
