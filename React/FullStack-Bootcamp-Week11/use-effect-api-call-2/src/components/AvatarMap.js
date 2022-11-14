import React from 'react';
import Avatar from './Avatar';
import styled from '@emotion/styled';

const UL = styled.ul`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    list-style-type: none;
`;
const AvatarMap = (props) => {
    return (
        <UL>
            {props.avatars.map((avatar) => (
                <Avatar name={avatar.name} img={avatar.img} />
            ))}
        </UL>
    );
};

export default AvatarMap;
