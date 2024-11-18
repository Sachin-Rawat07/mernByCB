const express=require('express');
const Product=require('../models/Product');
const Review=require('../models/Review')
const router=express.Router();  //mini instance bnaya h kyuki ek project m ek hi app bnta h
const {validateProduct,isLoggedIn}=require('../middleware');

//to show all products
//----------------------------------------------------------------------------------------------------------

router.get('/products',async(req,res)=>{
    try{
        let products= await Product.find({});
        res.render('products/index',{products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


//to show the form for new product
//----------------------------------------------------------------------------------------------------------

router.get('/product/new',isLoggedIn,(req,res)=>{
    try{
        res.render('products/new')
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to actually add the product 
//----------------------------------------------------------------------------------------------------------

router.post('/products',isLoggedIn,validateProduct,async(req,res)=>{
   try{
    let{name,img,price,desc}=req.body;
    await Product.create({name,img,price,desc});
    res.redirect('/products');
    }
catch(e){
    res.status(500).render('error' , {err:e.message});
}
})


//to show a particular product
//----------------------------------------------------------------------------------------------------------

router.get('/products/:id',isLoggedIn, async(req,res)=>{
   try{ let{id}=req.params;
    let foundProduct=await Product.findById(id).populate('reviews');  //Product is the model name here
    res.render('products/show',{foundProduct});}
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


//form to edit the product
//----------------------------------------------------------------------------------------------------------

router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
    try{let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit', {foundProduct})}
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


//to actually edit the data in db;
//----------------------------------------------------------------------------------------------------------

router.patch('/products/:id',isLoggedIn,validateProduct,async(req,res)=>{
    try{let {id} = req.params;
    let {name , img , price , desc} = req.body;
    await Product.findByIdAndUpdate( id , {name , img , price , desc}  )
    res.redirect(`/products/${id}`);}
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


//to delete a product
//----------------------------------------------------------------------------------------------------------

router.delete('/products/:id' ,isLoggedIn, async(req,res)=>{
    try{let {id} = req.params;
    const product=await Product.findById(id);


    // for(let id of product.reviews){
    //     await Review.findByIdAndDelete(id);
    // }

    await Product.findByIdAndDelete(id);
    res.redirect('/products');}
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


module.exports=router;