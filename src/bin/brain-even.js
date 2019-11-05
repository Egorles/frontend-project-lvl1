import readlineSync from 'readline-sync';
import { name } from '..';

export const isEven = () => {
  for (let i = 0; i < 3;) {
    const randomNum = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${randomNum} `);
    console.log(answer);
    if (randomNum % 2 === 0 && answer === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (randomNum % 2 !== 0 && answer === 'no') {
      i += 1;
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      } else if (answer === 'no') {
        return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      } else {
        return console.log('Wrong!');
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

