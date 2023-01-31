import React, {useContext} from 'react';
import GifsContext from '../GifsContext';
import GifItem from './GifItem';

// default component if no gifs with matching tags are found.
const NoMatchingTags = ({tag}) => {
  return (
    <div id="default" className="filter-default" >
    No matching tags found for: <br/> '{tag}'
    </div>
  );
}

const GifsGrid = () => {
    const {
      state: {gifs, filter},
    } = useContext(GifsContext);

    // is a valid filter string if 2 characters or more after trimming
    // single characters get too many matches, poor UX -> unable to search for gifs with "I" though
    const cleanFilter = filter.toLowerCase().trim();
    const validFilter = cleanFilter.length > 1 ? cleanFilter : "";
    const GIF_LIMIT = 18;
    
    return (
        <div className="gif-grid">
          {/* if after filtering there are no matching results, let the user know which query failed */}
          {gifs.filter((gif) => (gif.tags.toLowerCase().includes(validFilter))).length ? null : <NoMatchingTags tag={filter}/>}

          {/* show all gifs with tags matching filter (up to GIF_LIMIT) as GifItem components */}
          {gifs
            .filter((gif) =>
              gif.tags.toLowerCase().includes(validFilter)
            )
            .slice(0,GIF_LIMIT)
            .map((gif) => (
              <GifItem gif={gif} key={gif._id} />
            ))  }
        </div>
    );
};

export default GifsGrid;