import React from 'react';
import Balloon from './Balloon';
import Child from './Child';

const Mother = (props) => {
    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ];

    return (
        <div className='mother'>
            <h1>A Tale of Five Ball</h1>
            <div className='mother_c'>
                {kids.map((entry) => (
                    <Child>
                        <h3>{entry.name}</h3>
                        <Balloon>{entry.color}</Balloon>
                    </Child>
                ))}
            </div>
        </div>
    );
};

export default Mother;
