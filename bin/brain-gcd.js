#!/usr/bin/env node
import game from '../src/index.js';
import brainGCDRound, { rules } from '../src/games/brain-gcd.js';

game(brainGCDRound, rules);
