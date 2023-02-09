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
                borderColor: 'transparent',
                '& .MuiFormLabel-root': {
                    color: '#fff',
                  },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#1976d2",
                }
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