const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt');

const loginController = async (req, res) => {
  let { email, password } = req.body

  let existingdata = await UserSchema.find({ email: email })
  // console.log(existingdata);

  if (existingdata.length > 0) {
   
     bcrypt.compare(password, existingdata[0].password, function (err, result) {
      if(result){
        if(existingdata[0].emailVerification){
        res.send({success:"Login Successfully"})
        }else{
          res.send({error:"Verify Your Email"})

        }
      }else{
        res.send({ error: "Invalid Cradrintial" })
      }
    });



  } else {
    res.send({ error: "Invalid Cradrintial" })
  }






}
module.exports = loginController