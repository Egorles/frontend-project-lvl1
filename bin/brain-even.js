import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const correctAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const newRound = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const answer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);

  if (answer === correctAnswer(randomNumber)) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer(randomNumber)}".`);
  return false;
};

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let round = 1; round <= 3; round += 1) {
    const result = newRound();

    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
