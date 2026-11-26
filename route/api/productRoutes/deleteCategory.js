const express = require('express')
const _ = express.Router()
const deleteCategoryController = require('../../../controllers/deleteCategoryController')






_.delete('/deletecategory',deleteCategoryController )

module.exports=_