// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
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
  // License Markdown Text renderer
  let licenseMdText = `## License\n\n`;
  if (license.length) {
    const appendBadges = (license) => {
      license.forEach((licenseName) => {
        licenseMdText += `[![License: ${licenseName}](${renderLicenseBadge(
          licenseName
        )})](${renderLicenseLink(licenseName)}) `;
      });
    };
    appendBadges(license);
  }

  return licenseMdText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Full readme markdown
  let fullMarkDown = "";
  const lineBreak = "\n\n";

  // answer data destructured
  const {
    projectTitle,
    projectDesc,
    projectInstall,
    projectUsage,
    projectContrib,
    projectTests,
    githubUserName,
    githubLink,
    githubEmail,
  } = data;

  // Project Title render
  fullMarkDown += `# ${projectTitle}` + lineBreak;

  // Description render
  fullMarkDown += "## Description" + lineBreak + projectDesc + lineBreak;

  // Table of Contents

  fullMarkDown += renderLicenseSection(projectUsage);

  return fullMarkDown;
}

module.exports = generateMarkdown;
