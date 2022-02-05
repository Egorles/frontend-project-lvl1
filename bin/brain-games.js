#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import greeting from '../src/cli.js';
import brainEven from './brain-even.js';

const name = greeting();
brainEven(name);
