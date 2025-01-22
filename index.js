import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation steps:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage instructions:'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Credits (e.g. collaborators, third-party assets):'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'badges',
    message: 'Any additional badges? (optional):'
  },
  {
    type: 'input',
    name: 'features',
    message: 'List features (optional):'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can others contribute?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test instructions (optional):'
  }
];

function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const mdContent = generateMarkdown(answers);
      fs.writeFile('./GeneratedReadme/README.md', mdContent, (err) =>
        err
          ? console.error(err)
          : console.log('Successfully created README.md!')
      );
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

init();


