//sync
// console.log("first");
// console.log("second");
// console.log("third");

//async->setTimeout
// console.log("second");

// setTimeout(function(){
//     console.log("it will after 2s")
// },2000)
// console.log("first");
// setTimeout(function(){
//     console.log("it will after 4s")
// },4000)

//setInterval()
// setInterval(function(){
//     console.log("it will run after 2sec")
// },2000)

let count=0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);
    if(count===10){
        clearInterval(intervalID);
        console.log("task completed");
    }
},1000)