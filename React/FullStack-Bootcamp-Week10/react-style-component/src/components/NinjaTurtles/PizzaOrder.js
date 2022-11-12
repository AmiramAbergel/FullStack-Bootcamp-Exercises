import React from 'react';
import TurtleCard from './UI/TurtleCard';

const PizzaOrder = (props) => {
    const turtlesArr = props.data;
    console.log(turtlesArr);
    const toppingHandler = () => {};
    return (
        <div>
            <h1>Ninja Turtles</h1>
            <h2>Order Pizza with the turtles</h2>
            {turtlesArr.map((turtle) => (
                <TurtleCard
                    name={turtle.name}
                    src={turtle.img}
                    toppingArr={turtle.pizzaToppings}
                    onConfirm={toppingHandler}
                ></TurtleCard>
            ))}
            <h3>Our order:</h3>
            {toppingHandler()}
        </div>
    );
};

export default PizzaOrder;
