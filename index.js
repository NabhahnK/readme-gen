//Included packages needed for this application
const GenMark = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require("fs");
//Created an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is your readme title?",
    },
    {
        name: "Description",
        type: "input",
        message: "What is your project description?"
    },
    {
        name: "Installation",
        type: "input",
        message: "What is the installation instructions?"
    },
    {
        name: "Usage",
        type: "input",
        message: "What is the usage information?"
    },
    {
        name: "License",
        type: "checkbox",
        message: "What is the license?",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        name: "Contributing",
        type: "input",
        message: "How do people contribute?"
    },
    {
        name: "Tests",
        type: "input",
        message: "How do people test?"
    },
    {
        name: "Questions",
        type: "input",
        message: "How would they ask you questions?"
    },
    {
        name: "github",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "eamil",
        type: "input",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFileSync
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
