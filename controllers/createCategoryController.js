const Category = require('../models/categorySchema')

const createCategoryController = async (req, res) => {
    let { categoryname, categoryowerid } = req.body

    let existingCategory = await Category.findOne({ categoryname: categoryname })



    if (existingCategory) {
        res.send({ error: "Category Existed" })
    } else {
        let category = new Category({
            categoryname: categoryname,
            categoryowerid: categoryowerid
        })

        category.save()
        res.send({ success: "Category Created" })
    }





}

module.exports = createCategoryController