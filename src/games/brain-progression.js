import generateNum from '../utils/gameUtils.js';
import game from '../index.js';

const rules = 'What number is missing in the progression?';
const getRandomProgression = () => {
  const randomNumber = generateNum();
  const progression = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => num * randomNumber);
  return progression;
};

const generateRound = () => {
  const progression = getRandomProgression();
  const randomIndex = generateNum(1, 9);
  const progressionWithHidenNumber = progression.reduce((prev, current, index) => {
    if (index === randomIndex) {
      return `${prev} ..`;
    }
    return `${prev} ${current}`;
  });

  const correctAnswer = progression[randomIndex].toString();
  const question = `Question: ${progressionWithHidenNumber} \nYour answer: `;

  return { question, correctAnswer };
};

export default () => game(generateRound, rules);
