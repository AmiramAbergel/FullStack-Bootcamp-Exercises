import React from "react";
import styled from "styled-components";

const Box4 = (props) => {
    return (
        <div
            className={`${props.id === 1 ? `box4a` : `box4b`}  `}

            // style={{
            //     backgroundColor: "salmon",
            //     height: "200px",
            //     width: "500px",
            //     position: "absolute",
            //     top: props.id === 1 ? `50px` : `300px`,
            //     left: "50px",
            // }}
        ></div>
    );
};

export default Box4;
