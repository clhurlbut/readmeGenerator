// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  # ${data.description}

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

  ## 💽 Installation
  # ${data.installation}
  
  ## 💻 Usage 
  # ${data.usage}

  ## ➕ Features
  # ${data.features}

  ## 💾 Tests
  # ${data.tests}

  ## 🔗 GitHub
  # ${data.githubName}
  # ${data.githubRepo}

  ## 🧑‍🤝‍🧑 Contributing
  # ${data.contributing}

  ## 💖 Credits
  # ${data.credits}

  ## 📒 License 
  # ${data.license}

  _This README was generated with 🥔 [readmeGenerator](https://github.com/clhurlbut/readmeGenerator)  
  

`;
}

module.exports = generateMarkdown;
