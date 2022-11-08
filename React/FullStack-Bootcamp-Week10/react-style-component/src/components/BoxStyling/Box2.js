import React from "react";
import styled from "styled-components";
import Box3 from "./Box3";

// const Box2 = () => {
//     return (
//         <div
//             className="box2"
//             // style={{
//             //     backgroundColor: "blue",
//             //     height: "700px",
//             //     width: "700px",
//             //     position: "absolute",
//             //     top: "50px",
//             //     left: "50px",
//             // }}
//         >
//             <Box3 />
//         </div>
//     );
// };

const Box2 = styled.div`
    background-color: blue;
    width: 700px;
    height: 700px;
    position: absolute;
    top: 50px;
    left: 50px;
`;

export default Box2;
