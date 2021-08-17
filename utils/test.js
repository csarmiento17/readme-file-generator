// return inquirer.prompt([
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name? (Required)",
//     validate: (nameInfo) => {
//       if (nameInfo) {
//         return true;
//       } else {
//         console.log("Please enter your name!");
//         return false;
//       }
//     },
//   },
// {
//   type: "input",
//   name: "github",
//   message: "Enter your GitHub Username (Required)",
//   validate: (github) => {
//     if (github) {
//       return true;
//     } else {
//       console.log("Please enter your GitHub username!");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "title",
//   message: "Title of your file? (Required)",
//   validate: (title) => {
//     if (title) {
//       return true;
//     } else {
//       console.log("Please enter your file title");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "link",
//   message: "Enter the GitHub link to your project. (Required)",
//   validate: (githubLink) => {
//     if (githubLink) {
//       return true;
//     } else {
//       console.log("You need to enter a project GitHub link!");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "description",
//   message: "Provide a description of the project (Required)",
//   validate: (projectDesc) => {
//     if (projectDesc) {
//       return true;
//     } else {
//       console.log("You need to enter a project description!");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "usage",
//   message: "Enter the usage information of the file",
//   validate: (usage) => {
//     if (usage) {
//       return true;
//     } else {
//       console.log("Please enter the usage information");
//       return false;
//     }
//   },
// },
// {
//   type: "checkbox",
//   name: "license",
//   message: "What is the license for this project?",
//   choices: [
//     "Apache License 2.0",
//     "MIT",
//     "ISC",
//     "Mozilla Public License 2.0",
//     "The Unlicense",
//   ],
// },
// {
//   type: "input",
//   name: "contribution",
//   message: "Enter what you contributed to the project",
//   validate: (contribution) => {
//     if (contribution) {
//       return true;
//     } else {
//       console.log("Please enter your contribution");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "test",
//   message: "please define all test instructions",
//   validate: (test) => {
//     if (test) {
//       return true;
//     } else {
//       console.log("Please enter test instructions");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "installation",
//   message: "How to install the app",
//   validate: (installation) => {
//     if (installation) {
//       return true;
//     } else {
//       console.log("Please return installation instructions");
//       return false;
//     }
//   },
// },
// {
//   type: "input",
//   name: "email",
//   message: "Enter Email",
//   validate: (emailInput) => {
//     if (emailInput) {
//       return true;
//     } else {
//       console.log("Please enter email");
//       return false;
//     }
//   },
// },
