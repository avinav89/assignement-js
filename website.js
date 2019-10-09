var request = require("request");
 function callWeb () {
    request('https://www.google.com', function (error, response, body) {
        //   console.log('error:', error); // Print the error if one occurred
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
};

  export{callWeb};
// export {sayHi, sayBye}; // a list of exported variables