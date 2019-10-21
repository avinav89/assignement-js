
// .then().then(callWebytube)





var request = require("request");

function callWebytube() {
    request('https://www.youtube.com', function (error, response, body) {
        console.log('ytube error:', error);
        console.log('ytube statusCode:', response.statusCode);
        // return 'youtube'
    });
}

function callWebgoogle() {
    request("https://www.google.com", function (error, response, body) {
        console.log('google error:', error);
        console.log('google statusCode:', response.statusCode);
        // return 'google'
    });
}

function callWebyahoo() {
    request('https://in.yahoo.com/', function (error, response, body) {
        console.log('yahoo error:', error);
        console.log('yahoo statusCode:', response.statusCode);
        // return 'yahoo'

    });
}
var promise1 = new Promise(function(resolve,reject)
{resolve();});
promise1.then(callWebgoogle).then(callWebyahoo).then(callWebytube)