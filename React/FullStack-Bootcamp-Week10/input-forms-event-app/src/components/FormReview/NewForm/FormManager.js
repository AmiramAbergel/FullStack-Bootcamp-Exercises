import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import NewForm from './NewForm';
import FormReview from './FormReview';

const FormManager = (props) => {
    const [formValues, setFormValues] = useState({});
    const [isFormAlive, setIsFormAlive] = useState(true);
    const myRef = useRef(1);
    return (
        <div>
            <input ref={myRef} />
            <button
                onClick={({ target }) => {
                    console.log(myRef.current);
                    console.dir(target);
                }}
            >
                get ref
            </button>
            {isFormAlive && (
                <NewForm
                    setIsFormAlive={setIsFormAlive}
                    setFormValues={setFormValues}
                />
            )}
            {!isFormAlive && (
                <FormReview
                    formValues={formValues}
                    setIsFormAlive={setIsFormAlive}
                />
            )}
        </div>
    );
};

export default FormManager;
