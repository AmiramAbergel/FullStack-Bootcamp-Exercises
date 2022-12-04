import React, { useEffect } from 'react';
import { useDataContext } from './data-context';
import ListItem from './ListItem/ListItem';
import data from '../assets/data.json';
const List = () => {
    const [item, setItem] = useDataContext();
    useEffect(() => {
        data.map((item) =>
            setItem((prev) => {
                return [...prev, item];
            })
        );
    }, []);
    return (
        <div>
            <ListItem itemData={item} />
        </div>
    );
};

export default List;
