//case1
// function a(b){
//     console.log("I am inside a");
//     b();
// }
// function b(){
//     console.log("I am inside b");
// }
// console.log(a(b));

//case2
function a(){
    console.log("I am inside a");
    
    function b(){
        console.log("I am inside b");
    }
    return b;
}
let ans=a();
console.log(ans());
