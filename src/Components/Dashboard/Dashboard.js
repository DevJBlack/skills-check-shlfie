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



  render(){
    return(
      <div>
        <Header/>
        <Product/>
        <Form/>    
      </div>
    )
  }    
}

export default Dashboard