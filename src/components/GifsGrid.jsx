import React, {useContext} from 'react';
import GifsContext from '../GifsContext';
import GifItem from './GifItem';

const NoMatchingTagsFound = ({tag}) => {
  return (
    <div className="no-matching-tags-found">
    No matching tags found for: <br/> '{tag}'
    </div>
  );
}

const GifsGrid = () => {
    const {
      state: {gifs, filter},
    } = useContext(GifsContext);

    const GIF_LIMIT = 18;
    const cleanFilter = filter.toLowerCase().trim();
    // single characters get too many matches, poor UX
    // -> unable to search for gifs with "I" though, for example
    const validFilter = cleanFilter.length > 1 ? cleanFilter : "";
    
    return (
        <div className="gif-grid">
          {gifs.filter((gif) => (gif.tags.toLowerCase().includes(validFilter))).length ? null : <NoMatchingTagsFound tag={filter}/>}

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