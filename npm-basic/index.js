// const chalk = require('chalk');
import chalk from 'chalk';
// import validator from 'validator'
import isEmail from 'validator/lib/isEmail.js';

isEmail('apandey@.com') ? 
console.log(chalk.white.bgGreen.bold('Email is valid')) : 
console.log(chalk.white.bgRed.bold('Email is invalid'));

