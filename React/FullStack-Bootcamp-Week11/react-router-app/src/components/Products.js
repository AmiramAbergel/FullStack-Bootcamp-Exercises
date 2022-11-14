import React, { useState } from 'react';
import store from '../store';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: space-evenly;
`;
const Products = (props) => {
    const [dataStore, setDataStore] = useState(store);
    setDataStore();
    props.setData(store);
    const dataHandler = (data) => {
        return data.map((item) => (
            <li key={item.id}>
                <NavLink to={`/products/` + item.id}>{item.title}</NavLink>
            </li>
        ));
    };
    return (
        <div>
            <Ul>{dataHandler(dataStore)}</Ul>
        </div>
    );
};

export default Products;
