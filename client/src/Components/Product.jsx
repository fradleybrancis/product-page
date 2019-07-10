import React from 'react';
import Modal from './Modal.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  render() {
    const { product } = this.props;
    const { clicked } = this.state;
    if (clicked) {
      return <Modal handleClick={this.handleClick} images={product.images}/>
    }
    return (
      <div className="product">
        <div className="productName">{ product.name }</div>
        <div className="productImage" onClick={this.handleClick}>
          <img src={product.hero.href} alt={product.hero.alt} />
          <div className="price">${product.priceRange.selling.high}</div>
        </div>
      </div>
    );
  }
}

export default Product;
