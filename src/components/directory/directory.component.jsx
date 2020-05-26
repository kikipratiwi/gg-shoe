import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'oxford',
          imageUrl: 'https://i.ibb.co/mtr3c7L/3807a0683ce645448646facde754043f.jpg',
          id: 1
        },
        {
          title: 'heels',
          imageUrl: 'https://i.ibb.co/HPVbbZ2/f9358c4f2ad9fbc6118cbae5096aed0d.jpg',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/smJByHs/9701a444f1c1fb3cf2b700811f1ffc7a.jpg',
          id: 3
        },
        {
          title: 'boots',
          imageUrl: 'https://i.ibb.co/X2ycnsv/b02fe37cf55263df181304e214e19ee7.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'flats',
          imageUrl: 'https://i.ibb.co/2S5RZth/560bba1dc6e129fd36b8393082dd20fd.jpg',
          size: 'large',
          id: 5
        }
      ]  
    } 
  }

  render() {
    return(
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
