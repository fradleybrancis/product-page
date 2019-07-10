import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.state = {
      displayedImage: images[0],
    };
  }

  render() {
    const { handleClick } = this.props;
    const { displayedImage } = this.state;
    return (
      <div className="modal">
        <section className="modal-main">
          <img src={displayedImage.href} alt={displayedImage.alt} onClick={handleClick}/>
        </section>
      </div>
    )
  }
}

export default Modal;
