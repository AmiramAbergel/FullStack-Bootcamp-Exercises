import React from 'react';
import { useRef } from 'react';
import Nav from './Nav';
import './Nav.css';
function NavBarManager(props) {
    const h1 = useRef();
    return (
        <div>
            <Nav departments={Object.keys(props.data)} h1={h1} />
            <h1 ref={h1}>da</h1>
        </div>
    );
}

export default NavBarManager;
