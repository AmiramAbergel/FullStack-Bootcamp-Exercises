import React from 'react';
import useCounter from '../hooks/use-counter';

const Test1 = () => {
    const { counter, addOne, removeOne } = useCounter();
    return (
        <div>
            <h1>addOne</h1>
            <button onClick={addOne}>addOne</button>
            <p>{counter}</p>
            <h1>removeOne</h1>
            <button onClick={removeOne}>removeOne</button>
            <p>{counter}</p>
        </div>
    );
};

export default Test1;
