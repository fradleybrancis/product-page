import React from 'react';
import Product from './Product.jsx';

const AllProducts = props => props.data.map(currentProduct => (
  <Product className="product" product={currentProduct} />
));
export default AllProducts;
