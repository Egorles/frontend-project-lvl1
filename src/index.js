import readlineSync from 'readline-sync';

export let name; // Exporting mutable 'let' binding
export const greeting = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};