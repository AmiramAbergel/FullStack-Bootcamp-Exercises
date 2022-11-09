import React from 'react';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
            <label htmlFor='age'>Age (Years)</label>
            <input type='age' id='username' />
            <button type='submit'>Add User</button>
        </form>
    );
};

export default AddUser;
