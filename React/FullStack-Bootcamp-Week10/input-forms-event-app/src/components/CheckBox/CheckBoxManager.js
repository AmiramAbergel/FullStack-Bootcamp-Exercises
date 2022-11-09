import React, { useState } from 'react';
import CheckBox from './CheckBox';
import styled from 'styled-components';
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CheckBoxManager = () => {
    return (
        <Div>
            <p>
                <CheckBox name='box1' check={false} />
                <label htmlFor='box1'>I read the term of the app</label>
            </p>
            <p>
                <CheckBox name='box2' check={false} />
                <label htmlFor='box2'>I accept the term of the app</label>
            </p>
            <p>
                <CheckBox name='box3' check={true} />
                <label htmlFor='box3'>
                    I want to get the weekly news letter
                </label>
            </p>
            <p>
                <CheckBox name='box4' check={true} />
                <label htmlFor='box4'>I want to get sales and offers</label>
            </p>
        </Div>
    );
};

export default CheckBoxManager;
