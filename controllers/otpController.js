const UserSchema = require('../models/userSchema')


const otpController = async (req, res) => {
  let { otp, email } = req.body

  let existingdata = await UserSchema.find({ email: email })

  // console.log(existingdata[0].otp);

  if (existingdata.length > 0) {
    if (otp == existingdata[0].otp) {
      await UserSchema.findOneAndUpdate({email:email},{otp:""},{new:true})
      await UserSchema.findOneAndUpdate({email:email},{emailVerification:true},{new:true})
      res.send({success:"Otp match"});

    } else {
      res.send({error:"Otp not match"});

    }

  }else{
    res.send({error:"We don't find your account"})
  }






}
module.exports = otpController