
var request = require("request");

function callWebytube(ytub) {
    request(ytub, function (error, response, body) {
        console.log('ytube error:', error);
        console.log('ytube statusCode:', response.statusCode);
    });
}

function callWebyahoo(y, callback1) {
    request(y, function (error, response, body) {
        console.log('yahoo error:', error);
        console.log('yahoo statusCode:', response.statusCode);
        if (response.statusCode === 200) {
            callback1('https://www.youtube.com')
        }

    });
}
function callWebgoogle(g, callback) {
    request(g, function (error, response, body) {
        console.log('google error:', error);
        console.log('google statusCode:', response.statusCode);
        if (response.statusCode === 200) {
            callback('https://in.yahoo.com/', callWebytube)
        }
    });
}

callWebgoogle("https://www.google.com", callWebyahoo);
