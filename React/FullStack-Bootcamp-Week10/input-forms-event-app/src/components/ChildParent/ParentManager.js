import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ParentManager = (props) => {
    const [colorTo, setColorTo] = useState(props.colors);
    return (
        <div>
            {props.colors.map((color) => (
                <CustomButton btnColor={color} setColor={setColorTo} />
            ))}
            <h2>The Color Selected is: {colorTo}</h2>
        </div>
    );
};

export default ParentManager;
