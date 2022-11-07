import React, { useState } from "react";
import "./IncrementDecrement.css";

const IncrementDecrement = (props) => {
    const [count, setCount] = useState(props.counter);
    const [color, setColor] = useState("white");

    const incrementHandler = () => {
        setCount((cn) => {
            if (cn < 10) {
                if (props.counter) {
                }
                return cn + 1;
            } else {
                return cn;
            }
        });
        if (count >= 0) {
            setColor("posBn");
        } else if (count === -1) {
            setColor("zeroBn");
        } else {
            setColor("negBn");
        }
    };
    const decrementHandler = () => {
        setCount((cn) => {
            if (cn > -10) {
                return cn - 1;
            } else {
                return cn;
            }
        });
        if (count > 1) {
            setColor("posBn");
        } else if (count === 1) {
            setColor("zeroBn");
        } else {
            setColor("negBn");
        }
    };

    return (
        <div>
            <button onClick={incrementHandler}>increment</button>
            <h2 className={`${color}`}>{count}</h2>
            <button onClick={decrementHandler}>decrement</button>
        </div>
    );
};

export default IncrementDecrement;

// function App() {
//     //let [Counter, setCounter] = useState(3);
//     let [toggle, setToggle] = useState(5);
//     const clickHandler = () => {
//       setToggle((prevState) => prevState < 10 ? prevState + 1 : prevState)
//     }
//     const clickHandler1 = () => {
//       setToggle((prevState) =>  prevState > -10 ? prevState - 1 : prevState)
//     }

//     return (
//       <div className='App'>
//         {/* <button onClick={clickHandler}>increment</button> */}
//         {/* <h2>{Counter}</h2> */}
//         {/* <div className='App1'>
//           <button onClick={clickHandler}>Show / Hide</button>
//           <div className = {toggle ? 'Box' : ''}></div>
//         </div> */}
//         <button onClick={clickHandler}>increment</button>
//         <button onClick={clickHandler1}>decrement</button>
//         <label className={toggle < 0 ? 'red' : (toggle === 0 ? 'black' : 'green')} >{toggle}</label>

//       </div>
//     );
//   }
//   export default App;
