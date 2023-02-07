// const fs = require('fs')

const {readFileSync, writeFileSync} = require('fs') // using destructuring to get 
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8') 
const second = readFileSync('./content/second.txt', 'utf8') 

console.log(first, second);

const third = writeFileSync('./content/result-sync.txt', 
    'this file was created using writeFileSync method ', 
    {flag: 'a'}
);
console.log('Done with this task');
console.log('starting the next one');
console.log(third);
