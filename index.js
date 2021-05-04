// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    /* title */
    type: "input",
    name: "projectTitle",
    message: "Enter Project Title: ",
  },
  {
    /* description */
    type: "input",
    name: "projectDesc",
    message: "Enter Project Description: ",
  },
  {
    /* installation */
    type: "input",
    name: "projectInstall",
    message: "Enter Installation Instructions: ",
  },
  {
    /* usage */
    type: "input",
    name: "projectUsage",
    message: "Enter Usage Instructions: ",
  },
  {
    type: "input",
    name: "projectCredits",
    message: "Enter Project Credits: ",
  },
  {
    type: "checkbox",
    name: "projectLicenses",
    message: "Choose license(s): ",
    choices: [
      "Apache-2.0",
      "BSD-3-Clause",
      "GPL-3.0",
      "LGPL-3.0",
      "MIT",
      "MPL-2.0",
      "CC BY 4.0",
      "EPL-2.0",
    ]
  },
  {
    /* github username */
    type: "input",
    name: "githubUserName",
    message: "Enter Github Username: ",
  },
  {
    /* github profile link */
    type: "input",
    name: "githubLink",
    message: "Enter Github Link: ",
  },
  {
    /* github email */
    type: "input",
    name: "githubEmail",
    message: "Enter Github Email: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, genMd(data), (err) =>
    err ? console.log(err) : console.log("Text Appended")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
