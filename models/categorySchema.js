const mongoose =require('mongoose')
const { Schema } = mongoose

const categorySchema = new Schema({
    categoryname:{
        type:String,
        required:true,
        unique:true
    },
    categoryowerid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserList"
        
    }
    

})

module.exports=mongoose.model("Category",categorySchema)