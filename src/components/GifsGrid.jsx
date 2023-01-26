import React, {useContext} from 'react';
//import styled from "@emotion/styled";
import GifsContext from '../GifsContext';
import GifItem from './GifItem';

const GifsGrid = () => {
    const {
      state: {gifs, filter},
    } = useContext(GifsContext);
    
    // restrict number of gifs shown if filter is 2 chars or less
    // show all other wise (greater likelyhood it's actually a word)
    let max = (filter.trim().length > 2) ? -1 : 18;

    // default component if no gifs with matching tags are found.
    const Default = () => (
      <div id="default" className="filter-default">
        No matching tags found.
      </div>
    )

    // is a valid filter string if 2 characters or more after trimming
    // single characters get too many matches, poor UX -> unable to search for gifs with "I" though
    const cleanFilter = filter.toLowerCase().trim();
    const validFilter = cleanFilter.length > 1 ? cleanFilter : "";
    
    return (
        <div className="gif-grid">
          {/* if after filtering the resulting array of gifs has no results, show the Default component to let the user know */}
          {gifs.filter((gif) => gif.tags.toLowerCase().includes(validFilter)).length ? null : <Default/>}

          {/* show all gifs with tags matching filter (up to max) as GifItem components  */}
          {gifs
            .filter((gif) =>
              gif.tags.toLowerCase().includes(validFilter)
            )
            .slice(0, max)
            .map((gif) => (
              <GifItem gif={gif} key={gif._id} />
            ))}
        </div>

    );
};

export default GifsGrid;