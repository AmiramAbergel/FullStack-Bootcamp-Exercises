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

    mapData() {
        const arr = this.state.data;
        return arr.map((item) => {
            return <li>{item.name}</li>;
        });
    }

    render() {
        return <ul style={{ listStyleType: 'none' }}>{this.mapData()}</ul>;
    }
}

export default SimpleTodo;
