// const fs = require('fs')

const {readFile, writeFile} = require('fs') // using destructuring to get 
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result  // this is where you'd setup the functionality
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', 
            'write this inside the file created',
            {flag: 'a'}, (err,result)=>{
                 if(err){
                    console.log(err);
                    return;
                 }
                console.log(result);
            })
    }) 
})

writeFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
    }
    console.log('done with this task');
})

console.log('starting next task');