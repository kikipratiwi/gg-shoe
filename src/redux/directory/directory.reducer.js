const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/mtr3c7L/3807a0683ce645448646facde754043f.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/HPVbbZ2/f9358c4f2ad9fbc6118cbae5096aed0d.jpg',
      id: 2,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/smJByHs/9701a444f1c1fb3cf2b700811f1ffc7a.jpg',
      id: 3,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/X2ycnsv/b02fe37cf55263df181304e214e19ee7.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    }, 
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/2S5RZth/560bba1dc6e129fd36b8393082dd20fd.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]  
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
