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
    type: "checkbox",
    name: "projectLicenses",
    message: "Choose license(s): ",
    choices: [
      "MIT",
      "Apache-2.0",
      "BSD-3-Clause",
      "GPL-3.0",
      "LGPL-3.0",
      "MPL-2.0",
      "CC BY 4.0",
      "EPL-2.0",
    ]
  },
  {
    type: "input",
    name: "projectContrib",
    message: "Enter Contributing Instructions: ",
  },
  {
    type: "input",
    name: "projectTests",
    message: "Enter Testing Instructions: ",
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
  /* 
  Passes the answers to genMd() which will generate the markdown
  text. If there is no error, the generated markdown text will be 
  appended to readme.md
  */
  fs.appendFile(fileName, genMd(data), (err) =>
    err ? console.log(err) : console.log("README generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // starts inquirer.prompt() and passes the answers to writeToFile()
  inquirer.prompt(questions).then((answers) => {
    writeToFile("temp-README.md", answers);
  });
}

// Function call to initialize app
init();
