import React from 'react';
import Product from './Product';
import './styles/Products.css';

function Products(props) {
  return (
    <div className="Products">
      {props.lists.map((item, i) => (
        <Product {...item} key={i} />
      ))}
    </div>
  )
}

export default Products;
