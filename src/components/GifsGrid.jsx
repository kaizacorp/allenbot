import React, {useContext} from 'react';
//import styled from "@emotion/styled";
import GifsContext from '../GifsContext';
import GifItem from './GifItem';

const GifsGrid = () => {
    const {gifs, filter} = useContext(GifsContext);
    return (
        <div className="gif-grid">
          {gifs
            .filter((gif) =>
              gif.tags.toLowerCase().includes(filter.toLowerCase())
            )
            .slice(0, 25)
            .map((gif) => (
              <GifItem gif={gif} key={gif._id} />
            ))}
        </div>

    );
};

export default GifsGrid;