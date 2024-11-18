const mongoose=require('mongoose');

//schema =blueprint of collection of data
const sportSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required: true
    },
    year :{
        type:Number,
        min:0,
        required:true
    },
    isPlayed:{
        type:Boolean,
        default:false,
        required:true
    },
    description:{
        type:String,
        trim:true
    }
})
//model define => singular,Capital
const Sport=mongoose.model('Sport',sportSchema)
//vs code m naam  =>  db mei naam     iski madad se


module.exports=Sport;