// File system -it is the traditional way.
// it is already present inside the node js


let fs=require('fs');
let data="hello world";



//CREATE - fs.writeFile( filename , data , optional parameter->(encoding ,flag) , callback function)



/*
fs.writeFile('abc.txt',data,{
    encoding:'utf-8',
    flag:'w'
    },(err)=>{
    if(err) throw(err)
        console.log("file written successfully")
})
*/

fs.writeFile('def.txt',"sachin rawat",{
    encoding:'utf-8',
    flag:'w'
    },(err)=>{
    if(err) throw(err)
        console.log("file written successfully")
})




//READ - fs.readFile(filename,optional parameter, callback function)



/*
fs.readFile('def.txt',{
    encoding:'utf-8',
    flag:'r'
    },(err,data)=>{if(err) {
    throw (err)}
    console.log(data)
})
*/


/*
fs.readFile('def.txt',{},(err,data)=>{if(err) {
    throw (err)}
    console.log(data) //data will print in buffer format
})

fs.readFile('def.txt',{},(err,data)=>{if(err) {
    throw (err)}
    console.log(data.toString()); 
})*/




//UPDATE --fs.appendFile(filename ,msg,optional parameter,callback function)




let msg=" from noida";

fs.appendFile('def.txt',msg,{},(err)=>{
    if(err){throw err}
    console.log("file updated successfully");

})



// DELETE --fs.unlink(filename,callbackFunction)




/*
fs.unlink('def.txt',(err)=>{
    if(err){throw err}
    console.log("file deleted successfully")
})*/