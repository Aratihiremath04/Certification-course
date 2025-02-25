let fs=require('fs');
//perform CRUD operation
// let data="hi today's weather is cool";

//task1 create a file  and write data into it
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created successfully");
// })

//way2
// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//              if(err) throw err;
//             console.log("file is created successfully");
//         });


//read a file
// let fileread=fs.readFileSync('demo.txt');
// console.log(fileread.toString());

//update a file
// fs.appendFileSync('demo.txt','\n I hope this weather will be same for next 2 days');

//delete a data
// fs.unlinkSync('demo.txt');

let data="Welcome to kle bca nipani";
fs.writeFileSync('demo.txt',data,
      (err)=>{
             if(err) throw err;
                console.log("file is created successfully");
            });
    
let read=fs.readFileSync('demo.txt');
console.log(read.toString());

fs.appendFileSync('demo.txt',"\n good morning");

// to delete data
// fs.truncateSync('demo.txt');

