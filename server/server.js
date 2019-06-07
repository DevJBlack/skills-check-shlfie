const express = require('express')
const massive = require('massive')
require('dotenv').config()

const productCtrl = require('./controllers/product_controller')

let app = express()

let { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive( CONNECTION_STRING ).then(db => {
  console.log('DataBase is Secure')
  app.set('db', db)
})


app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:id', productCtrl.getProduct)
app.post('/api/product', productCtrl.createProduct)
app.put('/api/product/:id', productCtrl.updateProduct)
app.delete('/api/product/:id', productCtrl.deleteProduct)


app.listen(SERVER_PORT, () => console.log('Listening on this port', SERVER_PORT))