// greet callback function expression that greets
function callFunction(greet) {
    greet();
}


// Farewell function expression that says Hi
var sayHi = function() {
    console.log('Hello, this has been an example of a call function expression');
}

callFunction(sayHi);