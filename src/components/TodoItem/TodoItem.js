import React from 'react';

const TodoItem = ({item, index, deleteItem, handleDone}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input type="checkbox" className="form-check-input" onChange={(e) => handleDone(e, index)}
               checked={item.isDone}/>
        <span className="ms-2">{item.title}</span>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => deleteItem(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;