import React, { createContext, useContext, useState } from 'react';

export const DisplayContext = createContext({
    giftsArr: [],
    setGiftsArr: null,
});

export const useDisplayContext = () => {
    const ctx = useContext(DisplayContext);
    return [ctx.giftsArr, ctx.setGiftsArr];
};

export const DisplayContextProvider = (props) => {
    const [giftsArr, setGiftsArr] = useState([]);
    return (
        <DisplayContext.Provider value={{ giftsArr, setGiftsArr }}>
            {props.children}
        </DisplayContext.Provider>
    );
};

export default DisplayContextProvider;
