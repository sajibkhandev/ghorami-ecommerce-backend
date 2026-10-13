const emailRegex = require('../helpers/emailRegex')
const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt')
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");

const registrationController = async (req, res) => {
    let { username, email, password } = req.body

    if (!username) {
        res.send("username is required")
    } else if (!email) {
        res.send("email is required")
    } else if (!emailRegex(email)) {
        res.send("valid email required");
    }
    else if (!password) {
        res.send("password is required")
    }
    else {


        let existingData = await UserSchema.find({ email: email })
        if (existingData.length > 0) {
            res.send({ error: "User Already Existed" })

        } else {
            bcrypt.hash(password, 10, function (err, hash) {
                let otp = otpGenerator.generate(6,
                    {
                        lowerCaseAlphabets: false,
                        upperCaseAlphabets: false,
                        specialChars: false
                    })
                let data = new UserSchema({
                    username: username,
                    email: email,
                    password: hash,
                    otp: otp
                })
                data.save()
                res.send(
                    {
                        email: data.email,
                        username: data.username,
                        success: "Registration Successfully"
                    })

            });

            



        }
    }
}

module.exports = registrationController

