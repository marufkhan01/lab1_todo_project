import React, { useState, useEffect } from 'react'
import "./App.css"
import ToDo from "./components/ToDo"
import TodoForm from "./components/TodoForm"


function App() {

  const [todoPending, setTodoPending] = useState(0)
  const [todos, setTodos] = useState([
    {
      text: "React TODO Project",
      isCompleted: false
    }
  ])
  
  useEffect(() => { 
    setTodoPending(todos.filter(todos => !todos.completed).length) 
  },[todos])
  
  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  
  return(    
    <div className="app">  
      <div className="header"> Todo Status ({todoPending}) </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <ToDo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <div className="create-todo">
          <TodoForm addTodo={addTodo} />
          </div>
        </div>     
    </div>
  ) 
}

export default App