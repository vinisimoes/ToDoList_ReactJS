import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

import './TodoList.css';

class TodoList extends React.Component {
    
    constructor() {
        super();
        this.state = todosData;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const uptatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })

            return {
                todos: uptatedTodos
            }
        });
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.todos.map((item) => {
                    return <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
                })}
            </div>
        );
    }
}

export default TodoList;