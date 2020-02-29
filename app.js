const inquirer = require('inquirer');
const fs = require('fs');

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const managerHTML = require('./templates/genManagerHTML');
const engineerHTML = require('./templates/genEngineerHTML');
const internHTML = require('./templates/genInternHTML');
const html = require('./templates/genMainHTML');

const questions = require('./lib/questions.js');