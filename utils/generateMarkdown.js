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
  - [GitHub](#GitHub)
  - [Contributing](#Contributing)
  - [Credits](#Credits)
  - [License](#License)
  - [Questions](#Questions)

  ## 💽 Installation
  
  ## 💻 Usage 

  ## ➕ Features

  ## 💾 Tests

  ## 🔗 GitHub

  ## 🧑‍🤝‍🧑 Contributing

  ## 💖 Credits

  ## 📒 License 

  ## 🙋 Questions 

  _This README was generated with 🥔 [readmeGenerator](https://github.com/clhurlbut/readmeGenerator)  
  

`;
}

module.exports = generateMarkdown;
