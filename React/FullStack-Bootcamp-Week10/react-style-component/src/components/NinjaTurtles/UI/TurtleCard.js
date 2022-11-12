import React from 'react';
import Button from './Button';

const TurtleCard = (props) => {
    const imgSrc = props.src;
    const toppingsArr = props.toppingArr;
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={imgSrc} alt='' />
            <h3>Toppings:</h3>
            <div>
                {toppingsArr.map((topping) => {
                    return (
                        <Button
                            name={topping.name}
                            img={topping.img}
                            onClick={props.onConfirm}
                        >
                            {topping.name}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default TurtleCard;
