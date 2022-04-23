// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  this.liscense = liscense;
}

renderLicenseBadge.prototype =

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Liscense] (#liscense)
  - [Contact Me] (#contact)
  
  ## Installation
  ${data.installationInstructions}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Liscense
  
  ## Contact
  GitHub (https://github.com/${data.github})
  Email (mailto:${data.email})
  `;
}

module.exports = generateMarkdown;

// console.log(generateMarkdown());