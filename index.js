// declaring dependecies and variables
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md";

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation insructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the project usage:",
    },
    {
        type: "input",
        name: "features",
        message: "What are the features of your project?",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests:",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub username? (No '@' Needed!)",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "credits",
        message: "Would you like to give credit for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license for this project?",
        default: "MIT",
        choices: ["MIT",
            "Unlicense",
            "Mozilla",
            "Apache",
            "GNU"]

    },
]

// function to write README file
function writeToFile(fileName, data) {
    const newReadme = generateMarkdown(data);
    fs.writeFile(fileName, newReadme, err => {
        if (err) throw (err);
        console.log("SUCCESS! Your README.md file has been created.");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(data => writeToFile(fileName, data));

}

// function call to initialize program
init();
