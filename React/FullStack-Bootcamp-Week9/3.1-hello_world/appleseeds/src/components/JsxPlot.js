import React from "react";

export default function JsxPlot() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!";
    return (
        <div>
            <p>
                {data[0][0].toUpperCase() +
                    data[0].slice(1) +
                    " " +
                    data[1][0].toUpperCase() +
                    data[1].slice(1)}
            </p>
            <p>
                {number1}+{number2}={number1 + number2}
            </p>
            <p>The string’s length is {string.length}</p>
        </div>
    );
}
