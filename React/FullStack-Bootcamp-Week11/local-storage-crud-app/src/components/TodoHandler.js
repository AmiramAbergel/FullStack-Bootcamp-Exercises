import React, { useState } from 'react';
import Item from './Item';

const TodoHandler = () => {
    const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState('');

    const inputHandler = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const onReadItem = () => {
        return todoList.map((item) => {
            return (
                // <CRUDmain
                //     key={Math.random().toString()}
                //     todoTask={item}
                //     onDeleteItem={onDeleteItem}
                //     onUpdateItem={onUpdateItem}
                //     id={item.id}
                // />
                <div key={item.id}>
                    <h3>
                        {item.todo} - {item.done ? 'V' : 'X'}
                    </h3>
                    <div>
                        <button onClick={() => onDeleteItem(item.id)}>
                            Delete
                        </button>
                        <button onClick={() => onUpdateItem(item.id)}>
                            Update Status
                        </button>
                    </div>
                </div>
            );
        });
    };

    const onAddItem = () => {
        const newItem = {
            todo: title,
            id: Math.random().toString(),
            done: false,
        };

        setTodoList((prev) => [...prev, newItem]);
        setTitle('');
        console.log(todoList);
    };

    const onDeleteItem = (id) => {
        setTodoList((prev) => {
            const updatedTodoArr = prev.filter((item) => item.id !== id);
            return updatedTodoArr;
        });
    };

    const onUpdateItem = (id) => {
        setTodoList((prev) => {
            const updatedTodoArr = prev.map((task) => {
                if (task.id !== id) {
                    return task;
                } else {
                    task = { ...task, done: !task.done };
                    return task;
                    // return { todo, id };
                }
            });
            return updatedTodoArr;
        });
    };

    return (
        <div>
            <Item
                onChangeInput={inputHandler}
                task={title}
                onAddItem={onAddItem}
            />
            <div>{onReadItem()}</div>
        </div>
    );
};

export default TodoHandler;
