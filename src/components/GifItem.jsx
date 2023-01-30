import React from 'react';

import GifType from '../GifType'

const GifItem = ({ gif }) => (
        <div className="gif-item" key={gif._id}>
          <a href={gif.url}><img src={gif.url} alt={gif.tags} title={gif.tags}></img></a>
        </div>
);

GifItem.propTypes = {
    GifType,
}

export default GifItem;