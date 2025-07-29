const fs = require("fs");

function readFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

readFile().then(onDone);
