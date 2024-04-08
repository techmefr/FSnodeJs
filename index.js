const FileSystem = require("fs");
const path = require("path");

function readFilesInDirectory(directoryPath, fileContents) {
  const files = FileSystem.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    console.log("Chemin :", filePath);
  });
}
