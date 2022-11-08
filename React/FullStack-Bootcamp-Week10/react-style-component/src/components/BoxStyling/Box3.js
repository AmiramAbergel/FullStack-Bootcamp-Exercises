import React from "react";
import styled from "styled-components";
import Box4 from "./Box4";

const Box3 = () => {
    return (
        <div
            className="Box3"
            style={{
                backgroundColor: "pink",
                height: "600px",
                width: "600px",
                position: "absolute",
                top: "50px",
                left: "50px",
            }}
        >
            <Box4 id={1} />
            <Box4 id={2} />
        </div>
    );
};

export default Box3;
