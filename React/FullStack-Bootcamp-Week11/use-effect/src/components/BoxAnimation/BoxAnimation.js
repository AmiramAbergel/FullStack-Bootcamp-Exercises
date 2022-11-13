import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const an = keyframes`
100% { opacity: 1; transform: translate3d(500px, 0, 0) }
`;

const Box = styled.div`
    width: ${(props) => props.width}px;
    height: 300px;
    background: red;
    animation: ${an} 4s ease forwards;
    margin: 10px;
`;

const BoxAnimation = (props) => {
    const boxCreator = (num) => {
        const res = [];
        for (let i = 0; i < num; i++) {
            const rndInt = Math.floor(Math.random() * 200) + 100;
            const element = <Box key={rndInt} width={rndInt}></Box>;
            res.push(element);
        }
        return [...res];
    };

    const [state, setState] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setState(boxCreator(4));
            setTimeout(() => {
                setState(null);
            }, 4000);
        }, 1000);
    }, []);

    return <div>{state}</div>;
};

export default BoxAnimation;
