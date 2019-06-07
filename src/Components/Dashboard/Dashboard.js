import React, { Component } from 'react'
import Product from '../Product/Product'
import Header from '../Header/Header'
import Form from '../Form/Form'
import axios from 'axios'


class Dashboard extends Component {
  constructor(){
    super()
    this.state = ({
      product: []
    })
  }


  componentDidMount(){
    axios.get('/api/product').then(res => {
      console.log(res.data)
      this.setState({
        product: res.data
      })
    }).catch(err => console.log(err))
  }

  createProduct(){
    axios.post('/api/product').then(res => {
      this.setState({
        product: res.data
      })
    })
  }

  render(){
    let { product } = this.state
    let productMap = product.map(products => {
      return (
        <Product
          key={products.id}
          product={products}
        />
      )
    })
    return(
      <div>
        <Header/>
        <Form
          createProduct={this.createProduct}
        />    
        {productMap}
      </div>
    )
  }    
}

export default Dashboard