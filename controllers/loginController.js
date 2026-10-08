const UserSchema = require('../models/userSchema')

const loginController = async (req,res)=>{
    let {email,password}=req.body

  let existingdata = await UserSchema.find({email:email})
//   console.log(existingdata);
  if(existingdata.length>0){
       if(existingdata[0].password==password){
         res.send({success:"Login Successfully"})
       }else{
        res.send({error:"Invalid Cradrintial"})
       }
   

  }else{
    res.send({error:"Invalid Cradrintial"})
  }
  
  




}
module.exports=loginController