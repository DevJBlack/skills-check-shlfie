import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(){
    super()
    this.state = ({
      name: '',
      price: 0,
      imgUrl: ''
    })
  }

  handleName(val){
    this.setState({
      name: val
    })
  }

  handlePrice(val){
    this.setState({
      price: val
    })
  }

  handleImgUrl(val){
    this.setState({
      imgUrl: val
    })
  }

  render(){
    let { input, imgUrl } = this.state
    return(
      <div className="green-box">
        <div className="img-placeholder" >
          <img src={imgUrl} alt="Place Holder"/>
        </div>
        <div>
          <p>Image URL:</p>
          <input 
            type="text" 
            value={input}
            onChange={(e) => this.handleImgUrl(e.target.value)}
          />
        </div>
        <div>
          <p>Product Name:</p>
          <input 
            type="text" 
            value={input}
            onChange={(e) => this.handleName(e.target.value)}
          />
        </div>
        <div>
          <p>Price:</p>
          <input 
            type="text" 
            placeholder="0" 
            step="0.01"
            onChange={(e) => this.handlePrice(e.target.value)}
          />
        </div>
        <div className="buttons">

            <button>Cancel</button>

            <button>Add To Inventory</button>

        </div>
      </div>
    )
  }
}

export default Form