import React, { createContext, useContext, useState } from 'react';

export const DataContext = createContext([]);

const DataContextProvider = (props) => {
    const [item, setItem] = useState([]);
    return (
        <DataContext.Provider value={[item, setItem]}>
            {props.children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const ctx = useContext(DataContext);
    return [ctx.item, ctx.setItem];
};

export default DataContextProvider;
