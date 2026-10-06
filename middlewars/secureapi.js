const secureapi = (req,res,next)=>{
    if(req.headers.authorization=="klsdjfklsdjhkj34jhkl5j34lkrjsdklfdksl"){
        next()

    }else{
        res.send({error:"Authentication Failed"})
    }
    

}
module.exports = secureapi