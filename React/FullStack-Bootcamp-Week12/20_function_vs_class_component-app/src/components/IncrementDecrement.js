import React from 'react';

class IncrementDecrement extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }
    onUpdate(num) {
        if (num === 1) {
            this.setState((prev) => {
                if (prev.counter >= 10) {
                    return;
                } else {
                    return { counter: ++prev.counter };
                }
            });
        } else {
            this.setState((prev) => {
                if (prev.counter <= -10) {
                    return;
                } else {
                    return {
                        counter: --prev.counter,
                    };
                }
            });
        }
    }

    changeColor() {
        if (this.state.counter < 0) {
            return 'red';
        } else if (this.state.counter === 0) {
            return 'black';
        } else {
            return 'green';
        }
    }

    counterHandler(event) {
        const input = event.target;
        input.name === 'up' ? this.onUpdate(1) : this.onUpdate(0);
    }

    render() {
        return (
            <div>
                <button onClick={this.counterHandler.bind(this)} name='up'>
                    Up
                </button>

                <button onClick={this.counterHandler.bind(this)} name='down'>
                    Down
                </button>

                <div style={{ background: this.changeColor() }}>
                    <label htmlFor=''>{this.state.counter}</label>
                </div>
            </div>
        );
    }
}

export default IncrementDecrement;
