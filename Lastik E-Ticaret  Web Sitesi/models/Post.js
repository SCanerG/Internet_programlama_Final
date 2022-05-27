const { Int32 } = require('mongodb')
const mongoose= require('mongoose')



const PostSchema= new mongoose.Schema({
    productName:{type:String,require:true},
    unitPrice:{type:String,require:true},
    brandName:{type:String,require:true},
    season:{type:String,require:true},
    })
module.exports=mongoose.model('products',PostSchema)

