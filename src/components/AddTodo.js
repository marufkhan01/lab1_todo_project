import React, { useState } from 'react';

  function AddTodo(){
    const[todos, setTodos] = useState([])

  const addtodo = text => {

    const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
  }
  

export default AddTodo

