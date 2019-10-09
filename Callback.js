first (2,function(firstresult,err){
    debugger;
    if (!err)
    
    {
         console.log(firstresult +"c");  
        second (firstresult,function(secondresult,err){
            if (!err)
            
            {
                console.log(secondresult +"b");  
                third (secondresult,function(thirdresult,err){
                    if (!err)
                    
                    {
                        console.log(thirdresult +"a");   
                
                    }
                });
        
            }
        });

    }
});




function first (value, callback){
    callback(value+1,false);
}

function second (value, callback){
    callback(value+2,false);
}

function third (value, callback){
    callback(value+3,false);
}


// let x = function(){
//     console.log("first");
    // callback()
};

// let y = function(asd){
//     console.log("second");
//     asd();
// }

// y(x);
// x();

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(32243));