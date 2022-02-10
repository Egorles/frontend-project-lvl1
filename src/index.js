import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

export default (generateRound, rules) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const { question, correctAnswer } = generateRound();

    const answer = readlineSync.question(question);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
