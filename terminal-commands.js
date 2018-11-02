const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
    fs.open('filename.txt', 'w', (err, fd) => {
        if (err) throw err;
        fs.close(fd, err => { if (err) throw err; });
      });
};
 module.exports.mkdir = () => {
  const dir ='./newDir';
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
  
};