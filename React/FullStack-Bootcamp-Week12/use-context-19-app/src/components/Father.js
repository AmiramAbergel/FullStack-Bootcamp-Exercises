import React, { useEffect } from 'react';
import { useDisplayContext } from './display-context';
import Son from './Son';

const Father = () => {
    const [, setGiftsArr] = useDisplayContext();

    useEffect(() => setGiftsArr(['1', '2', '3']), [setGiftsArr]);
    return (
        <div>
            <h1>Father</h1>
            <Son></Son>
        </div>
    );
};

export default Father;
