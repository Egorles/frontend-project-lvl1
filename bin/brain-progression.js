#!/usr/bin/env node
import game from '../src/index.js';
import brainProgressionRound, { rules } from '../src/games/brain-progression.js';

game(brainProgressionRound, rules);
