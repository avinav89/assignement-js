var request = require('request-promise');
// var request = require('request');
var my_function = function(url){
  return new Promise(function(resolve, reject){
    request(url, function(err, res, body){
     // console.log(res);
      if (err){
        reject(err);
      } else {
          resolve(res);
        }   
    });             
  });
};

my_function('http://www.google.com').then(function(res){console.log("Google: "+res.statusCode);},function(err){console.log(err);})
.then(
my_function('https://www.yahoo.co.in').then(function(res){console.log("Yahoo: "+res.statusCode)},function(err){console.log(err);}))
.then(
  my_function('https://www.youtube.com').then(function(res){console.log("Ytube: "+res.statusCode)},function(err){console.log(err);}));