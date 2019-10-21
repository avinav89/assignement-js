// var request = require("request");
// function callWebyahoo() {
//     request('https://in.yahoo.com/', function (error, response, body) {
//         //   console.log('error:', error); // Print the error if one occurred
//         //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log('body:', body); // Print the HTML for the Google homepage.
//     });
// }
// export {callWebyahoo};
//-------------------------------------------------------------------------------------------
// function show (a){
//     console.log("i am function" + a);

// }
// function geeky (a,callback){
// callback(a);
// }
// geeky(101,show)

//--------------------------synchronous function------------------------------------------

// function geeky (callback){
//     var a =101;
//     callback(a);
// }
// geeky(function (a){
//     console.log("i am synchronous function " + a);})
    
//-------------------------Arrow function---------------------------------------------------


// function geeky (callback){
//     var a =101;
//     callback(a);
// }
// geeky(a => console.log("i am Arrow function " + a))
//---------------------asynchronous function-----------------------------------------------------
// setTimeout(function show (a){
//         console.log("i am function" + a);
    
//     },5000);

//     console.log("end");
//----------------------------------------------------------------------------------

const reques = require("request");
let result;
reques('http://www.somepage.com', function (error, response, body) {
    if(error){
        // Handle error.
    }
    else {
        result = body;
    }
});
console.log(result);


