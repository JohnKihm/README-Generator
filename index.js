// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Provide a short description explaining the what, why, and how of your project.',
    'What are the steps required to install your project?',
    'Provide instructions and examples for use.',
    'How can other developers contribute to your project?',
    'Enter instructions for testing your project.',
    'Which license would you like to use',
    'What is your GitHub username?',
    'What is your email address?'
];

// Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => err ? console.error(err) : console.log('Success!'));
}

// Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests'
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ['Apache 2.0',
                'GNU GPLv3',
                'ISC',
                'MIT'
            ]
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        }
    ]).then((data) => {
        const fileName = `${data.title.toLowerCase().split(' ').join('_')}-README.md`;
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
