import React from 'react';

const Item = (props) => {
    return (
        <div>
            <div>
                <input
                    placeholder='insert new task...'
                    value={props.task}
                    onChange={props.onChangeInput}
                    id='task'
                ></input>
            </div>
            <button onClick={props.onAddItem}>ADD</button>
        </div>
    );
};

export default Item;
