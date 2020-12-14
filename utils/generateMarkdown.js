// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/License-${data.license}-brightgreen)

  ## Description
   ${data.description}

  ## 🔎 Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Features](#Features)
  - [Tests](#Tests)
  - [GitHub](#GitHub)
  - [Contributing](#Contributing)
  - [Credits](#Credits)
  - [License](#License)
  - [Questions](#Questions)

  ## 💽 Installation
   ${data.installation}
  
  ## 💻 Usage 
   ${data.usage}

  ## ➕ Features
   ${data.features}

  ## 💾 Tests
   ${data.tests}

  ## 🧑‍🤝‍🧑 Contributing
   ${data.contributing}

  ## 💖 Credits
   ${data.credits}

  ## 📒 License 
   This project is using the ${data.license} License. 

  ## 🙋 Questions 
   Please feel free to contact the developer with any questions/comments/concerns. 
   📧 **Email**
   ${data.email}
   🔗 **GitHub** 
   [${data.githubName}](https://github.com/${data.githubName})
   

  _This README was generated with 🥔 [readmeGenerator](https://github.com/clhurlbut/readmeGenerator)  
  

`;
}

module.exports = generateMarkdown;
