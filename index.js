// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateMarkdown");
const writeToFile = require("./utils/generateFile");

// Array of questions for user input
const questionsInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Title of your file? (Required)",
      validate: (title) => {
        if (title) {
          return true;
        } else {
          console.log("Please enter your file title");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: (projectDesc) => {
        if (projectDesc) {
          return true;
        } else {
          console.log("You need to enter a project description!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "installation",
      message: "How to install the app",
      validate: (installation) => {
        if (installation) {
          return true;
        } else {
          console.log("Please return installation instructions");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Enter the usage information of the file",
      validate: (usage) => {
        if (usage) {
          return true;
        } else {
          console.log("Please enter the usage information");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "What is the license for this project?",
      choices: [
        "Apache License 2.0",
        "MIT",
        "Eclipse Public License 2.0",
        "Mozilla Public License 2.0",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter what you contributed to the project. (Required)",
      validate: (contribution) => {
        if (contribution) {
          return true;
        } else {
          console.log("Please enter your contribution");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "Please define all test instructions. (Required)",
      validate: (test) => {
        if (test) {
          return true;
        } else {
          console.log("Please enter test instructions");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
      validate: (githubLink) => {
        if (githubLink) {
          return true;
        } else {
          console.log("You need to enter a project GitHub link!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "Enter email address",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter email");
          return false;
        }
      },
    },
  ]);
};

questionsInfo()
  .then((readMeTemplate) => {
    return generateReadMe(readMeTemplate);
  })
  .then((fileContent) => {
    writeToFile(fileContent);
  })
  .catch((err) => {
    console.log(err);
  });
