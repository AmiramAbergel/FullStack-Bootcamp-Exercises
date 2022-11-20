import React from 'react';

class SimpleTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: 'CSS', completed: true },
                { name: 'JavaScript', completed: true },
                { name: 'Learn React', completed: false },
                { name: 'Learn mongoDB', completed: false },
                { name: 'Learn Node JS', completed: false },
            ],
        };
    }

    clickHandler = (event) => {
        console.log(event.target.checked);
        this.setState((prev) => {
            return (prev.data.find(
                (item) => item.name === event.target.id
            ).completed = !event.target.checked);
        });
    };

    mapData() {
        const arr = this.state.data;

        const res = arr.map((item) => {
            return (
                <li
                    onClick={this.clickHandler}
                    id={item.name}
                    checked={item.completed}
                    key={item.name}
                >
                    {item.name} - {item.completed === true ? 'v' : 'x'}
                </li>
            );
        });
        return res;
    }

    render() {
        return (
            <ul style={{ listStyleType: 'none' }}>
                {this.mapData.bind(this)()}
            </ul>
        );
    }
}

export default SimpleTodo;
