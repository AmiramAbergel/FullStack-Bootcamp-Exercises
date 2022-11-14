import React, { useState } from 'react';
import store from '../store';
import styled from '@emotion/styled';
const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: space-evenly;
`;
const Products = () => {
    const [storeData, setStoreData] = useState(store);
    console.log(storeData);
    const dataHandler = (data) => {
        return data.map((item) => <li key={item.id}>{item.title}</li>);
    };
    return (
        <div>
            <Ul>{dataHandler(storeData)}</Ul>
        </div>
    );
};

export default Products;
