const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.use(fileUpload());
app.use('/api', require('./routes/api'))
app.use('/', require('./routes'))

app.listen(8000, () => {
  console.log("Server listening on port 8000")
})