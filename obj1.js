const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log('File read initiated');