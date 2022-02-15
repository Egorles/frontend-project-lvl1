import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

const rules = 'What number is missing in the progression?';

const LENGTH_OF_PROGRESSION = 10;

const getProgression = (start, step, length) => {
  const progression = Array(length).fill().map((el, i) => start + (step * i));
  return progression;
};

const generateQuestion = (progression, indexToHide) => {
  const newProgression = progression.slice();
  newProgression[indexToHide] = '..';
  return newProgression.join(' ');
};

const generateRound = () => {
  const randomIndex = generateNum(1, LENGTH_OF_PROGRESSION - 1);

  const progression = getProgression(generateNum(), generateNum(), LENGTH_OF_PROGRESSION);

  const question = generateQuestion(progression, randomIndex);

  const correctAnswer = progression[randomIndex].toString();

  return [question, correctAnswer];
};

export default () => play(generateRound, rules);
