const fs = require("fs");

// writing files
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "ReadMe file has been created!",
      });
    });
  });
};

module.exports = writeFile;
