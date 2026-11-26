const mongoose = require('mongoose')
const Category = require('../models/categorySchema')

const editCategoryController = async (req, res) => {
    const { id, categoryname } = req.body

    if (!mongoose.Types.ObjectId.isValid(id) || !categoryname || !categoryname.trim()) {
        return res.status(400).send({ error: "Invalid Category Data" })
    }

    try {
        const category = await Category.findByIdAndUpdate(
            id,
            { categoryname: categoryname.trim() },
            { new: true, runValidators: true }
        )

        if (!category) {
            return res.status(404).send({ error: "Category Not Found" })
        }

        return res.send({ success: "Category Updated", category })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).send({ error: "Category Existed" })
        }
        throw error
    }
}

module.exports = editCategoryController
