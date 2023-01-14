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
    const {filter, filterSet} = useContext(GifsContext);
    return (
    <Input 
        type="text"
        placeholder="Search by tags, ex: 'why'"
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)} />
    );
};

export default GifsFilter;