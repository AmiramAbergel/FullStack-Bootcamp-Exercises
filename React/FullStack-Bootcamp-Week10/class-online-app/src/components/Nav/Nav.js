import React from 'react';
import { getFirstToUpper } from '../../utils/carObj.utils';
import './Nav.css';
function Nav({ departments, someFunc }) {
  const insertDepartments = () => {
    return (
      <ul className='nav__ul'>
        {departments.map((d) => (
          <li
            onClick={(e) => {
              someFunc(d);
            }}
            className='nav__li'
            key={d}
          >
            {getFirstToUpper(d)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <nav className='nav'>
      <h2 onClick={() => someFunc(null)}>Car Market</h2>
      {insertDepartments()}
    </nav>
  );
}

export default Nav;
