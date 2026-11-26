const express = require('express')
const _ = express.Router()
const Registration = require('./authRoutes/registration')
const Login = require('./authRoutes/login')
const Otp = require('./authRoutes/otp')
const Forgetpassword = require('./authRoutes/forgetpassword')
const Changepassword = require('./authRoutes/changepassword')
const CreateCategory = require('./productRoutes/createCategory')
const ViewCategory = require('./productRoutes/viewCategory')
const DeleteCategory = require('./productRoutes/deleteCategory')
const EditCategory = require('./productRoutes/editCategory')

_.use('/authentication',Registration)
_.use('/authentication',Login)
_.use('/authentication',Otp)
_.use('/authentication',Forgetpassword)
_.use('/authentication',Changepassword)

_.use('/product',CreateCategory)
_.use('/product',ViewCategory)
_.use('/product',DeleteCategory)
_.use('/product',EditCategory)


module.exports=_