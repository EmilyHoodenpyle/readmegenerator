// Ask questions by Inquirer in init()
// Pass answers to generateMarkdown.js
// Build Template Literal in generateMarkdown.js
// Return the Template Literal to init
// Pass the Template Literal to writeTofile function
// Create ‘README.md’ file in writeTofile

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'installationInstructions',
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
        name: 'license',
        choices: ['none','MIT','GNU']
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
function writeToFile(fileName, data) {

}

// Function call to initialize app
function init() {
    inquirer
        .prompt (
            questions
            )
        .then ((data) => {
            const readMePageContent = generateMarkdown(data);

            fs.writeFile('readMe.md', readMePageContent, (err) => err ? console.log(err) : console.log('Successfully created readMe.md!'));
        });
};

init();