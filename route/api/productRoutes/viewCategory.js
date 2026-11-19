const express = require('express')
const _ = express.Router()
const viewCategoryController = require('../../../controllers/viewCategoryController')




_.get('/viewcategory', viewCategoryController)

module.exports=_