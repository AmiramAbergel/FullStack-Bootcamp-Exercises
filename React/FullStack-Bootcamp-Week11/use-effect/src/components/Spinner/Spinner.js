import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const an = keyframes`
100% { transform: rotate(360deg);}
`;

const Loader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${an} 1s linear infinite;
`;
const Spinner = () => {
    return (
        <div>
            <Loader />
        </div>
    );
};

export default Spinner;
