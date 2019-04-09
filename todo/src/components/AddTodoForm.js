import React from 'react'
import { connect } from "react-redux";
import {changeTodo,} from '../actions'

class AddTodoForm extends React.Component{
    state={
        todo:""
    };

    changeHandler = e => {
    this.setState({newtodo: e.target.value});
      }

    addTodo = e => {
    e.preventDefault()
    this.props.changeTodo(this.state.newtodo);
    this.setState({newtodo: ""})
    };
    
        
    
    render(){
        return(
            <div className='todo-container'>
            <input  name='todo' type='text' placeholder='todo' onChange={this.changeHandler} value={this.newtodo}></input>
            <button onClick={this.addTodo} >Add a Task</button>
            <p>{this.todo}</p>
            </div>
        )
    }
}

const MapStateToProps = state=>{
    return{
        TodoOnProps:state.todo,
        newtodo:state.newtodo
    }
}


export default connect(MapStateToProps,{changeTodo})(AddTodoForm)