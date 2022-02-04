#!/usr/bin/env node
import greeting from '../src/cli.js';
import game from './brain-even.js';

const name = greeting();
game(name);
