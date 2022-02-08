#!/usr/bin/env node
import game from '../src/index.js';
import brainCalcRound, { rules } from '../src/games/brain-calc.js';

game(brainCalcRound, rules);
