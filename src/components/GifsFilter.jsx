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
    const {query, setQuery} = useContext(GifsContext);

    return (
    <Input 
        type="text"
        placeholder="Search by tags! For example try: why, know, or philip"
        value={query}
        onChange={(evt) => setQuery(evt.target.value)} />
    );
};

export default GifsFilter;