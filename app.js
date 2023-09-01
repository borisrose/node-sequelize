const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const SellerRoutes = require('./routes/seller')
const ProductRoutes = require('./routes/product')

app.set('port', process.env.PORT)
app.set('host', process.env.HOST)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/sellers', SellerRoutes)
app.use('/api/products', ProductRoutes)

module.exports = app


