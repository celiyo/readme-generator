// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Description

${data.description}

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
