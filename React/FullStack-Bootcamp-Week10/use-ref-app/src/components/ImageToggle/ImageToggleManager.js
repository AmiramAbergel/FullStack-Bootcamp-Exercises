import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import black1 from '../../Img/img1nonColor.jpeg';
import black2 from '../../Img/img2nonColor.jpeg';
import color1 from '../../Img/img1color.jpeg';
import color2 from '../../Img/img2color.jpeg';
const Img = styled.img`
    margin: 50px;
    width: 500px;
    height: 500px;
`;
const ImageToggleManager = () => {
    const [active, setActive] = useState(true);
    const imageRef1 = useRef();
    const imageRef2 = useRef();

    const changeImg = (event) => {
        const input = event.target;
        const img1Control = imageRef1.current;
        const img2Control = imageRef2.current;
        console.dir(img1Control);
        if (input.alt === 'black1') {
            if (active) {
                setActive((prev) => !prev);
                img1Control.src = color1;
            } else {
                setActive((prev) => !prev);
                img1Control.src = black1;
            }
        } else {
            if (active) {
                setActive((prev) => !prev);
                img2Control.src = color2;
            } else {
                setActive((prev) => !prev);
                img2Control.src = black2;
            }
        }
    };

    return (
        <div>
            <Img
                onMouseEnter={changeImg}
                onMouseLeave={changeImg}
                ref={imageRef1}
                src={black1}
                alt='black1'
                active={active}
            />
            <Img
                onMouseEnter={changeImg}
                onMouseLeave={changeImg}
                ref={imageRef2}
                src={black2}
                alt='black2'
                active={active}
            />
        </div>
    );
};

export default ImageToggleManager;
