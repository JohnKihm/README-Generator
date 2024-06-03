// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `https://img.shields.io/badge/${license.split(' ').join('_')}-8A2BE2`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case null:
      return '';
    case 'Apache 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'ISC':
      return 'https://choosealicense.com/licenses/isc/';
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `This application is covered under the [${license}](${licenseLink}) license.`;
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ![license badge](${licenseBadge})
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [${data.title}](#datatitle)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseSection}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  You can find my other projects on [GitHub](https://github.com/${data.github})
  
  For additional questions you can reach me at [${data.email}](mailto:${data.email}).
  `;
}

module.exports = generateMarkdown;
