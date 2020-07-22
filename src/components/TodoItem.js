import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    function getPClassName() {
        if (props.item.completed) {
            return "completed";
        }
        return "";
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
            <p className={getPClassName()}>{props.item.task}</p>
        </div>
    );
}

export default TodoItem;