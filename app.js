var request = require("request")

// Added a npm package to handle Authentication
// =======================================================================
var CFAuth = require('./node_modules/cf-auth/index.js');
var keys = require('./node_modules/cf-auth/keys.js');

var auth = CFAuth(keys);


// =========================================================================

// These two line should be added if you want to add authentication with change in target
var target = 'https://codeforces.com/api/user.friends?handle=404PageNotFound';
var url = auth.genURL(target);

console.log(url);

request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        console.log(data);
    }
});