//function
//way1
// function sum(a,b){
//     let sum=a+b;
//     return(`my sum is ${sum}`);
// }
// console.log(sum(3,5));

//way2 ->first class function
let ans=function print(){
    return("i am print function");
    
}
// console.log(print());
console.log(ans());
