import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentDidMount() {
    // creates function to exit modal on any key press
    const { handleClick } = this.props;
    window.addEventListener('keyup', handleClick, false);
  }

  componentWillUnmount() {
    // removes function when modal is closed to prevent duplication
    const { handleClick } = this.props;
    window.removeEventListener('keyup', handleClick, false);
  }

  scrollRight() {
    // checks if there is any more images the modal can pull up for current selected product
    const { images } = this.props;
    const { currentImage } = this.state;
    if (images[currentImage + 1]) {
      this.setState({ currentImage: currentImage + 1 });
    }
  }

  scrollLeft() {
    // checks if there is any previous images
    const { images } = this.props;
    const { currentImage } = this.state;
    if (images[currentImage - 1]) {
      this.setState({ currentImage: currentImage - 1 });
    }
  }

  render() {
    const { handleClick, images } = this.props;
    const { currentImage } = this.state;
    return (
      <div className="modal">
        <button id="scrollLeft" type="button" onClick={this.scrollLeft}>{'<'}</button>
        <div className="modal-main">
          <img src={images[currentImage].href} alt={images[currentImage].alt} onClick={handleClick} />
        </div>
        <button id="scrollRight" type="button" onClick={this.scrollRight}>{'>'}</button>
      </div>
    );
  }
}

export default Modal;
