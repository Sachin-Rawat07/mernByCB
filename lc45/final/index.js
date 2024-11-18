const express= require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, 'public'))) //static files (public)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/sam',(req,res)=>{
    res.render('index')
})

app.post('/sam',(req,res)=>{
    console.log(req.body)
    res.send(req.body);
})




let PORT=8080;
app.listen(PORT,(req,res)=>{
    console.log(`server is running at port:  ${PORT}`);
})