const express=require('express');
const app=express();
// console.log(express);

//middleware
 app.use('/home',(req,res)=>{
     // console.log(req);
    res.send('<h1>response from server</h1>');
     console.log(res);
 })
 app.listen(8080,()=>{
     console.log("server is running at port 8080");
 })

//get()
app.get('/ghar',(req,res)=>{
    res.send('<h1> Response from my route-ghar jana hai</h1>')
})

 app.get('/gharjana',(req,res)=>{
   res.send('<h1> Response from my route-ghar chale gaye</h1>')
 })