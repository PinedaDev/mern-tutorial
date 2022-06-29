const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const app = express()
app.use(errorHandler)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Server started on port ${port}`))