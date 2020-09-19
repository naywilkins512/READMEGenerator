const fs = require("fs");
const inquirer = require("inquirer");

// function to initialize program
// function init() {
  
    inquirer
        .prompt([
        {
            type: "list",
            message: "choose your license name",
            choices: ["MIT license", "GNU General Public License v3.0", "The Unlicense"] ,
            name: 'license',
        },
            {
                message: 'What is your project Title?',
                name: 'title',
            },
            {
                message: 'Give a brief description',
                name: 'description',
            },
            {
                message: 'What are the installation instructions',
                name: 'install',
            },
            {
            message: 'Enter usage Information',
            name: 'usage',
        },
        {
            message: 'Enter the contribution guidelines',
            name: 'contribution',
        },
        {
        message: 'test instructions',
        name: 'test',
        },

        ])
        .then(answers => {
            const {license, title ,description, install, usage, contribution, test} = answers
            
            let doc =

`
# ${title}
# Description
${description}
# Table Of Contents

- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Licenses](#licenses)
- [Contributing](#contributing)
- [Tests](#tests)
# Installation Instructions

${install}
# Usage Instructions
${usage}
# Licenses
${license}
# Contributing
${contribution}
# Tests
${test}`
            fs.writeFile('./README.md', doc, function(err){
                if (err) {
                    return console.log(err);
                } else {
                    console.log("README Generated!")
                }
            })
        });

    // }

// function call to initialize program
// init();

