
"use strict";
const http = require("http");
const quotes = require("./quotes.js");

http.createServer((req, res) => {
    // random number generation
    const index = Math.floor(Math.random() * quotes.length); 
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(quotes[index]);
    res.end();
    

}).listen(3000);




// use random number as index


// console.log(randomQuote);


