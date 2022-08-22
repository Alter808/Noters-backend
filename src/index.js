/* eslint-disable no-console */
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bp = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')

// const port = 8000

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
})
const app = express()
app.use(
  cors({
    origin: '*',
    // eslint-disable-next-line comma-dangle
  })
)
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/api', routes)

app.use(express.json())

app.listen(process.env.PORT || 3000, () => {
  console.log('server running')
})
