var request = require("request");

const express = require('express');

const app = new express();

app.use(express.static("public"));

const hostname = '127.0.0.1'; // Don't Forget 127
const port = 3000;

// Added a npm package to handle Authentication
// =======================================================================
var CFAuth = require('./node_modules/cf-auth/index.js');
var keys = require('./node_modules/cf-auth/keys.js');

var auth = CFAuth(keys);


// =========================================================================

// These two line should be added if you want to add authentication with change in target
var target = 'https://codeforces.com/api/user.friends?onlyOnline=True';
var url = auth.genURL(target);

console.log(url);

request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        console.log(data);
    }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});