import React from 'react';
import cutesy from 'styled-components';

const CoolDiv = cutesy.div`
    color: black;
    background-color: brown;
    font-weight: bold;
    font-style: italic;
    border: 0.2rem solid black;
    border-radius: 0.5rem;
    margin: 0.3rem;
    width: 20%;
`;

const Character = ({ name, gender }) => {
    return <CoolDiv>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>

    </CoolDiv>
};


export default Character;