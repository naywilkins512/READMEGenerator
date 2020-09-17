const fs = require("fs");
const inquirer = require("inquirer");

// function to initialize program
// function init() {
  
    inquirer
        .prompt([
        {
            type: "list",
            message: "choose your license name",
            choices: ["license A", "licencse c", "license B"] ,
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
`# ${license}
# ${title}
# ${description}
## ${install}
# ${usage}
# ${contribution}
# ${test}`
            fs.writeFile('README.md', doc, function(err){
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

