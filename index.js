const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Write any usage instructions here.",
      name: "usage",
    },
    {
      type: "input",
      message: "Write any installation instructions here.",
      name: "install",
    },
    {
      type: "input",
      message: "Add any contributors here.",
      name: "contribute",
    },
    {
      type: "input",
      message: "Write any test instructions here",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is the best email to contact you?",
      name: "email",
    },
    {
      type: "rawlist",
      message: "Select a license for your project",
      choices: [
        "MIT",
        "GPL-3.0",
        "Apache License 2.0:",
        "GPL-2.0",
        "BSD 3-Clause",
      ],
      name: "license",
    },
  ])
  .then((answers) => {
    console.log(answers);
    let readme = `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## Usage
    ${answers.usage}

    ## Installation
    ${answers.install}

    ## Test
    ${answers.test}

    ## Credits
    ${answers.contribute}

    ## License 
    ${answers.license}

    ## Questions
    You can check out this and my other projects at ${answers.github}. Please feel free to contact me with any questions at ${email}.
    `;
  });
