import React, { useState } from "react";

const DataMassaging = (props) => {
    // const [messege, setMessege] = useState(props.items);
    const db = props.items;
    const arrToJsx = db.map((messege) => {
        // return <li key={messege["favoriteFoods"].fish}> {messege.name}</li>;

        return messege.name;
    });
    console.log(arrToJsx);
    return arrToJsx;
};

export default DataMassaging;
