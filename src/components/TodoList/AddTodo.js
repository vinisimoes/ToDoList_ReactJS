import React from 'react';
import addIcon from '../../assets/add.svg';
import './AddTodo.css';

class AddTodo extends React.Component {

  constructor() {
    super();
    this.state = {
      newTask: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  clearText() {
    this.setState({
      newTask: ''
    });
  }

  render() {
    return (
      <div className="add-todo-item">
        <input type="text" placeholder="Insert Todo" onChange={this.handleTextChange} value={this.state.newTask}></input>
        <img className="add-icon" src={addIcon} alt="add todo item" onClick={() => {this.clearText(); this.props.handleInsertItem(this.state.newTask)}}></img>
      </div>
    );
  }
}

export default AddTodo;