const express = require('express')
const _ = express.Router()
const changePasswordController = require('../../../controllers/changePasswordController')



_.post('/changepassword', changePasswordController)

module.exports=_