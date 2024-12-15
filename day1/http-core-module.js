const http = require ("http");

const server = http.createServer((req, res) => {
if (req.url == "/login" && req.method == "GET") {
    res.end("Login successfull");
} else if (req.url == "/register"){
    res.end("Register sucessfull");
} else if (req.url == "/home"){
    res.end("This is home page");
} else if (req.url == "/dynamicpage"){
    res.end("This is a Dyanamic page");
} 
 else {
    res.end("Above End-Point not found");
}
});

server.listen(7000,() =>{
    console.log("Server is running on port 7000.");
});