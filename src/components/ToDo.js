import React from 'react'


function ToDo({todo, index, completeTodo, removeTodo }){

    return(
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>

        </div>
    )
}
export default ToDo