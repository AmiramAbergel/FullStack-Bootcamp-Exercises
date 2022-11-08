import React from "react";
import styled from "styled-components";

// const Box4 = (props) => {
//     return (
//         <div
//             className={`${props.id === 1 ? `box4a` : `box4b`}  `}

//             // style={{
//             //     backgroundColor: "salmon",
//             //     height: "200px",
//             //     width: "500px",
//             //     position: "absolute",
//             //     top: props.id === 1 ? `50px` : `300px`,
//             //     left: "50px",
//             // }}
//         ></div>
//     );
// };

const StyledBox4 = styled.div`
    background-color: ${(props) => (props.id === "green" ? "red" : "red")};
    width: 500px;
    height: 200px;
    position: absolute;
    top: ${(props) => (props.id === "green" ? 50 : 300)}px;
    left: 50px;
`;

const Box4 = () => {
    return (
        <div>
            <StyledBox4 id="green"></StyledBox4>
            <StyledBox4></StyledBox4>
        </div>
    );
};

export default Box4;
