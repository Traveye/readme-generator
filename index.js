const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Write any usage instructions here.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Write any installation instructions here.',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Add any contributors here.',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Write any test instructions here',
      name: 'test',
    },
    
  ])
  .then((response) => {
    console.log(response)
  }
  );