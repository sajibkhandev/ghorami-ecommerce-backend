const emailRegex = (email)=>{
    let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(emailRegex.test(email)){
        return true
    }

}
module.exports = emailRegex