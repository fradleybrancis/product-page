import React from 'react';

const Modal = props =>
  props.data.map(product => (
    <div className="product">
      <div>{ product.name }</div>
      <div className="productImage">
        <img src={product.hero.href} alt={product.hero.alt} />
        <div className="price">${product.priceRange.selling.high}</div>
      </div>
    </div>
  ));
export default Modal;
