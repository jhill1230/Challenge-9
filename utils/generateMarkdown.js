// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// TODO: Create a function that returns the license section of README
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  if (data.licenses === "MIT") {
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.licenses === "Apache 2.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

  if (data.licenses === "Boost Software License 1.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }

  if (data.licenses === "GNU General Public License v2.0") {
    data.licenses = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  }

    
  return `# Table of Contents
  1. [Github](#Github)
  2. [Email](#Email)
  3. [Title](#Title)
  4. [Description](#Description)
  5. [Installation](#Installation)
  6. [Licenses](#Licenses)
  7. [Badges](#Badges)
  
# Title
${data.title}

# Description
${data.description}

# Installation
${data.installation}

# Badges
${data.badges}

# Licenses
${data.licenses}

# Github
${data.github}

# Email
${data.email}
  `;
  }
  


module.exports = generateMarkdown;


//   {
//     'name': 'Apache license 2.0',
//     'badge': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
//     'link': `https://opensource.org/licenses/Apache-2.0`
//   },
//   {
//     'name': 'Boost Software License 1.0',
//     'badge': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
//     'link': `https://www.boost.org/LICENSE_1_0.txt`
//   },
//   {
//     'name': 'BSD 2-clause "Simplified" license',
//     'badge': `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
//     'link': `https://opensource.org/licenses/BSD-2-Clause`
//   },
//   {
//     'name': 'BSD 3-clause "New" or "Revised" license',
//     'badge': `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
//     'link': `https://opensource.org/licenses/BSD-3-Clause`
//   },
//   {
//     'name': 'Creative Commons Zero v1.0 Universal',
//     'badge': `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,
//     'link': `http://creativecommons.org/publicdomain/zero/1.0/`
//   },
 
//   {
//     'name': 'Eclipse Public License 1.0',
//     'badge': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
//     'link': `https://opensource.org/licenses/EPL-1.0`
//   },
//   {
//     'name': 'GNU Affero General Public License v3.0',
//     'badge': `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
//     'link': `https://www.gnu.org/licenses/agpl-3.0`
//   },
//   {
//     'name': 'GNU General Public License v2.0',
//     'badge': `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
//     'link': `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
//   },
//   {
//     'name': 'GNU General Public License v3.0',
//     'badge': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
//     'link': `https://www.gnu.org/licenses/gpl-3.0`
//   },
//   {
//     'name': 'GNU Lesser General Public License v3.0',
//     'badge': `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`,
//     'link': `https://www.gnu.org/licenses/lgpl-3.0`
//   },
//   {
//     'name': 'MIT',
//     'badge': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
//     'link': `https://opensource.org/licenses/MIT`
//   },
//   {
//     'name': 'Mozilla Public License 2.0',
//     'badge': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
//     'link': `https://opensource.org/licenses/MPL-2.0`
//   },
//   {
//     'name': 'The Unlicense',
//     'badge': `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
//     'link': `http://unlicense.org/`
//   }
// ]
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === "None") {
//     return "";
//   } else {
//     return `![badge](${licenses[license].badge})`;
//   }
// }

// # Visuals
// ${data.visuals}