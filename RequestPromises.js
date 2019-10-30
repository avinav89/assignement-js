

// var request = require('request');

// var my_function = function (url) {
//   return new Promise(function (resolve, reject) {
//     request(url, function (err, res, body) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

// my_function('http://www.google.com').then(function (res) { console.log("Google: " + res.statusCode); }
//   , function (err) { console.log(err); })
//   .then(
//     my_function('https://www.yahoo.co.in').then(function (res) { console.log("Yahoo: " + res.statusCode) }, function (err) { console.log(err); }))
//   .then(
//     my_function('https://www.youtube.com').then(function (res) { console.log("Ytube: " + res.statusCode) }, function (err) { console.log(err); }));



    /*+++++Assignment 4.2. Do the same using request-promise module+++++++++++=*/ 
var rp = require('request-promise');
// debugger
rp({ uri: 'http://www.google.com', resolveWithFullResponse: true })
  .then(function (response) {
    console.log("Google", response.statusCode)
    rp({ uri: 'https://www.youtube.com', resolveWithFullResponse: true })
      .then(function (response) {
        console.log("ytube", response.statusCode)
        rp({ uri: 'https://www.yahoo.co.in', resolveWithFullResponse: true })
          .then(function (response) {
            console.log("Yahoo", response.statusCode)
            //new
          })
      })
  })


/*+++++++Assignment 4.3 Create a function which contains a timeout (which waits for 5 seconds), after 5 seconds your function should return a promise with a string argument "done".
  Call the first function and using promises print the string returned by the first function +++*/

function asyncFunc() {
  //debugger
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('DONE'), 5000);
  });
}
asyncFunc().then(resolve => console.log('Result: ' + resolve));