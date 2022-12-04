import { useState } from 'react';

export default function ListItem({ itemData }) {
    const [item, setItem] = useState(itemData);
    console.log(item);
    return <div>{item}</div>;
}
