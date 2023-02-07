const path = require('path');

const seporator = path.sep

console.log(seporator);

const filePath = path.join('/content','subfolder', 'text.txt') // this joins the string to make a normalised path
console.log(filePath)

const basename = path.basename(filePath) // takes a path and returns only the last part

console.log(basename);

// working with reslove

const absolute = path.resolve( __dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);