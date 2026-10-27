const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt');

const forgetPasswordController = async (req, res) => {
  let { findemail } = req.body
  let findexistingemail=await UserSchema.find({email:findemail})
  // console.log(findexistingemail);

  if(findexistingemail.length>0){
    res.send({success:"Account found"})

  }else{
    res.send({error:"Your account is not Found"})

  }
  

  






}
module.exports = forgetPasswordController