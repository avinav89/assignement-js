// var greetings = require("./employee.js");
// console.log(greetings.sayHelloInEnglish())

// var main = require("./employee.js");
// console.log(main.person);

// var request = require("request");
// request('https://www.google.com', function (error, response, body) {
//   console.log('google error:', error); // Print the error if one occurred
//   console.log('google statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// var request = require("request");

//     request('https://in.yahoo.com', function (error, response, body) {
//           console.log('yahoo error:', error); // Print the error if one occurred
//           console.log('yahoo statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         // console.log('body:', body); // Print the HTML for the Google homepage.
//     });



// var request = require("request");
//   console.log(require.callWeb);
var request = require("request");
// debugger;
function callWebyahoo() {
    request('https://in.yahoo.com/', function (error, response, body) {
          console.log('yahoo error:', error); // Print the error if one occurred
          
          console.log('yahoo statusCode:', response.statusCode); // Print the response status code if a response was received
    });
}

// var request = require("request");
 function callWebgoogle () {
    request('https://www.google.com', function (error, response, body) {
          console.log('google error:', error); // Print the error if one occurred
         console.log('google statusCode:',  response.statusCode); // Print the response status code if a response was received
        if(response.statusCode===200){callWebyahoo()}
        //console.log(response)
    });
};

callWebgoogle();