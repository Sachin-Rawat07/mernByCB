const express=require('express');
const app=express();
const path=require('path');

const mongoose=require('mongoose');

const methodOverride = require('method-override')
const Sport = require('./models/Sport');


mongoose.connect('mongodb://127.0.0.1:27017/sports-club')
.then(()=>console.log("DB Conneceted Successfully"))
.catch((err)=>console.log(err,"DB not Connected"))



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, 'public'))) 
app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'))


//READ

app.get('/sports',async(req,res)=>{
    let allSports=await Sport.find();
    res.render('index',{allSports})
    
})





//Create
    //form
    app.get('/sports/new',(req,res)=>{
        res.render('new')
    })
    //actual adding 
    app.post('/sports', async (req,res)=>{
        let {title, year, isPlayed, description} = req.body;

        let newSport=await Sport.create({title,year,isPlayed,description})
        res.redirect('/sports')
    })





// show a particular product

app.get('/sports/:id' ,async(req,res)=>{
    let{id}=req.params;
    let foundSport=await Sport.findById(id);
    res.render('show',{foundSport});
})



//Update

    //form for updation

    app.get('/sports/:idd/edit',async (req,res)=>{
        let{idd}=req.params;
        let foundSport= await Sport.findById(idd);
        res.render('edit',{foundSport});
    })

    //actually changing the data

    app.patch('/sports/:idd',async(req,res)=>{
        let{idd}=req.params;
        let {title ,year ,description}=req.body;

        // await Sport.findByIdAndUpdate(idd,{title:title ,year:year , description:description})   both are same in js6
        await Sport.findByIdAndUpdate(idd,{title ,year , description})
        res.redirect('/sports')//path get req bhejna
    })


    // DELETE
app.delete('/sports/:id' , async(req,res)=>{
    let {id} = req.params;
    await Sport.findByIdAndDelete(id);
    res.redirect('/sports') //path get request bhejna
})



let PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})