import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(){
    super()
    this.state = ({
      name: '',
      price: 0,
      img: ''
    })
    this.add = this.add.bind(this)
  }

  handleValue = (e) => {
    const { value, name} = e.target
    this.setState({
      [name]: value
    })
  }


  add(){
    let car = this.state

    this.props.createProduct(car)
    this.setState({
      name: '',
      price: 0,
      img: ''
    })
  }

  render(){
    let { img, name, price } = this.state
    return(
      <div className="green-box">
        <div className="img-placeholder" >
          <img src={img} alt="Place Holder"/>
        </div>
        <div>
          <p>Image URL:</p>
          <input 
            type="text" 
            placeholder="Image URL"
            name="img"
            value={img}
            onChange={this.handleValue}
          />
        </div>
        <div>
          <p>Product Name:</p>
          <input 
            type="text" 
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleValue}
          />
        </div>
        <div>
          <p>Price:</p>
          <input 
            type="text" 
            placeholder="0" 
            step="0.01"
            name="price"
            value={price}
            onChange={this.handleValue}
          />
        </div>
        <div className="buttons">

            <button>Cancel</button>

            <button onClick={this.add}>Add To Inventory</button>

        </div>
      </div>
    )
  }
}

export default Form