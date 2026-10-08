const express = require('express')
const _ = express.Router()
const Registration = require('./authRoutes/registration')
const Login = require('./authRoutes/login')

_.use('/authentication',Registration)
_.use('/authentication',Login)

module.exports=_