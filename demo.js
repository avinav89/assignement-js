var numb = [1, 2, 3, 4, 5, 7];
var myTotal = 0;
function sum() {
    for (var i = 0; i < numb.length; i++) {
        myTotal += numb[i];
    }
} sum()
console.log(myTotal);
//================================================================================
function sepr() {
    var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    for (var i = 0; i < Object.keys(obj).length; i++) {
        var key = Object.keys(obj)[i];
        var value = obj[key];
        console.log(value)
    }
} sepr()

//================================================================================

function sepr1() {
    {
        var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
        var myTotal = 0;
        var lan = Object.keys(obj).length;
        for (var i = 0; i < lan; i++) {
            var key = Object.keys(obj)[i]
            var value = obj[key];
            myTotal += value
            console.log(key + ":" + value + ",");

        }
        var qw = String.fromCharCode(70);

        var low = qw.toLowerCase();
        console.log(low)
        obj.f = myTotal;

    } var key = Object.keys(obj)[lan]
    var value = obj[key];
    myTotal += value
    console.log(key + ":" + value);
}
sepr1()
