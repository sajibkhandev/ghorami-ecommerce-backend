const express = require('express')
const _ = express.Router()
const Registration = require('./authRoutes/registration')
const Login = require('./authRoutes/login')
const Otp = require('./authRoutes/otp')

_.use('/authentication',Registration)
_.use('/authentication',Login)
_.use('/authentication',Otp)


module.exports=_