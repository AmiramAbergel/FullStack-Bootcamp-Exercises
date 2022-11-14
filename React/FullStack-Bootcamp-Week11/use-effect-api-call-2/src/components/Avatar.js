import React from 'react';
import styled from '@emotion/styled';

const Li = styled.li`
    margin: 4px;
    flex: 0 1 calc(20% - 8px); /* <-- adjusting for margin */
`;
const Avatar = (props) => {
    return (
        <Li>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
        </Li>
    );
};

export default Avatar;
