require('dotenv').config()
const express = require('express')
const massive = require('massive')
const productCtrl = require('./controllers/product_controller')

let { SERVER_PORT, CONNECTION_STRING } = process.env

let app = express()

app.use(express.json())



massive( CONNECTION_STRING ).then(db => {
  console.log('DataBase is Secure')
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on this port ${SERVER_PORT}`))
})
 

app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:id', productCtrl.getProduct)
app.post('/api/product', productCtrl.createProduct)
app.put('/api/product/:id', productCtrl.updateProduct)
app.delete('/api/product/:id', productCtrl.deleteProduct)

