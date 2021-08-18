// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'Creative Commons') {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === 'Eclipse') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'Boost') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'Creative Commons') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license === 'Eclipse') {
    return 'https://opensource.org/licenses/EPL-1.0';
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0';
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

  function renderLicenseSection(license) {
    const licenseLink = renderLicenseLink(license);
    const licenseText = `This project is licensed under [${license}](${licenseLink})`;
    return `${licenseText}`;
    }
  


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage Information](#usage)
* [Contribution Guidelines](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Contribution Guidelines
${data.contributing}
## Tests
${data.test}
## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}
## Questions
### Github Profile: (https://github.com/${data.username}/)
### Contact E-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
