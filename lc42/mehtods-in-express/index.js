const express=require('express');
const app=express();

// app.use('/hello'){
    
// }

const PORT=6760;
app.listen(PORT,(req,res)=>{
    console.log(`Server is running at port${PORT}`);
})