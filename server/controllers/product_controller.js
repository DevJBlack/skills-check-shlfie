module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get('db')
    db.get_products().then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  getProduct: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params
    db.get_product(id).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  createProduct: (req, res) => {
    let db = req.app.get('db')
    db.create_product(req.body).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  updateProduct: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params;
    let product = req.body;
    product.id = id;
    db.update_product(product).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  deleteProduct: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params
    db.delete_product(id).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  }
}