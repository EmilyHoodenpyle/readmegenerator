// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   this.liscense = liscense;
// }


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

const renderLicenseLink = {
  none: 'No license selected',
  MIT: '[![License: MIT](https://spdx.org/licenses/MIT.html)',
  GNU: '[![License: GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html)'
};

function determineBadge(type) {
  let badge;
  if (type === 'none') {
    return badge = renderLicenseLink[0]
  } else if (type === 'MIT') {
    return badge = renderLicenseLink[1]
  } else if (type === 'GNU') {
    return badge = renderLicenseLink[2]
  }
};

// const [noLiscense, MITLiscense, GNULiscense] = renderLicenseLink;

// const none = renderLicenseLink[0];
// const MIT = renderLicenseLink[1];
// const GNU = renderLicenseLink[2];

// console.log(MIT);

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${determineBadge(data.license)}

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
  
  ## License
  This project is covered under a ${data.license} license.
  
  ## Contact
  GitHub (https://github.com/${data.github})
  Email (mailto:${data.email})
  `;
}

module.exports = generateMarkdown;