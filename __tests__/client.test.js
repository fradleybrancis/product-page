import Enzyme from 'enzyme';
import React from 'react';
import App from '../client/src/Components/App.jsx';
import AllProducts from '../client/src/Components/AllProducts.jsx';
import Product from '../client/src/Components/Product.jsx';
import Modal from '../client/src/Components/Modal.jsx';
import json from '../data.json';


// Create dummy data to be passed into shallow rendered components

const dummyProduct = {
  id: 'cotton-cloud-jersey-duvet-cover-shams-light-heather-gray-t5082',
  name: 'Cotton Cloud Jersey Duvet Cover + Shams - Light Heather Gray',
  links: {
    www: 'https://www.westelm.com/products/cotton-cloud-jersey-duvet-cover-shams-light-heather-gray-t5082/',
  },
  priceRange: {
    selling: {
      high: 199, low: 34,
    },
  },
  thumbnail: {
    size: 'm', meta: '', alt: '', rel: 'thumbnail', width: 363, href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg', height: 363,
  },
  hero: {
    size: 'm', meta: '', alt: '', rel: 'hero', width: 363, href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg', height: 363,
  },
  images: [{
    size: 'm', meta: '', alt: '', rel: 'althero', width: 363, href: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0021/cotton-cloud-jersey-duvet-cover-shams-m.jpg', height: 363,
  }],
  swatches: [],
  messages: ['20% Off With Code SUMMERFUN'],
  flags: [{ bopisSuppress: false, rank: 3, id: 'newcore' }, { bopisSuppress: false, rank: 7, id: 'organic' }, { bopisSuppress: false, rank: 9, id: 'fairTrade' }],
  reviews: {
    recommendationCount: 0, likelihood: 0, reviewCount: 0, averageRating: 0, id: 'cotton-cloud-jersey-duvet-cover-shams-light-heather-gray-t5082', type: 'GROUP_REVIEWS',
  },
};

// Test to see if components will render given appropriate props

describe('Check if all components exist when given appropriate props', () => {
  it('expects App component to exist', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('expects AllProducts component to exist', () => {
    const wrapper = Enzyme.shallow(<AllProducts data={json.groups} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('expects Product component to exist', () => {
    const wrapper = Enzyme.shallow(<Product product={dummyProduct} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('expects Modal component to exist', () => {
    const wrapper = Enzyme.shallow(<Modal images={dummyProduct.images} />);
    expect(wrapper.exists()).toBe(true);
  });
});

// Tests if Modal displays correct image given appropriate props

describe('Checks if components have correct elements', () => {
  it('expects Modal to have certain image', () => {
    const wrapper = Enzyme.shallow(<Modal images={dummyProduct.images} />);
    expect(wrapper.containsMatchingElement(
      <img src='https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0021/cotton-cloud-jersey-duvet-cover-shams-m.jpg' alt="" />
      )
    ).toBeTruthy()
  });
  it('expects Product to have certain hero', () => {
    const wrapper = Enzyme.shallow(<Product product={dummyProduct} />);
    expect(wrapper.containsMatchingElement(
      <img src='https://www.westelm.com/weimgs/ab/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg' alt="" />
      )
    ).toBeTruthy()
  });
});
