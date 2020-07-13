var request = require("request")

request("https://codeforces.com/api/blogEntry.comments?blogEntryId=79", function(error, response, body){
    if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        console.log(data);
    }
});