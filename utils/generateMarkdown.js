// function to get the badge of the selected license
function getLicenseBadge(license) {
  const badges = {
    "Apache License 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "MIT License":
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GNU GPL License 2.0":
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  };
  return badges[license];
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Description

${data.description}

[Video](https://user-images.githubusercontent.com/96136050/213940405-519c38d5-945d-4e3f-b0cf-9e71c6e946e3.mp4)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage

To start the app, run the following command:
\`\`\`
${data.usage}
\`\`\`

## License

This project is licensed under the [${data.license}](LICENSE).

## Contributing

${data.contributing}

## Tests

The following command can be run for testing:
\`\`\`
${data.tests}
\`\`\`

## Questions

For any questions or concerns about this repo, please open an issue or contact me via email at ${
    data.email
  }. More information about my work can be found at [${
    data.github
  }](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
