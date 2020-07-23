import React from 'react';
import './App.css';

import Header from './Header/Header';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
