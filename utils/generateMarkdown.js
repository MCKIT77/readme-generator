// Function to generate the README content
function generateReadme(answers) {
    let contributorsSection = '';

    if (answers.contributors && answers.contributors.length > 0) {
        contributorsSection = `## Contributors\n\n`;
        answers.contributors.forEach((contributor) => {
            contributorsSection += `- ${contributor}\n`;
        });
        contributorsSection += '\n';
    }
    let licenseBadge = '';
    let licenseNotice = '';

    if (answers.license !== 'None') {
        // Generate license badge based on user's choice
        licenseBadge = `![License](https://img.shields.io/badge/License-${answers.license}-brightgreen)`;

        // Generate license notice based on user's choice
        licenseNotice = `This application is covered under the ${answers.license} license.`;
    }
    let testsSection = '';
    if (answers.tests) {
        testsSection = `## Tests\n\n${answers.tests}\n\n`;
    }

    return `# ${answers.title}

## Description
${answers.description}

### Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License
${licenseBadge}

${licenseNotice}

## Installation
${answers.installation}

## Usage
${answers.usage}

${contributorsSection}

${testsSection}

## Questions
For any questions or inquiries, please contact me via GitHub or email:

GitHub: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.email}
`;
}

module.exports = { generateReadme };