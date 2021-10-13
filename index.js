// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const axios = require("axios");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the name of your GitHub repository?",
        name: "repo",
    },
    {
        type: "input",
        message: "Write a short description of what your project does",
        name: "description"
    },
    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "install",
        default: "none"
    },
    {
        type: "input",
        message: "Write instructions for how to use your project",
        name: "use",
        default: "none"
    },
    {
        type: "input",
        message: "Enter the names of any contributors that helped with your project",
        name: "contribute",
        default: "none",
    },
    {
        type: "input",
        message: "Provide examples for testing of this application",
        name: "test"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
