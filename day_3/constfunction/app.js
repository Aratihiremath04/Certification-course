// function Details(){
//     this.name="Kiran";
//     this.age=20;
//     this.address="Nipani"
// }
// let user=new Details();
// console.log(user.name);

//custom  constructor function
function Details(naam,umar,sthan){
    this.name=naam;
    this.age=umar;
    this.address=sthan;
    this.description=function(){
        return(`my name is ${this.name},my age is ${this.age}`)
    }
}
let user=new Details("Kiran",20,"Nipani");
let user1=new Details("Sham",22,"Mumbai");
let user2=new Details("Radha",25,"Pune");
// console.log(user);
console.log(user.description());
// console.log(user1);
console.log(user1.description());
// console.log(user2);
console.log(user2.description());