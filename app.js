const http = require('http');
const port = 3000;

const server= http.createServer(function(req,res){
    res.write("hello node");
    res.end();
})

server.listen(port,function(error)
{
    if(error){
        console.log("something went wrong");
    } else {
        console.log("server is listening to the port");
    }
})