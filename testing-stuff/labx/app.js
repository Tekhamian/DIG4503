// Delayed (3 sec) Console log action
// setTimeout(function(){
//     console.log('3 seconds have passed!!');
// }, 3000);

let time = 0;
let timer = setInterval(function(){
    time += 1; //Time = 1 sec
    console.log(time + ' seconds have passed!!');
    if (time > 9){
        clearInterval(timer) // stops the loop after 10  seconds
    }
}, 1000);//where X000 = x seconds