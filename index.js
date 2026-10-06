require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors')
const route  = require('./route');
const mongodbConfig = require('./dbConfig/mongodbConfig');
const port = 5000


mongodbConfig()

app.use(express.json())
app.use(cors())
app.use(route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})