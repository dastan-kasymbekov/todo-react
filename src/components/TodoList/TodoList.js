import React, {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {

  }, [todos])

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  const addNewItem = () => {
    const todosWithNew = [...todos, {title: newTodo, isDone: false}]
    setTodos(todosWithNew)
    localStorage.setItem('todos', JSON.stringify(todosWithNew))
  }

  const deleteItem = (index) => {
    const filteredList = todos.filter((item, idx) => index !== idx)
    localStorage.setItem('todos', JSON.stringify(filteredList))
    setTodos(filteredList)
  }

  const handlePress = (e) => {
    if (e.code === 'Enter' && newTodo.trim().length) {
      addNewItem()
    }
  }

  const handleDone = (e, index) => {
    const updatedArray = todos.map((item, idx) => {
      if (index === idx) {
        return {...item, isDone: e.target.checked}
      }
      return item
    })
    localStorage.setItem('todos', JSON.stringify(updatedArray))
    setTodos(updatedArray)
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="mt-3">TodoList</h2>
        <span className="mb-2 d-inline-block">Items: {todos.length}</span>
        <input type="text" className="form-control" onChange={handleChange}
               onKeyPress={handlePress}/>
        <button className="btn btn-success w-100 mt-3" onClick={addNewItem}
                disabled={newTodo.trim().length === 0}>
          Add new item
        </button>
        <ul className="list-group mt-5">
          {
            todos.map((item, idx) => (
              <TodoItem key={idx} item={item} index={idx} deleteItem={deleteItem}
                        handleDone={handleDone}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default TodoList;