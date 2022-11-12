import React from 'react';
import { useState } from 'react';
import './NewForm.css';
import ErrorModal from '../UI/ErrorModal';

const NewForm = (props) => {
    const [formData, setFormData] = useState({
        first: '',
        last: '',
        age: '',
        freeText: '',
    });
    const [error, setError] = useState();
    const handleChange = ({ target }) => {
        const { value, name } = target;
        if (value.trim().length === 0 || value.trim().length === 0) {
            console.log('erre');
            setError({
                title: 'Invalid input',
                message:
                    'Please enter a valid first and last name  (non-empty values)',
            });
            return;
        } else {
            setFormData((prev) => {
                return { ...formData, [name]: value };
            });
        }
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        props.setFormValues(formData);
        props.setIsFormAlive(false);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            <h1>Form</h1>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <form
                className='container'
                onSubmit={submitFormHandler}
                id='userForm'
            >
                <p>
                    <label htmlFor='firstN'>First Name:</label>
                    <input
                        type='text'
                        name='first'
                        id=''
                        onChange={handleChange}
                        value={formData.first}
                    />
                </p>
                <p>
                    <label htmlFor='lastN'>Last Name:</label>
                    <input
                        type='text'
                        name='last'
                        id=''
                        onChange={handleChange}
                        value={formData.last}
                    />
                </p>
                <p>
                    <label htmlFor='userAge'>Age:</label>
                    <select
                        name='userAge'
                        id=''
                        form='userForm'
                        onChange={handleChange}
                        value={formData.age}
                    >
                        <option value='top15'>0-15</option>
                        <option value='top40'>16-40</option>
                        <option value='top80'>Over 40</option>
                    </select>
                </p>
                <p>
                    <label htmlFor='freeText'>Free Text:</label>
                    <input
                        type='text'
                        name='freeText'
                        id=''
                        onChange={handleChange}
                        value={formData.freeText}
                    />
                </p>

                <input onChange={handleChange} type='submit' />
            </form>
        </div>
    );
};

export default NewForm;
