import React from 'react';

const Name = (props) => {
    const namesArr = props.names;
    return (
        <ul>
            {namesArr.map((name) => (
                <li>{name}</li>
            ))}
        </ul>
    );
};
export default Name;
