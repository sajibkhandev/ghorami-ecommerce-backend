const Category = require('../models/categorySchema')

const deleteCategoryController = async (req, res) => {
    // console.log(req.query.id);


   let deletecategory = await Category.findByIdAndDelete(req.query.id)
   res.send({success:"Category Deleted"})
   






}

module.exports = deleteCategoryController