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

const Character = ({ person }) => {
    return <CoolDiv>
        <p>Name: {person.name}</p>
        <p>Gender: {person.gender}</p>
        <p>Gender: {person.gender}</p>

    </CoolDiv>
};


export default Character;