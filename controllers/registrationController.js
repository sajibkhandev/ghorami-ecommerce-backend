const emailRegex = require('../helpers/emailRegex')
const UserSchema = require('../models/userSchema')
const registrationController =async(req,res)=>{
    let {username,email,password}=req.body

    if(!username){
        res.send("username is required")
    }else if(!email){
         res.send("email is required")
    }else if(!emailRegex(email)){
        res.send("valid email required");
    }
    else if(!password){
        res.send("password is required")
    }
    else{
        
    let existingData = await UserSchema.find({email:email})
     if(existingData.length>0){
        res.send({error:"User Already Existed"})

     }else{
         let data = new UserSchema({
            username,
            email,
            password
        })
        data.save()
        res.send(
            {
                email:data.email,
                username:data.username,
                success:"Registration Successfully"
            })
     }  
    }
}

module.exports = registrationController

