const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === "/") {
        res.end('home')
    }
    res.end(`<h1>Oops!!!</h1>`)
})

server.listen(3000)