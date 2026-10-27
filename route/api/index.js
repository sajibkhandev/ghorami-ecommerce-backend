const express = require('express')
const _ = express.Router()
const Registration = require('./authRoutes/registration')
const Login = require('./authRoutes/login')
const Otp = require('./authRoutes/otp')
const Forgetpassword = require('./authRoutes/forgetpassword')
const Changepassword = require('./authRoutes/changepassword')

_.use('/authentication',Registration)
_.use('/authentication',Login)
_.use('/authentication',Otp)
_.use('/authentication',Forgetpassword)
_.use('/authentication',Changepassword)


module.exports=_