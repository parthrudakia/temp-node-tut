const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url === '/') {
        res.end("homepage");
    }
    if(req.url === '/about') {

        for(var i=0; i<=1000; i++) {
            for(var j=0; j<=1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end("about");
    }

    res.end('error page');


})

server.listen(5000, () => {
    console.log("server is listening on port 5000")
})