import React from 'react';
import { useDisplayContext } from './display-context';

const Grandson = () => {
    const [giftsArr] = useDisplayContext();
    return (
        <div>
            <h1>Grandson</h1>
            {giftsArr.map((gift, i) => (
                <h1 key={i}>{gift}</h1>
            ))}
        </div>
    );
};

export default Grandson;
