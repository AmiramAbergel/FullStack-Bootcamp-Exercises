import React, { useState } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const addOne = () => {
        setCounter((prev) => ++prev);
    };

    const removeOne = () => {
        setCounter((prev) => --prev);
    };

    const double = () => {
        setCounter((prev) => prev * 2);
    };

    const divide = () => {
        setCounter((prev) => prev / 2);
    };

    return { counter, addOne, removeOne, double, divide };
};

export default useCounter;
