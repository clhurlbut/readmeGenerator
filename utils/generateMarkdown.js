// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ## 🔎 Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Features](#Features)
  - [Tests](#Tests)
  - [Links](#Links)
  - [Contributors](#Contributors)
  - [Credits](#Credits)
  - [License](#License)

  ## 💽 Installation
  
  ## 💻 Usage 

  ## ➕ Features

  ## 💾 Tests

  ## 🔗 Links

  ## 🧑‍🤝‍🧑 Contributors

  ## 💖 Credits

  ## 📒 License 

  _This README was generated with 🥔 [readmeGenerator](https://github.com/clhurlbut/readmeGenerator)  
  

`;
}

module.exports = generateMarkdown;
