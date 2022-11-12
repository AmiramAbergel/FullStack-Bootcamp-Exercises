import React from 'react';

const FormReview = (props) => {
    const insertFormData = () => {
        const res = [];
        for (let key in props.formValues) {
            res.push(
                <p key={key + props.formValues[key]}>
                    {key}: {props.formValues[key]}
                </p>
            );
        }
        return res;
    };
    return (
        <div>
            {insertFormData()}
            <button onClick={() => props.setIsFormAlive(true)}>Back</button>
            <button>Send Survey</button>
        </div>
    );
};

export default FormReview;
