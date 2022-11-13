import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import getRandomColor from '../../getRandomColor';
const Box = styled.div`
    width: 300px;
    height: 300px;
    background: ${(props) => props.color};
    margin: 10px;
`;

const Circle = styled.div`
    width: 300px;
    height: 300px;
    background: ${(props) => props.color};
    border-radius: 50%;
    margin: 10px;
`;

const ChangingBox = () => {
    const [state, setState] = useState(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setTimeout(() => {
            if (count === 5) {
                setState(<Circle color={getRandomColor()}></Circle>);
                setCount(0);
            } else {
                setState(<Box color={getRandomColor()}></Box>);
            }

            setCount((prev) => ++prev);
        }, 500);

        return () => {
            clearTimeout(id);
        };
    }, [state]);

    return <div>{state}</div>;
};

export default ChangingBox;
