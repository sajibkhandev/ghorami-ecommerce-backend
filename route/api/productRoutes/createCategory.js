const express = require('express')

const _ = express.Router()


const createCategoryController = require('../../../controllers/createCategoryController')



_.post('/createcategory', createCategoryController)

module.exports=_