// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }
  const badges = {
    "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "Apache 2.0": "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "GPL 3.0": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "BSD 3": "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  };

  return badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") {
      return "";
  }

  const licenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3": "https://opensource.org/licenses/BSD-3-Clause"
  };

  return licenseLinks[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }

  return `## License
This application is covered under the [${license}](${renderLicenseLink(license)}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    license,
    badges,
    features,
    contribution,
    tests
  } = data;

  // Insert the license badge near the top, if selected
  const licenseBadge = renderLicenseBadge(license);

  return `# ${title}

${licenseBadge ? `${licenseBadge}\n` : ""}

## Description
${description}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${license && license !== "None" ? "- [License](#license)" : ""}
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits || "N/A"}

${renderLicenseSection(license)}

## Badges
${badges || "N/A"}

## Features
${features || "N/A"}

## How to Contribute
${contribution || "N/A"}

## Tests
${tests || "N/A"}
`;
}

export default generateMarkdown;
