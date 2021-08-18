// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
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
        name: "Installation",
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
        choices: ["Apache 2.0", "Boost", "BSD 3-Clause", "Eclipse", "GNU", "MIT", "IBM", "ISC"],
        name: "license",
    },
    {
        type: "input",
        message: "Please enter your Github username (Required)",
        name: "username",
        validate: description => {
        if (username) {
            return true;
        } else {
            console.log("Please enter your Github username");
        }
        }
    },
    {
        type: "input",
        message: "Please enter your e-mail address",
        name: "e-mail",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
    
}

// Function call to initialize app
init();
