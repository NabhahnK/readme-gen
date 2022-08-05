// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case `Apache 2.0 License`:
      // code block
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case `CC0`:
      // code block
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case `GNU GPL v3`:
      // code block
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case `The Hippocratic License 2.1`:
      // code block
      return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`;
      break;
    case `The MIT License`:
      // code block
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case `Mozilla Public License 2.0`:
      // code block
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case `The Do What the Fuck You Want to Public License`:
      // code block
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
      break;
    default:
      // code block
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case `Apache 2.0 License`:
      // code block
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case `CC0`:
      // code block
      return `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case `GNU GPL v3`:
      // code block
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case `The Hippocratic License 2.1`:
      // code block
      return `https://firstdonoharm.dev`;
      break;
    case `The MIT License`:
      // code block
      return `https://opensource.org/licenses/MIT`;
      break;
    case `Mozilla Public License 2.0`:
      // code block
      return `https://opensource.org/licenses/MPL-2.0`;
      break;
    case `The Do What the Fuck You Want to Public License`:
      // code block
      return `http://www.wtfpl.net/about/`;
      break;
    default:
      // code block
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  lBagde = renderLicenseBadge(license);
  lLink = renderLicenseLink(license);
  if(!license) {
    return ` `;
  } else {
    return `### License
    
  ${lBagde}
  
  ${lLink}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#dnstallation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}

  You can send me any additional questions at my email ${data.email}.

  My [GitHub](https://github.com/${data.github})

` + renderLicenseSection(data.license);
}

module.exports = generateMarkdown;
