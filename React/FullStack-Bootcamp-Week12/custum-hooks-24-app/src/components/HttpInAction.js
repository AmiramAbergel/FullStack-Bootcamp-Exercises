import React, { useCallback, useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
const HttpInAction = () => {
    const [shoe, setShoe] = useState([]);

    const httpData = useHttp();

    const { isLoading, error, sendRequest: fetchShoes } = httpData;

    useEffect(() => {
        const transformShoes = (shoeObj) => {
            const loadedShoes = [];

            for (const shoeKey in shoeObj) {
                loadedShoes.push({
                    id: shoeKey,
                    brand: shoeObj[shoeKey].brand,
                });
            }
            setShoe(loadedShoes);
        };
        fetchShoes(
            {
                url: 'https://637631bab5f0e1eb8505360f.mockapi.io/shoes',
            },
            transformShoes
        );
    }, [fetchShoes]);

    return (
        <div>
            {shoe.map((item) => (
                <h1 key={item.id}>{item.brand}</h1>
            ))}
        </div>
    );
};

export default HttpInAction;
