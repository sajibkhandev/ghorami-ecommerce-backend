const emailRegex = require('../helpers/emailRegex')
const registrationController = (req,res)=>{
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
        console.log("database e data jave");
        
    }
    

}

module.exports = registrationController