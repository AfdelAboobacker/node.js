const fs = require("fs");
function createFolder() {
  fs.mkdir("work", (err) => {
    if (err) throw err;
    console.log("created");
  });
}

function writeFile() {
  fs.writeFile("work/text.txt", "deiiii", (err) => {
    if (err) throw err;
    console.log("file created");
  });
}
function appendFile() {
  fs.appendFile("work/text.txt", "helllo", (err) => {
    if (err) throw err;
    console.log("file appended");
  });
}

function readFile() {
  fs.readFile("work/text.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

module.exports = { createFolder, writeFile, appendFile, readFile };
