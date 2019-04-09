import React from "react";
import { connect } from 'react-redux'
import {completed} from '../actions'

const Todos = props =>{

const toggleComplete = id =>{
const newArray = props.todos.map (todo =>{
 if (id===todo.id){
     todo.completed=!todo.completed
     return todo;
  } else{
      return todo;
 }
})
props.completed(newArray)
}


return(
    <div className={`todo${props.todo.completed ? " completed": null}`}>
    <ul  onClick={() => toggleComplete(props.todo.id)}> {props.todo.value}</ul>
    </div>
    )
}

const mapStateToProps = state => {
    return {
    todos: state.todos
    }
  }
  export default connect(mapStateToProps, {completed})(Todos);