//object
// let person ={
//     name:"Ram",
//     age:20,
//     fav_color:"white",
//     clgname:"Kle"
// }

// // console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person['age']);

// //change properties in object [update]
// person.name='Ravi';
// // console.log(person);

// //adding new property
// person.gender="female";
// console.log(person);

// //delete property
// delete person.fav_color;
// console.log(person);

 let person ={
    name:"Ram",
    age:20,
    fav_color:"white",
    fun:function print(){
        return(`my name is ${this.name} and my age is ${this.age}`);
    },
    newobj:{
        gender:"female",
        address:"Nipani",
    }
}
// console.log(person.fun());
console.log(person.newobj.address);