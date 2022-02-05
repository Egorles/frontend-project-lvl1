import readlineSync from 'readline-sync';

export default (roundGenerator, rules) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let round = 1; round <= 3; round += 1) {
    const result = roundGenerator(name);

    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
