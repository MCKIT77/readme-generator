const inquirer = require('inquirer');
const fs = require('fs');
const gM = require('./utils/generateMarkdown.js')

// Prompt the user for input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter the project title:",
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter a description of the project:",
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use this application'
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Enter a contributor name:',
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose a license for your application:",
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter information about how to run tests for the project:',
        },
        {
            type: 'input',
            name: 'github',
            message: "For questions, enter your GitHub username:",
        },
        {
            type: 'input',
            name: 'email',
            message: "For questions, enter your email address:",
        },

    ])
    .then((answers) => {
        const readmeContent = gM.generateReadme(answers);

        // Write the content to the README file
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md file generated successfully!');
            }
        });
    })
    .catch((error) => {
        console.error(error);
    });
