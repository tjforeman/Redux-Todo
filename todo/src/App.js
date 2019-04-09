import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoList />
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
