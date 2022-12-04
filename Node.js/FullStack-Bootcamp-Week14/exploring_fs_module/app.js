const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Hello world'); //1

// fs.copyFileSync('notes.txt', 'newCopy.txt'); //2

// fs.renameSync('newCopy.txt', 'newCopyRenamed.txt'); //3

// const dir = '../exploring_fs_module'; //4
// const fileNames = fs.readdirSync(dir);
// fileNames.map((file) => console.log(file));

const dir = '../exploring_fs_module'; //5
console.log(fs.statSync(dir));
