import React from 'react';
import Product from './Product.jsx';

const AllProducts = props =>
  props.data.map(currentProduct => (
    <Product className="product" product={currentProduct}/>
    // <div className="product">
    //   <div>{ product.name }</div>
    //   <div className="productImage">
    //     <img src={product.hero.href} alt={product.hero.alt} />
    //     <div className="price">${product.priceRange.selling.high}</div>
    //   </div>
    // </div>
  ));
export default AllProducts;
