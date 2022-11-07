import React, { useState } from "react";
import "./HideSeek.css";
const HideSeek = (props) => {
    const title = props.title;

    let [toggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle((tog) => !tog);
    };
    return (
        <div className="container">
            <button onClick={clickHandler}>{title}</button>
            <div
                className="colorContainer"
                style={{ visibility: toggle ? "visible" : "hidden" }}
            ></div>
        </div>
    );
};

export default HideSeek;
