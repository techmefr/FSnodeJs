const fs = require('fs');
const path = require('path');

function readFilesInDirectory(directoryPath, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      callback(err, null);
      return;
    }

    const fileContents = [];

    let filesProcessed = 0;

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          callback(err, null);
          return;
        }

        if (stats.isDirectory()) {
          readFilesInDirectory(filePath, (err, nestedFiles) => {
            if (err) {
              callback(err, null);
              return;
            }
            fileContents.push(...nestedFiles);

            filesProcessed++;

            if (filesProcessed === files.length) {
              callback(null, fileContents);
            }
          });
        } else {
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              callback(err, null);
              return;
            }

            fileContents.push({ filename: file, content: data });

            filesProcessed++;

            if (filesProcessed === files.length) {
              callback(null, fileContents);
            }
          });
        }
      });
    });
  });
}

const directoryPath = path.join(__dirname, 'src', 'data');
readFilesInDirectory(directoryPath, (err, fileContents) => {
  if (err) {
    console.error('Une erreur s\'est produite :', err);
    return;
  }

  console.log('Contenu des fichiers :', fileContents);
});
