const mongoose =require('mongoose')
const { Schema } =mongoose

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    emailVerification:{
        type:Boolean,
        default:false
    }
    

})

module.exports=mongoose.model("UserList",userSchema)