import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: ${(props) =>
        props.ownColor === 'blue'
            ? 'blue'
            : props.ownColor === 'red'
            ? 'red'
            : 'yellow'};
    width: 100px;
    height: 100px;
`;

const CustomButton = (props) => {
    const btnHandler = () => {
        return props.setColor(props.btnColor);
    };

    return (
        <div>
            <Btn onClick={btnHandler} ownColor={props.btnColor}>
                {props.btnColor}
            </Btn>
        </div>
    );
};
export default CustomButton;
