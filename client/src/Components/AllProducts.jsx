import React from 'react';
import Product from './Product.jsx';

const AllProducts = props => props.data.map((currentProduct, index) => {
  return <Product className="product" product={currentProduct} key={index} />;
});
export default AllProducts;
