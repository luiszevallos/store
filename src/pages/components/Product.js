import React from 'react';
import './styles/Product.css'
import Photo from '../../assets/Franela-negra-Verticales.jpg'
import { Button } from '@material-ui/core';

function Product(props) {
  const [add, setAdd] = React.useState(false)
  return (
    <div className="Product">
      <img src={props.image || Photo} alt='Product' width="100%" height="280px" />
      <span className="Product_name">
        {props.marca} - {props.name}
      </span>
      <span className="Product_price">$ {props.price}</span>
      <div className="Product_button">
        <div>
          <Button style={buttonDetails}>
            DETAILS
          </Button>
          {add ? (
            <Button style={buttonAddMore} onClick={() => setAdd(!add)}>
              ADD MORE
            </Button>
          ) : (
            <Button style={buttonAddCart} onClick={() => setAdd(!add)}>
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product;

const buttonDetails = {
  fontSize: 12,
  color: '#6b6b6b',
  paddingLeft: 15, 
  paddingRight: 15,
  marginRight: 10,
}

const buttonAddCart = {
  fontSize: 12,
  color: '#fff',
  backgroundColor: '#000',
  paddingLeft: 10,
  borderRadius: 0, 
  paddingRight: 10,
  marginRight: 5,
}

const buttonAddMore = {
  fontSize: 12,
  color: '#000',
  borderWidth: 2,
  borderColor: '#000',
  borderStyle: 'solid',
  backgroundColor: '#fff',
  paddingLeft: 10,
  borderRadius: 0, 
  paddingRight: 10,
  marginRight: 5,
}