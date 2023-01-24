import React, {useContext} from 'react';
//import styled from "@emotion/styled";
import GifsContext from '../GifsContext';
import GifItem from './GifItem';

const GifsGrid = () => {
    const {
      state: {gifs, filter},
    } = useContext(GifsContext);
    let max = (filter.trim().length > 1) ? -1 : 18;
    const Default = () => (
      <div id="default" className="filter-default">
        No matching tags found.
      </div>
    )
    return (
        <div className="gif-grid">
          {gifs.filter((gif) => gif.tags.toLowerCase().includes(filter.toLowerCase().trim())).length ? null : <Default/>}
          {gifs
            .filter((gif) =>
              gif.tags.toLowerCase().includes(filter.toLowerCase().trim())
            )
            .slice(0, max)
            .map((gif) => (
              <GifItem gif={gif} key={gif._id} />
            ))}
        </div>

    );
};

export default GifsGrid;