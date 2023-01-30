import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import GifsContext from '../GifsContext';

const GifsFilter = () => {
    const {state: {query, total},
    dispatch} = useContext(GifsContext);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label={`Search ${total} gifs!`} id="fullWidth"
                type="text"
                value={query}
                onChange={(evt) => dispatch({
                    type: 'SET_QUERY',
                    payload: evt.target.value,
                })}/>
        </Box>
    );
};

export default GifsFilter;