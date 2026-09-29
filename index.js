const express = require('express');
const route  = require('./route');
const app = express()
const port = 5000

app.use(express.json())
app.use(route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})