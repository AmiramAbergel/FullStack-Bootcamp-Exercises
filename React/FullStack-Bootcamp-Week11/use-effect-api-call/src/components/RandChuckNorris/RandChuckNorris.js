import React from 'react';
import Joke from './Joke';

const RandChuckNorris = (props) => {
    return (
        <div>
            <ul>
                <Joke value={props.joke} />
            </ul>
        </div>
    );
};

export default RandChuckNorris;
