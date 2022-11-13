import React from 'react';

const Joke = (props) => {
    return (
        <li>
            <h2>Random Joke:</h2>
            <p>{props.value}</p>
        </li>
    );
};

export default Joke;
