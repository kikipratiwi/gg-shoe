import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        collection: SHOP_DATA
    };
  }

    
  render() {
    const {collection} = this.state;
    return(
      <div className='shop-page'>
        {
          collection.map(({ id, ...otherCollectionItems }) => (
            <CollectionPreview key={id} {...otherCollectionItems} />
          ))
        }
      </div>
    );
  }
    
}

export default Shop;
