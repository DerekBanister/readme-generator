// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for license's
function renderLicenseBadge(license) {
  var badge = "";

  if ({license} === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  if ({license} === "Mozilla Public 2.0") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  }
  if ({license} === "Apache 2.0") {
    badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
  if ({license} === "GNU GPLv3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }
  else {
    badge = "";
  }
  return badge
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = "";
  if ({license} === "MIT") {
    link = "(https://opensource.org/licenses/MIT)";
  }
  if ({license} === "Mozilla Public 2.0") {
    link = "(https://opensource.org/licenses/MPL-2.0)";
  }
  if ({license} === "Apache 2.0") {
    link = "(https://opensource.org/licenses/Apache-2.0)";
  }
  if ({license} === "GNU GPLv3") {
    link = "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  else {
    link = "";
  }
  return link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge();
  renderLicenseLink();

  var stamp = `${badge}${link}`;

  return stamp;
}


//switch cases for license???

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Project Description:
  ${data.description}


  ## Table of Contents
  *[Installation](#install)
  *[Usage](#usage)
  *[Contributors](#contributors)
  *[Test](#test)
  *[Questions](#questions)
  *[License](#license)
  *[Author](#author)

## Installation
${data.install}


## Usage
${data.usage}


## Contributors
${data.contributors}


## Test
${data.test}


## Questions
If you have any questions, contact ${data.username} on GitHub.

## License
${stamp}

## Author
![Github Profile Picture](${data.image})


`;
}

module.exports = generateMarkdown;
