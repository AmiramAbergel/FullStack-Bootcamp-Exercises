import React, { useState } from 'react';

const CheckBox = (props) => {
    const [check, setCheck] = useState(props.check);
    const changeHandler = () => {
        return setCheck((prev) => !prev);
    };
    return (
        <>
            <input type='checkbox' checked={check} onChange={changeHandler} />
        </>
    );
};

export default CheckBox;
