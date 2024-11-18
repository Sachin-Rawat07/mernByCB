const express=require("express");
const app=express();

const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, 'public'))) 

app.use(express.urlencoded({extended:true}))



app.get('/sam',(req,res)=>{
    res.render("index");
    console.log(req.query);
    console.log(req.params.name);
    
})



let port =8080;
app.listen(port,(req,res)=>{
    console.log(`server is running at ${port}`)
})