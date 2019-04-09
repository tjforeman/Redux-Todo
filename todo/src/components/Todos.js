import React from "react";
import { connect } from 'react-redux'

const Todos = props =>{
return(
    <div>
    <ul> {props.todo.value}</ul>
    </div>
    )
}

const mapStateToProps = state => {
    return {
    todos: state.todos
    }
  }
  export default connect(mapStateToProps, {})(Todos);