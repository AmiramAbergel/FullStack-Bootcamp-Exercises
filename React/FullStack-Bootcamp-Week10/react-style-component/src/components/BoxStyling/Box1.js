import React from "react";
import styled from "styled-components";
import Box2 from "./Box2";

const Box1 = () => {
    return (
        <div
            className="Box1"
            style={{
                backgroundColor: "green",
                height: "800px",
                width: "800px",
                position: "relative",
            }}
        >
            <Box2 />
        </div>
    );
};

export default Box1;
