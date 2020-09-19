const fs = require("fs");
const inquirer = require("inquirer");

// function to initialize program
// function init() {
  
    inquirer
        .prompt([
            {
                message: 'What is your Github Username?',
                name: 'username',
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
        {
            type: "list",
            message: "choose your license name",
            choices: ["MIT license", "GNU General Public License v3.0", "The Unlicense"] ,
            name: 'license',
        }

        ])
        .then(answers => {
            const {license, title ,description, install, usage, contribution, test, username} = answers
            
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
${test}
# Questions

[Github Profile Link](https:www.github.com/${username})`
            fs.writeFile('./README.md', doc, function(err){
                if (err) {
                    return console.log(err);
                } else {
                    console.log("README Generated!")
                }
            })
        });

    // }

// // function call to initialize program
// init();

