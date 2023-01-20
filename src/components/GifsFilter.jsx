import React, {useContext} from 'react';
import styled from "@emotion/styled";

import GifsContext from '../GifsContext';

const Input = styled.input`
width: 100%;
font-size: large;
padding: 0.2rem;
box-sizing: border-box;
`;

const GifsFilter = () => {
    const {state: {query},
    dispatch} = useContext(GifsContext);

    return (
    <Input 
        type="text"
        placeholder="Search by tags! For example try: why, know, or philip"
        value={query}
        onChange={(evt) => dispatch(
            {
                type: 'SET_QUERY',
                payload: evt.target.value,
            })} />
    );
};

export default GifsFilter;