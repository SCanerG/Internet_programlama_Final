const { Int32 } = require('mongodb')
const mongoose= require('mongoose')


const userSchema= new mongoose.Schema({
_name:{type:String,require:true ,unique:true},
pass:{type:String,require:true , unique:true},
pass2:{type:String,require:true},
})
module.exports=mongoose.model('users',userSchema)

