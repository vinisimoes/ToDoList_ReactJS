import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

import './TodoList.css';

class TodoList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            todos:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleInsertItem = this.handleInsertItem.bind(this);
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

        var completed = 0;
        this.state.todos.forEach(todo => {
            if (todo.id === id)
                completed = todo.completed ? 0 : 1;
        })

        fetch(process.env.REACT_APP_URL_API, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                completed: completed
            })
        }).then(() => {
            fetch(process.env.REACT_APP_URL_API)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        todos: data.todos
                    });
                })
                .catch(error => console.log(error))
        });
    }

    handleDeleteItem(id) {
        fetch(process.env.REACT_APP_URL_API, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id
            })
        }).then(() => {
            fetch(process.env.REACT_APP_URL_API)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        todos: data.todos
                    });
                })
                .catch(error => console.log(error))
        });
    }

    handleInsertItem(task) {
        fetch(process.env.REACT_APP_URL_API, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                task: task
            })
        }).then(() => {
            fetch(process.env.REACT_APP_URL_API)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        todos: data.todos
                    });
                })
                .catch(error => console.log(error))
        });
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_URL_API)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todos: data.todos
                });
            });
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.todos.map((item) => {
                    return <TodoItem key={item.id} item={item} handleChange={this.handleChange} handleDeleteItem={this.handleDeleteItem}/>
                })}
                <AddTodo handleInsertItem={this.handleInsertItem}/>
            </div>
        );
    }
}

export default TodoList;