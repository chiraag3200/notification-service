const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const notificationRouter = require('./routes/notifications')

require('dotenv').config()
require('./cronjob/notifications')();

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongoose DB connection established successfully')
})

app.use('/user', userRouter)
app.use('/notifications', notificationRouter)


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
