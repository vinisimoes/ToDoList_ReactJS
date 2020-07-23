import React from 'react';
import trashImg from '../../assets/trash.svg'
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
            <img className="trash-can" src={trashImg} alt="trash can" onClick={() => props.handleDeleteItem(props.item.id)}></img>
        </div>
    );
}

export default TodoItem;