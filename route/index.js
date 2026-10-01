const express = require('express')
const _ = express.Router()
const Auth = require('./api/index')

const API = process.env.API



_.use(API,Auth)

module.exports=_