import React, { useState } from "react";

const DataMassaging = (props) => {
    // const [messege, setMessege] = useState(props.items);
    const db = props.items;
    const arrToJsx = db.map((messege) => {
        // return <li key={messege["favoriteFoods"].fish}> {messege.name}</li>;
        return messege.name;
    });
    const traverseObj = (data) => {
        const obj90sArr = [];
        const conditionYear = 1990;
        db.forEach((element) => {
            if (parseInt(element.birthday.split("-")[2]) < conditionYear) {
                obj90sArr.push(element);
            }
        });
        return obj90sArr;
    };
    console.log(traverseObj(db));
    return arrToJsx;
};

export default DataMassaging;
