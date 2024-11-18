const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blogs/Blogs'); 


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, 'public'))) //static files (public)

app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/demosam')
.then(()=>console.log("DB Conneceted Successfully"))
.catch((err)=>console.log(err,"DB not Connected"))

app.get('/blogs',async(req,res)=>{
    let allBlogs=await Blog.find({});
    console.log(allBlogs,'allBlogs')
    res.render('blogs/index');

})

let port=8080;
app.listen(port,()=>{
    console.log(`server is running at port  ${port}`);
})