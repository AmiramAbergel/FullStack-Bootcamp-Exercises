import React from 'react';
import styled from '@emotion/styled';
const Div = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-left: 600px;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Candidate = (props) => {
    return (
        <Div>
            <Div2>
                <label>First name</label>
                <input
                    value={props.first}
                    onChange={props.onChangeInput}
                    placeholder='First Name'
                    id='first'
                ></input>
                <label>last name</label>
                <input
                    value={props.last}
                    onChange={props.onChangeInput}
                    placeholder='Last Name'
                    id='last'
                ></input>
                <label>City</label>
                <input
                    value={props.city}
                    onChange={props.onChangeInput}
                    placeholder='City'
                    id='location'
                ></input>
                <label>Your img</label>
                <input
                    value={props.img}
                    onChange={props.onChangeInput}
                    placeholder='img url'
                    id='img'
                ></input>
            </Div2>
            <button onClick={props.onAddCandidate}>ADD</button>
        </Div>
    );
};

export default Candidate;
