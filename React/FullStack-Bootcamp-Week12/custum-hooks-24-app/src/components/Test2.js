import React from 'react';
import useCounter from '../hooks/use-counter';

const Test2 = () => {
    const { counter, double, divide } = useCounter();
    return (
        <div>
            <h1>double</h1>
            <button onClick={double}>double</button>
            <p>{counter}</p>
            <h1>divide</h1>
            <button onClick={divide}>divide</button>
            <p>{counter}</p>
        </div>
    );
};

export default Test2;
