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
}

export default SimpleTodo;
