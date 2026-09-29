const express = require('express')
const _ = express.Router()
const Registration = require('./authRoutes/registration')

_.use('/authentication',Registration)

module.exports=_