const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt');

const changePasswordController = async (req, res) => {
    let { newpassword, email } = req.body

    let existingdata = await UserSchema.find({ email: email })

    bcrypt.hash(newpassword, 10,async function (err, hash) {
        // console.log(hash);

        if (existingdata.length > 0) {
            await UserSchema.findOneAndUpdate({ email: email }, { password: hash }, { new: true })
            res.send({ success: "Password Updated" })

        } else {
            res.send({ error: "Invaild Credential" })

        }


    });













}
module.exports = changePasswordController