const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
    default: "celiyo",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
    default: "riana.tysson@gmail.com",
  },
  {
    name: "title",
    type: "input",
    message: "What is the name of your project?",
    default: "Professional README Generator",
  },
  {
    name: "description",
    type: "input",
    message: "Please enter the description of your project.",
    default:
      "This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.",
  },
  {
    name: "installation",
    type: "input",
    message:
      "What command should be run to install the necessary dependencies?",
    default: "npm i",
  },
  {
    name: "usage",
    type: "input",
    message: "Please provide instructions and examples for use?",
    default: "node index.js",
  },
  {
    name: "license",
    type: "list",
    message: "Please choose the license for your project:",
    choices: ["Apache License 2.0", "MIT License", "GNU GPL License 2.0"],
  },
  {
    name: "contributing",
    type: "input",
    message:
      "Please enter guidelines for how users can contribute to the repo.",
    default:
      "Contributions, issues and feature requests are welcome.  Browse the source repository of this article and open a pull request. I will do my best to review your proposal in due time.",
  },
  {
    name: "tests",
    type: "input",
    message: "What command should be run for testing?",
    default: "npm run test",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
