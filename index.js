// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: "input",
        message: "What is your project title? (Required)",
        name: "title",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log("Please enter a title for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please enter a project description (Required)",
        name: "description",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a description for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please provide installation instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide usage information",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter information for contributors",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please enter testing info",
        name: "test",
    },
    {
        type: "list",
        message: "Please choose a valid license for your project",
        choices: ["Apache 2.0", "Boost", "Creative Commons", "Eclipse", "GNU", "MIT", "IBM", "ISC"],
        name: "license",
    },
    {
        type: "input",
        message: "Please enter your Github username (Required)",
        name: "username",
        validate: username => {
        if (username) {
            return true;
        } else {
            console.log("Please enter your Github username.");
        }
        }
    },
    {
        type: "input",
        message: "Please enter your e-mail address (Required)",
        name: "email",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("How are people going to reach you?");
                return false;
            }
        }
    }
  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md',(fileName, data), err =>{
        if(err){
            console.log(err);
            return;
        } else {
            console.log("Readme successfully generated");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
        writeToFile('README.md', generateMarkdown(data))
    })
    
}

// Function call to initialize app
init();
