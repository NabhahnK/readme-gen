// TODO: Include packages needed for this application
const GenMark = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is your managers name?",
    },
    {
        name: "Description",
        type: "input",
        message: "What is their ID number?"
    },
    {
        name: "Installation",
        type: "input",
        message: "What is their Email?"
    },
    {
        name: "Usage",
        type: "input",
        message: "What is their office number?"
    },
    {
        name: "License",
        type: "checkbox",
        message: "What is their Email?",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        name: "Contributing",
        type: "input",
        message: "What is their Email?"
    },
    {
        name: "Tests",
        type: "input",
        message: "What is their Email?"
    },
    {
        name: "Questions",
        type: "input",
        message: "What is their Email?"
    },
    {
        name: "Questions",
        type: "input",
        message: "What is their Email?"
    },
    {
        name: "Questions",
        type: "input",
        message: "What is their Email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
