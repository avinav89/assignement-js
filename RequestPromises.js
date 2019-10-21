// var request = require('request-promise');

// var my_function = function(url){
//   return new Promise(function(resolve, reject){
//     request(url, function(err, res, body){
//       if (err){
//         reject(err);
//       } else {
//           resolve(res);
//         }   
//     });             
//   });
// };

// my_function('http://www.google.com').then(function(res){console.log("Google: "+res.statusCode);}
// ,function(err){console.log(err);})
// .then(
// my_function('https://www.yahoo.co.in').then(function(res){console.log("Yahoo: "+res.statusCode)},function(err){console.log(err);}))
// .then(
//   my_function('https://www.youtube.com').then(function(res){console.log("Ytube: "+res.statusCode)},function(err){console.log(err);}));


var rp = require('request-promise');

rp({ uri: 'http://www.google.com', resolveWithFullResponse: true })
  .then(function (response) {
    console.log("Google", response.statusCode)
    rp({ uri: 'https://www.youtube.com', resolveWithFullResponse: true })
      .then(function (response) {
        console.log("ytube", response.statusCode)
        rp({ uri: 'https://www.yahoo.co.in', resolveWithFullResponse: true })
          .then(function (response) {
            console.log("Yahoo", response.statusCode)
          })
      })
  })