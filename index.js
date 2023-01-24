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
        "Apache License 2.0",
        "GPL-2.0",
        "BSD 3-Clause",
      ],
      name: "license",
    },
  ])
  .then((answers) => {
    //ghub link
    // let ghub = `[GitHub](https://github.com/${answers.github})`;

    //swich case to assign license badge url
    console.log(answers.github.length)

    let badge;
    let link = answers.license;
  

    switch (link) {
      case "MIT":
        badge = `![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        break;
      case "GPL-3.0":
        badge = `![GitHub license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
        break;
      case "Apache License 2.0":
        badge = `![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
        break;
      case "GPL-2.0":
        badge = `![GitHub license](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
        break;
      case "BSD 3-Clause":
        badge = `![GitHub license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
        break;
    }

    let readme = `
  # ${answers.title}
${badge}

  ### Table of Contents
  [Description](#description)<br>
  [Usage](#usage)<br>
  [Installation](#installation)<br>
  [Test](#test)<br>
  [Credits](#credits)<br>
  [License](#license)<br>
  [Questions](#questions)<br>

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
You can check out this and my other projects at [GitHub](https://github.com/${answers.github}). Please feel free to contact me with any questions at ${answers.email}.
    `;

    fs.writeFile("README1.md", readme, (err) =>
      err ? console.log(err) : console.log("success")
    );
  });
  