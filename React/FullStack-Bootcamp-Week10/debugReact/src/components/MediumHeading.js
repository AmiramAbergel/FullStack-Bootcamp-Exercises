import React from 'react';

const MediumHeading = (props) => {
    console.dir(props.action);
    return <h1 onClick={props.action}>{props.text}</h1>;
};

export default MediumHeading;
