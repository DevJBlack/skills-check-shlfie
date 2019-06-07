import React from 'react'

function Product(props){
  const {product} = props
    return(
      <div className="red-boxes">
        <div>Name: {product.name}</div>
        <div>Price: {product.price}</div>
        <img className="pic" width="200" src={product.img} alt=""/>
      </div>
  )
}

export default Product 