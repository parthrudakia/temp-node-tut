const http = require('http')

const server = http.createServer((req, res) => {
    console.log("request event")
    // if(req.url === "/") {
    //     res.end('home')
    // }
    // res.end(`<h1>Oops!!!</h1>`)
    res.end("hello")
})

server.listen(3000)