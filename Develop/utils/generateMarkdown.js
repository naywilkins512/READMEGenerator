// function to generate markdown for README
function generateMarkdown({license, title ,description, install, usage, contribution, test, username}) {

  return `
  # ${title}
  ![Shield](https://img.shields.io/static/v1?label=License&message=${license.replace(/ /g, "-")}&color=green)
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
  -Fork a repo
  -Clone to your repository
  ${contribution}
  # Tests
  ${test}
  # Questions
  
  [Github Profile Link](https://github.com/${username})`
  ;
}

module.exports = generateMarkdown;
