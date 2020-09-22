const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// function to initialize program
function init() {
  
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
            message: 'Enter the Contributing Guidelines',
            name: 'contribution',
        },
        {
        message: 'test instructions',
        name: 'test',
        },
        {
            type: "list",
            message: "choose your license name",
            choices: ["MIT license", "GNU General Public License v3.0", "Apache", "The Unlicense"] ,
            name: 'license',
        }

        ])
        .then(answers => {
            
            let doc = generateMarkdown(answers)


            fs.writeFile('../README.md', doc, function(err){
                if (err) {
                    return console.log(err);
                } else {
                    console.log("README Generated!")
                }
            })
        });

    }

// // function call to initialize program
init();

