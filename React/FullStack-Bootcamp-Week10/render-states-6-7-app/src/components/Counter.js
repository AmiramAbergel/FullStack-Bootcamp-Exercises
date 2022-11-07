import React, { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.counter);

    const clickHandler = () => {
        return setCount(count + 1);
    };
    return (
        <div>
            <button onClick={clickHandler}>increment</button>
            {count}
        </div>
    );
};

export default Counter;
