//Included packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
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
        name: "description",
        type: "input",
        message: "What is your project description?"
    },
    {
        name: "installation",
        type: "input",
        message: "What is the installation instructions?"
    },
    {
        name: "usage",
        type: "input",
        message: "What is the usage information?"
    },
    {
        name: "license",
        type: "list",
        message: "What is the license?",
        choices: ["Apache 2.0 License", "CC0", "GNU GPL v3", "The Hippocratic License 2.1", "The MIT License", "Mozilla Public License 2.0", "The Do What the Fuck You Want to Public License"]
    },
    {
        name: "contributing",
        type: "input",
        message: "How do people contribute?"
    },
    {
        name: "tests",
        type: "input",
        message: "How do people test?"
    },
    {
        name: "questions",
        type: "input",
        message: "How would they ask you questions?"
    },
    {
        name: "github",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("./dev/README.md", generateMarkdown(answers));
        })
        .catch((err) => {
            if (err.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment!");
            } else {
                console.log("Something went wrong!");
            }
        });
}

// Function call to initialize app
init();
