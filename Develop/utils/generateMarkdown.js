// function to generate markdown for README
function generateMarkdown({license, title ,description, install, usage, contribution, test, username}) {

  return `
  # ${title}
  ![Shield](https://img.shields.io/static/v1?label=License&message=${license.replace(/ /g, "_")}&color=green)
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
  # Usage 
  ${usage}
  # License
  Copyright (c) 2020, ${name}
All rights reserved.
  This source code is licensed under the ${license} license found in the
LICENSE file in the root directory of this source tree. 
  # Contributing
  - Fork The Project Repo
  - Clone to your local computer
  - Navigate to your local repo
  - 
  ${contribution}
  # Tests
  ${test}
  # Questions
  
  [Github Profile Link](https://github.com/${username})
  - email: ${email} with your name in the subject for any questions`
  
  ;
}

module.exports = generateMarkdown;
