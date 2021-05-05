const {readFile, writeFile} = require('fs')


console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
     if(err) {
         console.log(`error is ${err}`)
     }
     console.log(result)
     const first = result

     readFile('./content/second.txt', 'utf8', (err, result) => {
         if(err) {
             console.log(`err is ${err}`)
         }
         const second = result
         writeFile('./content/result-async.txt', `Result: ${first} + ${second}`, (err, result) => {
                if(err) {
                    console.log(err)
                }
                console.log('Done with writing');
         })


     })
})

console.log('end')