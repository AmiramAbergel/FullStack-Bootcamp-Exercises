import React, { createContext, useContext, useState } from 'react';

export const ColorContext = createContext({});

const ColorContextProvider = (props) => {
    const [isDay, setIsDay] = useState({});
    return (
        <ColorContext.Provider value={{ isDay, setIsDay }}>
            {props.children}
        </ColorContext.Provider>
    );
};

export const useColorContext = () => {
    const ctx = useContext(ColorContext);
    return [ctx.isDay, ctx.setIsDay];
};

export default ColorContextProvider;
