#!/usr/bin/env node
import game from '../src/index.js';
import brainEvenRound, { rules } from '../src/games/brain-even.js';

game(brainEvenRound, rules);
