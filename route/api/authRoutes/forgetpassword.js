const express = require('express')
const _ = express.Router()
const forgetPasswordController = require('../../../controllers/forgetPasswordController')



_.post('/forgetpassword', forgetPasswordController)

module.exports=_