var request = require("request");
function callWeb() {
  request('https://www.google.com', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', response.statusCode); // Print the HTML for the Google homepage.
  });
};

callWeb()