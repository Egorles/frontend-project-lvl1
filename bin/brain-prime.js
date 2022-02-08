#!/usr/bin/env node
import game from '../src/index.js';
import brainPrimeRound, { rules } from '../src/games/brain-prime.js';

game(brainPrimeRound, rules);
