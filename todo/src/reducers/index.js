import { CHANGE_TODO,COMPLETE,DELETE_TODO } from '../actions/index'

const initialState = {
  todos: [
    {
      id: 1,
      value: "Clean Garage",
      completed: false
    }
  ]

}
const reducer = (state = initialState, action) => {

  switch(action.type) {
    case CHANGE_TODO:
      return { ...state, todos: state.todos.concat(action.payload)}
      case COMPLETE:
      return {...state, todos: action.payload}
      case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
    default:
      return state

  }

}

export default reducer;