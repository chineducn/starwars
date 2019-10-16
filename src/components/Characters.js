import React from 'react';
import Character from './Character';
import cutesy from 'styled-components';

const FlexDiv = cutesy.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const Characters = (props) => {
    // debugger
    const { charactersList } = props;
    return (
        <FlexDiv>
            {charactersList.map(icon =>
                <Character
                    person={icon}
                    key={icon.name}
                />
            )}
        </FlexDiv>
    )
}

export default Characters;