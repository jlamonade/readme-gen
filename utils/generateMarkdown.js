// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  // returns the badge for the corresponding type of license
  switch (license) {
    case "Apache-2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "BSD-3-Clause":
      return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
    case "GPL-3.0":
      return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
    case "LGPL-3.0":
      return "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "MPL-2.0":
      return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg7";
    case "CC BY 4.0":
      return "https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg";
    case "EPL-2.0":
      return "https://img.shields.io/badge/License-EPL%202.0-red.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // returns the link to more info for the corresponding to the type of license
  switch (license) {
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD-3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "GPL-3.0":
      return "http://www.gnu.org/licenses/gpl-3.0";
    case "LGPL-3.0":
      return "http://www.gnu.org/licenses/lgpl-3.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "MPL-2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "CC BY 4.0":
      return "http://creativecommons.org/licenses/by/4.0/";
    case "EPL-2.0":
      return "https://opensource.org/licenses/EPL-1.0";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  /* 
  renders the license badges that are linked to webpages with more
  information about the licenses
  */
  let licenseBadgeMd = ``; // badges are appended to this string
  if (license.length) {
    /* 
      if licenses were chosen then a badge and link will be rendered and 
      appended to licenseMdText
    */
    license.forEach((licenseName) => {
      licenseBadgeMd += `[![License: ${licenseName}](${renderLicenseBadge(
        licenseName
      )})](${renderLicenseLink(licenseName)}) `;
    });
  }
  return licenseBadgeMd;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  /* 
  Full readme markdown, content MD to be appended to this variable
  and then returned to be appended to the README.md file
  */
  let fullMarkDown = "";
  const lineBreak = "\n\n";

  // answer data destructured
  const {
    projectTitle,
    projectDesc,
    projectInstall,
    projectUsage,
    projectLicenses,
    projectContrib,
    projectTests,
    githubUserName,
    githubLink,
    githubEmail,
  } = data;

  const licenseBadges = renderLicenseSection(projectLicenses);

  // Project Title render
  fullMarkDown += `# ${projectTitle}` + lineBreak;

  // License badge render

  fullMarkDown += licenseBadges + lineBreak;

  // Description render
  fullMarkDown += "## Description" + lineBreak + projectDesc + lineBreak;

  // Table of Contents render
  fullMarkDown +=
    "## Table of Contents" +
    lineBreak +
    "- [Installation](#installation)\n" +
    "- [Usage](#usage)\n" +
    "- [License](#license)\n" +
    "- [Contributing](#contributing)\n" +
    "- [Tests](#tests)\n" +
    "- [Questions](#questions)\n" +
    lineBreak;

  // Installation render
  fullMarkDown +=
    "## Installation" + lineBreak + "```" + projectInstall + "```" + lineBreak;

  // Usage Render
  fullMarkDown +=
    "## Usage" + lineBreak + "```" + projectUsage + "```" + lineBreak;

  // License render

  fullMarkDown +=
    "## License" +
    lineBreak +
    "This project is distrubuted under the following licenses:" +
    lineBreak +
    licenseBadges +
    lineBreak;

  // Contribution render

  fullMarkDown += "## Contributing" + lineBreak + projectContrib + lineBreak;

  // Test render

  fullMarkDown +=
    "## Tests" + lineBreak + "```" + projectTests + "```" + lineBreak;

  // Questions render

  fullMarkDown +=
    "## Questions" +
    lineBreak +
    `Github: [${githubUserName}](${githubLink})` +
    lineBreak +
    `Email: ${githubEmail}`;

  return fullMarkDown;
}

module.exports = generateMarkdown;
