import generateNum from '../utils/gameUtils.js';
import play from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = Array(length).fill().map((el, i) => start + (step * i));
  return progression;
};

const hideNumber = (progression, indexToHide) => {
  const newProgression = progression.slice();
  newProgression[indexToHide] = '..';
  return newProgression;
};

const generateRound = () => {
  const randomIndex = generateNum(1, 9);

  const progression = getProgression(generateNum(), generateNum(), 10);

  const progressionWithHidenNumber = hideNumber(progression, randomIndex);

  const correctAnswer = progression[randomIndex].toString();
  const question = progressionWithHidenNumber.join(' ');

  return [question, correctAnswer];
};

export default () => play(generateRound, rules);
