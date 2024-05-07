// Packages for this Application
const inquirer = require('inquirer');
const fs = require('fs');
const generate_Markdown = require('./utils/generateMarkdown');

// Questions for User Input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'input',
    name: 'badges',
    message: 'What are the badges for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license do you want to use for your project?',
    choices: ['MIT', 'GNU General Public License v2.0', 'Apache 2.0', 'Boost Software License 1.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
      console.log(data)
  fs.writeFile('README_Template/README_Template.md', generate_Markdown(data),(err) => err? console.error(err) : console.log("Success!"))})
}

// Function call to initialize app
init();


// // A function that writes a README file
// function writeToFile(fileName, data) {
//   fs.unlink("./README_Template.md", () => {
//       fs.appendFile("./README_Template.md", generate_Markdown(data), (err) => {
//           if (err) {
//               console.log(err);
//           } else {
//               console.log("README_Template successfully generated.");
//           }
//       });
//   });
// }


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         writeToFile(answers);
//     })
//     .catch((err) => {
//         if (err.isTtyError) {
//             console.log("The prompts couldn't be rendered.");
//         } else {
//             console.log(err);
//         }
//     });
// }


