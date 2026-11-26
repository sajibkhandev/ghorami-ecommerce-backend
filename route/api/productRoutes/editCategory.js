const express = require('express')
const _ = express.Router()
const editCategoryController = require('../../../controllers/editCategoryController')

_.put('/editcategory', editCategoryController)

module.exports = _
