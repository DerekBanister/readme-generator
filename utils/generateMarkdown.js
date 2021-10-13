// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

// License functions will go here

## Author
![Github Profile Picture](${data.image})


`;
}

module.exports = generateMarkdown;
