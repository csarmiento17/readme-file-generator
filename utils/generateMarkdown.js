// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description} 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contibuting](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  ## Installation
  ${data.installation} 
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Badges  
  ![no](https://img.shields.io/node/v/no)
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions
  If you have questions you may reach me at my[${data.email}](https://github.com/csarmiento17)

 
`;
}

module.exports = generateMarkdown;
