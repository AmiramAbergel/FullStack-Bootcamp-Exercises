import React, { useRef, useState } from 'react';
import { getFirstToUpper } from '../../utils/getFirstToUpper';

const Nav = (props) => {
    const [text, setText] = useState('');
    const clickHandler = (event) => {
        const input = event.target;
        console.dir(input);
        console.dir(props.h1);
        props.h1.current.textContent = input.textContent;
    };

    const createNav = () => {};

    const insertDepartments = () => {
        return (
            <ul className='nav__ul'>
                {props.departments.map((d) => (
                    <li
                        onClick={clickHandler}
                        className='nav__li'
                        key={d}
                        own={getFirstToUpper(d)}
                    >
                        {getFirstToUpper(d)}
                    </li>
                ))}
            </ul>
        );
    };
    return <nav className='nav'>{insertDepartments()}</nav>;
};

export default Nav;
