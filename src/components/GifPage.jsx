import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import GifsContext from '../GifsContext';

const GifPage = () => {
    const {
        state: {gifs},
      } = useContext(GifsContext);
  
  const { id } = useParams();
  let gif = gifs.find(gif => id === gif._id);
  
  return (
    <div>
        <img style={{"maxWidth": "400px"}} src={gif.url} alt={gif.tags} title={gif.tags}></img>
        tags: {gif.tags}
    </div>
  );
};

export default GifPage;
