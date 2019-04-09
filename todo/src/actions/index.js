export const CHANGE_TODO= "CHANGE_TODO"
export const COMPLETE = "COMPLETE"

export const changeTodo= newtodo =>{
    console.log(newtodo);
    return{
    type: CHANGE_TODO,
     payload: 
     [{
      id:Date.now(),
      value: newtodo,
      completed: false
      }]
    }
}

export const completed = completedTodo =>{
console.log(completedTodo);
return{
  type:COMPLETE,
  payload: completedTodo
}
}