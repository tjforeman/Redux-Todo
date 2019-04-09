import React from 'react';
import { connect } from 'react-redux'
import Todos from "./Todos";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todos todo={todo} key={todo.id}/>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos:state.todos
  }
}
export default connect(mapStateToProps)(TodoList);