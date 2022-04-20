// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please write a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'insallationInstructions',
    },
    {
        type: 'input',
        message: 'What is the usage information for this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can other developers contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide links to any tests of this project.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What liscense does your project use?',
        name: 'liscense',
        choices: ['none','']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
