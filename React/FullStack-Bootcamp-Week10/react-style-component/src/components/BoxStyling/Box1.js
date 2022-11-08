import React from "react";
import styled from "styled-components";
import Box2 from "./Box2";
// import "./Box.css";

// const Box1 = () => {
//     return (
//         <div
//             className="box1"
//             // style={{
//             //     backgroundColor: "green",
//             //     height: "800px",
//             //     width: "800px",
//             //     position: "relative",
//             // }}
//         >
//             <Box2 />
//         </div>
//     );
// };

const Box1 = styled.div`
    background-color: green;
    width: 800px;
    height: 800px;
    position: relative;
`;

export default Box1;
