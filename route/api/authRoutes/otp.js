const express = require('express')
const _ = express.Router()
const otpController = require('../../../controllers/otpController')



_.post('/otp', otpController)

module.exports=_