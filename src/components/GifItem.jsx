import React from 'react';

import GifType from '../GifType'

const GifItem = ({ gif }) => (
        <div className="gif-item" key={gif._id}>
          <img src={gif.url} alt="allen gif"></img>
        </div>
);

GifItem.propTypes = {
    GifType,
}

export default GifItem;