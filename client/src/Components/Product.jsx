import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    console.log(this.props.product)
    const { product } = this.props;
    return (
      <div className="product">
        <div>{ product.name }</div>
        <div className="productImage">
          <img src={product.hero.href} alt={product.hero.alt} />
          <div className="price">${product.priceRange.selling.high}</div>
        </div>
      </div>
    );
    
  }
}

Product.propTypes = {
  product: PropTypes
}