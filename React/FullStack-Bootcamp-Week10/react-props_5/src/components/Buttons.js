import React from "react";

const Buttons = (props) => {
    const func = () => {
        return props.myKey;
    };
    return (
        <div>
            <button style={{ fontWeight: props.weight }}>{func()}</button>
        </div>
    );
};

export default Buttons;
